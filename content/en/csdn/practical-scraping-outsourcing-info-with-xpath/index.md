---
type: post
csdn: true
title: "13. Practical: Scraping Outsourcing Info with XPath"
date: "2023-01-03"
lastmod: "2023-01-03"
authors:
  - admin
tags:
  - "servlet"
  - "web scraping"
  - "python"
  - "data analysis"
  - "CSDN"
categories:
  - "Python Web Scraping Tutorial"
summary: "Through previous chapters, we've learned XPath basic syntax. This chapter uses a more complex website for practice - it has many nested tags, perfect for training."
image:
  filename: "covers/csdn-python-crawler.png"
  caption: "CSDN Archive · PYTHON · CRAWLER"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128527232"
csdn_views: 579
csdn_likes: 5
csdn_comments: 5
csdn_favorites: 4
---

> This article was migrated from CSDN blog
> Original link: [13. Practical: Scraping Outsourcing Info with XPath](https://blog.csdn.net/m0_59180666/article/details/128527232)
> 📊 579 views | 👍 5 likes | 💬 5 comments | ⭐ 4 favorites


### Introduction

Through previous chapters, we've learned XPath basic syntax. This chapter uses a more complex website for practice - it has many nested tags, perfect for training.

* * *

### Approach

1. Get page source code
2. Extract and parse data
3. Save data to CSV file

* * *

### Code Implementation

#### Step 1: Get page source code

```python
url = "target_url_here"
resp = requests.get(url)
# print(resp.text)
```

#### Step 2: Parse with XPath HTML parser

```python
# Parse
html = etree.HTML(resp.text)
```

#### Step 3: Inspect source code and get XPath path

Note: This step may have issues because the website changes dynamically. You can't use absolute paths directly - use unique attributes for precise positioning. You can also inspect source code, copy XPath path, then fine-tune.

![](/images/posts/13.-实战：XPath法抓取某网站外包信息/968497d9e1d8.png)

Right-click the service provider section, click Inspect to jump to the corresponding code segment. Moving the mouse shows which section each tag wraps.

![](/images/posts/13.-实战：XPath法抓取某网站外包信息/0fa8ca0fd05a.png)

Through observation, we find the tags we need. After copying the absolute path and removing [1] from the last tag, we can get all similar service provider sections on this page - all search results. But we need to modify some preceding tag attribute values for positioning, otherwise we might get an empty list.

The final result looks like this:

```python
# Get each service provider's div
divs = html.xpath("/html/body/div[@id='__nuxt']/div[@id='__layout']/div[@class='app-page-layout']/div[3]/div[@class='s50-search-list-page']/div[4]/div[4]/div[1]/div[@class='service-card-wrap']")
# print(len(divs))
```

Printing list length is for debugging. The source code shows 51 matching attribute values; excluding one outside our search range gives 50, matching our printed list length of 50 items.

#### Step 4: Create CSV file for data writing

```python
with open("outsourcing_java.csv", mode="a+", newline='', encoding="utf-8") as f:
    csvwriter = csv.writer(f)
```

#### Step 5: Iterate through all divs to get needed information

```python
    for div in divs:
        # Each service provider's info
        price = div.xpath("./div/div[@class='bot-content']/div/span/text()")[0].strip("￥")
        title = "Java".join(div.xpath("./div/div[@class='bot-content']/div[2]/a/text()"))
        score = div.xpath("./div/div[@class='bot-content']/div[4]/div[@class='fraction']/span[1]/text()")[0]
        sales = div.xpath("./div/div[@class='bot-content']/div[4]/div[@class='sales']/div/span[2]/text()")[0]
        evaluate = div.xpath("./div/div[@class='bot-content']/div[4]/div[@class='evaluate']/div/span[2]/text()")[0]
        company_name = div.xpath("./div/a/div[2]/div[1]/div/text()")[0]
        csvwriter.writerow([title, price, score, sales, evaluate, company_name])
    f.close()
print("Over!")
```

Similarly, search layer by layer, using the web developer tools' highlighting to quickly find corresponding modules, or right-click elements to inspect. Use relative paths here - absolute paths would be too long. Note that some attribute values need modification for precise positioning, but not every one - this requires experience and trial-and-error.

Don't forget to close the file and network request at the end.

* * *

### Complete Code

```python
# Get page source code
# Extract and parse data

import requests
from lxml import etree
import csv

url = "target_url_here"
resp = requests.get(url)
# print(resp.text)

# Parse
html = etree.HTML(resp.text)

# Get each service provider's div
divs = html.xpath("/html/body/div[@id='__nuxt']/div[@id='__layout']/div[@class='app-page-layout']/div[3]/div[@class='s50-search-list-page']/div[4]/div[4]/div[1]/div[@class='service-card-wrap']")
# print(len(divs))

with open("outsourcing_java.csv", mode="a+", newline='', encoding="utf-8") as f:
    csvwriter = csv.writer(f)
    for div in divs:
        # Each service provider's info
        price = div.xpath("./div/div[@class='bot-content']/div/span/text()")[0].strip("￥")
        title = "Java".join(div.xpath("./div/div[@class='bot-content']/div[2]/a/text()"))
        score = div.xpath("./div/div[@class='bot-content']/div[4]/div[@class='fraction']/span[1]/text()")[0]
        sales = div.xpath("./div/div[@class='bot-content']/div[4]/div[@class='sales']/div/span[2]/text()")[0]
        evaluate = div.xpath("./div/div[@class='bot-content']/div[4]/div[@class='evaluate']/div/span[2]/text()")[0]
        company_name = div.xpath("./div/a/div[2]/div[1]/div/text()")[0]
        csvwriter.writerow([title, price, score, sales, evaluate, company_name])
    f.close()
print("Over!")
resp.close()
```

* * *

### Results

![](/images/posts/13.-实战：XPath法抓取某网站外包信息/eb0ae55872fb.png)

We successfully scraped 50 results with high accuracy.

* * *

### Summary

XPath parsing can be compared to file paths and bs4. I personally think it's like a combination of both, bringing together their advantages. This chapter used a complex practical case to scrape outsourcing website quotes, consolidating XPath parsing knowledge and skills. Next chapter, we'll advance our requests module learning.
