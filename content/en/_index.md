---
title: ""
date: 2022-10-24
type: landing

design:
  spacing: "5rem"

sections:
  # Hero Section with Bio
  - block: resume-biography-3
    id: about
    content:
      username: admin
      text: ""
      button:
        text: Download CV
        url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false

  # What I Do Section
  - block: markdown
    content:
      title: '💡 What I Do'
      subtitle: ''
      text: |-
        I'm an **Algorithm Engineer** specializing in **TPU operator development** and **deep learning applications**. My work bridges the gap between cutting-edge AI research and practical hardware optimization.

        **Current Focus:**
        - 🔧 TPU operator development & toolchain optimization
        - 🧠 Deep learning model deployment on specialized hardware
        - 🔬 Biomechanical topology optimization research
        - 👁️ Computer vision with YOLO networks

        **Research Interests:**
        - Bio-inspired structural design
        - AI-enhanced engineering analysis
        - Scientific computing & FEA
    design:
      columns: '1'

  # Featured Projects
  - block: collection
    id: projects
    content:
      title: 🚀 Featured Projects
      subtitle: ''
      text: ''
      filters:
        folders:
          - project
      count: 3
    design:
      view: showcase
      columns: 1

  # Publications
  - block: collection
    id: papers
    content:
      title: 📄 Publications
      subtitle: ''
      filters:
        folders:
          - publication
        featured_only: true
    design:
      view: article-grid
      columns: 2

  # Recent Talks
  - block: collection
    id: talks
    content:
      title: 🎤 Talks & Presentations
      subtitle: ''
      filters:
        folders:
          - event
    design:
      view: article-grid
      columns: 1

  # Blog Posts
  - block: collection
    id: news
    content:
      title: 📝 Latest Posts
      subtitle: ''
      text: ''
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
    design:
      view: date-title-summary
      spacing:
        padding: [0, 0, 0, 0]

  # Skills Overview
  - block: markdown
    content:
      title: '🛠️ Tech Stack'
      subtitle: ''
      text: |-
        <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
          <span style="background: #3776ab; color: white; padding: 8px 16px; border-radius: 20px;">Python</span>
          <span style="background: #ee4c2c; color: white; padding: 8px 16px; border-radius: 20px;">PyTorch</span>
          <span style="background: #ff6f00; color: white; padding: 8px 16px; border-radius: 20px;">TensorFlow</span>
          <span style="background: #00d4aa; color: white; padding: 8px 16px; border-radius: 20px;">YOLO</span>
          <span style="background: #336791; color: white; padding: 8px 16px; border-radius: 20px;">SQL</span>
          <span style="background: #f89820; color: white; padding: 8px 16px; border-radius: 20px;">Java</span>
          <span style="background: #0076a8; color: white; padding: 8px 16px; border-radius: 20px;">COMSOL</span>
          <span style="background: #f05032; color: white; padding: 8px 16px; border-radius: 20px;">Git</span>
          <span style="background: #e97627; color: white; padding: 8px 16px; border-radius: 20px;">MATLAB</span>
        </div>
    design:
      columns: '1'

  # Contact CTA
  - block: markdown
    content:
      title: '📬 Get In Touch'
      subtitle: ''
      text: |-
        I'm always open to interesting conversations and collaboration opportunities!

        - 📧 **Email:** [vector_kun@ruri.waseda.jp](mailto:vector_kun@ruri.waseda.jp)
        - 💼 **LinkedIn:** [linkedin.com/in/veckun](https://linkedin.com/in/veckun)
        - 🐙 **GitHub:** [github.com/LikunWang-Vector](https://github.com/LikunWang-Vector)
        - 📝 **Blog:** [blog.csdn.net/m0_59180666](https://blog.csdn.net/m0_59180666)
    design:
      columns: '1'
---
