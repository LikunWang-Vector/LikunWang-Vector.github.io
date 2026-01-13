---
title: "Pandas: Three Algorithms for Recursive Correlation Analysis in Excel"
date: 2023-03-01
updated: 2023-03-01
categories:
  - Data Analysis
tags:
  - pandas
  - algorithm
  - python
  - data-analysis
  - mathematical-modeling
cover: /images/posts/pandas-三种算法实现递归分析Excel中各列相关性/da063f64b167.png
lang_pair:
  zh-CN: "pandas: 三种算法实现递归分析Excel中各列相关性"
---

## Introduction

I recently participated in the 2023 MCM (Mathematical Contest in Modeling) with some classmates. This was my first formal experience with mathematical modeling competitions. During the process, we dealt with data analysis, and I'd like to share the analysis algorithms we used.

## Objective

The United Nations (UN) has established 17 Sustainable Development Goals (SDGs). Achieving these goals will ultimately improve the lives of many people around the world. These goals are not independent of each other - positive gains in some goals often impact other goals (positively or negatively, sometimes both).

Given the scores for 17 SDGs across different years, we need to analyze the correlation between each goal using three analysis methods: **Pearson, Spearman, and Kendall**.

## Approach

1. Loop through all SDG columns, getting data in pairs
2. Call pandas library functions directly for analysis

## Code Implementation

### 1. Loop Through SDG Columns to Get Paired Data

First, import the libraries:

```python
import pandas as pd
import numpy as np
```

Set text format to two decimal places:

```python
formatter = "{0:.02f}".format
```

Read Excel data (requires openpyxl installed):

```python
x = pd.read_excel(r'./World-Scores-2000-2022.xlsx', dtype=object, usecols=[h + 2])
```

Apply text format and convert to array:

```python
x = x.applymap(formatter)
x_li = x.values.tolist()
```

Put it in a loop:

```python
for h in range(17):
    x = pd.read_excel(r'./World-Scores-2000-2022.xlsx', dtype=object, usecols=[h + 2])
    x = x.applymap(formatter)
    x_li = x.values.tolist()
    result_x = []
    for item in x_li:
        result_x.append(float(item[0]))
```

Nested loop for pairwise matching (handshake problem):

```python
for h in range(17):
    x = pd.read_excel(r'./World-Scores-2000-2022.xlsx', dtype=object, usecols=[h + 2])
    x = x.applymap(formatter)
    x_li = x.values.tolist()
    result_x = []
    for item in x_li:
        result_x.append(float(item[0]))
    
    for i in range(h+1, 17):
        y = pd.read_excel(r'./World-Scores-2000-2022.xlsx', dtype=object, usecols=[i + 2])
        y = y.applymap(formatter)
        y_li = y.values.tolist()
        result_y = []
        for item in y_li:
            result_y.append(float(item[0]))
```

### 2. Call Pandas Library Functions for Analysis

Name the two columns varX and varY, then calculate in each loop iteration:

```python
varX = pd.Series(result_x)
varY = pd.Series(result_y)

# method options: pearson, spearman, kendall
result = varX.corr(varY, method="spearman")

# Output result
print(f'Goal{h+1}&Goal{i+1} correlation:', result)
```

We use the pandas `corr` function to calculate correlation. The method parameter can be: spearman, kendall, or pearson.

![](/images/posts/pandas-三种算法实现递归分析Excel中各列相关性/da063f64b167.png)

## Complete Source Code

```python
import pandas as pd
import numpy as np

formatter = "{0:.02f}".format

for h in range(17):
    x = pd.read_excel(r'./World-Scores-2000-2022.xlsx', dtype=object, usecols=[h + 2])
    x = x.applymap(formatter)
    x_li = x.values.tolist()
    result_x = []
    for item in x_li:
        result_x.append(float(item[0]))
    
    for i in range(h+1, 17):
        y = pd.read_excel(r'./World-Scores-2000-2022.xlsx', dtype=object, usecols=[i + 2])
        y = y.applymap(formatter)
        y_li = y.values.tolist()
        result_y = []
        for item in y_li:
            result_y.append(float(item[0]))
        
        varX = pd.Series(result_x)
        varY = pd.Series(result_y)
        
        # method options: pearson, spearman, kendall
        result = varX.corr(varY, method="spearman")
        
        print(f'Goal{h+1}&Goal{i+1} correlation:', result)
```

## Results

![](/images/posts/pandas-三种算法实现递归分析Excel中各列相关性/2e907a9ebdd9.png)

The results are analyzed and output in order - very useful!

You can also automatically save to an Excel file, but I'll leave that for you to explore.

## Summary

This article demonstrated how to calculate correlation using pandas with three methods: Spearman, Pearson, and Kendall.
