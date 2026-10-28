---
title: ""
date: 2022-10-24
type: landing

design:
  spacing: "4.6rem"

sections:
  # Hero
  - block: resume-biography-3
    id: about
    content:
      username: admin
      text: ""
      button:
        text: 下载简历
        url: /uploads/resume-zh.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          filename: hero-bg.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false

  - block: markdown
    id: highlights
    content:
      title: ""
      text: |-
        <div class="lgc-highlights">
          <div class="lgc-highlight">
            <span class="lgc-highlight-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg></span>
            <div><strong>TPU 算子工程师</strong><span>深圳算海科技 · 2025 至今</span></div>
          </div>
          <div class="lgc-highlight">
            <span class="lgc-highlight-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg></span>
            <div><strong>WCSMO-16 口头报告</strong><span>日本神户 · 2025.05</span></div>
          </div>
          <div class="lgc-highlight">
            <span class="lgc-highlight-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21.42 10.92a1 1 0 0 0-.02-1.84L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg></span>
            <div><strong>早稻田大学 工学硕士</strong><span>最优化实验室 · 2023–2025</span></div>
          </div>
          <div class="lgc-highlight">
            <span class="lgc-highlight-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/></svg></span>
            <div><strong>文部科学省荣誉奖学金</strong><span>JASSO · 2023</span></div>
          </div>
        </div>
    design:
      wide: true
      prose: false

  - block: markdown
    id: focus
    content:
      title: 我的工作
      subtitle: 我的工作跨越 AI 系统与计算工程。
      text: |-
        <div class="lgc-focus-grid">
          <div class="lgc-focus-card">
            <div class="lgc-focus-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg></div>
            <h3>TPU 与硬件加速</h3>
            <p>负责 TPU 推理栈算子的实现与优化，关注数值正确性、精度与性能。</p>
            <span class="lgc-focus-label">当前方向</span>
          </div>
          <div class="lgc-focus-card">
            <div class="lgc-focus-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L3.17 12.5"/><path d="m22 17-8.58 3.91a2 2 0 0 1-1.66 0L3.17 17"/></svg></div>
            <h3>深度学习部署</h3>
            <p>通过工具链与运行时改进，将 PyTorch、TensorFlow 模型部署到专用硬件。</p>
            <span class="lgc-focus-label">系统</span>
          </div>
          <div class="lgc-focus-card">
            <div class="lgc-focus-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"/><path d="M18 12v.5"/><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"/><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"/><path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"/><path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"/></svg></div>
            <h3>仿生结构设计</h3>
            <p>结合有限元分析、拓扑优化与神经网络，理解自然结构如何承载载荷。</p>
            <span class="lgc-focus-label">科研</span>
          </div>
          <div class="lgc-focus-card">
            <div class="lgc-focus-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="m16 16-1.9-1.9"/></svg></div>
            <h3>计算机视觉</h3>
            <p>使用 YOLO 系列架构构建实时检测系统，从数据集构建到可用界面。</p>
            <span class="lgc-focus-label">应用 AI</span>
          </div>
        </div>
        <div class="lgc-tag-row">
          <span class="lgc-tag">人工智能</span>
          <span class="lgc-tag">TPU 算子</span>
          <span class="lgc-tag">工具链优化</span>
          <span class="lgc-tag">拓扑优化</span>
          <span class="lgc-tag">计算机视觉</span>
          <span class="lgc-tag">有限元分析与科学计算</span>
        </div>
    design:
      wide: true
      prose: false

  - block: collection
    id: projects
    content:
      title: 精选项目
      text: 涵盖 AI 系统、计算机视觉与计算设计的代表性工作。
      filters:
        folders:
          - project
        featured_only: true
      count: 3
      archive:
        enable: true
        text: 全部项目 →
    design:
      view: article-grid
      columns: 3

  - block: collection
    id: papers
    content:
      title: 学术论文
      text: 同行评审论文与会议报告。
      filters:
        folders:
          - publication
        featured_only: true
      count: 1
      archive:
        enable: true
        text: 全部论文 →
    design:
      view: citation
      columns: 1

  - block: collection
    id: talks
    content:
      title: 演讲与报告
      text: 学术会议报告与演讲。
      filters:
        folders:
          - event
      count: 2
      archive:
        enable: true
        text: 全部演讲 →
    design:
      view: talk-card
      columns: 1

  - block: collection
    id: news
    content:
      title: 最新文章
      text: 关于科研、工程与二者之间的思考。
      page_type: post
      count: 3
      filters:
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
      order: desc
      archive:
        enable: true
        text: 全部文章 →
    design:
      view: article-grid
      columns: 2

  - block: markdown
    id: stack
    content:
      title: 技术栈
      subtitle: 我日常使用最多的工具。
      text: |-
        <div class="lgc-stack">
          <div class="lgc-stack-group">
            <div class="lgc-stack-label">编程语言</div>
            <div class="lgc-stack-items">
              <span class="lgc-stack-item">Python</span>
              <span class="lgc-stack-item">SQL</span>
              <span class="lgc-stack-item">Java</span>
              <span class="lgc-stack-item">MATLAB</span>
            </div>
          </div>
          <div class="lgc-stack-group">
            <div class="lgc-stack-label">AI / 机器学习</div>
            <div class="lgc-stack-items">
              <span class="lgc-stack-item">PyTorch</span>
              <span class="lgc-stack-item">TensorFlow</span>
              <span class="lgc-stack-item">YOLO</span>
              <span class="lgc-stack-item">OpenCV</span>
            </div>
          </div>
          <div class="lgc-stack-group">
            <div class="lgc-stack-label">系统与工程</div>
            <div class="lgc-stack-items">
              <span class="lgc-stack-item">TPU 算子</span>
              <span class="lgc-stack-item">工具链</span>
              <span class="lgc-stack-item">COMSOL</span>
              <span class="lgc-stack-item">拓扑优化</span>
              <span class="lgc-stack-item">有限元分析</span>
            </div>
          </div>
          <div class="lgc-stack-group">
            <div class="lgc-stack-label">工具</div>
            <div class="lgc-stack-items">
              <span class="lgc-stack-item">Git</span>
              <span class="lgc-stack-item">PyQt5</span>
              <span class="lgc-stack-item">SQLite</span>
              <span class="lgc-stack-item">Tableau</span>
            </div>
          </div>
        </div>
    design:
      wide: true
      prose: false

  - block: markdown
    id: contact
    content:
      title: 联系我
      subtitle: ""
      text: |-
        <p class="lgc-contact-intro">我随时欢迎关于 AI 系统、计算机视觉或计算设计的交流，也乐于分享一路上的经验。</p>
        <div class="lgc-contact-grid">
          <div class="lgc-contact-card">
            <a class="lgc-contact-main" href="mailto:vector_kun@ruri.waseda.jp">
              <span class="lgc-contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span>
              <span class="lgc-contact-text"><span>邮箱</span><strong>vector_kun@ruri.waseda.jp</strong></span>
            </a>
            <button class="lgc-copy" type="button" data-copy-value="vector_kun@ruri.waseda.jp" aria-label="复制邮箱" title="复制邮箱"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button>
          </div>
          <div class="lgc-contact-card">
            <a class="lgc-contact-main" href="https://github.com/LikunWang-Vector" target="_blank" rel="noopener">
              <span class="lgc-contact-icon"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg></span>
              <span class="lgc-contact-text"><span>GitHub</span><strong>@LikunWang-Vector</strong></span>
            </a>
          </div>
          <div class="lgc-contact-card">
            <a class="lgc-contact-main" href="https://www.linkedin.com/in/veckun/" target="_blank" rel="noopener">
              <span class="lgc-contact-icon"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45z"/></svg></span>
              <span class="lgc-contact-text"><span>领英</span><strong>in/veckun</strong></span>
            </a>
          </div>
          <div class="lgc-contact-card">
            <a class="lgc-contact-main" href="https://scholar.google.com/citations?user=z0AZmR4AAAAJ&amp;hl=zh-CN" target="_blank" rel="noopener">
              <span class="lgc-contact-icon"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.242 13.769 0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg></span>
              <span class="lgc-contact-text"><span>谷歌学术</span><strong>论文与主页</strong></span>
            </a>
          </div>
          <div class="lgc-contact-card">
            <a class="lgc-contact-main" href="https://blog.csdn.net/m0_59180666" target="_blank" rel="noopener">
              <span class="lgc-contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg></span>
              <span class="lgc-contact-text"><span>CSDN 博客</span><strong>blog.csdn.net/m0_59180666</strong></span>
            </a>
          </div>
          <div class="lgc-contact-card">
            <div class="lgc-contact-main">
              <span class="lgc-contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01M12 10h.01M16 10h.01"/></svg></span>
              <span class="lgc-contact-text"><span>微信</span><strong>vectorkun</strong></span>
            </div>
            <button class="lgc-copy" type="button" data-copy-value="vectorkun" aria-label="复制微信号" title="复制微信号"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button>
          </div>
        </div>
        <div class="lgc-contact-cta">
          <p><strong>有想法想一起实现？</strong><br>欢迎交流科研合作、工程机会或任何有趣的问题。</p>
          <div class="lgc-actions">
            <a class="lgc-btn lgc-btn-primary" href="mailto:vector_kun@ruri.waseda.jp">发邮件 →</a>
            <a class="lgc-btn" href="/uploads/resume-zh.pdf">下载简历</a>
          </div>
        </div>
    design:
      wide: true
      prose: false
---
