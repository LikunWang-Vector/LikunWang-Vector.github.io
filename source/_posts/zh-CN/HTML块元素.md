---
title: "HTML块元素"
date: 2022-12-26
updated: 2022-12-26
categories:
  - HTML入门、进阶与实战
tags:
  - html
  - 前端
  - css
  - html5
  - javascript
csdn_views: 203
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128443081
lang_pair:
  en: "HTML Block and Inline Elements"
---

> 本文迁移自CSDN博客
> 原文链接：[HTML块元素](https://blog.csdn.net/m0_59180666/article/details/128443081)
> 📊 203 阅读 | 👍 1 点赞 | 💬 1 评论 | ⭐ 2 收藏

**目录**

HTML 块元素

HTML 内联元素

HTML 

元素

HTML 元素

HTML 分组标签

一个完整的实例

* * *

**可以通过 <div> 和 <span> 将 HTML 元素组合起来。**

* * *

### HTML 块元素

大多数 HTML 元素被定义为块级元素或内联元素。

注：“块级元素”译为 block level element，“内联元素”译为 inline element。

块级元素在浏览器显示时，通常会以新行来开始（和结束）。

例子：<h1>, <p>, <ul>, <table>

* * *

### HTML 内联元素

内联元素在显示时通常不会以新行开始。

例子：<b>, <td>, <a>, <img>

* * *

### HTML <div> 元素

HTML <div> 元素是块级元素，它是可用于组合其他 HTML 元素的容器。

<div> 元素没有特定的含义。除此之外，由于它属于块级元素，浏览器会在其前后显示折行。

如果与 CSS 一同使用，<div> 元素可用于对大的内容块设置样式属性。

<div> 元素的另一个常见的用途是文档布局。它取代了使用表格定义布局的老式方法。使用 <table> 元素进行文档布局不是表格的正确用法。<table> 元素的作用是显示表格化的数据。

* * *

### HTML <span> 元素

HTML <span> 元素是内联元素，可用作文本的容器。

<span> 元素也没有特定的含义。

当与 CSS 一同使用时，<span> 元素可用于为部分文本设置样式属性。

* * *

### HTML 分组标签

标签| 描述  
---|---  
[<div>](https://www.w3school.com.cn/tags/tag_div.asp "<div>")| 定义文档中的分区或节（division/section）。  
[<span>](https://www.w3school.com.cn/tags/tag_span.asp "<span>")| 定义 span，用来组合文档中的行内元素。  
  
* * *

### 一个完整的实例

``` <!DOCTYPE HTML> <html lang="zh-CN"> <head> <meta charset="UTF-8"> <title>Block</title> </head> <body> <!--<p>可以通过 <div> 和 <span> 将 HTML 元素组合起来。--> <!--HTML 块元素--> <!--大多数 HTML 元素被定义为块级元素或内联元素。--> <!--编者注：“块级元素”译为 block level element，“内联元素”译为 inline element。--> <!--块级元素在浏览器显示时，通常会以新行来开始（和结束）。--> <!--例子：<h1>, <p>, <ul>, <table>\--> <!--HTML 内联元素--> <!--内联元素在显示时通常不会以新行开始。--> <!--例子：<b>, <td>, <a>, <img>\--> <!--HTML <div> 元素--> <!--HTML <div> 元素是块级元素，它是可用于组合其他 HTML 元素的容器。--> <!--<div> 元素没有特定的含义。除此之外，由于它属于块级元素，浏览器会在其前后显示折行。--> <!--如果与 CSS 一同使用，<div> 元素可用于对大的内容块设置样式属性。--> <!--<div> 元素的另一个常见的用途是文档布局。它取代了使用表格定义布局的老式方法。使用 <table> 元素进行文档布局不是表格的正确用法。<table> 元素的作用是显示表格化的数据。--> <!--HTML <span> 元素--> <!--HTML <span> 元素是内联元素，可用作文本的容器。--> <!--<span> 元素也没有特定的含义。--> <!--当与 CSS 一同使用时，<span> 元素可用于为部分文本设置样式属性。</p>\--> <h3>This is a header</h3> <p>This is a paragraph.</p> <div style="color:#00FF00"> <h3>This is a header</h3> <p>This is a paragraph.</p> </div> <h1>NEWS WEBSITE</h1> <p>some text. some text. some text...</p> ... <div class="news"> <h2>News headline 1</h2> <p>some text. some text. some text...</p> ... </div> <div class="news"> <h2>News headline 2</h2> <p>some text. some text. some text...</p> ... </div> <p><span>some text.</span>some other text.</p> <p class="tip"><span>提示：</span>... ... ...</p> </body> </html> ``` 
