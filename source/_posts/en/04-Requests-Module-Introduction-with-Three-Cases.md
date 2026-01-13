---
title: "04. Requests Module Introduction with Three Cases (Sogou Search/Baidu Translate/Douban Movies)"
date: 2022-12-28
updated: 2022-12-28
categories:
  - Python Web Crawler Tutorial
tags:
  - python
  - programming
  - crawler
  - baidu
lang: en
cover: /images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/c1cbbc3abfb2.png
lang_pair:
  zh-CN: "04. requests模块入门与三个案例（搜狗搜索/百度翻译/豆瓣电影）"
---

> This article was migrated from CSDN blog
> Original link: [04. requests模块入门与三个案例](https://blog.csdn.net/m0_59180666/article/details/128471531)

**Table of Contents**

Introduction

Installing Requests

1\. Install via CMD

2\. Install in PyCharm

3\. Install in Anaconda Virtual Environment

4\. Verify Installation

Case 1: Scraping Sogou Search Content

Case 2: Building Your Own Translation Program Using Baidu Translate

Case 3: Reading Douban Movie High Score Rankings

Summary

* * *

### Introduction

In previous sections, we used urllib to scrape page source code - it's a built-in Python module, but not our commonly used crawling tool.

The commonly used module for scraping pages is the third-party module - requests. This module's advantage is that it's even simpler than urllib and handles various requests conveniently.

* * *

### Installing Requests

Since it's a third-party module, we need to install it. Installation methods:

#### 1\. Install via CMD

① Press Win+R, type cmd, press Enter

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/c1cbbc3abfb2.png)

② Type pip install requests

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/288a65dee119.png)

If installation is slow, use a domestic mirror:

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/8c861acca5af.png)

#### 2\. Install in PyCharm

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/253c2177e363.png)

If installation is slow, use a domestic mirror:

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/464e99ad24df.png)

#### 3\. Install in Anaconda Virtual Environment

① Open Anaconda 3 Prompt

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/82e3d9af4c24.png)

② Create a virtual environment (skip if you already have one)

Type conda create -n environment_name python=X.X, press Enter

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/d0543bcb4d90.png)

After waiting, the following interface appears, type y, press Enter

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/47b2bfa6bd2b.png)

After waiting, you can see it's been created successfully

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/2053071a4a95.png)

③ Activate the virtual environment

Type conda activate environment_name, or activate environment_name

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/1504d02cf78b.png)

Type pip install requests

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/148346287164.png)

If installation is slow, use a domestic mirror:

pip install requests -i https://pypi.tuna.tsinghua.edu.cn/simple requests

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/4a9f53065c6c.png)

You can also use conda to install, type conda install requests

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/e7bfb1eb3dca.png)

Type y, press Enter

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/675fcbc46559.png)

After waiting, "done" appears - installation successful.

#### 4\. Verify Installation

① You can import requests in a py file to see if there's an error

② You can type pip list in the methods mentioned above to view the installed library list (using Anaconda as an example)

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/eaa4c1e406e5.png)

You can see requests is now in our installed list - installation complete.

* * *

### Case 1: Scraping Sogou Search Content

```python
import requests

url = 'https://www.so.com/s?ie=utf-8&src=dlm_b_cube&shb=1&hsid=0d7b9150b571cec3&ls=n144c1cd899&ssid=&q=周杰伦'
ua = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36 Edg/104.0.1293.54"
}

# resp = requests.get(url)  # This might get blocked, identified as a crawler, need to use User-Agent parameter (headers) to disguise
resp = requests.get(url, headers=ua)  # Handle a small anti-crawling measure

print(resp)
print(resp.text)  # Get page source code

resp.close()
```

The url can be modified as needed - copy the URL from whichever search page you want to scrape;

ua (User-Agent) needs to be copied from your own response headers mentioned in the previous section.

Lines 9/10 handle a small anti-crawling measure, "disguising" our Python program's request UA (User Agent) as a normal browser instead of programming software.

* * *

### Case 2: Building Your Own Translation Program Using Baidu Translate

```python
import requests

url = "https://fanyi.baidu.com/sug"
s = input("Please enter the English word you want to translate: ")
dat = {
    "kw": s
}

# Send POST request, data must be in a dictionary, passed through the data parameter
resp = requests.post(url, data=dat)

# print(resp.text)  # Chinese will appear as codes, not convenient for data extraction
resp_json = resp.json()  # Process server response directly as json() => Python dictionary

print(resp_json['data'][0]['v'])  # Get the content from the returned dictionary

resp.close()
```

This code doesn't need modification and can be used directly.

Note the URL https://fanyi.baidu.com/sug - through F12 we can see it's submitted via POST, so we also need to simulate a POST request using the requests.post() API. The response is returned to resp, then processed directly as JSON data (equivalent to a Python dictionary). Printing this JSON directly shows too much complex information. We selectively print the content we need to display our desired translation result with better readability~

Running example:

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/6d5201cea850.png)

You can see we've perfectly "borrowed" Baidu Translate's results! Quite satisfying for beginners~

* * *

### Case 3: Reading Douban Movie High Score Rankings

```python
import requests

# url = "https://movie.douban.com/j/chart/top_list?type=24&interval_id=100%3A90&action=&start=0&limit=20"
# Too many complex parameters, using f{} substitution is too tedious
url = "https://movie.douban.com/j/chart/top_list"

# Re-encapsulate parameters
param = {
    "type": "24",
    "interval_id": "100:90",
    "action": "",
    "start": 0,
    "limit": 20,
}

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36 Edg/104.0.1293.54"
}

# resp = requests.get(url=url, params=param)  # Need to add headers because of anti-crawling
resp = requests.get(url=url, params=param, headers=headers)

print(resp.request.url)  # Show actual accessed URL, i.e., url+?+params
# print(resp.text)  # Nothing displayed means blocked, first check UA
# print(resp.request.headers)  # Check if headers have issues

print(resp.json())

# start's function: start from which rank
# limit's function: how many to query at once

resp.close()  # Close resp, otherwise request ports might get blocked
```

Here we used a clever approach - since the original URL was too long and complex, we took a different path by re-encapsulating a set of parameters, putting all parameters after top_list into param for easier modification later.

headers is the UA we mentioned before - you can change the parameter name as you like~

Here we use GET request, different from Case 2. It's easy to understand - as mentioned before, POST is for uploading/modifying, GET is for retrieving/downloading. So Baidu Translate needs to POST the word we want to translate, while Douban Movies needs to GET the information we want.

In GET requests, our param content is automatically appended to the URL, automatically concatenating into that long code we saw at the beginning! Actually, start's function is which rank to start from, and limit's function is how many to query at once. Knowing these two conditions, you can write a loop to execute n times to get Douban Movies' top 20n ranking details.

* * *

### Summary

In this section, we learned how to install the requests module, successfully wrote three simple crawler cases, learned about requests usage with two different request methods, increased our learning interest, and boosted our programming confidence. I hope everyone can progress together with me and keep working hard~
