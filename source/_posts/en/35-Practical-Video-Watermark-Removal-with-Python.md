---
title: "35. Practical: Video Watermark Removal with Python"
date: 2023-01-31
updated: 2023-01-31
categories:
  - Python Web Scraping from Beginner to Pro
tags:
  - video
  - python
  - programming
  - beginner-project
cover: /images/posts/35.-实战：Python实现视频去水印（文末源码）/c0a97a1158f5.png
lang_pair:
  zh-CN: "35. 实战：Python实现视频去水印（文末源码）"
---

> This article is translated from my CSDN blog
> Original link: [35. 实战：Python实现视频去水印](https://blog.csdn.net/m0_59180666/article/details/128818460)
> 📊 10706 views | 👍 19 likes | 💬 21 comments | ⭐ 69 favorites

**Table of Contents**

Introduction

Objective

Approach

Code Implementation

1. Request URL and view source code
2. If not in source, use packet capture tools
3. Get video source link and trace its origin
4. Get data and write binary to local file

Complete Source Code

Results

Summary

---

### Introduction

When browsing short video platforms, sometimes we want to save videos locally, but downloads aren't available, or we want to save them as wallpapers but they have watermarks - frustrating!

Let's write a small program to implement watermark removal.

---

### Objective

Given a URL, implement downloading videos without watermarks.

---

### Approach

1. Request URL and view source code
2. If not in source, use packet capture tools
3. Get video source link and trace its origin
4. Get data and write binary to local file

---

### Code Implementation

#### 1. Request URL and view source code

Request the main page, inspect elements, check if the video is in the source code - it's not.

Of course, requesting the URL requires proper headers:

```python
url = 'https://www.example.com/video/12345'
headers = {
    'cookie': 'your_cookie_here',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36'
}
resp = requests.get(url=url, headers=headers)
```

**The most important are Cookie and User-Agent**

#### 2. If not in source, use packet capture tools

Open Network tab, filter by Media type to find video resources. Copy the video URL and search globally to find its source.

#### 3. Get video source link and trace its origin

Search in the page source to find where the video URL comes from. Usually it's embedded in a script tag with JSON data.

#### 4. Get data and write binary to local file

Use regex to extract the video title for the filename.

Use regex to capture video info from the script section, URL decode it, and pretty print the dictionary.

Find the pattern and locate the exact position of the video URL layer by layer.

```python
# Regex to extract title
obj = re.compile(r"<span><span><span><span>(?P<title>.*?)</span></span></span></span>", re.S)
title = obj.search(resp.text).group("title")

# Regex to extract video info
info = re.findall('<script id="RENDER_DATA" type="application/json">(.*?)</script', resp.text)[0]

# URL decode
html_data = urllib.parse.unquote(info)
html_data = json.loads(html_data)

# Dictionary traversal to get video playback link
video_url = 'https:' + html_data['41']['aweme']['detail']['video']['bitRateList'][0]['playAddr'][0]['src']
print(video_url)
```

Finally, save the video:

```python
# Get video binary data
video_content = requests.get(url=video_url, headers=headers).content

# Save video
if not os.path.exists('./video_downloads'):
    os.mkdir('./video_downloads')
with open('./video_downloads/' + title + '.mp4', mode='wb') as f:
    f.write(video_content)
```

---

### Complete Source Code

```python
import requests
import re
import json
import urllib
from urllib import parse
import os
from pprint import pprint

"""
Standard approach to find video resources:
Go to Network --> Media to capture packets and get the address
Then search globally for the URL source
"""

url = 'https://www.example.com/video/12345'
headers = {
    'cookie': 'your_cookie_here',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}
resp = requests.get(url=url, headers=headers)

# Regex to extract title
obj = re.compile(r"<span><span><span><span>(?P<title>.*?)</span></span></span></span>", re.S)
title = obj.search(resp.text).group("title")

# Regex to extract video info
info = re.findall('<script id="RENDER_DATA" type="application/json">(.*?)</script', resp.text)[0]

# URL decode
html_data = urllib.parse.unquote(info)
html_data = json.loads(html_data)

# Dictionary traversal to get video playback link
video_url = 'https:' + html_data['41']['aweme']['detail']['video']['bitRateList'][0]['playAddr'][0]['src']
print(video_url)

# Get video binary data
video_content = requests.get(url=video_url, headers=headers).content

# Save video
if not os.path.exists('./video_downloads'):
    os.mkdir('./video_downloads')
with open('./video_downloads/' + title + '.mp4', mode='wb') as f:
    f.write(video_content)
```

---

### Results

After running, the program outputs the video direct link and saves the video to the specified local folder - without watermarks!

---

### Summary

This section practiced the watermark removal process for a short video platform. It's comprehensive and suitable for consolidating web scraping fundamentals.
