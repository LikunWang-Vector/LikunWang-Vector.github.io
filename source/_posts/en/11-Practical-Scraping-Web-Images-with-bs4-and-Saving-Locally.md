---
title: "11. Practical: Scraping Web Images with bs4 and Saving Locally"
date: 2023-01-02
updated: 2023-01-02
categories:
  - Python Web Scraping Tutorial
tags:
  - web scraping
  - python
csdn_views: 1654
csdn_likes: 8
csdn_comments: 6
csdn_favorites: 17
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128517961
cover: /images/posts/11.-实战：bs4法抓取网页图片并保存到本地文件夹/26e45b7be41e.png
lang_pair:
  zh-CN: "11. 实战：bs4法抓取网页图片并保存到本地文件夹"
---

> This article was migrated from CSDN blog
> Original link: [11. Practical: Scraping Web Images with bs4 and Saving Locally](https://blog.csdn.net/m0_59180666/article/details/128517961)
> 📊 1654 views | 👍 8 likes | 💬 6 comments | ⭐ 17 favorites

### Introduction

Through previous chapters, we've learned how convenient the bs4 module is for web scraping, and practiced with an example of scraping vegetable prices. In this chapter, we'll use an image website as an example to scrape wallpaper content and save it to a local folder.

![Target](/images/posts/11.-实战：bs4法抓取网页图片并保存到本地文件夹/26e45b7be41e.png)

* * *

### Approach

1. Get all sub-page link addresses
2. Get image resource addresses from sub-pages
3. Download images

* * *

### Code Implementation

Step one, as usual, get the page source code first:

```python
import requests
from bs4 import BeautifulSoup
import time

url = "target_url_here"
resp = requests.get(url)
resp.encoding = 'utf-8'  # Handle encoding
```

Step two, pass the source code to BeautifulSoup and find sub-links:

```python
# Pass source code to bs
main_page = BeautifulSoup(resp.text, "html.parser")
item_list = main_page.find_all("div", class_="item masonry_brick")
alist = []
for item in item_list:
    find = item.find("a")
    alist.append(find)
# print(alist)
```

Step three, iterate through sub-links, get sub-page source code and image download paths:

```python
for a in alist:
    href = 'https://www.umei.cc/' + a.get('href').strip("/")  # Use get to retrieve attribute values
    # Get sub-page source code
    child_page_resp = requests.get(href)
    child_page_resp.encoding = 'utf-8'
    child_page_text = child_page_resp.text
    # Get image download path from sub-page
    child_page = BeautifulSoup(child_page_text, "html.parser")
    div = child_page.find("div", class_="big-pic")
    img = div.find("img")
    src = img.get("src")
```

Step four, download images:

```python
    # Download image
    img_resp = requests.get(src)
    # img_resp.content  # This gets bytes
    img_name = src.split("/")[-1]  # Get content after the last / in URL
    with open("img8/" + img_name, mode="wb") as f:
        f.write(img_resp.content)  # Write image content to file
    print("over!!!", img_name)
    time.sleep(1)
print("all over!!!")
```

The image download logic is simple: get the image in byte format and write it to a local folder in binary mode (wb stands for write byte).

* * *

### Complete Code

```python
# 1. Get main page source code. Extract sub-page link addresses, href
# 2. Get sub-page content through href. Find image download address img -> src
# 3. Download images

import requests
from bs4 import BeautifulSoup
import time

url = "target_url_here"
resp = requests.get(url)
resp.encoding = 'utf-8'  # Handle encoding
# print(resp.text)

# Pass source code to bs
main_page = BeautifulSoup(resp.text, "html.parser")
item_list = main_page.find_all("div", class_="item masonry_brick")
alist = []
for item in item_list:
    find = item.find("a")
    alist.append(find)
# print(alist)

for a in alist:
    href = 'https://www.umei.cc/' + a.get('href').strip("/")  # Use get to retrieve attribute values
    # Get sub-page source code
    child_page_resp = requests.get(href)
    child_page_resp.encoding = 'utf-8'
    child_page_text = child_page_resp.text
    # Get image download path from sub-page
    child_page = BeautifulSoup(child_page_text, "html.parser")
    div = child_page.find("div", class_="big-pic")
    img = div.find("img")
    src = img.get("src")
    # Download image
    img_resp = requests.get(src)
    # img_resp.content  # This gets bytes
    img_name = src.split("/")[-1]  # Get content after the last / in URL
    with open("img8/" + img_name, mode="wb") as f:
        f.write(img_resp.content)  # Write image to file
    print("over!!!", img_name)
    time.sleep(1)
print("all over!!!")
```

* * *

### Results

I scraped a portion and stopped - let's take it easy and just practice.

![](/images/posts/11.-实战：bs4法抓取网页图片并保存到本地文件夹/ad34b773dc0e.png)

Tips: Since PyCharm traverses the project folder and updates file indexes whenever there's an update, scraping too many images might slow down your IDE. You can right-click the created img folder, select "Mark Directory as...", then choose "Excluded". This tells PyCharm that this folder isn't part of the project scope, so it won't spend effort indexing it every time.

![](/images/posts/11.-实战：bs4法抓取网页图片并保存到本地文件夹/9c8a03ae1ac3.png)

* * *

### Summary

Today we practiced a bs4 example, using the bs4 module to batch download wallpapers from a website to a local folder, improving our scraping skills. Next chapter, we'll start learning xpath.
