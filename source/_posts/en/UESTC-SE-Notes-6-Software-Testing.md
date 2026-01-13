---
title: "UESTC Software Engineering Review Notes (6): Software Testing"
date: 2023-02-27
updated: 2023-02-27
categories:
  - Review Notes
tags:
  - software-engineering
  - algorithms
  - black-box-testing
  - white-box-testing
  - software-testing
cover: /images/posts/电子科技大学软件工程期末复习笔记（六）：软件测试/9222525b9de4.png
lang_pair:
  zh-CN: "电子科技大学软件工程期末复习笔记（六）：软件测试"
---

**Table of Contents**

Software Testing Fundamentals
Black-box Testing
White-box Testing
Gray-box Testing
Static Testing

---

## Key Points Overview

![](/images/posts/电子科技大学软件工程期末复习笔记（六）：软件测试/9222525b9de4.png)

---

## Software Testing

### Basic Principles

> - **Exhaustive testing is impossible**: Decide what's more important
> - **Testing cannot reveal all hidden defects**: Cannot guarantee no errors exist
> - **Testing activities should start early**: Earlier discovery means lower modification costs
> - **Software defects cluster**: One problem can cause multiple error symptoms
> - **Beware of the pesticide paradox**: Using the same test cases repeatedly is inadvisable (they may be special cases that pass)
> - **Use independent testing teams**: Self-testing is inadvisable (developers may not think of special cases)

### Goals

> - Confirm the system meets its intended use and user needs
> - Confirm the required problems are solved
> - Establish responsibility and accountability for the testing process
> - Facilitate early detection of software and system anomalies
> - Provide early performance evaluation of software and systems
> - Provide management with real information to assess commercial risk of releasing the product
> - Identify areas where program anomalies cluster

### Test Cases

> **Definition**: A collection of test inputs, execution conditions, and expected results
>
> **Purpose**: Developed for specific objectives, such as executing specific program paths or verifying compliance with specified requirements

### Software Defects

> A software defect occurs when any of the following conditions are met:
> - **Incomplete**: Software doesn't implement functionality required by the specification
> - **Erroneous**: Software exhibits errors the specification says shouldn't occur
> - **Over-engineered**: Software implements functionality not mentioned in the specification
> - **Implicit requirements unmet**: Software doesn't implement goals that should be implemented even if not explicitly mentioned
> - **Poor usability**: Software is hard to understand, difficult to use, or runs slowly

### Debugging vs Testing

> **Similarities**: Both involve handling software defects and examining code
>
> **Differences**: Testing aims to **discover the existence of defects**; Debugging aims to **locate and fix defects**

### Testing vs Quality Assurance

> - **Software testers' goal**: Find defects as early as possible and ensure they get fixed
> - **QA personnel's main responsibility**: Create and execute standards and methods that improve the development process and prevent defects

### Software Testing Evaluation Criteria

> **Coverage**: Test set T / Test requirement set TB
>
> **Fault Seeding**: Intentionally insert faults before testing; Detection rate = Discovered seeded errors / Total seeded errors
>
> **Mutation Score**: Mutate the program multiple times, test with the same test cases, evaluate the test cases' ability to detect differences between program mutations (e.g., wrong identifiers or operators)

---

## Black-box Testing

### Definition

> Black-box testing ignores the internal mechanisms of a system or component, focusing only on outputs responding to specific inputs and execution conditions. Also called functional testing.
>
> Treats the test object as a black box. Testers don't consider internal logic or characteristics, only checking whether program functions match the requirements specification.

### Equivalence Class Partitioning

> **Meaning**: Divides all possible input data (the program's input domain) into several parts, then selects representative data from each part as test cases
>
> **Steps**: Model the input domain, partition parameters into equivalence classes, appropriately combine parameters

### Boundary Value Analysis

> **Boundary**: Specific situations slightly above or below boundary values for input and output equivalence classes
>
> **Boundary Selection**: Select values exactly equal to, just above, or just below boundaries as test data, rather than typical or arbitrary values from equivalence classes

### State Testing

> **Necessity**: During black-box testing, internal logic structure is unknown, so state testing provides indirect verification
>
> **Meaning**: A model-based testing approach that uses state diagrams to describe time sequences/use case scenarios, generating test cases from them
>
> **Steps**: Build state transition diagrams, design test cases

---

## White-box Testing

### Definition

> White-box testing considers the internal mechanisms of a system or component (e.g., branch testing, path testing, statement testing). Also called structural testing.
>
> Treats the test object as a transparent box. Testers use internal logic structure and related information to design or select test cases, testing all logical paths and checking program state at different points to verify actual state matches expected state.

### Logic Coverage Testing

> **Meaning**: A technique for designing test cases based on internal program logic structure; belongs to white-box testing.
>
> **Categories**:
> - **Statement Coverage**: Execute each executable statement at least once
> - **Condition Coverage**: Execute each possible value of each condition at least once
> - **Branch Coverage**: Execute both true and false branches of each decision at least once
> - **Condition Combination Coverage**: Execute all possible combinations of condition values for each decision at least once

### Control Flow Graph Coverage Testing

> **Meaning**: Convert code to control flow graphs and test based on them; belongs to white-box testing.
>
> ![](/images/posts/电子科技大学软件工程期末复习笔记（六）：软件测试/afddab1f0130.png)
>
> **Notes**:
> - In selection or multi-branch structures, there should be a convergence node at branch merge points
> - Areas bounded by edges and nodes are called regions; when counting regions, the area outside the graph also counts as one region
> - If a decision's condition expression is a compound expression connected by logical operators (OR, AND, NAND, NOR), it needs to be converted to a series of nested decisions with single conditions

> - **Node Coverage**: Equivalent to statement coverage
> - **Edge Coverage**: Includes node coverage and can also achieve branch coverage
> - **Path Coverage**: Cover all possible paths in the program (basic path testing)

### Basic Path Testing

> - **Calculate cyclomatic complexity**:
>   - ① V(G) = e - n + 2, where e = number of edges, n = number of nodes
>   - ② Number of regions
> - **Determine basic set of linearly independent paths**:
>   - Use entry-to-exit as baseline, backtrack along baseline path, choose different edges when out-degree ≥ 2, repeat until path count equals V(G)
> - **Derive test cases for each basic path**:
>   - Ensure execution of each path in the basic path set, use logic coverage methods to ensure each path can be tested, finally compare test case execution with expected results

---

## Gray-box Testing

> A hybrid of black-box and white-box testing methods.
>
> Falls between white-box and black-box testing, often used during integration testing. Focuses not only on input/output correctness but also on internal program conditions.

---

## Static Testing

### Meaning

> A software testing technique that finds errors and evaluates code quality through inspection and reading without actually running the program.

### Scope

> Code inspection, static structure analysis, code quality metrics

### Purpose

> Improve code reliability, discover defects early, audit and locate error-prone modules

### Basic Approach

> Review

### Three Types of Reviews

> - **Peer Review**: Informal review, initial examination
> - **Walkthrough**: Conducted within the development team; developer explains, answers questions, records
> - **Inspection**: Meeting format with defined goals, processes, rules, and result reports
