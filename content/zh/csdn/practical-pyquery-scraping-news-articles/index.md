---
type: post
csdn: true
title: "32. 实战：PyQuery实现抓取TX图文新闻"
date: "2023-01-27"
lastmod: "2023-01-27"
authors:
  - admin
tags:
  - "python"
  - "开发语言"
  - "pyquery"
  - "数据分析"
  - "CSDN"
categories:
  - "Python爬虫入门、进阶与实战"
summary: "我们之前提到PyQuery区别于其他几种解析方式的最大优势就是可以“修改源代码”从而便于我们提取信息。今天我们以TX新闻为例，对这个解析的优势作一个简要的介绍。"
image:
  filename: "covers/csdn-python-crawler.png"
  caption: "CSDN Archive · PYTHON · CRAWLER"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128773222"
csdn_views: 387
csdn_likes: 1
csdn_comments: 2
csdn_favorites: 1
---

> 本文迁移自CSDN博客
> 原文链接：[32. 实战：PyQuery实现抓取TX图文新闻](https://blog.csdn.net/m0_59180666/article/details/128773222)
> 📊 387 阅读 | 👍 1 点赞 | 💬 2 评论 | ⭐ 1 收藏


### 前言

我们之前提到PyQuery区别于其他几种解析方式的最大优势就是可以“修改源代码”从而便于我们提取信息。今天我们以TX新闻为例，对这个解析的优势作一个简要的介绍。

* * *

### 目的

利用Pyquery+Markdown抓取TX新闻的某一篇完整图文内容，并保存到本地md文件。

* * *

### 思路

1\. 拿到页面源代码

2\. 解析html文件

3\. 拿到标题和内容

4\. 下载图片

5\. 保存文件

* * *

### 代码实现

#### 1\. 拿到页面源代码

```python
# main函数，完成所有操作(url普适)
def main():
    url = '见评论区'
    resp = requests.get(url)
    html = resp.text
    title, essay = get_content(html)
    save_file(title, essay)
```

main函数中拿到url的源代码，并传入get_content函数中获取标题和内容以及图片，最后调用save_file函数保存文件到本地。 

#### 2\. 解析html文件

```python
# 拿到标题和内容
def get_content(html):
    p = pq(html)
```

开始讲解 get_content函数，第一步就是先用PyQuery解析主函数中传入的html源代码。

#### 3\. 拿到标题和内容

随后解析出标题和内容。观察源代码发现只有一个h1标签，那么直接拿出来，随后可以写到markdown文件中。而文章内容部分就比较复杂了，我们要实现的是从本地读取图片，那么势必要先将图片下载到本地，那么就再建立一个download_img函数。

```python
    title = p("h1")
    # print(title)
    essay = p("p.one-p")
    ps = essay("img").items()
    for p in ps:
        img_src = p.attr("src")
        img_uuid = uuid.uuid4()
        download_img(img_src, img_uuid)
        p.attr("src", f"1_img_src/{img_uuid}.jpg")  # 将图片资源地址改为本地
        p.attr("alt", "Image Not Found")
        # print(essay)
    return title, essay
```

注意这行代码

```python
p.attr("src", f"1_img_src/{img_uuid}.jpg")  # 将图片资源地址改为本地
p.attr("alt", "Image Not Found")
```

**这两行的含义就是在每一行具有img标签的p标签里面，将src属性替换为本地路径，并添加一个alt属性来作为图片无法显示时的替换文本。**

**这里就体现了PyQuery的优越性**

#### 4\. 下载图片

```python
# 下载图片，保存到本地指定路径，用同一个uuid
def download_img(img_src, img_uuid):
    download_url = 'https:' + img_src
    img_resp = requests.get(download_url)
    file_path = f"1_img_src/{img_uuid}.jpg"
    with open(file_path, mode='wb') as f:
        f.write(img_resp.content)
```

常规操作不赘述，注意区分这里的img_src/img_uuid的区别 

#### 5\. 保存文件

```python
# 保存Markdown文件
def save_file(title, essay):
    true_title = title.text()
    with open(f"1_{true_title}.md", mode='w', encoding='utf-8') as f:
        f.write(str(title))
        f.write(str(essay))
```

* * *

### 完整代码

```python
"""
PyQuery & Markdown
new.xx.com（见评论区）
"""

from pyquery import PyQuery as pq
import requests
import uuid


# main函数，完成所有操作(url普适)
def main():
    url = '见评论区'
    resp = requests.get(url)
    html = resp.text
    title, essay = get_content(html)
    save_file(title, essay)


# 拿到标题和内容
def get_content(html):
    p = pq(html)
    title = p("h1")
    # print(title)
    essay = p("p.one-p")
    ps = essay("img").items()
    for p in ps:
        img_src = p.attr("src")
        img_uuid = uuid.uuid4()
        download_img(img_src, img_uuid)
        p.attr("src", f"1_img_src/{img_uuid}.jpg")  # 将图片资源地址改为本地
        p.attr("alt", "Image Not Found")
        # print(essay)
    return title, essay


# 下载图片，保存到本地指定路径，用同一个uuid
def download_img(img_src, img_uuid):
    download_url = 'https:' + img_src
    img_resp = requests.get(download_url)
    file_path = f"1_img_src/{img_uuid}.jpg"
    with open(file_path, mode='wb') as f:
        f.write(img_resp.content)


# 保存Markdown文件
def save_file(title, essay):
    true_title = title.text()
    with open(f"1_{true_title}.md", mode='w', encoding='utf-8') as f:
        f.write(str(title))
        f.write(str(essay))


if __name__ == '__main__':
    main()
```

* * *

### 运行效果

![](/images/posts/32.-实战：PyQuery实现抓取TX图文新闻/b52ebe2047c4.png)

### ![](/images/posts/32.-实战：PyQuery实现抓取TX图文新闻/b255aa3bfec1.png)

由于PyCharm中相对路径的图片在md文件中无法正常显示，所以我们拿VSCode来做演示，目前还没有找到解决办法...有知道的大佬可以在评论区或者私信告知我一下，谢谢！ 

* * *

### 总结

本节我们学习认识了用PyQuery修改html源代码从而能够改变html传递的信息，帮助我们更方便的获取并解析信息。
