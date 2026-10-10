[CmdletBinding()]
param(
    [string]$SourceZip = 'D:\敌人掉落反向索引\khbbsfm-drop-database.zip'
)

$ErrorActionPreference = 'Stop'
$dropBlogRoot = Split-Path -Parent $PSScriptRoot
$dropBuildCache = [IO.Path]::GetFullPath((Join-Path $dropBlogRoot '../work/cache/blog-drop-previews/hexo'))
$dropMergedConfig = Join-Path $dropBlogRoot '_multiconfig.yml'
$dropHadMergedConfig = Test-Path -LiteralPath $dropMergedConfig -PathType Leaf
$dropMergedBytes = if ($dropHadMergedConfig) { [IO.File]::ReadAllBytes($dropMergedConfig) } else { $null }

Push-Location -LiteralPath $dropBlogRoot
try {
    python -X utf8 tools/build-drop-previews.py --source-zip $SourceZip
    if ($LASTEXITCODE -ne 0) { throw 'Article generation failed.' }
    # Hexo's --output isolates its database and merged config as well as the
    # public_dir configured in the local YAML. Avoid reusing production models.
    node node_modules/hexo/bin/hexo clean --config _config.yml,tools/drop-previews.local.yml --output $dropBuildCache
    if ($LASTEXITCODE -ne 0) { throw 'Local Hexo clean failed.' }
    node node_modules/hexo/bin/hexo generate --config _config.yml,tools/drop-previews.local.yml --output $dropBuildCache
    if ($LASTEXITCODE -ne 0) { throw 'Local Hexo build failed.' }
}
finally {
    # Hexo writes this merged configuration while using multiple configs.
    # Restore the exact original bytes so ordinary blog builds remain unchanged.
    if ($dropHadMergedConfig) { [IO.File]::WriteAllBytes($dropMergedConfig, $dropMergedBytes) }
    elseif (Test-Path -LiteralPath $dropMergedConfig -PathType Leaf) { Remove-Item -LiteralPath $dropMergedConfig -Force }
    Pop-Location
}
