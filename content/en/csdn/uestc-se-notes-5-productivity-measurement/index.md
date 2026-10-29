---
type: post
csdn: true
title: "UESTC Software Engineering Review Notes (5): Productivity and Effort Measurement"
date: "2023-02-27"
lastmod: "2023-02-27"
authors:
  - admin
tags:
  - "software-engineering"
  - "algorithms"
  - "review-notes"
  - "CSDN"
categories:
  - "Review Notes"
summary: "This section has less content but involves calculations, so it deserves attention."
image:
  filename: "covers/csdn-notes.png"
  caption: "CSDN Archive · STUDY NOTES"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/129250715"
csdn_views: 1970
csdn_likes: 12
csdn_comments: 1
csdn_favorites: 27
---

> This article was migrated from my [CSDN blog](https://blog.csdn.net/m0_59180666).
> Original: [UESTC Software Engineering Review Notes (5): Productivity and Effort Measurement](https://blog.csdn.net/m0_59180666/article/details/129250715)
> 📊 1970 views | 👍 12 likes | 💬 1 comments | ⭐ 27 favorites

## Key Points Overview

![](/images/posts/电子科技大学软件工程期末复习笔记（五）：生产率和工作度量/abaa1253c9cb.png)

This section has less content but involves calculations, so it deserves attention.

---

## Software Product Metrics

> A quantitative measurement method that enables understanding and grasping software project productivity or required effort.
>
> **Purpose**: Describe projects and processes, evaluate status and quality, predict for planning, improve product quality and process performance.

---

## Two Methods for Measuring Software Productivity

> Two approaches to measuring software productivity:
>
> **Direct Measurement**: LOC-based (lines of code produced in a given time)
>
> **Indirect Measurement**: Function Point-based (function points or object points produced in a given time)

### LOC-based Measurement

> **Example Problem:**
>
> ![](/images/posts/电子科技大学软件工程期末复习笔记（五）：生产率和工作度量/ee48bbe220fa.png)

**Advantages**:
- LOC, KLOC, and related metrics are easy to calculate
- Many existing software estimation models use LOC and KLOC as important inputs
- Extensive literature and data available on LOC

**Disadvantages**:
- LOC depends on the programming language used, which disadvantages concise programs
- Not well-suited for non-procedural languages
- LOC can only be calculated after design is complete; estimation requires a level of detail that may be difficult to obtain (e.g., project planners find it hard to estimate LOC before analysis and design are complete)

### Function Point Measurement

> - **Complexity Adjustment Value**: Sum of 14 complexity factors, sum(Fi)
> - **Total Function Point Count**: sum(quantity × function point weight)
> - **Function Point Formula (FP)**: FP = (total_counts) × (0.65 + 0.01 × sum(Fi))
> - **Errors/Defects/Documentation pages per FP**: Total count / FP count
> - **FP per person-month**: FP count / Total person-months

> **Example Problem:**
>
> ![](/images/posts/电子科技大学软件工程期末复习笔记（五）：生产率和工作度量/a854de2c9c7c.png)
>
> Other methods include: empirical measurement, effort measurement through task decomposition, estimating project effort based on available resources...

**One cost estimation method: COCOMO Model** (for reference only)

---

## Chapter Summary

- Introduced background knowledge on software productivity and effort measurement
- Discussed advantages and disadvantages of various measurement methods
- Introduced effort measurement methods for project planning
