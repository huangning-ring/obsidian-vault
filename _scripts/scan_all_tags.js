const fs = require('fs');
const path = require('path');

const vaultRoot = 'C:\\Users\\29731\\OneDrive\\文档\\Obsidian Vault';
const desktopMaster = 'C:\\Users\\29731\\OneDrive\\Desktop\\obsidian-vault-master';
const backupRoot = 'D:\\VaultBackup\\2026-06-08';

const excludeDirs = new Set(['node_modules', '.git', '.obsidian', '_scripts', '.claude', '.claudian']);

console.log('Building master & backup file index...');
const masterFiles = {};
function indexDir(index, dir) {
    if (!fs.existsSync(dir)) return;
    function walk(d) {
        try {
            const entries = fs.readdirSync(d, { withFileTypes: true });
            for (const e of entries) {
                if (e.name === 'node_modules' || e.name === '.git' || e.name === '.obsidian') continue;
                const fp = path.join(d, e.name);
                if (e.isDirectory()) walk(fp);
                else if (e.isFile()) {
                    if (!index[e.name]) index[e.name] = [];
                    index[e.name].push(fp);
                }
            }
        } catch(e) {}
    }
    walk(dir);
}
indexDir(masterFiles, desktopMaster);
indexDir(masterFiles, backupRoot);
console.log('Master+Backup indexed: ' + Object.keys(masterFiles).length + ' unique filenames');

function scanVault() {
    const results = { allMdFiles: [], noteSyncTagged: [], clippingTagged: [], bilibiliTagged: [], bothClippingBilibili: [] };
    function walk(dir) {
        try {
            const entries = fs.readdirSync(dir, { withFileTypes: true });
            for (const e of entries) {
                if (e.name.startsWith('.') || excludeDirs.has(e.name)) continue;
                const fp = path.join(dir, e.name);
                const rel = fp.substring(vaultRoot.length + 1);
                if (e.isDirectory()) { walk(fp); }
                else if (e.isFile()) {
                    const ext = path.extname(e.name).toLowerCase();
                    if (!['.md', '.txt', '.canvas'].includes(ext)) continue;
                    try {
                        const content = fs.readFileSync(fp, 'utf-8');
                        const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
                        if (!fmMatch) continue;
                        const fmText = fmMatch[1];
                        const tagsLine = fmText.match(/^tags:\s*(.+)$/m);
                        if (!tagsLine) continue;
                        const tagsRaw = tagsLine[1].trim();
                        let tags = [];
                        if (tagsRaw.startsWith('[')) {
                            tags = tagsRaw.replace(/[\[\]]/g, '').split(',').map(t => t.trim().replace(/^['"]|['"]$/g, ''));
                        } else if (tagsRaw.startsWith('-')) {
                            const listMatch = fmText.match(/^\s*-\s+(.+)$/gm);
                            if (listMatch) tags = listMatch.map(l => l.replace(/^\s*-\s+/, '').trim());
                            else tags = [tagsRaw];
                        } else {
                            tags = tagsRaw.split(/[\s,]+/).filter(Boolean);
                        }
                        tags = tags.map(t => t.toLowerCase());
                        const fi = { relPath: rel, fullPath: fp, tags: [...tags] };
                        if (tags.includes('笔记同步助手')) results.noteSyncTagged.push(fi);
                        if (tags.includes('clipping')) results.clippingTagged.push(fi);
                        if (tags.includes('bilibili')) results.bilibiliTagged.push(fi);
                        if (tags.includes('clipping') && tags.includes('bilibili')) results.bothClippingBilibili.push(fi);
                        results.allMdFiles.push(fi);
                    } catch(e) {}
                }
            }
        } catch(e) {}
    }
    walk(vaultRoot);
    return results;
}

const scan = scanVault();

console.log('\n=== RESULTS ===');
console.log('Files with frontmatter tags: ' + scan.allMdFiles.length);

console.log('\n--- 笔记同步助手 (' + scan.noteSyncTagged.length + ') ---');
for (const f of scan.noteSyncTagged) {
    const inFolder = f.relPath.startsWith('笔记同步助手\\') || f.relPath.startsWith('笔记同步助手/');
    console.log('  ' + (inFolder ? '✓' : '✗') + ' ' + f.relPath + '  [' + f.tags.join(', ') + ']');
}

console.log('\n--- clipping (' + scan.clippingTagged.length + ') ---');
for (const f of scan.clippingTagged) {
    console.log('  ' + f.relPath + '  [' + f.tags.join(', ') + ']');
}

console.log('\n--- bilibili (' + scan.bilibiliTagged.length + ') ---');
for (const f of scan.bilibiliTagged) {
    console.log('  ' + f.relPath + '  [' + f.tags.join(', ') + ']');
}

console.log('\n--- BOTH clipping+bilibili (' + scan.bothClippingBilibili.length + ') ---');
for (const f of scan.bothClippingBilibili) {
    console.log('  ' + f.relPath + '  [' + f.tags.join(', ') + ']');
}

console.log('\n--- Missing image check in master/backup ---');
const missingImages = [
    'ee5bebeeccc2c6b626a0ed9452b58796_MD5.png', 'cbdebdb6b57fb4f960ca08a10ae85bcb_MD5.png',
    'fa13ef73a752b3a9874ef91313ae1e01_MD5.png', '74952bd803439bea20174fc93db8a48d_MD5.png',
    '7594bcde162ccb21f3588653ca25b9e9_MD5.png', 'eb116ce0ec81a059cfe9dce1cf7c05eb_MD5.png',
    'c3a3190e0b023709bca92e2609a18626_MD5.png', '48a2220fe7f63f02bf00a0607708494d_MD5.png',
    '07087cd721501f3eeb752fa9a92915f2_MD5.png', '280a83d2569f1c61d0fbfb815f406ff3_MD5.png'
];
for (const img of missingImages) {
    if (masterFiles[img]) console.log('FOUND: ' + img + ' -> ' + masterFiles[img][0]);
    else console.log('NOT FOUND: ' + img);
}

fs.writeFileSync(path.join(vaultRoot, '_scripts', 'tag_scan_results.json'), JSON.stringify({
    noteSyncTagged: scan.noteSyncTagged.map(f => ({ relPath: f.relPath, tags: f.tags })),
    clippingTagged: scan.clippingTagged.map(f => ({ relPath: f.relPath, tags: f.tags })),
    bilibiliTagged: scan.bilibiliTagged.map(f => ({ relPath: f.relPath, tags: f.tags })),
    bothClippingBilibili: scan.bothClippingBilibili.map(f => ({ relPath: f.relPath, tags: f.tags })),
}, null, 2), 'utf-8');
console.log('\nSaved to _scripts/tag_scan_results.json');
