---
type: post
csdn: true
title: "24. Practical: Async Scraping a Complete Novel"
date: "2023-01-11"
lastmod: "2023-01-11"
authors:
  - admin
tags:
  - "web scraping"
  - "async scraping"
  - "asyncio"
  - "aiohttp"
  - "aiofiles"
  - "CSDN"
categories:
  - "Python Web Scraping Tutorial"
summary: "We've learned the async scraping framework and simple examples. This chapter consolidates async scraping through practice: scraping an entire novel."
image:
  filename: "covers/csdn-python-crawler.png"
  caption: "CSDN Archive · PYTHON · CRAWLER"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128649022"
csdn_views: 793
csdn_likes: 7
csdn_comments: 8
csdn_favorites: 8
---

> This article was migrated from CSDN blog
> Original link: [24. Practical: Async Scraping a Complete Novel](https://blog.csdn.net/m0_59180666/article/details/128649022)
> 📊 793 views | 👍 7 likes | 💬 8 comments | ⭐ 8 favorites


### Introduction

We've learned the async scraping framework and simple examples. This chapter consolidates async scraping through practice: scraping an entire novel.

* * *

### Objective

Efficiently scrape an entire novel using async scraping.

* * *

### Approach

1. Get novel content URLs
2. Fetch webpage data
3. Save locally

* * *

### Code Implementation

#### 1. Get Novel Content URL

![](/images/posts/24.-实战：用异步法获取完整的一部小说/013093aa699c.png)

Opening the webpage shows table of contents. Clicking chapters jumps to content. First check if data is in page source.

#### 2. Check Page Source

![](/images/posts/24.-实战：用异步法获取完整的一部小说/695bb5539228.png)

Source code is under 30 lines - our data isn't here. Time for F12 developer tools.

#### 3. Developer Tools

![](/images/posts/24.-实战：用异步法获取完整的一部小说/255bd7512ec9.png)

Switch to Network → Fetch/XHR → refresh to get three dynamic requests. Open getCatalog (get catalog), preview shows chapter names and IDs.

![](/images/posts/24.-实战：用异步法获取完整的一部小说/ecd1d750ec0e.png)

Switch to getChapterContent - text content found! Check headers for target URL and request method.

Request method: GET

#### 4. Start Coding

```python
"""
1. Sync operation: Access getCatalog to get all chapter cids and names
2. Async operation: Access getChapterContent to download all content
"""
```

The URL has encoded characters - "%22" is ASCII for double quotes. It contains URL parameters.

Framework:

```python
async def aiodownload(cid, b_id, title):
    pass

async def getCatalog(url):
    pass

if __name__ == '__main__':
    b_id = "4306063500"
    url = 'http://example.com/api/pc/getCatalog?data={"book_id":"' + b_id + '"}'
    asyncio.run(getCatalog(url))
```

#### 5. Complete getCatalog Function

```python
async def getCatalog(url):
    resp = requests.get(url)
    dic = resp.json()
    tasks = []
    for item in dic['data']['novel']['items']:
        title = item['title']
        cid = item['cid']
        tasks.append(aiodownload(cid, b_id, title))
    await asyncio.wait(tasks)
```

Convert response to JSON, extract title and cid, pass to aiodownload.

#### 6. Complete aiodownload Function

```python
async def aiodownload(cid, b_id, title):
    data = {
        "book_id": b_id,
        "cid": f"{b_id}|{cid}",
        "need_bookinfo": 1
    }
    data = json.dumps(data)
    url = f"http://example.com/api/pc/getChapterContent?data={data}"
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as resp:
            dic = await resp.json()
            chapter = dic['data']['novel']['chapter_index']
            async with aiofiles.open(f"./Novel/{chapter}_{title}", mode="w", encoding="GB18030") as f:
                await f.write(dic['data']['novel']['content'])
```

The URL needs book_id, cid, and need_bookinfo. Use json.dumps() to convert dict to string for URL. chapter_index provides numeric ordering for sorted filenames.

* * *

### Complete Code

```python
import requests
import asyncio
import aiohttp
import aiofiles
import json

async def aiodownload(cid, b_id, title):
    data = {
        "book_id": b_id,
        "cid": f"{b_id}|{cid}",
        "need_bookinfo": 1
    }
    data = json.dumps(data)
    url = f"http://example.com/api/pc/getChapterContent?data={data}"
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as resp:
            dic = await resp.json()
            chapter = dic['data']['novel']['chapter_index']
            async with aiofiles.open(f"./Novel/{chapter}_{title}", mode="w", encoding="GB18030") as f:
                await f.write(dic['data']['novel']['content'])

async def getCatalog(url):
    resp = requests.get(url)
    dic = resp.json()
    tasks = []
    for item in dic['data']['novel']['items']:
        title = item['title']
        cid = item['cid']
        tasks.append(aiodownload(cid, b_id, title))
    await asyncio.wait(tasks)

if __name__ == '__main__':
    b_id = "4306063500"
    url = 'http://example.com/api/pc/getCatalog?data={"book_id":"' + b_id + '"}'
    asyncio.run(getCatalog(url))
```

* * *

### Results

![](/images/posts/24.-实战：用异步法获取完整的一部小说/67c850ac2e99.png)

![](/images/posts/24.-实战：用异步法获取完整的一部小说/a820eab99f24.png)

* * *

### Summary

This chapter practiced async scraping by downloading an entire novel. Next, we'll learn video scraping (m3u8 format).
