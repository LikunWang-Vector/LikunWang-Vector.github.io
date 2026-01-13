---
title: "09. bs4 Parsing Basics and Examples"
date: 2022-12-31
updated: 2022-12-31
categories:
  - Python Web Scraping Tutorial
tags:
  - python
  - programming
  - web scraping
  - html
csdn_views: 802
csdn_likes: 4
csdn_comments: 4
csdn_favorites: 6
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128505916
cover: /images/posts/09.-bs4解析基础与实例/3fc20ab2cc40.png
lang_pair:
  zh-CN: "09. bs4解析基础与实例"
---

> This article was migrated from CSDN blog
> Original link: [09. bs4 Parsing Basics and Examples](https://blog.csdn.net/m0_59180666/article/details/128505916)
> 📊 802 views | 👍 4 likes | 💬 4 comments | ⭐ 6 favorites

**Table of Contents**

Introduction

Installing bs4

bs4 Usage Basics

bs4 Example: Scraping Vegetable Prices

Code Implementation

Complete Code

Important Reminder

Summary

* * *

### Introduction

We now have basic HTML knowledge and can identify various elements in HTML source code. In this chapter, we'll formally learn bs4 usage and demonstrate its convenience with an example. Compared to regex, bs4 is much simpler.

* * *

### Installing bs4

If you haven't installed Python modules before, refer to my requests chapter on module installation - just replace "requests" with "bs4".

For most readers at this point, you should already know how to install modules. Install bs4 as follows:

```python
pip install bs4 -i https://pypi.tuna.tsinghua.edu.cn/simple
```

* * *

### bs4 Usage Basics

BeautifulSoup objects retrieve HTML content mainly through two methods:

* find()
* find_all()

![](/images/posts/09.-bs4解析基础与实例/3fc20ab2cc40.png)

Whether using find or find_all, the parameters are almost identical:

* **Syntax:** find(tag, attribute=value) means searching for xxx tag in the page where the xxx attribute must be xxx value

For example, `find('div', age=18)` means finding a div tag in the page where the attribute age must be 18.

`find_all()` usage is almost identical to `find()`. `find()` finds one, `find_all()` finds all on the page.

* * *

### bs4 Example: Scraping Vegetable Prices

As we know, as long as data exists in the source code, we can easily find and extract it with bs4.

Objective: Scrape a vegetable price table from a website and save all information to a CSV file.

#### Code Implementation

Step one, as usual, get the source code first:

```python
# Get page source code
url = "target_url_here"
resp = requests.get(url)
# print(resp.text)
```

Step two, pass the entire page source code to BeautifulSoup for preprocessing. Then we can access all HTML tags through the bs object.

```python
# 1. Create bs object
page = BeautifulSoup(resp.text, "html.parser")  # Specify HTML parser
```

Step three, locate the vegetable price table we want:

![](/images/posts/09.-bs4解析基础与实例/59077596e46e.png)

We use the find function. The two most commonly used are: find (finds one) and find_all (finds all).

In the source code, we can see all the vegetable price data is wrapped in `<table>` tags, meaning it's in a table. Tables consist of `<tr>` and `<td>` - rows and columns.

The approach is clear: first locate the table, then get all rows, then save data from each row to the CSV file.

First, check the source code to locate the table:

![](/images/posts/09.-bs4解析基础与实例/484dbf500f90.png)

We can see the table tag has an attribute value that appears for the first time, so we can precisely find it with find:

```python
# 2. Find data from bs object
# find(tag, attribute=value): find first
# find_all(tag, attribute=value): find all
# table = page.find("table", class_="price-table")  # class is Python keyword, add _ to distinguish
# Alternative syntax:
table = page.find("table", attrs={"class": "price-table"})  # Same meaning, avoids class keyword
# print(table)
```

Next, locate all rows:

```python
# Don't want the header row, only the data below - get all data rows
trs = table.find_all("tr")[1:]  # tr means row
```

Since the table has a header, we can slice from index 1 to skip it.

Finally, iterate through all rows and extract the data:

```python
for tr in trs:  # Each row
    tds = tr.find_all("td")  # td means cell. Get all td in each row
    # print(tds[0])
    # Name, Origin, Average Price (yuan/kg), Specification, Date
    name = tds[0].text  # .text gets the content marked by the tag
    place = tds[1].text
    avg_price = tds[2].text
    spec = tds[3].text
    date = tds[4].text
    # print(name, place, avg_price, spec, date)
    csvwriter.writerow([name, place, avg_price, spec, date])
f.close()
print("over!!!")
resp.close()
```

This successfully writes data to the file. Remember to close the file and network request - it's a good habit to maintain.

* * *

### Complete Code

```python
# Installation
# pip install bs4 -i tsinghua_mirror
# 1. Get page source code
# 2. Parse with bs4. Get data

import requests
from bs4 import BeautifulSoup
import csv

# Get page source code
url = "target_url_here"
resp = requests.get(url)
# print(resp.text)

f = open("vegetable_prices.csv", mode="w", newline="", encoding="utf-8")
csvwriter = csv.writer(f)

# Parse data with bs4 (two steps)
# 1. Create bs object
page = BeautifulSoup(resp.text, "html.parser")  # Specify HTML parser

# 2. Find data from bs object
# find(tag, attribute=value): find first
# find_all(tag, attribute=value): find all
# table = page.find("table", class_="price-table")  # class is Python keyword, add _ to distinguish
# Alternative syntax:
table = page.find("table", attrs={"class": "price-table"})  # Same meaning, avoids class keyword
# print(table)

# Don't want header row, only data below - get all data rows
trs = table.find_all("tr")[1:]  # tr means row

for tr in trs:  # Each row
    tds = tr.find_all("td")  # td means cell. Get all td in each row
    # print(tds[0])
    # Name, Origin, Average Price (yuan/kg), Specification, Date
    name = tds[0].text  # .text gets content marked by tag
    place = tds[1].text
    avg_price = tds[2].text
    spec = tds[3].text
    date = tds[4].text
    # print(name, place, avg_price, spec, date)
    csvwriter.writerow([name, place, avg_price, spec, date])

f.close()
print("over!!!")
resp.close()
```

* * *

### Important Reminder

As you can see, this website has over 10,000 pages. As beginners, don't blindly scrape all the data! First, it's not very useful. Second, it puts a heavy load on the website server - essentially causing damage. So take it easy and just try a few pages for practice! You can also modify the URL in the source code or add a for loop for automatic pagination.

* * *

### Summary

Today we learned bs4 parsing and practiced with an example, scraping vegetable prices from a website. bs4 is clearly simpler and more convenient than regex. Remember not to access websites at high frequency - that's similar to a DDoS attack and very unfriendly to website servers.
