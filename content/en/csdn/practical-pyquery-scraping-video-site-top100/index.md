---
type: post
csdn: true
title: "31. Practical: PyQuery Scraping Video Site Top 100 Rankings"
date: "2023-01-26"
lastmod: "2023-01-26"
authors:
  - admin
tags:
  - "python"
  - "programming"
  - "pyquery"
  - "data-analysis"
  - "CSDN"
categories:
  - "Python Web Scraping from Beginner to Pro"
summary: "In the previous section, we learned PyQuery syntax. This section is a practical exercise where we scrape a video site's trending rankings."
image:
  filename: "covers/csdn-python-crawler.png"
  caption: "CSDN Archive · PYTHON · CRAWLER"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128764511"
csdn_views: 784
csdn_likes: 1
csdn_comments: 2
csdn_favorites: 1
---

> This article was migrated from my [CSDN blog](https://blog.csdn.net/m0_59180666).
> Original: [31. Practical: PyQuery Scraping Video Site Top 100 Rankings](https://blog.csdn.net/m0_59180666/article/details/128764511)
> 📊 784 views | 👍 1 likes | 💬 2 comments | ⭐ 1 favorites

> This article is translated from my CSDN blog
> Original link: [31. 实战：PyQuery获取小电视Top100详细信息](https://blog.csdn.net/m0_59180666/article/details/128764511)
> 📊 784 views | 👍 1 like | 💬 2 comments | ⭐ 1 favorite


### Introduction

In the previous section, we learned PyQuery syntax. This section is a practical exercise where we scrape a video site's trending rankings.

> Libraries used: openpyxl, **requests**, (logging), **PyQuery**

---

### Objective

Scrape detailed information from a video site's trending rankings (including **Top 100 rankings, video titles, links, view counts, comment counts, and uploader names**) and save to a file.

---

### Approach

1. Create xlsx file with openpyxl library for saving information
2. Set up request headers and access target URL
3. Initialize PyQuery with response text
4. Iterate through rank-list li nodes to extract detailed information
5. Write to file

---

### Code Implementation

#### 1. Create xlsx file with openpyxl

Import packages:

```python
from pyquery import PyQuery as pq
import requests
import logging
import openpyxl
```

Initialize worksheet:

```python
wb = openpyxl.Workbook()  # Initialize workbook object
sheet = wb.active  # Get active worksheet

# Add column headers
sheet.append(['rank', 'title', 'link', 'play_count', 'comment_count', 'creator'])

# Configure logging output
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s: %(message)s')
```

We also added logging configuration to display what information is being recorded in the console, making it easier to debug.

#### 2. Set up request headers and access target URL

```python
# Set up request headers
headers = {
    "Origin": "https://example.com",
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/22.0.1207.1 Safari/537.1"
}

# Target URL
url = 'https://example.com/ranking'
resp = requests.get(url, headers=headers).text
```

#### 3. Initialize PyQuery with response text

```python
# Pass request response text to PyQuery for initialization
doc = pq(resp)
```

#### 4. Iterate through rank-list li nodes

(Found by examining the page source code. If you're unfamiliar, refer to previous practical articles in this series)

```python
# Get all li node content under class=rank-list
# Iterate through li nodes
con1 = doc('.rank-list li')
for item in con1.items():
    rank = item('.num').text()  # Ranking
    title = item('.content .info a:first-child').text()  # Video title
    link = 'https:' + item('.content .info a').attr('href')  # Video link
    creator, play_count, comment_count = item('.content .info .detail span').text().split(' ')
```

#### 5. Write to file

```python
    sheet.append([rank, title, link, play_count, comment_count, creator])
    logging.info([rank, title, link, play_count, comment_count, creator])

wb.save(filename='Rank_data.xlsx')
```

Add rows and output logs.

---

### Complete Code

```python
from pyquery import PyQuery as pq
import requests
import logging
import openpyxl

wb = openpyxl.Workbook()  # Initialize workbook object
sheet = wb.active  # Get active worksheet

# Add column headers
sheet.append(['rank', 'title', 'link', 'play_count', 'comment_count', 'creator'])

# Configure logging output
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s: %(message)s')

# Set up request headers
headers = {
    "Origin": "https://example.com",
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/22.0.1207.1 Safari/537.1"
}

# Target URL
url = 'https://example.com/ranking'

# Pass request response text to PyQuery for initialization
resp = requests.get(url, headers=headers).text
doc = pq(resp)

# Get all li node content under class=rank-list
# Iterate through li nodes
con1 = doc('.rank-list li')
for item in con1.items():
    rank = item('.num').text()  # Ranking
    title = item('.content .info a:first-child').text()  # Video title
    link = 'https:' + item('.content .info a').attr('href')  # Video link
    creator, play_count, comment_count = item('.content .info .detail span').text().split(' ')
    
    sheet.append([rank, title, link, play_count, comment_count, creator])
    logging.info([rank, title, link, play_count, comment_count, creator])

wb.save(filename='Rank_data.xlsx')
```

---

### Results

The console successfully outputs log information and saves the Top 100 rankings including rank, video title, link, view count, comment count, and uploader name to an xlsx file.

---

### Summary

In this section, we practiced with PyQuery and implemented scraping detailed information from a video site's Top 100 rankings.
