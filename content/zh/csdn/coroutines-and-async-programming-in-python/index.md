---
type: post
csdn: true
title: "22. 协程与Python中的多任务异步协程"
date: "2023-01-10"
lastmod: "2023-01-10"
authors:
  - admin
tags:
  - "python"
  - "开发语言"
  - "异步"
  - "协程"
  - "CSDN"
categories:
  - "Python爬虫入门、进阶与实战"
summary: "本节我们介绍一个新概念：协程。协程顾名思义，是协助执行程序的过程。我们将介绍协程的概念和其在Python中的应用。"
image:
  filename: "covers/csdn-python-crawler.png"
  caption: "CSDN Archive · PYTHON · CRAWLER"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128626343"
csdn_views: 625
csdn_likes: 6
csdn_comments: 1
csdn_favorites: 10
---

> 本文迁移自CSDN博客
> 原文链接：[22. 协程与Python中的多任务异步协程](https://blog.csdn.net/m0_59180666/article/details/128626343)
> 📊 625 阅读 | 👍 6 点赞 | 💬 1 评论 | ⭐ 10 收藏


### 前言

本节我们介绍一个新概念：协程。协程顾名思义，是协助执行程序的过程。我们将介绍协程的概念和其在Python中的应用。

* * *

### 协程概念

百度百科（协程）：

> 协程不是进程或线程，其执行过程更类似于子例程，或者说不带返回值的[函数调用](https://baike.baidu.com/item/%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8/4127405?fromModule=lemma_inlink "函数调用")。
> 
> 一个程序可以包含多个协程，可以对比与一个进程包含多个线程，因而下面我们来比较协程和线程。我们知道多个线程相对独立，有自己的上下文，切换受[系统控制](https://baike.baidu.com/item/%E7%B3%BB%E7%BB%9F%E6%8E%A7%E5%88%B6/16142297?fromModule=lemma_inlink "系统控制")；而协程也相对独立，有自己的上下文，但是其切换由自己控制，由当前协程切换到其他协程由当前协程来控制。

注意，协程是应用程序内部切换上下文，不会进入内核进行线程上下文切换。

协程主要用于某一进程CPU调用睡眠时或者进行I/O操作时，选择性地切换到其他任务，从而提高效率。**在微观上是一个任务一个任务的进行切换，切换条件一般就是IO操作。在宏观上，我们能看到的其实是多个任务一起在执行（多任务异步操作）**

* * *

### 示例代码

```python
import time


def func():
    print("我爱黎明")
    time.sleep(3)  # 让当前的线程处于阻塞状态. CPU是不为我工作的
    print("我真的爱黎明")


if __name__ == '__main__':
    func()

"""
# input() 程序也是处于阻塞状态
# requests.get(bilibili) 在网络请求返回数据之前, 程序也是处于阻塞状态的
# 一般情况下, 当程序处于 IO操作的时候. 线程都会处于阻塞状态

# 协程: 当程序遇见了IO操作的时候. 可以选择性的切换到其他任务上.
# 在微观上是一个任务一个任务的进行切换. 切换条件一般就是IO操作
# 在宏观上,我们能看到的其实是多个任务一起在执行
# 多任务异步操作

# 上方所讲的一切. 都是在单线程的条件下
"""
```

* * *

### Python编写协程程序

#### 要用到的库函数

```python
# python编写协程的程序
import asyncio


async def func():
    print("你好啊, 我叫赛利亚")


if __name__ == '__main__':
    g = func()  # 此时的函数是异步协程函数. 此时函数执行得到的是一个协程对象
    # print(g)
    asyncio.run(g)  # 协程程序运行需要asyncio模块的支持
```

要编写异步程序，要用到asyncio这个库，它是Python自带的，直接导入就可以。我们写一个异步函数，它不能在主函数中直接运行，会抛出Error，因为它直接运行返回的是一个协程对象。我们必须用asyncio的run函数才能运行。

#### 尝试编写异步

```python
import asyncio
import time

async def func1():
    print("你好啊, 我叫李诞")
    time.sleep(3)  # 当程序出现了同步操作的时候. 异步就中断了
    print("你好啊, 我叫李诞")


async def func2():
    print("你好啊, 我叫王建国")
    time.sleep(2)
    print("你好啊, 我叫王建国")


async def func3():
    print("你好啊, 我叫李雪琴")
    time.sleep(4)
    print("你好啊, 我叫李雪琴")


if __name__ == '__main__':
    f1 = func1()
    f2 = func2()
    f3 = func3()
    tasks = [
        f1, f2, f3
    ]
    t1 = time.time()
    # 一次性启动多个任务(协程)
    asyncio.run(asyncio.wait(tasks))    # 固定搭配
    t2 = time.time()
    print(t2 - t1)
```

我们想一次性执行多个异步任务时，需要把它们放在列表中，并且用asyncio的run函数中嵌套wait函数才能实现，它是固定搭配，可以套公式。

打印程序执行时间，发现此时执行时间和串行执行的速度差不多——也是9秒多

**（打印数据时间+3+2+4）秒** 。

问题出在time.sleep()。**当异步函数中出现同步操作时，异步就中断了** ，所以还是在等待睡眠时间中CPU什么都没有执行。

#### 尝试改进函数

```python
import asyncio
import time

async def func1():
    print("你好啊, 我叫李诞")
    # time.sleep(3)  # 当程序出现了同步操作的时候. 异步就中断了
    await asyncio.sleep(3)  # 异步操作的代码
    print("你好啊, 我叫李诞")


async def func2():
    print("你好啊, 我叫王建国")
    # time.sleep(2)
    await asyncio.sleep(2)
    print("你好啊, 我叫王建国")


async def func3():
    print("你好啊, 我叫李雪琴")
    # time.sleep(4)
    await asyncio.sleep(4)
    print("你好啊, 我叫李雪琴")


if __name__ == '__main__':
    f1 = func1()
    f2 = func2()
    f3 = func3()
    tasks = [
        f1, f2, f3
    ]
    t1 = time.time()
    # 一次性启动多个任务(协程)
    asyncio.run(asyncio.wait(tasks))
    t2 = time.time()
    print(t2 - t1)
```

我们将睡眠操作改为异步，尝试执行，打印执行时间为4秒多**（最长的睡眠时间+调度时间）**

但我们这样并不是最理想化的代码，我们将其进行优化：

#### 尝试优化代码

```python
import time
import asyncio

async def func1():
    print("你好啊, 我叫李诞")
    await asyncio.sleep(3)
    print("你好啊, 我叫李诞")


async def func2():
    print("你好啊, 我叫王建国")
    await asyncio.sleep(2)
    print("你好啊, 我叫王建国")


async def func3():
    print("你好啊, 我叫李雪琴")
    await asyncio.sleep(4)
    print("你好啊, 我叫李雪琴")


async def main():
    # 第一种写法
    # f1 = func1()
    # await f1  # 一般await挂起操作放在协程对象前面
    # 第二种写法(推荐)
    tasks = [
        asyncio.create_task(func1()),  # py3.8以后加上asyncio.create_task()
        asyncio.create_task(func2()),
        asyncio.create_task(func3())
    ]
    await asyncio.wait(tasks)


if __name__ == '__main__':
    t1 = time.time()
    # 一次性启动多个任务(协程)
    asyncio.run(main())
    t2 = time.time()
    print(t2 - t1)
```

这里还是推荐把函数放在tasks列表中，然后在main异步函数中异步执行异步函数列表，然后在主程序中调用main异步函数。我们依旧输出运行时间，查看是否成功异步运行：

![](/images/posts/22.-协程与Python中的多任务异步协程/d71926bfed35.png)

可以看到是没问题的。

* * *

### 在爬虫领域的应用 

```python
import asyncio

# 在爬虫领域的应用
async def download(url):
    print("准备开始下载")
    await asyncio.sleep(2)  # 网络请求  requests.get()
    print("下载完成")


async def main():
    urls = [
        "http://www.baidu.com",
        "http://www.bilibili.com",
        "http://www.163.com"
    ]

    # 准备异步协程对象列表
    tasks = []
    for url in urls:
        d = asyncio.create_task(download(url))
        tasks.append(d)

    # tasks = [asyncio.create_task(download(url)) for url in urls]  # 这么干也行哦~

    # 一次性把所有任务都执行
    await asyncio.wait(tasks)

if __name__ == '__main__':
    asyncio.run(main())
```

这里用睡眠代替了网络请求操作，相当于一个模板，以后要批量请求网页的时候可以套用。

运行结果：

![](/images/posts/22.-协程与Python中的多任务异步协程/463d0a99e218.png)

* * *

完整代码

**调试请自行修改注释部分**

```python
# import time
#
#
# def func():
#     print("我爱黎明")
#     time.sleep(3)  # 让当前的线程处于阻塞状态. CPU是不为我工作的
#     print("我真的爱黎明")
#
#
# if __name__ == '__main__':
#     func()
#
# """
# # input() 程序也是处于阻塞状态
# # requests.get(bilibili) 在网络请求返回数据之前, 程序也是处于阻塞状态的
# # 一般情况下, 当程序处于 IO操作的时候. 线程都会处于阻塞状态
#
# # 协程: 当程序遇见了IO操作的时候. 可以选择性的切换到其他任务上.
# # 在微观上是一个任务一个任务的进行切换. 切换条件一般就是IO操作
# # 在宏观上,我们能看到的其实是多个任务一起在执行
# # 多任务异步操作
#
# # 上方所讲的一切. 都是在单线程的条件下
# """


# python编写协程的程序
import asyncio
import time


# async def func():
#     print("你好啊, 我叫赛利亚")
#
#
# if __name__ == '__main__':
#     g = func()  # 此时的函数是异步协程函数. 此时函数执行得到的是一个协程对象
#     # print(g)
#     asyncio.run(g)  # 协程程序运行需要asyncio模块的支持


# async def func1():
#     print("你好啊, 我叫李诞")
#     # time.sleep(3)  # 当程序出现了同步操作的时候. 异步就中断了
#     await asyncio.sleep(3)  # 异步操作的代码
#     print("你好啊, 我叫李诞")
#
#
# async def func2():
#     print("你好啊, 我叫王建国")
#     # time.sleep(2)
#     await asyncio.sleep(2)
#     print("你好啊, 我叫王建国")
#
#
# async def func3():
#     print("你好啊, 我叫李雪琴")
#     await asyncio.sleep(4)
#     print("你好啊, 我叫李雪琴")
#
#
# if __name__ == '__main__':
#     f1 = func1()
#     f2 = func2()
#     f3 = func3()
#     tasks = [
#         f1, f2, f3
#     ]
#     t1 = time.time()
#     # 一次性启动多个任务(协程)
#     asyncio.run(asyncio.wait(tasks))
#     t2 = time.time()
#     print(t2 - t1)


# async def func1():
#     print("你好啊, 我叫李诞")
#     await asyncio.sleep(3)
#     print("你好啊, 我叫李诞")
#
#
# async def func2():
#     print("你好啊, 我叫王建国")
#     await asyncio.sleep(2)
#     print("你好啊, 我叫王建国")
#
#
# async def func3():
#     print("你好啊, 我叫李雪琴")
#     await asyncio.sleep(4)
#     print("你好啊, 我叫李雪琴")
#
#
# async def main():
#     # 第一种写法
#     # f1 = func1()
#     # await f1  # 一般await挂起操作放在协程对象前面
#     # 第二种写法(推荐)
#     tasks = [
#         asyncio.create_task(func1()),  # py3.8以后加上asyncio.create_task()
#         asyncio.create_task(func2()),
#         asyncio.create_task(func3())
#     ]
#     await asyncio.wait(tasks)
#
#
# if __name__ == '__main__':
#     t1 = time.time()
#     # 一次性启动多个任务(协程)
#     asyncio.run(main())
#     t2 = time.time()
#     print(t2 - t1)

# 在爬虫领域的应用
async def download(url):
    print("准备开始下载")
    await asyncio.sleep(2)  # 网络请求  requests.get()
    print("下载完成")


async def main():
    urls = [
        "http://www.baidu.com",
        "http://www.bilibili.com",
        "http://www.163.com"
    ]

    # 准备异步协程对象列表
    tasks = []
    for url in urls:
        d = asyncio.create_task(download(url))
        tasks.append(d)

    # tasks = [asyncio.create_task(download(url)) for url in urls]  # 这么干也行哦~

    # 一次性把所有任务都执行
    await asyncio.wait(tasks)

if __name__ == '__main__':
    asyncio.run(main())
```

* * *

### 总结

我们今天认识了协程和异步爬虫，一步步逐步认识了异步的优点，进一步提高了我们的程序效率。
