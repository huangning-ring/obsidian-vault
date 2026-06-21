import re

filepath = r"复习/实验诊断学/Claude肿瘤实验诊断_冲刺讲义.md"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

lines = content.split("\n")
result = []

i = 0
while i < len(lines):
    line = lines[i]
    result.append(line)

    # Check if this line starts a callout block
    if re.match(r"> \[!", line):
        # Collect all lines of this callout block
        callout_lines = [line]
        i += 1
        while i < len(lines):
            next_line = lines[i]
            # Callout continues if it starts with "> " or is a blank line within callout
            if next_line.startswith("> ") or (next_line.strip() == "" and i + 1 < len(lines) and lines[i + 1].startswith(">")):
                callout_lines.append(next_line)
                i += 1
            else:
                break

        # Remove trailing blank lines from the callout
        while callout_lines and callout_lines[-1].strip() == "":
            callout_lines.pop()

        # Now append the callout lines + *** separator
        for cl in callout_lines:
            result.append(cl)
        result.append("***")
        continue

    i += 1

content = "\n".join(result)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("Done")
