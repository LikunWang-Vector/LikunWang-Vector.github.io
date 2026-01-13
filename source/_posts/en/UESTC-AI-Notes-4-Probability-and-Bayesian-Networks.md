---
title: "UESTC Artificial Intelligence Review Notes (4): Probability and Bayesian Networks"
date: 2023-02-09
updated: 2023-02-09
categories:
  - Review Notes
tags:
  - probability
  - artificial-intelligence
  - bayesian-networks
  - topology
  - sampling
cover: /images/posts/电子科技大学人工智能期末复习笔记（四）：概率与贝叶斯网络/25f8d94da6ec.png
lang_pair:
  zh-CN: "电子科技大学人工智能期末复习笔记（四）：概率与贝叶斯网络"
---

**Table of Contents**

Probability Formulas
Bayes' Theorem
Chain Rule
Bayesian Networks
Independence Determination
Active/Inactive Paths
Conditional Probability in Bayesian Networks
Bayesian Network Sampling

---

## Probability Formulas

### Bayes' Theorem

P(A|B) = P(B|A) × P(A) / P(B)

Or equivalently:
P(A|B) = P(A,B) / P(B)

### Chain Rule for Conditional Probability

P(X₁, X₂, ..., Xₙ) = P(X₁) × P(X₂|X₁) × P(X₃|X₁,X₂) × ... × P(Xₙ|X₁,...,Xₙ₋₁)

---

## Example Problems

### 1. Joint/Marginal/Conditional Probability Distributions

Given a probability table, we can compute:
- **Joint probability distribution** P(D,W): Direct from table
- **Marginal probability distribution** P(D): Sum over all values of W
- **Conditional probability distribution** P(W|D): Using P(W,D)/P(D)

### 2. Applying Bayes' Theorem

Use Bayes' theorem to reverse conditional probabilities when needed.

---

## Bayesian Networks

### Determining Independence

**Two events are independent if**: P(A,B) = P(A) × P(B)

**Conditional independence**: X and Y are conditionally independent given Z if:
P(X,Y|Z) = P(X|Z) × P(Y|Z)

### Chain Rule with Conditional Independence

P(X₁, X₂, ..., Xₙ) = ∏ P(Xᵢ | Parents(Xᵢ))

---

## Active/Inactive Paths for Independence

To determine if X and Y are independent:
1. Find all paths from X to Y
2. A path is active if ALL its triples are active
3. If ANY path is active, X and Y are NOT independent

### Triple Types (given evidence Z):

| Structure | Z Unknown | Z Known |
|-----------|-----------|---------|
| Causal Chain (X→Z→Y) | Active | Inactive |
| Common Cause (X←Z→Y) | Active | Inactive |
| Common Effect (X→Z←Y) | Inactive | Active |

**Memory tip**: 
- Indirect causation with known middle → Inactive
- Known common cause → Inactive  
- Unknown common effect → Inactive

---

## Conditional Probability in Bayesian Networks

For a Bayesian network:
P(X₁, X₂, ..., Xₙ) = ∏ P(Xᵢ | Parents(Xᵢ))

Traverse each node and multiply by its conditional probability given its parents.

---

## Bayesian Network Sampling

### Prior Sampling

Sample according to topological order, starting from ancestor nodes.

Process:
1. Set sample count for an event
2. Calculate probability of generating sample
3. Apply formula to estimate joint distribution probability

### Rejection Sampling

Similar to prior sampling, but reject samples that don't match evidence conditions.

### Likelihood Weighting

Instead of rejecting samples, assign weights based on evidence likelihood.

Weight w ∝ ∏ P(evidence variable | parents)

### Gibbs Sampling

1. Start from arbitrary state
2. Randomly sample one non-evidence variable Xᵢ
3. Sample Xᵢ conditioned on its Markov blanket
4. Repeat

---

## Summary

- **Prior Sampling**: Sample in topological order for all variables
- **Rejection Sampling**: Generate samples from easy distribution, reject those not matching evidence
- **Likelihood Weighting**: Only generate events consistent with evidence, avoiding rejection inefficiency
- **Gibbs Sampling**: Start from arbitrary state, sample non-evidence variables conditioned on Markov blanket
