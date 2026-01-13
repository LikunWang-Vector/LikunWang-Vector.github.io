---
title: "UESTC Artificial Intelligence Review Notes (3): First-Order Logic"
date: 2023-02-08
updated: 2023-02-08
categories:
  - Review Notes
tags:
  - artificial-intelligence
  - first-order-logic
  - inference
  - study-notes
  - resolution
lang_pair:
  zh-CN: "电子科技大学人工智能期末复习笔记（三）：一阶逻辑"
---

**Table of Contents**

Logic Fundamentals
Connectives and Quantifiers
Equivalence Relations
Substitution and Unification
Resolution Principle
Robinson's Resolution

---

## Logic Fundamentals

### Definition of Propositions

- **Assertion**: A declarative sentence is called an assertion
- **Proposition**: An assertion with truth value (true or false)

### Truth Values

- **T**: The proposition is true
- **F**: The proposition is false

Note:
- A proposition cannot be both true and false simultaneously
- A proposition can be true under some conditions and false under others

### Atomic Formulas

- **Atomic Formula**: Predicate calculus composed of predicate symbols and terms; the basic building blocks of predicate calculus
- **Terms** include: constant symbols, variable symbols, function symbols, etc.
- Defining atomic formulas as true or false represents semantics
- If t₁, t₂, ..., tₙ are terms and P is a predicate, then P(t₁, t₂, ..., tₙ) is an atomic predicate formula

---

## Connectives and Quantifiers

1. **Conjunction (∧)**: Formulas connected by ∧
   - Example: LIKE(I, MUSIC) ∧ LIKE(I, PAINTING)

2. **Disjunction (∨)**: Formulas connected by ∨
   - Example: PLAYS(LILI, BASKETBALL) ∨ PLAYS(LILI, FOOTBALL)

3. **Implication (→)**: Represents "IF-THEN" relationship

4. **Negation (¬, ~)**: Represents NOT

**Operator Precedence**: ¬, ∧, ∨, (∃, ∀), →, ↔

---

## Equivalence Relations

Two well-formed formulas are equivalent if their truth tables are identical regardless of interpretation.

Key equivalences:
- De Morgan's Laws
- Double negation elimination
- Implication elimination: P → Q ≡ ¬P ∨ Q

---

## Substitution and Unification

### Substitution Definition

A substitution is a finite set of the form {t₁/x₁, t₂/x₂, ..., tₙ/xₙ} where:
- t₁, t₂, ..., tₙ are terms
- x₁, x₂, ..., xₙ are distinct variables
- tᵢ/xᵢ means replacing variable xᵢ with term tᵢ

Requirements:
- tᵢ and xᵢ cannot be the same
- xᵢ cannot appear cyclically in another tᵢ

### Unification Definition

Given formula set F = {F₁, F₂, ..., Fₙ}, if there exists a substitution θ such that F₁θ = F₂θ = ... = Fₙθ, then θ is a unifier of F.

**Most General Unifier (MGU)**: A unifier σ is most general if for any other unifier θ, there exists a substitution λ such that θ = σ·λ

---

## Resolution Principle

**Resolution**: Decomposing and simplifying predicate calculus formulas to derive clauses.

Key concepts:
- A **clause** is a formula composed of disjunctions of literals
- A **literal** is an atomic formula or its negation
- An **empty clause** contains no literals
- A **clause set** is a set of clauses and empty clauses

**Resolution Process**: Apply resolution rules to parent clause pairs to produce derived clauses.

Example: {E₁ ∨ E₂, ~E₂ ∨ E₃} resolves to E₁ ∨ E₃

---

## Robinson's Resolution Principle

**Definition 1**: If P is an atomic predicate formula, then P and ¬P are complementary literals.

**Definition 2**: If C₁ and C₂ are clauses, and literal L₁ in C₁ is complementary to literal L₂ in C₂, then:
- Remove L₁ from C₁ and L₂ from C₂
- Combine remaining parts by disjunction to form new clause C₁₂
- C₁₂ is called the resolvent; C₁ and C₂ are parent clauses

---

## 9-Step Method for Clause Sets

1. Eliminate implication symbols
2. Reduce negation scope (De Morgan's Laws)
3. Standardize variables (unique dummy variables)
4. Eliminate existential quantifiers (∃)
5. Convert to prenex form
6. Convert to conjunctive normal form (∧)
7. Eliminate universal quantifiers (∀)
8. Eliminate conjunction symbols (∧)
9. Rename variables (same variable name shouldn't appear in multiple clauses)

---

## Summary

This chapter covered first-order logic including:
- Logic fundamentals and propositions
- Connectives and quantifiers
- Substitution and unification
- Resolution principle and Robinson's resolution
