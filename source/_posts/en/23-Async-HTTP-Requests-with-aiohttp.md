---
title: "23. Async HTTP Requests with aiohttp Module"
date: 2023-01-11
updated: 2023-01-11
categories:
  - Python Web Scraping Tutorial
tags:
  - web scraping
  - python
  - async HTTP requests
  - aiohttp
  - asyncio
csdn_views: 463
csdn_likes: 5
csdn_comments: 2
csdn_favorites: 7
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128640512
cover: /images/posts/23.-异步HTTP请求与aiohttp模块/c16b2ea9d2e3.png
lang_pair:
  zh-CN: "23. 异步HTTP请求与aiohttp模块"
---

> This article was migrated from CSDN blog
> Original link: [23. Async HTTP Requests with aiohttp Module](https://blog.csdn.net/m0_59180666/article/details/128640512)
> 📊 463 views | 👍 5 likes | 💬 2 comments | ⭐ 7 favorites

**Table of Contents**

Introduction

aiohttp Overview

Installation

Application

Complete Code

Results

Summary

* * *

### Introduction

In the previous chapter, we found that time.sleep() isn't async, preventing our async functions from executing asynchronously. Actually, the requests module's network functions (get(), post(), etc.) aren't async either. To do async scraping and network requests, we need async HTTP requests.

How do we implement async HTTP requests in Python? That's where aiohttp comes in.

* * *

### aiohttp Overview

`asyncio` enables single-threaded concurrent I/O operations. Its power is limited on the client side, but on the server side (like web servers), since HTTP connections are I/O operations, single-thread + coroutines can support high concurrency for multiple users.

`asyncio` implements TCP, UDP, SSL protocols, while `aiohttp` is an HTTP framework built on `asyncio`.

* * *

### Installation

```python
pip install aiohttp
```

* * *

### Application

Let's use an example to demonstrate async HTTP usage.

Suppose we have a batch of image URLs to scrape.

#### Import Libraries

```python
import asyncio
import aiohttp
```

Async HTTP requests require async I/O since network requests are I/O operations.

#### Batch URLs

```python
urls = [
    "http://example.com/image1.jpg",
    "http://example.com/image2.jpg",
    "http://example.com/image3.jpg"
]
```

#### Template from Previous Chapter

```python
async def aiodownload(url):
    # TODO: Complete single page download task
    pass

async def main():
    tasks = []
    for url in urls:
        d = asyncio.create_task(aiodownload(url))
        tasks.append(d)
    await asyncio.wait(tasks)

if __name__ == '__main__':
    asyncio.run(main())
```

#### Complete Single Page Download Code

```python
async def aiodownload(url):
    # Send request
    # Get image content
    # Save to file
    name = url.rsplit("/", 1)[1]  # Split from right once, get [1] position
    async with aiohttp.ClientSession() as session:  # Like requests
        async with session.get(url) as resp:  # resp = requests.get()
            # Request returned, write to file
            # Can also learn aiofiles module
            with open(f"./aiohttp_img/{name}", mode="wb") as f:
                f.write(await resp.content.read())  # Reading is async, needs await
    print(name, "Complete!")
```

- Extract image name from URL's last segment via slicing
- Create async client session (similar to requests module)
- Async request data and write to file - note async reading with await, otherwise async fails

* * *

### Complete Code

```python
# requests.get() is sync -> async operation with aiohttp
# pip install aiohttp

import asyncio
import aiohttp

urls = [
    "http://example.com/image1.jpg",
    "http://example.com/image2.jpg",
    "http://example.com/image3.jpg"
]

async def aiodownload(url):
    name = url.rsplit("/", 1)[1]
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as resp:
            with open(f"./aiohttp_img/{name}", mode="wb") as f:
                f.write(await resp.content.read())
    print(name, "Complete!")

async def main():
    tasks = []
    for url in urls:
        tasks.append(aiodownload(url))
    await asyncio.wait(tasks)

if __name__ == '__main__':
    asyncio.run(main())
```

* * *

### Results

![](/images/posts/23.-异步HTTP请求与aiohttp模块/c16b2ea9d2e3.png)

![](/images/posts/23.-异步HTTP请求与aiohttp模块/db2f9fbdfdce.png)

* * *

### Summary

This chapter introduced async HTTP requests using the aiohttp library. Through a simple example, we practiced async HTTP requests with extremely high efficiency - all three URLs saved locally in the blink of an eye.
