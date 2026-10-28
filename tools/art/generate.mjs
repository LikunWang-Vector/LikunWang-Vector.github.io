import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(HERE, '../..');
const ART = HERE;
const COVERS = path.join(OUT, 'assets/media/covers');
fs.mkdirSync(ART, { recursive: true });
fs.mkdirSync(COVERS, { recursive: true });

const W = 1200, H = 675;

const icons = {
  fish: `<path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"/><path d="M18 12v.5"/><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"/><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"/><path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"/><path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"/>`,
  car: `<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>`,
  gamepad: `<line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="18" x2="18.01" y1="10" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.98 3.59L2 15.5a4.5 4.5 0 0 0 8.5 2.3l.5-1.3a1 1 0 0 1 .92-.6h1.16a1 1 0 0 1 .92.6l.5 1.3a4.5 4.5 0 0 0 8.5-2.3l-.7-6.91A4 4 0 0 0 17.32 5z"/>`,
  flask: `<path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/>`,
  scan: `<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="m16 16-1.9-1.9"/>`,
  presentation: `<path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/>`,
  cpu: `<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>`,
  globe: `<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>`,
};

const covers = [
  { slug: 'fish-vertebrae', icon: 'fish', label: 'BIOMECHANICS · AI', c1: '#061f26', c2: '#0b3a3a', a1: '#34d399', a2: '#22d3ee', motif: 'contour' },
  { slug: 'driver-emotion', icon: 'car', label: 'COMPUTER VISION', c1: '#211206', c2: '#3a1d0b', a1: '#fbbf24', a2: '#fb923c', motif: 'scan' },
  { slug: 'bullet-dungeon', icon: 'gamepad', label: 'GAME DESIGN', c1: '#180d2c', c2: '#2e1747', a1: '#c084fc', a2: '#f472b6', motif: 'stripes' },
  { slug: 'masters-research', icon: 'flask', label: 'RESEARCH NOTES', c1: '#0a1730', c2: '#132c4d', a1: '#60a5fa', a2: '#818cf8', motif: 'nodes' },
  { slug: 'yolo-emotion', icon: 'scan', label: 'DEEP LEARNING', c1: '#06241c', c2: '#0b3b2d', a1: '#34d399', a2: '#a3e635', motif: 'scan' },
  { slug: 'wcsmo16', icon: 'presentation', label: 'CONFERENCE TALK', c1: '#1a1405', c2: '#33270a', a1: '#fbbf24', a2: '#f59e0b', motif: 'contour' },
  { slug: 'tpu-operators', icon: 'cpu', label: 'INDUSTRY · HARDWARE', c1: '#081a2e', c2: '#0e2f4a', a1: '#38bdf8', a2: '#22d3ee', motif: 'circuit' },
  { slug: 'travel', icon: 'globe', label: 'LIFE TRAJECTORY', c1: '#0a1e24', c2: '#123b40', a1: '#2dd4bf', a2: '#38bdf8', motif: 'contour' },
];

function contours(seed, color) {
  let out = '';
  for (let i = 0; i < 9; i++) {
    const y = 120 + i * 58;
    const amp = 22 + i * 3;
    out += `<path d="M-40 ${y} C 220 ${y - amp}, 400 ${y + amp}, 640 ${y - amp * 0.4} S 1040 ${y + amp}, 1260 ${y - 10}" fill="none" stroke="${color}" stroke-width="1.2" opacity="${0.16 - i * 0.012}"/>`;
  }
  return out;
}
function stripes(color) {
  let out = '';
  for (let i = 0; i < 16; i++) {
    const x = 40 + i * 82;
    out += `<rect x="${x}" y="-120" width="2" height="920" fill="${color}" opacity="0.07" transform="rotate(24 ${x} 340)"/>`;
  }
  return out;
}
function nodes(color) {
  const pts = [[140,470],[260,360],[360,500],[470,390],[590,470],[690,330],[820,440],[930,300],[1040,420],[1120,250],[180,220],[330,180],[520,240],[760,190],[980,160]];
  let out = '';
  for (let i = 0; i < pts.length - 1; i++) {
    const [x1,y1] = pts[i], [x2,y2] = pts[i+1];
    out += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="1" opacity="0.18"/>`;
  }
  for (const [x,y] of pts) out += `<circle cx="${x}" cy="${y}" r="3.2" fill="${color}" opacity="0.35"/>`;
  return out;
}
function circuit(color) {
  let out = '';
  for (let i = 0; i < 10; i++) {
    const y = 90 + i * 54;
    out += `<path d="M0 ${y} H ${180 + i * 22} V ${y + 34} H ${420 + i * 30} V ${y}" fill="none" stroke="${color}" stroke-width="1" opacity="0.10"/>`;
  }
  return out;
}
function scan(color) {
  let out = '';
  for (let i = 0; i < 12; i++) {
    out += `<circle cx="930" cy="320" r="${70 + i * 34}" fill="none" stroke="${color}" stroke-width="1" opacity="${0.13 - i * 0.008}"/>`;
  }
  out += `<rect x="720" y="150" width="380" height="330" fill="none" stroke="${color}" stroke-width="1" opacity="0.18" rx="18"/>`;
  out += `<line x1="720" y1="315" x2="1100" y2="315" stroke="${color}" stroke-width="1" opacity="0.12" stroke-dasharray="6 10"/>`;
  return out;
}

function coverSvg(c) {
  const labelW = c.label.length * 9.2 + 66;
  let motif = '';
  if (c.motif === 'contour') motif = contours(1, c.a2);
  else if (c.motif === 'stripes') motif = stripes(c.a2);
  else if (c.motif === 'nodes') motif = nodes(c.a2);
  else if (c.motif === 'circuit') motif = circuit(c.a2);
  else if (c.motif === 'scan') motif = scan(c.a2);

  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="${c.c1}"/><stop offset="1" stop-color="${c.c2}"/>
  </linearGradient>
  <radialGradient id="glow" cx="0.76" cy="0.38" r="0.62">
    <stop offset="0" stop-color="${c.a1}" stop-opacity="0.28"/>
    <stop offset="0.55" stop-color="${c.a1}" stop-opacity="0.06"/>
    <stop offset="1" stop-color="${c.a1}" stop-opacity="0"/>
  </radialGradient>
  <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
    <path d="M44 0H0V44" fill="none" stroke="#ffffff" stroke-opacity="0.045" stroke-width="1"/>
  </pattern>
  <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fff" stop-opacity="0.9"/><stop offset="1" stop-color="#fff" stop-opacity="0.15"/>
  </linearGradient>
  <mask id="gm"><rect width="${W}" height="${H}" fill="url(#gridFade)"/></mask>
  <linearGradient id="iconStroke" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="${c.a1}"/><stop offset="1" stop-color="${c.a2}"/>
  </linearGradient>
</defs>
<rect width="${W}" height="${H}" fill="url(#bg)"/>
<rect width="${W}" height="${H}" fill="url(#glow)"/>
<rect width="${W}" height="${H}" fill="url(#grid)" mask="url(#gm)"/>
${motif}
<circle cx="930" cy="320" r="210" fill="none" stroke="${c.a1}" stroke-opacity="0.10" stroke-width="1"/>
<circle cx="930" cy="320" r="250" fill="none" stroke="${c.a1}" stroke-opacity="0.06" stroke-width="1"/>
<g transform="translate(798 188) scale(11)" fill="none" stroke="url(#iconStroke)" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" opacity="0.95">
  ${icons[c.icon]}
</g>
<g>
  <rect x="64" y="56" width="${labelW}" height="38" rx="19" fill="#ffffff" fill-opacity="0.07" stroke="#ffffff" stroke-opacity="0.14"/>
  <circle cx="86" cy="75" r="4" fill="${c.a1}"/>
  <text x="102" y="80" font-family="Inter, 'Segoe UI', system-ui, sans-serif" font-size="13" font-weight="600" letter-spacing="2.2" fill="#ffffff" fill-opacity="0.82">${c.label}</text>
</g>
<rect x="64" y="592" width="54" height="3" rx="1.5" fill="${c.a1}" opacity="0.8"/>
<text x="64" y="630" font-family="Inter, 'Segoe UI', system-ui, sans-serif" font-size="13" font-weight="500" letter-spacing="3" fill="#ffffff" fill-opacity="0.30">LIKUN WANG</text>
<text x="1136" y="630" text-anchor="end" font-family="'SFMono-Regular', Consolas, monospace" font-size="12" letter-spacing="2" fill="#ffffff" fill-opacity="0.22">${c.slug.toUpperCase()}</text>
</svg>`;
}

const hero = `<svg width="1600" height="900" viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="hbg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#050d14"/><stop offset="0.55" stop-color="#071820"/><stop offset="1" stop-color="#0a2027"/>
  </linearGradient>
  <radialGradient id="hg1" cx="0.22" cy="0.18" r="0.5">
    <stop offset="0" stop-color="#22d3ee" stop-opacity="0.16"/><stop offset="1" stop-color="#22d3ee" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="hg2" cx="0.82" cy="0.72" r="0.55">
    <stop offset="0" stop-color="#14b8a6" stop-opacity="0.13"/><stop offset="1" stop-color="#14b8a6" stop-opacity="0"/>
  </radialGradient>
  <pattern id="hdots" width="26" height="26" patternUnits="userSpaceOnUse">
    <circle cx="1.5" cy="1.5" r="1.2" fill="#ffffff" fill-opacity="0.05"/>
  </pattern>
  <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="1"/><stop offset="1" stop-color="#fff" stop-opacity="0.2"/></linearGradient>
  <mask id="hm"><rect width="1600" height="900" fill="url(#fade)"/></mask>
</defs>
<rect width="1600" height="900" fill="url(#hbg)"/>
<rect width="1600" height="900" fill="url(#hg1)"/>
<rect width="1600" height="900" fill="url(#hg2)"/>
<rect width="1600" height="900" fill="url(#hdots)" mask="url(#hm)"/>
<g fill="none" stroke="#22d3ee" stroke-width="1">
  ${Array.from({length:11},(_,i)=>{const y=110+i*66, a=26+i*4;return `<path d="M-60 ${y} C 280 ${y-a}, 520 ${y+a}, 820 ${y-a*0.5} S 1330 ${y+a}, 1660 ${y-20}" opacity="${0.10-i*0.006}"/>`;}).join('')}
</g>
<g fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12">
  <path d="M1080 0 C 1000 180, 1180 260, 1100 430 S 1010 650, 1110 900"/>
  <path d="M1130 0 C 1050 180, 1230 260, 1150 430 S 1060 650, 1160 900"/>
  <path d="M1180 0 C 1100 180, 1280 260, 1200 430 S 1110 650, 1210 900"/>
</g>
<g fill="#22d3ee" opacity="0.5">
  ${Array.from({length:18},(_,i)=>`<circle cx="${1120+Math.sin(i*1.7)*190}" cy="${60+i*47}" r="1.6"/>`).join('')}
</g>
</svg>`;

const iconSvg = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#0b1f2a"/><stop offset="1" stop-color="#0e3a42"/>
  </linearGradient>
  <linearGradient id="a" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#22d3ee"/><stop offset="1" stop-color="#2dd4bf"/>
  </linearGradient>
</defs>
<rect width="512" height="512" rx="112" fill="url(#g)"/>
<circle cx="256" cy="256" r="176" fill="none" stroke="#ffffff" stroke-opacity="0.08" stroke-width="2"/>
<circle cx="256" cy="256" r="208" fill="none" stroke="#22d3ee" stroke-opacity="0.16" stroke-width="2"/>
<text x="256" y="322" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="208" font-weight="800" letter-spacing="-10" fill="#ffffff">LW</text>
<circle cx="392" cy="368" r="20" fill="url(#a)"/>
</svg>`;

fs.writeFileSync(path.join(ART, 'hero-bg.svg'), hero);
fs.writeFileSync(path.join(ART, 'icon.svg'), iconSvg);
for (const c of covers) {
  const svg = coverSvg(c);
  fs.writeFileSync(path.join(ART, `cover-${c.slug}.svg`), svg);
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9, palette: true, quality: 92 }).toFile(path.join(COVERS, `${c.slug}.png`));
}
await sharp(Buffer.from(hero)).png({ compressionLevel: 9, palette: true, quality: 90 }).toFile(path.join(OUT, 'assets/media/hero-bg.png'));
fs.copyFileSync(path.join(ART, 'hero-bg.svg'), path.join(OUT, 'assets/media/hero-bg.svg'));
await sharp(Buffer.from(iconSvg)).png().resize(512,512).toFile(path.join(OUT, 'assets/media/icon.png'));
console.log('done');
