---
title: "UESTC Artificial Intelligence Review Notes (5): Machine Learning"
date: 2023-02-10
updated: 2023-02-10
categories:
  - Review Notes
tags:
  - artificial-intelligence
  - decision-tree
  - algorithm
  - study-notes
cover: /images/posts/电子科技大学人工智能期末复习笔记（五）：机器学习/a270835672e5.png
lang_pair:
  zh-CN: "电子科技大学人工智能期末复习笔记（五）：机器学习"
---

**Table of Contents**

Supervised vs Unsupervised Learning
Regression vs Classification
Training/Test/Validation Sets
Generalization and Overfitting
Linear Classifiers
Activation Functions
Linear Regression
Decision Trees
Information Entropy
Information Gain
ID3 Algorithm

---

## Supervised vs Unsupervised Learning

**Supervised Learning**: Input data samples with known categories
- Classification, Regression

**Unsupervised Learning**: Input data samples with unknown categories
- Clustering

---

## Regression vs Classification

**Classification**: Predicting discrete labels for input data

**Regression**: Predicting continuous numerical values

**Output**: Continuous vs Discrete

Classification requires activation functions.

---

## Training/Test/Validation Sets

- **Training set**: Used to learn parameters (e.g., model probabilities)
- **Test set**: Used to calculate model accuracy
- **Validation set**: Used to tune hyperparameters

---

## Generalization and Overfitting

**Generalization**: In supervised learning, we build a model on training data and apply it to new, unseen data.

**Overfitting**: Model performs well on training set but poorly on test/validation sets.

Main causes:
- Noise in training data
- Too little training data

Solutions:
- Choose appropriate stopping criteria
- Use validation dataset
- Get additional data for cross-validation
- Regularization

---

## Linear Classifiers

**Input**: Feature vector f(x)
**Weights**: Weight vector w

### Binary Classification

- True label: y* ∈ {-1, 1}
- Predicted label: y = sign(w · f(x))

**Update rule** (when misclassified):
w = w + y* · f(x)

### Multi-class Classification

- Weight vector for each class: w_y
- Predicted label: y = argmax_y (w_y · f(x))

**Update rule** (when misclassified):
- Decrease: w_y = w_y - f(x) (wrong class)
- Increase: w_y* = w_y* + f(x) (correct class)

---

## Activation Functions - Probabilistic Decisions

Common activation functions:
- Sigmoid: σ(x) = 1/(1 + e^(-x))
- Softmax: For multi-class probability distribution

---

## Linear Regression

Goal: Find weights w that minimize prediction error.

**L2 Loss**: Sum of squared errors for all samples

Loss = Σ (y_i - w · f(x_i))²

**Gradient Descent**: Update weights in direction of negative gradient.

---

## Decision Trees

### Recursive Exit Conditions

1. All samples in current set D belong to same class C
2. Current attribute set A is empty OR all samples have same values on all attributes
3. Current node's sample set is empty

### Information Entropy

Entropy measures sample set purity.

For sample set D with class k proportion p_k:

H(D) = -Σ p_k × log₂(p_k)

- Range: [0, log₂|y|]
- Lower value = higher purity
- Convention: if p=0, then p×log₂(p) = 0

### Information Gain

For discrete attribute a with V possible values:

Gain(D, a) = H(D) - Σ (|D_v|/|D|) × H(D_v)

Higher information gain means better purity improvement from using attribute a.

**ID3 Algorithm**: Select attribute with highest information gain for splitting.

---

## ID3 Algorithm Example

1. Calculate entropy of entire dataset
2. For each attribute, calculate information gain
3. Select attribute with maximum information gain
4. Split dataset and recursively build subtrees
5. Stop when exit conditions are met

---

## Summary

This chapter covered machine learning fundamentals:
- Supervised vs unsupervised learning
- Classification vs regression
- Linear classifiers and their update rules
- Linear regression with L2 loss
- Decision trees with ID3 algorithm
- Information entropy and information gain
