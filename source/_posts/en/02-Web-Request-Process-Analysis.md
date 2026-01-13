---
title: "02. Web Request Process Analysis"
date: 2022-12-28
updated: 2022-12-28
categories:
  - Python Web Crawler Tutorial
tags:
  - frontend
  - html
  - server
  - html5
  - xhtml
lang: en
cover: /images/posts/02.-Web请求过程分析/2b2c3b2597b4.png
lang_pair:
  zh-CN: "02. Web请求过程分析"
---

> This article was migrated from CSDN blog
> Original link: [02. Web请求过程分析](https://blog.csdn.net/m0_59180666/article/details/128466312)

**Table of Contents**

Complete Web Request Process Analysis

Introduction

A Simple Example

1\. Server-Side Rendering

2\. Frontend JS Rendering

Conclusion

Summary

* * *

## Complete Web Request Process Analysis

* * *

### Introduction

In the previous section, we implemented a simple webpage source code scraping task. But fundamentally, how are webpages accessed? How is the source code transmitted to us? This section will explain the web request process analysis, which will help us handle various types of websites with ease and provide basic guidelines for getting started.

So what exactly happens between entering a URL in the browser and seeing the complete webpage content?

* * *

### A Simple Example

Let's use Baidu search as an example: When accessing Baidu search, the browser sends this request to Baidu's server. The server receives this request, loads the corresponding data, and returns it to our browser for display. This might sound obvious, but there's an extremely important detail: Baidu's server doesn't return a directly displayable page, but rather the page source code (composed of HTML, CSS, JS) mentioned in the previous section. The browser then executes this source code and displays the result to the user.

The specific process is shown in the diagram below:

![](/images/posts/02.-Web请求过程分析/2b2c3b2597b4.png)

Now let's introduce another important concept. Does the page source code we request contain all the data? In other words, is all the data displayed on the current page included in the source code? This brings us to the "page rendering" process.

There are two common page rendering methods:

#### 1\. Server-Side Rendering

This is the easiest to understand and the most straightforward. It means that when we request the server, the server directly writes all the data into the HTML, and our browser can directly receive HTML content with data (press F12 to open browser developer tools). For example:

![Movie Paradise](/images/posts/02.-Web请求过程分析/72a28ca93a5a.png) Movie Paradise

Since the data is written directly in the HTML, all visible data can be traced in the page source code. These types of webpages are generally easier to scrape.

#### 2\. Frontend JS Rendering

This is slightly more complicated. This mechanism typically involves the first request returning an HTML framework structure from the server, then making another request to the server that actually stores the data. This server returns the data, which is finally loaded in the browser, as shown below:

![](/images/posts/02.-Web请求过程分析/f453efd2b9c9.png)

The advantage of this approach is that the website server can reduce pressure, with clear division of labor and easier maintenance. A typical example is JD.com:

![](/images/posts/02.-Web请求过程分析/841ec8a9052a.png) JD.com

You can see that this product is not shown in the source code, but it appears on the page. So when was the data loaded? Through searching, we find a JSON file, indicating that the data is stored in other files and doesn't exist directly in the source code. This file is obtained through other requests. Double-clicking to open it shows:

![](/images/posts/02.-Web请求过程分析/62a7ef9d6a0c.png)

Actually, when we scroll the page, JD.com is loading data. To see this process, we need to use the browser's developer tools (F12):

![](/images/posts/02.-Web请求过程分析/03eb4d6c5142.png)

Select the "Network" tab, click the clear button to clear the current network activity cache, making it easier to observe the website's next activity.

Now when we scroll down, we can see the newly requested files:

![](/images/posts/02.-Web请求过程分析/63b14f8c44fc.png)

So the content seen on the page is loaded later - the source code from the first request is just the website's framework without content. I'm sure you've encountered this situation when network loading is slow: the webpage framework loads first, followed by images and other content. This is the result of multiple requests.

* * *

### Conclusion

By discussing these two rendering methods, I just want to tell you that our data doesn't only come from the page source code. More often, it's stored in another request. When scraping this type of data, we need to put more effort into finding the target request to get the desired data.

* * *

### Summary

```
# 1. Server-side rendering: The server directly integrates data and HTML together, returning them to the browser at once. Data can be seen in the page source code (one request + response)
# 2. Client-side rendering: The first request only gets an HTML skeleton, the second request gets the data for display. Data is not shown in the page source code
# For client-side rendering, to get data, you must be proficient with browser packet capture tools (Inspect/F12) to find the corresponding HTML file that requests data
```
