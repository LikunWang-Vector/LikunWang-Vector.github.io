---
title: "UESTC Operating System Review Notes (2): Process and Concurrency Control"
date: 2023-02-14
updated: 2023-02-14
categories:
  - Review Notes
tags:
  - operating-system
  - process
  - concurrency-control
  - algorithm
  - review-notes
cover: /images/posts/电子科技大学操作系统期末复习笔记（二）：进程与并发控制/e94870088ab1.png
lang_pair:
  zh-CN: "电子科技大学操作系统期末复习笔记（二）：进程与并发控制"
---

**Table of Contents**

Preface
Process Management
Process Basics
Precedence Graphs
Concurrent Execution
Process Definition and Characteristics
Process States
Operating System Kernel
Process Control Block (PCB)
Process Creation
Process Control Functions (fork and exec)
Process Termination
Process Switching
Threads
Processor Scheduling
Single Processor Scheduling (Key Topic)
Scheduling Algorithms
Real-Time Scheduling
Multi-Processor Scheduling
Process Concurrency Control: Mutual Exclusion and Synchronization
Semaphores
Monitors
Semaphore Applications (Key Topic)
Producer/Consumer Problem
Reader/Writer Problem
Dining Philosophers Problem
Inter-Process Communication
Deadlock
Deadlock Prevention
Deadlock Avoidance
Deadlock Detection
Deadlock Recovery

---

## Preface

This review note is based on the UESTC Computer Operating Systems Teaching Syllabus (2022), focusing on CM2: Process Management - process concepts, thread concepts, process lifecycle, scheduling algorithms, synchronization and mutual exclusion, inter-process communication, and deadlocks.

---

## Process Management

### Process Basics

#### Sequential Program Execution

> Program execution has a fixed sequence
> Characteristics: Sequential, Closed, Reproducible

#### Precedence Graphs

> - Directed acyclic graph
> - Representation: p1→p2, meaning p1 must complete before p2 starts
> - Nodes represent: a statement, a program segment, or a process

![](/images/posts/电子科技大学操作系统期末复习笔记（二）：进程与并发控制/e94870088ab1.png)

#### Concurrent Program Execution

Characteristics: Intermittent, Loss of closure (mainly caused by shared resources), Non-reproducibility (concurrent programs may make different modifications to shared resources)

#### Process Definition and Characteristics

> Definition: A dynamic execution process of a program with independent functionality on a data set.
>
> Multiple processes can improve hardware resource utilization but increase time/space overhead and OS complexity.
>
> Characteristics: Dynamic, Independent, Concurrent, Asynchronous, Structured
>
> **Process = Code Segment + Data Segment + PCB (Process Control Block)**
>
> **One program can correspond to multiple processes (Process:Program = n:1)**
>
> **Process is the basic unit for resource allocation and system scheduling**

| Process | Program |
|---------|---------|
| Dynamic | Static |
| Program execution | Code collection |
| Temporary | Permanent |
| State change process | Can be stored permanently |
| Truly describes concurrency | Cannot truly describe |
| Can create other processes | Cannot create other programs |

#### Process States

Three basic states: Ready, Running, Waiting/Blocked

![](/images/posts/电子科技大学操作系统期末复习笔记（二）：进程与并发控制/f91db0c12984.png)

---

### Operating System Kernel

#### Definition

Software modules that are closely related to hardware, frequently executed, and commonly used basic operation modules that **reside in memory** to improve OS efficiency.

#### Functions

> - **Process Management**: Creation, termination, scheduling, control
> - **Memory Management**: Space allocation/deallocation, virtual memory management
> - **I/O Device Management**: Device/channel allocation/deallocation, device management, virtual device implementation
> - **Interrupt Handling**: Important OS activities depend on interrupts

---

### Primitives

> - Definition: Composed of several machine instructions to complete a specific function, indivisible during execution.
> - Atomic Operation: All actions in an operation either all execute or none execute (All-or-None)

#### Atomic Operation Implementation

> - Single-processor systems (**Disable Interrupts**)
>   - Single instruction
>   - Ensure atomicity by disabling interrupts
> - Multi-core systems (**Memory Barrier**)
>   - When one CPU core executes an atomic operation, other cores must not operate on specified memory to avoid **data race** issues

---

### Process Control Block (PCB)

> PCB: Process Control Block, a data structure.
> - **The only identifier of process existence, resides in memory**

![](/images/posts/电子科技大学操作系统期末复习笔记（二）：进程与并发控制/440189917eee.png)

PCB Organization Methods:
- **Linked List**: PCBs with the same state are linked using pointers
- **Index**: System builds index tables based on all process states

#### Process Tree

> Describes process family relationships
> - Child processes can inherit parent process resources
> - **Terminating a parent process terminates all child processes**
> - Root process: init, launched, pid=1
> - **Orphan processes are directly managed by the root process**

---

### Process Control Functions (fork and exec)

**In most programs, fork and exec system calls are used together: the parent process creates a child process, then calls exec to overlay that child process.**

> **fork(): Create new process**
> - Call format: pid = fork()
> - After calling fork, both parent and child continue from the next statement
> - Return values differ:
>   - Failure returns -1
>   - In child process: pid is 0
>   - In parent process: pid of created child

> **exec(): Execute a file**
> - Child process can load new program file through exec()
> - Child process can have its own executable code, overlaying the calling process
> - Parameters: file + command line arguments. Success: no return; Failure: returns -1

---

### Threads

#### Differences from Processes

Process:Thread = 1:n

![](/images/posts/电子科技大学操作系统期末复习笔记（二）：进程与并发控制/739a5ed19208.png)

#### Thread Advantages

> - Reduce time/space overhead of concurrent execution (process overhead is larger)
> - Thread is the basic unit of independent scheduling
>   - Requires minimal system resources, shares all resources of its parent process

**Recall: Process is the basic unit for resource ownership and independent execution; Thread is the basic unit for independent scheduling!**

#### Thread Types

> - Kernel-level threads: Each thread appears as a process to the kernel
> - User-level threads: Kernel unaware, controlled by user

---

## Processor Scheduling

### Single Processor Scheduling (Key Topic)

#### Scheduling Principles

> - User-oriented principles:
>   - Turnaround time: Time from job submission to completion
>   - Average turnaround time: T = (1/n)Σ Ti
>   - Weighted average: T = (1/n)Σ(Ti/Ti,s) - closer to 1 is better
>   - Response time: Time from request submission to first response (interactive jobs)
>   - Deadline: Start/completion deadline
>   - Priority: Requires preemptive scheduling
> - System-oriented principles:
>   - Throughput: Jobs completed per unit time
>   - Utilization
>   - Fairness
>   - Priority

#### Scheduling Algorithms

**First Come First Served (FCFS)**
- Non-preemptive scheduling
- Favors long processes, unfavorable for short processes
- Suitable for CPU-intensive processes, not for I/O-intensive processes
- Cannot be directly used for time-sharing systems

**Shortest Job First (SJF)**
- Execute shortest jobs first
- Favors short processes, improves average turnaround time
- Long processes may starve
- Requires knowing or estimating each process's processing time

**Round Robin (RR)**
- Switch to next process after fixed time slice (following FCFS)
- Designed specifically for time-sharing systems
- Time slice too long: degrades to FCFS
- Time slice too short: increased context switching overhead

**Shortest Remaining Time (SRT)**
- SJF with preemption: when new process arrives, may have shorter remaining time than current
- Better turnaround time than SJF

**Priority-Based Scheduling**
- Execute higher priority processes first
- Static priority: assigned at creation, unchanged during lifetime
- Dynamic priority: can be modified during lifetime

**Highest Response Ratio Next (HRRN)**
- Response ratio R = Turnaround time/Service time = (w+s)/s
- Combines FCFS and SJF, overcomes both algorithms' disadvantages

**Multilevel Feedback Queue (MFQ)**
- Multiple ready queues with different priorities
- Queue priority decreases while time slice increases
- New processes enter highest priority queue
- Processes move to lower priority queues if not completed within time slice

---

### Real-Time Scheduling

#### Basic Conditions
- Ready time: Time when process becomes ready
- Start/completion deadline
- Processing time
- Resource requirements
- Priority

#### Real-Time Scheduling Algorithms
- Round Robin based scheduling
- Priority-based non-preemptive scheduling
- Preemption point-based preemptive scheduling
- Immediate preemption scheduling
- Earliest Deadline First (EDF)
- Least Laxity First (LLF)
- Rate Monotonic Scheduling

---

## Process Concurrency Control: Mutual Exclusion and Synchronization

### Basic Concepts

> - Process constraints:
>   - Indirect constraint: Resource sharing → Mutual exclusion
>   - Direct constraint: Process cooperation → Synchronization
> - Critical Resource: Resource that only one process can access at a time
> - Critical Section: Code segment accessing critical resources
> - Busy waiting, Starvation, Deadlock
> - Livelock: Two or more processes continuously change states in response to each other without doing useful work

### Synchronization Solutions

#### Software Methods
> Processes implement mutual exclusion and synchronization with other processes by executing corresponding program instructions

#### Hardware Methods
> - Disable interrupts: Ensures mutual exclusion
> - Machine instructions (atomic operations):
>   - Test & Set: Test variable value, if 0, set to 1, return current value
>   - Exchange: Atomically exchange register and memory values

#### Semaphores

> - Principle: Multiple processes coordinate through signal passing, stop execution (block waiting) or proceed (wake up) based on signals
> - Signal: Semaphore s
>   - Positive: Resource quantity
>   - Negative: Queue length
> - Primitives:
>   - wait(s): Wait for signal and occupy resource → P operation
>   - signal(s): Release resource and trigger signal → V operation
> - Types:
>   - Integer semaphore
>   - Record semaphore
>   - AND semaphore

#### Monitors

> Monitor Components:
> - Shared data local to the monitor representing resource state
> - A set of procedures for the above data
> - Initialization of data local to the monitor

> Monitor Characteristics:
> - Modularization: Monitor is a basic program unit, can be compiled separately
> - Abstraction: Monitor contains both data and operations on data
> - Encapsulation: External can call functions defined inside monitor, but implementation is invisible

---

## Semaphore Applications (Key Topic)

### Producer/Consumer Problem (Key Topic)

> Producer/Consumer Model:
> - Producer: Wait if full, fill if empty
> - Consumer: Wait if empty, get if available
> - No simultaneous buffer access allowed

```cpp
semaphore mutex = 1;  // Buffer access mutex
semaphore empty = n;  // Empty slots
semaphore full = 0;   // Filled slots

void producer() {
    while (true) {
        produce_item();
        P(empty);
        P(mutex);
        put_item_in_buffer();
        V(mutex);
        V(full);
    }
}

void consumer() {
    while (true) {
        P(full);
        P(mutex);
        get_item_from_buffer();
        V(mutex);
        V(empty);
        consume_item();
    }
}
```

### Reader/Writer Problem (Key Topic)

Three roles: Shared data area; Reader: only reads; Writer: only writes

Three conditions: Multiple readers can read simultaneously; Only one writer at a time; No simultaneous reading and writing

**Reader Priority**: Once readers are reading, subsequent readers can enter; writers wait until all readers exit

**Writer Priority**: When at least one writer wants to write, no new readers allowed

**Fair Priority**: Process in order of arrival

### Dining Philosophers Problem (Key Topic)

> Description: 5 philosophers sit around a table; 5 forks placed between them; they think or eat; eating requires both adjacent forks; thinking returns forks to original position.

```cpp
#define N 5
#define LEFT (i-1+N)%N
#define RIGHT (i+1)%N
#define THINKING 0
#define HUNGRY 1
#define EATING 2

int state[N] = {0, 0, 0, 0, 0};
semaphore mutex = 1;
semaphore s[N] = {0, 0, 0, 0, 0};

void philosopher(int i) {
    while (TRUE) {
        think();
        take_forks(i);
        eat();
        put_forks(i);
    }
}

void take_forks(int i) {
    P(mutex);
    state[i] = HUNGRY;
    test(i);
    V(mutex);
    P(s[i]);
}

void put_forks(i) {
    P(mutex);
    state[i] = THINKING;
    test(LEFT);
    test(RIGHT);
    V(mutex);
}

void test(int i) {
    if (state[i] == HUNGRY && 
        state[LEFT] != EATING && 
        state[RIGHT] != EATING) {
        state[i] = EATING;
        V(s[i]);
    }
}
```

---

## Inter-Process Communication

### Basic Concepts

> Process communication types:
> - Low-level communication: Using semaphores, small information exchange
> - High-level communication: OS-provided communication commands for efficient large data transfer
>   - Shared Memory
>   - Message Passing/Message Queue
>   - Pipe
>   - Socket
>   - File
>   - Signal
>   - Memory Mapped File

### Message Passing

> - Data exchange in formatted messages
> - Direct communication: Send messages directly to target process
> - Indirect communication: Use mailbox as intermediary

### Pipe Communication

Files used to connect a read process and a write process for communication.
- Unnamed pipe: `$ ls | grep x`
- Named pipe: `$ mkfifo mypipe`

---

## Deadlock

> A deadlock situation where multiple processes are waiting for resources held by each other, and none can proceed.

### Causes of Deadlock

> - Resource competition due to insufficient resources
> - Improper order of requesting and releasing resources during concurrent execution

### Necessary Conditions for Deadlock

> **Mutual Exclusion**: Process uses allocated resources exclusively
>
> **Hold and Wait**: Process holds at least one resource while requesting new resources held by others
>
> **No Preemption**: Resources cannot be forcibly taken; only released voluntarily
>
> **Circular Wait**: A closed chain of processes exists where each waits for resources held by the next
>
> All four conditions must be present.

### Deadlock Handling Methods

#### Deadlock Prevention

> Break one of the four conditions:
> - **Break "Hold and Wait"**: Request all resources at once before starting
> - **Break "No Preemption"**: Resource holders release resources when requests are denied
> - **Break "Circular Wait"**: Linear ordering of resources; request in increasing order only

#### Deadlock Avoidance

> Don't break conditions beforehand; check each resource request during runtime.
> Prevent system from entering **unsafe state**.
>
> **Safe State**: A state where a safe sequence exists
> **Safe Sequence**: A process sequence {P1,...,Pn} where each Pi's remaining needs can be satisfied by current available resources plus resources held by all Pj (j < i)

**Banker's Algorithm**
> When user requests resources, system checks if allocation keeps system in safe state.
> If yes, allocate; otherwise, block the process.

#### Deadlock Detection

> - No preventive measures
> - Resources granted without checking for unsafe state
> - Periodically check for deadlock (execute detection algorithm)
> - **Deadlock Theorem**: Necessary and sufficient condition for deadlock: Resource allocation graph cannot be completely reduced

#### Deadlock Recovery

> - **Process Termination**: Terminate all deadlocked processes, or terminate one at a time until deadlock cycle is broken
> - **Resource Preemption**: Gradually preempt resources from processes until deadlock is broken
> - **Process Rollback**: Restore each deadlocked process to a previous checkpoint and restart

#### Deadlock Ignorance

The approach typically used in practice... the cost of doing nothing is lowest.
