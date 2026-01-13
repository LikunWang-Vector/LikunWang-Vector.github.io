---
title: "UESTC Compiler Principles Review Notes (5): Lexical Analysis"
date: 2023-05-29
updated: 2023-05-29
categories:
  - Review Notes
tags:
  - review-notes
  - compiler-principles
  - lexical-analysis
  - study-materials
  - state-transition-diagram
cover: /images/posts/电子科技大学编译原理复习笔记（五）：词法分析/354c339fe0b7.png
lang_pair:
  zh-CN: "电子科技大学编译原理复习笔记（五）：词法分析"
---

**Table of Contents**

Lexical Analysis Overview
Lexical Analyzer Structure
State Transition Diagrams
Lexical Analyzer Design
Symbol Tables

---

## Key Points Overview

![](/images/posts/电子科技大学编译原理复习笔记（五）：词法分析/354c339fe0b7.png)

![](/images/posts/电子科技大学编译原理复习笔记（五）：词法分析/144e3fd0f348.png)

---

## Lexical Analysis Overview

### Function of Lexical Analysis

Scan the source program's character string, recognize token symbols according to lexical rules as output, and output relevant error information for lexical errors discovered during recognition (can assign line numbers to error messages).

**Relationship between Lexical Analyzer and Syntax Analyzer**:
1. Lexical analyzer can be a separate phase
2. Lexical analyzer can be a subroutine of the syntax analyzer

### Output Format of Lexical Analyzer

**Token Categories**:

![](/images/posts/电子科技大学编译原理复习笔记（五）：词法分析/d16947918ff3.png)

**Token Output Format**: Binary tuple (token class, token value)

![](/images/posts/电子科技大学编译原理复习笔记（五）：词法分析/29c003708179.png)

Token classification: Keywords (reserved words) one word one code; Identifiers (letter-digit strings starting with letter) as one category; Constants classified by type (integer, real, boolean, character...)

---

## Lexical Analyzer Structure

![](/images/posts/电子科技大学编译原理复习笔记（五）：词法分析/397ba65a1a5a.png)

- **Input Buffer**: Stores source program
- **Preprocessor**: Removes comments, extracts useless whitespace, tabs, newlines, carriage returns
- **Scan Buffer**: Input fixed-length strings from input buffer to another buffer (scan buffer); lexical analyzer performs symbol recognition directly in this buffer

![](/images/posts/电子科技大学编译原理复习笔记（五）：词法分析/f67b6d3ea162.png)

**Lexical Analysis Technique - Lookahead**: To determine a token's category, must scan one or more additional units.

---

## State Transition Diagrams

**Definition**: A finite directed graph where circles represent nodes (states), directed edges connect nodes with character labels indicating acceptable/recognizable characters in that state. Has unique initial state and several final states.

States marked with * indicate that if the last recognized character isn't in the token table, one character must be returned.

![](/images/posts/电子科技大学编译原理复习笔记（五）：词法分析/5a46c18b495c.png)

> Using state transition diagrams to recognize tokens:
> 1. Start from initial state
> 2. Read a character from input string
> 3. Determine which arc's label matches the input character from current state, transition to that arc's target state
> 4. Repeat 3; if no match, fail; reaching final state means a token is recognized

- How to distinguish keywords/reserved words that match identifier patterns?
- Pre-fill reserved words in symbol table, indicating they're not identifiers. Build separate state transition diagrams for reserved words.

### Constructing State Transition Diagrams

![](/images/posts/电子科技大学编译原理复习笔记（五）：词法分析/830cab4a838b.png)

---

## Lexical Analyzer Design

### Basic Structure

![](/images/posts/电子科技大学编译原理复习笔记（五）：词法分析/0c9678271c0c.png)

### Content

- Tokens
- Token table
- State transition diagram
- Matching algorithm

---

## Symbol Tables

### Purpose

In programs, users use **identifiers to define many names** representing different data objects. The compiler can **save these names in the symbol table**.

### Composition

Besides recording **the name itself**, symbol tables also record **various attribute information** associated with names.

### Role in Lexical Analysis

- Build symbol table, query and fill symbol table
- Fill non-duplicate identifiers, numeric constants, and character constants' properties into symbol table
- Write variable/constant's symbol table entry address into its own token

### General Form of Symbol Tables

Each name corresponds to a table entry; an entry includes name field and information field.

Information field has several subfields and flag bits; content relates to the name.

### Common Symbol Table Structures

**Linear Table**: Use N arrays to store N subfields of symbol table

**Hash Table**:

![](/images/posts/电子科技大学编译原理复习笔记（五）：词法分析/9d00ccf48683.png)

### Why Separate Lexical and Syntax Analysis

- Simplifies compiler design
- Improves compiler efficiency
- Enhances compiler portability

---

## Chapter Summary

![](/images/posts/电子科技大学编译原理复习笔记（五）：词法分析/8ef957af950e.png)

![](/images/posts/电子科技大学编译原理复习笔记（五）：词法分析/4590d1b05be1.png)

![](/images/posts/电子科技大学编译原理复习笔记（五）：词法分析/35662041bd6f.png)

![](/images/posts/电子科技大学编译原理复习笔记（五）：词法分析/83307e5e8328.png)
