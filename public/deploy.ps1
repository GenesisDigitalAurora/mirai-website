# ------------------------------------------
# GEDX - DEPLOY AUTOMÁTICO COMPLETO
# Compila, exporta, limpia S3, sube archivos y hace invalidation en CloudFront
# ------------------------------------------

# CONFIGURACIÓN
$bucketName = "gedx-website"
$cloudfrontDistributionId = "E3LASA40ZAKI67"

# Paso 1: Compilar
Write-Host "Ejecutando: npm run build..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
  Write-Host "Error al compilar. Proceso detenido." -ForegroundColor Red
  exit 1
}

# Paso 2: Limpiar S3
Write-Host "Limpiando contenido actual del bucket S3..." -ForegroundColor Cyan
aws s3 rm "s3://$bucketName" --recursive

# Paso 3: Subir archivos exportados
Write-Host "Subiendo nueva versión desde carpeta /out..." -ForegroundColor Cyan
aws s3 sync ".\out" "s3://$bucketName" --delete

# Paso 4: Invalidate CloudFront
Write-Host "Iniciando invalidación en CloudFront..." -ForegroundColor Cyan
aws cloudfront create-invalidation --distribution-id $cloudfrontDistributionId --paths "/*"

Write-Host "¡Deploy completo con éxito!" -ForegroundColor Green
