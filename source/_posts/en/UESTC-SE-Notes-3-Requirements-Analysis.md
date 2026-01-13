---
title: "UESTC Software Engineering Review Notes (3): Requirements Analysis"
date: 2023-02-07
updated: 2023-02-07
categories:
  - Review Notes
tags:
  - software-engineering
  - requirements-analysis
  - study-materials
  - review-notes
cover: /images/posts/电子科技大学软件工程期末复习笔记（三）：需求分析/6c855d5ad8ae.png
lang_pair:
  zh-CN: "电子科技大学软件工程期末复习笔记（三）：需求分析"
---

**Table of Contents**

Requirements Analysis Overview
Definition of Requirements
Characteristics of Requirements
Functional vs Non-functional Requirements
Four Steps of Requirements Analysis
Structured Analysis Methods
Data Flow Diagrams (Key Topic)
Object-Oriented Analysis
Use Case Diagrams (Key Topic)

---

## Key Points Overview

![](/images/posts/电子科技大学软件工程期末复习笔记（三）：需求分析/6c855d5ad8ae.png)

This chapter covers three main parts: Requirements Analysis, Structured Analysis Methods, and Object-Oriented Analysis.

---

## Requirements Analysis

### Definition of Requirements

> - Software requirements express the demands and constraints for products that solve real-world problems
> - Determine the functions and performance the system must have, the required operating environment, and predict future development
> - Requirements are a collection of statements describing all meaningful aspects of a system to be developed, expressed in a clear, concise, consistent, and unambiguous manner

### Characteristics of Requirements

![](/images/posts/电子科技大学软件工程期末复习笔记（三）：需求分析/dc1582b8893e.png)

> **Verifiability**:
> - Requirements are the basis for testing (i.e., testable)
> - Express quantitatively whenever possible
>   - Not verifiable: "Software should be reliable"; "Software should be user-friendly"
>   - Verifiable: "The probability of a fatal error during any business hour is less than 1×10⁻⁸"
> - Verifying certain requirements may be very difficult and costly. For example, verifying throughput requirements for call center software.

> Requirements have attributes beyond behavior, such as **priority**.
> Trade-offs: Arrange implementation order based on requirement **urgency** and **available resources** (personnel, technology, funding). Some features are done first, others later, and some may be deferred to phase two or three.

### Functional vs Non-functional Requirements

> **Functional Requirements**:
> - Describe what the system should do - the functions and services provided to users and other systems
>
> **Non-functional Requirements**:
> - Constraints on problem-solving. Also called limitations or quality requirements
>   - Can be further divided into: performance requirements, maintainability requirements, security requirements, reliability requirements, portability requirements, etc.
>   - Non-functional requirements limit the scope of solution choices, such as operating platform, implementation technology, programming languages and tools

**Example Analysis - Airline Reservation System**

Classify the following aspects (F = Functional, NF = Non-functional, X = Should not be a requirement):

- How to input flight, passenger, and booking information → **F: Input**
- What information appears on tickets and reports → **F: Output**
- How to calculate airfare → **F: Calculation**
- What information must be stored in databases accessible by travel agencies → **F: Data Storage**
- System should be designed to handle frequent flyer programs → **NF: Enhancement tolerance**
- System must be available at all times, with only 2 minutes downtime per week → **NF: Availability requirement**
- Must use sorting algorithm to sort flights by departure time → **X: This is a design issue**

### Four Steps of Requirements Analysis

> **Requirements Elicitation**
> - **Sources of software requirements and methods engineers use to collect them**
> - Also called requirements capture, requirements discovery, or requirements acquisition

> **Requirements Refinement**
> - **Produce operational specifications, specify software interfaces with other system components, determine constraints**
> - Understanding and analyzing the application problem and environment, building models for information, functions, and system behavior

> **Requirements Specification**
> - **Write the Software Requirements Specification (SRS)**
> - SRS is a complete description of the system's behavior, containing use cases describing user-software interactions

> **Requirements Validation**
> - **Check requirements for correctness, completeness, non-ambiguity, internal and external consistency**
> - Inevitably requires user participation - users are problem owners who decide if the SRS adequately describes their problem

---

## Structured Analysis Methods

### Core of Structured Analysis Modeling

Structured analysis is a modeling technique. The analysis model is shown below:

![](/images/posts/电子科技大学软件工程期末复习笔记（三）：需求分析/bab6ae54d4fe.png)

> As shown above, **the core of structured analysis modeling is the Data Dictionary**.

### Three Diagrams Built Around the Core

**Data Flow Diagram (DFD)** — Functional Modeling

![](/images/posts/电子科技大学软件工程期末复习笔记（三）：需求分析/2cf0c7cdcc92.png)

**Entity-Relationship Diagram (ERD)** — Data Modeling

![](/images/posts/电子科技大学软件工程期末复习笔记（三）：需求分析/aba54826e61f.png)

**State Transition Diagram (STD)** — Behavioral Modeling

![](/images/posts/电子科技大学软件工程期末复习笔记（三）：需求分析/1e016e9e821c.png)



### ⭐ Drawing Data Flow Diagrams (Key Topic)

**Basic Graphic Symbols**

![](/images/posts/电子科技大学软件工程期末复习笔记（三）：需求分析/41e9d0763195.png)

**Relationships Between Multiple Data Flows**

> - `*` indicates both must exist simultaneously
> - `⊕` indicates only one can exist
> - `+` indicates either can exist alone or together (can be omitted)

![](/images/posts/电子科技大学软件工程期末复习笔记（三）：需求分析/fa2a01927a2f.png)

**Context Diagram (Level 0 / Top-level DFD)**

Contains only the target system to be developed, equivalent to confirming the system's position in the environment and boundaries with external entities.

![](/images/posts/电子科技大学软件工程期末复习笔记（三）：需求分析/33c953f22909.png)

**Layered Data Flow Diagrams**

Decompose according to system hierarchy, with layered DFDs reflecting structural relationships. This clearly expresses and facilitates understanding of the entire system.

(The idea is to progressively refine internal data flows of the target system, decomposing layer by layer.)

### Data Flow Diagram Example

> **Bank Savings System Business Process:**
>
> - Deposit or withdrawal slips filled by customers are entered into the system by clerks
> - For deposits: system records depositor's name, address (or phone), ID number, deposit type, deposit date, maturity date, interest rate, password (optional), and prints deposit receipt for customer
> - For withdrawals with password: system first verifies password; if correct or no password was set, system calculates interest and prints interest statement for customer
> - **Task: Draw layered DFDs, refined to level 2**

> **Solution:**
>
> **1. Identify External Entities and Input/Output Data Flows**
>
> ![](/images/posts/电子科技大学软件工程期末复习笔记（三）：需求分析/30fd5cec063a.png)
>
> **2. Draw Top-level (Context) DFD**
>
> ![](/images/posts/电子科技大学软件工程期末复习笔记（三）：需求分析/bea840b409e9.png)
>
> **3. Draw Level 1 DFD (Refine Internal System Processes)**
>
> ![](/images/posts/电子科技大学软件工程期末复习笔记（三）：需求分析/00a0971f96ca.png)
>
> **4. Draw Level 2 DFD**
>
> Further decompose "Process Deposit" and "Process Withdrawal" from level 1 to get level 2 DFDs.
>
> ![](/images/posts/电子科技大学软件工程期末复习笔记（三）：需求分析/71aed6ec9b40.png) *Process Deposit DFD*
>
> ![](/images/posts/电子科技大学软件工程期末复习笔记（三）：需求分析/ddea330c8437.png) *Process Withdrawal DFD*

---

## Object-Oriented Analysis

### Three Models in OO Analysis

> **Use Case Model**: Functional model represented by use cases and scenarios (Use Case Diagram)
> **Object Model**: Static model represented by classes and objects (Class Diagram)
> **Dynamic Model**: Interaction model represented by state diagrams and interaction diagrams (e.g., Sequence Diagram)
>
> - State Diagram: Built for one object, describing its states and transitions
> - Interaction Diagram: Built for one use case, describing dynamic interactions between multiple objects

### Three Elements of Use Case Diagrams

> The main elements of use case diagrams are **Use Cases**, **Actors**, and their **Relationships**.

### ⭐ Drawing Use Case Diagrams (Key Topic)

Three main relationships between use cases: **Generalization, Include, Extend**

![](/images/posts/电子科技大学软件工程期末复习笔记（三）：需求分析/ee425246c3be.png)

**Generalization**: When multiple use cases share similar structure and behavior, we can abstract their commonality into a parent use case, with others as child use cases. Child use cases inherit all structure, behavior, and relationships from the parent.

![](/images/posts/电子科技大学软件工程期末复习笔记（三）：需求分析/5f2791c2efbb.png)

**Include**: Indicates that a use case (base case) always includes the functionality of another use case (included case). The included case's event flow is inserted into the base case's event flow. Included cases are reusable - common use cases shared by multiple use cases.

When multiple use cases use the same functionality, extract it as a separate use case (included case).

Include relationship is shown as a dashed arrow **pointing to the included use case**.

![](/images/posts/电子科技大学软件工程期末复习笔记（三）：需求分析/a5c79bf9f224.png)

![](/images/posts/电子科技大学软件工程期末复习笔记（三）：需求分析/c8715ead4f6f.png)

**Extend**: Indicates that a use case (base case) may need functionality from other use cases (extension cases) to extend its execution. The extension case's event flow is inserted into the base case at specific extension points under certain conditions.

Extend relationship is shown as a dashed arrow **pointing to the base use case**.

![](/images/posts/电子科技大学软件工程期末复习笔记（三）：需求分析/9196e52401ee.png)

![](/images/posts/电子科技大学软件工程期末复习笔记（三）：需求分析/edfe58dcee22.png)

---

## Chapter Summary

- Software requirements span the entire software engineering lifecycle
- Software requirements: User expectations for the target system regarding functionality, behavior, performance, and design constraints
- Requirements analysis tasks: Build requirements analysis models and write requirements specifications
- Must be able to draw Data Flow Diagrams
- Must be able to draw Use Case Diagrams
