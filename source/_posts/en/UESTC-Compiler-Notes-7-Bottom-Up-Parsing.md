---
title: "UESTC Compiler Principles Review Notes (7): Bottom-Up Syntax Analysis"
date: 2023-06-11
updated: 2023-06-11
categories:
  - Review Notes
tags:
  - compiler-principles
  - bottom-up
  - syntax-analysis
  - review-notes
  - study-materials
cover: /images/posts/电子科技大学编译原理复习笔记（七）：自下而上语法分析/04133bd115fc.png
lang_pair:
  zh-CN: "电子科技大学编译原理复习笔记（七）：自下而上语法分析"
---

**Table of Contents**

Introduction to Bottom-Up Analysis
Operator Precedence Analysis
LR Analysis Method
LR(0) Item Set Canonical Collection
SLR(1) Analysis Table Construction

---

## Key Points Overview

![](/images/posts/电子科技大学编译原理复习笔记（七）：自下而上语法分析/04133bd115fc.png)

Focus on LR and SLR.

---

## Introduction

### Bottom-Up Analysis

Starting from the input string, find reduction sequences, gradually reduce until reaching start symbol S.

Method: Use a stack, shift-reduce. During shifting, observe whether the stack top forms a candidate of some production.

1. Use stack, shift input symbols into stack
2. If stack top (one or more symbols) forms a candidate of some non-terminal
3. Then reduce:
   - Pop the candidate from stack
   - Push the reduced non-terminal onto stack
4. Repeat until input string scanning ends
5. If only start symbol S remains in stack, input string is a legal sentence of the grammar

![](/images/posts/电子科技大学编译原理复习笔记（七）：自下而上语法分析/9158f96113bd.png)

**Two types of conflicts**:
- Shift-reduce conflict
- Reduce-reduce conflict

Different definitions of reducible strings form different syntax.

### Analysis Methods

- **Operator Precedence Analysis**: Leftmost prime phrase
- **LR Analysis**: Handle

### Canonical Reduction (Leftmost Reduction, corresponds to Rightmost Derivation)

![](/images/posts/电子科技大学编译原理复习笔记（七）：自下而上语法分析/706a1d45688b.png)

---

## Operator Precedence Analysis

> - Syntax analysis based on reduction order between terminal symbols
> - Key is comparing priorities of two consecutive terminals to decide actions
> - In arithmetic expressions, there are operator priority and associativity rules
> - Operator precedence analysis essentially imitates expression evaluation

### Operator Precedence Grammar

Definition: Context-free grammar G, if there are no productions of form P→ε or P→...QR..., then G is an operator grammar.

**Priority relations between 2 adjacent terminals**:
- (1) a=b: G has P→...ab... or P→...aQb...
- (2) a<b: G has P→...aQ... and Q=>+b... or Q=>+Rb...
- (3) a>b: G has P→...Qb... and Q=>+...a or Q=>+...aR

**In plain terms**: When uppercase and lowercase are adjacent, lowercase letters derivable from uppercase have higher priority.

![](/images/posts/电子科技大学编译原理复习笔记（七）：自下而上语法分析/c673a37176b2.png)

If for any terminals a, b in operator grammar G, the priority relation is at most one of =, >, <, or no relation exists, then G is an **operator precedence grammar**.

### Leftmost Prime Phrase

![](/images/posts/电子科技大学编译原理复习笔记（七）：自下而上语法分析/59f54bf1d382.png)

### Priority Relation Table Construction

**FIRSTVT Set**:

![](/images/posts/电子科技大学编译原理复习笔记（七）：自下而上语法分析/0cb178cb0475.png)

**LASTVT Set**:

![](/images/posts/电子科技大学编译原理复习笔记（七）：自下而上语法分析/70a57712ebbd.png)

---

## LR Analysis Method

### Overview

> LR analysis scans input string left-to-right, analyzes stack symbols and looks ahead K input symbols to determine if a handle has formed at stack top, deciding what action to take. Generally only consider K≤1.
>
> "L" = Left-to-right scan of input string
> "R" = Construct reverse of rightmost derivation
> "k" = Number of input symbols to look ahead for analysis decisions

Has action table and goto table:
- action[s,a]: In state s, with current input symbol a, what action to take: shift, reduce, accept, error
- goto[s,A]: In state s, for reduced symbol A, what state to push

Example:

![](/images/posts/电子科技大学编译原理复习笔记（七）：自下而上语法分析/958fa86586d8.png)

### LR(0) Item Set Canonical Collection

**Viable Prefix**: A prefix of a canonical sentential form that doesn't contain any symbols after the handle.

![](/images/posts/电子科技大学编译原理复习笔记（七）：自下而上语法分析/866c547dde58.png)

**Three relationships between viable prefix and handle**:

![](/images/posts/电子科技大学编译原理复习笔记（七）：自下而上语法分析/290c24228e1f.png)

### Items and Classification

![](/images/posts/电子科技大学编译原理复习笔记（七）：自下而上语法分析/685a6b89a5f0.png)

![](/images/posts/电子科技大学编译原理复习笔记（七）：自下而上语法分析/63a5edb72d91.png)

**Items are created by adding dots at each position in production right sides**

### Valid Item Sets

**Closure function closure(I)**:

![](/images/posts/电子科技大学编译原理复习笔记（七）：自下而上语法分析/2537840cfddc.png)

**Transition function goto(I, X)**:

![](/images/posts/电子科技大学编译原理复习笔记（七）：自下而上语法分析/e61882b60131.png)

### LR(0) Item Set Canonical Collection Construction

![](/images/posts/电子科技大学编译原理复习笔记（七）：自下而上语法分析/8137f39cfd3d.png)

Example:

![](/images/posts/电子科技大学编译原理复习笔记（七）：自下而上语法分析/3e37c8142223.png)

![](/images/posts/电子科技大学编译原理复习笔记（七）：自下而上语法分析/fa26c9edb726.png)

**⭐ If there's a shift-reduce conflict, the grammar is neither LR nor SLR**

### SLR(1) Analysis Table Construction

![](/images/posts/电子科技大学编译原理复习笔记（七）：自下而上语法分析/467c6b28c38b.png)

![](/images/posts/电子科技大学编译原理复习笔记（七）：自下而上语法分析/fa9b5a2e2bfe.png)

**SLR Analysis Table Construction Steps**:

![](/images/posts/电子科技大学编译原理复习笔记（七）：自下而上语法分析/1e1146b3d366.png)

![](/images/posts/电子科技大学编译原理复习笔记（七）：自下而上语法分析/ed9ad162b929.png)

---

## Chapter Summary

Master operator precedence analysis, LR and SLR analysis methods.
