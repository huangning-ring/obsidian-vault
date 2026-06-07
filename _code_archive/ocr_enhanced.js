const Tesseract = require('tesseract.js');
const sharp = require('sharp');
const fs = require('fs');

async function run() {
  // Step 1: Preprocess image - enlarge 2x, greyscale, increase contrast
  await sharp('Pasted image 20251211213136.png')
    .resize({ width: 2076 })  // 2x width
    .grayscale()
    .normalize()
    .sharpen()
    .toFile('ocr_enhanced.png');

  console.log('Image enhanced (2x, greyscale, contrast boosted)');

  // Step 2: OCR with word-level detail
  const { data } = await Tesseract.recognize('ocr_enhanced.png', 'chi_sim', {
    tessedit_pageseg_mode: '3',
  });

  console.log('Confidence:', data.confidence);
  console.log('---RAW TEXT---');
  console.log(data.text);
  console.log('---END---');

  // Also save words with positions for table reconstruction
  const words = data.words.map(w => ({
    text: w.text,
    bbox: w.bbox,
    confidence: w.confidence
  }));
  fs.writeFileSync('ocr_words.json', JSON.stringify(words, null, 2), 'utf8');
  console.log('\nWord-level data saved to ocr_words.json');

  // Save enhanced text
  fs.writeFileSync('ocr_enhanced.txt', data.text, 'utf8');
}
run().catch(e => console.error(e));
