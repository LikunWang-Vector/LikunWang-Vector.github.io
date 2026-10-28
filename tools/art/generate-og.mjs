/**
 * Generate the default Open Graph image (1200×630) at assets/media/sharing.png.
 *
 * Usage:
 *   npm install
 *   node generate-og.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer-core';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '../..');
const avatar = fs.readFileSync(path.join(ROOT, 'content/en/authors/admin/avatar.jpg')).toString('base64');
const heroSvg = fs.readFileSync(path.join(ROOT, 'assets/media/hero-bg.svg'), 'utf8');

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
*{box-sizing:border-box;margin:0;padding:0}
body{width:1200px;height:630px;overflow:hidden;font-family:"Inter","Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;background:#061019;color:#fff;position:relative}
.bg{position:absolute;inset:0;background-image:url("data:image/svg+xml;base64,${Buffer.from(heroSvg).toString('base64')}");background-size:cover;background-position:center}
.shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(4,13,20,.92) 0%,rgba(4,13,20,.72) 45%,rgba(4,13,20,.25) 100%)}
.wrap{position:relative;height:100%;display:flex;align-items:center;justify-content:space-between;padding:0 76px;gap:40px}
.left{max-width:720px}
.kicker{display:inline-flex;align-items:center;gap:10px;font-size:15px;letter-spacing:.22em;text-transform:uppercase;color:#67e8f9;font-weight:700;margin-bottom:24px}
.kicker i{width:8px;height:8px;border-radius:50%;background:#22d3ee;display:block}
h1{font-size:78px;line-height:1;letter-spacing:-.035em;font-weight:800}
h1 span{font-size:38px;letter-spacing:.02em;color:#8fb3c2;font-weight:600;margin-left:18px;vertical-align:16px}
.role{font-size:27px;font-weight:600;color:#22d3ee;margin-top:22px}
.bio{font-size:20px;line-height:1.6;color:#b7c9d4;margin-top:20px;max-width:660px}
.footer{display:flex;align-items:center;gap:26px;margin-top:34px;font-size:16px;color:#7f9aa8}
.footer b{color:#d7e6ed;font-weight:600}
.right{position:relative;flex:none}
.photo{width:286px;height:286px;border-radius:50%;object-fit:cover;border:3px solid rgba(34,211,238,.65);box-shadow:0 0 0 18px rgba(34,211,238,.06),0 30px 80px rgba(0,0,0,.45)}
.chips{display:flex;gap:10px;justify-content:center;margin-top:30px}
.chip{font-size:13px;font-weight:600;color:#c9e9f0;background:rgba(34,211,238,.1);border:1px solid rgba(34,211,238,.24);padding:8px 14px;border-radius:999px;letter-spacing:.06em}
.corner{position:absolute;right:44px;bottom:30px;font-size:13px;letter-spacing:.2em;color:#5d7a88}
</style></head><body>
<div class="bg"></div><div class="shade"></div>
<div class="wrap">
 <div class="left">
  <div class="kicker"><i></i>Algorithm Engineer · Researcher</div>
  <h1>Likun Wang<span>王立坤</span></h1>
  <div class="role">TPU Operators · Deep Learning · Bio-inspired Design</div>
  <div class="bio">Building the bridge between AI research and specialized hardware — from TPU operator optimization to biomechanical topology optimization.</div>
  <div class="footer"><span><b>likunwang-vector.github.io</b></span><span>·</span><span>M.Eng. Waseda University</span><span>·</span><span>Shenzhen, China</span></div>
 </div>
 <div class="right">
  <img class="photo" src="data:image/jpeg;base64,${avatar}">
  <div class="chips"><span class="chip">TPU</span><span class="chip">PyTorch</span><span class="chip">COMSOL</span></div>
 </div>
</div>
<div class="corner">LIKUN WANG</div>
</body></html>`;

const chrome = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const browser = await puppeteer.launch({ executablePath: chrome, headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: path.join(ROOT, 'assets/media/sharing.png') });
await browser.close();
console.log('wrote assets/media/sharing.png');
