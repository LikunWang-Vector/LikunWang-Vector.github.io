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
        text: 下载简历
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
      title: '💡 我的工作'
      subtitle: ''
      text: |-
        我是一名**算法工程师**，专注于**TPU算子开发**和**深度学习应用**。我的工作连接了前沿AI研究与实际硬件优化。

        **当前专注:**
        - 🔧 TPU算子开发与工具链优化
        - 🧠 深度学习模型在专用硬件上的部署
        - 🔬 生物力学拓扑优化研究
        - 👁️ YOLO网络计算机视觉

        **研究兴趣:**
        - 仿生结构设计
        - AI增强工程分析
        - 科学计算与有限元分析
    design:
      columns: '1'

  # Featured Projects
  - block: collection
    id: projects
    content:
      title: 🚀 精选项目
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
      title: 📄 学术论文
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
      title: 🎤 演讲与报告
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
      title: 📝 最新文章
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
      title: '🛠️ 技术栈'
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
      title: '📬 联系我'
      subtitle: ''
      text: |-
        我随时欢迎有趣的交流和合作机会！

        - 📧 **邮箱:** [vector_kun@ruri.waseda.jp](mailto:vector_kun@ruri.waseda.jp)
        - 💼 **领英:** [linkedin.com/in/veckun](https://linkedin.com/in/veckun)
        - 🐙 **GitHub:** [github.com/LikunWang-Vector](https://github.com/LikunWang-Vector)
        - 📝 **博客:** [blog.csdn.net/m0_59180666](https://blog.csdn.net/m0_59180666)
        - 💬 **微信:** vectorkun
    design:
      columns: '1'
---
