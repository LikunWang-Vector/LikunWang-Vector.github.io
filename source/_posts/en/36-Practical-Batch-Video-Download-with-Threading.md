---
title: "36. Practical: Batch Video Download with Thread Pool"
date: 2023-02-01
updated: 2023-02-01
categories:
  - Python Web Scraping from Beginner to Pro
tags:
  - python
  - selenium
  - testing-tools
  - thread-pool
  - data-analysis
cover: /images/posts/36.-实战：基于上一节的全面升级——实现某音批量下载功能/fd082fdf5276.png
lang_pair:
  zh-CN: "36. 实战：基于上一节的全面升级——实现某音批量下载功能"
---

> This article is translated from my CSDN blog
> Original link: [36. 实战：基于上一节的全面升级——实现某音批量下载功能](https://blog.csdn.net/m0_59180666/article/details/128828084)
> 📊 790 views | 👍 4 likes | 💬 6 comments | ⭐ 6 favorites

**Table of Contents**

Introduction

Objective

Approach

Code Implementation

1. Encapsulate single video download as a function
2. Get download list
3. Create thread pool to call download function

Complete Source Code

Results

Summary

---

### Introduction

In the previous section, we implemented watermark-free video downloading. This section implements batch scraping: given a user's homepage, scrape all their videos.

---

### Objective

Efficiently batch scrape all videos from any user homepage using multi-threading.

---

### Approach

1. We've already implemented single video watermark-free download - we just need to get many video links from the homepage
2. Visit user homepage, inspect elements, find video list, get many links
3. Create thread pool, put video links into single video download function for batch execution

---

### Code Implementation

#### 1. Encapsulate single video download as a function

```python
def grab_single_video(link):
    url = f'{link}'
    headers = {
        'cookie': 'your_cookie_here',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
    resp = requests.get(url=url, headers=headers)
    
    # Regex to extract title
    obj = re.compile(r"<span><span><span><span>(?P<title>.*?)</span></span></span></span>", re.S)
    title = obj.search(resp.text).group("title")
    
    # Regex to extract video info
    info = re.findall('<script id="RENDER_DATA" type="application/json">(.*?)</script', resp.text)[0]
    
    # URL decode
    html_data = urllib.parse.unquote(info)
    html_data = json.loads(html_data)
    
    # Get video playback link
    video_url = 'https:' + html_data['41']['aweme']['detail']['video']['bitRateList'][0]['playAddr'][0]['src']
    
    # Get video binary data
    video_content = requests.get(url=video_url, headers=headers).content
    
    # Save video
    if not os.path.exists('./video_batch'):
        os.mkdir('./video_batch')
    with open('./video_batch/' + title + '.mp4', mode='wb') as f:
        f.write(video_content)
```

For detailed explanation, see the previous section on video watermark removal.

#### 2. Get download list

This uses Selenium's scroll functionality, continuously scrolling to the bottom of the homepage. The stopping condition is when scroll distances above and below are equal - quite clever.

Inspecting elements reveals the video list is in a CSS selector, all in one class. Use CSS selectors to filter all list items in this class.

Create an empty list, iterate through all list items, write their href to the list, and return it.

```python
def grab_video_list():
    # Prepare configuration
    opt = Options()
    opt.add_argument("--headless")
    opt.add_argument("--disable-gpu")
    driver = Chrome(options=opt)
    
    driver.get('https://www.example.com/user/homepage')
    
    # Scroll down until all elements are visible
    temp_height = 0
    while True:
        driver.execute_script("window.scrollBy(0,1000)")
        time.sleep(1)
        check_height = driver.execute_script(
            "return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;")
        if check_height == temp_height:
            break
        temp_height = check_height
        print(check_height)
    
    lis = driver.find_elements(By.CSS_SELECTOR, '.video-item')
    url_list = []
    for li in lis:
        url = li.find_element(By.CSS_SELECTOR, 'a').get_attribute('href')
        url_list.append(url)
    return url_list
```

#### 3. Create thread pool to call download function

This is the main function logic:

```python
def main():
    video_list = grab_video_list()
    # Create thread pool
    with ThreadPoolExecutor(50) as t:
        for i in video_list:
            t.submit(grab_single_video, link=i)
    print("Complete!")
```

First get all homepage links with the list function, then create a thread pool and submit all links to the download function.

---

### Results

The program scrolls through the user's homepage, collects all video links, then downloads them in parallel using the thread pool. All videos are saved locally without watermarks.

---

### Summary

This section implemented efficient batch scraping of all videos from any user homepage using multi-threading. Just replace the homepage URL to use it with any creator's page.
