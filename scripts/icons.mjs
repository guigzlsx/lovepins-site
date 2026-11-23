// Generates favicons and touch icons from the app icon (variant B). Run: node scripts/icons.mjs
import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';

const svg = await readFile('public/favicon.svg');
const png = (size) => sharp(svg, { density: 300 }).resize(size, size).png({ compressionLevel: 9 }).toBuffer();

for (const [name, size] of [['apple-touch-icon.png', 180], ['icon-64.png', 64], ['icon-192.png', 192], ['icon-512.png', 512]]) {
  await writeFile(`public/${name}`, await png(size));
}

// favicon.ico = one 32×32 PNG wrapped in an ICO header (supported by every current browser).
const p32 = await png(32);
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6); header.writeUInt8(32, 7); header.writeUInt8(0, 8); header.writeUInt8(0, 9);
header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12);
header.writeUInt32LE(p32.length, 14); header.writeUInt32LE(22, 18);
await writeFile('public/favicon.ico', Buffer.concat([header, p32]));
console.log('icons ok');
