---
title: "2023 MCM Problem C: Wordle Filtering Algorithm"
date: 2023-02-17
updated: 2023-02-17
categories:
  - General
tags:
  - programming
  - python
  - mathematical-modeling
cover: /images/posts/2023美赛C题：Wordle筛选算法/6453f3f78436.png
lang_pair:
  zh-CN: "2023美赛C题：Wordle筛选算法"
---

## Wordle Rules Introduction

[Wordle](https://www.powerlanguage.co.uk/wordle/) updates a 5-letter word daily. You win by guessing the word within 6 attempts. Each guess must be a valid word (not random letter combinations).

After each guess, the tile colors change with the following meanings:

![](/images/posts/2023美赛C题：Wordle筛选算法/6453f3f78436.png)

- Green: Correct letter in correct position
- Yellow: Correct letter in wrong position
- Gray: Letter not in the word

## Program Development

### Word Data

Wordle's word data is embedded directly in the webpage source code. Enter [Wordle](https://www.powerlanguage.co.uk/wordle/) and press `F12` to view the source code.

The extracted data is available as a [JSON file](https://bert.org/assets/posts/wordle/words.json). Research suggests **SOARE** is the best starting word. See [The Best Starting Word in WORDLE](https://bert.org/2021/11/24/the-best-starting-word-in-wordle/) for details.

### Code Implementation

The basic approach processes gray, yellow, and green tiles separately to eliminate non-matching words.

Logic:
- Exclude words containing gray tile letters
- Exclude words not containing yellow tile letters
- Exclude words with yellow tile letters still in wrong positions
- Exclude words not matching green tile letter positions

Code available on GitHub: [eMUQI/wordle-helper](https://github.com/eMUQI/wordle-helper)

```python
import json

with open("words.json", 'r') as f:
    data = json.load(f)
words = data['words']

# Initialize
fault = ""  # Gray tiles
pos_wrong = ["", "", "", "", ""]  # Yellow tiles
right = ["", "", "", "", ""]  # Green tiles

# Instructions
print(40*"-")
print("The Best Starting Word in WORDLE may is 'SOARE'")
print("for result, gray:0 yellow:1 green:2")
print(40*"-")

for i in range(5):
    # Process input, record letters
    guess = input("{0}：".format(i+1))
    results = input("result:")
    
    for n in range(len(results)):
        if results[n] == "0":
            fault = fault + guess[n]
        elif results[n] == "1":
            pos_wrong[n] = pos_wrong[n] + guess[n]
        elif results[n] == "2":
            right[n] = guess[n]
        else:
            print("bad input")
    
    # Generate suggestions
    temp_list = []
    for word in words:
        # Check gray tiles (incorrect letters)
        flag = True
        for f in fault:
            if f in word:
                flag = False
                break
        if not flag:
            continue
        
        for n in range(5):
            # Check green tiles (correct letters and positions)
            if right[n] != "" and right[n] != word[n]:
                flag = False
                break
            # Check yellow tiles (wrong position letters)
            if pos_wrong[n] != "":
                for ps in pos_wrong[n]:
                    if ps not in word:
                        flag = False
                        break
                    else:
                        if word.index(ps) == n:
                            flag = False
                            break
        if not flag:
            continue
        temp_list.append(word)
    
    print("suggest:", temp_list)
    word = temp_list.copy()
    print(40*"-")
```

## Summary

This program was written for practice and coding enjoyment. Testing shows that by the 3rd or 4th guess, the remaining word choices become very limited, making it an effective assistant.

Additionally, math educator 3Blue1Brown not only created a solving algorithm but optimized it using mathematical knowledge to approach theoretical limits, achieving an average of 3.138 guesses to win. His videos are highly recommended for those interested.

![](/images/posts/2023美赛C题：Wordle筛选算法/61f64e74a4cb.png)
