/**
 * Generate a deterministic QR code for https://eltrm.com/download/
 * Output: public/assets/img/qr-download.png
 * Run: node scripts/generate-qr.mjs
 */
import QRCode from 'qrcode';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = join(__dirname, '..', 'public', 'assets', 'img', 'qr-download.png');
const URL = 'https://eltrm.com/download/';

mkdirSync(dirname(OUTPUT), { recursive: true });

await QRCode.toFile(OUTPUT, URL, {
  errorCorrectionLevel: 'M',
  width: 320,
  margin: 2,
  color: {
    dark: '#1a1a1a',
    light: '#ffffff',
  },
});

console.log(`QR code generated: ${OUTPUT}`);
console.log(`Target URL: ${URL}`);
console.log('NOTE: Scan with your phone after deployment to verify (manual step).');
