---
title: "07. Practical: Scraping Movie Torrent Links with Python Regex"
date: 2022-12-30
updated: 2022-12-30
categories:
  - Python Web Scraping Tutorial
tags:
  - python
  - programming
  - web scraping
  - pycharm
  - regular expressions
csdn_views: 1251
csdn_likes: 3
csdn_comments: 2
csdn_favorites: 8
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128492270
cover: /images/posts/07.-实战：Python正则法抓取某网站2022必看片迅雷/f09781cf5d77.png
lang_pair:
  zh-CN: "07. 实战：Python正则法抓取某网站2022必看片迅雷种子"
---

> This article was migrated from CSDN blog
> Original link: [07. Practical: Scraping Movie Torrent Links with Python Regex](https://blog.csdn.net/m0_59180666/article/details/128492270)
> 📊 1251 views | 👍 3 likes | 💬 2 comments | ⭐ 8 favorites

**Table of Contents**

Introduction

Objective

Approach

Code Implementation

Step 1: Import Libraries

Step 2: Request Source Code

Step 3: Debug Step 2

Step 4: Locate Information with Regex

Step 5: Access and Extract Sub-page Content

Complete Code

Results

Summary

* * *

### Introduction

In the previous chapter, we covered scraping movie Top 250 information with Python regex. This chapter presents another simple regex scraping example: extracting torrent resources from a movie website!

![](/images/posts/07.-实战：Python正则法抓取某网站2022必看片迅雷/f09781cf5d77.png)

* * *

### Objective

Extract movie names and corresponding torrent links from a "2022 Must-Watch Movies" list on a website.

![](/images/posts/07.-实战：Python正则法抓取某网站2022必看片迅雷/cceba41eb059.png)

* * *

### Approach

1. Locate the 2022 Must-Watch Movies section
2. Extract sub-page links from the list
3. Request sub-page links to get the download addresses we want

* * *

### Code Implementation

#### Step 1: Import Libraries

```python
import re
import requests
```

Quick review: the `re` library is for Regular Expressions - Python's regex library for data parsing. The `requests` library is what we use to make web requests.

#### Step 2: Request Source Code

```python
domain = "target_url_here"  # domain is just another way of saying URL
resp = requests.get(domain)
# If error occurs, might be an https issue. Add parameter 'verify=False' to skip security verification
print(resp.text)
```

Two potential issues here:

1. If `resp` throws an error, it might be an HTTPS issue. The difference between https and http is security verification. If we get an error accessing an https page, add `verify=False` to `requests.get()` to skip security verification.

2. When printing the source code, Chinese characters might appear garbled. This is definitely an encoding issue! HTML's default encoding matches PyCharm's - both use UTF-8. But when garbled text appears, we need to find out how this webpage's encoding differs.

#### Step 3: Debug Step 2

1. Modify the resp line:

```python
resp = requests.get(domain, verify=False)
```

2. Observe the webpage source code header tag which specifies the encoding:

`<META http-equiv=Content-Type content="text/html; charset=gb2312">` shows `charset=gb2312`, so we should use gb2312 encoding.

```python
resp.encoding = 'gb2312'  # Specify character set
print(resp.text)
resp.close()
```

Now printing the source code won't show garbled text.

#### Step 4: Locate Information with Regex

1. First check the page source code to locate elements:

![](/images/posts/07.-实战：Python正则法抓取某网站2022必看片迅雷/1ad3ab60dc9c.png)

We can observe that starting from `<ul>`, each `<li>` contains the resource name and link we need.

Note: `<ul>` represents an unordered list, and each `<li>` represents a list item; `<div>` is a block-level element indicating this section is a whole unit.

2. Use regex to locate the above source code:

```python
# Successfully located
obj1 = re.compile(r"2022必看热片.*?<ul>(?P<ul>.*?)</ul>", re.S)
result1 = obj1.finditer(resp.text)
for it in result1:
    ul = it.group('ul')
    # print(ul)
```

We use lazy matching to extract the information wrapped in `<li>` tags. It's quite accurate, but we can't use it directly - we need to refine it and extract the specific details.

3. Apply regex again to get the desired information:

```python
# In HTML, the <a> tag represents a hyperlink. Clicking it jumps to the href link.
# title is the tooltip text that appears on hover. We mainly need the sub-page link in href.
# Extract sub-page links
obj2 = re.compile(r"<a href='(?P<href>.*?)'", re.S)
result2 = obj2.finditer(ul)
child_href_list = []
for i in result2:
    href = i.group('href')
    # Concatenate sub-page URL: domain + sub-page address (extra slash needs to be stripped)
    child_href = domain + href.strip("/")
    # print(child_href)
    # For convenience, store them in a list
    child_href_list.append(child_href)  # Save sub-page links
```

The `<a>` tag represents a hyperlink, and the `href` attribute references the sub-link, which is a path added to the current domain to locate what we need. So we concatenate the domain from our earlier code with the sub-page address.

When printed, we find an extra slash in the link. We use the `strip` function to remove it, then recursively save to the list.

#### Step 5: Access and Extract Sub-page Content

![](/images/posts/07.-实战：Python正则法抓取某网站2022必看片迅雷/ecbe88cd36c5.png)

The information we need appears starting from line 90 in the source code, as shown.

```python
# Extract sub-page content
obj3 = re.compile(r'◎片 名(?P<moviename>.*?)<br />.*?<td '
                  r'style="WORD-WRAP: break-word" bgcolor="#fdfddf"><a href="(?P<download>.*?)">', re.S)
for href in child_href_list:
    child_resp = requests.get(href)
    child_resp.encoding = 'gb2312'
    # print(child_resp.text)
    result3 = obj3.finditer(child_resp.text)
    for j in result3:
        moviename = j.group("moviename")
        download = j.group("download")
        print(moviename)
        print(download)
    # break  # For testing
    child_resp.close()
```

Based on the known information, we write the regex expression, preprocess it, and get the movie name and torrent link.

Then we iterate through all links in the sub-page list to get all the 2022 must-watch movie names and torrents.

* * *

### Complete Code

```python
# Approach:
# 1. Locate the 2022 Must-Watch Movies section
# 2. Extract sub-page links from the list
# 3. Request sub-page links to get download addresses (torrent links)

import re
import requests

domain = "target_url_here"  # domain is just another way of saying URL
resp = requests.get(domain, verify=False)
# If error, might be https issue. Add 'verify=False' to skip security verification
# print(resp.text)

# Chinese encoding defaults to utf-8, but garbled text means encoding issue
# Observed <META http-equiv=Content-Type content="text/html; charset=gb2312">
# charset=gb2312, so use gb2312 encoding
resp.encoding = 'gb2312'  # Specify character set
# print(resp.text)
resp.close()

# Successfully located
obj1 = re.compile(r"2022必看热片.*?<ul>(?P<ul>.*?)</ul>", re.S)
result1 = obj1.finditer(resp.text)
for it in result1:
    ul = it.group('ul')
    # print(ul)

# In HTML, <a> tag is hyperlink, clicking jumps to href link
# title is tooltip text on hover, we mainly need sub-page link in href
# Extract sub-page links
obj2 = re.compile(r"<a href='(?P<href>.*?)'", re.S)
result2 = obj2.finditer(ul)
child_href_list = []
for i in result2:
    href = i.group('href')
    # Concatenate sub-page URL: domain + sub-page address (strip extra slash)
    child_href = domain + href.strip("/")
    # print(child_href)
    # Store in list for convenience
    child_href_list.append(child_href)  # Save sub-page links

# Extract sub-page content
obj3 = re.compile(r'◎片 名(?P<moviename>.*?)<br />.*?<td '
                  r'style="WORD-WRAP: break-word" bgcolor="#fdfddf"><a href="(?P<download>.*?)">', re.S)
for href in child_href_list:
    child_resp = requests.get(href)
    child_resp.encoding = 'gb2312'
    # print(child_resp.text)
    result3 = obj3.finditer(child_resp.text)
    for j in result3:
        moviename = j.group("moviename")
        download = j.group("download")
        print(moviename)
        print(download)
    # break  # For testing
    child_resp.close()
```

* * *

### Results

![](/images/posts/07.-实战：Python正则法抓取某网站2022必看片迅雷/646623511a10.png)

As you can see, both movie names and torrent links were successfully extracted. Done!

* * *

### Summary

Today we used regex to scrape 2022 must-watch movie names and their torrent download links, further practicing the use of the `re` module. Next chapter, we'll briefly introduce HTML syntax to prepare for learning bs4 and xpath later.
