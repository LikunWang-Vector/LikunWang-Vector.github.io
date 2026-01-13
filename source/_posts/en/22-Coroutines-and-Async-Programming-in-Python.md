---
title: "22. Coroutines and Async Multi-task Programming in Python"
date: 2023-01-10
updated: 2023-01-10
categories:
  - Python Web Scraping Tutorial
tags:
  - python
  - programming
  - async
  - coroutines
csdn_views: 625
csdn_likes: 6
csdn_comments: 1
csdn_favorites: 10
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128626343
cover: /images/posts/22.-协程与Python中的多任务异步协程/d71926bfed35.png
lang_pair:
  zh-CN: "22. 协程与Python中的多任务异步协程"
---

> This article was migrated from CSDN blog
> Original link: [22. Coroutines and Async Multi-task Programming in Python](https://blog.csdn.net/m0_59180666/article/details/128626343)
> 📊 625 views | 👍 6 likes | 💬 1 comment | ⭐ 10 favorites

**Table of Contents**

Introduction

Coroutine Concepts

Example Code

Writing Coroutine Programs in Python

Required Libraries

Writing Async Code

Improving Functions

Optimizing Code

Application in Web Scraping

Summary

* * *

### Introduction

This chapter introduces coroutines - processes that assist program execution. We'll cover the concept and its Python applications.

* * *

### Coroutine Concepts

A coroutine is not a process or thread - its execution is more like a subroutine or function call without return value.

A program can contain multiple coroutines, similar to how a process contains multiple threads. Unlike threads which are controlled by the system, coroutines control their own switching - the current coroutine decides when to switch to others.

Note: Coroutines switch context within the application without entering kernel for thread context switching.

Coroutines are mainly used when a process's CPU is sleeping or performing I/O operations, selectively switching to other tasks for efficiency. **Microscopically, tasks switch one by one, typically on I/O operations. Macroscopically, we see multiple tasks executing together (multi-task async operations).**

* * *

### Example Code

```python
import time

def func():
    print("I love dawn")
    time.sleep(3)  # Thread is blocked, CPU not working for us
    print("I really love dawn")

if __name__ == '__main__':
    func()
```

When a program encounters I/O operations, threads are typically blocked. Coroutines can selectively switch to other tasks when encountering I/O.

* * *

### Writing Coroutine Programs in Python

#### Required Libraries

```python
import asyncio

async def func():
    print("Hello, I'm Celia")

if __name__ == '__main__':
    g = func()  # Async coroutine function returns a coroutine object
    asyncio.run(g)  # Coroutine programs need asyncio module support
```

To write async programs, use the built-in asyncio library. Async functions can't run directly in main - they return coroutine objects. Use asyncio.run() to execute them.

#### Writing Async Code

```python
import asyncio
import time

async def func1():
    print("Hello, I'm Person1")
    time.sleep(3)  # Sync operation interrupts async!
    print("Hello, I'm Person1")

async def func2():
    print("Hello, I'm Person2")
    time.sleep(2)
    print("Hello, I'm Person2")

async def func3():
    print("Hello, I'm Person3")
    time.sleep(4)
    print("Hello, I'm Person3")

if __name__ == '__main__':
    tasks = [func1(), func2(), func3()]
    t1 = time.time()
    asyncio.run(asyncio.wait(tasks))  # Fixed pattern
    t2 = time.time()
    print(t2 - t1)
```

To execute multiple async tasks at once, put them in a list and use asyncio.run() with asyncio.wait().

Execution time is about 9 seconds (3+2+4) - same as sequential! The problem is time.sleep(). **When sync operations appear in async functions, async is interrupted.**

#### Improving Functions

```python
import asyncio
import time

async def func1():
    print("Hello, I'm Person1")
    await asyncio.sleep(3)  # Async sleep
    print("Hello, I'm Person1")

async def func2():
    print("Hello, I'm Person2")
    await asyncio.sleep(2)
    print("Hello, I'm Person2")

async def func3():
    print("Hello, I'm Person3")
    await asyncio.sleep(4)
    print("Hello, I'm Person3")

if __name__ == '__main__':
    tasks = [func1(), func2(), func3()]
    t1 = time.time()
    asyncio.run(asyncio.wait(tasks))
    t2 = time.time()
    print(t2 - t1)
```

Using async sleep, execution time is about 4 seconds (longest sleep + scheduling time).

#### Optimizing Code

```python
import time
import asyncio

async def func1():
    print("Hello, I'm Person1")
    await asyncio.sleep(3)
    print("Hello, I'm Person1")

async def func2():
    print("Hello, I'm Person2")
    await asyncio.sleep(2)
    print("Hello, I'm Person2")

async def func3():
    print("Hello, I'm Person3")
    await asyncio.sleep(4)
    print("Hello, I'm Person3")

async def main():
    # Recommended approach
    tasks = [
        asyncio.create_task(func1()),  # py3.8+ needs create_task()
        asyncio.create_task(func2()),
        asyncio.create_task(func3())
    ]
    await asyncio.wait(tasks)

if __name__ == '__main__':
    t1 = time.time()
    asyncio.run(main())
    t2 = time.time()
    print(t2 - t1)
```

![](/images/posts/22.-协程与Python中的多任务异步协程/d71926bfed35.png)

Works correctly!

* * *

### Application in Web Scraping

```python
import asyncio

async def download(url):
    print("Starting download")
    await asyncio.sleep(2)  # Simulates network request
    print("Download complete")

async def main():
    urls = [
        "http://www.baidu.com",
        "http://www.bilibili.com",
        "http://www.163.com"
    ]
    tasks = [asyncio.create_task(download(url)) for url in urls]
    await asyncio.wait(tasks)

if __name__ == '__main__':
    asyncio.run(main())
```

Sleep simulates network requests - this is a template for batch web requests.

![](/images/posts/22.-协程与Python中的多任务异步协程/463d0a99e218.png)

* * *

### Summary

Today we learned about coroutines and async scraping, understanding async advantages step by step to improve program efficiency.
