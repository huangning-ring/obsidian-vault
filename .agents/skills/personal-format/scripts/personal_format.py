#!/usr/bin/env python3
"""
个性化格式（Personal Format）— Markdown 格式标准化脚本

功能：
1. 去除所有空行（包括引用块内只有 > 的空行）
2. --- 替换为 ***（Obsidian 规范）
3. 表格前保证有空行
4. Callout 后面保证有空行
5. 判断第一个一级标题是否为全篇总览性质，如果是则删除并提升标题级别
6. 修复字面量 \n

用法：
    python personal_format.py <file_or_directory> [--dry-run] [--backup]

参数：
    file_or_directory  要处理的文件或目录
    --dry-run          预览模式，不修改文件
    --backup           修改前创建 .bak 备份
"""

import argparse
import os
import re
import sys
import shutil
from pathlib import Path


def read_file(filepath):
    """读取文件，返回规范化后的字符串内容。"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    # 统一换行符
    content = content.replace('\r\n', '\n').replace('\r', '\n')
    return content


def write_file(filepath, content):
    """写入文件，UTF-8 编码（含 BOM 以兼容 Windows）。"""
    with open(filepath, 'w', encoding='utf-8-sig') as f:
        f.write(content)


def process_content(content):
    """处理单个文件的内容，返回 (新内容, 变更记录)。"""
    lines = content.split('\n')
    changes = []

    # ========== Step 1: --- 替换为 *** (排除 YAML frontmatter) ==========
    # YAML frontmatter 的 --- 出现在文件开头（前5行内），且前后无其他内容
    frontmatter_end = -1
    for i in range(min(5, len(lines))):
        if lines[i].strip() == '---':
            # Check if this is the opening --- of frontmatter
            # (nothing non-empty before it in the first few lines)
            preceding_non_empty = False
            for j in range(i):
                if lines[j].strip():
                    preceding_non_empty = True
                    break
            if not preceding_non_empty:
                # Look for closing ---
                for k in range(i + 1, min(i + 10, len(lines))):
                    if lines[k].strip() == '---':
                        frontmatter_end = k
                        break
                break

    for i in range(len(lines)):
        if i == frontmatter_end:
            continue  # skip closing frontmatter ---
        if i <= frontmatter_end:
            continue  # skip opening frontmatter ---
        if lines[i].strip() == '---':
            lines[i] = '***'
            changes.append(f'Line {i+1}: --- → ***')

    # ========== Step 2: 判断第一个一级标题是否为全篇总览 ==========
    first_h1_idx = None
    first_h1_content = None
    for i in range(len(lines)):
        match = re.match(r'^#\s+(.*)', lines[i])
        if match:
            first_h1_idx = i
            first_h1_content = match.group(1).strip()
            break

    # 判断第一个 H1 是否为全篇总览性质
    overview_keywords = ['全章', '总结', '综述', '概述', '全篇', '复习', '汇总']
    is_overview_h1 = False
    if first_h1_idx is not None:
        for kw in overview_keywords:
            if kw in first_h1_content:
                is_overview_h1 = True
                break
        if not is_overview_h1 and len(first_h1_content) <= 15:
            is_overview_h1 = True

    if is_overview_h1:
        changes.append(f'Line {first_h1_idx+1}: 删除全篇总览 H1: "{first_h1_content}"')
        del lines[first_h1_idx]
        h1_removed = True
    else:
        h1_removed = False

    # ========== Step 3: 提升标题级别（如果删除了第一个 H1）==========
    if h1_removed:
        new_lines = []
        for line in lines:
            m = re.match(r'^(#{1,6})\s+(.*)', line)
            if m:
                current_level = len(m.group(1))
                new_level = '#' * (current_level - 1)
                line = f'{new_level} {m.group(2)}'
                changes.append(f'Title promoted: {m.group(1)} → {new_level}')
            new_lines.append(line)
        lines = new_lines

    # ========== Step 4: 识别结构区域 ==========
    table_blocks = _find_table_blocks(lines)
    mermaid_blocks = _find_code_blocks(lines, '```mermaid', '```')
    code_blocks = _find_code_blocks(lines, '```', '```')
    callout_blocks = _find_callout_blocks(lines)

    # ========== Step 5: 去除所有空行 ==========
    # 保留：mermaid 内部、普通代码块内部
    # Callout 内部：保留非空行，删除只有 > 的空引用行
    # 其他位置的所有空行全部删除
    cleaned = []
    for i, line in enumerate(lines):
        stripped = line.strip()

        # 检查是否是只有 > 的空引用行
        is_empty_callout_line = bool(re.match(r'^>\s*$', line))

        if is_empty_callout_line:
            # 删除：引用块内只有 > 的行
            continue

        blank = bool(re.match(r'^\s*$', line))
        if blank:
            # 保留：mermaid 内部、普通代码块内部
            in_mermaid = any(s <= i <= e for s, e in mermaid_blocks)
            in_code = any(s <= i <= e for s, e in code_blocks)
            if in_mermaid or in_code:
                cleaned.append(line)
            # 其他位置的空白行全部删除
        else:
            cleaned.append(line)

    lines = cleaned

    # ========== Step 6: 确保表格前有空白行 ==========
    # 先找到 cleaned 列表中的表格块范围
    table_start_indices = set()
    ti = 0
    while ti < len(lines):
        if re.match(r'^\|', lines[ti]):
            start = ti
            while ti < len(lines) and re.match(r'^\|', lines[ti]):
                ti += 1
            if ti - start >= 2:
                table_start_indices.add(start)
        else:
            ti += 1

    # 在表格块第一行前插入空行
    final = []
    for i, line in enumerate(lines):
        if i in table_start_indices and final and final[-1].strip() != '':
            final.append('')
            changes.append(f'Inserted blank line before table at line {len(final)}')
        final.append(line)

    lines = final

    # ========== Step 7: 确保 callout 后面有空行 ==========
    # 找到所有 callout 块的结束位置
    callout_ends = {}  # start_index -> end_index
    i = 0
    while i < len(lines):
        if re.match(r'^>', lines[i]):
            start = i
            while i < len(lines) and re.match(r'^>', lines[i]):
                i += 1
            callout_ends[start] = i - 1
        else:
            i += 1

    # 在每个 callout 块结束后插入空行（如果下一行不是空行且不是表格）
    final = []
    for i, line in enumerate(lines):
        final.append(line)
        # 检查是否是 callout 块的最后一行
        for start, end in callout_ends.items():
            if i == end:
                next_i = i + 1
                if next_i < len(lines) and lines[next_i].strip() != '' and not re.match(r'^\|', lines[next_i]):
                    final.append('')
                    changes.append(f'Inserted blank line after callout at line {len(final)-1}')
                break

    lines = final

    # ========== Step 8: 修复字面量 \n ==========
    output = '\n'.join(lines)
    output = output.replace('\\n', '\n')

    return output, changes


def _find_table_blocks(lines):
    """找到所有表格块（连续 >= 2 行的 | 行），返回 (start, end) 列表。"""
    blocks = []
    i = 0
    while i < len(lines):
        if re.match(r'^\|', lines[i]):
            start = i
            while i < len(lines) and re.match(r'^\|', lines[i]):
                i += 1
            if i - start >= 2:
                blocks.append((start, i - 1))
        else:
            i += 1
    return blocks


def _find_code_blocks(lines, start_marker, end_marker):
    """找到所有代码块，返回 (start, end) 列表。"""
    blocks = []
    i = 0
    start_pattern = re.escape(start_marker)
    end_pattern = re.escape(end_marker)
    while i < len(lines):
        if re.match(r'^' + start_pattern, lines[i]):
            start = i
            i += 1
            while i < len(lines) and not re.match(r'^' + end_pattern, lines[i]):
                i += 1
            if i < len(lines):
                i += 1
            blocks.append((start, i - 1))
        else:
            i += 1
    return blocks


def _find_callout_blocks(lines):
    """找到所有 callout 块（连续 > 行），返回 (start, end) 列表。"""
    blocks = []
    i = 0
    while i < len(lines):
        if re.match(r'^>', lines[i]):
            start = i
            while i < len(lines) and re.match(r'^>', lines[i]):
                i += 1
            blocks.append((start, i - 1))
        else:
            i += 1
    return blocks


def process_single_file(filepath, dry_run=False, backup=False):
    """处理单个文件。"""
    try:
        content = read_file(filepath)
    except Exception as e:
        print(f'[ERR] 读取失败 {filepath}: {e}', file=sys.stderr)
        return False

    if not content.strip():
        print(f'[Skip] 跳过空文件: {filepath}')
        return False

    new_content, changes = process_content(content)

    if new_content == content:
        print(f'[OK] {filepath} — 无需更改')
        return True

    if dry_run:
        print(f'[Preview] {filepath} — 将执行 {len(changes)} 项更改:')
        for c in changes[:20]:
            print(f'   {c}')
        if len(changes) > 20:
            print(f'   ... 还有 {len(changes) - 20} 项')
        return True

    # 备份
    if backup:
        backup_path = filepath + '.bak'
        shutil.copy2(filepath, backup_path)
        print(f'[Backup] {backup_path}')

    # 写入
    write_file(filepath, new_content)
    print(f'[OK] {filepath} — {len(changes)} 项更改已应用')
    for c in changes:
        print(f'   {c}')

    return True


def main():
    parser = argparse.ArgumentParser(description='个性化格式 — Markdown 格式标准化')
    parser.add_argument('path', help='要处理的文件或目录')
    parser.add_argument('--dry-run', action='store_true', help='预览模式，不修改文件')
    parser.add_argument('--backup', action='store_true', help='修改前创建 .bak 备份')
    args = parser.parse_args()

    target = Path(args.path)

    if target.is_file():
        process_single_file(str(target), dry_run=args.dry_run, backup=args.backup)
    elif target.is_dir():
        count = 0
        for md_file in target.rglob('*.md'):
            process_single_file(str(md_file), dry_run=args.dry_run, backup=args.backup)
            count += 1
        print(f'\n共处理 {count} 个文件')
    else:
        print(f'❌ 路径不存在: {args.path}', file=sys.stderr)
        sys.exit(1)


if __name__ == '__main__':
    main()
