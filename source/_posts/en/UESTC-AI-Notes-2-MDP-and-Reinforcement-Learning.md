---
title: "UESTC Artificial Intelligence Review Notes (2): MDP and Reinforcement Learning"
date: 2023-02-08
updated: 2023-02-08
categories:
  - Review Notes
tags:
  - algorithm
  - artificial-intelligence
  - MDP
  - reinforcement-learning
cover: /images/posts/电子科技大学人工智能期末复习笔记（二）：MDP与强化学习/d340ff55d6f0.png
lang_pair:
  zh-CN: "电子科技大学人工智能期末复习笔记（二）：MDP与强化学习"
---

**Table of Contents**

Expectimax Search
Markov Decision Process (MDP)
Value Iteration
Policy Iteration
Reinforcement Learning
Q-Learning

---

## Expectimax Search

In real scenarios, opponents don't always make optimal decisions. They may make mistakes with certain probability. Therefore, we should calculate the average expected score.

- **Expectimax Search**: Calculates optimal play under average scores
- Max nodes work the same as Minimax
- Chance nodes are similar to Min nodes but with uncertain outcomes
- Computes expected utility (weighted average of child nodes)

Note: Pruning is generally not recommended in Expectimax because Min layer calculations depend on every child value.

---

## Markov Decision Process (MDP) - Offline

MDP is a **five-tuple** <S, A, T, R, γ>:
- **S**: State space
- **A**: Actions
- **T**: State transition probability
- **R**: Reward
- **γ**: Discount factor

### Basic Concepts

**Policy (π)**: A mapping from states to actions π*: S → A that gives an action for each state, attempting to maximize final utility.

**Discounting**: Rewards decay exponentially over time to encourage faster goal achievement.

Formula: U([r₀, r₁, r₂, ...]) = r₀ + γr₁ + γ²r₂ + ...

### How to Stop Infinite Loops?

1. Set a maximum number of steps (life/lifecycle)
2. Use dynamic policies that change as available steps decrease
3. Set discounts so rewards converge
4. Set an "absorbing state" that forces game exit

### Value Iteration

- Start with value sum of 0
- Given a vector of values, iterate backward
- Repeat until convergence

**Bellman Equation**:
V*(s) = max_a Σ T(s,a,s')[R(s,a,s') + γV*(s')]

**Disadvantages**:
- Slow - O(S²A) per iteration
- "Max" at each state rarely changes
- Policy often converges before values

---

## Fixed Policies

When action at each step is determined by function π(s), V value calculation follows similar pattern to value iteration.

## Policy Extraction

When knowing optimal value V*(s), perform argmax() to find which action achieves this optimal value.

## Policy Iteration

Two parts:
1. **Policy Evaluation**: For fixed policy π, get V values through evaluation, iterate until convergence
2. **Policy Improvement**: For fixed policy V values, use policy extraction to get better policy

### Value Iteration vs Policy Iteration

**Value Iteration**:
- Updates value and policy each iteration
- Doesn't track policy explicitly, recalculates when choosing max Q value

**Policy Iteration**:
- Multiple passes updating utilities with fixed policy (fast since only one action considered)
- After evaluation, new policy is chosen
- New policy is better or equal

---

## Reinforcement Learning (RL) - Online

### Introduction

The difference between RL and MDP: We don't know the transition function and reward function explicitly. We must try things to draw conclusions!

RL is an online learning method that relies on trial and error.

### Model-Based RL (MBRL)

1. Through training, calculate transition matrix T() and reward R()
2. Learn an empirical MDP model
3. Use value iteration or policy iteration to solve for optimal values

### Model-Free RL (MFRL)

#### Direct Evaluation

Calculate values of all actions under current policy by averaging observed sample values:
- Take actions according to policy
- Sum up (discounted) rewards for each situation
- Average these samples

**Pros**: Simple, doesn't need T and R, eventually computes correct average value
**Cons**: Wastes state connection information, each state must be learned separately

#### Temporal Difference Learning

Learn from each experience:
- Update V(s) after each transition
- New states contribute more to policy updates
- Policy is fixed, always evaluating

---

## Q-Learning

Q-Learning calculates Q-state values - an intermediate undecided state that helps with decision making.

**Q-Value Update**:
Q(s,a) ← (1-α)Q(s,a) + α[R(s,a,s') + γ max_a' Q(s',a')]

**Properties**:
- Even without optimal iteration, Q-Learning eventually converges to optimal results (off-policy learning)
- Requirements:
  - Explore enough times
  - Learning rate must eventually become small enough
  - But don't decrease too fast

### Exploration vs Exploitation

Methods to force exploration:
- **ε-greedy**: Random action with probability ε, follow policy otherwise
- Problem: Must continue exploring even after learning is complete
- Solution: Decrease ε over time

---

## Summary

We've covered AI approaches for:
- Search
- Constraint Satisfaction Problems
- Games
- Markov Decision Problems
- Reinforcement Learning
