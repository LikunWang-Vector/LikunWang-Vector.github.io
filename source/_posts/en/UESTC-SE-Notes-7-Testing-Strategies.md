---
title: "UESTC Software Engineering Review Notes (7): Testing Strategies"
date: 2023-02-28
updated: 2023-02-28
categories:
  - Review Notes
tags:
  - software-engineering
  - unit-testing
  - regression-testing
  - v-model
  - system-testing
cover: /images/posts/电子科技大学软件工程期末复习笔记（七）：测试策略/1fa260669c8c.png
lang_pair:
  zh-CN: "电子科技大学软件工程期末复习笔记（七）：测试策略"
---

**Table of Contents**

V-Model
Regression Testing
Unit Testing
Integration Testing
System Testing
Acceptance Testing
Alpha and Beta Testing

---

## Key Points Overview

![](/images/posts/电子科技大学软件工程期末复习笔记（七）：测试策略/1fa260669c8c.png)

---

## V-Model

> The V-Model clearly identifies different levels in the testing process and describes the correspondence between testing phases and development phases:
>
> 1. **Unit Testing**: Primarily verifies that software modules operate correctly according to detailed design specifications
> 2. **Integration Testing**: Primarily checks whether multiple modules work together as specified in the high-level design
> 3. **System Testing**: Primarily verifies that the entire system meets requirements specifications
> 4. **Acceptance Testing**: Checks from the user's perspective whether the system meets contract-defined requirements and confirms the product meets business requirements

---

## Regression Testing

> **Selectively** re-testing a system or its components to verify that software modifications haven't caused undesired effects and that the system still meets its specified requirements.
>
> Regression testing can be performed at all testing levels and applies to both **functional and non-functional testing**.
>
> Regression testing should use **automated testing** whenever possible.

---

## Unit Testing

> **Unit**:
> - Procedural languages: Function/Procedure
> - Object-oriented languages: Member function/Class itself

> **Primary Basis**:
> - Detailed design, not code-based testing
> - Because untested code may contain errors and defects; testing based on it may fail to discover some errors

> **Main Content**:
> - Module interfaces
> - Local data structures
> - Boundary conditions
> - Independent paths
> - Error handling

---

## Integration Testing

### Key Concepts

> **Stub Module**: Replaces submodules called by the module under test; can perform minimal data operations
>
> **Driver Module**: Acts as the main program for the module under test; receives test data, passes it to the module under test, and outputs actual results

### Top-Down Integration

> Integrates modules according to system program structure, along control hierarchy from top to bottom. Modules subordinate to the main control module are integrated using depth-first or breadth-first approaches.
>
> **Advantages**: Verifies major control and decision points early; using depth-first integration can implement and verify a complete software function first
>
> **Disadvantages**: Requires significant stub development effort

### Bottom-Up Integration

> Starts from the lowest-level software modules and integrates upward layer by layer according to interface dependencies.
>
> **Advantages**: Every bottom-level module gets tested; no stub modules needed
>
> **Disadvantages**: Driver modules needed for each module; defect isolation and localization not as good as top-down

### SMOKE Testing

> Tests the system's most basic functionality, quickly verifying basic functions. Eliminates surface errors before code is formally compiled and delivered for testing, reducing later testing costs.
>
> **Advantages**: Saves testing time, prevents build failures
>
> **Disadvantages**: Relatively low coverage

---

## System Testing

> Main content includes: Functional testing, Performance testing, Stress testing, Recovery testing, Security testing, Other testing (Configuration testing, Compatibility testing, Localization testing, Documentation testing, Usability testing)

---

## Acceptance Testing

> **Timing**: Begins after system validation testing and software configuration review are complete
>
> **Personnel**: Primarily users, with developers and QA staff also participating
>
> **Content**: Users participate in designing test cases, using actual production data for testing

---

## Alpha Testing

> Testing conducted by a user in the development environment, or by internal company users in a simulated actual operating environment.

---

## Beta Testing

> Testing conducted by multiple software users in actual usage environments; these users return error information to developers.

---

## Chapter Summary

- The general V-Model defines basic testing levels: unit testing, integration testing, system testing, and acceptance testing
- Unit testing checks individual software components. Integration testing checks component coordination. System testing checks the entire system from the user's perspective. In acceptance testing, customers use contract-based acceptance testing, operational acceptance testing, and user acceptance testing to check the product
- At all testing levels, regression testing should be performed after program modifications
- There are many types of testing: functional testing, performance testing, stress testing, recovery testing, security testing, etc.
- Since software testing cannot find all defects, logarithmic Poisson execution time models can estimate when to terminate testing
- To ensure smooth testing work, testing must be effectively organized, and developers testing their own code should be avoided as much as possible
