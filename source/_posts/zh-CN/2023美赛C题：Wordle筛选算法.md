---
title: "2023美赛C题：Wordle筛选算法"
date: 2023-02-17
updated: 2023-02-17
categories:
  - General
tags:
  - 开发语言
  - python
  - 数学建模
csdn_views: 5406
csdn_likes: 6
csdn_comments: 2
csdn_favorites: 19
csdn_url: https://blog.csdn.net/m0_59180666/article/details/129080819
cover: /images/posts/2023美赛C题：Wordle筛选算法/6453f3f78436.png
lang_pair:
  en: "2023 MCM Problem C: Wordle Filtering Algorithm"
---

> 本文迁移自CSDN博客
> 原文链接：[2023美赛C题：Wordle筛选算法](https://blog.csdn.net/m0_59180666/article/details/129080819)
> 📊 5406 阅读 | 👍 6 点赞 | 💬 2 评论 | ⭐ 19 收藏

### Wordle 规则介绍

[Wordle](https://www.powerlanguage.co.uk/wordle/ "Wordle") 每天会更新一个5个字母的单词，在6次尝试中猜出单词就算成功。每个猜测必须是一个有效的单词（不能是不能组成单词的字母排列）。

每次猜测后，字母块的颜色会改变，颜色含义如下： 

![](/images/posts/2023美赛C题：Wordle筛选算法/6453f3f78436.png)

### 程序编写

#### 单词数据

Wordle的单词数据直接写在网页源代码里，进入[Wordle](https://www.powerlanguage.co.uk/wordle/ "Wordle")，按`F12`查看源代码。 

我们将这些数据提取出来就能的到Wordle单词列表，网上已经有人整理成[json文件](https://bert.org/assets/posts/wordle/words.json "json文件")（点击传送门获取），同时还提出了**SOARE** 是最好的起始词，有兴趣的可查看[《The Best Starting Word in WORDLE》](https://bert.org/2021/11/24/the-best-starting-word-in-wordle/ "《The Best Starting Word in WORDLE》")

#### 代码编写

获取单词列表之后，就可以开始代码的编写了。 代码的基本思路就是，按照灰色、黄色和绿色三种情况分别处理，排除不符合的单词。

代码编写思路：

  * 包含灰色色块字母的单词排除
  * 不包含黄色色块字母的单词排除
  * 包含黄色色块字母但是还在错误的位置的单词排除
  * 与绿色色块字母位置不符合的单词排除

代码开源在Github：[eMUQI/wordle-helper](https://github.com/eMUQI/wordle-helper "eMUQI/wordle-helper")

```python import json with open("words.json", 'r') as f: data = json.load(f) words = data['words'] # 初始化 fault = "" # 灰色色块 pos_wrong = ["", "", "", "", ""] # 黄色色块 right = ["", "", "", "", ""] # 绿色色块 # 提示 print(40*"-") print("The Best Starting Word in WORDLE may is 'SOARE'") print("for result, gray:0 yellow:1 green:2") print(40*"-") for i in range(5): # 处理输入，记录字母 guess = input("{0}：".format(i+1)) results = input("result:") for n in range(len(results)): if results[n] == "0": fault = fault + guess[n] elif results[n] == "1": pos_wrong[n] = pos_wrong[n] + guess[n] elif results[n] == "2": right[n] = guess[n] else: print("bad input") # 生成建议 temp_list = [] for word in words: # 检查灰色色块，也就是错误的字母 flag = True for f in fault: if f in word: flag = False break if not flag: continue for n in range(5): # 检查绿色色块，也就是正确的字母，字母和位置是否符合 if right[n] != "" and right[n] != word[n]: flag = False break # 检查黄色色块，也就位置不对的字母 if pos_wrong[n] != "": for ps in pos_wrong[n]: # 检查是否有黄色色块字母 if ps not in word: flag = False break else: #检查是否还在错误的位置 if word.index(ps) == n: flag = False break if not flag: continue temp_list.append(word) print("suggest:", temp_list) word = temp_list.copy() print(40*"-") ``` 

### 小结

本身写个程序是为了练练手，满足一下写代码的快乐。 经过实际测试，发现基本上到第三轮或者到第四轮猜测，可以选择的单词就非常少了，辅助效果不错。

另外，百万粉数学科普大神3Blue1Brown不光写出了求解算法，还用数学知识一步步优化至逼近理论极限，最终成绩平均3.138次猜测就能获胜，感兴趣的同学可以去找找他的视频，很有启发。 

![](/images/posts/2023美赛C题：Wordle筛选算法/61f64e74a4cb.png)
