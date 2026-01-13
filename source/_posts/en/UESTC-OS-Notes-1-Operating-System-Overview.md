---
title: "UESTC Operating System Review Notes (1): Operating System Overview"
date: 2023-02-12
updated: 2023-02-12
categories:
  - Review Notes
tags:
  - system-architecture
  - operating-system
  - review-notes
  - study-materials
cover: /images/posts/电子科技大学操作系统期末复习笔记（一）：操作系统概述/5e52ba583b39.png
lang_pair:
  zh-CN: "电子科技大学操作系统期末复习笔记（一）：操作系统概述"
---

**Table of Contents**

Preface
Operating System Overview
Goals and Functions
Definition
Goals
Functions
History of Operating Systems
Single-User Systems
Simple Batch Processing Systems
Multiprogramming Batch Systems
Time-Sharing Systems
Personal Computers → Distributed Systems → Internet Era → Mobile Computing Era → ...
Real-Time Systems
Basic Characteristics
Concurrency
Sharing
Virtualization
Non-determinism
System Architecture
Unstructured Operating Systems
Modular System Structure
Layered System Structure
Operating System Security
Memory
Information Protection and Security

---

## Preface

This review note is based on the UESTC Computer Operating Systems Teaching Syllabus (2022), divided into five major chapters:

> - **CM1**: Operating System Concepts - Basic functions, development history and trends, mainstream architectures, common OS characteristics, security mechanisms.
> - **CM2**: Process Management - Process concepts, thread concepts, process lifecycle, scheduling algorithms, synchronization and mutual exclusion, inter-process communication, and deadlocks.
> - **CM3**: Memory Management - Memory space concepts, contiguous allocation, discrete allocation (paging, segmentation, segment-page management), virtual memory management, and page replacement algorithms.
> - **CM4**: Device Management - I/O system structure, buffer management, disk structure, and disk scheduling algorithms.
> - **CM5**: File Management - File system functions, logical structure, physical structure, directories, file sharing, and file system consistency.

This section focuses on CM1:

> Chapter 1: Computer Operating System Introduction (6 hours)
> 
> Main content: Batch processing technology, multiprogramming technology, OS concepts, OS development, basic OS types, fundamental concepts and characteristics, OS features, OS services, functional modules, system architecture, system calls, command interface, program interface, virtual machines, client/server, etc.
> 
> Requirements:
> - Memorize: OS architecture, development history and main types
> - Understand: Basic concepts, goals and functions, user interface and system call significance
> - Apply: Batch processing and multiprogramming technology
> - Analyze: Basic OS types, characteristics, and functional modules

---

## Operating System Overview

---

### Goals and Functions

#### Definition

> An operating system is a collection of programs that control and manage computer hardware and software resources, reasonably schedule various jobs, and facilitate user interaction.

![](/images/posts/电子科技大学操作系统期末复习笔记（一）：操作系统概述/5e52ba583b39.png)

#### Goals

> - **Convenience**: Make computers easier to use
> - **Efficiency**: Use computer resources more effectively
> - **Extensibility**: Enable development, testing, and introduction of new features
> - **Openness**: Support application portability and interoperability

#### Functions

> - **Processor Management**: Allocate processors to processes (threads) according to certain algorithms, with effective management and control.
> - **Memory Management**: Provide runtime environment for multiprogramming, facilitate usage, improve memory utilization, and logically extend memory.
> - **Device Management**: Complete user I/O requests, allocate required I/O devices, improve CPU and I/O device utilization, increase I/O speed, and facilitate device usage.
> - **File Management**: Manage user and system files for convenient use while ensuring file security.
> - **User Interface**: Command set provided by OS for user interaction.

---

### History of Operating Systems

#### Single-User Systems

> **Processing Mechanism**:
> - Manual operation, user has exclusive access to all resources
> - Offline I/O (I/O with peripheral computers) → evolved into Simple Batch Processing Systems

#### Simple Batch Processing Systems

> **Processing Mechanism**: Automatic processing of a batch of jobs; memory holds only one job at a time; upon completion/error → automatically loads another job (automatic job sequencing)
> 
> **Main Characteristics**: Automation, Sequential processing, Single-program operation
> 
> **Advantages**: Reduced manual operation, solved automatic job sequencing problem
> 
> **Disadvantages**: Long average turnaround time (processor runs only one program at a time, waits during I/O operations, low utilization), no interactive capability → evolved into Multiprogramming Batch Systems

#### Multiprogramming Batch Systems

> **Improvements over Single Batch Processing**:
> - Multiple jobs reside in memory simultaneously
> - When one job needs I/O or completes/errors, processor switches to another job (automatic scheduling)
> - Multiple programs execute concurrently
> - **Job scheduler** handles job scheduling

> **Main Characteristics**: Multiprogramming, Non-sequential execution, Scheduling
> 
> **Advantages**: Improved resource utilization and throughput
> 
> **Disadvantages**: No interactive capability → evolved into Time-Sharing Systems

![](/images/posts/电子科技大学操作系统期末复习笔记（一）：操作系统概述/b691137bc495.png)

#### Time-Sharing Systems

> **Processing Mechanism**: Clock interrupts with time slices
> 
> **Origin**: Human-computer interaction, mainframe sharing, convenient access
> 
> **Main Characteristics**: Multiplexing, Independence, Timeliness, Interactivity

**[Comparison with Multiprogramming Batch Systems]**

The main difference lies in user interaction - users can input commands at terminals to control the computer. The focus also differs: multiprogramming batch systems emphasize processor utilization, while time-sharing systems prioritize job efficiency.

#### Personal Computers → Distributed Systems → Internet Era → Mobile Computing Era → ...

> For general understanding only, details omitted.

#### Real-Time Systems

> **Definition**:
> Systems that can respond to external event requests in real-time (promptly), start or complete event processing within specified time limits, and coordinate all real-time tasks to run consistently.
> 
> **Application Areas**:
> Aerospace, military, industrial control, real-time control systems, real-time information systems
> 
> **Characteristics**:
> Multiplexing, Independence, Interactivity, Reliability, Timeliness

---

### Basic Characteristics of Operating Systems

> - Concurrency (most important characteristic)
> - Sharing
> - Virtualization
> - Non-determinism

#### Concurrency

**Parallelism**: Two or more events occur at the same instant (single-processor systems)

**Concurrency**: Two or more events occur within the same time interval (multi-processor systems)

#### Sharing

System resources can be used jointly by multiple concurrently executing processes in memory.

> - **Mutual Exclusion Sharing**:
>   - Critical resources are resources that only one process can access at a time
>   - Critical resources can be provided to multiple processes, but only one process can use them at a time
> - **Simultaneous Access**:
>   - Macroscopically, resource sharing means multiple tasks can use system hardware and software resources simultaneously
>   - Microscopically, resource sharing means multiple tasks can alternately and mutually exclusively use certain resources (e.g., disk)

#### Virtualization

Abstracting physical entities into logical products (time-division [virtual processors/virtual devices], space-division [virtual memory]...)

#### Non-determinism

Same program, same input, but output results may differ.

> - **Asynchrony**: Processes execute asynchronously; running speed and results are unpredictable
> - **Random functions**: random(); gettimeofday()...

---

### Operating System Architecture

> Four generations of OS evolution:
> - First generation: Unstructured operating systems
> - Second generation: Modular structure
> - Third generation: Layered structure
> - Fourth generation: Engineering + Software Development → Software Engineering

> Common OS overall structure:
> 
> ![](/images/posts/电子科技大学操作系统期末复习笔记（一）：操作系统概述/2dc959ef5bab.png)

#### Unstructured Operating Systems

The OS is a collection of numerous procedures that can call each other. There is no internal structure - it's both massive and chaotic, hence also called monolithic system structure.

Programs written this way have many errors, and debugging and maintenance costs are very high.

#### Modular System Structure

The OS contains several modules, each implementing a set of basic concepts and related attributes.

Modules can reference concepts and attributes from any other module.

- **Advantages**:
  - Improved correctness, understandability, and maintainability of OS design
  - Enhanced adaptability
  - Accelerated development process
- **Disadvantages**:
  - Difficult to precisely describe module division and interface specifications
  - When dividing modules by function, shared and exclusive resources are not distinguished

#### Layered System Structure

The OS contains several layers, each implementing a set of basic concepts and related attributes.

Each layer's implementation depends only on concepts and attributes provided by its immediate lower layer, hiding the existence of lower layers from upper layers.

---

### Operating System Security

#### Memory

**Virtual Storage**:
- Access storage logically without considering available physical memory space
- Meet the need for multiple jobs to reside in memory simultaneously
- Swap-in/swap-out mechanism
- Paging mechanism: Different process sizes cause mismatch during whole-process swapping
- Partial job residence: Hardware detects page faults and arranges loading

**Paging Mechanism**:
- Processes consist of several fixed-size blocks, all the same size
- Virtual address consists of page number and intra-page offset
- Each page of a process can be placed anywhere in memory
- Provides dynamic mapping between virtual addresses and physical addresses in memory

#### Information Protection and Security

- **Availability**: Protect system from interruption
- **Confidentiality**: Ensure users cannot read unauthorized data
- **Data Integrity**: Protect data from unauthorized modification
- **Authentication**: Involves correct user identity verification and message/data legitimacy
