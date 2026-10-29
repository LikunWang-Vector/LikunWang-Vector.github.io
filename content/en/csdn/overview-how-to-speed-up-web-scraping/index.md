---
type: post
csdn: true
title: "18. Overview: How to Speed Up Web Scraping"
date: "2023-01-05"
lastmod: "2023-01-05"
authors:
  - admin
tags:
  - "python"
  - "programming"
  - "web scraping"
  - "data analysis"
  - "CSDN"
categories:
  - "Python Web Scraping Tutorial"
summary: "Our previous scraping projects were small-scale and completed quickly. But we'll face a practical question: what if we need to scrape thousands of data items? Looping through thous"
image:
  filename: "covers/csdn-python-crawler.png"
  caption: "CSDN Archive · PYTHON · CRAWLER"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128562050"
csdn_views: 281
csdn_likes: 3
csdn_comments: 1
csdn_favorites: 4
---

> This article was migrated from CSDN blog
> Original link: [18. Overview: How to Speed Up Web Scraping](https://blog.csdn.net/m0_59180666/article/details/128562050)
> 📊 281 views | 👍 3 likes | 💬 1 comment | ⭐ 4 favorites


### Introduction

Our previous scraping projects were small-scale and completed quickly. But we'll face a practical question: what if we need to scrape thousands of data items? Looping through thousands of pages executing code sequentially is clearly inefficient. How can we improve efficiency? That's what we'll discuss.

* * *

### Overview

There are many ways to speed things up.

For example, when doing several tasks, we can coordinate them to run simultaneously, saving time. This can be implemented in computers - it's called multithreading.

Alternatively, we can have friends help us, each doing one task, also saving time. This can also be implemented in computers - it's called multiprocessing.

#### Illustration

![](/images/posts/18.-概述如何加快爬虫效率/63a82f71b089.png)

As shown, n-thread execution efficiency is at least n times that of single-thread, greatly saving time.

There are other methods to improve efficiency, such as coroutines and asynchronous scraping.

We'll cover these topics in the following chapters.
