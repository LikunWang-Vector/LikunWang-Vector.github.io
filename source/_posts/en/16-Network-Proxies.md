---
title: "16. Network Proxies"
date: 2023-01-04
updated: 2023-01-04
categories:
  - Python Web Scraping Tutorial
tags:
  - network
  - proxy pattern
  - web scraping
  - data analysis
  - python
csdn_views: 435
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 3
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128555651
cover: /images/posts/16.-网络代理/2c0552b58e18.png
lang_pair:
  zh-CN: "16. 网络代理"
---

> This article was migrated from CSDN blog
> Original link: [16. Network Proxies](https://blog.csdn.net/m0_59180666/article/details/128555651)
> 📊 435 views | 👍 1 like | 💬 1 comment | ⭐ 3 favorites

**Table of Contents**

Introduction

How Proxies Work

Using Proxies in Python

Summary

* * *

### Introduction

Have you encountered this situation: when repeatedly scraping a website in a short time, due to too frequent requests or not closing request ports (resp.close()), the server blocks our IP for anti-scraping purposes. What do we do? The answer is network proxies.

Special note: Deep understanding of network proxies involves some gray areas. Don't use them unless absolutely necessary. Our small-scale daily scraping won't trigger IP blocking unless our IP is already blocked for various reasons, or our scraping volume is too large (needing tens of thousands of requests per second). In these cases, we can moderately use network proxies.

* * *

### How Proxies Work

![](/images/posts/16.-网络代理/2c0552b58e18.png)

As shown, the target server receives requests from the proxy server, including the proxy's IP - it doesn't know your IP behind the proxy. This prevents your local IP from being exposed to the target server, avoiding blocking risks.

Taking it further: if we want to send a thousand requests per second, we can distribute them across a thousand IPs (proxy pool). To the target server, it looks like requests from a thousand different users, which generally won't trigger major countermeasures...

We won't go deeper here - interested readers can explore further on their own...

* * *

### Using Proxies in Python

```python
# Principle: Send requests through a third-party machine
import requests

# 47.92.113.71:80
proxies = {
    "https": "https://47.92.113.71:80"
}

resp = requests.get("https://www.baidu.com", proxies=proxies)
resp.encoding = 'utf-8'
print(resp.text)
```

Using Baidu as an example, we grab a free proxy IP from any proxy website for testing. After running, we can still get the familiar Baidu source code, just a bit slower.

* * *

### Summary

Today we learned about network proxies and how they work. Remember not to misuse proxies - they're in a gray area, and proxy IPs are unstable. We won't discuss further, but feel free to research more if interested.
