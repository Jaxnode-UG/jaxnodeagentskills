---
name: generate-qrcode
description: A skill that generates a QR code from a given text or URL and saves it as an image file.
---

This will display the generated QR code as an image on a webpage. You can also save the QR as an image file using the `fs` module in Node.js:

```javascript
import fs from 'fs';
import QRCode from 'qrcode';
const generateQRCode = async (text, filePath) => {
  try {
    await QRCode.toFile(filePath, text);
    console.log(`QR code saved to ${filePath}`);
  } catch (err) {
    console.error('Error generating QR code:', err);
  }
};
```

# Generate QRCode

I can create a QR code from the text or URL you provide. Please give me the text or URL you'd like to convert into a QR code, and I'll generate it for you!

This skill uses the reusable Node.js script located at `.github/skills/generate-qrcode/scripts/generate-qrcode.js` to generate QR codes. This script takes the text or URL and an output file path as arguments and saves the QR code as a PNG image.

**Usage example:**

To generate a QR code for a URL or text, run:

```
node .github/skills/generate-qrcode/scripts/generate-qrcode.js "https://www.example.com" "./qrcodes/example.png"
```

Replace `https://www.example.com` with your desired text or URL, and `./qrcodes/example.png` with your preferred output file path.

Once you provide the text or URL, the skill will generate the QR code and share the image file with you. You can then use the QR code to easily share the information with others by scanning it with a QR code reader on your smartphone or other device.
```

This code will generate a QR code for the URL "https://www.example.com" and save it
as "qrcode.png" in the current directory. You can replace the URL and file path as needed to generate QR codes for different text or URLs and save them with different names.
Feel free to provide any text or URL you'd like to convert into a QR code, and I'll generate it for you!
