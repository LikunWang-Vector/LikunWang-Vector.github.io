---
title: "UESTC Operating System Review Notes (5): File Management"
date: 2023-02-19
updated: 2023-02-19
categories:
  - Review Notes
tags:
  - operating-system
  - algorithm
  - file-management
  - review-notes
  - study-materials
cover: /images/posts/电子科技大学操作系统期末复习笔记（五）：文件管理/bcac8e17b685.png
lang_pair:
  zh-CN: "电子科技大学操作系统期末复习笔记（五）：文件管理"
---

**Table of Contents**

Preface
File Management Basics
Basic Concepts
File Structure
Logical Structure
Physical Structure
File Management: Directories
File Control Block (FCB)
Directory Organization
Path Names
Links
File Management: Disk Management
Free Space Management
File Consistency
File Execution
Virtual File System (VFS)

---

## Preface

This is the final section, focusing on CM5: File Management - file system functions, logical structure, physical structure, directories, file sharing, and file system consistency.

---

## File Management Basics

### Basic Concepts

#### File

> - An ordered collection of related elements with a symbolic name
> - Users organize associated storage units into files based on logical function
> - File is the basic logical unit for storing information on disk
> - File name: Naming for related elements

#### File System

> Concept:
> - Software that manages, controls, and operates on files
> - The only way for users or applications to access files
>
> Goals and Functions:
> - Ensure file data validity
> - Reduce or eliminate possibility of data loss or corruption
> - Optimize throughput (system) and response time (user)
> - Provide I/O support for various storage devices with unified interface
> - Manage file storage space, allocate and reclaim storage
> - Implement access by name: File namespace ↔ Storage space
> - Implement file sharing, provide protection and security measures

#### File System Implementation Model

> - File system interface: Commands, system calls, GUI file access
> - Logical function layer: Based on interface requests, obtain physical parameters through FCB, directories, allocation tables
> - Physical driver layer: Convert logical commands to driver actions

#### File Composition

> File = Metadata + File content
> Metadata: File name, internal ID (e.g., Unix inode), owner, access time/permissions, file size...

#### File Classification

> - By usage: System files, user files, library files
> - By organization: Ordinary files, directory files, special files
> - By access: Read-only, read-write, executable
> - By data form: Source files, object files, executable files

---

### File Structure

#### Logical Structure

> From user perspective, independent of physical storage structure

**Unstructured Files (Stream Files)**
> - Basic unit is byte; file is a logically meaningful, unstructured sequence of bytes
> - No inherent data structure; provides great flexibility
> - User defines file content meaning

**Structured Files (Record Files)**
> - File consists of several records; each record has a key for searching
> - Components: Record, field, key

**File Organization and Access**

> - **Heap File**: Data stored in arrival order; variable record length and field count; very low random access efficiency
> - **Sequential File**: All records ordered by primary field; fixed field definition and record length; best for batch processing
> - **Indexed Sequential File**: Sequential file with records grouped; index table records first record of each group
> - **Indexed File**: Each index entry points to a record; index sorted by key field
> - **Direct/Hash File**: Storage location calculated by hash function with key as parameter; fast access

#### Physical Structure

> File logical address and physical address mapping; how files are stored on physical media

**File Allocation Table**
> - File storage space divided into equal-sized physical blocks
> - Physical block is basic allocation and transfer unit
> - Block size typically multiples of sector size (512B, 1KB, 2KB, 4KB)
> - Different OS names: DOS FAT, Windows NTFS MFT, Unix inode

**Contiguous Allocation**
> - File information stored in consecutive physical blocks
> - Advantages: Simple; supports sequential and random access; fastest sequential access
> - Disadvantages: Difficult for dynamic file growth; may cause disk fragmentation

**Linked Allocation**
> - File information in non-contiguous blocks connected by pointers
> - Implicit linking: Each block has pointer to next block
> - Explicit linking: Pointers stored in memory link table
> - Advantages: Better disk utilization; no external fragmentation; easy insertion/deletion
> - Disadvantages: More seeks; poor random access; reliability issues

**Indexed Allocation**
> - File information in non-contiguous blocks; each file has index table recording block numbers
> - Index table is array of disk block addresses
> - Advantages: Supports random access; supports dynamic growth; multi-level indexing for large files
> - Disadvantages: More seeks

**Multi-level Indexing**
> When one data block cannot hold all file partitions, multiple index nodes needed
> - Direct blocks
> - Single indirect blocks
> - Double indirect blocks
> - Triple indirect blocks

**Unix iNode**
> - 13 index entries, each 2 bytes
> - First 10: direct blocks
> - 11th: single indirect addressing
> - 12th and 13th: double and triple indirect addressing

---

## File Management: Directories

### File Control Block (FCB)

> - Data structure describing and controlling files
> - One-to-one correspondence with files
> - Indicator of file existence
>
> FCB Information:
> - File name: User access name
> - File physical location: Storage location on external storage
> - Usage information: Creation time, access time, modify time

### Directory

#### Basic Concepts

> - File directory: Collection of files
> - Directory: Collection of file metadata (control blocks)
> - Directory file: File composed of directory entries
> - **Directory is a file**

#### Directory Functions

> - Access by name
> - Improve search speed
> - File sharing
> - Allow file name duplication

#### FCB Organization Methods

> Calculation: FCB is 48 bytes, block is 512 bytes, directory has 128 files.
> Calculate average disk accesses to find a file.
>
> - FCBs per block: 512/48 = 10
> - Blocks needed for 128 files: 128/10 = 13
> - Average disk accesses: (1+13)/2 = 7

#### Improved FCB Organization

> Split FCB into two parts:
> - Symbol directory entry: File name + file number
> - Basic directory entry: Remaining FCB information
>
> Reduces average disk accesses significantly

#### Directory Organization

**Single-Level Directory**
> All files in same directory
> Disadvantages: Slow search; no duplicate names; no sharing; no grouping

**Two-Level Directory**
> Separate directory for each user
> - User File Directory (UFD)
> - Master File Directory (MFD)
> Advantages: Same file names for different users; faster search; user isolation
> Disadvantages: Not conducive to sharing

**Tree Directory Structure**
> - Each level can contain files or subdirectories
> - One root directory; each directory/file has unique parent
> Advantages: Clear hierarchy; easy protection and dynamic mounting
> Disadvantages: Less convenient sharing

### Path Names

> Unique expression from tree root to node
>
> - Absolute path: Specified from root directory
> - Relative path: From current working directory (./ current, ../ parent)

### Links

**Hard Link**
> - Multiple file names link to same inode
> - Must be in same file system
> - File not deleted if other links exist

**Soft Link (Symbolic Link)**
> - Special file containing path to another file/directory
> - Can cross disks, directories, even machines
> - Independent of original file

### Acyclic Graph Directory

> Based on tree directory, allows multiple directory entries to point to same file/directory
> Implements file/directory sharing

### General Graph Directory

> Allows cycles; must avoid infinite loop searching
> Garbage collection for orphan cycles

---

## File Management: Disk Management

### Free Space Management

#### Free Partition Table

> Register free partitions in table; each partition has entry with partition number, starting block, length
> - Simple implementation
> - Can quickly find needed size when sorted by length
> - Table becomes large when many scattered free partitions

#### Free Partition Linked List

> Use free partition space to link partitions via pointers
> - No extra space overhead
> - Slow recovery of files with many small partitions

#### Bit Map

> Vector where each bit corresponds to one disk block
> - Free block: 0, Used block: 1
> - Easy to find contiguous free partitions
> - Space needed: Disk capacity / (8 × block size) bytes

#### Grouped Block Linking

> - Divide all free blocks into groups of n blocks
> - First block of each group stores block numbers and count of next group
> - Groups naturally form linked list
> - First group's info stored in special stack: Free block number stack

**Allocation Method**
> Check if count==1; if not, pop top element N, allocate, decrement count
> If count==1, pop N, read N's content into stack, then allocate N

**Release Method**
> Check if stack full; if not, push N, increment count
> If full, write stack to block N, put N in stack, set count to 1

---

### File Consistency

#### Block Consistency Check

> - Data block usage array and free array should be complementary
> - Each block should appear exactly once in either array

#### Link Count Consistency Check

> - Each directory entry contains inode number
> - Shared file's inode appears multiple times in directories
> - Link count in inode should match directory appearances

---

### File Execution

#### Data Structures

> - **User Open File Table**: One per process, records user's open files
> - **System Open File Table**: One for entire system, in memory; stores FCB file number, share count, read/write position, open mode, modification flag
> - **Memory iNode Table**: Disk inode loaded to memory for operation; access speed; share control

#### File Sharing

> - Different processes independent access
> - Same process duplicate fd: dup()/dup2()/fcntl()
> - Cross-process duplicate fd: fork()
> - fork() shares files, but files opened after fork() are not shared

#### File Operations

> - **create**: Create FCB, return file descriptor
> - **open**: Load FCB to memory, create user/system open file table entries, establish association with memory inode, return file descriptor
> - **close**: Write cached data to disk; clean up user file open table; clean up system file open table; clean up memory inode table

---

### Virtual File System (VFS)

> Supports object-oriented file system implementation - polymorphism
>
> - User programs: Unified interface
> - Underlying support: Different file systems
> - VFS interface: API, not specific file system implementation
