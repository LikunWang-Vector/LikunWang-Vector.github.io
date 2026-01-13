---
title: "UESTC Computer Architecture Review Notes (2): Instruction Set"
date: 2023-06-03
updated: 2023-06-03
categories:
  - Review Notes
tags:
  - review-notes
  - study-materials
  - system-architecture
  - isa
  - instruction-set
cover: /images/posts/电子科技大学计算机系统结构复习笔记（二）：指令系统/b11fc38cc0a7.png
lang_pair:
  zh-CN: "电子科技大学计算机系统结构复习笔记（二）：指令系统"
---

**Table of Contents**

ISA Classification
Memory Addressing
Addressing Modes
Operand Types and Instruction Operations
Instruction Encoding
MIPS Architecture

---

## Key Points Overview

![](/images/posts/电子科技大学计算机系统结构复习笔记（二）：指令系统/b11fc38cc0a7.png)

---

## Instruction Set Architecture (ISA) Classification

### Classification Basis

Internal data storage structure of the processor.

### Storage Structures

Stack, Accumulator, General-Purpose Registers

### Differences

- **Stack**: Operands implicitly at stack top
- **Accumulator**: One implicit operand is the accumulator
- **General-Purpose Registers**: Operands must be explicitly specified (registers or memory addresses)

![](/images/posts/电子科技大学计算机系统结构复习笔记（二）：指令系统/6fc112795255.png)

### General-Purpose Register Architecture Classification

1. **Register-Memory**: General instructions can access memory
2. **Register-Register (Load-Store)**: Only load/store instructions access memory (MIPS structure)
3. **Memory-Memory**: Theoretical, doesn't exist in practice

---

## Memory Addressing

> All instruction sets discussed are byte-addressed, providing byte (8-bit), half-word (16-bit), and word (32-bit) addressing. Most computers also provide double-word (64-bit) addressing.
>
> Intel word = 2 bytes; MIPS word = 4 bytes
>
> **Load instruction (lw)**: Copy data from memory to register
> **Store instruction (sw)**: Copy data from register to memory
>
> **Little-endian**: Low address stores low byte (e.g., 04030201H)
> **Big-endian**: Low address stores high byte (e.g., 01020304H)
>
> **Alignment restriction**: In MIPS, word starting address must be a multiple of 4

### Addressing Modes

| Mode | Example | Meaning | Usage |
|------|---------|---------|-------|
| Register | Add R4,R3 | Regs[R4]←Regs[R4]+Regs[R3] | Value in register |
| Immediate | Add R4,#3 | Regs[R4]←Regs[R4]+3 | Constant value |
| Displacement | Add R4,100(R1) | Regs[R4]←Regs[R4]+Mem[100+Regs[R1]] | Local variables |
| Register Indirect | Add R4,(R1) | Regs[R4]←Regs[R4]+Mem[Regs[R1]] | Pointer addressing |

### MIPS Addressing Modes

- **Immediate**: Operand is constant in instruction
- **Register**: Operand is register
- **Base**: Address = base register + constant
- **PC-relative**: Address = PC + constant
- **Pseudo-direct**: Jump address = 26-bit field concatenated with PC high bits

---

## Operand Types and Instruction Operations

### Common Operand Types

![](/images/posts/电子科技大学计算机系统结构复习笔记（二）：指令系统/1f6303481392.png)

### Common Instruction Operations

| Type | Examples |
|------|----------|
| Arithmetic/Logic | Add, subtract, AND, OR, multiply, divide |
| Data Transfer | Load-store instructions |
| Control | Conditional branch, jump, procedure call/return, trap |
| System | OS calls, virtual memory management |
| Floating Point | FP add, subtract, multiply, divide, compare |

### Instruction Encoding Methods

1. **Variable-length**: Allows all operations with all addressing modes; minimum bits, complex decoding
2. **Fixed-length**: Operation and addressing combined in opcode; simple decoding, larger code
3. **Hybrid**: Compromise between the two

---

## MIPS Architecture

### Overview

- Simple 64-bit load-store architecture
- Fixed-length instruction encoding, simple decoding, efficient pipelining
- Easier for compilers to generate efficient code

### MIPS Registers

- 32 64-bit General Purpose Registers (GPR): R0-R31
- 32 Floating Point Registers (FPR): F0-F31
- R0 always contains 0

### MIPS Instruction Format

- Instruction length: 32 bits (6 bits for basic opcode)
- Two memory addressing modes encoded in opcode

![](/images/posts/电子科技大学计算机系统结构复习笔记（二）：指令系统/8599c699bb03.png)

---

## Chapter Summary

**Master**: ISA classification, memory addressing, operand size and types, MIPS architecture

**Understand**: Instruction operations, control flow instructions, instruction encoding

**Know**: Compiler technology and architecture interaction
