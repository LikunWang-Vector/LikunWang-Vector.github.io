---
title: "UESTC Software Engineering Review Notes (8): Software Maintenance"
date: 2023-02-28
updated: 2023-02-28
categories:
  - Review Notes
tags:
  - software-engineering
  - review-notes
  - software-maintenance
  - re-engineering
  - reverse-engineering
cover: /images/posts/电子科技大学软件工程期末复习笔记（八）：软件维护/db4f4aeaad71.png
lang_pair:
  zh-CN: "电子科技大学软件工程期末复习笔记（八）：软件维护"
---

**Table of Contents**

Definition of Software Maintenance
Four Types of Maintenance
Necessity of Software Maintenance
Costs and Difficulties
Maintainability
Software Maintenance Process Model
Software Re-engineering
Software Reverse Engineering

---

## Key Points Overview

![](/images/posts/电子科技大学软件工程期末复习笔记（八）：软件维护/db4f4aeaad71.png)

This section is worth about 8 points, with emphasis on concept understanding.

---

## Definition of Software Maintenance

> Modification of code and related documentation due to software product problems or need for improvement, with the purpose of modifying existing software products while maintaining their integrity.

---

## Four Types of Maintenance

> - **Corrective Maintenance**: Fixing errors
> - **Adaptive Maintenance**: Adapting to environment changes
> - **Perfective Maintenance**: Improving functionality
> - **Preventive Maintenance**: Preventing future problems

> During the **initial** period of the maintenance phase, **corrective** maintenance workload is high. As error discovery rate gradually decreases and **stabilizes**, **adaptive** and **perfective** maintenance workload gradually **increases**.

---

## Necessity of Software Maintenance

> - Correct errors, improve design
> - Modify design to adapt to new hardware/software operating environments
> - Add new application scope

---

## Costs of Software Maintenance

> Tangible maintenance costs are money spent; intangible maintenance costs have greater impact:
>
> - Reasonable repair/modification requests not implemented promptly: Customer dissatisfaction
> - Changes causing new failures: Product quality decline
> - Software personnel diverted to maintenance work: Development efficiency reduction
> - ...

---

## Difficulties in Software Maintenance

> - Inadequate configuration management
> - Impact of personnel changes
> - Poor readability of many software systems
> - Handling maintenance requests under time pressure
> - ...

---

## Definition of Maintainability

> The ease with which errors and defects in a software system can be corrected, and modifications, expansions, or reductions can be made to meet new requirements.
>
> Maintainability, usability, and reliability are important characteristics for measuring software quality and are of great concern to users.
>
> Software maintainability is a key goal throughout all phases of software development.

---

## Factors Determining Software Maintainability

> **Main Factors**:
> 1. Understandability
> 2. Usability
> 3. Testability
> 4. Modifiability
> 5. Portability
> 6. Efficiency
> 7. Reliability

> Different types of maintenance emphasize different factors.

---

## Software Maintenance Process Model

![](/images/posts/电子科技大学软件工程期末复习笔记（八）：软件维护/a7b916a8337c.png)

---

## Maintenance Cost Estimation

![](/images/posts/电子科技大学软件工程期末复习笔记（八）：软件维护/6ab6940a6205.png)

---

## Software Re-engineering

> **Definition**: Re-engineering refers to carefully examining and transforming existing software, reconstructing it into a new form, including implementation of the new form.
>
> ![](/images/posts/电子科技大学软件工程期末复习笔记（八）：软件维护/464d39044858.png)

---

## Software Reverse Engineering

> **Meaning**:
> - The process of analyzing a program to create a description at a higher abstraction level than the source code; i.e., reverse engineering is a process of recovering design results
> - The process of analyzing a target system, identifying system components and their interactions, and presenting the target system through high-level abstraction or other forms

> **Considerations**:
> - Abstraction level, completeness, degree of tool-analyst collaboration, process directionality, etc.

> **Main Content**:
> - Data reverse engineering
> - Process reverse engineering
> - User interface reverse engineering

---

## Chapter Summary

- Software maintenance can be divided into corrective, adaptive, perfective, and preventive maintenance
- Software maintenance practice often encounters various difficulties, requiring technical and management considerations, and maintenance cost estimation
- Software maintenance can be divided into seven phases according to the IEEE maintenance process model
- Program understanding is significant for software maintenance; the task of program understanding is to reveal program functionality and implementation mechanisms
- Software re-engineering involves carefully examining and transforming existing software, reconstructing it into a new form. Six activities constitute the re-engineering cycle model
- Software reverse engineering includes data, process, and user interface reverse engineering
