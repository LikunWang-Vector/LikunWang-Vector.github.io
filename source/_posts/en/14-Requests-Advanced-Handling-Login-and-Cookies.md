---
title: "14. Requests Advanced: Handling Login and Cookies"
date: 2023-01-03
updated: 2023-01-03
categories:
  - Python Web Scraping Tutorial
tags:
  - web scraping
  - python
  - web crawler
  - data analysis
csdn_views: 964
csdn_likes: 3
csdn_comments: 1
csdn_favorites: 6
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128530525
cover: /images/posts/14.-Requests进阶：处理登录信息与Cookie/2b7d39717143.png
lang_pair:
  zh-CN: "14. Requests进阶：处理登录信息与Cookie"
---

> This article was migrated from CSDN blog
> Original link: [14. Requests Advanced: Handling Login and Cookies](https://blog.csdn.net/m0_59180666/article/details/128530525)
> 📊 964 views | 👍 3 likes | 💬 1 comment | ⭐ 6 favorites

**Table of Contents**

Introduction

Objective

Approach

Code Implementation

1. Session Method

2. Requests Method

Complete Code

Session Method

Requests Method

Summary

* * *

### Introduction

We've already used headers in our previous scraping lessons. Headers are part of the HTTP protocol's request headers, generally storing data unrelated to request content, but sometimes containing security verification information like User-Agent, token, cookie, etc.

With requests, we can save header information to handle cookies, or store them separately - requests will automatically combine them into a complete HTTP request.

This chapter introduces a new concept: session. It remembers previously requested information and carries it to subsequent URL requests, similar to browser caching. Regular requests default to first-time access and don't remember cached visits.

* * *

### Objective

Using a novel website as an example, we'll scrape the user's reading list using both requests and session methods.

* * *

### Approach

1. Login - get cookie
2. Request bookshelf URL with cookie - get bookshelf content

* * *

### Code Implementation

#### 1. Session Method

First import and call the session interface, input username/password dictionary (register yourself and input):

```python
import requests

# Session
session = requests.session()
data = {
    "loginName": "TODO",
    "password": "TODO"
}
```

Check network, get login URL, use session to request. Note: request method is POST:

```python
# 1. Login
url = "https://passport.17k.com/ck/user/login"
session.post(url, data=data)
# print(resp.text)
# print(resp.cookies)  # View cookie
```

Check network, get bookshelf URL, continue using session. Note: request method is GET:

```python
# 2. Get bookshelf data
# The session from before contains the cookie
resp = session.get('https://user.17k.com/ck/author/shelf?page=1&appKey=2406394919')
print(resp.json())
```

#### 2. Requests Method

After login, check browser Header info to get cookie, write directly into requests headers:

![](/images/posts/14.-Requests进阶：处理登录信息与Cookie/2b7d39717143.png)

Get the bookshelf request URL and cookie:

```python
cookie = 'TODO'
resp = requests.get("https://user.17k.com/ck/author/shelf?page=1&appKey=2406394919",
                    headers={"Cookie": cookie})
print(resp.text)
```

Use your own cookie - everyone's is different. Running this also shows successful results. Note: if the cookie contains double quotes, you can't wrap it with double quotes - use single quotes instead.

* * *

### Complete Code

#### Session Method

```python
# Login -> get cookie
# Request bookshelf URL with cookie -> bookshelf content
# Must connect these two operations
# Use session for requests -> session is a series of requests where cookies aren't lost

import requests

# Session
session = requests.session()
data = {
    "loginName": "TODO",
    "password": "TODO"
}

# 1. Login
url = "https://passport.17k.com/ck/user/login"
session.post(url, data=data)
# print(resp.text)
# print(resp.cookies)  # View cookie

# 2. Get bookshelf data
# The session from before contains the cookie
resp = session.get('https://user.17k.com/ck/author/shelf?page=1&appKey=2406394919')
print(resp.json())
```

#### Requests Method

```python
import requests

cookie = 'TODO'
resp = requests.get("https://user.17k.com/ck/author/shelf?page=1&appKey=2406394919",
                    headers={"Cookie": cookie})
print(resp.text)
```

* * *

### Summary

Today we advanced our requests usage, learned about cookie security verification, practiced session usage, understood the session concept, and verified with a novel website example. Next chapter, we'll scrape video resources from a video website.
