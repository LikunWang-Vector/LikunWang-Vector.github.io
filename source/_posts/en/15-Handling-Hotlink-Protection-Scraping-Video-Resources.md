---
title: "15. Handling Hotlink Protection: Scraping Video Resources"
date: 2023-01-04
updated: 2023-01-04
categories:
  - Python Web Scraping Tutorial
tags:
  - audio video
  - javascript
  - programming
  - web scraping
  - data analysis
csdn_views: 4112
csdn_likes: 8
csdn_comments: 2
csdn_favorites: 24
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128550041
cover: /images/posts/15.-防盗链的处理：获取某视频网站的视频资源/b2999e1b5f91.png
lang_pair:
  zh-CN: "15. 防盗链的处理：获取某视频网站的视频资源"
---

> This article was migrated from CSDN blog
> Original link: [15. Handling Hotlink Protection: Scraping Video Resources](https://blog.csdn.net/m0_59180666/article/details/128550041)
> 📊 4112 views | 👍 8 likes | 💬 2 comments | ⭐ 24 favorites

**Table of Contents**

Introduction

Objective

Approach

Code Implementation

Step 1: Clarify approach, import libraries

Step 2: Get video URL, extract contId, get JSON URL

Step 3: Try accessing page, add security info

Key Point: Referer

Step 4: Decorate request headers, get info

Step 5: Get video resource URL and replace key info

Step 6: Download video

Complete Code

Summary

* * *

### Introduction

In the previous chapter, we learned advanced Request usage, session concepts, and security verification info. This chapter uses a video website as an example to demonstrate our learning.

* * *

### Objective

Scrape video resources from a known page on a video website and save locally, bypassing the site's anti-scraping measure: hotlink protection.

* * *

### Approach

1. First open the target page, inspect source code using developer tools (F12) to find the video resource tag:

![](/images/posts/15.-防盗链的处理：获取某视频网站的视频资源/b2999e1b5f91.png)

2. Copy the video link from src, visit the page to verify it's a video resource:

![](/images/posts/15.-防盗链的处理：获取某视频网站的视频资源/2d586f216cb1.png)

![](/images/posts/15.-防盗链的处理：获取某视频网站的视频资源/c5ef430c3703.png)

We successfully got the video resource. But did we really succeed? Check the page source code - does it contain this `<video>` tag or video link?

3. Source code verification

Checking page source with CTRL+F, we find the resource **doesn't exist**:

![](/images/posts/15.-防盗链的处理：获取某视频网站的视频资源/e988c6fb5fe8.png)

![](/images/posts/15.-防盗链的处理：获取某视频网站的视频资源/d165ef1b7454.png)

Actually, when using developer tools to inspect pages, the "source code" shown isn't the original - it's been parsed to present the complete page resources. If we access directly with Python, we **can't get** the processed `<video>` tag, so this approach won't work. But at least we know what our **target link** looks like.

4. Developer tools network inspection

Open developer tools, switch to Network tab, filter to Fetch/XHR. XHR is XMLHttpRequest - a JavaScript object provided by browsers to request server data resources. We switch to this filter because **if it's not in source code, it's usually in JS object requests**.

![](/images/posts/15.-防盗链的处理：获取某视频网站的视频资源/d62b862e24d4.png)

5. Open the request to inspect, preview, and **unwrap JSON data layer by layer to find the request link**:

![](/images/posts/15.-防盗链的处理：获取某视频网站的视频资源/d6988cdcc1c8.png)

6. Visit this link to check if we can request the video resource:

![](/images/posts/15.-防盗链的处理：获取某视频网站的视频资源/6183d28a861a.png)

7. Can't access it. Let's **compare** the two links:

```html
Correct: https://video.example.com/mp4/adshort/20180420/cont-1328058-11924608_adpkg-ad_hd.mp4
Wrong:   https://video.example.com/mp4/adshort/20180420/1672821168882-11924608_adpkg-ad_hd.mp4
```

The only difference is 'cont-1328058' vs '1672821168882'. We just need to figure out what these are and replace them.

8. Find the meaning of both items

![](/images/posts/15.-防盗链的处理：获取某视频网站的视频资源/7e6096eedf4c.png)

The number after 'cont-1328058' is the number after the underscore in our page URL!

![](/images/posts/15.-防盗链的处理：获取某视频网站的视频资源/58bfabb808e7.png)

'1672821168882' is the 'systemTime' from our scraped JSON data!

Now the approach is clear - let's code.

* * *

### Code Implementation

#### Step 1: Clarify approach, import libraries

```python
# 1. Get contId from link
# 2. Get srcURL from videoStatus JSON response
# 3. Replace content in srcURL
# 4. Download video

import requests
```

#### Step 2: Get video URL, extract contId, get JSON URL

```python
# Video page URL
url = "target_url_here"
contId = url.split("_")[1]
```

Python's **split()** splits the target string into parts - we want the part after the underscore, so we take [1].

![](/images/posts/15.-防盗链的处理：获取某视频网站的视频资源/1f03647b4c5d.png)

Now we have this part. The 'mrd' is probably an auto-generated random number - we can ignore it.

Generate the universal video resource request:

```python
videoStatusUrl = f"https://www.example.com/videoStatus.jsp?contId={contId}"
```

#### Step 3: Try accessing page, add security info

![](/images/posts/15.-防盗链的处理：获取某视频网站的视频资源/15229059e982.png)

We can get UA from request headers, but only adding UA to headers won't let us access the page - because of **Referer**.

#### Key Point: Referer

This is the hotlink protection we've been discussing. Its function is tracing origin - telling the server where the current request came from. The server rejects non-page-jump access. Since it requires this, we just declare it in headers.

#### Step 4: Decorate request headers, get info

```python
headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36",
    # Hotlink protection: tracing, who is the previous level of this request
    "Referer": url
}
resp = requests.get(videoStatusUrl, headers=headers)
dic = resp.json()
```

The hotlink protection is just our original page, so set it to that.

Since it returns JSON, we process it with resp.json().

#### Step 5: Get video resource URL and replace key info

```python
srcUrl = dic['videoInfo']['videos']['srcUrl']
systemTime = dic['systemTime']
srcUrl = srcUrl.replace(systemTime, f"cont-{contId}")
```

#### Step 6: Download video

```python
# Download video
with open("3_result.mp4", mode="wb") as f:
    f.write(requests.get(srcUrl).content)
```

* * *

### Complete Code

```python
# 1. Get contId
# 2. Get srcURL from videoStatus JSON response
# 3. Modify srcURL content
# 4. Download video

import requests

# Video page URL
url = "target_url_here"
contId = url.split("_")[1]
videoStatusUrl = f"https://www.example.com/videoStatus.jsp?contId={contId}"

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36",
    # Hotlink protection: tracing, who is the previous level of this request
    "Referer": url
}

resp = requests.get(videoStatusUrl, headers=headers)
dic = resp.json()

srcUrl = dic['videoInfo']['videos']['srcUrl']
systemTime = dic['systemTime']
srcUrl = srcUrl.replace(systemTime, f"cont-{contId}")

# Download video
with open("3_result.mp4", mode="wb") as f:
    f.write(requests.get(srcUrl).content)
```

* * *

### Summary

We practiced advanced requests usage, became familiar with web developer tools, "cracked" the website's hotlink protection, and performed an anti-anti-scraping operation.
