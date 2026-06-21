import sys, io, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.path.insert(0, 'C:/Users/29731/.claude/skills/remove-blank-lines-md/scripts')
from personal_format import _find_code_blocks, _find_callout_blocks

content = open('test-personal-format.md', 'r', encoding='utf-8').read()
lines = content.split('\n')

# Step 5
cleaned = []
for i, line in enumerate(lines):
    is_empty_callout = bool(re.match(r'^>\s*$', line))
    if is_empty_callout:
        continue
    blank = bool(re.match(r'^\s*$', line))
    if blank:
        mermaid_blocks = _find_code_blocks(lines, '```mermaid', '```')
        code_blocks = _find_code_blocks(lines, '```', '```')
        in_m = any(s <= i <= e for s, e in mermaid_blocks)
        in_c = any(s <= i <= e for s, e in code_blocks)
        if in_m or in_c:
            cleaned.append(line)
    else:
        cleaned.append(line)

# Find口诀 in cleaned
for i, line in enumerate(cleaned):
    if '口诀1' in line:
        for j in range(max(0,i-1), min(len(cleaned), i+10)):
            print(f'{j}: {repr(cleaned[j][:80])}')
        break
