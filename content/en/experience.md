---
title: 'Experience & Education'
date: 2023-10-24
type: landing

design:
  spacing: '4.6rem'

# Note: `username` refers to the user's folder name in `content/authors/`

sections:
  - block: markdown
    id: experience-intro
    content:
      title: Experience & Education
      subtitle: From internships and research to my current role in AI hardware.
      text: |-
        A chronological view of the roles and degrees behind the work, plus the research projects and awards that shaped it.
    design:
      wide: false

  - block: resume-experience
    content:
      username: admin
    design:
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: false

  - block: markdown
    id: research
    content:
      title: Research Experience
      subtitle: Projects that shaped how I think about models, structures, and evidence.
      text: |-
        <div class="lgc-focus-grid">
          <div class="lgc-focus-card">
            <div class="lgc-focus-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"/><path d="M18 12v.5"/><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"/><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"/></svg></div>
            <h3>Fish Vertebrae Loading-Force Prediction</h3>
            <p><strong>Waseda University · Optimization Lab</strong><br>Advisor: Prof. Shintaro Yamasaki · 2024–2025</p>
            <p>Combined CT reconstruction, COMSOL finite element analysis, topology optimization, and a deep neural network. Presented at WCSMO-16.</p>
          </div>
          <div class="lgc-focus-card">
            <div class="lgc-focus-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="m16 16-1.9-1.9"/></svg></div>
            <h3>Driver Emotion Recognition</h3>
            <p><strong>UESTC · School of Computer Science</strong><br>Advisor: Prof. Yalan Ye · 2023–2024</p>
            <p>Built a real-time facial-expression-based system with a modified YOLOv7, a custom dataset, and a PyQt5 interface.</p>
          </div>
          <div class="lgc-focus-card">
            <div class="lgc-focus-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21.42 10.92a1 1 0 0 0-.02-1.84L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg></div>
            <h3>Multi-Agent Credit Assignment</h3>
            <p><strong>University of Cambridge · Winter Programme</strong><br>Advisor: Prof. Pietro Lio · 2023</p>
            <p>Wrote an overview thesis on credit-assignment methods in multi-agent reinforcement learning.</p>
          </div>
          <div class="lgc-focus-card">
            <div class="lgc-focus-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <h3>Teaching & Mentoring</h3>
            <p><strong>Waseda University · UESTC</strong><br>2020–2025</p>
            <p>Student affairs administration and class leadership, plus informal mentoring in Python, deep learning, and research methods.</p>
            <p><a href="/teaching/">More about mentoring →</a></p>
          </div>
        </div>
    design:
      wide: true
      prose: false

  - block: resume-skills
    content:
      title: Skills & Toolbox
      username: admin
    design:
      show_skill_percentage: false

  - block: resume-awards
    content:
      title: Awards & Honors
      username: admin

  - block: resume-languages
    content:
      title: Languages
      username: admin

  - block: markdown
    id: experience-cta
    content:
      title: ""
      text: |-
        <div class="lgc-contact-cta">
          <p><strong>Want the one-page version?</strong><br>My CV collects the roles, research, and awards above in a single PDF.</p>
          <div class="lgc-actions">
            <a class="lgc-btn lgc-btn-primary" href="/uploads/resume.pdf">Download CV</a>
            <a class="lgc-btn" href="/#contact">Get in touch</a>
          </div>
        </div>
    design:
      wide: true
      prose: false
---
