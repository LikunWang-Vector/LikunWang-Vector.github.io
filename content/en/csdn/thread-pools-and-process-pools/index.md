---
type: post
csdn: true
title: "20. Thread Pools and Process Pools"
date: "2023-01-06"
lastmod: "2023-01-06"
authors:
  - admin
tags:
  - "programming"
  - "python"
  - "web scraping"
  - "data analysis"
  - "algorithms"
  - "CSDN"
categories:
  - "Python Web Scraping Tutorial"
summary: "We've learned about processes and threads, and understand the efficiency benefits of multiprocessing and multithreading. But how do we apply them practically? If we need to create"
image:
  filename: "covers/csdn-python-crawler.png"
  caption: "CSDN Archive · PYTHON · CRAWLER"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128581928"
csdn_views: 256
csdn_likes: 3
csdn_comments: 1
csdn_favorites: 4
---

> This article was migrated from CSDN blog
> Original link: [20. Thread Pools and Process Pools](https://blog.csdn.net/m0_59180666/article/details/128581928)
> 📊 256 views | 👍 3 likes | 💬 1 comment | ⭐ 4 favorites


### Introduction

We've learned about processes and threads, and understand the efficiency benefits of multiprocessing and multithreading. But how do we apply them practically? If we need to create a hundred threads, we can't write t0=Thread through t99=Thread - that's extremely inefficient. So we introduce a new concept: thread pools and process pools.

* * *

### Concepts

Thread Pool: Opens a set of threads at once. Users submit tasks directly to the thread pool, and task scheduling is handled by the pool.

Process Pool: Opens a set of processes at once. Users submit tasks directly to the process pool, and task scheduling is handled by the pool.

* * *

### Implementation

#### Thread Pool

```python
from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor

def fn(name):
    for i in range(1000):
        print(name, i)

if __name__ == '__main__':
    # Create thread pool
    with ThreadPoolExecutor(50) as t:
        for i in range(100):
            t.submit(fn, name=f"Thread{i}")
    # Wait for all tasks in thread pool to complete before continuing
    print("123")
```

We import two Executors - ThreadPoolExecutor and ProcessPoolExecutor for task scheduling.

We submit threads via submit to a pool with 50 thread capacity, each loop submitting a thread that outputs 1000 numbers. "123" prints only after all pool tasks complete.

#### Process Pool

Process pool is simple - just change the executor API:

```python
from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor

def fn(name):
    for i in range(1000):
        print(name, i)

if __name__ == '__main__':
    # Create process pool
    with ProcessPoolExecutor(50) as t:
        for i in range(100):
            t.submit(fn, name=f"Process{i}")
    # Wait for all tasks to complete before continuing (daemon)
    print("123")
```

* * *

### Results

![](/images/posts/20.-线程池与进程池/b7139937380e.png)

![](/images/posts/20.-线程池与进程池/237894dd6fc8.png)

* * *

### Summary

This chapter covered thread pool and process pool usage. Next chapter, we'll practice thread pools with a real example.
