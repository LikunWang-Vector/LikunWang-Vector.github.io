---
title: "UESTC Operating System Review Notes (4): Device Management"
date: 2023-02-16
updated: 2023-02-16
categories:
  - Review Notes
tags:
  - operating-system
  - disk-management
  - review-notes
  - algorithm
cover: /images/posts/电子科技大学操作系统期末复习笔记（四）：设备管理/aa55f8cf800b.png
lang_pair:
  zh-CN: "电子科技大学操作系统期末复习笔记（四）：设备管理"
---

**Table of Contents**

Preface
Device Management
I/O System
Device Classification
Device Controllers
I/O Channels
I/O Control Methods
Buffer Management
I/O Software
Device Allocation
SPOOLing
Disk Storage
Disk Structure
Disk Access
Disk Scheduling Algorithms
Disk Management
RAID

---

## Preface

This review note focuses on CM4: Device Management - I/O system structure, buffer management, disk structure, and disk scheduling algorithms.

---

## Device Management

### I/O System

#### Basic Concepts

> From OS perspective, important evaluation and classification criteria:
> - Device usage characteristics
> - Data transfer rate
> - Data transfer unit
> - Device sharing attributes

#### Device Usage Characteristics

> - **Storage Devices**: External or backup storage, auxiliary storage
>   - Access speed slower than memory, but much larger capacity and relatively cheaper
> - **Input/Output Devices**:
>   - Input devices: Receive external information (keyboard, mouse, scanner, camera, sensors)
>   - Output devices: Send processed information externally (printer, plotter, display, speakers)
>   - Interactive devices: Integrate both types (headset with microphone, touchscreen)

#### Data Transfer Rate

> - Low-speed devices: Few bytes/s to hundreds of bytes/s (keyboard, mouse, voice I/O)
> - Medium-speed devices: Several KB/s to hundreds of KB/s (line printers, laser printers)
> - High-speed devices: Tens of MB/s (tape, disk, optical disk)

#### Data Transfer Unit

> - **Block Device**: Information stored/retrieved in data blocks
>   - Typical: disk, block size 512B~4KB
>   - Higher transfer rate; addressable, supports random read/write
>   - Often uses DMA
> - **Character Device**: Basic unit is character
>   - Many types: interactive terminals, printers
>   - Lower transfer rate; not addressable
>   - Often uses interrupt-driven mode

#### Device Sharing Attributes

> - **Exclusive Device**: Strictly exclusive use, sequential sharing (no interleaving)
>   - Example: Printer
> - **Shared Device**: Concurrent sharing, only one process accesses at any moment
>   - Example: Disk
> - **Virtual Device**: Through virtualization, simulate exclusive device as shared
>   - Example: SPOOLing

#### Device Controllers

> Devices don't communicate directly with CPU, but with device controllers.
> 
> Components:
> - Device controller to processor (CPU) interface
> - Device controller to device interface
> - I/O logic

#### I/O Channels

> - Relieves CPU from device controller tasks
> - Special processor capable of executing I/O instructions
> - Different from general processors:
>   - Single instruction type (I/O operations only)
>   - No own memory (channel programs stored in main memory)
>
> Channel Types:
> - **Byte Multiplexor Channel**: Works in byte-interleaved mode; many non-allocated subchannels; subchannels share main channel in round-robin
> - **Selector Channel**: For high-speed devices; one allocated subchannel; one device monopolizes channel until transfer complete
> - **Block Multiplexor Channel**: Combines advantages of selector (high transfer rate) and byte multiplexor (parallel operation)

---

### I/O Control Methods

#### Programmed I/O

> Early computer systems without interrupt mechanism used "busy-wait" mode.
> CPU continuously polls device status until operation completes.

#### Interrupt-Driven I/O

> - Modern computers widely use interrupt-driven mode
> - CPU sends I/O command to device controller, immediately returns to continue original task
> - Device controller controls specified device; CPU and I/O device operate in parallel
> - When device operation completes, controller sends interrupt signal to CPU
> - CPU retrieves data through controller and data lines

#### Direct Memory Access (DMA)

> Interrupt mode unsuitable for block devices (e.g., reading 1KB from disk would interrupt CPU 1K times)
>
> DMA characteristics:
> - Basic transfer unit is data block
> - Data transferred directly between device and memory
> - CPU intervention only at start and end of transfer

---

### Buffer Management

> - Mitigate speed mismatch between CPU and I/O devices
> - Reduce CPU interrupt frequency
> - Improve parallelism between CPU and I/O devices

#### Buffer Types

**Single Buffer**
> One buffer; time = max(T, C) + M

**Double Buffer**
> Buffer swapping; time = max(C, T)

**Circular Buffer**
> Multiple buffers; process synchronization

**Buffer Pool**
> Public buffer pool for both input and output
> - Empty buffer queue (emq)
> - Input queue (inq)
> - Output queue (outq)

---

### I/O Software

#### Interrupt Handling

> Hardware interrupt → Save context → Interrupt handler → Restore context → Return

#### Device Drivers

> Communication programs between I/O processes and device controllers
> - Check validity of user I/O requests
> - Understand I/O device status, pass parameters, set device working mode
> - Convert abstract I/O requests to specific instructions
> - Pass signals from device controller to upper software

#### Device Independence

> Applications independent of specific physical devices used
> - Application: Logical device
> - System execution: Physical device
> - Mapping relationship: Flexible device allocation, I/O redirection

---

### Device Allocation

#### Allocation Algorithms

> - **First Come First Served**: Allocate based on request order
> - **Priority-Based**: Higher priority processes get priority for I/O requests

#### SPOOLing (Simultaneous Peripheral Operating On-Line)

> Simulates offline input/output in online situation
>
> Components:
> - **Input/Output Wells**: Storage spaces on disk for temporary data
> - **Input/Output Buffers**: Temporary storage in memory
> - **Input/Output Processes**: Simulate peripheral control machines
>
> Features:
> - Improves I/O speed
> - Transforms exclusive devices into shared devices
> - Implements virtual device functionality

---

## Disk Storage

### Basic Concepts

> - One or more physical platters
> - Each disk surface organized into concentric rings called tracks
> - Each track logically divided into sectors
> - Same tracks on different surfaces form a cylinder

### Disk Structure

> - Disk drives use linear logical block addressing
> - Logical block is minimum transfer unit (512B)
> - Linear logical block numbers map one-to-one to sectors
> - Sector 0: First sector of first track on outermost cylinder
> - Ordering: Same track → Same cylinder other tracks → Other cylinders

### Address Translation

> OS logical block: b
> Disk 3D coordinates: (cylinder i, head j, sector k)
>
> If: s sectors/track, t tracks/cylinder, then:
> b = (s×t×i) + (s×j) + k = s×(t×i+j) + k

---

### Disk Access

#### Access Time Components

**Seek Time**
> Time for head to move to specified cylinder/track
> Ts = s + mn (s: arm startup time, m: constant related to drive speed)

**Transfer Time**
> Time for head to read/write data
> Tt = b/(rN) (r: rotation speed, N: bytes per track, b: bytes to transfer)

**Rotational Latency**
> Time for specified sector to move under head
> Average: half rotation time

**Total Access Time**
> Seek time and rotational latency are independent of data amount but occupy most access time.
> Insight: **Contiguous data storage improves transfer efficiency**

---

### Disk Scheduling Algorithms

#### First Come First Served (FCFS)

> Schedule based on request arrival order
> - Advantages: Fair, simple
> - Disadvantages: No seek optimization, potentially long average seek time

#### Shortest Seek Time First (SSTF)

> Prioritize requests closest to current head position
> - Problem: Track sticking (distant requests may starve)

#### SCAN Algorithm

> Execute SSTF in same direction until end, then reverse
> - Also called Elevator algorithm

#### C-SCAN (Circular SCAN)

> One-way scan, quick return, repeat same direction
> - Treats tracks as circular structure
> - Request delay: from 2T to T + Smax

#### LOOK and C-LOOK

> Similar to SCAN and C-SCAN
> - Look for requests before moving in given direction
> - Head only moves to furthest request, then immediately reverses

---

### Disk Management

#### Disk Cache

> Uses memory space to temporarily store disk block information
> Logically belongs to disk, physically resides in memory

#### Disk Formatting

> - Low-level/physical formatting: Divide disk into sectors
> - Partitioning: Divide by cylinders
> - Logical formatting: Create file system

#### RAID (Redundant Array of Independent Disks)

> Different configurations with different numbers
> Advantages: High reliability, high disk I/O speed, good cost-performance ratio

**RAID 0**: Striping for parallel access; no redundancy
**RAID 1**: Mirroring; high reliability but poor write performance
**RAID 2**: Bit-level striping with Hamming code parity
**RAID 3**: Byte-level striping with dedicated parity disk
**RAID 4**: Block-level striping with dedicated parity disk
**RAID 5**: Block-level striping with distributed parity
**Nested RAID**: Combinations like RAID 10, RAID 50
