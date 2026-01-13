---
title: "UESTC Computer Architecture Review Notes (4): Memory System"
date: 2023-06-05
updated: 2023-06-05
categories:
  - Review Notes
tags:
  - review-notes
  - system-architecture
  - memory-system
  - cache
  - virtual-memory
cover: /images/posts/电子科技大学计算机系统结构复习笔记（四）：存储系统/7fae1ba05516.png
lang_pair:
  zh-CN: "电子科技大学计算机系统结构复习笔记（四）：存储系统"
---

**Table of Contents**

Cache Fundamentals
Cache Performance and Optimization
Main Memory and Virtual Memory
Chapter Summary

---

## Key Points Overview

![](/images/posts/电子科技大学计算机系统结构复习笔记（四）：存储系统/7fae1ba05516.png)

---

## Cache Fundamentals

### Three Mapping Methods

- **Direct Mapping**: Block can only be placed in one unique cache location
- **Fully Associative**: Block can be placed anywhere in cache
- **Set Associative**: Block can be placed in any position within a set
  - If a set has n blocks, the cache is called n-way set associative

![](/images/posts/电子科技大学计算机系统结构复习笔记（四）：存储系统/0346715f4d8f.png)

### Physical Address to Cache Address Mapping

**Physical Address Format**:

![](/images/posts/电子科技大学计算机系统结构复习笔记（四）：存储系统/c0eaec8c4d1b.png)

- **Index field**: Selects block (direct mapping) or set (set associative)
  - Bits: log₂(#blocks) for direct mapping, log₂(#sets) for set associative
- **Byte Offset field**: Selects byte within block
  - Bits: log₂(block size in bytes)
- **Tag field**: Used to find matching block in cache or set
  - Bits: physical address bits - index bits - offset bits

### Cache Block Identification

- Each cache block has a **tag**: stores high-order bits of physical address
- When CPU accesses cache, **compare address with cache tag** - match means cache hit
- Each cache block also has a **valid bit**: indicates if block content is valid

### Cache Replacement Algorithms

For set associative and fully associative caches:

1. **Random**: Randomly select block to replace. Easy to implement, may replace soon-needed block
2. **LRU (Least Recently Used)**: Replace least recently accessed block. Assumes recently accessed blocks will be accessed again
3. **FIFO (First In First Out)**: Replace oldest block in set

### Cache Write Policies

**Write-Through**:
- Data written to cache and main memory simultaneously
- Cache data can be discarded anytime (main memory has latest data)
- Only needs valid bit
- Main memory always has latest data
- **Write stall**: CPU must wait for write to complete
- **Write buffer**: Small buffer holding values waiting to be written to main memory

**Write-Back**:
- Data written only to cache, not main memory
- Cannot discard cache data (may need to write back)
- Needs valid bit and dirty bit
- Lower bandwidth (multiple writes to same block = one main memory write)

**Write Miss Policies**:
- **Write Allocate**: On write miss, load block into cache, then write (used with write-back)
- **Write Around (No Write Allocate)**: On write miss, write directly to main memory (used with write-through)

### Split vs Unified Cache

- **Unified cache**: All memory accesses to single cache. Less hardware, lower performance
- **Split cache**: Separate instruction and data caches. More hardware, better performance

---

## Cache Performance and Optimization

### Cache Performance Calculation

**Miss Rate**: Percentage of cache accesses that miss

**Miss Penalty**: Time to access next level memory on cache miss (in clock cycles)

**CPU Execution Time** = (CPU clock cycles + Memory stall cycles) × Clock cycle time

Memory stall cycles = Instructions × Memory accesses per instruction × Miss rate × Miss penalty

**Average Memory Access Time** = Hit time + Miss rate × Miss penalty

### Cache Performance Optimization

17 optimization techniques in 4 categories:

**1. Reduce Miss Rate (4 methods)**:
- Increase block size
- Increase cache capacity
- Higher associativity
- Compiler optimization

**2. Reduce Miss Penalty (5 methods)**:
- Multi-level caches
- Critical word first
- Read miss priority over write miss
- Merging write buffer
- Victim cache

**3. Reduce Miss Penalty/Rate via Parallelism (3 methods)**:
- Non-blocking caches
- Hardware prefetching
- Compiler-controlled prefetching

**4. Reduce Hit Time (5 methods)**:
- Small and simple caches
- Avoid address translation
- Pipelined cache access
- Way prediction
- Trace caches

### Miss Causes (3 C's)

- **Compulsory misses**: First access to a block (cold start misses)
- **Capacity misses**: Cache cannot hold all blocks needed by program
- **Conflict misses**: Too many blocks map to same set (collision misses)

**2:1 Cache Rule**: Direct-mapped cache of size N has similar miss rate to 2-way set associative cache of size N/2

### Reducing Miss Rate Methods

**Method 1: Larger Block Size**
- Reduces compulsory misses (spatial locality)
- May increase miss penalty and conflict misses
- U-shaped curve for miss rate vs block size

**Method 2: Larger Cache Capacity**
- Reduces capacity and conflict misses
- Drawbacks: longer hit time, higher cost

**Method 3: Higher Associativity**
- Reduces conflict misses
- 8-way associative ≈ fully associative for conflict miss reduction

**Method 4: Compiler Optimization**
- Instruction reordering
- Data optimizations: array merging, loop interchange, loop fusion, blocking

### Reducing Miss Penalty Methods

**Method 1: Multi-Level Caches**
- L1: Fast enough to match CPU clock, small enough for on-chip
- L2: Large enough to capture accesses that would go to main memory
- L1 miss penalty = L2 average access time
- Global miss rate L2 = Local miss rate L1 × Local miss rate L2

**Method 2: Critical Word First**
- Request missed word first, send to CPU immediately
- Let CPU continue while filling rest of block

**Method 3: Read Miss Priority**
- For write-through: Check write buffer before reading main memory
- For write-back: Copy dirty block to write buffer, read first, then write

**Method 4: Merging Write Buffer**
- Combine multiple writes to same block into single write

**Method 5: Victim Cache**
- Small fully associative cache holding recently replaced blocks
- Check victim cache before accessing next level

### Reducing Hit Time Methods

**Method 1: Small and Simple Caches**
- Less hardware = shorter critical path
- Direct mapping faster than set associative

**Method 2: Avoid Address Translation**
- TLB (Translation Lookaside Buffer): Cache for page table entries
- Virtual indexed, physically tagged: Parallel address translation and cache access
- Virtual cache with virtual tag: No translation needed on hit

**Method 3: Pipelined Cache Access**
- Split write into tag check and data write stages

**Method 4: Way Prediction**
- Predict which way/block will be accessed next
- Reduces hit time and power consumption

**Method 5: Trace Cache**
- Blocks contain dynamic instruction sequences (including branches)
- Not limited to static cache blocks

---

## Main Memory and Virtual Memory

### Main Memory Performance Optimization

Main memory is the next level below cache, typically DRAM (caches use SRAM).

Performance metrics:
- **Latency**: Harder to reduce (important for cache)
- **Bandwidth**: Easier to improve with new organization (important for I/O)

**Improving Bandwidth**:

**Method 1: Wider Memory**
- Double or quadruple cache-to-memory bandwidth
- Miss penalty decreases, bandwidth increases
- Cost: additional hardware

**Method 2: Interleaved Memory**
- Multiple memory banks accessed in parallel
- Reduces effective access time

### Virtual Memory

**Advantages**:
- Main memory acts as cache for disk
- Provides illusion of larger, contiguous memory
- Program relocation by pages or segments
- Protection in multiprogramming

**Key Concepts**:
- Virtual address: Address used by programmer
- Physical address: Actual memory address
- Page: Fixed-size block (paged virtual memory)
- Segment: Variable-size block (segmented virtual memory)

**Virtual Memory Policies**:
1. **Mapping rule**: Blocks can be placed anywhere (fully associative)
2. **Lookup method**: Page table maps virtual to physical addresses
3. **Replacement**: LRU (Least Recently Used)
4. **Write policy**: Write-back (disk access too expensive for write-through)

### Fast Address Translation

**Problem**: Page table in main memory requires 2 memory accesses per data access

**Solution**: TLB (Translation Lookaside Buffer)
- Special cache for recently used page table entries
- TLB access time comparable to cache access time
- Typically 128-256 entries, fully associative or small n-way set associative

### Virtual Memory and Cache Integration

![](/images/posts/电子科技大学计算机系统结构复习笔记（四）：存储系统/0fa790287690.png)

**Address Translation Process**:
1. Virtual address split into virtual page number and page offset
2. TLB lookup using virtual page number
3. If TLB hit, get physical page number
4. Concatenate physical page number with page offset to form physical address
5. Use physical address to access cache

If L1 cache misses, physical address continues to L2 cache access.

---

## Chapter Summary

**Cache Memory**:
- Three mapping methods (fully associative, direct mapping, set associative)
- Physical address to cache address mapping calculation
- Mapping rules, block identification, replacement algorithms, write policies
- Performance calculation and optimization methods

**Performance Optimization**:
- Reduce miss rate: 4 methods
- Reduce miss penalty: 5 methods
- Reduce miss rate/penalty via parallelism: 3 methods
- Reduce hit time: 5 methods

**Main Memory**:
- Increase bandwidth: wider memory, interleaved memory

**Virtual Memory**:
- Paged virtual memory
- TLB principles and structure
- Virtual address to physical address translation with virtual-indexed L1 cache
