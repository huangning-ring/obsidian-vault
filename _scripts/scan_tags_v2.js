const fs = require('fs');
const path = require('path');
const vaultRoot = 'C:\\Users\\29731\\OneDrive\\文档\\Obsidian Vault';

const excludeDirs = new Set(['node_modules', '.git', '.obsidian', '_scripts', '.claude', '.claudian']);

const results = {
    noteSyncTagged: [],
    clippingsTagged: [],
    clippingTagged: [],
    bilibiliTagged: [],
    bothClippingsBilibili: [],
    otherTagged: []
};

function walk(dir) {
    try {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const e of entries) {
            if (e.name.startsWith('.') || excludeDirs.has(e.name)) continue;
            const fp = path.join(dir, e.name);
            const rel = fp.substring(vaultRoot.length + 1);
            if (e.isDirectory()) { walk(fp); continue; }
            if (!e.isFile()) continue;
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
                // Try array format: [tag1, tag2]
                if (tagsRaw.startsWith('[')) {
                    tags = tagsRaw.replace(/[\[\]]/g, '').split(',').map(t => t.trim().replace(/^['"]|['"]$/g, ''));
                }
                // Try list format: \n  - tag1\n  - tag2
                else if (tagsRaw.startsWith('-')) {
                    const listItems = fmText.match(/^\s*-\s+(.+)$/gm);
                    if (listItems) tags = listItems.map(l => l.replace(/^\s*-\s+/, '').trim());
                    else tags = [tagsRaw.replace(/^-\s*/, '').trim()];
                }
                // Simple format: tag1, tag2 or tag1 tag2
                else {
                    tags = tagsRaw.split(/[,;\s]+/).filter(Boolean);
                }

                tags = tags.map(t => t.toLowerCase().replace(/^['"]|['"]$/g, ''));

                const fi = { relPath: rel, tags: [...tags] };
                if (tags.includes('笔记同步助手')) results.noteSyncTagged.push(fi);
                if (tags.includes('clippings')) results.clippingsTagged.push(fi);
                if (tags.includes('clipping')) results.clippingTagged.push(fi);
                if (tags.includes('bilibili')) results.bilibiliTagged.push(fi);
                if (tags.includes('clippings') && tags.includes('bilibili')) results.bothClippingsBilibili.push(fi);
                if (tags.includes('clipping') && tags.includes('bilibili')) {
                    // Also count as both if clipping (singular) + bilibili
                }
                results.otherTagged.push(fi);
            } catch(e) {}
        }
    } catch(e) {}
}
walk(vaultRoot);

console.log('=== 笔记同步助手 (' + results.noteSyncTagged.length + ') ===');
for (const f of results.noteSyncTagged) {
    const inFolder = f.relPath.startsWith('笔记同步助手\\') || f.relPath.startsWith('笔记同步助手/');
    console.log('  ' + (inFolder ? '✓' : '✗') + ' ' + f.relPath + '  [' + f.tags.join(', ') + ']');
}

console.log('\n=== clippings tag (' + results.clippingsTagged.length + ') ===');
for (const f of results.clippingsTagged) {
    console.log('  ' + f.relPath + '  [' + f.tags.join(', ') + ']');
}

console.log('\n=== clipping (singular) tag (' + results.clippingTagged.length + ') ===');
for (const f of results.clippingTagged) {
    console.log('  ' + f.relPath + '  [' + f.tags.join(', ') + ']');
}

console.log('\n=== bilibili tag (' + results.bilibiliTagged.length + ') ===');
for (const f of results.bilibiliTagged) {
    console.log('  ' + f.relPath + '  [' + f.tags.join(', ') + ']');
}

console.log('\n=== BOTH clippings+bilibili (' + results.bothClippingsBilibili.length + ') ===');
for (const f of results.bothClippingsBilibili) {
    console.log('  ' + f.relPath + '  [' + f.tags.join(', ') + ']');
}

// Save
fs.writeFileSync(path.join(vaultRoot, '_scripts', 'tags_final.json'), JSON.stringify(results, null, 2), 'utf-8');
console.log('\nSaved to _scripts/tags_final.json');
