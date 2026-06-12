$ErrorActionPreference = "Stop"

# Paths
$backupRoot = "D:\VaultBackup\2026-06-08"
$vaultRoot = "C:\Users\29731\OneDrive\文档\Obsidian Vault"
$trashRoot = "$vaultRoot\.trash"
$masterRoot = "C:\Users\29731\OneDrive\桌面\obsidian-vault-master"

# Exclude patterns
$exclude = @("node_modules", ".git", ".obsidian")

function Get-Files-Relative($root) {
    $result = @()
    $items = Get-ChildItem -Path $root -Recurse -File -ErrorAction SilentlyContinue
    foreach ($item in $items) {
        $rel = $item.FullName.Substring($root.Length).TrimStart("\")
        $skip = $false
        foreach ($ex in $exclude) {
            if ($rel -like "*$ex\*" -or $rel -like "*$ex") {
                $skip = $true
                break
            }
        }
        if (-not $skip) {
            $result += $rel
        }
    }
    return $result
}

Write-Host "Scanning backup..."
$backupFiles = Get-Files-Relative $backupRoot
Write-Host "Backup files: $($backupFiles.Count)"

Write-Host "Scanning vault..."
$vaultFiles = Get-Files-Relative $vaultRoot
Write-Host "Vault files: $($vaultFiles.Count)"

Write-Host "Scanning trash..."
$trashFiles = Get-Files-Relative $trashRoot
Write-Host "Trash files: $($trashFiles.Count)"

Write-Host "Scanning master..."
$masterFiles = Get-Files-Relative $masterRoot
Write-Host "Master files: $($masterFiles.Count)"

# Find missing files (in backup but not in vault)
$backupSet = [System.Collections.Generic.HashSet[string]]::new([string[]]$backupFiles)
$vaultSet = [System.Collections.Generic.HashSet[string]]::new([string[]]$vaultFiles)

# Files that are in backup but missing from vault
$missing = @()
foreach ($f in $backupFiles) {
    if (-not $vaultSet.Contains($f)) {
        $missing += $f
    }
}

Write-Host "`n=== Missing files ($($missing.Count)) ==="
$missing | Sort-Object | ForEach-Object { Write-Host $_ }

# For each missing file, check if it exists in trash (by filename only, not path)
Write-Host "`n=== Missing files found in trash ==="
$trashNameMap = @{}
foreach ($tf in $trashFiles) {
    $name = [System.IO.Path]::GetFileName($tf)
    if (-not $trashNameMap.ContainsKey($name)) {
        $trashNameMap[$name] = @()
    }
    $trashNameMap[$name] += $tf
}

$foundInTrash = @()
$notFoundInTrash = @()
$claudeFound = $false
$claudeTrashPath = $null

foreach ($mf in ($missing | Sort-Object)) {
    $name = [System.IO.Path]::GetFileName($mf)

    # Special handling for CLAUDE.md
    if ($name -eq "CLAUDE.md") {
        $claudeFound = $true
        foreach ($tf in $trashFiles) {
            if ([System.IO.Path]::GetFileName($tf) -eq "CLAUDE.md") {
                $claudeTrashPath = $tf
                break
            }
        }
        Write-Host "  SKIP (use vault's CLAUDE.md): $mf"
        continue
    }

    if ($trashNameMap.ContainsKey($name)) {
        $foundInTrash += @{
            MissingPath = $mf
            TrashPaths = $trashNameMap[$name]
        }
        Write-Host "  FOUND: $mf -> $($trashNameMap[$name] -join ', ')"
    } else {
        $notFoundInTrash += $mf
        Write-Host "  NOT IN TRASH: $mf"
    }
}

# Check master for remaining files
Write-Host "`n=== Files NOT in trash - checking master ==="
foreach ($mf in $notFoundInTrash) {
    $masterPath = [System.IO.Path]::Combine($masterRoot, $mf)
    if (Test-Path $masterPath) {
        Write-Host "  FOUND IN MASTER: $mf -> $masterPath"
    } else {
        Write-Host "  NOT FOUND ANYWHERE: $mf"
    }
}
