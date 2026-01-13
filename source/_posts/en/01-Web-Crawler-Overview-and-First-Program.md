---
title: "01. Web Crawler Overview and First Program"
date: 2022-12-27
updated: 2022-12-27
categories:
  - Python Web Crawler Tutorial
tags:
  - crawler
  - python
  - programming
  - html5
lang: en
lang_pair:
  zh-CN: "01. 爬虫概述与第一个程序"
---

> This article was migrated from CSDN blog
> Original link: [01. 爬虫概述与第一个程序](https://blog.csdn.net/m0_59180666/article/details/128459026)

**Table of Contents**

Web Crawler Overview

What is a Web Crawler?

Web Crawlers and Python

Is Web Crawling Legal?

The Sword and Shield of Web Crawling

Anti-Crawling Mechanisms

Anti-Anti-Crawling Strategies

My First Web Crawler Program

* * *

## Web Crawler Overview

* * *

### **What is a Web Crawler?**

Have you ever encountered a situation where you wanted to save some important data from the internet for your own use?

For example:

>   * When browsing beautiful images, you want to save them as desktop wallpapers;
>   * When finding important data (from various industries), you want to keep it for future business purposes;
>   * When discovering interesting videos, you want to save them to your hard drive for later viewing;
>   * When hearing excellent music, you want to save it to brighten up your daily life;
>   * ......

If so, congratulations! Web crawling is perfect for you. Web crawling involves writing programs to scrape excellent resources (images, videos, audio, data...) from the internet.

* * *

### **Web Crawlers and Python**

Do you have to use Python for web crawling? Not necessarily! Java works too, and so does C. Remember, programming languages are just tools. Getting the data is your goal. Any tool that helps you achieve your goal is valid. It's like eating - you can use a fork or chopsticks, and the result is the same: you get to eat.

So why do most people prefer Python?

Answer: Because Python makes web crawling simple. Don't understand? Question: Why do people use chopsticks instead of knife and fork for rice? Because it's simple and convenient! Python is the easiest programming language for beginners to learn, with the simplest syntax. More importantly, it has numerous third-party libraries for web crawling. In plain terms, it's like using chopsticks to eat, but with a servant helping you - making it even easier and more enjoyable!

* * *

### **Is Web Crawling Legal?**

First, web crawling is not prohibited by law - it's legally allowed to exist. However, web crawling does carry legal risks. It's like a kitchen knife - the law allows kitchen knives to exist, but if you use one to commit crimes, no one will tolerate that. As Wang Xin once said:

> Technology itself is innocent. It depends on how you use it.

For example, some people use crawlers combined with hacking techniques to hit websites tens of thousands of times per second - that's definitely not allowed.

Web crawlers can be divided into benign and malicious crawlers:

  * Benign crawlers: Don't damage the crawled website's resources (normal access, generally low frequency, don't steal user privacy)
  * Malicious crawlers: Affect the website's normal operation (ticket scalping, flash sales, frantically scraping website resources, causing server crashes)

In summary, to avoid legal trouble, we should behave properly and constantly optimize our crawler programs to avoid interfering with websites' normal operations. When using crawled data, if you find sensitive content involving user privacy or business secrets, you must immediately stop crawling and spreading it!

* * *

### **The Sword and Shield of Web Crawling**

#### Anti-Crawling Mechanisms

Portal websites can implement corresponding strategies or technical measures to prevent crawler programs from scraping website data.

#### **Anti-Anti-Crawling Strategies**

Crawler programs can implement related strategies or technical measures to bypass the anti-crawling mechanisms of portal websites, thereby obtaining relevant data.

robots.txt Protocol: A gentleman's agreement. It specifies which data on a website can be crawled and which cannot.

* * *

### My First Web Crawler Program

```python
# Created at UESTC
# Author: Vector Kun
# Time: 2022/10/29 20:45
# My first Python web crawler program:
# Requirement: Use a program to simulate a browser, input a URL, and retrieve resources or content from it

from urllib.request import urlopen

url = "http://www.baidu.com"
resp = urlopen(url)

# print(resp.read()) // This won't give normal data - Chinese characters appear as codes, need to decode
# Since "content="text/html;charset=utf-8", use utf-8 decoding
# print(resp.read().decode("utf-8")) // Output to console is still hard to read, better to output as HTML file

with open("1_mybaidu.html", mode="w", encoding="utf-8") as f:
    f.write(resp.read().decode("utf-8"))  # Read the webpage source code

print("over!")
# Running the HTML file will display the webpage

resp.close()
```

After running, an HTML file with Baidu search URL will be automatically generated and saved in the same directory as the Python file. Running this HTML file will show you the Baidu search homepage!

Line 20's `resp.close()` closes the current network request to avoid occupying too many network ports for future requests.

When writing crawler programs in the future, it's best to develop the habit of writing `resp.close()`. This is as important as freeing memory with `free()` after `malloc()` in C!
