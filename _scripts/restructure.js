const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Users\\29731\\OneDrive\\文档\\Obsidian Vault\\笔记同步助手';
const imagesDir = path.join(baseDir, 'images');

// Image file extensions
const imageExts = new Set(['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg']);

let movedFiles = 0;
let deletedDirs = 0;
let skippedDups = 0;

// Find all date subdirectories (YYYY-MM-DD format)
const entries = fs.readdirSync(baseDir, { withFileTypes: true });
const dateDirs = entries.filter(e => e.isDirectory() && /^\d{4}-\d{2}-\d{2}$/.test(e.name));

for (const dateDir of dateDirs) {
    const datePath = path.join(baseDir, dateDir.name);
    const subEntries = fs.readdirSync(datePath, { withFileTypes: true });

    for (const sub of subEntries) {
        if (!sub.isDirectory()) continue;
        const subPath = path.join(datePath, sub.name);
        const subName = sub.name.toLowerCase();

        // Process "attachments" directory
        if (subName === 'attachments') {
            const files = fs.readdirSync(subPath, { withFileTypes: true });
            for (const file of files) {
                if (!file.isFile()) continue;
                const src = path.join(subPath, file.name);
                const dest = path.join(datePath, file.name);

                if (fs.existsSync(dest)) {
                    // Check if same file, skip if duplicate
                    const srcSize = fs.statSync(src).size;
                    const destSize = fs.statSync(dest).size;
                    if (srcSize === destSize) {
                        skippedDups++;
                        fs.unlinkSync(src);
                        continue;
                    }
                }
                fs.copyFileSync(src, dest);
                fs.unlinkSync(src);
                movedFiles++;
                console.log(`  Moved: ${dateDir.name}/attachments/${file.name} → ${dateDir.name}/${file.name}`);
            }
            // Remove empty attachments directory
            const remaining = fs.readdirSync(subPath);
            if (remaining.length === 0) {
                fs.rmdirSync(subPath);
                deletedDirs++;
                console.log(`  Deleted empty: ${dateDir.name}/attachments/`);
            }
        }

        // Process "images" directory inside date folder
        if (subName === 'images') {
            const files = fs.readdirSync(subPath, { withFileTypes: true });
            for (const file of files) {
                if (!file.isFile()) continue;
                const ext = path.extname(file.name).toLowerCase();
                if (!imageExts.has(ext)) continue; // Only process images

                const src = path.join(subPath, file.name);
                const dest = path.join(imagesDir, file.name);

                if (fs.existsSync(dest)) {
                    // Skip if duplicate in central images folder
                    const srcSize = fs.statSync(src).size;
                    const destSize = fs.statSync(dest).size;
                    if (srcSize === destSize) {
                        skippedDups++;
                        fs.unlinkSync(src);
                        continue;
                    }
                    // Different file with same name - add date prefix
                    const newName = `${dateDir.name}_${file.name}`;
                    const newDest = path.join(imagesDir, newName);
                    fs.copyFileSync(src, newDest);
                    fs.unlinkSync(src);
                    movedFiles++;
                    console.log(`  Moved: ${dateDir.name}/images/${file.name} → images/${newName} (renamed due to conflict)`);
                    continue;
                }
                fs.copyFileSync(src, dest);
                fs.unlinkSync(src);
                movedFiles++;
                console.log(`  Moved: ${dateDir.name}/images/${file.name} → images/${file.name}`);
            }
            // Remove empty images directory
            const remaining = fs.readdirSync(subPath);
            if (remaining.length === 0) {
                fs.rmdirSync(subPath);
                deletedDirs++;
                console.log(`  Deleted empty: ${dateDir.name}/images/`);
            }
        }
    }
}

// Also delete empty attachments directory at root level
const rootAttachments = path.join(baseDir, 'attachments');
if (fs.existsSync(rootAttachments)) {
    const files = fs.readdirSync(rootAttachments);
    if (files.length === 0) {
        fs.rmdirSync(rootAttachments);
        deletedDirs++;
        console.log('  Deleted empty: attachments/ (root level)');
    } else {
        // Move non-image files up, images to images/
        for (const file of files) {
            const src = path.join(rootAttachments, file);
            const ext = path.extname(file).toLowerCase();
            if (imageExts.has(ext)) {
                const dest = path.join(imagesDir, file);
                if (!fs.existsSync(dest)) {
                    fs.copyFileSync(src, dest);
                    fs.unlinkSync(src);
                    movedFiles++;
                    console.log(`  Moved: attachments/${file} → images/${file}`);
                }
            } else {
                const dest = path.join(baseDir, file);
                if (!fs.existsSync(dest)) {
                    fs.copyFileSync(src, dest);
                    fs.unlinkSync(src);
                    movedFiles++;
                    console.log(`  Moved: attachments/${file} → ${file}`);
                }
            }
        }
        const remaining = fs.readdirSync(rootAttachments);
        if (remaining.length === 0) {
            fs.rmdirSync(rootAttachments);
            deletedDirs++;
            console.log('  Deleted empty: attachments/ (root level)');
        }
    }
}

console.log(`\n=== Complete ===`);
console.log(`Files moved: ${movedFiles}`);
console.log(`Empty dirs deleted: ${deletedDirs}`);
console.log(`Duplicate files skipped: ${skippedDups}`);
