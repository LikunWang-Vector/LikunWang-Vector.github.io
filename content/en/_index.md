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
        text: Download CV
        url: /uploads/resume.pdf
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

  # Credibility strip overlapping the hero
  - block: markdown
    id: highlights
    content:
      title: ""
      text: |-
        <div class="lgc-highlights">
          <div class="lgc-highlight">
            <span class="lgc-highlight-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg></span>
            <div><strong>TPU Operator Engineer</strong><span>Suanhai Technology · 2025–now</span></div>
          </div>
          <div class="lgc-highlight">
            <span class="lgc-highlight-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg></span>
            <div><strong>WCSMO-16 Oral Presenter</strong><span>Kobe, Japan · May 2025</span></div>
          </div>
          <div class="lgc-highlight">
            <span class="lgc-highlight-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21.42 10.92a1 1 0 0 0-.02-1.84L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg></span>
            <div><strong class="notranslate">M.Eng. · Waseda University</strong><span>Optimization Lab · 2023–2025</span></div>
          </div>
          <div class="lgc-highlight">
            <span class="lgc-highlight-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/></svg></span>
            <div><strong class="notranslate">Honors Scholar</strong><span>Monbukagakusho · JASSO, 2023</span></div>
          </div>
        </div>
    design:
      wide: true
      prose: false

  # What I do
  - block: markdown
    id: focus
    content:
      title: What I Do
      subtitle: My work sits at the intersection of AI systems and computational engineering.
      text: |-
        <div class="lgc-focus-grid">
          <div class="lgc-focus-card">
            <div class="lgc-focus-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg></div>
            <h3>TPU &amp; Hardware Acceleration</h3>
            <p>Implementing and optimizing operators for a TPU inference stack, with a focus on numerical correctness, precision, and performance.</p>
            <span class="lgc-focus-label">Current focus</span>
          </div>
          <div class="lgc-focus-card">
            <div class="lgc-focus-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L3.17 12.5"/><path d="m22 17-8.58 3.91a2 2 0 0 1-1.66 0L3.17 17"/></svg></div>
            <h3>Deep Learning Deployment</h3>
            <p>Moving PyTorch and TensorFlow models onto specialized hardware through toolchain and runtime improvements.</p>
            <span class="lgc-focus-label">Systems</span>
          </div>
          <div class="lgc-focus-card">
            <div class="lgc-focus-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"/><path d="M18 12v.5"/><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"/><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"/><path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"/><path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"/></svg></div>
            <h3>Bio-inspired Design</h3>
            <p>Combining finite element analysis, topology optimization, and neural networks to understand how natural structures carry load.</p>
            <span class="lgc-focus-label">Research</span>
          </div>
          <div class="lgc-focus-card">
            <div class="lgc-focus-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="m16 16-1.9-1.9"/></svg></div>
            <h3>Computer Vision</h3>
            <p>Building real-time detection systems with YOLO-family architectures, from dataset construction to a usable interface.</p>
            <span class="lgc-focus-label">Applied AI</span>
          </div>
        </div>
        <div class="lgc-tag-row">
          <span class="lgc-tag">Artificial Intelligence</span>
          <span class="lgc-tag">TPU Operators</span>
          <span class="lgc-tag">Toolchain Optimization</span>
          <span class="lgc-tag">Topology Optimization</span>
          <span class="lgc-tag">Computer Vision</span>
          <span class="lgc-tag">FEA &amp; Scientific Computing</span>
        </div>
    design:
      wide: true
      prose: false

  # Featured projects
  - block: collection
    id: projects
    content:
      title: Featured Projects
      text: Selected work across AI systems, computer vision, and computational design.
      filters:
        folders:
          - project
        featured_only: true
      count: 3
      archive:
        enable: true
        text: All projects →
    design:
      view: article-grid
      columns: 3

  # Publications
  - block: collection
    id: papers
    content:
      title: Publications
      text: Peer-reviewed work and conference presentations.
      filters:
        folders:
          - publication
        featured_only: true
      count: 1
      archive:
        enable: true
        text: All publications →
    design:
      view: citation
      columns: 1

  # Talks
  - block: collection
    id: talks
    content:
      title: Talks
      text: Conference presentations and invited talks.
      filters:
        folders:
          - event
      count: 2
      archive:
        enable: true
        text: All talks →
    design:
      view: talk-card
      columns: 1

  # Blog
  - block: collection
    id: news
    content:
      title: Latest Posts
      text: Notes on research, engineering, and the space between.
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
        text: All posts →
    design:
      view: article-grid
      columns: 2

  # Tech stack
  - block: markdown
    id: stack
    content:
      title: Tech Stack
      subtitle: The tools I reach for most often.
      text: |-
        <div class="lgc-stack">
          <div class="lgc-stack-group">
            <div class="lgc-stack-label">Languages</div>
            <div class="lgc-stack-items">
              <span class="lgc-stack-item">Python</span>
              <span class="lgc-stack-item">SQL</span>
              <span class="lgc-stack-item">Java</span>
              <span class="lgc-stack-item">MATLAB</span>
            </div>
          </div>
          <div class="lgc-stack-group">
            <div class="lgc-stack-label">AI / ML</div>
            <div class="lgc-stack-items">
              <span class="lgc-stack-item">PyTorch</span>
              <span class="lgc-stack-item">TensorFlow</span>
              <span class="lgc-stack-item">YOLO</span>
              <span class="lgc-stack-item">OpenCV</span>
            </div>
          </div>
          <div class="lgc-stack-group">
            <div class="lgc-stack-label">Systems &amp; Engineering</div>
            <div class="lgc-stack-items">
              <span class="lgc-stack-item">TPU Operators</span>
              <span class="lgc-stack-item">Toolchains</span>
              <span class="lgc-stack-item">COMSOL</span>
              <span class="lgc-stack-item">Topology Optimization</span>
              <span class="lgc-stack-item">FEA</span>
            </div>
          </div>
          <div class="lgc-stack-group">
            <div class="lgc-stack-label">Tools</div>
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

  # Contact
  - block: markdown
    id: contact
    content:
      title: Get in Touch
      subtitle: ""
      text: |-
        <p class="lgc-contact-intro">I am always open to conversations about AI systems, computer vision, or computational design — and happy to share what I have learned along the way.</p>
        <div class="lgc-contact-grid">
          <div class="lgc-contact-card">
            <a class="lgc-contact-main" href="mailto:vector_kun@ruri.waseda.jp">
              <span class="lgc-contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span>
              <span class="lgc-contact-text"><span>Email</span><strong>vector_kun@ruri.waseda.jp</strong></span>
            </a>
            <button class="lgc-copy" type="button" data-copy-value="vector_kun@ruri.waseda.jp" aria-label="Copy email" title="Copy email"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button>
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
              <span class="lgc-contact-text"><span>LinkedIn</span><strong>in/veckun</strong></span>
            </a>
          </div>
          <div class="lgc-contact-card">
            <a class="lgc-contact-main" href="https://scholar.google.com/citations?user=z0AZmR4AAAAJ&amp;hl=en" target="_blank" rel="noopener">
              <span class="lgc-contact-icon"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.242 13.769 0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg></span>
              <span class="lgc-contact-text"><span>Google Scholar</span><strong>Citations &amp; profile</strong></span>
            </a>
          </div>
          <div class="lgc-contact-card">
            <a class="lgc-contact-main" href="https://blog.csdn.net/m0_59180666" target="_blank" rel="noopener">
              <span class="lgc-contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg></span>
              <span class="lgc-contact-text"><span>CSDN Blog</span><strong>blog.csdn.net/m0_59180666</strong></span>
            </a>
          </div>
          <div class="lgc-contact-card">
            <div class="lgc-contact-main">
              <span class="lgc-contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01M12 10h.01M16 10h.01"/></svg></span>
              <span class="lgc-contact-text"><span>WeChat</span><strong>vectorkun</strong></span>
            </div>
            <button class="lgc-copy" type="button" data-copy-value="vectorkun" aria-label="Copy WeChat ID" title="Copy WeChat ID"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button>
          </div>
        </div>
        <div class="lgc-contact-cta">
          <p><strong>Have an idea worth building?</strong><br>I am happy to chat about research collaborations, engineering roles, or interesting problems.</p>
          <div class="lgc-actions">
            <a class="lgc-btn lgc-btn-primary" href="mailto:vector_kun@ruri.waseda.jp">Email me →</a>
            <a class="lgc-btn" href="/uploads/resume.pdf">Download CV</a>
          </div>
        </div>
    design:
      wide: true
      prose: false
---
