---
title: "UESTC Computer Architecture Review Notes (1): Overview"
date: 2023-06-02
updated: 2023-06-02
categories:
  - Review Notes
tags:
  - study-materials
  - system-architecture
  - overview
  - review-notes
  - amdahl-law
cover: /images/posts/电子科技大学计算机系统结构复习笔记（一）：概述/0e0baf20a0b1.png
lang_pair:
  zh-CN: "电子科技大学计算机系统结构复习笔记（一）：概述"
---

**Table of Contents**

Computer Classification
Computer Architecture Definition
Computer Performance
Quantitative Design Principles
Amdahl's Law
CPU Performance Formula

---

## Key Points Overview

![](/images/posts/电子科技大学计算机系统结构复习笔记（一）：概述/0e0baf20a0b1.png)

---

## Computer Classification

### Flynn's Taxonomy

**Definition**: Computer architecture classification based on instruction stream and data stream quantities.

**Content**:
- **SISD**: Single Instruction, Single Data
  - Example: Serial computers
- **MISD**: Multiple Instruction, Single Data
  - Example: Few real examples exist
- **SIMD**: Single Instruction, Multiple Data
  - Example: Suitable for highly regular operations like image processing
- **MIMD**: Multiple Instruction, Multiple Data
  - Example: Multiprocessor systems

### Market Classification

![](/images/posts/电子科技大学计算机系统结构复习笔记（一）：概述/0bcc37ccafba.png)

---

## Computer Architecture Definition

Original concept: System attributes visible to programmers (machine language), i.e., conceptual structure and functional behavior, distinguishing data flow and control logic design composition from physical implementation.

Current definition: Instruction Set Architecture (ISA)

![](/images/posts/电子科技大学计算机系统结构复习笔记（一）：概述/97e5f46f6207.png)

---

## Computer Performance

### Performance Metrics

- **Execution Time** (Response time, Latency)
  - **CPU Time**: User CPU time + System CPU time
  - Designer's perspective, determines CPU performance
  - User's perspective: System performance - the only universally accepted metric

- **Throughput**: Total work completed per unit time
  - Administrator's perspective
  - For many applications, throughput is more important than latency

- **MIPS** - Millions of Instructions Per Second
  - Instructions / (Execution time × 1,000,000)
  - Merchant's perspective

### Performance Evaluation Methods

- **Benchmarks**: Best benchmarks are actual applications reflecting end-user needs
- **SPEC**: Standardized source code benchmark suite
  - SPEC Rate = Reference machine time / Test machine time
  - SM (SPEC Mark): Geometric mean of N SPEC benchmark rates

---

## Quantitative Design Principles

### Basic Methods

- **Exploit Parallelism**: Most important method for improving performance
- **Locality Principle**: Programs tend to reuse recently used data and instructions
- **Focus on Common Cases**: Most important and universal principle

### Amdahl's Law

Defines speedup obtained from using a specific feature:

![](/images/posts/电子科技大学计算机系统结构复习笔记（一）：概述/23ce0ae6eecd.png)

Two factors in Amdahl's Law:
- **Improvement Fraction (Fe)**: Fraction of computation time that can be improved
- **Improvement Speedup (Se)**: Speedup of the improved portion

![](/images/posts/电子科技大学计算机系统结构复习笔记（一）：概述/c26464e50121.png)

**Increasing Fe or Se improves overall speedup Sn, but Fe has greater impact.**

### CPU Performance Formula

CPU Time = CPU Clock Cycles × Clock Cycle Time = CPU Clock Cycles / Frequency

= Instruction Count × CPI × Clock Cycle Time

= Σ(Instruction type count × CPI for that type) × Clock Cycle Time

---

## Chapter Summary

![](/images/posts/电子科技大学计算机系统结构复习笔记（一）：概述/766f61eb48f9.png)
