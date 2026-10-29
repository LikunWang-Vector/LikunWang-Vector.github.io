/**
 * Rebuild the 中肥鱼 (medium) and 成年肥鱼 (adult) Live2D assets from the
 * open-source 大肥鱼 desktop-pet pack.
 *
 * Usage:
 *   node scripts/convert-mascot-forms.mjs <pack>/forms [output-dir]
 *
 * `<pack>/forms` must contain `medium/` and `adult/` as published by
 * https://github.com/Alps-Link/deepseek-whale-Desktop-pet. The output defaults
 * to `public/mascot/live2d/`. Each source form keeps its moc3, physics,
 * display-info and expression files; only the model3 texture reference is
 * rewritten and the 4096² PNG atlas is converted to 2048² WebP.
 *
 * The green/red colourways are palette variants: only blue hues rotate, so
 * skin, line art, props and the white apron stay untouched. This reproduces
 * the same hue shifts used for the existing 大肥鱼 atlases.
 *
 * Attribution: 中肥鱼 by B站 @Mao绒绒家园; 成年肥鱼 by B站 @玹乐喵. Both are
 * non-commercial CC fan works distributed by the pack; keep the credits in the
 * wardrobe and README.
 */
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const sharp = require('../../tools/art/node_modules/sharp');
const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));

const SRC = process.argv[2];
if (!SRC) {
  console.error('usage: node scripts/convert-mascot-forms.mjs <pack>/forms [output-dir]');
  process.exit(1);
}
const OUT = path.resolve(
  process.argv[3] ?? path.resolve(SCRIPT_DIR, '../public/mascot/live2d'),
);

const rgbToHsv = (r, g, b) => {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h = 0;
  if (d > 0) {
    if (max === r) h = ((g - b) / d + 6) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h /= 6;
  }
  return [h, max === 0 ? 0 : d / max, max];
};

const hsvToRgb = (h, s, v) => {
  const i = Math.floor(h * 6);
  const f = h * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0: return [v, t, p];
    case 1: return [q, v, p];
    case 2: return [p, v, t];
    case 3: return [p, q, v];
    case 4: return [t, p, v];
    default: return [v, p, q];
  }
};

function recolour(buffer, shift) {
  for (let i = 0; i < buffer.length; i += 4) {
    if (buffer[i + 3] < 8) continue;
    const [h, s, v] = rgbToHsv(buffer[i] / 255, buffer[i + 1] / 255, buffer[i + 2] / 255);
    if (s < 0.18) continue;
    if (h < 0.47 || h > 0.76) continue;
    const [nr, ng, nb] = hsvToRgb((h + shift + 1) % 1, s, v);
    buffer[i] = Math.round(nr * 255);
    buffer[i + 1] = Math.round(ng * 255);
    buffer[i + 2] = Math.round(nb * 255);
  }
  return buffer;
}

for (const form of ['medium', 'adult']) {
  const from = path.join(SRC, form);
  const to = path.join(OUT, form);
  if (!fs.existsSync(from)) {
    console.error(`missing source form: ${from}`);
    process.exit(1);
  }
  fs.mkdirSync(path.join(to, 'expressions'), { recursive: true });

  for (const file of [`${form}.moc3`, `${form}.physics3.json`, `${form}.cdi3.json`]) {
    fs.copyFileSync(path.join(from, file), path.join(to, file));
  }
  for (const name of fs.readdirSync(path.join(from, 'expressions'))) {
    fs.copyFileSync(path.join(from, 'expressions', name), path.join(to, 'expressions', name));
  }

  const model = JSON.parse(fs.readFileSync(path.join(from, `${form}.model3.json`), 'utf8'));
  model.FileReferences.Moc = `${form}.moc3`;
  model.FileReferences.Physics = `${form}.physics3.json`;
  model.FileReferences.DisplayInfo = `${form}.cdi3.json`;
  model.FileReferences.Textures = ['texture_00.webp'];
  fs.writeFileSync(path.join(to, `${form}.model3.json`), JSON.stringify(model, null, 2) + '\n');

  const { data, info } = await sharp(path.join(from, `${form}.4096`, 'texture_00.png'))
    .ensureAlpha()
    .resize({ width: 2048, height: 2048, fit: 'inside', withoutEnlargement: true })
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (const [suffix, shift] of [['', 0], ['-green', -0.21], ['-red', 0.38]]) {
    const buf = Buffer.from(data);
    if (shift) recolour(buf, shift);
    const out = path.join(to, `texture_00${suffix}.webp`);
    await sharp(buf, { raw: { width: info.width, height: info.height, channels: 4 } })
      .webp({ quality: 90, alphaQuality: 100, effort: 6 })
      .toFile(out);
    console.log(path.relative(OUT, out), `${info.width}x${info.height}`, fs.statSync(out).size);
  }
}

console.log('done');
