---
title: My Journey Around the World
summary: An interactive atlas of where I have lived, studied, and worked.
type: landing
date: 2025-01-10

design:
  spacing: '4.2rem'

sections:
  - block: markdown
    id: travel-intro
    content:
      title: A Life in Motion
      subtitle: From Jiexiu, Shanxi to Shenzhen — with a few detours.
      text: |-
        I grew up in **Jiexiu, Shanxi**, studied computer science in Chengdu, spent a winter at Cambridge, completed my Master's in Kitakyushu, and now work in Shenzhen. This page is a small atlas of that path: where I have lived, what took me there, and a few places I passed through on the way.
    design:
      wide: false

  - block: markdown
    id: trajectory
    content:
      title: Life Trajectory
      subtitle: Drag to rotate, click a point for its story.
      text: |-
        {{< globe-trajectory >}}
    design:
      wide: true
      prose: false

  - block: markdown
    id: countries
    content:
      title: Countries I've Visited
      subtitle: Three countries so far — each with a different chapter.
      text: |-
        {{< visited-countries >}}
    design:
      wide: true
      prose: false

  - block: markdown
    id: timeline
    content:
      title: Journey Timeline
      subtitle: The short version.
      text: |-
        | Year | Place | Chapter |
        |------|-------|---------|
        | Birth | Jiexiu, Shanxi 🇨🇳 | Hometown |
        | 2020–2024 | Chengdu, Sichuan 🇨🇳 | B.Eng. at UESTC · G-Course program |
        | Jan–Feb 2023 | Cambridge, UK 🇬🇧 | Winter Programme at the University of Cambridge |
        | 2023–2025 | Kitakyushu, Japan 🇯🇵 | M.Eng. at Waseda University · Optimization Lab |
        | May 2025 | Kobe, Japan 🇯🇵 | WCSMO-16 oral presentation |
        | 2025– | Shenzhen, China 🇨🇳 | Algorithm Engineer at Suanhai Technology |

        The route above connects the main chapters. Transit cities such as Taiyuan, Dalian, and Qingdao are shown as individual points.
    design:
      wide: false

  - block: markdown
    id: visitors
    content:
      title: Visitor Map
      subtitle: See where readers of this site come from.
      text: |-
        {{< visitor-map >}}
    design:
      wide: true
      prose: false
---
