---
title: "33. Practical: Scraping Store Information Query System"
date: 2023-01-28
updated: 2023-01-28
categories:
  - Python Web Scraping from Beginner to Pro
tags:
  - python
  - programming
  - requests
  - data-analysis
  - json
cover: /images/posts/33.-实战：实现某网站店铺信息的查询与批量抓取（附源码）/a3f69c03ab5b.png
lang_pair:
  zh-CN: "33. 实战：实现某网站店铺信息的查询与批量抓取（附源码）"
---

> This article is translated from my CSDN blog
> Original link: [33. 实战：实现某网站店铺信息的查询与批量抓取](https://blog.csdn.net/m0_59180666/article/details/128775055)
> 📊 1321 views | 👍 3 likes | 💬 3 comments | ⭐ 6 favorites

**Table of Contents**

Introduction

Objective

Approach

Code Implementation

1. Request URL and get source code
2. Parse source code and extract data
3. Implement save_data function
4. Organize main function logic

Complete Code

Results

Summary

---

### Introduction

Every Thursday, we see lots of "Crazy Thursday" memes and messages online. If someone actually sends you money, where should you go to spend it? What if you're in a new city or want to know if there's a store nearby?

We can write a simple scraper - code once, query anytime.

---

### Objective

1. Implement keyword search for stores
2. Output all store information to console, with option to save locally
3. Encapsulate results with separated functions

---

### Approach

1. Request URL and get source code
2. Parse source code and extract data
3. Complete the logic

---

### Code Implementation

#### 1. Request URL and get source code

First, visit the store information page. After searching, the page URL doesn't change, which naturally suggests it's a dynamic request.

Open the packet capture tool, enter any keyword, search for stores, and you'll get a JSON response.

Check the headers tab for URL and request method, the payload tab for required parameters, and the preview tab to see the data we want.

```python
import requests
import json
import csv

# Global variables: URL and UA
url = 'https://example.com/api/stores'
UA = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.61"
}

# Request URL and get source code
def request_url(link, headers, params):
    resp = requests.post(url=link, headers=headers, params=params)
    resp.encoding = 'utf-8'
    return resp.text
```

#### 2. Parse source code and extract data

Parsing requires two variables: the request result and a storage flag. The first is the data to parse, the second is a custom variable for whether to save locally. **When it's 'y', call save_data to save to local CSV; when 'n', only output to console**.

```python
# Parse requested information
def parse_data(resp, save):
    data = json.loads(resp)
    if len(data["Table1"]) == 0:
        return True
    # If Table1 contains information, iterate through each entry
    for store_dict in data["Table1"]:
        print(store_dict)
        if save == 'y':
            save_data(store_dict)
```

#### 3. Implement save_data function

```python
# Save store information locally
def save_data(store_dict):
    with open('Store_List.csv', mode='a+', newline='', encoding='utf-8') as f:
        csvwriter = csv.writer(f)
        storeName = store_dict['storeName']
        addressDetail = store_dict['addressDetail']
        pro = store_dict['pro']
        provinceName = store_dict['provinceName']
        cityName = store_dict['cityName']
        csvwriter.writerow([storeName, addressDetail, pro, provinceName, cityName])
```

#### 4. Organize main function logic

```python
def main():
    pageIndex = 1
    store_name = input("Welcome to Store Query System! Enter search keyword:\n")
    save_query = input("Save store info locally? (y/n)\n")
    
    if save_query == 'n':
        print("Processing... Store info will be printed to console...")
    if save_query == 'y':
        print("Processing... Store info will be printed and saved to 'Store_List.csv'...")
    
    while True:
        data_dict = {
            "cname": "",
            "pid": "",
            "keyword": store_name,
            "pageIndex": pageIndex,
            "pageSize": 10
        }
        resp = request_url(url, UA, data_dict)
        if parse_data(resp, save_query):
            break
        else:
            pageIndex += 1

if __name__ == '__main__':
    main()
```

**When the parse function returns empty store info, it returns True to end the loop; otherwise, increment page number and continue**.

The main function requires two inputs: the search keyword for params, and whether to save locally (y/n).

---

### Complete Code

```python
import requests
import json
import csv

# Global variables: URL and UA
url = 'https://example.com/api/stores'
UA = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
}

# Request URL and get source code
def request_url(link, headers, params):
    resp = requests.post(url=link, headers=headers, params=params)
    resp.encoding = 'utf-8'
    return resp.text

# Parse requested information
def parse_data(resp, save):
    data = json.loads(resp)
    if len(data["Table1"]) == 0:
        return True
    for store_dict in data["Table1"]:
        print(store_dict)
        if save == 'y':
            save_data(store_dict)

# Save store information locally
def save_data(store_dict):
    with open('Store_List.csv', mode='a+', newline='', encoding='utf-8') as f:
        csvwriter = csv.writer(f)
        storeName = store_dict['storeName']
        addressDetail = store_dict['addressDetail']
        pro = store_dict['pro']
        provinceName = store_dict['provinceName']
        cityName = store_dict['cityName']
        csvwriter.writerow([storeName, addressDetail, pro, provinceName, cityName])

def main():
    pageIndex = 1
    store_name = input("Welcome! Enter search keyword:\n")
    save_query = input("Save store info locally? (y/n)\n")
    
    if save_query == 'n':
        print("Processing... Store info will be printed to console...")
    if save_query == 'y':
        print("Processing... Store info will be saved to 'Store_List.csv'...")
    
    while True:
        data_dict = {
            "cname": "",
            "pid": "",
            "keyword": store_name,
            "pageIndex": pageIndex,
            "pageSize": 10
        }
        resp = request_url(url, UA, data_dict)
        if parse_data(resp, save_query):
            break
        else:
            pageIndex += 1

if __name__ == '__main__':
    main()
```

---

### Results

The program successfully queries stores by keyword and saves results to CSV file with store name, address, and location details.

---

### Summary

In this section, we practiced scraping store information for any keyword. This is a comprehensive exercise - focus on learning the approach and apply it to similar scenarios.
