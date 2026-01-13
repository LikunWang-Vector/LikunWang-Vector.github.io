---
title: "HTML类"
date: 2022-12-26
updated: 2022-12-26
categories:
  - HTML入门、进阶与实战
tags:
  - html
  - css
  - 前端
  - html5
  - javascript
csdn_views: 128
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128443118
lang_pair:
  en: "HTML Classes"
---

> 本文迁移自CSDN博客
> 原文链接：[HTML类](https://blog.csdn.net/m0_59180666/article/details/128443118)
> 📊 128 阅读 | 👍 1 点赞 | 💬 1 评论 | ⭐ 2 收藏

**目录**

实例

分类块级元素

实例

分类行内元素

实例

一个完整的实例

* * *

对 HTML 进行分类（设置类），使我们能够为元素的类定义 CSS 样式。

为相同的类设置相同的样式，或者为不同的类设置不同的样式。

* * *

#### 实例

``` <!DOCTYPE html> <html> <head> <style> .cities { background-color:black; color:white; margin:20px; padding:20px; } </style> </head> <body> <div class="cities"> <h2>London</h2> <p> London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants. </p> </div> </body> </html> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_classes_shanghai "亲自试一试")

* * *

### 分类块级元素

HTML <div> 元素是 _块级元素_ 。它能够用作其他 HTML 元素的容器。

设置 <div> 元素的类，使我们能够为相同的 <div> 元素设置相同的类：

#### 实例

``` <!DOCTYPE html> <html> <head> <style> .cities { background-color:black; color:white; margin:20px; padding:20px; } </style> </head> <body> <div class="cities"> <h2>London</h2> <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p> </div> <div class="cities"> <h2>Paris</h2> <p>Paris is the capital and most populous city of France.</p> </div> <div class="cities"> <h2>Tokyo</h2> <p>Tokyo is the capital of Japan, the center of the Greater Tokyo Area, and the most populous metropolitan area in the world.</p> </div> </body> </html> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_classes_cities "亲自试一试")

* * *

### 分类行内元素

HTML <span> 元素是行内元素，能够用作文本的容器。

设置 <span> 元素的类，能够为相同的 <span> 元素设置相同的样式。

#### 实例

``` <!DOCTYPE html> <html> <head> <style> span.red {color:red;} </style> </head> <body> <h1>My <span class="red">Important</span> Heading</h1> </body> </html> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_classes_span "亲自试一试")

* * *

### **一个完整的实例**

``` <!DOCTYPE HTML> <html lang="zh-CN"> <head> <meta charset="UTF-8"> <title>Class</title> <style> .cities { background-color:black; color:white; margin:20px; padding:20px; } span.red {color:red;} </style> </head> <body> <div class="cities"> <h2>London</h2> <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p> </div> <div class="cities"> <h2>Paris</h2> <p>Paris is the capital and most populous city of France.</p> </div> <div class="cities"> <h2>Tokyo</h2> <p>Tokyo is the capital of Japan, the center of the Greater Tokyo Area, and the most populous metropolitan area in the world.</p> </div> <h1>My <span class="red">Important</span> Heading</h1> </body> </html> ``` 
