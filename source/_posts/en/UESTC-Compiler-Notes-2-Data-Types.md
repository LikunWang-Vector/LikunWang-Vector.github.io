---
title: "UESTC Compiler Principles Review Notes (2): Data Types"
date: 2023-05-25
updated: 2023-05-25
categories:
  - Review Notes
tags:
  - programming-languages
  - review-notes
  - data-types
  - data-structures
  - compiler-principles
cover: /images/posts/电子科技大学编译原理复习笔记（二）：数据类型/0403b8329bea.png
lang_pair:
  zh-CN: "电子科技大学编译原理复习笔记（二）：数据类型"
---

**Table of Contents**

Introduction
Built-in Types
User-Defined Types
Six Data Type Aggregation Methods (Key Topic)
Abstract Data Types (Key Topic)
Type Operations

---

## Key Points Overview

![](/images/posts/电子科技大学编译原理复习笔记（二）：数据类型/0403b8329bea.png)

The second and third points are particularly important.

---

## Introduction

- Data types implement data abstraction, freeing programmers from machine-specific details and improving programming efficiency
- A language's specific data abstraction is influenced by the machine and application domain the language targets
- Data types are divided into built-in types (language-defined) and user-defined types (starting from Pascal)
- **Data Type = Set of Values + Set of Operations**

---

## Built-in Types

### Characteristics of Built-in Types

- **Built-in types are abstractions of basic bit strings**
- Reflect basic hardware characteristics
- Are abstract representations of data objects sharing certain operations

### Advantages of Built-in Types

- Invisibility of basic representation: Basic bit strings are invisible to programmers
- Compiler can check correctness of variable usage (static type checking)
- Compiler can determine unambiguous operations
- Precision control: Data precision can be explicitly defined through data types

---

## User-Defined Types

**User-defined types are abstractions of built-in types (and other user-defined types)**

User-defined types are aggregations of basic data objects (and even aggregations of aggregations)

### ⭐ Key Topic: Six Data Type Aggregation Methods

![](/images/posts/电子科技大学编译原理复习笔记（二）：数据类型/208e9ab58bc3.png)

**Cartesian Product**

**Definition**:

![](/images/posts/电子科技大学编译原理复习笔记（二）：数据类型/690038749996.png)

Examples: Pascal records; C structures

**Finite Mapping**

**Definition**: A function between two finite sets from domain type to range type is called finite mapping.

Examples: Arrays in Pascal

Characteristics: Manifests as array construction in high-level languages; range objects selected by subscript; subscript out-of-bounds causes errors requiring dynamic checking; static arrays bound at compile time / semi-dynamic arrays bound at object creation / dynamic arrays bound at object processing

**Sequence**

**Definition**: A sequence consists of any number of data items called components, all of the same type.

Examples: String; Sequential files

**Recursion**

**Definition**: If a data type contains components of the same type, it's a recursive type.

Examples: Binary trees; Linked lists

**Discriminated Union**

**Definition**: A construction mechanism for selecting object structures, specifying appropriate selection between two different selection objects based on different conditions; each selection object structure is called a variant.

Examples: Variant records in Pascal; Unions in C

**Power Set**

**Definition**: The collection of all subsets of a data type's elements is called the power set, denoted Powerset(T), where T is called the base type.

Examples: Sets

---

## ⭐ Abstract Data Types (Key Topic, Exam Point)

**Purpose**: Following built-in types, hide internal information of user-defined types.

**Definition**: In the program unit defining the type, establish basic operations related to representation; for program units using the type, the type's representation is hidden.

![](/images/posts/电子科技大学编译原理复习笔记（二）：数据类型/00b8b1ee8ab3.png)

---

## Type Operations

### Type Checking

**Definition**: Consistency checking of whether data object **types** and **operations** used **match**.

- Static checking (compile-time): Makes programs more correct and efficient
- Dynamic checking (runtime): Convenient programming, affects reliability, reduces execution efficiency

### Type Conversion

- Conversion mechanisms: Implicit conversion (automatic) / Explicit conversion (casting)
- Conversion methods: Widening (range expansion) / Narrowing (range reduction)

### Type Equivalence

**Definition**: Two types are equivalent (compatible) if any value of one can be assigned to the other, and any actual parameter can correspond to the other's formal parameter.

- Name equivalence: Two variables have the same type name
- Structural equivalence: Two variables' types have the same structure (compatibility implementation pattern matching can be complex)

### Implementation Model

Not examined; slightly related to Chapter 11.

---

## Chapter Summary

![](/images/posts/电子科技大学编译原理复习笔记（二）：数据类型/dc395767c0f3.png)

![](/images/posts/电子科技大学编译原理复习笔记（二）：数据类型/44022af250ef.png)
