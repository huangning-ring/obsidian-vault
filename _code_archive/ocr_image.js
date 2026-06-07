const Tesseract = require('tesseract.js');
const path = require('path');

const imagePath = process.argv[2] || 'Pasted image 20251211213136.png';

console.log(`OCR-ing: ${imagePath}\n`);

Tesseract.recognize(
  imagePath,
  'chi_sim+eng',  // Chinese simplified + English
  {
    logger: m => {
      if (m.status === 'recognizing text') {
        process.stdout.write(`\rProgress: ${Math.round(m.progress * 100)}%`);
      }
    }
  }
).then(({ data: { text } }) => {
  console.log('\n\n=== OCR RESULT ===\n');
  console.log(text);
  console.log('\n=== END ===');
}).catch(err => {
  console.error('Error:', err.message);
});
