const fs = require('fs');
const path = require('path');

const vaultRoot = 'C:\\Users\\29731\\OneDrive\\文档\\Obsidian Vault';
const noteSyncDir = path.join(vaultRoot, '笔记同步助手');
const excludeDirs = ['node_modules', '.git', '.obsidian', '_scripts'];

// === Scan 1: ALL files containing "笔记同步助手" text ===
console.log('=== SCAN 1: ALL files containing "笔记同步助手" ===');
let remainingOutside = [];

function walkAllFiles(dir) {
    const result = [];
    try {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            if (entry.name.startsWith('.') || excludeDirs.includes(entry.name)) continue;
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                if (fullPath === noteSyncDir) {
                    // We'll handle the folder separately
                } else {
                    result.push(...walkAllFiles(fullPath));
                }
            } else if (entry.isFile()) {
                const rel = fullPath.substring(vaultRoot.length + 1);
                result.push({ relPath: rel, fullPath: fullPath, name: entry.name });
            }
        }
    } catch(e) { console.error('Walk error:', e.message); }
    return result;
}

const allFiles = walkAllFiles(vaultRoot);
console.log('Total non-笔记同步助手 files scanned: ' + allFiles.length);

// Scan for "笔记同步助手" in text files
const textExts = new Set(['.md', '.txt', '.canvas', '.json', '.yaml', '.yml', '.csv', '.html']);
const tagMatches = [];

for (const f of allFiles) {
    try {
        const ext = path.extname(f.name).toLowerCase();
        if (!textExts.has(ext)) continue;
        const content = fs.readFileSync(f.fullPath, 'utf-8');
        if (content.includes('笔记同步助手')) {
            tagMatches.push(f.relPath);
            // Check if already in the target folder
            if (!f.relPath.startsWith('笔记同步助手\\') && !f.relPath.startsWith('笔记同步助手/')) {
                remainingOutside.push(f.relPath);
            }
        }
    } catch(e) { /* skip binary files */ }
}

console.log('Files containing "笔记同步助手": ' + tagMatches.length);
if (remainingOutside.length === 0) {
    console.log('✓ ALL files are inside 笔记同步助手/ folder');
} else {
    console.log('✗ STILL OUTSIDE:');
    remainingOutside.forEach(f => console.log('  ' + f));
}

// === Scan 2: Check the 4 moved files exist in their new locations ===
console.log('\n=== SCAN 2: Verify moved files exist at destinations ===');
const movedChecks = [
    { expected: '笔记同步助手\\2026-06-03\\笔记软件换了一圈，笔记还是越记越乱.md', source: 'Clippings\\笔记软件换了一圈，笔记还是越记越乱.md' },
    { expected: '笔记同步助手\\2026-06-05\\终于搞定微信公众号订阅、下载、RSS，让 Agent 替我刷公众号，消息不再错过.md', source: 'Clippings\\终于搞定微信公众号订阅、下载、RSS，让 Agent 替我刷公众号，消息不再错过.md' },
    { expected: '笔记同步助手\\2026-06-03\\QQ邮箱自动转发验证邮件.md', source: 'skills\\QQ邮箱自动转发验证邮件.md' },
    { expected: '笔记同步助手\\2026-06-04\\长期免费使用 Codex 与 Hermes：保姆级配置指南.md', source: 'skills\\长期免费使用 Codex 与 Hermes：保姆级配置指南.md' },
];
for (const m of movedChecks) {
    const destFull = path.join(vaultRoot, m.expected);
    const srcFull = path.join(vaultRoot, m.source);
    const destExists = fs.existsSync(destFull);
    const srcGone = !fs.existsSync(srcFull);
    console.log((destExists ? '✓' : '✗') + ' ' + m.expected + ' (destination exists: ' + destExists + ', source gone: ' + srcGone + ')');
}

// === Scan 3: Check all date folders for stray subdirectories ===
console.log('\n=== SCAN 3: Date folder cleanliness check ===');
const dateDirs = fs.readdirSync(noteSyncDir, { withFileTypes: true })
    .filter(e => e.isDirectory() && /^\d{4}-\d{2}-\d{2}$/.test(e.name));
let hasSubdirs = false;
for (const dd of dateDirs) {
    const fullPath = path.join(noteSyncDir, dd.name);
    const subs = fs.readdirSync(fullPath, { withFileTypes: true }).filter(e => e.isDirectory());
    if (subs.length > 0) {
        console.log('✗ ' + dd.name + '/ has subdirectories: ' + subs.map(s => s.name).join(', '));
        hasSubdirs = true;
    }
}
if (!hasSubdirs) console.log('✓ All date folders are flat (no subdirs)');

// === Scan 4: Image count ===
console.log('\n=== SCAN 4: Image integrity check ===');
const imagesDir = path.join(noteSyncDir, 'images');
let imgCount = 0;
if (fs.existsSync(imagesDir)) {
    const imgs = fs.readdirSync(imagesDir);
    imgCount = imgs.length;
    console.log('images/ folder: ' + imgCount + ' files');
} else {
    console.log('✗ images/ folder does not exist!');
}

// === Scan 5: Cross-reference all image references in notes ===
console.log('\n=== SCAN 5: Image reference integrity ===');
const allNotes = walkAllFiles(noteSyncDir).filter(f => f.name.endsWith('.md'));
let totalMissing = 0;
let totalFound = 0;
for (const note of allNotes) {
    const content = fs.readFileSync(note.fullPath, 'utf-8');
    const wikiImgRe = /!\[\[([^\]]+\.(?:png|jpg|jpeg|gif|bmp|webp|svg))\]\]/gi;
    let match;
    while ((match = wikiImgRe.exec(content)) !== null) {
        const ref = match[1].replace(/\|.*$/, '').trim();
        const imgFullPath = path.join(vaultRoot, ref.replace(/\//g, '\\'));
        if (fs.existsSync(imgFullPath)) {
            totalFound++;
        } else {
            totalMissing++;
            console.log('✗ Missing: ' + note.relPath + ' → ' + ref);
        }
    }
}
console.log('Images found: ' + totalFound + ', Missing: ' + totalMissing);

// Summary
console.log('\n========== FINAL SUMMARY ==========');
console.log('Files in 笔记同步助手/ with tag: ' + tagMatches.filter(f => f.startsWith('笔记同步助手')).length);
console.log('Files outside 笔记同步助手/ with tag: ' + remainingOutside.length);
console.log('Date folders: ' + dateDirs.length);
console.log('Images in images/: ' + imgCount);
console.log('Broken image references: ' + totalMissing);
