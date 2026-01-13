---
title: "UESTC Software Engineering Review Notes (2): Software Process"
date: 2023-02-06
updated: 2023-02-06
categories:
  - Review Notes
tags:
  - software-engineering
  - study-materials
  - review-notes
cover: /images/posts/电子科技大学软件工程期末复习笔记（二）：软件过程/0bf925841adb.png
lang_pair:
  zh-CN: "电子科技大学软件工程期末复习笔记（二）：软件过程"
---

**Table of Contents**

Software Process Model Definition
Software Engineering Center and Three Elements
Software Lifecycle Models
Waterfall Model
Rapid Prototyping Model
Incremental Model
Spiral Model
How to Choose a Process Model
Capability Maturity Model Levels
Process and Product Relationship

---

## Key Points Overview

![](/images/posts/电子科技大学软件工程期末复习笔记（二）：软件过程/0bf925841adb.png)

---

## Software Process Model Definition

> A software process model is the **structural framework** for all processes, activities, and tasks in software development. It visually expresses the entire software development process, clearly specifying main activities, tasks, and development strategies.

Common software process models:
- Waterfall Model (classic lifecycle model)
- Evolutionary Process Models (Prototype, Concurrent Development)
- Incremental Process Models (Incremental, RAD, Spiral)
- Other Process Models (Component-based, Intelligent, Agile)

---

## Software Engineering Center and Three Elements

> Software Engineering Center: **Quality**
>
> Three Elements: **Methods, Tools, Process**

- **Methods**: Technical methods for completing software development tasks
- **Tools**: Automated or semi-automated software engineering support environments
- **Process**: Framework of tasks needed to obtain high-quality software

---

## Software Lifecycle Models

### Waterfall Model

Software lifecycle: The entire process from design, deployment to retirement of a software product or system.

Waterfall Model: Software development process aligns with software lifecycle, also called classic lifecycle model. It specifies software engineering activities in a fixed top-down sequence, like waterfall flowing down. It's a widely-used, document-driven model.

![](/images/posts/电子科技大学软件工程期末复习笔记（二）：软件过程/632c576be185.png)

**Advantages**:
- Simple, high process transparency, high manageability
- Deferred implementation - system analysis and design must precede implementation
- Quality control through phase reviews and document control

**Disadvantages**:
- Poor flexibility, unsuitable for unclear requirements
- Weak risk control capability
- Excessive documentation increases workload

**Applicable Scenarios**:
- Clear system requirements, mature technology, strict engineering management

### Rapid Prototyping Model

A rapid prototype is a quickly-built runnable program that completes **a subset of final product functions**. It allows **preliminary rather than complete** analysis of requirements, with iterative refinement based on user feedback.

![](/images/posts/电子科技大学软件工程期末复习笔记（二）：软件过程/ccd17a6d8c53.png)

**Advantages**:
- Overcomes waterfall model disadvantages
- Reduces development risk from unclear requirements

**Disadvantages**:
- Development technology may not align with mainstream
- Rapid construction plus continuous modification may lead to poor quality

**Strategies**:
- **Throwaway Strategy**: Prototype used for specific phase, then discarded
- **Evolutionary Strategy**: Prototype evolves from basic core to final system

### Incremental Model

Combines prototype model basics with **iterative** characteristics using **time-based linear sequences**. Each sequence outputs a software "increment."

![](/images/posts/电子科技大学软件工程期末复习笔记（二）：软件过程/379bd423105e.png)

**Advantages**:
- Doesn't require complete requirements upfront
- Lower initial human resource investment
- Effective technical risk management
- Increases customer confidence and system reliability

**Disadvantages**:
- Difficult to choose increment granularity
- Difficult to determine all basic business requirements

**Applicable Scenarios**:
- Product upgrades or new version development
- Products with strict deadlines
- Familiar domains with existing prototype systems

### Spiral Model

First proposed by Boehm, combining waterfall and prototype model characteristics.

![](/images/posts/电子科技大学软件工程期末复习笔记（二）：软件过程/0c4d9d529791.png)

Four quadrant activities:
- **Planning**: Determine objectives, select solutions, clarify constraints
- **Risk Analysis**: Analyze solutions, identify and eliminate risks
- **Engineering**: Implement software development
- **Customer Evaluation**: Evaluate work, propose corrections

**Advantages**:
- Supports dynamic requirement changes
- Prototype serves as executable requirements specification
- Emphasizes prototype extensibility and modifiability
- Facilitates timely management decision adjustments

**Disadvantages**:
- Low iteration efficiency increases cost and delays delivery
- Requires rich risk assessment experience

---

## How to Choose a Process Model

> - Software development models are constantly evolving
> - Each model has advantages and disadvantages
> - Don't be limited to one model - combine multiple models or create new ones based on actual needs

---

## Capability Maturity Model (CMM) Five Levels

![](/images/posts/电子科技大学软件工程期末复习笔记（二）：软件过程/82ff829be390.png)

1. **Initial**: Ad hoc, chaotic
2. **Repeatable**: Basic project management
3. **Defined**: Documented, standardized processes
4. **Managed**: Quantitative process management
5. **Optimizing**: Continuous process improvement

---

## Process and Product Relationship

> **Software process determines software product quality**. Different projects require different process models or combinations.

---

## Chapter Summary

- Software engineering centers on quality, with process, methods, and tools as three elements
- Process defines who does what, when, and how to achieve goals
- Software process determines software product quality
- Different projects need different process models or combinations
