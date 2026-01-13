---
title: "UESTC Compiler Principles Review Notes (6): Top-Down Syntax Analysis"
date: 2023-05-29
updated: 2023-05-29
categories:
  - Review Notes
tags:
  - compiler-principles
  - top-down
  - syntax-analysis
  - review-notes
  - study-materials
cover: /images/posts/电子科技大学编译原理复习笔记（六）：自上而下的语法分析/62b5a5f1f1f4.png
lang_pair:
  zh-CN: "电子科技大学编译原理复习笔记（六）：自上而下的语法分析"
---

**Table of Contents**

Introduction to Syntax Analysis
Backtracking Analysis
Eliminating Backtracking (Key Topic)
Recursive Descent Analysis
Predictive Analysis
FIRST and FOLLOW Sets
Constructing Predictive Analysis Tables (Key Topic)

---

## Key Points Overview

![](/images/posts/电子科技大学编译原理复习笔记（六）：自上而下的语法分析/62b5a5f1f1f4.png)

![](/images/posts/电子科技大学编译原理复习笔记（六）：自上而下的语法分析/8dd6d5d24774.png)

---

## Introduction

### Function of Syntax Analysis

![](/images/posts/电子科技大学编译原理复习笔记（六）：自上而下的语法分析/a7708c901c1c.png)

### Classification of Syntax Analysis

**Top-Down**: Starting from the grammar's start symbol, can we find a leftmost derivation sequence such that S=>*w?

**Bottom-Up**: Starting from w, can we find a leftmost reduction (reverse of rightmost derivation) sequence, reducing step by step until reaching the start symbol S?

### Top-Down Analysis Methods

**Non-deterministic** analysis: **Backtracking Analysis**

**Deterministic** analysis: **Recursive Descent Analysis**

---

## Backtracking Analysis

### Example

![](/images/posts/电子科技大学编译原理复习笔记（六）：自上而下的语法分析/ead2dd8820cd.png)

![](/images/posts/电子科技大学编译原理复习笔记（六）：自上而下的语法分析/671541290185.png)

### Method

> Start from grammar's start symbol S;
> Select S's candidate for derivation, then proceed with leftmost derivation;
> If derivation fails, try other candidates — inevitably leads to backtracking;
> If all candidates fail, w is not a sentence of G; w has syntax errors.

### Problems

Backtracking!!!

### Causes

> (1) Common left factors
> (2) Left recursion
> (3) ε productions

### Characteristics

> Backtracking analysis is a non-deterministic method.
> Uses trial-and-error to exhaust every possibility; when analysis fails, backtrack to appropriate position and retry other possible derivations.
> Only after exhausting all possible derivations and still failing can we confirm the input string is not a sentence of the grammar.

### Solving Defects

> Backtracking analysis is an inefficient syntax analysis method, rarely used in actual compilers.
> Address causes of backtracking with methods to eliminate backtracking;
> Introduce deterministic syntax analysis methods — Recursive Descent Analysis and Predictive Analysis.

---

## Eliminating Backtracking (Key Topic)

### 1. Extracting Common Left Factors

![](/images/posts/电子科技大学编译原理复习笔记（六）：自上而下的语法分析/a48a065a526e.png)

**In plain terms**: Write out the left factor, follow with a new symbol, new symbol on new line derives what follows the factor.

### 2. Eliminating Left Recursion

**① Eliminating Direct Left Recursion**

![](/images/posts/电子科技大学编译原理复习笔记（六）：自上而下的语法分析/e62f33bb8662.png)

**In plain terms**: Non-recursive parts go to left side, all followed by new symbol; new symbol on new line derives recursive symbol or ε.

![](/images/posts/电子科技大学编译原理复习笔记（六）：自上而下的语法分析/dbbc57573f2b.png)

**② Eliminating Indirect Left Recursion**

**Method**: Order all non-terminals, sequentially substitute productions of form A→Bα, replacing B with B's production right side, repeat to get direct left recursion, then eliminate direct left recursion.

![](/images/posts/电子科技大学编译原理复习笔记（六）：自上而下的语法分析/8cf68d8ce54e.png)

---

## Recursive Descent Analysis

If a grammar has no common left factors and no left recursion, it may be possible to construct a backtracking-free recursive descent analyzer.

The analysis program consists of a set of recursive procedures. Each procedure corresponds to a grammar non-terminal and analyzes the corresponding production's right side.

### Recursive Procedure Construction

1. Procedure advance: Match and move input string pointer forward one position
2. Variable sym: Symbol pointed to by input pointer
3. Error(): Error handling function

![](/images/posts/电子科技大学编译原理复习笔记（六）：自上而下的语法分析/dab3da3b9baf.png)

![](/images/posts/电子科技大学编译原理复习笔记（六）：自上而下的语法分析/3f910129eaa0.png)

### Extended BNF

![](/images/posts/电子科技大学编译原理复习笔记（六）：自上而下的语法分析/f9a5ce4bee09.png)

![](/images/posts/电子科技大学编译原理复习笔记（六）：自上而下的语法分析/1201edb04dbd.png)

---

## Predictive Analysis

Transforming recursive descent analysis yields a more effective method — Predictive Analysis.

Predictive analysis is a table-driven method consisting of a pushdown stack, predictive analysis table, and control program.

Its essence is predicting each candidate's matching role.

### Predictive Analysis Table

- Form: M[A,a] matrix, A ∈ VN, a ∈ Vt ∪ {#}
- Content:
  - A→α: Use A→α to match input symbol a, or
  - Error flag (blank): A cannot match a
- Purpose: Record prediction conclusions

![](/images/posts/电子科技大学编译原理复习笔记（六）：自上而下的语法分析/d6bb42bc123b.png)

### ⭐ Analysis Method (Key Topic)

The predictive analyzer's control program decides the next action based on:
- Stack top symbol x
- Current input symbol a

Actions:
1. If x=a=#: Both string and stack are empty; input string ω is a legal sentence; analysis ends
2. If x=a≠#: Stack top matches input symbol; pop x, move input pointer to next symbol; this match succeeds, continue next match
3. If X is non-terminal: Check analysis table
   - If M[x,a] contains x→α: Pop x, push α in reverse order (α's prefix at stack top)
   - If M[x,a] is error flag: Call error handler error()

### ⭐ Constructing Predictive Analysis Tables (Key Topic)

Constructing a grammar's predictive analysis table requires introducing FIRST and FOLLOW sets.

**FIRST Set**

Definition: Set of all possible **leading** terminals from α's derivations and possible ε.

**Plain rules**: Terminal's FIRST set contains itself; if non-terminal X can derive ε, then ε∈FIRST(X); if X can derive a string starting with terminal, that terminal ∈FIRST(X); if X derives a string starting with non-terminal, that non-terminal's FIRST set elements (except ε) ∈FIRST(X).

**FOLLOW Set**

Definition: FOLLOW(A) examines A's appearances on production right sides — which terminals can follow A.

**Plain rules**: Start symbol's FOLLOW set contains #; examine all production right sides — if string appears after non-terminal X, add that string's FIRST set elements (except ε) to FOLLOW(X); if nothing follows X or what follows can derive ε, add production left side's FOLLOW set elements to FOLLOW(X).

**Construction Algorithm (Key Topic)**

![](/images/posts/电子科技大学编译原理复习笔记（六）：自上而下的语法分析/68921e67efdb.png)

**LL(1) Grammar**

During analysis:
- Using only the current non-terminal
- And looking ahead 1 input symbol
- Can uniquely determine what action to take

Then this grammar is LL(1).

- LL = Left-to-right scan, Leftmost derivation
- (k) = Look ahead k positions
- Not all grammars G can be rewritten as LL(1), even after extracting left factors and eliminating left recursion

![](/images/posts/电子科技大学编译原理复习笔记（六）：自上而下的语法分析/3531140af74a.png)

**Key point**: To determine if it's LL(1): Check if predictive analysis table has one production per cell. If a cell has multiple productions, it's not LL(1).

---

## Chapter Summary

All knowledge points in this chapter are important. Master the related calculations — they will be tested in analysis problems!
