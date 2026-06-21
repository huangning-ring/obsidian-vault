---
name: personal-format
description: >
  Markdown personal format standardizer — removes excess blank lines, normalizes
  Obsidian rendering, optimizes heading levels. Triggers when the user mentions
  "改个性格式" "标准格式" "个人格式" "格式标准化" "clean up this note" "空行太多",
  or wants to tidy up messy Markdown from web pastes, WeChat sync tools ("笔记同步助手"),
  or imported articles. Not just blank line removal — also normalizes table spacing,
  callout spacing, heading levels, and dividers per Obsidian best practices.
---

# Personal Format — Markdown 格式标准化

Removes excess blank lines, normalizes Obsidian rendering, optimizes heading levels.

## Trigger Scenarios

- User says "改个性格式", "标准格式", "个人格式", "格式标准化"
- Notes have too many blank lines or messy formatting
- Markdown from web paste, WeChat sync ("笔记同步助手"), or imports needs cleanup
- "把这篇笔记整理一下格式"

## Processing Steps

Execute in this order:

1. **Normalize line endings**: Convert `\r\n` to `\n`
2. **Replace dividers**: All `---` → `***` (Obsidian spec), excluding YAML frontmatter
3. **Remove overview H1**: If the first level-1 heading (`# `) is a full-article overview (contains keywords like "全章", "总结", "概述", "全篇", "复习", "汇总", or length ≤ 15 chars), delete it. Then promote all heading levels by one (`##` → `#`, `###` → `##`, etc.)
4. **Remove all blank lines**:
   - Delete all blank/whitespace-only lines
   - Delete empty callout lines (lines that are just `>` or `> `)
   - Preserve blank lines inside mermaid code blocks
   - Preserve blank lines inside regular code blocks
5. **Ensure blank line before tables**: Each table block (2+ consecutive `|` rows) must have exactly one blank line before it
6. **Ensure blank line after callouts**: Each callout block (consecutive `>` rows) must have exactly one blank line after it (unless followed by a table)
7. **Fix literal `\n`**: Replace escaped `\n` sequences with real newlines

## Calling the Script

Use the bundled Python script `scripts/personal_format.py`:

```bash
# Single file
python scripts/personal_format.py "note.md"

# With backup
python scripts/personal_format.py "note.md" --backup

# Preview mode (no file changes)
python scripts/personal_format.py "note.md" --dry-run

# Recursive directory
python scripts/personal_format.py "notes/" --backup
```

## Example

```
# Before (messy):


> Blockquote


---

| Table | Data |
|-------|------|
| A     | B    |

> [!NOTE] A callout


# After (clean):

> Blockquote
***
| Table | Data |
|-------|------|
| A     | B    |
> [!NOTE] A callout
```
