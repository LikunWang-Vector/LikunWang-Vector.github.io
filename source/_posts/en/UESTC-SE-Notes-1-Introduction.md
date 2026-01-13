---
title: "UESTC Software Engineering Review Notes (1): Introduction"
date: 2023-02-06
updated: 2023-02-06
categories:
  - Review Notes
tags:
  - software-engineering
  - study-materials
  - review-notes
cover: /images/posts/电子科技大学软件工程期末复习笔记（一）：概论/3919655d4cd6.png
lang_pair:
  zh-CN: "电子科技大学软件工程期末复习笔记（一）：概论"
---

**Table of Contents**

Preface
Key Points Overview
Definition of Software
Characteristics of Software
Dual Role of Software
Software Crisis
Concept of Software Engineering
Goals and Principles of Software Engineering
Common Misconceptions about Software Engineering
Chapter Summary

---

## Key Points Overview

![](/images/posts/电子科技大学软件工程期末复习笔记（一）：概论/3919655d4cd6.png)

---

## Definition of Software

> Software consists of programs, data, and documentation.

- **Programs**: A series of instructions that implement expected functionality - the foundation of software
- **Data**: Data structures and information for programs; not all programs need databases, but all have data structures
- **Documentation**: Development documents including software design, development, functionality, maintenance, etc.

The executable part is only the program, while data and documentation support software completeness.

---

## Characteristics of Software

> Software is logical, not physical.

This indicates software's **complexity, difficulty to describe, invisibility, and changeability**.

Key characteristics:
- Software is developed or engineered, not manufactured
- Software doesn't "wear out" but deteriorates
- Most software is custom-built rather than assembled from components

---

## Dual Role of Software

> Software is both a product and a tool for developing other software products.

Software we know serves as tools/products for solving problems. However, developing software also requires tools - products that help us develop software, such as JetBrains IDEs, Visual Studio, Dev C++, etc.

---

## Software Crisis

> A series of serious problems encountered in the development and maintenance of computer software.

**Serious problems**: Mainly efficiency and quality issues.

Can be summarized as: **Long cycles, high costs, poor quality, difficult maintenance.**

---

## Concept of Software Engineering

> IEEE Computer Society defines software engineering as: (1) Applying systematic, scientific, and quantifiable methods to software development, operation, and maintenance - engineering application for software. (2) Research on the above application methods.

---

## Goals and Principles of Software Engineering

### Goals

> The goal of software engineering is to develop software that is easy to modify, efficient, reliable, maintainable, adaptable, portable, and reusable within given time and budget according to user requirements.

### Principles

B.W. Boehm summarized software development experience and proposed 7 basic principles of software engineering. These 7 principles are considered the minimum set ensuring software product quality and development efficiency, mutually independent, indispensable, and fairly complete:

> - Use phased lifecycle planning management
> - Perform continuous verification
> - Ensure strict product control
> - Use modern programming tools/engineering practices
> - Maintain clear responsibility assignment
> - Use better and fewer people
> - Maintain process improvement

---

## Common Misconceptions about Software Engineering

### Manager Misconceptions

> M = Misconception, R = Reality
>
> - M1: If our project is behind schedule, we can add more programmers to catch up
> - R1: Software development mechanisms differ from manual work. Adding new developers to a delayed software project only delays it more
>
> - M2: If we outsource the software project to a third party, we can relax and let that company complete it
> - R2: If the organization doesn't know how to manage and control software projects internally, outsourcing won't help

### Customer Misconceptions

> Due to incorrect customer expectations, dissatisfaction with developers results
>
> - M1: A general statement of objectives is sufficient to start programming; we can fill in details later
> - R1: Poor early project requirements definition is the main cause of software failure. Requirements do change, but impact varies depending on when changes are proposed

### Developer Misconceptions

> Software practitioners have accumulated 50 years of programming culture. In early software development, programming was viewed as an art form
>
> - M1: Once we finish programming and it runs successfully, our work is done
> - R1: "The earlier you start writing code, the longer it takes to complete." Industry data shows 60%-80% of software development effort is spent after initial delivery to users
>
> - M2: I can't evaluate quality until my program runs
> - R2: The most effective software quality assurance mechanism should start at project initiation - can be reflected through technical reports
>
> - M3: The only deliverable work product is a successfully running program
> - R3: A running program is only part of software structure; it includes many other factors (data, documentation...)
>
> - M4: Software engineering will make us create lots of unnecessary documentation and always slow our progress. Software engineering is just documentation
> - R4: Software engineering isn't about creating documentation, but creating quality. Better quality reduces rework probability. Less rework means earlier project delivery. All documentation is necessary for improving team communication and quality

---

## Chapter Summary

> - Software engineering's goal is to provide a systematic framework for building high-quality software
> - Software: Evolves with changes in problem-solving and industry information analysis tools
> - Early "programming" culture and history caused a series of problems that continue today
> - Need to learn how to build high-quality and large-scale software

This chapter has no particularly important points - just familiarize yourself with these properties and be able to identify misconceptions.
