---
type: post
csdn: true
title: "UESTC Artificial Intelligence Review Notes (5): Machine Learning"
date: "2023-02-10"
lastmod: "2023-02-10"
authors:
  - admin
tags:
  - "artificial-intelligence"
  - "decision-tree"
  - "algorithm"
  - "study-notes"
  - "CSDN"
categories:
  - "Review Notes"
summary: "Supervised Learning: Input data samples with known categories - Classification, Regression"
image:
  filename: "covers/csdn-notes.png"
  caption: "CSDN Archive · STUDY NOTES"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128962573"
csdn_views: 8967
csdn_likes: 25
csdn_comments: 10
csdn_favorites: 63
---

> This article was migrated from my [CSDN blog](https://blog.csdn.net/m0_59180666).
> Original: [UESTC Artificial Intelligence Review Notes (5): Machine Learning](https://blog.csdn.net/m0_59180666/article/details/128962573)
> 📊 8967 views | 👍 25 likes | 💬 10 comments | ⭐ 63 favorites

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
