---
title: "UESTC Computer Architecture Review Notes (3): Pipeline Technology"
date: 2023-06-05
updated: 2023-06-05
categories:
  - Review Notes
tags:
  - pipeline
  - review-notes
  - system-architecture
  - data-hazard
  - timing-diagram
cover: /images/posts/电子科技大学计算机系统结构复习笔记（三）：流水线技术/16b1d84d8492.png
lang_pair:
  zh-CN: "电子科技大学计算机系统结构复习笔记（三）：流水线技术"
---

**Table of Contents**

Pipeline Definition
Pipeline Hazards
Pipeline Processor Instruction System
Pipeline Exceptions and Floating-Point Pipeline
Chapter Summary

---

## Key Points Overview

![](/images/posts/电子科技大学计算机系统结构复习笔记（三）：流水线技术/16b1d84d8492.png)

---

## Pipeline Definition

### Basic Concept

A pipeline is a technique that exploits parallelism among instruction operations to achieve overlapped execution of multiple instructions.

### Pipeline Classification

- **By stage uniformity**:
  - Uniform pipeline
  - Non-uniform pipeline
- **By data type**:
  - Scalar pipeline processor
  - Vector pipeline processor
- **By scale**:
  - Operation pipeline (segmented ALU)
  - Instruction pipeline (pipelined instruction processing)
  - Macro pipeline (two or more processors in pipeline)
- **By function**:
  - Single-function pipeline
  - Multi-function pipeline
- **By operation mode**:
  - Static pipeline
  - Dynamic pipeline
- **By connection**:
  - Linear pipeline (no feedback loop)
    - Synchronous pipeline
    - Asynchronous pipeline
  - Non-linear pipeline (with feedback loop)
- **By control mode**:
  - In-order pipeline
  - Out-of-order pipeline

### Pipeline Characteristics

1. Pipelines work best with **continuous tasks** - only continuous tasks can fully utilize pipeline efficiency
2. Pipelines reduce program execution time through parallel operation of multiple functional units by **decomposing into sub-processes**
3. Each functional unit must have a **buffer register (latch)** to smooth timing differences
4. **Stage times should be equal** to **avoid waiting**
5. Pipelines require "fill time" and "drain time"

### Pipeline Timing Diagram

The timing diagram describes pipeline operation from both time and space perspectives. The horizontal axis represents time, and the vertical axis represents pipeline stages.

![](/images/posts/电子科技大学计算机系统结构复习笔记（三）：流水线技术/96e010140fb7.png)

### Pipeline Performance Analysis

**Throughput**: Number of tasks completed or results output per unit time

![](/images/posts/电子科技大学计算机系统结构复习笔记（三）：流水线技术/1f619ca0d1b0.png)

Where n = number of tasks, Tk = time to complete n tasks

For uniform pipeline: ![](/images/posts/电子科技大学计算机系统结构复习笔记（三）：流水线技术/59f000e41822.png)

When n >> k: TP ≈ TPmax = ![](/images/posts/电子科技大学计算机系统结构复习笔记（三）：流水线技术/7f9da5fd16da.png)

The longest stage is called the **bottleneck stage**. Solutions:
1. Subdivide bottleneck stage to match other stages
2. Replicate bottleneck stage

**Speedup**: Ratio of sequential execution time to pipeline execution time

S = Ts/Tk

Maximum speedup for equal-stage pipeline is k (number of stages)

**Efficiency**: Pipeline utilization rate - ratio of task-occupied time-space area to total time-space area

![](/images/posts/电子科技大学计算机系统结构复习笔记（三）：流水线技术/e39b93339d76.png)

Maximum efficiency approaches 1 as n → ∞

### Classic 5-Stage RISC Pipeline

RISC characteristics: All operands from registers, results to registers; 32/64-bit registers; only load/store access memory; few instructions, fixed length; MIPS is the default RISC architecture

**Five stages**: IF, ID, EX, MEM, WB

- **IF (Fetch)**: Access instruction memory using PC, fetch instruction, PC+4→NPC
- **ID (Decode)**: Decode instruction, read registers, sign-extend displacement if needed
- **EX (Execute)**: Load/Store: calculate effective address; ALU: execute operation; Branch: test condition, calculate target address
- **MEM (Memory)**: Load: read data from memory; Store: write data to memory
- **WB (Write Back)**: Load or ALU: write result to register file

![](/images/posts/电子科技大学计算机系统结构复习笔记（三）：流水线技术/fd833d45e213.png)

**Pipeline advantages**:
- CPI reduced to 1 (one instruction issued/completed per cycle)
- Each stage executes part of an instruction simultaneously

---

## Pipeline Hazards

### Hazard Classification

- **Structural hazards**: Hardware resource conflicts during overlapped execution
- **Data hazards**: Instruction depends on result from previous instruction not yet available
- **Control hazards**: Branch condition and target PC not available when needed

### Stalling the Pipeline

- Simplest solution to hazards
- Stall means pausing pipeline for one or more cycles
- When an instruction stalls, all following instructions stall; preceding instructions continue
- Pipeline stall also called "bubble"

### Structural Hazards

**Cause**: Hardware resource conflicts

**Solutions**: Add hardware resources, fully pipeline functional units, or stall pipeline

### Data Hazards

**Cause**: Instruction depends on result not yet computed or stored

**Solutions**:
- Register file: WB writes first half, ID reads second half of cycle
- Forwarding paths (bypass results directly to pipeline stages)
- Software scheduling
- Otherwise: stall (hardware interlock) or insert NOP instructions

### Control Hazards

**Cause**: Branch condition and target address not available in time for IF stage

Control hazards cause greater performance loss than data hazards in MIPS pipeline.

**Solutions**:
- Compute target address and condition early
- Freeze or flush pipeline
- Predict branch not taken
- Predict branch taken
- Delayed branch

**Branch delay**: In MIPS, exactly 1 cycle to compute correct branch address. The instruction in the delay slot always executes regardless of branch outcome.

**Summary**: Control hazards cause greater performance loss than data hazards. Deeper pipelines have higher branch penalties. Higher CPI processors pay higher branch costs.

---

## Pipeline Processor Instruction System

### Pipeline Instruction Format

| Bits 31-26 | 25-21 | 20-16 | 15-5 | 4-0 | Instruction | Meaning |
|------------|-------|-------|------|-----|-------------|---------|
| 00 0000 | rd | rs1 | | rs2 | and rd,rs1,rs2 | Register AND Register |
| 00 0001 | rd | rs1 | imme | | andi rd,rs1,imme | Register AND Immediate |
| 00 0100 | rd | rs1 | | rs2 | add rd,rs1,rs2 | Register ADD Register |
| 00 0101 | rd | rs1 | imme | | addi rd,rs1,imme | Register ADD Immediate |
| 00 1000 | rd | rs1 | imme | | load rd,imme(rs1) | Load from memory |
| 00 1001 | rd | rs1 | imme | | store rd,imme(rs1) | Store to memory |
| 00 1010 | disp | | | | bne disp | Branch if not zero |
| 00 1011 | disp | | | | beq disp | Branch if zero |
| 00 1100 | disp | | | | branch disp | Unconditional branch |

### Data Forwarding and Load Forwarding

**Data Forwarding**:
- Data hazard essence: An instruction needs a result not yet written to register file, but already computed by ALU
- Solution: Add multiplexers at ALU inputs to forward results directly from pipeline registers R and C
- This is called internal forwarding or dedicated data path

**Load Forwarding**:
- ALU instructions have results available after EX stage
- Load instructions have results available only after MEM stage
- Even with forwarding, cannot eliminate first bubble after load
- Solutions:
  - Software: Compiler inserts NOPs or schedules independent instructions
  - Hardware: Detect load hazard, stall one cycle, use forwarding for second bubble

### Hazard Summary

![](/images/posts/电子科技大学计算机系统结构复习笔记（三）：流水线技术/31c92062d2b1.png)

---

## Pipeline Exceptions and Floating-Point Pipeline

### Pipeline Exceptions

Exceptions are abnormal events that interrupt normal program execution, such as illegal operations, divide by zero, overflow, or privileged instruction violations.

### Exception Causes

- I/O device requests
- User OS service requests
- Breakpoints
- Integer arithmetic overflow
- Floating-point arithmetic exceptions
- Page faults
- Misaligned memory access
- Memory protection violations
- Hardware failures
- Undefined instructions

### Possible Exception Stages

![](/images/posts/电子科技大学计算机系统结构复习笔记（三）：流水线技术/937513e93749.png)

### Stop and Restart Execution (MIPS)

1. Force a trap instruction into pipeline
2. Disable all writes for exception instruction and following instructions
3. When trap executes, wake OS, save exception instruction PC
4. OS handles exception, then re-execute faulting instruction

### Precise vs Imprecise Exceptions

**Precise exception**: Pipeline can stop so that:
- All instructions before exception complete normally
- Exception instruction and following instructions haven't changed machine state

**Imprecise exception**: When different instructions take different cycles, later instructions may complete before earlier ones that cause exceptions.

### Extended Floating-Point Pipeline

**Solutions for FP operations**:
- Complete FP operations in 1-2 cycles (slow clock, lots of logic)
- Allow longer latencies (repeat EX stage, multiple FP units)

**Two concepts**:
- **Latency**: Cycles to wait before next instruction can use result
- **Initiation interval**: Cycles between issuing instructions to same unit

### FP Pipeline Write Conflicts

Solutions:
- Add write ports (not adopted)
- Detect and insert stalls to serialize writes (detection in ID stage)

### FP Pipeline Data Dependencies

- **RAW (Read After Write)**: True dependence - B reads before A writes
- **WAW (Write After Write)**: Output dependence - B writes before A writes
- **WAR (Write After Read)**: Anti-dependence - B writes before A reads

### Exception Handling

1. **Ignore** (imprecise exceptions): Fast but hard to debug
2. **Buffer results, delay commit**: Ensure no state change before instruction completes
   - **History file**: Buffer original values of recently modified registers
   - **Future file**: Buffer new values, update main registers only after confirmation
3. **Save enough information** for trap handler to create precise sequence (SPARC)
4. **Confirm no exceptions** before allowing instructions to continue

---

## Chapter Summary

- Pipeline concepts and definitions
- Pipeline hazards and handling methods
- Pipeline classification, timing diagrams, and performance analysis
- Pipeline model machine instruction system and hazard-free design
- Pipeline hazard handling in model machine
- Precise and imprecise exceptions
- Floating-point pipeline structure and hazard handling
