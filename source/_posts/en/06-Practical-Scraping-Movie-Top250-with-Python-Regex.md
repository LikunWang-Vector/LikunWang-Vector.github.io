---
title: "06. Practical: Scraping Movie Top250 with Python Regex"
date: 2022-12-29
updated: 2022-12-29
categories:
  - Python Web Scraping Tutorial
tags:
  - web scraping
  - python
  - pycharm
  - regular expressions
csdn_views: 913
csdn_likes: 6
csdn_comments: 1
csdn_favorites: 16
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128482573
cover: /images/posts/06.-实战：Python正则法抓取某电影网Top250信息/9546f4c712a0.png
lang_pair:
  zh-CN: "06. 实战：Python正则法抓取某电影网Top250信息"
---

> This article was migrated from CSDN blog
> Original link: [06. Practical: Scraping Movie Top250 with Python Regex](https://blog.csdn.net/m0_59180666/article/details/128482573)
> 📊 913 views | 👍 6 likes | 💬 1 comment | ⭐ 16 favorites

**Table of Contents**

Introduction

Requirements

Approach

Code Implementation

Complete Code

Results

Summary

* * *

### Introduction

After learning the basics in previous chapters, we now have the ability to work on small projects. Our target is the movie ranking website we mentioned before - we'll scrape the Top 250 movies for practice.

* * *

### Requirements

Scrape the "Movie Name", "Release Year", "Rating", and "Number of Ratings" from a movie website's Top 250 list, and save them to a file.

![](/images/posts/06.-实战：Python正则法抓取某电影网Top250信息/9546f4c712a0.png)

* * *

### Approach

Check the page source code to see if the data is included. If not in the source code, consider JavaScript dynamic loading - you'll need to find the data source. Otherwise, parse the source code directly with regex.

![](/images/posts/06.-实战：Python正则法抓取某电影网Top250信息/66d59f943f34.png)

As we can see, all the data we need is in the source code, so we can directly use the regex method we just learned to extract the data we want!

* * *

### Code Implementation

Step one, our old friend - get the page source code first:

```python
url = 'https://movie.douban.com/top250'
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36 Edg/104.0.1293.54"
}
resp = requests.get(url, headers=headers)
page_content = resp.text
```

Following our approach, step two is to observe the source code and write the corresponding regex:

```python
# Parse data
obj = re.compile(r'<li>.*?<div class="item">.*?<span class="title">(?P<moviename>.*?)'
                 r'</span>.*?<p class="">.*?<br>(?P<movieyear>.*?)&nbsp.*?<span '
                 r'class="rating_num" property="v:average">(?P<moviescore>.*?)</span>.*?'
                 r'<span>(?P<ratingnum>.*?)人评价</span>', re.S)
```

From the page source code, we can see that movie information starts from the `<li>` tag. Then we find `<span class="title">` where we can get the movie name. We use the `?P<groupname>` method to name it for easier extraction later. The same applies to the rest - we find the release year, rating, and number of ratings and name them accordingly.

Here's a portion of the page source code (one movie info section) for comparison with the regex:

```html
<li>
    <div class="item">
        <div class="pic">
            <em class="">1</em>
            <a href="https://movie.douban.com/subject/1292052/">
                <img width="100" alt="The Shawshank Redemption" src="https://img2.doubanio.com/view/photo/s_ratio_poster/public/p480747492.webp" class="">
            </a>
        </div>
        <div class="info">
            <div class="hd">
                <a href="https://movie.douban.com/subject/1292052/" class="">
                    <span class="title">The Shawshank Redemption</span>
                    <span class="title">&nbsp;/&nbsp;The Shawshank Redemption</span>
                    <span class="other">&nbsp;/&nbsp;Alternative titles</span>
                </a>
                <span class="playable">[Playable]</span>
            </div>
            <div class="bd">
                <p class="">
                    Director: Frank Darabont&nbsp;&nbsp;&nbsp;Starring: Tim Robbins /...<br>
                    1994&nbsp;/&nbsp;USA&nbsp;/&nbsp;Crime Drama
                </p>
                <div class="star">
                    <span class="rating5-t"></span>
                    <span class="rating_num" property="v:average">9.7</span>
                    <span property="v:best" content="10.0"></span>
                    <span>2763627 ratings</span>
                </div>
                <p class="quote">
                    <span class="inq">Hope sets you free.</span>
                </p>
            </div>
        </div>
    </div>
</li>
```

Step three, start matching and save the data to your preferred file format. I'm using a CSV file here, which is similar to a spreadsheet format. You'll need to import the csv library - the complete code is provided below.

```python
# Start matching
result = obj.finditer(page_content)
with open("data.csv", mode="w", encoding='utf-8', newline='') as f:
    csvwriter = csv.writer(f)
    for i in result:
        print(i.group("moviename"))
        print(i.group("moviescore"))
        print(i.group("ratingnum"))
        print(i.group("movieyear").strip())  # strip() removes leading spaces
        dic = i.groupdict()
        dic['movieyear'] = dic['movieyear'].strip()
        csvwriter.writerow(dic.values())
    f.close()
print("over!")
```

At this point, we notice we only scraped the top 25. How do we get the rest?

Scrolling to the bottom, we find the ranking is paginated, not all on one page. This makes sense - requesting 250 items at once means large data transfer, which can cause server congestion and transmission errors.

Clicking to page two, we see the URL changed:

![](/images/posts/06.-实战：Python正则法抓取某电影网Top250信息/016257bc4e4f.png)

It added "?start=25&filter=" at the end. You can probably guess what this means - it starts displaying from rank 25!

Let's modify the URL and change the start parameter to 0. Sure enough, it shows the first page:

![](/images/posts/06.-实战：Python正则法抓取某电影网Top250信息/28db8a35a1cb.png)

Now the approach is clear - we just need to loop through the source code, incrementing the start parameter by 25 each time, looping 10 times to export all the data we want!

A simple for loop will do, but to avoid overwriting previous data, we need to change the CSV write mode to "a+" to append subsequent data. Otherwise, we'd only get ranks 226-250.

* * *

### Complete Code

```python
# Get page source code => requests
# Extract useful information through re => re
import requests
import re
import csv

for rank in range(10):
    url = 'https://movie.douban.com/top250' + '?start=' + str(25 * rank) + '&filter='
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36 Edg/104.0.1293.54"
    }
    resp = requests.get(url, headers=headers)
    page_content = resp.text

    # Parse data
    obj = re.compile(r'<li>.*?<div class="item">.*?<span class="title">(?P<moviename>.*?)'
                     r'</span>.*?<p class="">.*?<br>(?P<movieyear>.*?)&nbsp.*?<span '
                     r'class="rating_num" property="v:average">(?P<moviescore>.*?)</span>.*?'
                     r'<span>(?P<ratingnum>.*?)人评价</span>', re.S)

    # Start matching
    result = obj.finditer(page_content)
    with open("data.csv", mode="a+", encoding='utf-8', newline='') as f:
        csvwriter = csv.writer(f)
        for i in result:
            print(i.group("moviename"))
            print(i.group("moviescore"))
            print(i.group("ratingnum"))
            print(i.group("movieyear").strip())  # strip() removes leading spaces
            dic = i.groupdict()
            dic['movieyear'] = dic['movieyear'].strip()
            csvwriter.writerow(dic.values())
        f.close()
print("over!")
```

Remember to replace with your own User-Agent! As explained in previous chapters, just press F12 to open developer tools, go to Network tab, find your User-Agent in the response headers, and replace my headers with yours.

There's room for optimization in this code. Think about how to reduce time and space complexity to improve efficiency. Feel free to share your suggestions!

* * *

### Results

Here's a brief look at my results:

![](/images/posts/06.-实战：Python正则法抓取某电影网Top250信息/31c69e129a06.png)

* * *

### Summary

Today we learned how to use our basic knowledge to build a small program that scrapes a movie ranking website. We used the regex method to scrape information, further familiarizing ourselves with this scraping approach. If you're interested, try finding other websites to scrape information from.

Remember to be moderate - don't access too frequently or your IP might get banned!

Also remember to use `resp.close()` to close the request port to avoid occupying too many ports and being unable to access web pages.
