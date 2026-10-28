/**
 * Download the public NASA / three-globe textures used by the travel page
 * and convert them to compact WebP files in static/img/.
 *
 * Usage:
 *   npm install
 *   node fetch-textures.mjs
 */
import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '../..');
const OUT = path.join(ROOT, 'static/img');
fs.mkdirSync(OUT, { recursive: true });

const files = [
  { src: 'earth-blue-marble.jpg', out: 'earth-blue-marble.webp', width: 2048 },
  { src: 'earth-night.jpg', out: 'earth-night.webp', width: 2048 },
  { src: 'earth-topology.png', out: 'earth-topology.webp', width: 1024 },
];

for (const file of files) {
  const url = 'https://unpkg.com/three-globe/example/img/' + file.src;
  console.log('fetching', url);
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch ' + url + ': ' + response.status);
  const buffer = Buffer.from(await response.arrayBuffer());
  await sharp(buffer)
    .resize({ width: file.width })
    .webp({ quality: 82 })
    .toFile(path.join(OUT, file.out));
  console.log('wrote', file.out);
}
