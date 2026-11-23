// Renders scripts/og.html to public/og.png (1200×630) with the local Chrome.
// Run: node scripts/og.mjs  (needs puppeteer-core: npx -y -p puppeteer-core node scripts/og.mjs)
import puppeteer from 'puppeteer-core';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--allow-file-access-from-files'] });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);
await page.goto(pathToFileURL(resolve('scripts/og.html')).href, { waitUntil: 'networkidle0' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'public/og.png', type: 'png' });
await browser.close();
console.log('og.png ok');
