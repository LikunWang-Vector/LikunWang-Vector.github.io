---
title: "21. Practical: Multithreading + XPath for Bulk Vegetable Price Scraping (Four Methods)"
date: 2023-01-08
updated: 2023-01-08
categories:
  - Python Web Scraping Tutorial
tags:
  - web scraping
  - python
  - data analysis
csdn_views: 452
csdn_likes: 4
csdn_comments: 2
csdn_favorites: 6
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128600206
cover: /images/posts/21.-实战：多线程+xpath抓取大量菜价信息（四种方法）/d0d623aba268.png
lang_pair:
  zh-CN: "21. 实战：多线程+xpath抓取大量菜价信息（四种方法）"
---

> This article was migrated from CSDN blog
> Original link: [21. Practical: Multithreading + XPath for Bulk Vegetable Price Scraping](https://blog.csdn.net/m0_59180666/article/details/128600206)
> 📊 452 views | 👍 4 likes | 💬 2 comments | ⭐ 6 favorites

**Table of Contents**

Introduction

Objective

Approach

Code Implementation (Multithreading + XPath)

1. Scrape Single Page

2. Create Thread Pool

3. Save to File

Results

Complete Code

Variations

Summary

* * *

### Introduction

We've learned how multithreading and multiprocessing improve efficiency. Now let's try bulk scraping vegetable price information from a website we've worked with before.

* * *

### Objective

Use multithreading to bulk scrape vegetable price information.

* * *

### Approach

1. Implement function to scrape single page
2. Create thread pool to batch execute the function
3. Write to file

**Note: I'll detail the multithreading method, then show multiprocessing, using both bs4 and xpath for parsing.**

* * *

### Code Implementation (Multithreading + XPath)

#### 1. Scrape Single Page

![](/images/posts/21.-实战：多线程+xpath抓取大量菜价信息（四种方法）/d0d623aba268.png)

Inspect element and copy xpath as before:

```python
def download_one_page(url):
    resp = requests.get(url, headers=ua)
    html = etree.HTML(resp.text)
    table_body = html.xpath("/html/body/div/div[4]/div/div[2]/div[2]/table/tbody")[0]
    trs = table_body.xpath("./tr")
    for tr in trs:
        txt = tr.xpath("./td/text()")
        csvwriter.writerow(txt)
    print(url, "extraction complete!")
```

#### 2. Create Thread Pool

```python
if __name__ == '__main__':
    with ThreadPoolExecutor(50) as t:
        for i in range(1, 200):
            t.submit(download_one_page, f"http://target_url/import/list-1_{i}.html")
    f.close()
    print("All downloads complete!")
```

Here I only scrape 200 pages - change the number for more.

#### 3. Save to File

```python
f = open("4_price_data.csv", mode="w", encoding="utf-8", newline="")
csvwriter = csv.writer(f)
```

* * *

### Results

![](/images/posts/21.-实战：多线程+xpath抓取大量菜价信息（四种方法）/1f3e425e85e3.png)

Extraction speed is very fast!

* * *

### Complete Code

```python
import requests
from lxml import etree
import csv
from concurrent.futures import ThreadPoolExecutor

f = open("4_price_data.csv", mode="w", encoding="utf-8", newline="")
csvwriter = csv.writer(f)

ua = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
}

def download_one_page(url):
    resp = requests.get(url, headers=ua)
    html = etree.HTML(resp.text)
    table_body = html.xpath("/html/body/div/div[4]/div/div[2]/div[2]/table/tbody")[0]
    trs = table_body.xpath("./tr")
    for tr in trs:
        txt = tr.xpath("./td/text()")
        csvwriter.writerow(txt)
    print(url, "extraction complete!")

if __name__ == '__main__':
    with ThreadPoolExecutor(50) as t:
        for i in range(1, 200):
            t.submit(download_one_page, f"http://target_url/import/list-1_{i}.html")
    f.close()
    print("All downloads complete!")
```

* * *

### Variations

#### Multiprocessing + XPath

Simply change `ThreadPoolExecutor` to `ProcessPoolExecutor`.

#### Multithreading + bs4

```python
from bs4 import BeautifulSoup
from concurrent.futures import ThreadPoolExecutor

def download_one_page(url):
    resp = requests.get(url)
    page = BeautifulSoup(resp.text, "html.parser")
    table = page.find("table", attrs={"class": "price-table"})
    trs = table.find_all("tr")[1:]
    for tr in trs:
        tds = tr.find_all("td")
        name = tds[0].text
        place = tds[1].text
        avg_price = tds[2].text
        spec = tds[3].text
        date = tds[4].text
        csvwriter.writerow([name, place, avg_price, spec, date])
    print(url, "extraction complete!")
```

#### Multiprocessing + bs4

Same as above but with `ProcessPoolExecutor`.

* * *

### Summary

Today we practiced bulk scraping vegetable prices, applying bs4, xpath, thread pools, and process pools.
