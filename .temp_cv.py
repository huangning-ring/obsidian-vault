import re

filepath = r"复习/实验诊断学/心血管疾病的实验室诊断 — 考前3天冲刺复习讲义.md"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

lines = content.split("\n")
result = []
h1_removed = False

for line in lines:
    stripped = line.strip()

    # 1. Remove H1 only once (the first heading line)
    if not h1_removed and re.match(r"^#\s+", line):
        h1_removed = True
        continue

    # 2. Remove blank lines and lines that are just ">"
    if stripped == "" or stripped == ">":
        continue

    # 3. Demote headings by 1 level
    m = re.match(r"^(#{2,6})\s+(.*)", line)
    if m:
        hashes = m.group(1)
        text = m.group(2)
        new_level = len(hashes) - 1
        new_hashes = "#" * new_level
        line = f"{new_hashes} {text}"

    result.append(line)

content = "\n".join(result)

# 4. Replace --- with ***
content = re.sub(r"(?m)^---\s*$", "***", content)

# 5. Smart table handling - add blank line before table headers only
lines2 = content.split("\n")
result2 = []
in_table = False
table_header_added = False

for line in lines2:
    is_table_row = line.startswith("|")
    if is_table_row:
        if not in_table:
            in_table = True
            table_header_added = False
            if result2 and result2[-1].strip() != "":
                result2.append("")
        if not table_header_added and "---" in line:
            table_header_added = True
    else:
        if in_table:
            in_table = False
            table_header_added = False
    result2.append(line)

content = "\n".join(result2)

# 6. Fix consecutive callouts
lines3 = content.split("\n")
result3 = []
for line in lines3:
    if re.match(r"> \[!", line):
        if result3 and re.match(r"> ", result3[-1]) and not re.match(r"> \[!", result3[-1]) and result3[-1].strip() != "":
            result3.append("")
    result3.append(line)
content = "\n".join(result3)

# 7. Remove blank lines outside tables, mermaid, and callouts
lines4 = content.split("\n")
result4 = []
in_table = False
in_mermaid = False
in_callout = False

for line in lines4:
    stripped = line.strip()

    if stripped.startswith("```mermaid"):
        in_mermaid = True
        result4.append(line)
        continue
    if stripped == "```" and in_mermaid:
        in_mermaid = False
        result4.append(line)
        continue
    if in_mermaid:
        result4.append(line)
        continue

    if line.startswith("|"):
        if not in_table:
            in_table = True
            if result4 and result4[-1].strip() == "":
                result4.pop()
        result4.append(line)
        continue
    else:
        if in_table:
            in_table = False

    if re.match(r"> \[!", line):
        in_callout = True
    elif line.startswith("> ") and in_callout:
        pass
    elif stripped == "" and in_callout:
        continue
    elif in_callout and stripped != "" and not line.startswith(">"):
        in_callout = False

    if in_callout:
        result4.append(line)
        continue

    if stripped == "":
        continue
    result4.append(line)

content = "\n".join(result4)

# 8. Re-add blank line before tables
lines5 = content.split("\n")
result5 = []
in_table = False
for line in lines5:
    if line.startswith("|"):
        if not in_table:
            in_table = True
            if result5 and result5[-1].strip() != "":
                result5.append("")
        result5.append(line)
    else:
        if in_table:
            in_table = False
        result5.append(line)
content = "\n".join(result5)

# 9. Fix callout spacing again
lines6 = content.split("\n")
result6 = []
for line in lines6:
    if re.match(r"> \[!", line):
        if result6 and re.match(r"> ", result6[-1]) and not re.match(r"> \[!", result6[-1]) and result6[-1].strip() != "":
            result6.append("")
    result6.append(line)
content = "\n".join(result6)

# 10. Add *** after each callout block
lines7 = content.split("\n")
result7 = []
i = 0
while i < len(lines7):
    line = lines7[i]
    if re.match(r"> \[!", line):
        callout_lines = []
        while i < len(lines7):
            cur = lines7[i]
            if cur.startswith("> "):
                callout_lines.append(cur)
                i += 1
            elif cur.strip() == "" and i + 1 < len(lines7) and lines7[i + 1].startswith("> "):
                callout_lines.append(cur)
                i += 1
            else:
                break
        while callout_lines and callout_lines[-1].strip() == "":
            callout_lines.pop()
        for cl in callout_lines:
            result7.append(cl)
        if i < len(lines7) and lines7[i].strip() == "***":
            result7.append(lines7[i])
            i += 1
        else:
            result7.append("***")
        continue
    result7.append(line)
    i += 1

content = "\n".join(result7)

# 11. Fix literal \n in mermaid
lines8 = content.split("\n")
result8 = []
in_mermaid = False
for line in lines8:
    stripped = line.strip()
    if stripped.startswith("```mermaid"):
        in_mermaid = True
        result8.append(line)
        continue
    if stripped == "```" and in_mermaid:
        in_mermaid = False
        result8.append(line)
        continue
    if in_mermaid:
        line = line.replace("\\n", "\n")
        parts = line.split("\n")
        for part in parts:
            result8.append(part)
        continue
    result8.append(line)
content = "\n".join(result8)

# 12. Re-add blank line before tables
lines9 = content.split("\n")
result9 = []
in_table = False
for line in lines9:
    if line.startswith("|"):
        if not in_table:
            in_table = True
            if result9 and result9[-1].strip() != "":
                result9.append("")
        result9.append(line)
    else:
        if in_table:
            in_table = False
        result9.append(line)
content = "\n".join(result9)

# 13. Fix callout spacing one more time
lines10 = content.split("\n")
result10 = []
for line in lines10:
    if re.match(r"> \[!", line):
        if result10 and re.match(r"> ", result10[-1]) and not re.match(r"> \[!", result10[-1]) and result10[-1].strip() != "":
            result10.append("")
    result10.append(line)
content = "\n".join(result10)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

# Verify
with open(filepath, "r", encoding="utf-8") as f:
    final = f.read()
flines = final.split("\n")
blanks = [i+1 for i, l in enumerate(flines) if l.strip() == "" or l.strip() == ">"]
h1s = [i+1 for i, l in enumerate(flines) if re.match(r"^#\s+", l)]
print(f"Total lines: {len(flines)}")
print(f"Blank/just-> lines: {len(blanks)}, positions: {blanks}")
print(f"H1 lines: {h1s}")
print("First 12 lines:")
for i in range(min(12, len(flines))):
    print(f"  {i+1}: [{flines[i][:70]}]")
print("Done")
