const fs = require('fs');
let content = fs.readFileSync('复习/实验诊断学/Claude肿瘤实验诊断_冲刺讲义.md', 'utf8');

// Step 1: Replace literal \n with real newlines
content = content.replace(/\\n/g, '\n');

// Step 2: Replace --- with *** (horizontal rules only)
content = content.replace(/(?m)^---\s*$/g, '***');

// Step 3: Smart blank line removal
const lines = content.split('\n');
const result = [];

let inCodeBlock = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();

  // Code block fences
  if (trimmed.match(/^```/)) {
    inCodeBlock = !inCodeBlock;
    result.push(line);
    continue;
  }

  if (inCodeBlock) {
    result.push(line);
    continue;
  }

  // Callout lines: keep as-is (structure)
  if (trimmed.match(/^>\s*\[/)) {
    result.push(line);
    continue;
  }

  // Inside a callout block (indented continuation of > block)
  if (result.length > 0 && result[result.length - 1].match(/^>\s/) && trimmed === '') {
    continue; // skip blank lines inside callouts
  }
  if (result.length > 0 && result[result.length - 1].match(/^>\s/) && !trimmed.startsWith('>')) {
    // We left the callout, fall through
  }
  if (result.length > 0 && result[result.length - 1].match(/^>\s/) && trimmed.startsWith('>')) {
    result.push(line);
    continue;
  }

  // Table rows: keep and ensure blank line before
  if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
    if (result.length > 0 && result[result.length - 1].trim() !== '') {
      result.push('');
    }
    result.push(line);
    continue;
  }

  // Blank line inside a table
  if (result.length > 0 && result[result.length - 1].match(/^\|/) && trimmed === '') {
    continue;
  }

  // Skip all other blank lines
  if (trimmed === '') {
    continue;
  }

  result.push(line);
}

// Final pass: ensure blank line before any table that lacks one
const final = [];
for (let i = 0; i < result.length; i++) {
  const line = result[i];
  const trimmed = line.trim();
  if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
    if (final.length > 0 && final[final.length - 1].trim() !== '') {
      final.push('');
    }
  }
  final.push(line);
}

// Remove trailing blank lines
while (final.length > 0 && final[final.length - 1].trim() === '') {
  final.pop();
}

content = final.join('\n');
fs.writeFileSync('复习/实验诊断学/Claude肿瘤实验诊断_冲刺讲义.md', content, 'utf8');
console.log('Done. Lines before:', lines.length, 'after:', final.length);
