param(
    [int]$Worker = 0,
    [int]$Workers = 1,
    [int]$TimeoutSeconds = 120
)
$ErrorActionPreference = 'Continue'
$exe = 'C:\Users\29731\AppData\Local\Programs\Python\Python312\Scripts\scansci-pdf.exe'
$output = $PSScriptRoot
$log = Join-Path $PSScriptRoot ("_retry_downloads_worker_{0}.log" -f $Worker)
$done = Join-Path $PSScriptRoot ("_retry_downloads_worker_{0}.done" -f $Worker)
$dois = @(
    '10.1152/ajplung.1993.264.2.l183',
    '10.1152/ajplung.00234.2020',
    '10.1242/dev.200693',
    '10.1152/ajplung.00536.2020',
    '10.1016/j.isci.2022.104730',
    '10.1089/ten.tea.2022.0054',
    '10.3791/63684',
    '10.21769/bioprotoc.4657',
    '10.1016/j.xpro.2023.102735',
    '10.1016/j.mtbio.2023.100603',
    '10.1164/rccm.202310-1831le',
    '10.1152/ajplung.00356.2025',
    '10.1016/j.biomaterials.2026.124084',
    '10.1016/j.isci.2026.116638',
    '10.1139/o91-016',
    '10.1152/ajplung.1999.276.1.l75',
    '10.1165/rcmb.2009-0329oc',
    '10.1242/dev.171652',
    '10.3791/57492',
    '10.3791/61541',
    '10.3390/genes11060603',
    '10.1016/j.isci.2021.103061',
    '10.1016/j.xpro.2022.101270',
    '10.12122/j.issn.1673-4254.2022.06.10',
    '10.1080/22221751.2022.2148561',
    '10.1016/j.ooc.2023.100031',
    '10.1016/j.xpro.2023.102154',
    '10.1007/7651_2025_621',
    '10.1007/7651_2025_670',
    '10.1183/13993003.00908-2021'
)
for ($index = $Worker; $index -lt $dois.Count; $index += $Workers) {
    $doi = $dois[$index]
    $stamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
    [IO.File]::AppendAllText($log, "[$stamp] START $doi`n", [Text.UTF8Encoding]::new($false))
    $psi = [Diagnostics.ProcessStartInfo]::new()
    $psi.FileName = $exe
    $psi.UseShellExecute = $false
    $psi.CreateNoWindow = $true
    $psi.RedirectStandardOutput = $true
    $psi.RedirectStandardError = $true
    foreach ($argument in @('get', $doi, '--output', $output, '--strategy', 'oa_first')) {
        [void]$psi.ArgumentList.Add($argument)
    }
    $process = [Diagnostics.Process]::Start($psi)
    $stdout = $process.StandardOutput.ReadToEndAsync()
    $stderr = $process.StandardError.ReadToEndAsync()
    $finished = $process.WaitForExit($TimeoutSeconds * 1000)
    if (-not $finished) {
        try {
            $process.Kill($true)
            $process.WaitForExit()
        } catch {
        }
        $code = 124
        $outputText = "TIMEOUT after $TimeoutSeconds seconds"
    } else {
        $code = $process.ExitCode
        $outputText = $stdout.Result + "`n" + $stderr.Result
    }
    [IO.File]::AppendAllText($log, "$outputText`n", [Text.UTF8Encoding]::new($false))
    $stamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
    [IO.File]::AppendAllText($log, "[$stamp] EXIT=$code $doi`n", [Text.UTF8Encoding]::new($false))
}
[IO.File]::WriteAllText($done, (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'), [Text.UTF8Encoding]::new($false))
