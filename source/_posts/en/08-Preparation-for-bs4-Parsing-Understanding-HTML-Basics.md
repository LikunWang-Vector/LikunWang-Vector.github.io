---
title: "08. Preparation for bs4 Parsing: Understanding HTML Basics"
date: 2022-12-30
updated: 2022-12-30
categories:
  - Python Web Scraping Tutorial
tags:
  - regular expressions
  - html
  - frontend
  - web scraping
  - network protocols
csdn_views: 154
csdn_likes: 2
csdn_comments: 1
csdn_favorites: 3
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128496227
lang_pair:
  zh-CN: "08. bs4解析的准备——了解HTML基础"
---

> This article was migrated from CSDN blog
> Original link: [08. Preparation for bs4 Parsing: Understanding HTML Basics](https://blog.csdn.net/m0_59180666/article/details/128496227)
> 📊 154 views | 👍 2 likes | 💬 1 comment | ⭐ 3 favorites

**Table of Contents**

Introduction

Purpose

HTML Basics

1. Systematic HTML Learning

2. Quick Overview

* * *

### Introduction

This series will cover three parsing methods: regex, bs4, and xpath. We've already learned regex parsing and built two practical projects, basically mastering this parsing method.

When learning regex parsing, we also learned some essential basics like regular expressions. Before learning other parsing methods, we must face a practical issue: understanding HTML source code.

* * *

### Purpose

Why learn HTML? As the ancient saying goes, "Know yourself and know your enemy, and you will never be defeated." If we want to scrape data from web pages more effectively and efficiently, we must understand basic HTML syntax. This helps us locate data faster instead of blindly searching through incomprehensible code.

* * *

### HTML Basics

#### 1. Systematic HTML Learning

If you want to systematically learn HTML basics, my column covers HTML fundamentals in detail, with examples and hands-on practice pages for learning.

#### 2. Quick Overview

HTML syntax is quite simple with high fault tolerance - it will run no matter what. However, code readability is crucial, especially for website maintainers. If a site has issues, messy HTML code is hard to read, making it difficult for administrators to locate problems and for beginners to find data.

So our goal is to understand HTML's basic layout:

```python
# bs4 parsing basics: HTML syntax
# HTML is a language used to describe web pages.
# HTML stands for Hyper Text Markup Language
# HTML is not a programming language, but a markup language
# A markup language is a set of markup tags
# HTML uses markup tags to describe web pages
# Its core syntax uses different tags to mark content on the web, displaying different effects

# HTML tags are keywords surrounded by angle brackets, like <html>
# HTML tags usually come in pairs, like <b> and </b>
# The first tag in a pair is the opening tag, the second is the closing tag
# HTML tags can also appear alone, called self-closing tags, like <br />
# Opening and closing tags are also called open and close tags

# Example:
# <h1>
#     I love U
# </h1>
# <h2 align="center">I hate U</h2>
# h1: tag    align: attribute    center: attribute value

# From this we know the format:
# <tag attribute="value">marked content</tag>
# <tag attribute="value"/>
# <tag />

# <a href="http://www.bing.com">Bing Search</a>
# <img src="xxx.jpg"/>
# <br />
```

Now we understand that HTML source code is essentially composed of various tags, each with its own meaning, containing data with corresponding attributes.
