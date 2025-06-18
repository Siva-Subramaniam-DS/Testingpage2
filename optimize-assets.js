const fs = require('fs');
const path = require('path');

// Asset optimization helper script
console.log('🔍 Solar Website Asset Analysis');
console.log('================================\n');

// Check if optimization tools are available
function checkTools() {
  console.log('📋 Required Tools:');
  console.log('1. Image Optimization:');
  console.log('   - Online: https://tinypng.com/');
  console.log('   - Online: https://squoosh.app/');
  console.log('   - Desktop: ImageOptim (Mac) or FileOptimizer (Windows)');
  console.log('\n2. Video Optimization:');
  console.log('   - FFmpeg: https://ffmpeg.org/download.html');
  console.log('   - Online: https://www.onlinevideoconverter.com/');
  console.log('\n3. Format Conversion:');
  console.log('   - Convert images to WebP: https://convertio.co/jpg-webp/');
  console.log('   - Convert videos to WebM: https://cloudconvert.com/mp4-to-webm');
}

// File size analysis
function analyzeFiles() {
  console.log('📊 Current File Analysis:\n');
  
  const imageDir = path.join(__dirname, 'src', 'assets', 'images');
  const videoDir = path.join(__dirname, 'src', 'assets', 'videos');
  
  if (fs.existsSync(imageDir)) {
    const images = fs.readdirSync(imageDir);
    let totalImageSize = 0;
    
    console.log('🖼️  Images:');
    images.forEach(file => {
      const filePath = path.join(imageDir, file);
      const stats = fs.statSync(filePath);
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
      totalImageSize += stats.size;
      
      if (stats.size === 0) {
        console.log(`   ❌ ${file}: 0 bytes (EMPTY FILE)`);
      } else if (stats.size > 500 * 1024) {
        console.log(`   ⚠️  ${file}: ${sizeMB}MB (NEEDS OPTIMIZATION)`);
      } else {
        console.log(`   ✅ ${file}: ${sizeMB}MB`);
      }
    });
    
    console.log(`\n   📈 Total Image Size: ${(totalImageSize / (1024 * 1024)).toFixed(2)}MB`);
  }
  
  if (fs.existsSync(videoDir)) {
    const videos = fs.readdirSync(videoDir);
    
    console.log('\n🎥 Videos:');
    videos.forEach(file => {
      const filePath = path.join(videoDir, file);
      const stats = fs.statSync(filePath);
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
      
      if (stats.size > 10 * 1024 * 1024) {
        console.log(`   🚨 ${file}: ${sizeMB}MB (CRITICAL - TOO LARGE)`);
      } else if (stats.size > 5 * 1024 * 1024) {
        console.log(`   ⚠️  ${file}: ${sizeMB}MB (NEEDS OPTIMIZATION)`);
      } else {
        console.log(`   ✅ ${file}: ${sizeMB}MB`);
      }
    });
  }
}

// Optimization recommendations
function getRecommendations() {
  console.log('\n🎯 Optimization Recommendations:\n');
  
  console.log('1. 🚨 CRITICAL - Video Optimization:');
  console.log('   - Compress "Drone Video.mp4" from 99MB to <5MB');
  console.log('   - Use FFmpeg: ffmpeg -i "Drone Video.mp4" -vf "scale=1280:720" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k "drone-video-optimized.mp4"');
  console.log('   - Or use online converter: https://www.onlinevideoconverter.com/');
  
  console.log('\n2. ⚠️  HIGH PRIORITY - Image Optimization:');
  console.log('   - Compress all images >500KB to <200KB');
  console.log('   - Use TinyPNG: https://tinypng.com/');
  console.log('   - Or Squoosh: https://squoosh.app/');
  
  console.log('\n3. 🔄 MEDIUM PRIORITY - Format Conversion:');
  console.log('   - Convert images to WebP format for better compression');
  console.log('   - Use: https://convertio.co/jpg-webp/');
  
  console.log('\n4. 📝 LOW PRIORITY - Empty Files:');
  console.log('   - Replace empty image files with actual content');
  console.log('   - tamil-nadu-map.png, residential-solar.jpg, etc.');
}

// Expected results
function showExpectedResults() {
  console.log('\n📈 Expected Results After Optimization:\n');
  
  console.log('Before Optimization:');
  console.log('   - Images: ~20MB');
  console.log('   - Video: 99MB');
  console.log('   - Total: ~119MB');
  
  console.log('\nAfter Optimization:');
  console.log('   - Images: ~2MB (90% reduction)');
  console.log('   - Video: ~4MB (96% reduction)');
  console.log('   - Total: ~6MB (95% reduction)');
  
  console.log('\nBenefits:');
  console.log('   - Page load speed: 3-5x faster');
  console.log('   - Better SEO scores');
  console.log('   - Reduced bandwidth costs');
  console.log('   - Better user experience');
}

// Run analysis
console.log('Starting asset analysis...\n');
analyzeFiles();
getRecommendations();
showExpectedResults();
checkTools();

console.log('\n✅ Analysis complete! Follow the recommendations above to optimize your assets.'); 