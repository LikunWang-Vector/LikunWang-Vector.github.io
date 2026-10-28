import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const ART = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(ART, '../..');
const OUT = path.join(ROOT, 'static/uploads');
fs.mkdirSync(ART, { recursive: true });
fs.mkdirSync(OUT, { recursive: true });

const photo = fs.readFileSync(path.join(ART, 'photo.jpg')).toString('base64');
const photoUri = `data:image/jpeg;base64,${photo}`;

const data = {
  en: {
    lang: 'en',
    name: 'Wang Likun',
    cn: '王立坤',
    role: 'Algorithm Engineer · AI Systems & Hardware Acceleration',
    location: 'Shenzhen, China',
    summary:
      'Algorithm Engineer working on TPU operator development and toolchain optimization, with an M.Eng. in Information, Production and Systems from Waseda University. Background across computer vision, deep learning, finite element analysis, and bio-inspired structural optimization. Monbukagakusho Honors Scholarship recipient and WCSMO-16 oral presenter.',
    sections: {
      experience: 'Experience',
      research: 'Research Experience',
      publication: 'Publication & Talk',
      education: 'Education',
      awards: 'Awards & Honors',
      skills: 'Technical Skills',
      languages: 'Languages',
    },
    experience: [
      {
        title: 'Algorithm Engineer',
        org: 'Shenzhen Suanhai Technology Co., Ltd.',
        meta: 'Shenzhen, China · Sep 2025 – Present',
        bullets: [
          'Develop and optimize operators for a TPU inference stack, focusing on correctness, precision, and performance.',
          'Improve toolchain workflows for deploying deep learning models on specialized hardware.',
          'Profile operator-level bottlenecks and validate numerical behavior against reference implementations.',
        ],
      },
      {
        title: 'Production Operation Intern',
        org: 'iFLYTEK Co., Ltd.',
        meta: 'Hefei, China · Aug 2024 – Sep 2024',
        bullets: [
          'Led core feature testing and optimization for the input-method assistant.',
          'Analyzed competitors and improved the Quick Phrase and floating-bar experience.',
        ],
      },
      {
        title: 'Project Manager Intern',
        org: 'Sichuan Huadi Information Technology Co., Ltd.',
        meta: 'Chengdu, China · Jun 2022 – Jul 2022',
        bullets: [
          'Contributed to full-stack development of a mobile homestay-booking application (Android/MyBatis).',
          'Implemented page layouts, feature modules, debugging, and stability checks.',
        ],
      },
      {
        title: 'Product Analyst Intern',
        org: 'Alibaba Entertainment',
        meta: 'China · May 2022 – Jun 2022',
        bullets: [
          'Extracted and analyzed user-behavior data with SQL and Python.',
          'Built Tableau dashboards and wrote reports supporting product strategy.',
        ],
      },
    ],
    research: [
      {
        title: 'Fish Vertebrae Loading-Force Prediction',
        org: 'Waseda University · Optimization Lab',
        meta: 'Advisor: Prof. Shintaro Yamasaki · Apr 2024 – Jul 2025',
        bullets: [
          'Built a framework combining CT-based 3D reconstruction, COMSOL finite element analysis, topology optimization, and a deep neural network.',
          'Improved prediction accuracy and computational efficiency by over 20% versus conventional approaches.',
          'Presented the work orally at WCSMO-16 (Kobe, Japan, May 2025).',
        ],
      },
      {
        title: 'Driver Emotion Recognition System',
        org: 'UESTC · School of Computer Science and Engineering',
        meta: 'Advisor: Prof. Yalan Ye · Oct 2023 – May 2024',
        bullets: [
          'Developed a real-time facial-expression-based emotion recognition system with a modified YOLOv7 architecture.',
          'Built a custom dataset, a PyQt5 interface, and a SQLite logging backend.',
        ],
      },
    ],
    publication: {
      text:
        'Wang, L., Yang, L., Sakashita, M., & Yamasaki, S. (2025). A Framework for Predicting Loading Forces Applied on Fish Vertebrae Based on Topology Optimization and Deep Neural Network. Oral presentation at WCSMO-16, Kobe, Japan.',
      note: 'Oral presentation · 16th World Congress of Structural and Multidisciplinary Optimization',
    },
    education: [
      {
        title: 'M.Eng. Information, Production and Systems Engineering',
        org: 'Waseda University',
        meta: 'Fukuoka, Japan · Sep 2023 – Jul 2025',
        bullets: ['Advisor: Prof. Shintaro Yamasaki', 'Monbukagakusho Honors Scholarship (JASSO)'],
      },
      {
        title: 'B.Eng. Computer Science and Technology',
        org: 'University of Electronic Science and Technology of China',
        meta: 'Chengdu, China · Sep 2020 – Jun 2024',
        bullets: ['UESTC–Waseda G-Course joint program', 'Class monitor, 2020–2023'],
      },
      {
        title: 'Winter Programme, Computer Science and Technology',
        org: 'University of Cambridge',
        meta: 'Cambridge, UK · Jan 2023 – Feb 2023',
        bullets: [],
      },
    ],
    awards: [
      ['WCSMO-16 Oral Presentation', 'World Congress of Structural and Multidisciplinary Optimization · 2025'],
      ['Monbukagakusho Honors Scholarship', 'Japan Student Services Organization (JASSO) · 2023'],
      ['MCM/ICM Honorable Mention', 'COMAP · 2023'],
      ['Tencent Game Design Workshop, Silver Award', 'Tencent Games · 2022'],
      ['Huawei Cloud “Youth of Promise”', 'Huawei Cloud · 2022'],
      ['Innovation & Entrepreneurship Competition, Excellence Award', 'UESTC · 2022'],
    ],
    skills: [
      ['Programming', 'Python, SQL, Java, MATLAB'],
      ['AI / ML', 'PyTorch, TensorFlow, YOLO, computer vision, data analysis'],
      ['Engineering', 'COMSOL, topology optimization, finite element analysis'],
      ['Tools', 'Git, PyQt5, SQLite, Tableau'],
    ],
    languages: [
      ['Chinese', 'Native'],
      ['English', 'Professional'],
      ['Japanese', 'Conversational'],
    ],
    footer: 'Last updated October 2026 · likunwang-vector.github.io',
    contact: [
      'vector_kun@ruri.waseda.jp',
      'likunwang-vector.github.io',
      'github.com/LikunWang-Vector',
      'linkedin.com/in/veckun',
    ],
  },
  zh: {
    lang: 'zh-CN',
    name: '王立坤',
    cn: 'Wang Likun',
    role: '算法工程师 · AI 系统与硬件加速',
    location: '中国 · 深圳',
    summary:
      '算法工程师，专注于 TPU 算子开发与工具链优化，早稻田大学信息生产系统工学硕士。具备计算机视觉、深度学习、有限元分析与仿生结构优化的跨学科背景。日本文部科学省荣誉奖学金（JASSO）获得者，WCSMO-16 口头报告人。',
    sections: {
      experience: '工作经历',
      research: '科研经历',
      publication: '论文与报告',
      education: '教育背景',
      awards: '荣誉奖项',
      skills: '技术能力',
      languages: '语言',
    },
    experience: [
      {
        title: '算法工程师',
        org: '深圳算海科技有限公司',
        meta: '中国深圳 · 2025.09 – 至今',
        bullets: [
          '负责 TPU 推理栈算子开发与优化，关注正确性、精度与性能。',
          '改进深度学习模型在专用硬件上的工具链部署流程。',
          '分析算子级性能瓶颈，并对照参考实现验证数值行为。',
        ],
      },
      {
        title: '产品运营实习生',
        org: '科大讯飞股份有限公司',
        meta: '中国合肥 · 2024.08 – 2024.09',
        bullets: [
          '主导输入法助手核心功能的测试与优化。',
          '通过竞品分析提出界面与功能改进建议。',
          '优化快捷短语库与悬浮条体验。',
        ],
      },
      {
        title: '项目经理实习生',
        org: '四川华迪信息技术有限公司',
        meta: '中国成都 · 2022.06 – 2022.07',
        bullets: [
          '参与民宿预订移动端全栈开发（Android/MyBatis）。',
          '负责页面布局、功能模块开发、调试与稳定性检查。',
        ],
      },
      {
        title: '产品分析实习生',
        org: '阿里巴巴文化娱乐有限公司',
        meta: '中国 · 2022.05 – 2022.06',
        bullets: ['使用 SQL 与 Python 提取并分析用户行为数据。', '制作 Tableau 可视化仪表盘并撰写产品策略报告。'],
      },
    ],
    research: [
      {
        title: '鱼椎骨负载力预测研究',
        org: '早稻田大学 · 最优化实验室',
        meta: '导师：山崎慎太郎 教授 · 2024.04 – 2025.07',
        bullets: [
          '构建结合 CT 三维重建、COMSOL 有限元分析、拓扑优化与深度神经网络的预测框架。',
          '相比传统方法，预测精度与计算效率提升 20% 以上。',
          '在 WCSMO-16（日本神户，2025 年 5 月）作口头报告。',
        ],
      },
      {
        title: '驾驶员情绪识别系统',
        org: '电子科技大学 · 计算机科学与工程学院',
        meta: '导师：叶娅兰 教授 · 2023.10 – 2024.05',
        bullets: [
          '基于改进 YOLOv7 架构开发实时面部表情情绪识别系统。',
          '构建自定义数据集、PyQt5 界面与 SQLite 日志后端。',
        ],
      },
    ],
    publication: {
      text:
        'Wang, L., Yang, L., Sakashita, M., & Yamasaki, S. (2025). A Framework for Predicting Loading Forces Applied on Fish Vertebrae Based on Topology Optimization and Deep Neural Network. 第 16 届世界结构与多学科优化大会（WCSMO-16），日本神户，口头报告。',
      note: '口头报告 · 第 16 届世界结构与多学科优化大会',
    },
    education: [
      {
        title: '信息生产系统工学 硕士',
        org: '早稻田大学',
        meta: '日本福冈 · 2023.09 – 2025.07',
        bullets: ['导师：山崎慎太郎 教授', '日本文部科学省荣誉奖学金（JASSO）'],
      },
      {
        title: '计算机科学与技术 学士',
        org: '电子科技大学',
        meta: '中国成都 · 2020.09 – 2024.06',
        bullets: ['电子科技大学–早稻田大学 G-Course 联合培养项目', '班长，2020–2023'],
      },
      {
        title: '计算机科学与技术 冬季项目',
        org: '剑桥大学',
        meta: '英国剑桥 · 2023.01 – 2023.02',
        bullets: [],
      },
    ],
    awards: [
      ['WCSMO-16 口头报告', '世界结构与多学科优化大会 · 2025'],
      ['日本文部科学省荣誉奖学金', '日本学生支援机构（JASSO）· 2023'],
      ['美国大学生数学建模竞赛 Honorable Mention', 'COMAP · 2023'],
      ['腾讯游戏策划公开课 银奖', '腾讯游戏 · 2022'],
      ['华为云“青年有为”称号', '华为云 · 2022'],
      ['大学生创新创业训练竞赛 优秀奖', '电子科技大学 · 2022'],
    ],
    skills: [
      ['编程语言', 'Python、SQL、Java、MATLAB'],
      ['AI / 机器学习', 'PyTorch、TensorFlow、YOLO、计算机视觉、数据分析'],
      ['工程计算', 'COMSOL、拓扑优化、有限元分析'],
      ['工具', 'Git、PyQt5、SQLite、Tableau'],
    ],
    languages: [
      ['中文', '母语'],
      ['英语', '专业工作水平'],
      ['日语', '日常交流'],
    ],
    footer: '最后更新：2026 年 10 月 · likunwang-vector.github.io',
    contact: [
      'vector_kun@ruri.waseda.jp',
      'likunwang-vector.github.io',
      'github.com/LikunWang-Vector',
      'linkedin.com/in/veckun',
    ],
  },
};

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function render(d) {
  const section = (title) => `<h2 class="sec-title">${esc(title)}</h2>`;
  const jobs = d.experience
    .map(
      (j) => `<article class="item">
      <div class="item-head"><strong>${esc(j.title)}</strong><span>${esc(j.meta)}</span></div>
      <div class="org">${esc(j.org)}</div>
      <ul>${j.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
    </article>`
    )
    .join('');
  const research = d.research
    .map(
      (r) => `<article class="item">
      <div class="item-head"><strong>${esc(r.title)}</strong><span>${esc(r.meta)}</span></div>
      <div class="org">${esc(r.org)}</div>
      <ul>${r.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
    </article>`
    )
    .join('');
  const education = d.education
    .map(
      (e) => `<article class="item edu">
      <div class="item-head"><strong>${esc(e.title)}</strong></div>
      <div class="org">${esc(e.org)} <span class="meta">${esc(e.meta)}</span></div>
      ${e.bullets.length ? `<ul>${e.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>` : ''}
    </article>`
    )
    .join('');
  const awards = d.awards
    .map(([a, b]) => `<li class="award"><strong>${esc(a)}</strong><span>${esc(b)}</span></li>`)
    .join('');
  const skills = d.skills
    .map(([k, v]) => `<div class="skill"><span>${esc(k)}</span><p>${esc(v)}</p></div>`)
    .join('');
  const languages = d.languages
    .map(([k, v]) => `<div class="lang"><strong>${esc(k)}</strong><span>${esc(v)}</span></div>`)
    .join('');
  const contact = d.contact.map((c) => `<span>${esc(c)}</span>`).join('');

  return `<!doctype html><html lang="${d.lang}"><head><meta charset="utf-8"><title>${esc(d.name)} — CV</title>
<style>
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: #fff; color: #16212b; }
  body {
    width: 210mm; min-height: 297mm; padding: 10mm 12mm 8mm;
    font-family: "Inter", "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", sans-serif;
    font-size: 7.9pt; line-height: 1.34; -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  a { color: inherit; text-decoration: none; }
  .top { display: flex; align-items: flex-start; justify-content: space-between; gap: 8mm; }
  .name-row { display: flex; align-items: baseline; gap: 3.5mm; }
  h1 { margin: 0; font-size: 23pt; line-height: 1; letter-spacing: -.02em; font-weight: 800; color: #0b1a24; }
  .cn { font-size: 11pt; color: #607482; font-weight: 600; letter-spacing: .04em; }
  .role { margin-top: 2.4mm; font-size: 9.7pt; font-weight: 600; color: #0e7490; }
  .role .loc { color: #7a8d99; font-weight: 500; }
  .contact { margin-top: 2.4mm; display: flex; flex-wrap: wrap; gap: 1mm 3.5mm; color: #5d707d; font-size: 7.5pt; }
  .contact span::before { content: ""; display: inline-block; width: 1.4mm; height: 1.4mm; margin-right: 1.6mm; border-radius: 50%; background: #22d3ee; vertical-align: .3mm; }
  .photo { width: 21mm; height: 21mm; border-radius: 50%; object-fit: cover; border: 2px solid #e0f7fa; box-shadow: 0 0 0 1px #c9e8ee; }
  .summary { margin: 4.2mm 0 0; padding: 3mm 4mm; border-left: 2.5px solid #22d3ee; background: #f4fbfc; color: #334a58; font-size: 8.1pt; line-height: 1.5; }
  .rule { height: 1px; background: #e3ebef; margin: 4.2mm 0 0; }
  .grid { display: grid; grid-template-columns: 1.62fr 1fr; gap: 6.5mm; margin-top: 4mm; }
  h2.sec-title { margin: 0 0 2mm; padding-bottom: 1mm; border-bottom: 1px solid #e3ebef; font-size: 8.7pt; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; color: #0b1a24; }
  h2.sec-title::before { content: ""; display: inline-block; width: 3mm; height: 2mm; margin-right: 1.8mm; background: #22d3ee; border-radius: .6mm; vertical-align: .2mm; }
  section + section { margin-top: 3.2mm; }
  .item + .item { margin-top: 2.2mm; }
  .item-head { display: flex; align-items: baseline; justify-content: space-between; gap: 3mm; }
  .item-head strong { font-size: 8.8pt; font-weight: 700; color: #12222c; }
  .item-head span { font-size: 7.1pt; color: #7a8d99; white-space: nowrap; }
  .org { color: #0e7490; font-weight: 600; font-size: 7.8pt; margin-top: .2mm; }
  .org .meta { color: #7a8d99; font-weight: 400; font-size: 7pt; }
  ul { margin: .8mm 0 0; padding-left: 3.6mm; }
  li { margin: 0 0 .4mm; color: #3d515e; }
  li::marker { color: #22d3ee; }
  .pub { padding: 2.6mm 3.4mm; border-radius: 2mm; background: #f7fafb; border: 1px solid #e6eef1; color: #334a58; font-size: 7.8pt; }
  .pub .note { margin-top: 1.4mm; color: #0e7490; font-size: 7.1pt; font-weight: 600; }
  .edu .org { margin-bottom: .4mm; }
  .awards { list-style: none; padding: 0; margin: 0; }
  .award { margin-bottom: 1.5mm; }
  .award strong { display: block; font-size: 7.9pt; color: #1c2e39; font-weight: 650; }
  .award span { display: block; font-size: 7pt; color: #7a8d99; margin-top: .1mm; }
  .skill { margin-bottom: 1.6mm; }
  .skill span { display: block; font-size: 6.8pt; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; color: #0e7490; }
  .skill p { margin: .3mm 0 0; color: #3d515e; font-size: 7.7pt; }
  .langs { display: flex; flex-direction: column; gap: 1.2mm; }
  .lang { display: flex; justify-content: space-between; gap: 3mm; border-bottom: 1px dashed #e6eef1; padding-bottom: .8mm; }
  .lang strong { font-size: 7.7pt; color: #1c2e39; }
  .lang span { font-size: 7.1pt; color: #7a8d99; }
  .footer { margin-top: 3.6mm; padding-top: 1.8mm; border-top: 1px solid #e3ebef; display: flex; justify-content: space-between; color: #93a4af; font-size: 6.6pt; }
</style></head><body>
  <header>
    <div class="top">
      <div>
        <div class="name-row"><h1>${esc(d.name)}</h1>${d.cn ? `<span class="cn">${esc(d.cn)}</span>` : ''}</div>
        <div class="role">${esc(d.role)}<span class="loc"> · ${esc(d.location)}</span></div>
        <div class="contact">${contact}</div>
      </div>
      <img class="photo" src="${photoUri}" alt="">
    </div>
    <p class="summary">${esc(d.summary)}</p>
    <div class="rule"></div>
  </header>
  <div class="grid">
    <div class="col">
      <section>${section(d.sections.experience)}${jobs}</section>
      <section>${section(d.sections.research)}${research}</section>
      <section>${section(d.sections.publication)}<div class="pub">${esc(d.publication.text)}<div class="note">${esc(d.publication.note)}</div></div></section>
    </div>
    <aside>
      <section>${section(d.sections.education)}${education}</section>
      <section>${section(d.sections.awards)}<ul class="awards">${awards}</ul></section>
      <section>${section(d.sections.skills)}${skills}</section>
      <section>${section(d.sections.languages)}<div class="langs">${languages}</div></section>
    </aside>
  </div>
  <div class="footer"><span>${esc(d.footer)}</span><span>${esc(d.name)} · ${esc(d.role)}</span></div>
</body></html>`;
}

const chrome = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const browser = await puppeteer.launch({ executablePath: chrome, headless: 'new', args: ['--no-sandbox', '--font-render-hinting=none'] });
for (const key of ['en', 'zh']) {
  const html = render(data[key]);
  fs.writeFileSync(path.join(ART, `resume-${key}.html`), html);
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: path.join(OUT, key === 'en' ? 'resume.pdf' : 'resume-zh.pdf'),
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: false,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });
  await page.close();
  console.log('generated', key);
}
await browser.close();
