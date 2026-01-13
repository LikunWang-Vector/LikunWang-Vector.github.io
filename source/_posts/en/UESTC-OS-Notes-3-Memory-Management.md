---
title: "UESTC Operating System Review Notes (3): Memory Management"
date: 2023-02-15
updated: 2023-02-15
categories:
  - Review Notes
tags:
  - operating-system
  - algorithm
  - memory-management
  - paging-segmentation
  - virtual-memory
cover: /images/posts/电子科技大学操作系统期末复习笔记（三）：存储器管理/0751d072f211.png
lang_pair:
  zh-CN: "电子科技大学操作系统期末复习笔记（三）：存储器管理"
---

**Table of Contents**

Preface
Memory Management Overview
Storage System Structure
Program Birth Process
Address Spaces
Address Mapping
Program Linking Methods
Program Loading Methods
Contiguous Allocation
Single Contiguous Allocation
Partition Management
Fixed Partition Allocation
Dynamic Partition Allocation
Partition Allocation Algorithms
Overlay and Swapping
Discrete Allocation
Paged Storage Management
Address Translation
Page Tables
Two-Level and Multi-Level Page Tables
Inverted Page Tables
Segmented Storage Management
Segment-Page Storage Management
Virtual Memory
Locality Principle
Demand Paging
Page Replacement Algorithms

---

## Preface

This review note focuses on CM3: Memory Management - memory space concepts, contiguous allocation, discrete allocation (paging, segmentation, segment-page management), virtual memory management, and page replacement algorithms.

---

## Memory Management Overview

### Storage Management

> Definition:
> - Primarily refers to main memory management
> - In multiprogramming environments, multiple jobs share memory resources
> - Memory management is a crucial OS component; efficient memory utilization significantly affects computer performance

> Main Objectives:
> - Improve resource utilization, satisfy multiple users' memory requirements
> - Facilitate user memory usage without considering specific memory locations

> Main Functions:
> - Allocation and deallocation
> - Sharing
> - Protection
> - Expansion

### Storage System Structure

![](/images/posts/电子科技大学操作系统期末复习笔记（三）：存储器管理/0751d072f211.png)

### Program Birth Process

> From source code → Program executable in memory:
> - **Compilation**: Compiler converts user source code into object modules
> - **Linking**: Linker combines object modules with required library functions into a complete load module
> - **Loading**: Loader loads the load module into memory

### Address Spaces

> **Name Space**: Variable names in code
> - Programs written in assembly or high-level languages use symbolic names to access memory units
>
> **Logical Space**: Addresses assigned during assembly
> - After compilation, each object program is addressed sequentially starting from 0
> - The address space occupied by the generated object program is called logical address space
>
> **Physical Space (Memory Space)**: Actual addresses when loaded into memory
> - Memory consists of storage units, each with a unique number called memory address (or physical address)

### Address Mapping

> Converting logical addresses to physical addresses that the machine can directly access at runtime.
> - When a program is loaded, the OS allocates specific memory space
> - Since logical addresses may not match physical addresses, address translation is needed
> - This is called **relocation**

---

## Program Linking Methods

### Static Linking
> - During compilation/linking phase (before program execution), all object modules and required library functions are linked into a complete load module
> - Advantages: Simple loading process
> - Disadvantages: Inflexible, not suitable for multiprogramming systems

### Load-Time Dynamic Linking
> - Object modules are linked while being loaded into memory
> - Advantages: Modules stored separately, easy to modify and update; facilitates module sharing

### Runtime Dynamic Linking
> - When a program needs an object module during execution, OS finds and loads it, linking it to the calling module
> - Advantages: Faster loading, saves memory space, enables sharing

---

## Program Loading Methods

### Absolute Loading
> - Fixed address relocation; compiler knows process's memory residence address
> - Program address space and memory address space correspond one-to-one
> - If starting address changes, code must be recompiled

### Static Relocation
> - When loading, the loader modifies addresses in the object program
> - One-time conversion from logical to physical addresses
> - Disadvantages: Program cannot move after relocation; must be stored contiguously

### Dynamic Relocation
> - Logical addresses not modified when loading; converted to physical addresses in real-time before memory access
> - Advantages: Programs can be stored non-contiguously, can be moved; facilitates sharing
> - Disadvantages: Requires hardware support; more complex algorithms
> - **Mainstream method**

---

## Contiguous Allocation

### Single Contiguous Allocation

> Basic Idea:
> - Memory divided into system area and user area
> - User area allocated to one process
>
> Suitable for: Single-user, single-task OS
>
> Advantages: Easy to manage
>
> Disadvantages: Memory waste for small programs; entire program must be loaded

### Partition Management

> Basic Principle:
> - Divide memory into equal or unequal partitions
> - Each application process occupies one partition; OS occupies one partition
>
> Problems:
> - Internal fragmentation: Unused space within occupied partitions
> - External fragmentation: Difficult-to-use free partitions between occupied partitions

#### Fixed Partition Allocation

> - Divide memory into equal or unequal partitions
> - Partition division determined by system administrator or OS; unchanged during execution
> - Supports multiple concurrent programs
> - Problems: Difficult to share partitions; fragmentation

#### Dynamic Partition Allocation

> Allocate according to initial requirements when loading, or change partition size during execution through system calls.
>
> Advantages: No internal fragmentation
>
> Disadvantages: External fragmentation

### Partition Allocation Algorithms

**First Fit Algorithm**
> - Sort partitions by address, search from beginning, find first partition meeting requirements
> - Tries to use low-address free areas, preserving larger free areas at high addresses
> - Disadvantages: Many searches when front areas are fragmented

**Next Fit Algorithm (Circular First Fit)**
> - Search from last allocation position (wrap around at end)
> - Better time performance, but large free partitions not easily preserved

**Best Fit Algorithm**
> - Select smallest partition that meets requirements
> - Free areas organized from small to large
> - Advantages: Large free partitions preserved
> - Disadvantages: Must search entire list for adjacent free areas when releasing

**Worst Fit Algorithm**
> - Select largest free area, split if necessary
> - Free areas organized from large to small
> - Advantages: Only one search needed for allocation
> - Disadvantages: Remaining partitions become increasingly small

**Buddy System**
> - Organize pages into blocks (powers of 2)
> - Split in half when allocating until block can accommodate request
> - Merge when releasing: same size blocks
> - Fast but low utilization

### Fragmentation Problem: Compaction

> - After allocation/deallocation, many small free blocks exist
> - Each too small to satisfy requests, but total would suffice
> - Solution: Compaction - move programs in memory to merge small free areas
> - High system overhead

---

## Discrete Allocation

### Paged Storage Management

#### Basic Concepts

> User Space Division:
> - User program divided into equal-sized parts called pages (virtual pages)
> - Page numbers start from 0; page-internal addresses relative to 0
> - Division done automatically by system, transparent to user

> Memory Space Division:
> - Divided into equal-sized regions called frames (physical pages, page frames)
> - Numbered starting from 0

> Memory Allocation:
> - Allocated in page units
> - Internal fragmentation: last page's internal fragmentation
> - Logically adjacent pages may not be physically adjacent

#### Paged Logical Address Structure

Page-internal address: Length determined by page size
Page number: High-order bits after page-internal address

Example: 32-bit logical address, 4KB page size
- Low 12 bits (2^12=4KB): page-internal address w
- High 20 bits: page number p

#### Address Translation

> Page Table:
> - Maps logical page numbers → physical block numbers
> - Each process has a page table; information stored in PCB
> - Page table resides in memory, part of process **context** information

**Key Calculation Method:**
- Calculate page number: logical address / page frame size
- Page number → physical block number (via page table)
- Page offset: logical address % page frame size
- Physical address: physical block number × page frame size + page offset

#### Translation Lookaside Buffer (TLB)

> - High-speed cache storing current job's most frequently used page numbers and corresponding physical block numbers
> - Also called associative memory
> - Reduces memory access from 2 to approximately 1 (with high hit rate)

#### Two-Level and Multi-Level Page Tables

> For large address spaces, page tables themselves become large
> - Two-level page tables: Page directory + Page tables
> - Multi-level page tables: Further division for very large address spaces
> - Increases total space but saves memory through on-demand loading

#### Inverted Page Tables

> - Physical block → Logical block mapping
> - Each memory block associated with: use bit, occupier (page number), process ID
> - Advantages: Small storage overhead; page table size independent of logical space; one table for entire system
> - Disadvantages: Reverse association; requires hash algorithm for forward lookup

### Segmented Storage Management

#### Basic Concepts

> User Space Division:
> - Divided according to program's logical relationships into segments (code segment, data segment, etc.)
> - Each segment has a segment name and segment number
> - Segment numbers start from 0; segment-internal addresses start from 0
> - Segment-internal addresses are contiguous

> Memory Space Division:
> - Dynamically divided into regions of varying lengths called physical segments

> Memory Allocation:
> - Allocated in segment units
> - Each segment occupies contiguous space in memory
> - Segments can be non-contiguous

> Advantages:
> - Segmentation visible to programmers; convenient for modular programming
> - Facilitates protection and sharing

### Comparison: Paging vs Segmentation

> - Paging for system management needs; segmentation for user application needs
> - Instructions/operands may cross page boundaries but not segment boundaries
> - Page size fixed by system; segment size usually variable
> - Logical address: Paging is one-dimensional; segmentation is two-dimensional
> - Segments usually larger than pages; segment tables shorter, faster lookup
> - Segmentation has more severe fragmentation than paging

### Segment-Page Storage Management

> Basic Idea:
> - User programs divided by segmentation
> - Memory managed by paging
> - Allocation in page units
>
> Address Mapping:
> - For users: still two-dimensional addressing
> - For system: three-dimensional addressing (segment number, page number, page offset)

---

## Virtual Memory

### Basic Concepts

> Conventional Storage Problems:
> - One-time loading, residence
> - Sometimes entire program doesn't need to be in memory:
>   - Exception branches in programs
>   - Arrays often allocated more memory than needed
>   - Some program options rarely used

> Virtual Memory Goals:
> - Allow execution of programs only partially in memory
> - Programs not limited by physical memory; users write for large virtual address space
> - Improve concurrency and CPU utilization

### Locality Principle

> During execution, within a short period, instruction addresses and operand addresses are confined to certain regions.
>
> **Temporal Locality**: If an instruction executes, it may execute again soon; if data is accessed, it may be accessed again soon
>
> **Spatial Locality**: If a storage unit is used, nearby units may be used soon

### Virtual Memory Implementation

> - Logical capacity determined by sum of memory and external storage capacity
> - Running speed close to memory speed
> - Cost close to external storage
>
> Principle:
> - When loading, only load currently needed parts
> - During execution, if needed instruction/data not in memory (page fault), OS loads corresponding page/segment
> - OS swaps out temporarily unused pages/segments to external storage

### Demand Paging

> Page Table Extensions:
> - P: Present bit - whether page is in memory
> - A: Access bit - whether accessed
> - M: Modified bit - whether changed since loading
> - External storage address

### Page Replacement Algorithms

**Optimal Algorithm (OPT)**
> - Replace page whose next access is furthest in future
> - Lowest page fault rate; no Belady anomaly
> - Requires knowing future access sequence → impossible to implement
> - Used only as benchmark for testing other algorithms

**First In First Out (FIFO)**
> - Replace page that has been in memory longest
> - Simple implementation but relatively poor performance
> - Belady anomaly: Page fault rate may increase with more allocated frames

**Least Recently Used (LRU)**
> - Replace page whose last use is furthest in past
> - Performance close to OPT
> - Implementation: Counters or stack

**Clock Algorithm**
> - Circular queue of pages with use bits
> - On page fault, scan for page with use bit = 0
> - Clear use bits while scanning
> - Replace first page found with use bit = 0

**Enhanced Clock Algorithm**
> - Add modified bit M
> - Four page types by (A, M):
>   - (0, 0): Not accessed, not modified - best candidate
>   - (0, 1): Not accessed, modified - must write back if replaced
>   - (1, 0): Accessed, not modified - may be accessed again
>   - (1, 1): Accessed and modified - likely to be accessed again

### System Thrashing

> - Pages frequently swapped in and out
> - Page fault rate increases dramatically; effective memory access time increases; throughput drops
> - System can barely complete any tasks
>
> Cause: Low CPU utilization → Scheduler increases multiprogramming degree → New processes start → Memory insufficient → Page faults → I/O busy, CPU idle
>
> Prevention:
> - Local replacement strategy
> - Suspend some processes
> - Use working set and page fault frequency strategies

### Working Set

> - Set of pages accessed by a process during a certain time period
> - Working set W(t, Δt): Pages accessed in interval (t-Δt, t]
> - Time window Δt:
>   - Too small: Cannot contain entire locality
>   - Too large: Contains all pages encountered during execution
>
> Thrashing Prevention:
> - OS monitors each process's working set
> - Allocate memory for new pages
> - Evict pages not in working set
> - If total working sets exceed available memory, suspend a process

---

## Summary

Memory management covers understanding concepts and proficiently applying various algorithms for calculations, such as **relocation, address translation, calculating page table storage space, and page replacement algorithms**.
