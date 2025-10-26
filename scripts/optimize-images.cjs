const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

// Find all image files
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

function getAllImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllImageFiles(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (imageExtensions.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const originalSize = fs.statSync(filePath).size;

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Create a temporary file
    const tempPath = filePath + '.tmp';

    if (ext === '.png') {
      await image
        .png({ quality: 85, compressionLevel: 9 })
        .toFile(tempPath);
    } else if (ext === '.jpg' || ext === '.jpeg') {
      await image
        .jpeg({ quality: 85, mozjpeg: true })
        .toFile(tempPath);
    } else if (ext === '.webp') {
      await image
        .webp({ quality: 85 })
        .toFile(tempPath);
    }

    const newSize = fs.statSync(tempPath).size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(2);

    // Only replace if we actually reduced the size
    if (newSize < originalSize) {
      fs.renameSync(tempPath, filePath);
      console.log(`✓ ${path.relative(publicDir, filePath)}: ${(originalSize / 1024).toFixed(2)}KB → ${(newSize / 1024).toFixed(2)}KB (saved ${savings}%)`);
      return { saved: originalSize - newSize, original: originalSize, optimized: newSize };
    } else {
      fs.unlinkSync(tempPath);
      console.log(`⊘ ${path.relative(publicDir, filePath)}: Already optimized`);
      return { saved: 0, original: originalSize, optimized: originalSize };
    }
  } catch (error) {
    console.error(`✗ Error optimizing ${path.relative(publicDir, filePath)}:`, error.message);
    return { saved: 0, original: originalSize, optimized: originalSize };
  }
}

async function main() {
  console.log('🔍 Finding images in public/ directory...\n');

  const images = getAllImageFiles(publicDir);
  console.log(`Found ${images.length} images\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;
  let totalSaved = 0;

  for (const image of images) {
    const result = await optimizeImage(image);
    totalOriginal += result.original;
    totalOptimized += result.optimized;
    totalSaved += result.saved;
  }

  console.log('\n' + '='.repeat(60));
  console.log('📊 Optimization Summary:');
  console.log(`Total original size: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total optimized size: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB (${((totalSaved / totalOriginal) * 100).toFixed(2)}%)`);
  console.log('='.repeat(60));
}

main().catch(console.error);
