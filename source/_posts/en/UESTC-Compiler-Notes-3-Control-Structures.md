---
title: "UESTC Compiler Principles Review Notes (3): Control Structures"
date: 2023-05-25
updated: 2023-05-25
categories:
  - Review Notes
tags:
  - notes
  - compiler-principles
  - review-notes
  - study-materials
  - control-structures
cover: /images/posts/电子科技大学编译原理复习笔记（三）：控制结构/81c48b213ea3.png
lang_pair:
  zh-CN: "电子科技大学编译原理复习笔记（三）：控制结构"
---

**Table of Contents**

Statement-Level Control Structures
Unit-Level Control Structures

---

## Key Points Overview

![](/images/posts/电子科技大学编译原理复习笔记（三）：控制结构/81c48b213ea3.png)

---

## Statement-Level Control Structures

**Definition**: Mechanisms for constructing the execution order of various statements.

**Traditional Three Statement-Level Control Structures**: Sequential / Selection (branching) / Repetition (looping)

**Sequential**: The simplest control structure available in languages; statement terminator ";". Compound statements: Essentially still sequential execution.

(Jumping from one statement to the next is also a form of control)

**Selection**: Choose one statement to execute from multiple selectable statements (single choice / binary choice / multiple choice)

**Repetition**: Counter-guided, repeating on loop counter values; Condition-guided (while / do-while / repeat-until / ...)

![](/images/posts/电子科技大学编译原理复习笔记（三）：控制结构/f92cbbc54791.png)

---

## Unit-Level Control Structures

### Four Unit-Level Control Structures

- Explicit call to subordinate units (explicit call, implicit return)
- Exception handling (implicit)
- Coroutines
- Concurrent units

**Explicit Call to Subordinate Units**: Subprograms, functions, etc.

**Exception Handling**: Patch the program to continue execution / Terminate program for fatal errors

**Coroutines**: Interleaved execution between two or more program units ("pseudo-parallelism", a low-level form of parallelism)

**Concurrent Units**: Synchronization and mutual exclusion / PV operations / Producer-consumer / ... (for reference only)

---

## Chapter Summary

Familiarize yourself with the two types of control structures.
