---
title: "UESTC Software Engineering Review Notes (4): Software Design"
date: 2023-02-27
updated: 2023-02-27
categories:
  - Review Notes
tags:
  - software-engineering
  - algorithms
  - review-notes
cover: /images/posts/电子科技大学软件工程期末复习笔记（四）：软件设计/77745a059f08.png
lang_pair:
  zh-CN: "电子科技大学软件工程期末复习笔记（四）：软件设计"
---

**Table of Contents**

Software Design Definition
Two Types of Design Activities
Software Quality Attributes
Design Techniques
Program Structure (Depth, Width, Fan-in, Fan-out)
Software Architecture
User Interface Design Principles
Structured Design Methods
Flowcharts, Pseudocode, NS Diagrams, PAD Diagrams

---

## Key Points Overview

![](/images/posts/电子科技大学软件工程期末复习笔记（四）：软件设计/77745a059f08.png)

This chapter covers two main parts: Software Design Engineering and Structured Design Methods.

---

## Software Design Engineering

### Software Design Definition

Software design is defined as the process of defining the architecture, components, interfaces, and other characteristics of software, as well as the results of that process.

> Software design is:
> - An **activity** in the software engineering lifecycle
> - The **foundation** for software coding
> - Where software requirements are transformed into software's **internal structure**
> - The **bridge** connecting user requirements and software technology

### Two Types of Design Activities

> **Software Architecture Design**
> - Also called "high-level design" or "top-level design"
> - Describes software's top-level architecture and organization, dividing it into different components
>   - Transforms software requirements into data structures and system structure
>   - Completes architecture design, data design, and interface design

> **Software Detailed Design**
> - Also called "component design" or "procedural design"
> - Describes each component in detail for coding implementation
>   - Completes procedural design within each module

> ![](/images/posts/电子科技大学软件工程期末复习笔记（四）：软件设计/2a0a00f87d0b.png)

### What Software Design Includes

> **Software design mainly includes**:
> - Decomposition Design: Mapping software to components (module division)
> - Pattern Design: Establishing reusable common components across software
>
> **Does NOT include**:
> - Creative Design: Conceptualizing and determining solutions for user requirements during requirements analysis
> - Because it's considered **part of requirements analysis and specification**

### Software Quality Attributes

> Software quality can be described through quality attributes: **FURPS**
> - **F**unctionality
> - **U**sability
> - **R**eliability
> - **P**erformance
> - **S**upportability
>   - Extensibility
>   - Adaptability
>   - Maintainability

### Design Techniques

> Abstraction, Refinement, Design Patterns, Modularization, Information Hiding, Functional Independence, Refactoring

**Why can't modules be divided infinitely?**

> Because **while smaller modules reduce individual module cost, integration costs increase dramatically, making total cost higher than expected**. The optimal choice is within the minimum cost range:
>
> ![](/images/posts/电子科技大学软件工程期末复习笔记（四）：软件设计/6411a1823340.png)

**Modularization**: Software is divided into multiple named, relatively independent components (usually called modules), integrated to meet requirements.

**Information Hiding Principle**

> **Modules should have characteristics hidden from each other: module definition and design should ensure that information (procedures and data) within a module cannot be accessed by other modules that don't need it.**
>
> Significance:
> - Information hiding means effective module division can be achieved by defining relatively independent modules
> - The principle defines and hides procedural details and local data structures within modules

**Refactoring**

> **A reorganization technique that simplifies component design (or code) without changing functionality or behavior.**
>
> Method: Examine existing design for redundancy, unused elements, invalid or unnecessary algorithms, poor construction, inappropriate data structures, or any other errors that can be changed to improve design.

**Abstraction**

> - Meaning: **The process of ignoring specific information to view different things as the same, discovering essential characteristics and methods**
> - Mechanisms: **Parameterization, Specification**
> - Specification abstraction: Procedural abstraction, Data abstraction, Control (iteration) abstraction
> - Abstraction focuses on relevant details while ignoring irrelevant ones, allowing designers to focus on solving specific problems without considering underlying details
> - When designing software, start with high abstraction levels and design from high to low abstraction

**Design Patterns**

> - General meaning: Common solutions to common problems in a given context
> - Specific meaning: A cataloged summary of code design experience that is repeatedly used and widely known
> - Purpose: Code reuse, easier understanding, reliability, program reusability
> - Categories: Creational patterns (e.g., Abstract Factory), Structural patterns (e.g., Adapter), Behavioral patterns (e.g., Command)
> - Scope: From OO program construction to (visual) object framework building

**Functional Independence**

> - Each module solves only a specific sub-function and has a simple interface from the perspective of other program structures
> - Benefits:
>   - Easy to develop (functions divided, interfaces simplified)
>   - Easy to maintain (limited secondary effects, reduced error propagation, module reuse)
> - Qualitative metrics:
>   - **Cohesion**: Relative strength of module functionality
>     - Information hiding principle helps improve module cohesion
>   - **Coupling**: Degree of interdependence between modules

**Refinement**

> - Refinement is the process of stepwise elaboration
> - **Relationship with abstraction: They are complementary concepts**
> - Abstraction lets designers determine procedures and data **without being limited to low-level details**
> - Refinement helps designers **reveal low-level details** during design (procedural/data details...)

> **In software engineering, each step from system definition to implementation can be seen as one refinement of the software solution's abstraction process!**



### Program Structure (Depth, Width, Fan-in, Fan-out)

> ![](/images/posts/电子科技大学软件工程期末复习笔记（四）：软件设计/8ea0ea9b09fe.png)
>
> Related concepts:
> - **Depth**: Number of structural levels
> - **Width**: Maximum number of modules at the same level
> - **Fan-out**: Number of modules directly called/controlled by a module
> - **Fan-in**: Number of modules that call/control a given module

> High fan-out means needing to control and coordinate many subordinate modules, while high fan-in modules are typically common/utility modules.

### Complete Design Specification

> ![](/images/posts/电子科技大学软件工程期末复习笔记（四）：软件设计/20fd8235ee5d.png)
>
> Four layers: **Core Layer, Foundation Layer, Application Layer, User Interface Layer**
>
> - Each layer provides services to the layer above and acts as a client to the layer below
> - Each layer interacts with at most two adjacent layers; functional changes affect at most adjacent inner/outer layers
> - Each layer can be implemented differently, providing strong support for software reuse

### Software Architecture

> **Five Architecture Styles**
> - Single-host structure (Centralized architecture)
> - Distributed structure
>   - Multi-processor architecture
>   - Client/Server architecture (C/S, B/S)
>   - Distributed object architecture
>   - Broker

> **C/S Architecture**
> - Proposed based on resource inequality and resource sharing, consisting of **client, server, and network**
> - Traditional C/S architecture has two tiers: client and server
>   - Thin client model: Server handles all computation
>   - Fat client model: Server only handles data management
> - Three-tier C/S architecture adds an application server, dividing the system into **Presentation Layer, Application Logic Layer, and Data Layer**
> - Entire application logic can reside on the application server, with only the presentation layer on the client
>
> ![](/images/posts/电子科技大学软件工程期末复习笔记（四）：软件设计/b5cc0114951d.png)

> **B/S Architecture**
>
> Browser/Server style is a three-tier architecture implementation: Browser/Web Server/Database Server.
>
> ![](/images/posts/电子科技大学软件工程期末复习笔记（四）：软件设计/2923824c1a7c.png)
>
> **Advantages**: System installation, modification, and maintenance all handled on server side; provides the most realistic open foundation for heterogeneous machines, networks, and application services.
>
> **Disadvantages**: Lacks dynamic page support; no integrated effective database processing; query response speed far lower than C/S; data submission typically page-based with weak dynamic interaction, unsuitable for online transaction processing.

### User Interface Design: 3 Principles

- User controls the system / User-centered
- Reduce user memory burden
- Maintain interface consistency

### User Interface Design: 3 Analyses

- Who are the users?
- How will users learn to interact with the new system?
- What tasks do users need to accomplish?

---

## Structured Design Methods

### Structured Programming Concept

> If a program's code blocks are connected only through sequence, selection, and loop control structures, and each code block has only one entry and one exit, the program is called structured.

### Flowcharts

> Program flowcharts (also called program block diagrams) are the most familiar algorithm expression tool for software developers.
>
> **Basic Control Structures**
>
> Sequential, Selection, Pre-test loop (while), Post-test loop (until), Multi-case (case)
>
> ![](/images/posts/电子科技大学软件工程期末复习笔记（四）：软件设计/a179df666b6a.png)
>
> **Standard Flowchart Symbols**
>
> ![](/images/posts/电子科技大学软件工程期末复习笔记（四）：软件设计/09ab68d3762c.png)
>
> **Loop Standard Symbols**
>
> ![](/images/posts/电子科技大学软件工程期末复习笔记（四）：软件设计/1480c7004a50.png)
>
> **Annotation Symbol Usage**
>
> ![](/images/posts/电子科技大学软件工程期末复习笔记（四）：软件设计/ef4d2e891da2.png)
>
> **Multi-choice Decision**
>
> ![](/images/posts/电子科技大学软件工程期末复习笔记（四）：软件设计/ab0f383cc32e.png)

#### Main Disadvantages of Flowcharts

> - Not a good tool for stepwise refinement; tends to make programmers consider control flow too early rather than overall program structure
> - Arrows representing control flow allow programmers to transfer control arbitrarily, ignoring structured programming principles and creating chaotic program structure
> - Insufficient for representing data structures

### Pseudocode

> A semi-formal language between natural language and formal language, used to describe algorithm design and processing details of functional modules. Also called Program Design Language (PDL).
>
> **Basic Control Structures**
> - Simple declarative sentence structure: Avoid compound statements
> - Decision structure: IF_THEN_ELSE or CASE_OF
> - Repetition structure: WHILE_DO or REPEAT_UNTIL
>
> **Example**
>
> ![](/images/posts/电子科技大学软件工程期末复习笔记（四）：软件设计/4ca6f36911e2.png)

### NS Diagrams (Nassi-Shneiderman Diagrams)

> A graphical description tool conforming to structured programming principles, also called box diagrams.
>
> **Basic Control Structures**
>
> Sequential, Selection, WHILE loop, UNTIL loop, Multi-branch selection
>
> ![](/images/posts/电子科技大学软件工程期末复习笔记（四）：软件设计/12aa7fc32e50.png)

### PAD Diagrams (Problem Analysis Diagrams)

> Evolved from flowcharts, a control tool expressing program logic structure using structured programming concepts.
>
> **Basic Control Structures**
>
> Sequential, Selection, WHILE loop, UNTIL loop, Multi-branch selection
>
> ![](/images/posts/电子科技大学软件工程期末复习笔记（四）：软件设计/14ec851548f5.png)
>
> **Extended Control Structures**
>
> ![](/images/posts/电子科技大学软件工程期末复习笔记（四）：软件设计/4fd748fd4a97.png)
>
> **Advantages of PAD**
>
> ![](/images/posts/电子科技大学软件工程期末复习笔记（四）：软件设计/92003fe49396.png)

---

## Chapter Summary

- Design is the technical core of software engineering
- Data structures, architecture, interfaces, and procedural details of software components are progressively refined, developed, reviewed, and documented during design
- Modularization (including programs and data) and abstraction concepts enable designers to simplify and reuse software components
- Refinement provides mechanisms for detailed representation of sequential functional layers
- Program and data structures help establish an overall view of software architecture, while procedures provide necessary algorithmic implementation details
- Information hiding and functional independence provide heuristics for achieving effective modularization
