const fs = require('fs');
const path = require('path');

const vaultRoot = 'C:\\Users\\29731\\OneDrive\\文档\\Obsidian Vault';
const noteSyncDir = path.join(vaultRoot, '笔记同步助手');
const imagesDir = path.join(noteSyncDir, 'images');

// === Step 1: Analyze each of the 4 files ===
const filesToMove = [
    {
        src: 'Clippings\\笔记软件换了一圈，笔记还是越记越乱.md',
        targetDate: '2026-06-03',
    },
    {
        src: 'Clippings\\终于搞定微信公众号订阅、下载、RSS，让 Agent 替我刷公众号，消息不再错过.md',
        targetDate: '2026-06-05',
    },
    {
        src: 'skills\\QQ邮箱自动转发验证邮件.md',
        targetDate: '2026-06-03',
    },
    {
        src: 'skills\\长期免费使用 Codex 与 Hermes：保姆级配置指南.md',
        targetDate: '2026-06-04',
    }
];

console.log('=== Step 1: Check image references in the 4 files ===');
for (const f of filesToMove) {
    const fullPath = path.join(vaultRoot, f.src);
    if (!fs.existsSync(fullPath)) {
        console.log(f.src + ': FILE NOT FOUND');
        continue;
    }
    const content = fs.readFileSync(fullPath, 'utf-8');
    const wikiImgs = content.match(/!\[\[([^\]]+\.(?:png|jpg|jpeg|gif|bmp|webp|svg))\]\]/gi);
    if (wikiImgs) {
        console.log('\n' + f.src + ' (→ ' + f.targetDate + '):');
        for (const ref of wikiImgs) {
            const cleanRef = ref.replace(/!\[\[/, '').replace(/\]\]/, '').replace(/\|.*$/, '').trim();
            const fullImgPath = path.join(vaultRoot, cleanRef.replace(/\//g, '\\'));
            console.log('  ' + cleanRef + ' ' + (fs.existsSync(fullImgPath) ? 'exists' : 'MISSING'));
        }
    }
}

// === Step 2: Copy missing images from media/ to images/ ===
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

console.log('\n\n=== Step 2: Copy ' + missingImages.length + ' missing images from media/ ===');
let imgCopied = 0;
for (const img of missingImages) {
    const srcPath = path.join(vaultRoot, 'media', img);
    const destPath = path.join(imagesDir, img);
    if (!fs.existsSync(srcPath)) {
        console.log('  SKIP ' + img + ': source not found in media/');
        continue;
    }
    if (fs.existsSync(destPath)) {
        console.log('  SKIP ' + img + ': already exists in images/');
        continue;
    }
    fs.copyFileSync(srcPath, destPath);
    imgCopied++;
    console.log('  COPIED: media/' + img + ' -> images/' + img);
}

// === Step 3: Move the 4 files ===
console.log('\n\n=== Step 3: Move 4 files to date folders ===');
let filesMoved = 0;
for (const f of filesToMove) {
    const srcPath = path.join(vaultRoot, f.src);
    if (!fs.existsSync(srcPath)) {
        console.log('  SKIP ' + f.src + ': file not found');
        continue;
    }
    const destDir = path.join(noteSyncDir, f.targetDate);
    const destPath = path.join(destDir, path.basename(f.src));
    if (fs.existsSync(destPath)) {
        console.log('  SKIP ' + f.src + ': ' + destPath + ' already exists');
        continue;
    }
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(srcPath, destPath);
    fs.unlinkSync(srcPath);
    filesMoved++;
    console.log('  MOVED: ' + f.src + ' -> 笔记同步助手/' + f.targetDate + '/' + path.basename(f.src));
}

console.log('\n\n=== SUMMARY ===');
console.log('Images copied to 笔记同步助手/images/: ' + imgCopied);
console.log('Files moved to date folders: ' + filesMoved);
console.log('\nDone!');
