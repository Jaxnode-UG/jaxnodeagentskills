// Wrapper to use the reusable generate-qrcode script from the skill
const path = require('path');
const generateQRCode = require('./.github/skills/generate-qrcode/scripts/generate-qrcode');

const url = 'https://github.com/davidfekke';
const outputPath = path.join(__dirname, 'qrcodes', 'github-davidfekke.png');

generateQRCode(url, outputPath);
