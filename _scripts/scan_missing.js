const fs = require('fs');
const path = require('path');

const vaultRoot = 'C:\\Users\\29731\\OneDrive\\文档\\Obsidian Vault';
const trashRoot = vaultRoot + '\\.trash';
const excludeDirs = ['node_modules', '.git', '.obsidian', '_scripts', '笔记同步助手'];

// === STEP 1: Read the 4 outside files to determine dates ===
const outsideFiles = [
    'Clippings\\笔记软件换了一圈，笔记还是越记越乱.md',
    'Clippings\\终于搞定微信公众号订阅、下载、RSS，让 Agent 替我刷公众号，消息不再错过.md',
    'skills\\QQ邮箱自动转发验证邮件.md',
    'skills\\长期免费使用 Codex 与 Hermes：保姆级配置指南.md'
];

console.log('=== Outside files content analysis ===');
for (const relPath of outsideFiles) {
    const fullPath = path.join(vaultRoot, relPath);
    if (!fs.existsSync(fullPath)) {
        console.log(`${relPath}: FILE NOT FOUND`);
        continue;
    }
    const content = fs.readFileSync(fullPath, 'utf-8');
    const stat = fs.statSync(fullPath);

    // Extract frontmatter
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    const fm = {};
    if (fmMatch) {
        const fmText = fmMatch[1];
        const dateMatch = fmText.match(/^date:\s*(.+)$/m);
        if (dateMatch) fm.date = dateMatch[1].trim();
        const tagsMatch = fmText.match(/^tags:\s*(.+)$/m);
        if (tagsMatch) fm.tags = tagsMatch[1].trim();
        const createdMatch = fmText.match(/^created:\s*(.+)$/m);
        if (createdMatch) fm.created = createdMatch[1].trim();
    }

    console.log(`\n${relPath}:`);
    console.log(`  Frontmatter: ${JSON.stringify(fm)}`);
    console.log(`  Created: ${stat.birthtime.toISOString().split('T')[0]}`);
    console.log(`  Modified: ${stat.mtime.toISOString().split('T')[0]}`);
    console.log(`  Content snippet: "${content.substring(0, 100).replace(/\n/g, ' ')}..."`);
}

// === STEP 2: Search for missing images ===
const missingImages = [
    '97bf0e83fe08f44ce467f3b89236f9fa_MD5.jpg',
    'e96bbca7ba35be77bc92e053517b823f_MD5.png',
    '23c086b19e523f7b6370b3e14f063c2a_MD5.png',
    '8ca8efa3cde23e3198a22a39e17bda47_MD5.png',
    'bac82bca1312bf1e1ebdcdbca033e90d_MD5.png',
    '277c9163e2120f6abf0bf6bcfbc9b7a1_MD5.png',
    '7766cf53e99a6c4921c5ef482717142a_MD5.png',
    '7c3692cbcac0db64a826f6ef5b13a646_MD5.png',
    'bf0fee47661ed6d59495986d72b95a15_MD5.png',
    '334ff5a3cf77e65e7245a2f4344ff917_MD5.png',
    'ffbf462b3c52687555bb6706eb0181e5_MD5.png',
    '98ceab6374b78ef8ebfc8a6f2c3a45bd_MD5.png'
];

console.log(`\n\n=== Searching for ${missingImages.length} missing images ===`);

// Build vault-wide file index (all files)
console.log('Indexing all vault files...');
const allFiles = {};
function walk(dir, baseLen) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.obsidian' || entry.name === '_scripts') continue;
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            walk(fullPath, baseLen);
        } else if (entry.isFile()) {
            const rel = fullPath.substring(vaultRoot.length + 1);
            const name = entry.name;
            if (!allFiles[name]) allFiles[name] = [];
            allFiles[name].push(rel);
        }
    }
}
walk(vaultRoot);

for (const img of missingImages) {
    if (allFiles[img]) {
        console.log(`  ${img} → Found at: ${allFiles[img].join(', ')}`);
    } else {
        console.log(`  ${img} → NOT FOUND in vault`);

        // Check trash
        const trashPath = path.join(trashRoot, img);
        if (fs.existsSync(trashPath)) {
            console.log(`    (exists in .trash)`);
        }
    }
}

// === STEP 3: Check for any files in 笔记同步助手 that are NOT in a date folder ===
console.log(`\n\n=== Files in 笔记同步助手 root (not in date subdir) ===`);
const noteSyncRoot = path.join(vaultRoot, '笔记同步助手');
const rootEntries = fs.readdirSync(noteSyncRoot, { withFileTypes: true });
for (const e of rootEntries) {
    const fullPath = path.join(noteSyncRoot, e.name);
    if (e.isFile()) {
        console.log(`  ${e.name} (file at root level!)`);
    } else if (e.isDirectory() && !/^\d{4}-\d{2}-\d{2}$/.test(e.name) && e.name !== 'images') {
        console.log(`  ${e.name}/ (non-date directory)`);
    }
}

// Check for any files that might have been restored to wrong location (e.g. directly in root with 笔记同步助手 content)
console.log(`\n\n=== Files containing 笔记同步助手 that might need reorganization ===`);
// We already know the 4 outside files, but let me also check if there are
// files that are in 笔记同步助手/ but NOT in a date subfolder
for (const r of rootEntries) {
    if (r.isFile()) {
        const content = fs.readFileSync(path.join(noteSyncRoot, r.name), 'utf-8');
        if (content.includes('笔记同步助手')) {
            console.log(`  ${r.name} (at root level)`);
        }
    }
}
