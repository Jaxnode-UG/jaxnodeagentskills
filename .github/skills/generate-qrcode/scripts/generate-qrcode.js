// generate-qrcode.js
// Reusable QR code generator script
const QRCode = require('qrcode');
const fs = require('fs');

/**
 * Generate a QR code PNG for a given text or URL.
 * @param {string} text - The text or URL to encode.
 * @param {string} outputPath - The output PNG file path.
 * @param {object} [options] - QR code options.
 */
function generateQRCode(text, outputPath, options = {}) {
  QRCode.toFile(outputPath, text, {
    color: {
      dark: '#000',
      light: '#FFF'
    },
    ...options
  }, function (err) {
    if (err) throw err;
    console.log('QR code saved to', outputPath);
  });
}

// CLI usage: node generate-qrcode.js <text> <outputPath>
if (require.main === module) {
  const [,, text, outputPath] = process.argv;
  if (!text || !outputPath) {
    console.error('Usage: node generate-qrcode.js <text> <outputPath>');
    process.exit(1);
  }
  generateQRCode(text, outputPath);
}

module.exports = generateQRCode;
