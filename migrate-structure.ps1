# React Project Structure Migration Script
# PENTING: Pastikan Anda sudah backup/commit ke Git sebelum menjalankan script ini!
# Script ini akan MEMINDAHKAN (bukan copy) file-file Anda.

$ErrorActionPreference = "Stop"
$ProjectRoot = $PSScriptRoot

Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "  React Project Structure Migration Script" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host ""

# STEP 1: Validasi folder yang diperlukan ada
Write-Host "[STEP 1] Validating existing structure..." -ForegroundColor Yellow

$requiredFolders = @(
    "Render",
    "src\komponen",
    "src\assets\img"
)

foreach ($folder in $requiredFolders) {
    $path = Join-Path $ProjectRoot $folder
    if (-not (Test-Path $path)) {
        Write-Host "ERROR: Folder '$folder' tidak ditemukan!" -ForegroundColor Red
        Write-Host "Pastikan Anda menjalankan script ini dari root project." -ForegroundColor Red
        exit 1
    }
}

Write-Host "  OK - All required folders found" -ForegroundColor Green
Write-Host ""

# STEP 2: Pindahkan isi folder Render ke src/
Write-Host "[STEP 2] Moving Render folder contents to src/..." -ForegroundColor Yellow

$renderFiles = @(
    "Render\main.jsx",
    "Render\App.jsx",
    "Render\index.css"
)

foreach ($file in $renderFiles) {
    $sourcePath = Join-Path $ProjectRoot $file
    $fileName = Split-Path $file -Leaf
    $destPath = Join-Path $ProjectRoot "src\$fileName"
    
    if (Test-Path $sourcePath) {
        if (Test-Path $destPath) {
            Write-Host "  WARNING: $destPath already exists, skipping..." -ForegroundColor Yellow
        } else {
            Move-Item -Path $sourcePath -Destination $destPath -Force
            Write-Host "  OK - Moved $file to src\$fileName" -ForegroundColor Green
        }
    } else {
        Write-Host "  WARNING: $file not found, skipping..." -ForegroundColor Yellow
    }
}

# Hapus folder Render jika kosong
$renderPath = Join-Path $ProjectRoot "Render"
if (Test-Path $renderPath) {
    $remainingFiles = Get-ChildItem $renderPath
    if ($remainingFiles.Count -eq 0) {
        Remove-Item $renderPath -Force
        Write-Host "  OK - Removed empty Render folder" -ForegroundColor Green
    } else {
        Write-Host "  WARNING: Render folder masih berisi file, tidak dihapus" -ForegroundColor Yellow
    }
}

Write-Host ""

# STEP 3: Rename src/komponen menjadi src/components
Write-Host "[STEP 3] Renaming src/komponen to src/components..." -ForegroundColor Yellow

$komponenPath = Join-Path $ProjectRoot "src\komponen"
$componentsPath = Join-Path $ProjectRoot "src\components"

if (Test-Path $komponenPath) {
    if (Test-Path $componentsPath) {
        Write-Host "  ERROR: src\components already exists!" -ForegroundColor Red
        Write-Host "  Please remove or rename it first." -ForegroundColor Red
        exit 1
    }
    Rename-Item -Path $komponenPath -NewName "components" -Force
    Write-Host "  OK - Renamed src\komponen to src\components" -ForegroundColor Green
} else {
    Write-Host "  WARNING: src\komponen not found, skipping..." -ForegroundColor Yellow
}

Write-Host ""

# STEP 4: Buat subfolder Layout dan Sections di components
Write-Host "[STEP 4] Creating component subdirectories..." -ForegroundColor Yellow

$layoutPath = Join-Path $ProjectRoot "src\components\Layout"
$sectionsPath = Join-Path $ProjectRoot "src\components\Sections"

New-Item -ItemType Directory -Path $layoutPath -Force | Out-Null
Write-Host "  OK - Created src\components\Layout" -ForegroundColor Green

New-Item -ItemType Directory -Path $sectionsPath -Force | Out-Null
Write-Host "  OK - Created src\components\Sections" -ForegroundColor Green

Write-Host ""

# STEP 5: Pindahkan komponen ke Layout dan Sections
Write-Host "[STEP 5] Moving components to appropriate folders..." -ForegroundColor Yellow

# Layout components
$layoutComponents = @("Navbar.jsx", "Footer.jsx")
foreach ($comp in $layoutComponents) {
    $sourcePath = Join-Path $ProjectRoot "src\components\$comp"
    $destPath = Join-Path $ProjectRoot "src\components\Layout\$comp"
    
    if (Test-Path $sourcePath) {
        Move-Item -Path $sourcePath -Destination $destPath -Force
        Write-Host "  OK - Moved $comp to Layout/" -ForegroundColor Green
    } else {
        Write-Host "  WARNING: $comp not found" -ForegroundColor Yellow
    }
}

# Section components
$sectionComponents = @(
    "Home.jsx",
    "About.jsx",
    "Service.jsx",
    "Mentors.jsx",
    "ExperienceMentor.jsx",
    "OfficeLocation.jsx",
    "Client.jsx",
    "Biaya.jsx",
    "TestimoniText.jsx",
    "TestimoniVideo.jsx"
)

foreach ($comp in $sectionComponents) {
    $sourcePath = Join-Path $ProjectRoot "src\components\$comp"
    $destPath = Join-Path $ProjectRoot "src\components\Sections\$comp"
    
    if (Test-Path $sourcePath) {
        Move-Item -Path $sourcePath -Destination $destPath -Force
        Write-Host "  OK - Moved $comp to Sections/" -ForegroundColor Green
    } else {
        Write-Host "  WARNING: $comp not found" -ForegroundColor Yellow
    }
}

Write-Host ""

# STEP 6: Rename src/assets/img menjadi src/assets/images
Write-Host "[STEP 6] Renaming src/assets/img to src/assets/images..." -ForegroundColor Yellow

$imgPath = Join-Path $ProjectRoot "src\assets\img"
$imagesPath = Join-Path $ProjectRoot "src\assets\images"

if (Test-Path $imgPath) {
    if (Test-Path $imagesPath) {
        Write-Host "  ERROR: src\assets\images already exists!" -ForegroundColor Red
        Write-Host "  Please remove or rename it first." -ForegroundColor Red
        exit 1
    }
    Rename-Item -Path $imgPath -NewName "images" -Force
    Write-Host "  OK - Renamed src\assets\img to src\assets\images" -ForegroundColor Green
} else {
    Write-Host "  WARNING: src\assets\img not found, skipping..." -ForegroundColor Yellow
}

Write-Host ""

# STEP 7: Buat subfolder untuk kategorisasi gambar
Write-Host "[STEP 7] Creating image category subdirectories..." -ForegroundColor Yellow

$clientsPath = Join-Path $ProjectRoot "src\assets\images\clients"
$peoplePath = Join-Path $ProjectRoot "src\assets\images\people"
$uiPath = Join-Path $ProjectRoot "src\assets\images\ui"

New-Item -ItemType Directory -Path $clientsPath -Force | Out-Null
Write-Host "  OK - Created src\assets\images\clients" -ForegroundColor Green

New-Item -ItemType Directory -Path $peoplePath -Force | Out-Null
Write-Host "  OK - Created src\assets\images\people" -ForegroundColor Green

New-Item -ItemType Directory -Path $uiPath -Force | Out-Null
Write-Host "  OK - Created src\assets\images\ui" -ForegroundColor Green

Write-Host ""

# STEP 8: Pindahkan gambar berdasarkan kategori
Write-Host "[STEP 8] Moving images to category folders..." -ForegroundColor Yellow

$imagesBasePath = Join-Path $ProjectRoot "src\assets\images"

# Kategori: UI (SVG files)
Write-Host "  Moving UI files (*.svg)..." -ForegroundColor Cyan
Get-ChildItem -Path $imagesBasePath -Filter "*.svg" | ForEach-Object {
    $destPath = Join-Path $uiPath $_.Name
    Move-Item -Path $_.FullName -Destination $destPath -Force
    Write-Host "    OK - $($_.Name) to ui/" -ForegroundColor Green
}

# Kategori: People (testimoni, karyawan, man)
Write-Host "  Moving People images..." -ForegroundColor Cyan
$peoplePatterns = @("testimoni*", "karyawan*", "man (*).*")
foreach ($pattern in $peoplePatterns) {
    Get-ChildItem -Path $imagesBasePath -Filter $pattern | ForEach-Object {
        $destPath = Join-Path $peoplePath $_.Name
        Move-Item -Path $_.FullName -Destination $destPath -Force
        Write-Host "    OK - $($_.Name) to people/" -ForegroundColor Green
    }
}

# Kategori: Clients (client_*, mediareport*, seminar*, univ*, logo perusahaan)
Write-Host "  Moving Client/Company images..." -ForegroundColor Cyan

# Pattern-based files
$clientPatterns = @(
    "client_*",
    "mediareport*",
    "seminar*",
    "univ*"
)

foreach ($pattern in $clientPatterns) {
    Get-ChildItem -Path $imagesBasePath -Filter $pattern | ForEach-Object {
        $destPath = Join-Path $clientsPath $_.Name
        Move-Item -Path $_.FullName -Destination $destPath -Force
        Write-Host "    OK - $($_.Name) to clients/" -ForegroundColor Green
    }
}

# Specific company logos
$companyLogos = @(
    "pertahanan.png",
    "mirota.png",
    "sydeco.png",
    "kominfo.png",
    "bireuen.png",
    "KPK.png",
    "DQ.png",
    "amikom.png",
    "alterra.png",
    "haribi.png",
    "tas.png",
    "suhu.png",
    "kominfopinrang.png",
    "fac.png",
    "mapi.png",
    "mamikos.png",
    "metro.png",
    "itb.png",
    "hokben.png",
    "ecentrix.png",
    "koperasi.png",
    "tristarkalama.png",
    "univmat.png"
)

foreach ($logo in $companyLogos) {
    $filePath = Join-Path $imagesBasePath $logo
    if (Test-Path $filePath) {
        $destPath = Join-Path $clientsPath $logo
        Move-Item -Path $filePath -Destination $destPath -Force
        Write-Host "    OK - $logo to clients/" -ForegroundColor Green
    }
}

Write-Host ""

# STEP 9: Summary
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "  Migration Complete!" -ForegroundColor Green
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "NEXT STEPS:" -ForegroundColor Yellow
Write-Host "1. Update import paths (see CODE_FIX_CHEATSHEET.md)" -ForegroundColor White
Write-Host "2. Run: npm run dev" -ForegroundColor White
Write-Host "3. Check console for import errors" -ForegroundColor White
Write-Host ""
Write-Host "Script selesai!" -ForegroundColor Green
Write-Host "============================================================" -ForegroundColor Cyan
