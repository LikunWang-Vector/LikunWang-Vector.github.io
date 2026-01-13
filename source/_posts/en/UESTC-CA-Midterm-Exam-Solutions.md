---
title: "UESTC Computer Architecture Midterm Exam Solutions"
date: 2023-06-06
updated: 2023-06-06
categories:
  - Study Notes
tags:
  - study-notes
  - study-materials
  - computer-architecture
  - exam-solutions
csdn_views: 1450
csdn_likes: 3
csdn_comments: 0
csdn_favorites: 15
csdn_url: https://blog.csdn.net/m0_59180666/article/details/131062899
cover: /images/posts/电子科技大学计算机系统结构半期考试参考答案/38045328a057.png
lang_pair:
  zh-CN: "电子科技大学计算机系统结构半期考试参考答案"
---

> This article was migrated from CSDN blog
> Original link: [UESTC Computer Architecture Midterm Exam Solutions](https://blog.csdn.net/m0_59180666/article/details/131062899)
> 📊 1450 views | 👍 3 likes | 💬 0 comments | ⭐ 15 favorites

## 2023 Midterm Exam Solutions (15 points)

### Question 1: Floating Point Multiplication Performance Analysis

Analyze which design approach provides greater system performance improvement for implementing floating-point multiplication (FPMUL). Assume FPMUL operations account for 10% of the total test program execution time.

**Design Option A:** Add dedicated FPMUL hardware that speeds up FPMUL operations by 10x.

**Design Option B:** Improve the execution speed of all FP instructions by 1.6x. FP instructions account for 50% of total execution time.

**Solution:**

Calculate the speedup for both design approaches:

**Option A - Dedicated FPMUL Hardware:**
- Fe = 10% = 0.10
- Se = 10
- S_FPMUL = 1/((1-0.10) + 0.10/10) = 1/0.91 = **1.099**

**Option B - Improve All FP Instructions:**
- Fe = 50% = 0.5
- Se = 1.6
- S_FP = 1/((1-0.5) + 0.5/1.6) = 1/(0.5 + 0.3125) = 1/0.8125 = **1.231**

**Conclusion:** Option B provides greater speedup (1.231 > 1.099), demonstrating Amdahl's Law - improving a larger fraction of execution time yields better overall performance even with a smaller speedup factor.

---

Note: This post contains midterm exam solutions for the Computer Architecture course at UESTC. The original content is in Chinese as these are course materials from a Chinese university.
