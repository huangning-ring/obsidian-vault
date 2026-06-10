const fs = require('fs');
const path = require('path');

const vaultRoot = 'C:\\Users\\29731\\OneDrive\\文档\\Obsidian Vault';

// Exclude patterns
const excludeDirs = ['node_modules', '.git', '.obsidian', '_scripts'];

// Collect all .md files in vault (excluding system dirs)
function walk(dir, baseLen) {
    const result = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (!entry.name || entry.name.startsWith('.')) continue;
        if (excludeDirs.includes(entry.name)) continue;
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            result.push(...walk(fullPath, baseLen));
        } else if (entry.isFile() && entry.name.endsWith('.md')) {
            result.push(fullPath);
        }
    }
    return result;
}

console.log('Scanning all .md files in vault...');
const mdFiles = walk(vaultRoot, vaultRoot.length + 1);
console.log(`Total .md files: ${mdFiles.length}`);

// Search for 笔记同步助手 in frontmatter tags and content
const matched = [];
for (const file of mdFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    const relPath = file.substring(vaultRoot.length + 1);

    // Search for tag in frontmatter: tags: [..., 笔记同步助手, ...] or tags: 笔记同步助手
    // Also search for inline tag #笔记同步助手
    // Also search for any reference to 笔记同步助手 in content that suggests this note belongs there
    if (content.includes('笔记同步助手')) {
        matched.push({ relPath, fullPath: file });
    }
}

console.log(`\nFiles containing "笔记同步助手": ${matched.length}`);
for (const m of matched) {
    console.log(`  ${m.relPath}`);
}

// Classify: already in 笔记同步助手/ folder vs outside
const alreadyInFolder = matched.filter(m => m.relPath.startsWith('笔记同步助手\\') || m.relPath.startsWith('笔记同步助手/'));
const outsideFolder = matched.filter(m => !(m.relPath.startsWith('笔记同步助手\\') || m.relPath.startsWith('笔记同步助手/')));

console.log(`\n=== Classification ===`);
console.log(`Already in 笔记同步助手/ folder: ${alreadyInFolder.length}`);
console.log(`Outside 笔记同步助手/ folder: ${outsideFolder.length}`);

if (outsideFolder.length > 0) {
    console.log(`\nFiles that need to be moved:`);
    for (const m of outsideFolder) {
        console.log(`  ${m.relPath}`);
    }
}

// Also check for images/media associated with notes in 笔记同步助手 folder
// that might be scattered in media/ or attachments/ elsewhere
const noteSyncFiles = matched.filter(m => m.relPath.startsWith('笔记同步助手'));

// Extract all image references from these notes
const allImageRefs = new Set();
for (const m of noteSyncFiles) {
    const content = fs.readFileSync(m.fullPath, 'utf-8');
    // Match ![[path/to/image.ext]] or ![[image.ext]]
    const wikiImgRe = /!\[\[([^\]]+\.(?:png|jpg|jpeg|gif|bmp|webp|svg))\]\]/gi;
    let match;
    while ((match = wikiImgRe.exec(content)) !== null) {
        allImageRefs.add(match[1].replace(/\|.*$/, '').trim());
    }
    // Match ![alt](path/to/image.ext)
    const mdImgRe = /!\[.*?\]\(([^)]+\.(?:png|jpg|jpeg|gif|bmp|webp|svg))\)/gi;
    while ((match = mdImgRe.exec(content)) !== null) {
        allImageRefs.add(match[1].trim());
    }
}

console.log(`\nTotal unique image references in 笔记同步助手 notes: ${allImageRefs.size}`);
for (const ref of allImageRefs) {
    // Check if the image exists in the vault
    const imgPath = path.join(vaultRoot, ref.replace(/\//g, '\\'));
    console.log(`  ${ref} ${fs.existsSync(imgPath) ? '✅' : '❌ MISSING'}`);
}

// Save results for later use
fs.writeFileSync(path.join(vaultRoot, '_scripts', 'tag_scan.json'), JSON.stringify({
    totalMdFiles: mdFiles.length,
    filesWithTag: matched.length,
    alreadyInFolder: alreadyInFolder.length,
    outsideFolder: outsideFolder.map(m => m.relPath),
    imageRefs: [...allImageRefs]
}, null, 2), 'utf-8');

console.log(`\nResults saved to _scripts/tag_scan.json`);
