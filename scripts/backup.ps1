$vault = "C:\Users\29731\OneDrive\文档\Obsidian Vault"
$backupRoot = "D:\VaultBackup"
$date = Get-Date -Format "yyyy-MM-dd"
$dest = Join-Path $backupRoot $date
$logFile = Join-Path $backupRoot "backup.log"

if (-not (Test-Path $backupRoot)) { New-Item -ItemType Directory -Path $backupRoot -Force | Out-Null }

$ts = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
Add-Content $logFile "[$ts] 开始备份 -> $dest"

try {
    New-Item -ItemType Directory -Path $dest -Force | Out-Null
    robocopy $vault $dest /E /R:2 /W:5 /XD ".git" "node_modules" ".trash" /NP /NJH /NJS | Out-Null
    if ($LASTEXITCODE -lt 8) {
        Add-Content $logFile "[$ts] OK - exit $LASTEXITCODE"
    } else {
        Add-Content $logFile "[$ts] ERROR - exit $LASTEXITCODE"
    }
} catch {
    Add-Content $logFile "[$ts] EXCEPTION - $_"
}

$all = Get-ChildItem $backupRoot -Directory | Where-Object { $_.Name -match '^\d{4}-\d{2}-\d{2}$' } | Sort-Object Name -Descending
if ($all.Count -gt 30) {
    $all | Select-Object -Skip 30 | ForEach-Object { Remove-Item $_.FullName -Recurse -Force -ErrorAction SilentlyContinue; Add-Content $logFile "[$ts] 清理过期: $($_.Name)" }
}
