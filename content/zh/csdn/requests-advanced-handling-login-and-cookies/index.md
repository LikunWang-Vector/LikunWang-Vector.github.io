---
type: post
csdn: true
title: "14. Requests进阶：处理登录信息与Cookie"
date: "2023-01-03"
lastmod: "2023-01-03"
authors:
  - admin
tags:
  - "爬虫"
  - "python"
  - "网络爬虫"
  - "数据分析"
  - "CSDN"
categories:
  - "Python爬虫入门、进阶与实战"
summary: "我们在前面的爬虫学习过程中已经用过headers了，对它并不陌生。Header为HTTP协议中的请求头，⼀般存放⼀些和请求内容无关的数据，有时也会存放⼀些安全验证信息。比如常见的User-Agent, token, cookie等。"
image:
  filename: "covers/csdn-python-crawler.png"
  caption: "CSDN Archive · PYTHON · CRAWLER"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128530525"
csdn_views: 964
csdn_likes: 3
csdn_comments: 1
csdn_favorites: 6
---

> 本文迁移自CSDN博客
> 原文链接：[14. Requests进阶：处理登录信息与Cookie](https://blog.csdn.net/m0_59180666/article/details/128530525)
> 📊 964 阅读 | 👍 3 点赞 | 💬 1 评论 | ⭐ 6 收藏


### 前言

我们在前面的爬虫学习过程中已经用过headers了，对它并不陌生。Header为HTTP协议中的请求头，⼀般存放⼀些和请求内容无关的数据，有时也会存放⼀些安全验证信息。比如常见的User-Agent, token, cookie等。

通过requests发送的请求，我们可以通过headers保存请求头信息来处理cookie等，也可以单独进行存放，最后由requests来帮我们自动拼接成完整的http请求。

本章我们将引入一个新的概念：会话（session）。它会记住以前请求到的信息，并沿用到后面的url请求，类似浏览器的缓存机制。而request每次都默认是第一次访问，不会记住访问的缓存。

* * *

### 目的

我们以某小说网为例，抓取用户阅读过的小说列表，用requests和session两种方法来操作。

* * *

### 思路

1\. 登录——得到cookie

2\. 带着cookie请求书架url——获取书架内容

* * *

### 代码实现

#### 1\. session法

首先导包，调用session接口，输入用户名密码字典信息（这里自己去注册一下输入就好）

```python
import requests

# 会话
session = requests.session()
data = {
    "loginName": "TODO",
    "password": "TODO"
}
```

检查网络，获取登录url，使用session请求，注意请求方式为post

```python
# 1. 登录
url = "https://passport.17k.com/ck/user/login"
session.post(url, data=data)
# print(resp.text)
# print(resp.cookies)  # 看cookie
```

检查网络，获取书架url，继续使用session请求，注意请求方式为get

```python
# 2. 拿书架上的数据
# 刚才的那个session中是有cookie的
resp = session.get('https://user.17k.com/ck/author/shelf?page=1&appKey=2406394919')

print(resp.json())
```

#### 2\. requests法

登陆后检查浏览器Header信息拿到cookie，在requests请求中直接写入headers中：

![](/images/posts/14.-Requests进阶：处理登录信息与Cookie/2b7d39717143.png)

拿到书架信息的请求URL，并拿到cookie

```python
cookie = 'TODO'
resp = requests.get("https://user.17k.com/ck/author/shelf?page=1&appKey=2406394919", headers={"Cookie": cookie})
print(resp.text)
```

cookie用自己的，每个人的不同。运行也可以看到成功得到结果。这里要注意如果cookie里面是双引号就不能用双引号包裹，要换成单引号。

* * *

### 完整代码

#### session法

```python
# 登录 -> 得到cookie
# 带着cookie 去请求到书架url -> 书架上的内容

# 必须得把上面的两个操作连起来
# 我们可以使用session进行请求 -> session你可以认为是一连串的请求. 在这个过程中的cookie不会丢失
import requests

# 会话
session = requests.session()
data = {
    "loginName": "TODO",
    "password": "TODO"
}

# 1. 登录
url = "https://passport.17k.com/ck/user/login"
session.post(url, data=data)
# print(resp.text)
# print(resp.cookies)  # 看cookie

# 2. 拿书架上的数据
# 刚才的那个session中是有cookie的
resp = session.get('https://user.17k.com/ck/author/shelf?page=1&appKey=2406394919')

print(resp.json())
```

#### requests法

```python
import requests

cookie = 'TODO'
resp = requests.get("https://user.17k.com/ck/author/shelf?page=1&appKey=2406394919", headers={"Cookie": cookie})
print(resp.text)
```

* * *

### 总结

今天我们对requests用法有了进阶，认识了cookie等安全验证信息，练习了session的用法，明白了会话的概念，并用某小说网进行实例验证。下一节我们将爬取某视频网的视频资源。
