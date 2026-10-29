---
type: post
csdn: true
title: "10. 补充实例：js动态请求菜价网页的爬取"
date: "2022-12-31"
lastmod: "2022-12-31"
authors:
  - admin
tags:
  - "爬虫"
  - "python"
  - "开发语言"
  - "html"
  - "数据分析"
  - "CSDN"
categories:
  - "Python爬虫入门、进阶与实战"
summary: "爬取菜价的典型案例是北京新XX网站，但是它页面已经改版，无法通过bs4解析方式进行爬取。我们通过分析发现它是通过js动态请求表格的，所以我们再次对它见招拆招。"
image:
  filename: "covers/csdn-python-crawler.png"
  caption: "CSDN Archive · PYTHON · CRAWLER"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128506760"
csdn_views: 301
csdn_likes: 4
csdn_comments: 2
csdn_favorites: 5
---

> 本文迁移自CSDN博客
> 原文链接：[10. 补充实例：js动态请求菜价网页的爬取](https://blog.csdn.net/m0_59180666/article/details/128506760)
> 📊 301 阅读 | 👍 4 点赞 | 💬 2 评论 | ⭐ 5 收藏


### 前言

爬取菜价的典型案例是北京新XX网站，但是它页面已经改版，无法通过bs4解析方式进行爬取。我们通过分析发现它是通过js动态请求表格的，所以我们再次对它见招拆招。

* * *

### 思路

1\. 先观察源代码，发现数据不在源代码中

![](/images/posts/10.-补充实例：js动态请求菜价网页的爬取/6346d93934d9.png)

2\. 打开网页调试器（F12），选择Network选项，记录网络活动。当我们换页的时候，能检测到一个动态的js请求：

![](/images/posts/10.-补充实例：js动态请求菜价网页的爬取/37c6fa0b4c66.png)

点击换页以后出现以下请求：

![](/images/posts/10.-补充实例：js动态请求菜价网页的爬取/278bd1b6b173.png) 我们查看详情，发现它是一个POST请求

![](/images/posts/10.-补充实例：js动态请求菜价网页的爬取/1b6e32ede0a7.png)

查看其负载，也就是所需要传递的参数：

![](/images/posts/10.-补充实例：js动态请求菜价网页的爬取/4e17929608ff.png)

发现我们传参里有上述七个数据，其中最重要的就是前两个：分别是限制每次传输的信息条数和当前页面，也就是第current页。

打开URL也能看到里面确实存在数据：

![](/images/posts/10.-补充实例：js动态请求菜价网页的爬取/2a02390f2b20.png) 所以我们可以考虑用requests来访问该URL

* * *

### 代码实现

第一步，老朋友，先获取源代码

```python
url = '在评论区'

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

其中dat是我们需要的参数字典。

第二步，计算出页数等

```python
all_count = int(resp.json()["count"])
limit = int(resp.json()["limit"])
all_page_number = int(all_count / limit)
```

第三步，写入csv文件，这里就不爬取更多了，如果想的话就自己试试看~

```python
with open("新发地菜价.csv", mode="a+", newline='', encoding="utf-8") as f:
    csvwriter = csv.writer(f)

    r1 = requests.post(url, data=dat)
    items = resp.json()["list"]
    count = items
    for j in items:
        prodName = j["prodName"]  # 品名
        avgPrice = j["avgPrice"]  # 平均价
        highPrice = j["highPrice"]  # 最高价
        lowPrice = j["lowPrice"]  # 最低价
        place = j["place"]  # 产地
        prodCat = j["prodCat"]  # 一级分类
        pubDate = j["pubDate"]  # 发布日期
        unitInfo = j["unitInfo"]  # 单位
        csvwriter.writerow([prodName, avgPrice, highPrice, lowPrice, place, prodCat, pubDate, unitInfo])

f.close()
print("Over！")

resp.close()
```

老规矩，最后记得关闭文件，关闭请求端口。

* * *

### 完整代码

```python
import requests
import csv

url = '在评论区'

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

with open("新发地菜价.csv", mode="a+", newline='', encoding="utf-8") as f:
    csvwriter = csv.writer(f)

    r1 = requests.post(url, data=dat)
    items = resp.json()["list"]
    count = items
    for j in items:
        prodName = j["prodName"]  # 品名
        avgPrice = j["avgPrice"]  # 平均价
        highPrice = j["highPrice"]  # 最高价
        lowPrice = j["lowPrice"]  # 最低价
        place = j["place"]  # 产地
        prodCat = j["prodCat"]  # 一级分类
        pubDate = j["pubDate"]  # 发布日期
        unitInfo = j["unitInfo"]  # 单位
        csvwriter.writerow([prodName, avgPrice, highPrice, lowPrice, place, prodCat, pubDate, unitInfo])

f.close()
print("Over！")

resp.close()
```

* * *

### 总结

我们今天补充了一个北京某批发网站菜价获取方式，“破解”了它试图通过动态js请求拦截我们爬取数据的行为，还是比较简单的。希望大家继续一起努力一起加油！
