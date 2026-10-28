---
title: 我的环球之旅
summary: 用交互式地图呈现我生活、求学与工作过的地方。
type: landing
date: 2025-01-10

design:
  spacing: '4.2rem'

sections:
  - block: markdown
    id: travel-intro
    content:
      title: 流动的人生
      subtitle: 从山西介休到深圳，中途绕了几个弯。
      text: |-
        我在**山西介休**长大，在成都学习计算机科学，在剑桥度过一个冬季项目，在北九州完成硕士学位，现在在深圳工作。这个页面是我这段路径的小小地图：生活过的地方、去那里的原因，以及途中经过的一些城市。
    design:
      wide: false

  - block: markdown
    id: trajectory
    content:
      title: 人生轨迹
      subtitle: 拖动旋转，点击地点查看故事。
      text: |-
        {{< globe-trajectory >}}
    design:
      wide: true
      prose: false

  - block: markdown
    id: countries
    content:
      title: 去过的国家
      subtitle: 目前去过三个国家，每个国家都是一段不同的章节。
      text: |-
        {{< visited-countries >}}
    design:
      wide: true
      prose: false

  - block: markdown
    id: timeline
    content:
      title: 旅程时间线
      subtitle: 简版。
      text: |-
        | 年份 | 地点 | 章节 |
        |------|------|------|
        | 出生 | 山西介休 🇨🇳 | 故乡 |
        | 2020–2024 | 四川成都 🇨🇳 | 电子科技大学本科 · G-Course 联合培养 |
        | 2023.01–02 | 英国剑桥 🇬🇧 | 剑桥大学冬季项目 |
        | 2023–2025 | 日本北九州 🇯🇵 | 早稻田大学硕士 · 最优化实验室 |
        | 2025.05 | 日本神户 🇯🇵 | WCSMO-16 口头报告 |
        | 2025– | 中国深圳 🇨🇳 | 深圳算海科技 · 算法工程师 |

        上面的路线连接主要章节；太原、大连、青岛等中转城市单独显示为地点。
    design:
      wide: false

  - block: markdown
    id: visitors
    content:
      title: 访客地图
      subtitle: 看看本站的读者来自哪里。
      text: |-
        {{< visitor-map >}}
    design:
      wide: true
      prose: false
---
