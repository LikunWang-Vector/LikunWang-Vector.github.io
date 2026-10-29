---
type: post
csdn: true
title: "19. Multithreading and Multiprocessing"
date: "2023-01-05"
lastmod: "2023-01-05"
authors:
  - admin
tags:
  - "python"
  - "programming"
  - "web scraping"
  - "data analysis"
  - "web crawler"
  - "CSDN"
categories:
  - "Python Web Scraping Tutorial"
summary: "First, let's introduce basic concepts:"
image:
  filename: "covers/csdn-python-crawler.png"
  caption: "CSDN Archive · PYTHON · CRAWLER"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128562553"
csdn_views: 184
csdn_likes: 2
csdn_comments: 1
csdn_favorites: 4
---

> This article was migrated from CSDN blog
> Original link: [19. Multithreading and Multiprocessing](https://blog.csdn.net/m0_59180666/article/details/128562553)
> 📊 184 views | 👍 2 likes | 💬 1 comment | ⭐ 4 favorites


### Introduction

First, let's introduce basic concepts:

![](/images/posts/19.-多线程与多进程/ee87aaef5a99.png)

A process is a resource unit, while a thread is an execution unit. A process contains at least one thread.

Every process starts with a default main thread.

In Python, multithreading is implemented through the Thread class, and multiprocessing through the Process class.

* * *

### Single Thread vs Multithreading

#### Single Thread Example

```python
def func():
    for i in range(1000):
        print("func", i)

if __name__ == '__main__':
    func()
    for i in range(1000):
        print("main", i)
```

Calling a function is still single-threaded - it executes func first, then the main loop.

Execution result:

![](/images/posts/19.-多线程与多进程/31e811215c92.png)

#### Multithreading Example with Thread Class

```python
from threading import Thread

def func():
    for i in range(1000):
        print("func", i)

if __name__ == '__main__':
    t = Thread(target=func)  # Create thread and assign task
    t.start()  # Set thread to ready state, CPU decides execution time
    for i in range(1000):
        print("main", i)
```

We create a thread using the Thread class in main, then start it. Scheduling is handled by the CPU.

Execution result:

![](/images/posts/19.-多线程与多进程/4975d71dc218.png)

Output shows func and main mixed together, proving both threads execute simultaneously.

#### Subclass Inheritance Approach

```python
from threading import Thread

class MyThread(Thread):
    def run(self):  # Fixed name -> when thread executes, run() is called
        for i in range(1000):
            print("child thread", i)

if __name__ == '__main__':
    t = MyThread()
    # t.run()  # Method call -> single thread!
    t.start()  # Start thread
    for i in range(1000):
        print("main thread", i)
```

The subclass inherits Thread properties with a run function that executes when the thread starts. Don't use run() directly - that becomes a method call (single-threaded).

Execution result:

![](/images/posts/19.-多线程与多进程/4d3cb813114b.png)

Main and child threads run simultaneously.

We can also define multiple threads with parameters for identification:

```python
from threading import Thread

def func(name):
    for i in range(1000):
        print(name, i)

if __name__ == '__main__':
    t1 = Thread(target=func, args=("Alice",))  # args must be tuple
    t1.start()
    t2 = Thread(target=func, args=("Bob",))
    t2.start()
```

Two child threads with different names for distinction. Note: args must be a tuple.

Execution result:

![](/images/posts/19.-多线程与多进程/807da55bcaaa.png)

Output successfully distinguishes between the two child threads.

* * *

### Multiprocessing

Multiprocessing syntax in Python is similar to multithreading, but the underlying logic differs significantly. Multiprocessing has much higher CPU overhead than multithreading, so multithreading is more commonly used.

```python
from multiprocessing import Process

def func():
    for i in range(1000):
        print("child process", i)

if __name__ == '__main__':
    p = Process(target=func)
    p.start()
    for i in range(1000):
        print("main process", i)
```

Besides different imports and API calls, the approach is identical.

Execution result:

![](/images/posts/19.-多线程与多进程/51ea85d9a8c5.png)

Also shows parallel output with similar effect.

* * *

### Summary

Today we learned thread and process concepts, how to use Python's Thread class for multithreading and Process class for multiprocessing, with simple examples to deepen understanding.
