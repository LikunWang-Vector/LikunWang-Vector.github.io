---
title: "42. Practical: Scraping Game Character Skin HD Posters"
date: 2023-08-09
updated: 2023-08-09
categories:
  - Python Web Scraping from Beginner to Pro
tags:
  - python
  - programming
  - gaming
  - hd-images
  - web-scraping
cover: /images/posts/42.-疯狂爬取王者荣耀所有皮肤高清海报（文末源码）/e60526d24355.png
lang_pair:
  zh-CN: "42. 疯狂爬取王者荣耀所有皮肤高清海报（文末源码）"
---

> This article is translated from my CSDN blog
> Original link: [42. 疯狂爬取王者荣耀所有皮肤高清海报](https://blog.csdn.net/m0_59180666/article/details/132195883)
> 📊 722 views | 👍 5 likes | 💬 2 comments | ⭐ 4 favorites

**Table of Contents**

Introduction

Objective

Approach

Code Implementation

1. Import packages and set up environment
2. Set up request headers
3. Access hero list and get hero IDs
4. Visit each hero's page for image details
5. Save to local folders (auto-named)

Complete Source Code

Results

Summary

---

### Introduction

After a long break, I'm back with more web scraping tutorials! Today we'll batch download all character skin images from a game's official website, organized by character name into separate folders.

Remember: web scraping is powerful, but use it responsibly!

---

### Objective

Scrape all character HD skin posters from a game's official website.

---

### Approach

1. Import packages and set up environment
2. Set up request headers
3. Access hero list and get hero IDs
4. Visit each hero's page for image details
5. Save to local folders (auto-named by character)

---

### Code Implementation

#### 1. Import packages and set up environment

```python
import requests
from lxml import etree
import os
from time import sleep
```

#### 2. Set up request headers

```python
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}
hero_list_url = 'https://game-site.com/herolist.json'
hero_list_resp = requests.get(hero_list_url, headers=headers, verify=False)
```

#### 3. Access hero list and get hero IDs

```python
for h in hero_list_resp.json():
    ename = h.get('ename')
    cname = h.get('cname')
    
    # Access hero main page
    hero_info_url = f'https://game-site.com/herodetail/{ename}.shtml'
    hero_info_resp = requests.get(hero_info_url, headers=headers)
    hero_info_resp.encoding = 'gbk'
    e = etree.HTML(hero_info_resp.text)
```

#### 4. Visit each hero's page for image details

```python
    names = e.xpath('//ul[@class="pic-list"]/@data-imgname')[0]
    names = [name[0:name.index('&')] for name in names.split('|')]
    
    for i, n in enumerate(names):
        resp = requests.get(
            f'https://game-cdn.com/images/skin/{ename}/{ename}-bigskin-{i + 1}.jpg',
            headers=headers)
```

#### 5. Save to local folders (auto-named)

```python
        if not os.path.exists(f'./skins/{cname}'):
            os.makedirs(f'./skins/{cname}')
        with open(f'./skins/{cname}/{n}.jpg', 'wb') as f:
            f.write(resp.content)
        print(f'Downloaded skin: {n}')
        sleep(1)
```

---

### Results

The scraper successfully downloads all character skins organized into folders by character name, with high-quality images ready for use as wallpapers or collections.

---

### Summary

Today we learned how to scrape HD character skin posters from a game's official website. The key techniques include parsing JSON APIs, using XPath for HTML parsing, and organizing downloads into structured folders.
