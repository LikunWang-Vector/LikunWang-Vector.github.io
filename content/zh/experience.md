---
title: '经历与教育'
date: 2023-10-24
type: landing

design:
  spacing: '4.6rem'

# Note: `username` refers to the user's folder name in `content/authors/`

sections:
  - block: markdown
    id: experience-intro
    content:
      title: 经历与教育
      subtitle: 从实习与科研，到现在的 AI 硬件工作。
      text: |-
        这里按时间顺序整理了工作与教育经历，以及塑造它们的科研项目与荣誉。
    design:
      wide: false

  - block: resume-experience
    content:
      username: admin
    design:
      date_format: '2006年1月'
      is_education_first: false

  - block: markdown
    id: research
    content:
      title: 科研经历
      subtitle: 这些项目塑造了我对模型、结构与证据的理解。
      text: |-
        <div class="lgc-focus-grid">
          <div class="lgc-focus-card">
            <div class="lgc-focus-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"/><path d="M18 12v.5"/><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"/><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"/></svg></div>
            <h3>鱼椎骨负载力预测</h3>
            <p><strong>早稻田大学 · 最优化实验室</strong><br>导师：山崎慎太郎 教授 · 2024–2025</p>
            <p>结合 CT 重建、COMSOL 有限元分析、拓扑优化与深度神经网络，并在 WCSMO-16 作口头报告。</p>
          </div>
          <div class="lgc-focus-card">
            <div class="lgc-focus-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="m16 16-1.9-1.9"/></svg></div>
            <h3>驾驶员情绪识别</h3>
            <p><strong>电子科技大学 · 计算机科学与工程学院</strong><br>导师：叶娅兰 教授 · 2023–2024</p>
            <p>基于改进 YOLOv7 的实时面部表情情绪识别系统，包含自定义数据集与 PyQt5 界面。</p>
          </div>
          <div class="lgc-focus-card">
            <div class="lgc-focus-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21.42 10.92a1 1 0 0 0-.02-1.84L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg></div>
            <h3>多智能体信用分配</h3>
            <p><strong>剑桥大学 · 冬季项目</strong><br>导师：Pietro Lio 教授 · 2023</p>
            <p>完成多智能体强化学习中信用分配方法的综述论文。</p>
          </div>
          <div class="lgc-focus-card">
            <div class="lgc-focus-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <h3>教学与指导</h3>
            <p><strong>早稻田大学 · 电子科技大学</strong><br>2020–2025</p>
            <p>学生事务与班级工作，以及在 Python、深度学习与研究方法上的非正式指导。</p>
            <p><a href="/zh/teaching/">了解教学经历 →</a></p>
          </div>
        </div>
    design:
      wide: true
      prose: false

  - block: resume-skills
    content:
      title: 技能与工具箱
      username: admin
    design:
      show_skill_percentage: false

  - block: resume-awards
    content:
      title: 荣誉与奖项
      username: admin

  - block: resume-languages
    content:
      title: 语言
      username: admin

  - block: markdown
    id: experience-cta
    content:
      title: ""
      text: |-
        <div class="lgc-contact-cta">
          <p><strong>想要一页纸版本？</strong><br>简历汇总了上述经历、科研与荣誉。</p>
          <div class="lgc-actions">
            <a class="lgc-btn lgc-btn-primary" href="/uploads/resume-zh.pdf">下载简历</a>
            <a class="lgc-btn" href="/zh/#contact">联系我</a>
          </div>
        </div>
    design:
      wide: true
      prose: false
---
