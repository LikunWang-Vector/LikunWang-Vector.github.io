---
type: post
csdn: true
title: "21. 实战：多线程+xpath抓取大量菜价信息（四种方法）"
date: "2023-01-08"
lastmod: "2023-01-08"
authors:
  - admin
tags:
  - "爬虫"
  - "python"
  - "数据分析"
  - "CSDN"
categories:
  - "Python爬虫入门、进阶与实战"
summary: "我们学习了多线程、多进程对于提高效率的方法，我们现在就来尝试批量抓取之前尝试过的某菜价信息网站的大量菜价信息（链接放在评论区）"
image:
  filename: "covers/csdn-python-crawler.png"
  caption: "CSDN Archive · PYTHON · CRAWLER"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128600206"
csdn_views: 452
csdn_likes: 4
csdn_comments: 2
csdn_favorites: 6
---

> 本文迁移自CSDN博客
> 原文链接：[21. 实战：多线程+xpath抓取大量菜价信息（四种方法）](https://blog.csdn.net/m0_59180666/article/details/128600206)
> 📊 452 阅读 | 👍 4 点赞 | 💬 2 评论 | ⭐ 6 收藏


### 前言

我们学习了多线程、多进程对于提高效率的方法，我们现在就来尝试批量抓取之前尝试过的某菜价信息网站的大量菜价信息**（链接放在评论区）**

* * *

### 目的

用多线程批量抓取菜价信息

* * *

### 思路

1\. 实现抓取单个页面的函数

2\. 创建线程池，批量执行上述函数

3\. 写入文件

**注：我将详细讲述多线程法，之后展示多进程法，并且数据解析方式会用bs4和xpath两种方法。**

* * *

### 代码实现（多线程+xpath）

#### 1\. 抓取单个页面

![](/images/posts/21.-实战：多线程+xpath抓取大量菜价信息（四种方法）/d0d623aba268.png)

还是检查元素复制xpath，具体参考[xpath实例参考文档](https://blog.csdn.net/m0_59180666/article/details/128527232?spm=1001.2014.3001.5501 "xpath实例参考文档") ，这里就不赘述了

```python
def download_one_page(url):
    # 拿到页面源代码
    resp = requests.get(url, headers=ua)
    html = etree.HTML(resp.text)
    table_body = html.xpath("/html/body/div/div[4]/div/div[2]/div[2]/table/tbody")[0]
    # trs = table_body.xpath("./tr")
    trs = table_body.xpath("./tr")
    # 拿到每个tr
    for tr in trs:
        txt = tr.xpath("./td/text()")
        # print(txt)
        # 把数据存放在文件中
        csvwriter.writerow(txt)
    print(url, "提取完毕!")
```

#### 2\. 创建线程池

线程池等相关知识参照[线程池与进程池](https://blog.csdn.net/m0_59180666/article/details/128581928?spm=1001.2014.3001.5501 "线程池与进程池")

```python
if __name__ == '__main__':
    # for i in range(1, 1145):  # 效率及其低下
    #   download_one_page(f"http://“见评论区”/import/list-1_{i}.html")

    # 创建线程池
    with ThreadPoolExecutor(50) as t:
        for i in range(1, 200):
            # 把下载任务提交给线程池
            t.submit(download_one_page, f"http://“见评论区”/import/list-1_{i}.html")
    f.close()
    print("全部下载完毕!")
```

这里我就只爬200页，想爬更多的话就改数据。

#### 3\. 保存到文件

```python
f = open("4_price_data.csv", mode="w", encoding="utf-8", newline="")
csvwriter = csv.writer(f)
```

* * *

### 运行效果

![](/images/posts/21.-实战：多线程+xpath抓取大量菜价信息（四种方法）/1f3e425e85e3.png)

可以看到提取速度还是特别快的！

* * *

### 完整代码

```python
# 1. 如何提取单个页面的数据
# 2. 上线程池,多个页面同时抓取
import requests
from lxml import etree
import csv
from concurrent.futures import ThreadPoolExecutor

f = open("4_price_data.csv", mode="w", encoding="utf-8", newline="")
csvwriter = csv.writer(f)

ua = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36 Edg/104.0.1293.54"
}


def download_one_page(url):
    # 拿到页面源代码
    resp = requests.get(url, headers=ua)
    html = etree.HTML(resp.text)
    table_body = html.xpath("/html/body/div/div[4]/div/div[2]/div[2]/table/tbody")[0]
    # trs = table_body.xpath("./tr")
    trs = table_body.xpath("./tr")
    # 拿到每个tr
    for tr in trs:
        txt = tr.xpath("./td/text()")
        # print(txt)
        # 把数据存放在文件中
        csvwriter.writerow(txt)
    print(url, "提取完毕!")


if __name__ == '__main__':
    # for i in range(1, 1145):  # 效率及其低下
    #   download_one_page(f"http://“见评论区”/import/list-1_1.html")

    # 创建线程池
    with ThreadPoolExecutor(50) as t:
        for i in range(1, 200):
            # 把下载任务提交给线程池
            t.submit(download_one_page, f"http://“见评论区”/import/list-1_{i}.html")
    f.close()
    print("全部下载完毕!")
```

* * *

### 举一反三

#### 多进程+xpath

```python
# 1. 如何提取单个页面的数据
# 2. 上线程池,多个页面同时抓取
import requests
from lxml import etree
import csv
from concurrent.futures import ProcessPoolExecutor

f = open("4_price_data.csv", mode="w", encoding="utf-8", newline="")
csvwriter = csv.writer(f)

ua = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36 Edg/104.0.1293.54"
}


def download_one_page(url):
    # 拿到页面源代码
    resp = requests.get(url, headers=ua)
    html = etree.HTML(resp.text)
    table_body = html.xpath("/html/body/div/div[4]/div/div[2]/div[2]/table/tbody")[0]
    # trs = table_body.xpath("./tr")
    trs = table_body.xpath("./tr")
    # 拿到每个tr
    for tr in trs:
        txt = tr.xpath("./td/text()")
        # print(txt)
        # 把数据存放在文件中
        csvwriter.writerow(txt)
    print(url, "提取完毕!")


if __name__ == '__main__':
    # for i in range(1, 1145):  # 效率及其低下
    #   download_one_page(f"http://“见评论区”/import/list-1_1.html")

    # 创建线程池
    with ProcessPoolExecutor(50) as t:
        for i in range(1, 200):
            # 把下载任务提交给线程池
            t.submit(download_one_page, f"http://“见评论区”/import/list-1_{i}.html")
    f.close()
    print("全部下载完毕!")
```

#### 多线程+bs4

```python
# 1. 如何提取单个页面的数据
# 2. 上线程池,多个页面同时抓取
import requests
from bs4 import BeautifulSoup
import csv
from concurrent.futures import ThreadPoolExecutor

f = open("4_price_data.csv", mode="w", encoding="utf-8", newline="")
csvwriter = csv.writer(f)

ua = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36 Edg/104.0.1293.54"
}


def download_one_page(url):
    # 使用bs4解析数据（两步）
    # 1. 生成bs对象
    resp = requests.get(url)
    page = BeautifulSoup(resp.text, "html.parser")  # 指定html解析器

    # 2. 从bs对象中查找数据
    # find(标签, 属性=值)：找第一个
    # find_all(标签, 属性=值)：找全部

    # table = page.find("table",class_="price-table")     # class是python中的关键字，加_以示区别
    # 另一种写法：
    table = page.find("table", attrs={"class": "price-table"})  # 和上一行是一个意思，此时可以避免class
    # print(table)

    # 不想要列名那一行（表头），只想要底下的数据，即拿到所有数据行
    trs = table.find_all("tr")[1:]  # tr是行的意思
    for tr in trs:  # 每一行
        tds = tr.find_all("td")  # td表示单元格。拿到每行中的所有td
        # print(tds[0])
        # 名字、产地、均价（元/公斤）、规格、日期
        name = tds[0].text  # .text表示拿到被标签标记的内容
        place = tds[1].text
        avg_price = tds[2].text
        spec = tds[3].text
        date = tds[4].text
        # print(name,place,avg_price,spec,date)

        csvwriter.writerow([name, place, avg_price, spec, date])
    print(url, "提取完毕!")


if __name__ == '__main__':
    # for i in range(1, 1145):  # 效率及其低下
    #   download_one_page(f"http://“见评论区”/import/list-1_1.html")

    # 创建线程池
    with ThreadPoolExecutor(50) as t:
        for i in range(1, 200):
            # 把下载任务提交给线程池
            t.submit(download_one_page, f"http://“见评论区”/import/list-1_{i}.html")
    f.close()
    print("全部下载完毕!")
```

#### 多进程+bs4

```python
# 1. 如何提取单个页面的数据
# 2. 上线程池,多个页面同时抓取
import requests
from bs4 import BeautifulSoup
import csv
from concurrent.futures import ProcessPoolExecutor

f = open("4_price_data.csv", mode="w", encoding="utf-8", newline="")
csvwriter = csv.writer(f)

ua = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36 Edg/104.0.1293.54"
}


def download_one_page(url):
    # 使用bs4解析数据（两步）
    # 1. 生成bs对象
    resp = requests.get(url)
    page = BeautifulSoup(resp.text, "html.parser")  # 指定html解析器

    # 2. 从bs对象中查找数据
    # find(标签, 属性=值)：找第一个
    # find_all(标签, 属性=值)：找全部

    # table = page.find("table",class_="price-table")     # class是python中的关键字，加_以示区别
    # 另一种写法：
    table = page.find("table", attrs={"class": "price-table"})  # 和上一行是一个意思，此时可以避免class
    # print(table)

    # 不想要列名那一行（表头），只想要底下的数据，即拿到所有数据行
    trs = table.find_all("tr")[1:]  # tr是行的意思
    for tr in trs:  # 每一行
        tds = tr.find_all("td")  # td表示单元格。拿到每行中的所有td
        # print(tds[0])
        # 名字、产地、均价（元/公斤）、规格、日期
        name = tds[0].text  # .text表示拿到被标签标记的内容
        place = tds[1].text
        avg_price = tds[2].text
        spec = tds[3].text
        date = tds[4].text
        # print(name,place,avg_price,spec,date)

        csvwriter.writerow([name, place, avg_price, spec, date])
    print(url, "提取完毕!")


if __name__ == '__main__':
    # for i in range(1, 1145):  # 效率及其低下
    #   download_one_page(f"http://“见评论区”/import/list-1_1.html")

    # 创建线程池
    with ProcessPoolExecutor(50) as t:
        for i in range(1, 200):
            # 把下载任务提交给线程池
            t.submit(download_one_page, f"http://“见评论区”/import/list-1_{i}.html")
    f.close()
    print("全部下载完毕!")
```

* * *

### **总结**

我们今天通过实战批量获取了某网站大量的菜价信息，实践了bs4、xpath、线程池、进程池的应用。**访问的网站见评论区！！！**
