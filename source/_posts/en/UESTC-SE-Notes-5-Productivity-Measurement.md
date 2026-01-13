---
title: "UESTC Software Engineering Review Notes (5): Productivity and Effort Measurement"
date: 2023-02-27
updated: 2023-02-27
categories:
  - Review Notes
tags:
  - software-engineering
  - algorithms
  - review-notes
cover: /images/posts/电子科技大学软件工程期末复习笔记（五）：生产率和工作度量/abaa1253c9cb.png
lang_pair:
  zh-CN: "电子科技大学软件工程期末复习笔记（五）：生产率和工作度量"
---

**Table of Contents**

Software Product Metrics
Two Methods for Measuring Software Productivity
LOC-based Measurement
Function Point Measurement

---

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
