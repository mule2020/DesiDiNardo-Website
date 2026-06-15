# Run this from inside your desi-dinardo project folder
# Right-click PowerShell > Run as Administrator if needed
# Command: .\download-all-images.ps1

$base = "https://desidinardo.com"
$headers = @{
    "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    "Referer"    = "https://desidinardo.com/"
}

function dl($url, $dest) {
    $dir = Split-Path $dest
    if (!(Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
    Write-Host -NoNewline "  Downloading $(Split-Path $dest -Leaf)... "
    try {
        Invoke-WebRequest -Uri $url -OutFile $dest -Headers $headers -TimeoutSec 20 -ErrorAction Stop
        $size = [math]::Round((Get-Item $dest).Length / 1KB, 1)
        Write-Host "OK ($($size)KB)" -ForegroundColor Green
    } catch {
        Write-Host "FAILED - open manually: $url" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "=== Starbucks (2 images) ===" -ForegroundColor Cyan
dl "$base/images/poems/starbucks/image-1.jpg"  "public\images\starbucks\image-1.jpg"
dl "$base/images/poems/starbucks/image-2.jpg"  "public\images\starbucks\image-2.jpg"

Write-Host ""
Write-Host "=== Educator (10 images) ===" -ForegroundColor Cyan
foreach ($n in 1,2,3,4,5,8,9,10) {
    dl "$base/images/poems/educator/image-$n.jpg" "public\images\educator\image-$n.jpg"
}
dl "$base/images/poems/educator/image-7.png" "public\images\educator\image-7.png"

Write-Host ""
Write-Host "=== Publications (7 images) ===" -ForegroundColor Cyan
dl "$base/images/news-articles-and-pubs/image-1.png"  "public\images\publications\image-1.png"
dl "$base/images/news-articles-and-pubs/image-3.png"  "public\images\publications\image-3.png"
foreach ($n in 2,4,5,6) {
    dl "$base/images/news-articles-and-pubs/image-$n.jpg" "public\images\publications\image-$n.jpg"
}
dl "$base/images/news-articles-and-pubs/image-7.jpeg" "public\images\publications\image-7.jpeg"

Write-Host ""
Write-Host "=== Decorations ===" -ForegroundColor Cyan
dl "$base/images/decorations/sunflower.png" "public\images\decorations\sunflower.png"

Write-Host ""
Write-Host "=== Reviews ===" -ForegroundColor Cyan
dl "$base/images/cards/explore-cards/home-reviews.jpg" "public\images\reviews\home-reviews.jpg"

Write-Host ""
Write-Host "=== Book Covers (Amazon) ===" -ForegroundColor Cyan
dl "https://m.media-amazon.com/images/I/61dST0CQG4L._UF350,350_QL50_.jpg"  "public\images\books\plural-of-some-things.jpg"
dl "https://m.media-amazon.com/images/I/8168Ig03kgL._UF894,1000_QL80_.jpg" "public\images\books\cure-is-a-forest.jpg"

Write-Host ""
Write-Host "All done! Check public\images\ for your files." -ForegroundColor Yellow
