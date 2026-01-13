---
title: "10. Supplementary Example: Scraping Dynamic JS Vegetable Price Pages"
date: 2022-12-31
updated: 2022-12-31
categories:
  - Python Web Scraping Tutorial
tags:
  - web scraping
  - python
  - programming
  - html
  - data analysis
csdn_views: 301
csdn_likes: 4
csdn_comments: 2
csdn_favorites: 5
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128506760
cover: /images/posts/10.-补充实例：js动态请求菜价网页的爬取/6346d93934d9.png
lang_pair:
  zh-CN: "10. 补充实例：js动态请求菜价网页的爬取"
---

> This article was migrated from CSDN blog
> Original link: [10. Supplementary Example: Scraping Dynamic JS Vegetable Price Pages](https://blog.csdn.net/m0_59180666/article/details/128506760)
> 📊 301 views | 👍 4 likes | 💬 2 comments | ⭐ 5 favorites

**Table of Contents**

Introduction

Approach

Code Implementation

Complete Code

Summary

* * *

### Introduction

A typical case for scraping vegetable prices is a Beijing wholesale market website, but its page has been redesigned and can't be scraped using bs4 parsing. Through analysis, we found it uses dynamic JS requests for the table, so we'll tackle it accordingly.

* * *

### Approach

1. First observe the source code - the data isn't in the source code

![](/images/posts/10.-补充实例：js动态请求菜价网页的爬取/6346d93934d9.png)

2. Open the web debugger (F12), select the Network tab, and record network activity. When we change pages, we can detect a dynamic JS request:

![](/images/posts/10.-补充实例：js动态请求菜价网页的爬取/37c6fa0b4c66.png)

After clicking to change pages, the following request appears:

![](/images/posts/10.-补充实例：js动态请求菜价网页的爬取/278bd1b6b173.png)

Checking the details, we find it's a POST request:

![](/images/posts/10.-补充实例：js动态请求菜价网页的爬取/1b6e32ede0a7.png)

Looking at its payload - the parameters that need to be passed:

![](/images/posts/10.-补充实例：js动态请求菜价网页的爬取/4e17929608ff.png)

We find seven data items in the parameters. The most important are the first two: the limit of items per transmission and the current page number.

Opening the URL also shows the data exists:

![](/images/posts/10.-补充实例：js动态请求菜价网页的爬取/2a02390f2b20.png)

So we can use requests to access this URL.

* * *

### Code Implementation

Step one, our old friend - get the source code first:

```python
url = 'target_url_here'
dat = {
    "limit": "",
    "current": "",
    "pubDateStartTime": "",
    "pubDateEndTime": "",
    "prodPcatid": "",
    "prodCatid": "",
    "prodName": ""
}
resp = requests.post(url, data=dat)
# print(resp.json())
```

Here `dat` is our required parameter dictionary.

Step two, calculate the number of pages:

```python
all_count = int(resp.json()["count"])
limit = int(resp.json()["limit"])
all_page_number = int(all_count / limit)
```

Step three, write to CSV file. We won't scrape more here - try it yourself if you want:

```python
with open("vegetable_prices.csv", mode="a+", newline='', encoding="utf-8") as f:
    csvwriter = csv.writer(f)
    r1 = requests.post(url, data=dat)
    items = resp.json()["list"]
    count = items
    for j in items:
        prodName = j["prodName"]      # Product name
        avgPrice = j["avgPrice"]      # Average price
        highPrice = j["highPrice"]    # Highest price
        lowPrice = j["lowPrice"]      # Lowest price
        place = j["place"]            # Origin
        prodCat = j["prodCat"]        # Category
        pubDate = j["pubDate"]        # Publish date
        unitInfo = j["unitInfo"]      # Unit
        csvwriter.writerow([prodName, avgPrice, highPrice, lowPrice, place, prodCat, pubDate, unitInfo])
    f.close()
print("Over!")
resp.close()
```

As always, remember to close the file and request port at the end.

* * *

### Complete Code

```python
import requests
import csv

url = 'target_url_here'
dat = {
    "limit": "20",
    "current": "1",
    "pubDateStartTime": "",
    "pubDateEndTime": "",
    "prodPcatid": "",
    "prodCatid": "",
    "prodName": ""
}
resp = requests.post(url, data=dat)
# print(resp.json())

all_count = int(resp.json()["count"])
limit = int(resp.json()["limit"])
all_page_number = int(all_count / limit)

with open("vegetable_prices.csv", mode="a+", newline='', encoding="utf-8") as f:
    csvwriter = csv.writer(f)
    r1 = requests.post(url, data=dat)
    items = resp.json()["list"]
    count = items
    for j in items:
        prodName = j["prodName"]      # Product name
        avgPrice = j["avgPrice"]      # Average price
        highPrice = j["highPrice"]    # Highest price
        lowPrice = j["lowPrice"]      # Lowest price
        place = j["place"]            # Origin
        prodCat = j["prodCat"]        # Category
        pubDate = j["pubDate"]        # Publish date
        unitInfo = j["unitInfo"]      # Unit
        csvwriter.writerow([prodName, avgPrice, highPrice, lowPrice, place, prodCat, pubDate, unitInfo])
    f.close()
print("Over!")
resp.close()
```

* * *

### Summary

Today we supplemented with a Beijing wholesale market vegetable price scraping method, "cracking" their attempt to block our data scraping through dynamic JS requests. It's relatively simple. Keep up the good work and let's continue learning together!
