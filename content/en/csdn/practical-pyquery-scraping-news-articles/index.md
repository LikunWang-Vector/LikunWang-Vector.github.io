---
type: post
csdn: true
title: "32. Practical: PyQuery Scraping News Articles with Images"
date: "2023-01-27"
lastmod: "2023-01-27"
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
summary: "We previously mentioned that PyQuery's biggest advantage over other parsing methods is its ability to \"modify source code\", making it easier to extract information. Today we'll use"
image:
  filename: "covers/csdn-python-crawler.png"
  caption: "CSDN Archive · PYTHON · CRAWLER"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128773222"
csdn_views: 387
csdn_likes: 1
csdn_comments: 2
csdn_favorites: 1
---

> This article was migrated from my [CSDN blog](https://blog.csdn.net/m0_59180666).
> Original: [32. Practical: PyQuery Scraping News Articles with Images](https://blog.csdn.net/m0_59180666/article/details/128773222)
> 📊 387 views | 👍 1 likes | 💬 2 comments | ⭐ 1 favorites

> This article is translated from my CSDN blog
> Original link: [32. 实战：PyQuery实现抓取TX图文新闻](https://blog.csdn.net/m0_59180666/article/details/128773222)
> 📊 387 views | 👍 1 like | 💬 2 comments | ⭐ 1 favorite


### Introduction

We previously mentioned that PyQuery's biggest advantage over other parsing methods is its ability to "modify source code", making it easier to extract information. Today we'll use a news website as an example to briefly demonstrate this parsing advantage.

---

### Objective

Use PyQuery + Markdown to scrape a complete news article with images and save it to a local markdown file.

---

### Approach

1. Get page source code
2. Parse HTML file
3. Extract title and content
4. Download images
5. Save file

---

### Code Implementation

#### 1. Get page source code

```python
# Main function to complete all operations (URL-agnostic)
def main():
    url = 'https://news.example.com/article/12345'
    resp = requests.get(url)
    html = resp.text
    title, essay = get_content(html)
    save_file(title, essay)
```

The main function gets the source code from the URL, passes it to the `get_content` function to extract the title, content, and images, then calls `save_file` to save locally.

#### 2. Parse HTML file

```python
# Get title and content
def get_content(html):
    p = pq(html)
```

Start explaining the `get_content` function. The first step is to parse the HTML source code passed from the main function using PyQuery.

#### 3. Extract title and content

Then parse out the title and content. By examining the source code, we find there's only one h1 tag, so we extract it directly and can write it to a markdown file. The article content is more complex - to read images from local storage, we first need to download them locally, so we create a `download_img` function.

```python
    title = p("h1")
    essay = p("p.one-p")
    ps = essay("img").items()
    
    for p in ps:
        img_src = p.attr("src")
        img_uuid = uuid.uuid4()
        download_img(img_src, img_uuid)
        p.attr("src", f"img_src/{img_uuid}.jpg")  # Change image source to local path
        p.attr("alt", "Image Not Found")
    
    return title, essay
```

Note these lines:

```python
p.attr("src", f"img_src/{img_uuid}.jpg")  # Change image source to local path
p.attr("alt", "Image Not Found")
```

**These two lines mean: in each p tag containing an img tag, replace the src attribute with a local path and add an alt attribute as fallback text when the image cannot be displayed.**

**This demonstrates PyQuery's superiority.**

#### 4. Download images

```python
# Download image and save to specified local path with the same uuid
def download_img(img_src, img_uuid):
    download_url = 'https:' + img_src
    img_resp = requests.get(download_url)
    file_path = f"img_src/{img_uuid}.jpg"
    with open(file_path, mode='wb') as f:
        f.write(img_resp.content)
```

Standard operation, no need to elaborate. Note the difference between img_src and img_uuid here.

#### 5. Save file

```python
# Save Markdown file
def save_file(title, essay):
    true_title = title.text()
    with open(f"{true_title}.md", mode='w', encoding='utf-8') as f:
        f.write(str(title))
        f.write(str(essay))
```

---

### Complete Code

```python
"""
PyQuery & Markdown
News Article Scraper
"""
from pyquery import PyQuery as pq
import requests
import uuid

# Main function to complete all operations (URL-agnostic)
def main():
    url = 'https://news.example.com/article/12345'
    resp = requests.get(url)
    html = resp.text
    title, essay = get_content(html)
    save_file(title, essay)

# Get title and content
def get_content(html):
    p = pq(html)
    title = p("h1")
    essay = p("p.one-p")
    ps = essay("img").items()
    
    for p in ps:
        img_src = p.attr("src")
        img_uuid = uuid.uuid4()
        download_img(img_src, img_uuid)
        p.attr("src", f"img_src/{img_uuid}.jpg")  # Change image source to local path
        p.attr("alt", "Image Not Found")
    
    return title, essay

# Download image and save to specified local path with the same uuid
def download_img(img_src, img_uuid):
    download_url = 'https:' + img_src
    img_resp = requests.get(download_url)
    file_path = f"img_src/{img_uuid}.jpg"
    with open(file_path, mode='wb') as f:
        f.write(img_resp.content)

# Save Markdown file
def save_file(title, essay):
    true_title = title.text()
    with open(f"{true_title}.md", mode='w', encoding='utf-8') as f:
        f.write(str(title))
        f.write(str(essay))

if __name__ == '__main__':
    main()
```

---

### Results

The scraper successfully downloads images locally and creates a markdown file with the article content, with image paths pointing to local files.

---

### Summary

In this section, we learned how to use PyQuery to modify HTML source code to change the information HTML delivers, helping us more conveniently obtain and parse information.
