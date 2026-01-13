---
title: "UESTC Compiler Principles Review Notes (1): Introduction"
date: 2023-05-25
updated: 2023-05-25
categories:
  - Review Notes
tags:
  - notes
  - compiler-principles
  - review-notes
  - study
  - study-materials
cover: /images/posts/电子科技大学编译原理复习笔记（一）：绪论/662865df5905.png
lang_pair:
  zh-CN: "电子科技大学编译原理复习笔记（一）：绪论"
---

**Table of Contents**

Language Classification
Von Neumann Architecture
Binding Concepts
Variables
Virtual Machines
Program Units

---

## Key Points Overview

![](/images/posts/电子科技大学编译原理复习笔记（一）：绪论/662865df5905.png)

---

## Language Classification

> - **Imperative Languages**: Von Neumann-based
> - **Functional Languages**: Mathematical functions
> - **Logic Languages**: Mathematical logic
> - **Object-Oriented Languages**: Abstract data types

### Von Neumann Architecture

**Foundation**: Memory + Controller + Processor

**Characteristics**:
- Data/instructions stored in binary form
- "Stored program" working method
- Sequential program execution
- Memory contents can be modified

**Manifestation in Imperative Languages**:
- **Variables**: Storage units and their names replaced by variable concept; can represent one or more units and be modified
- **Assignment**: Computation results must be stored
- **Repetition**: Complex computations require repeated execution of certain instruction sequences

### Binding Concepts

- **Attribute**: Characteristics possessed by an entity
- **Binding**: The process of establishing a connection between an object (or thing) and one of its attributes
- **Descriptor**: Symbols, statements, or tables used to describe entity attributes; i.e., mapping from entity to attributes
- **Binding Time**: The moment when an object (entity) is associated with one of its attributes

![](/images/posts/电子科技大学编译原理复习笔记（一）：绪论/7d5c7b2582a9.png)

- **Static Binding**: Attributes determinable at compile time are called static attributes; if binding is completed at compile time and doesn't change at runtime, it's called static binding
- **Dynamic Binding**: Attributes determinable only at runtime are called dynamic attributes; if binding is completed at runtime, it's called dynamic binding

### Variables

> Variables are abstractions of one or more storage units; assignment statements are abstractions of modifying storage unit contents.
>
> Besides name, variables have four attributes: scope, lifetime, value, and type.

**Variable Scope**:
- The **program range where the variable can be accessed**
- Static scope binding: Defines variable scope according to program syntax structure
- Dynamic scope binding: Defines variable scope dynamically according to program execution

**Variable Lifetime**:
- The **time interval during which a storage area is bound to a variable**
- Data object: Storage area and the value it holds
- Allocation: The activity of a variable obtaining storage area
- Length: Number of storage units allocated to the variable

![](/images/posts/电子科技大学编译原理复习笔记（一）：绪论/2f640a584e71.png)

**Variable Value**:
- The **contents of the storage unit corresponding to the variable**
- Anonymous variable access is implemented through pointers
- Binding between variable and its value is dynamic
- Variable initialization: Error if not initialized / Random value initialization / Default value initialization (e.g., default 0)

**Variable Type**:
- **Specification of the class of values associated with the variable and operations on those values**
- Can be used to interpret the meaning of storage area contents (bit strings) bound to variables
- At language definition time, type names are usually bound to a value class and a set of operations
- At language implementation time, values and operations are bound to some machine binary representation

**Variable Type Binding**:
- Static binding: Completed through declaration statements
- Dynamic binding: Implicit declaration at execution time with dynamic changes

### Virtual Machines

A virtual machine is a machine implemented by software.

![](/images/posts/电子科技大学编译原理复习笔记（一）：绪论/0362487cc701.png)

---

## Program Units

- **Program Unit**: Independent calling unit during program execution (subprogram/block/procedure/...)
- **Unit Representation**: At compile time, unit representation is the unit's source program; at runtime, unit representation consists of code segment and activation record as a whole, called unit instance
- **Activation Record**: Storage area for information needed to execute the unit and data objects bound to the unit's local variables
- **Non-local Variables**: A program unit can reference variables not declared in this unit but declared in other units
- **Reference Environment**: Local variables + Non-local variables
- **Alias**: When two variables in the same unit's reference environment are bound to the same data object, these variables are said to have aliases
- **Side Effect**: Modifying an object bound to a non-local variable produces a side effect

Program units can be recursively activated, so a unit can have many instances, but the code segment is the same; only the activation records differ.

---

## Chapter Summary

This chapter is conceptually rich as an introduction. Familiarize yourself with the concepts, paying attention to highlighted and bolded sections.
