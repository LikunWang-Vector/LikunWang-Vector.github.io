---
title: "25. Practical: Scraping Anime Video with XPath + Thread Pool"
date: 2023-01-15
updated: 2023-01-15
categories:
  - Python Web Scraping Tutorial
tags:
  - audio video
  - web scraping
  - thread pool
  - xpath
csdn_views: 447
csdn_likes: 5
csdn_comments: 3
csdn_favorites: 9
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128694344
cover: /images/posts/25.-实战：抓取《未闻花名》视频（xpath+线程池）/9bdef1a7a700.jpeg
lang_pair:
  zh-CN: "25. 实战：抓取《未闻花名》视频（xpath+线程池）"
---

> This article was migrated from CSDN blog
> Original link: [25. Practical: Scraping Anime Video with XPath + Thread Pool](https://blog.csdn.net/m0_59180666/article/details/128694344)
> 📊 447 views | 👍 5 likes | 💬 3 comments | ⭐ 9 favorites

**Table of Contents**

Introduction

Objective

Approach

Code Implementation

Complete Code

Results

Summary

* * *

### Introduction

We've learned many scraping methods. This chapter is comprehensive - scraping video from a website. We'll use "Anohana" anime as an example; other resources can be scraped by modifying the URL.

![](/images/posts/25.-实战：抓取《未闻花名》视频（xpath+线程池）/9bdef1a7a700.jpeg)

This chapter scrapes one episode; other episodes can be done with nested loops.

* * *

### Objective

Scrape anime episodes from a video website.

* * *

### Approach

#### How Video Websites Handle Video Resources

User upload → Transcoding (2K, 1080p, SD) → Slicing (split single file) → User drags progress bar to load nearby slices

#### How Is This Implemented?

A file records everything: M3U8. It records each slice (ts file) address.

M3U8 is UTF-8 encoded M3U file - essentially a playlist text file containing video segment URLs.

#### Core Tasks

1. Find m3u8 (various methods)
2. Download ts files via m3u8
3. Merge ts files into one mp4 file

#### Workflow

1. Get video page source code
2. Extract m3u8 URL from source
3. Download m3u8
4. Read m3u8 file, download video segments
5. Merge video

* * *

### Code Implementation

**Import Libraries**

```python
import requests
from lxml import etree
import json
import os
from concurrent.futures import ThreadPoolExecutor
```

**Access Page**

```python
headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36"
}
url = "target_url_here"
resp = requests.get(url, headers=headers)
```

**Find m3u8 in Source Code**

Search for m3u8 in source code - found url and next_url (current and next episode m3u8 addresses).

```python
html = etree.HTML(resp.text)
dic_str = html.xpath("/html/body/div[4]/div/script[1]/text()")[0].strip("var player_aaaa=")
dic = json.loads(dic_str)  # Convert string to dict
m3u8_url = dic.get('url')  # Get m3u8 address
```

Use xpath to grab script text content, convert to dict with json.loads(), then get the url value.

**Download m3u8 File**

```python
resp2 = requests.get(m3u8_url, headers=headers)
with open("anohana.m3u8", mode="wb") as f:
    f.write(resp2.content)
resp2.close()
print("Download complete")
```

**Get Domain for ts URLs**

```python
domain = m3u8_url.split("index")[0]  # Get main domain for ts file concatenation
```

**Download Video Segments**

```python
def download(url):
    resp3 = requests.get(domain + url)
    fp = open(f"anohana_video/{url}", mode="wb")
    fp.write(resp3.content)
    fp.close()
    resp3.close()
    print("Completed 1 segment")
```

**Parse m3u8 File**

```python
lst = []
with open("anohana.m3u8", mode="r", encoding="utf-8") as f:
    for line in f:
        line = line.strip()
        if line.startswith("#"):  # Skip lines starting with #
            continue
        else:
            lst.append(line)
```

Lines without "#" are addresses - add them to the list.

**Create Thread Pool**

With 600+ ts files, sequential download is slow. Use thread pool:

```python
with ThreadPoolExecutor(50) as t:
    for i in lst:
        t.submit(download, f"{i}")
print("Clear All")
```

**Merge Video**

```python
with open("anohana_video/anohana.mp4", "ab+") as fv:
    for file in os.listdir("anohana_video"):
        with open(f"anohana_video/{file}", "rb") as fvp:
            fv.write(fvp.read())
```

* * *

### Complete Code

```python
import os
import json
import requests
from lxml import etree
from concurrent.futures import ThreadPoolExecutor

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36"
}
url = "target_url_here"
resp = requests.get(url, headers=headers)

html = etree.HTML(resp.text)
dic_str = html.xpath("/html/body/div[4]/div/script[1]/text()")[0].strip("var player_aaaa=")
dic = json.loads(dic_str)
m3u8_url = dic.get('url')
domain = m3u8_url.split("index")[0]
resp.close()

# Download m3u8 file
resp2 = requests.get(m3u8_url, headers=headers)
with open("anohana.m3u8", mode="wb") as f:
    f.write(resp2.content)
resp2.close()
print("Download complete")

# Download video segments
def download(url):
    resp3 = requests.get(domain + url)
    fp = open(f"anohana_video/{url}", mode="wb")
    fp.write(resp3.content)
    fp.close()
    resp3.close()
    print("Completed 1 segment")

# Parse m3u8 file
lst = []
with open("anohana.m3u8", mode="r", encoding="utf-8") as f:
    for line in f:
        line = line.strip()
        if line.startswith("#"):
            continue
        else:
            lst.append(line)

# Create thread pool
with ThreadPoolExecutor(50) as t:
    for i in lst:
        t.submit(download, f"{i}")
print("Clear All")

# Merge video
with open("anohana_video/anohana.mp4", "ab+") as fv:
    for file in os.listdir("anohana_video"):
        with open(f"anohana_video/{file}", "rb") as fvp:
            fv.write(fvp.read())
```

* * *

### Results

![](/images/posts/25.-实战：抓取《未闻花名》视频（xpath+线程池）/85b2ab4767bc.png)

Segments downloaded and merged into complete video.

![](/images/posts/25.-实战：抓取《未闻花名》视频（xpath+线程池）/f2aedc778e9b.png)

* * *

### Summary

This comprehensive chapter used multiple techniques to scrape anime video - good practice for beginners involving multiple modules.
