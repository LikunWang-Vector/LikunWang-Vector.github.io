---
title: "UESTC Artificial Intelligence Review Notes (1): Search Problems"
date: 2023-02-08
updated: 2023-02-08
categories:
  - Review Notes
tags:
  - artificial-intelligence
  - review-notes
  - graph-search-algorithm
  - greedy-algorithm
  - algorithm
cover: /images/posts/电子科技大学人工智能期末复习笔记（一）：搜索问题/7efdc9ba252b.png
lang_pair:
  zh-CN: "电子科技大学人工智能期末复习笔记（一）：搜索问题"
---

**Table of Contents**

Introduction
Search Problems
Uninformed Search Algorithms
Informed Search Algorithms
Adversarial Search

---

## Introduction

This review note is based on classroom PPT and review outline, for personal exam review and reference.

---

## Search Problems

### What is a Search Problem?

A search problem consists of:
- A state space
- A successor function (with actions and costs)
- A start state
- A goal state

**State Space**: The set of all possible states the "world" can be in. If the entire state space is a video, then a state is a single frame of that video.

**Successor Function**: The core of search problems. It determines what the agent's next action should be through search algorithms.

**Solution**: A sequence of actions (plan) that transforms the start state to the goal state.

### Calculating State Space Size

Multiply all possible environments/actions together.

---

## Uninformed Search Algorithms

### Important Concepts

- **Complete**: If a solution exists, it will definitely be found
- **Optimal**: Guarantees finding the path with minimum cost
- **Time Complexity**: Number of basic operations executed
- **Space Complexity**: Number of variables used

### Depth-First Search (DFS)

- Explores from top to bottom, left to right
- Frontier nodes are in LIFO stack form
- **Complete in finite state spaces**
- **Not optimal** (only finds a solution, doesn't guarantee minimum cost)

### Breadth-First Search (BFS)

- Explores from left to right, top to bottom
- Frontier nodes are in FIFO queue form
- **Complete in finite state spaces**
- **Optimal when actions are unweighted**

### Uniform Cost Search (UCS)

- Expands the node with minimum cost first
- Similar to Dijkstra's algorithm
- **Complete and optimal**
- Disadvantage: May expand in all directions without knowing the goal's direction

---

## Informed Search Algorithms

### Heuristic Search

A heuristic is:
- A function that estimates the distance from a state to the goal
- Designed for a specific search problem
- Examples: Manhattan distance, Euclidean distance

### Greedy Search

- Expands the currently optimal node first
- Unlike UCS, Greedy considers distance to the goal
- **Not optimal!** Quality depends heavily on the heuristic function h(x)

### A* Search

A* combines UCS and Greedy with two evaluation functions:
- g(x): Cost from start to current node
- h(x): Estimated cost from current node to goal
- f(x) = g(x) + h(x)

**A* is complete and optimal** when h(x) is admissible (never overestimates the actual cost).

**Admissible Heuristics**: The estimated distance h(x) must be less than or equal to the actual distance.

### Graph Search

A method for finding paths in graphs:
- Each node corresponds to a state in the state space
- Each edge corresponds to an operator (usually with cost)

Uses OPEN and CLOSED lists to track nodes being explored and already explored.

---

## Adversarial Search

### Zero-sum Games

1. Agents have opposite goals
2. When one agent's score is high, the other's is necessarily low

### Minimax Algorithm

Minimax is a pessimistic algorithm that finds the minimum of maximum possible losses.

- Used in two-player games like chess
- **Max nodes**: Choose maximum value among children
- **Min nodes**: Choose minimum value among children
- Process bottom-up from leaf nodes

### Alpha-Beta Pruning

Pruning rules:
1. Max layer: α = max(α, all child values), β = parent's β
2. Min layer: β = min(β, all child values), α = parent's α
3. When α ≥ β at any node, stop searching other children
4. Leaf nodes have no α and β

Alpha-Beta pruning significantly reduces time complexity in deep searches.

---

## Summary

This chapter covered search algorithms including:
- Uninformed algorithms: DFS, BFS, UCS
- Informed algorithms: Greedy, A*, Graph Search
- Adversarial search concepts and Alpha-Beta pruning
