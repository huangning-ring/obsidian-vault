const fs = require('fs');
const path = require('path');

const vaultRoot = 'C:\\Users\\29731\\OneDrive\\文档\\Obsidian Vault';
const backupRoot = 'D:\\VaultBackup\\2026-06-08';

// === Task 1: Copy 10 missing images from backup ===
const imagesDir = path.join(vaultRoot, '笔记同步助手', 'images');
const missingImages = [
    'ee5bebeeccc2c6b626a0ed9452b58796_MD5.png',
    'cbdebdb6b57fb4f960ca08a10ae85bcb_MD5.png',
    'fa13ef73a752b3a9874ef91313ae1e01_MD5.png',
    '74952bd803439bea20174fc93db8a48d_MD5.png',
    '7594bcde162ccb21f3588653ca25b9e9_MD5.png',
    'eb116ce0ec81a059cfe9dce1cf7c05eb_MD5.png',
    'c3a3190e0b023709bca92e2609a18626_MD5.png',
    '48a2220fe7f63f02bf00a0607708494d_MD5.png',
    '07087cd721501f3eeb752fa9a92915f2_MD5.png',
    '280a83d2569f1c61d0fbfb815f406ff3_MD5.png'
];

console.log('=== Task 1: Copy missing images from backup ===');
let copied = 0;
for (const img of missingImages) {
    const src = path.join(backupRoot, 'media', img);
    const dest = path.join(imagesDir, img);
    if (!fs.existsSync(src)) {
        console.log('  NOT IN BACKUP: ' + img);
        continue;
    }
    if (fs.existsSync(dest)) {
        console.log('  EXISTS: ' + img);
        continue;
    }
    fs.copyFileSync(src, dest);
    copied++;
    console.log('  COPIED: ' + img);
}
console.log('  Total copied: ' + copied);

// === Task 2: Move bilibili file ===
console.log('\n=== Task 2: Move clippings+bilibili file ===');
const srcFile = path.join(vaultRoot, 'skills', '2026-06-04-Obsidian+AI 知识库搭建，把 claude code 和 DeepSeek 装进来.md');
const destDir = path.join(vaultRoot, 'Clippings', 'Bilibili');
const destFile = path.join(destDir, '2026-06-04-Obsidian+AI 知识库搭建，把 claude code 和 DeepSeek 装进来.md');

if (fs.existsSync(srcFile)) {
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }
    if (fs.existsSync(destFile)) {
        console.log('  EXISTS at destination, deleting source');
        fs.unlinkSync(srcFile);
    } else {
        fs.copyFileSync(srcFile, destFile);
        fs.unlinkSync(srcFile);
        console.log('  MOVED to Clippings/Bilibili/');
    }
} else {
    console.log('  Source file not found');
}

// === Task 3: Check image references in the bilibili file ===
console.log('\n=== Task 3: Image references in bilibili file ===');
if (fs.existsSync(destFile)) {
    const content = fs.readFileSync(destFile, 'utf-8');
    const wikiImgs = content.match(/!\[\[([^\]]+\.(?:png|jpg|jpeg|gif|bmp|webp|svg))\]\]/gi);
    const mdImgs = content.match(/!\[.*?\]\(([^)]+\.(?:png|jpg|jpeg|gif|bmp|webp|svg))\)/gi);
    if (wikiImgs) {
        for (const ref of wikiImgs) {
            const cleanRef = ref.replace(/!\[\[/, '').replace(/\]\]/, '').replace(/\|.*$/, '').trim();
            const fullPath = path.join(vaultRoot, cleanRef.replace(/\//g, '\\'));
            console.log('  ' + cleanRef + ' ' + (fs.existsSync(fullPath) ? 'exists' : 'MISSING'));
        }
    } else {
        console.log('  No wiki image references found');
    }
}

// === Task 4: Final verification - any remaining 笔记同步助手 files outside the folder? ===
console.log('\n=== Task 4: Verification ===');
const excludeDirs = new Set(['node_modules', '.git', '.obsidian', '_scripts', '.claude', '.claudian']);
let outsideCount = 0;

function walk(dir) {
    try {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const e of entries) {
            if (e.name.startsWith('.') || excludeDirs.has(e.name)) continue;
            const fp = path.join(dir, e.name);
            const rel = fp.substring(vaultRoot.length + 1);
            if (e.isDirectory() && !rel.startsWith('笔记同步助手\\') && !rel.startsWith('笔记同步助手/')) {
                walk(fp);
            } else if (e.isFile()) {
                const ext = path.extname(e.name).toLowerCase();
                if (!['.md', '.canvas'].includes(ext)) continue;
                try {
                    const content = fs.readFileSync(fp, 'utf-8');
                    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
                    if (!fmMatch) continue;
                    const tagsLine = fmMatch[1].match(/^tags:\s*(.+)$/m);
                    if (!tagsLine) continue;
                    const raw = tagsLine[1].trim();
                    let tags = [];
                    if (raw.startsWith('[')) {
                        tags = raw.replace(/[\[\]]/g, '').split(',').map(t => t.trim().replace(/^['"]|['"]$/g, ''));
                    } else if (raw.startsWith('-')) {
                        const items = fmMatch[1].match(/^\s*-\s+(.+)$/gm);
                        if (items) tags = items.map(l => l.replace(/^\s*-\s+/, '').trim());
                    } else {
                        tags = raw.split(/[,;\s]+/).filter(Boolean);
                    }
                    tags = tags.map(t => t.toLowerCase());
                    if (tags.includes('笔记同步助手')) {
                        console.log('  OUTSIDE: ' + rel + ' [' + tags.join(', ') + ']');
                        outsideCount++;
                    }
                } catch(e) {}
            }
        }
    } catch(e) {}
}
walk(vaultRoot);

if (outsideCount === 0) {
    console.log('  ✓ No 笔记同步助手-tagged files remain outside the folder');
} else {
    console.log('  ✗ ' + outsideCount + ' files still outside');
}

console.log('\n=== DONE ===');
