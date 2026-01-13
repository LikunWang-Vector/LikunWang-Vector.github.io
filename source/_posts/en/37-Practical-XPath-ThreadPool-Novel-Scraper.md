---
title: "37. Practical: XPath + Thread Pool Novel Scraper"
date: 2023-02-02
updated: 2023-02-02
categories:
  - Python Web Scraping from Beginner to Pro
tags:
  - programming
  - python
  - data-analysis
  - thread-pool
  - xpath
cover: /images/posts/37.-实战：Xpath+线程池实现抓取任意完整小说一千余节/6ee61c1d85b8.png
lang_pair:
  zh-CN: "37. 实战：Xpath+线程池实现抓取任意完整小说一千余节到本地txt文件/模板任意小说网站可套用（附源码）"
---

> This article is translated from my CSDN blog
> Original link: [37. 实战：Xpath+线程池实现抓取任意完整小说](https://blog.csdn.net/m0_59180666/article/details/128847526)
> 📊 2274 views | 👍 6 likes | 💬 8 comments | ⭐ 17 favorites

**Table of Contents**

Introduction

Objective

Approach

Code Implementation

1. Get all chapter titles and sub-links from URL
2. Create dictionary of titles and sub-links
3. Extract text from individual chapter pages
4. Save to local files with numbered prefixes
5. Add thread pool in main function

Complete Source Code

Results

Summary

---

### Introduction

I originally wanted to scrape from a free novel platform, but after writing all the code, I discovered later chapters required downloading their app - frustrating! Fortunately, I encapsulated all functions, so the overall logic remains unchanged. I ended up using another free novel site as the example.

---

### Objective

Given a novel URL, use XPath + thread pool to scrape any complete novel and save chapters in order to local txt files.

---

### Approach

The approach is clear:

1. Get all chapter titles and sub-links from the given URL
2. Create a dictionary of titles and sub-links for later extraction
3. Extract all text from individual chapter detail pages
4. Save to local files with numbered prefixes for ordering
5. Add thread pool in main function, iterate dictionary to start multi-threaded tasks

---

### Code Implementation

#### 1. Get all chapter titles and sub-links from URL

```python
def get_chapter():
    chap_cnt = 1
    chapter_dic = {}
    for i in range(1, 100):
        new_url = novel_url + f'index_{i}.html'
        resp = requests.get(new_url, headers=headers)
        resp.encoding = 'gbk'
        resp_parser = etree.HTML(resp.text)
        if not resp_parser.xpath('/html/body/div[4]/dl/dd'):
            break
        chaps = resp_parser.xpath('/html/body/div[4]/dl/dd')
        for chap in chaps:
            if not chap.xpath("./a/@href"):
                break
            url = novel_url + chap.xpath("./a/@href")[0]
            title = f'{chap_cnt}_' + chap.xpath("./a/text()")[0]
            print(title)
```

#### 2. Create dictionary of titles and sub-links

```python
            chapter_dic[title] = url
            chap_cnt += 1
    return chapter_dic
```

#### 3. Extract text from individual chapter pages

```python
def get_novel(title, url):
    resp = requests.get(url, headers=headers)
    resp.encoding = 'gbk'
    novel = etree.HTML(resp.text)
    title = title
    content = novel.xpath('//*[@id="content"]//text()')
```

#### 4. Save to local files with numbered prefixes

```python
    if not os.path.exists('./Novel_Folder'):
        os.mkdir('./Novel_Folder')
    with open(f'./Novel_Folder/{title}.txt', mode='a', encoding='gbk') as f:
        for cont in content:
            cont = cont.replace('\xa0', ' ')
            f.write(cont + '\n')
    print(title + '\tDownload complete!')
```

#### 5. Add thread pool in main function

```python
def main():
    chapter_dic = get_chapter()
    # Create thread pool
    with ThreadPoolExecutor(50) as t:
        for chapter in chapter_dic:
            t.submit(get_novel, title=chapter, url=chapter_dic[chapter])
    print("Complete!")

if __name__ == '__main__':
    main()
```

---

### Complete Source Code

```python
import requests
from lxml import etree
from concurrent.futures import ThreadPoolExecutor
import os

novel_url = 'https://example-novel-site.com/book/12345/'
headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

def get_chapter():
    chap_cnt = 1
    chapter_dic = {}
    for i in range(1, 100):
        new_url = novel_url + f'index_{i}.html'
        resp = requests.get(new_url, headers=headers)
        resp.encoding = 'gbk'
        resp_parser = etree.HTML(resp.text)
        if not resp_parser.xpath('/html/body/div[4]/dl/dd'):
            break
        chaps = resp_parser.xpath('/html/body/div[4]/dl/dd')
        for chap in chaps:
            if not chap.xpath("./a/@href"):
                break
            url = novel_url + chap.xpath("./a/@href")[0]
            title = f'{chap_cnt}_' + chap.xpath("./a/text()")[0]
            print(title)
            chapter_dic[title] = url
            chap_cnt += 1
    return chapter_dic

def get_novel(title, url):
    resp = requests.get(url, headers=headers)
    resp.encoding = 'gbk'
    novel = etree.HTML(resp.text)
    content = novel.xpath('//*[@id="content"]//text()')
    
    if not os.path.exists('./Novel_Folder'):
        os.mkdir('./Novel_Folder')
    with open(f'./Novel_Folder/{title}.txt', mode='a', encoding='gbk') as f:
        for cont in content:
            cont = cont.replace('\xa0', ' ')
            f.write(cont + '\n')
    print(title + '\tDownload complete!')

def main():
    chapter_dic = get_chapter()
    with ThreadPoolExecutor(50) as t:
        for chapter in chapter_dic:
            t.submit(get_novel, title=chapter, url=chapter_dic[chapter])
    print("Complete!")

if __name__ == '__main__':
    main()
```

---

### Results

The scraper successfully downloads all chapters with numbered prefixes, making it easy to read in order.

---

### Summary

This section implemented scraping any complete novel using XPath + thread pool, saving chapters in order to local txt files. The template can be adapted for various novel websites with minor modifications.
