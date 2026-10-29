---
type: post
csdn: true
title: "HTML布局"
date: "2022-12-27"
lastmod: "2022-12-27"
authors:
  - admin
tags:
  - "html"
  - "css"
  - "javascript"
  - "前端"
  - "html5"
  - "CSDN"
categories:
  - "HTML入门、进阶与实战"
summary: "注释： 元素常用作布局工具，因为能够轻松地通过 CSS 对其进行定位。"
image:
  filename: "covers/csdn-html.png"
  caption: "CSDN Archive · HTML · WEB"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128443424"
csdn_views: 148
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
---

> 本文迁移自CSDN博客
> 原文链接：[HTML布局](https://blog.csdn.net/m0_59180666/article/details/128443424)
> 📊 148 阅读 | 👍 1 点赞 | 💬 1 评论 | ⭐ 2 收藏


网站常常以多列显示内容（就像杂志和报纸）。

* * *

### 使用 <div> 元素的 HTML 布局

注释：<div> 元素常用作布局工具，因为能够轻松地通过 CSS 对其进行定位。

这个例子使用了四个 <div> 元素来创建多列布局：

#### 实例

```
<body>

<div id="header">
<h1>City Gallery</h1>
</div>

<div id="nav">
London<br>
Paris<br>
Tokyo<br>
</div>

<div id="section">
<h1>London</h1>
<p>
London is the capital city of England. It is the most populous city in the United Kingdom,
with a metropolitan area of over 13 million inhabitants.
</p>
<p>
Standing on the River Thames, London has been a major settlement for two millennia,
its history going back to its founding by the Romans, who named it Londinium.
</p>
</div>

<div id="footer">
Copyright W3School.com.cn
</div>

</body>
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_layout_divs "亲自试一试")

#### CSS：

```
<style>
#header {
    background-color:black;
    color:white;
    text-align:center;
    padding:5px;
}
#nav {
    line-height:30px;
    background-color:#eeeeee;
    height:300px;
    width:100px;
    float:left;
    padding:5px;
}
#section {
    width:350px;
    float:left;
    padding:10px;
}
#footer {
    background-color:black;
    color:white;
    clear:both;
    text-align:center;
    padding:5px;
}
</style>
```

* * *

### 使用 HTML5 的网站布局

HTML5 提供的新语义元素定义了网页的不同部分：

#### HTML5 语义元素

header| 定义文档或节的页眉  
---|---  
nav| 定义导航链接的容器  
section| 定义文档中的节  
article| 定义独立的自包含文章  
aside| 定义内容之外的内容（比如侧栏）  
footer| 定义文档或节的页脚  
details| 定义额外的细节  
summary| 定义 details 元素的标题  
  
这个例子使用 <header>, <nav>, <section>, 以及 <footer> 来创建多列布局：

#### 实例

```
<body>

<header>
<h1>City Gallery</h1>
</header>

<nav>
London<br>
Paris<br>
Tokyo<br>
</nav>

<section>
<h1>London</h1>
<p>
London is the capital city of England. It is the most populous city in the United Kingdom,
with a metropolitan area of over 13 million inhabitants.
</p>
<p>
Standing on the River Thames, London has been a major settlement for two millennia,
its history going back to its founding by the Romans, who named it Londinium.
</p>
</section>

<footer>
Copyright W3School.com.cn
</footer>

</body>
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_layout_semantic "亲自试一试")

#### CSS

```
header {
    background-color:black;
    color:white;
    text-align:center;
    padding:5px;
}
nav {
    line-height:30px;
    background-color:#eeeeee;
    height:300px;
    width:100px;
    float:left;
    padding:5px;
}
section {
    width:350px;
    float:left;
    padding:10px;
}
footer {
    background-color:black;
    color:white;
    clear:both;
    text-align:center;
    padding:5px;
}
```

* * *

### 使用表格的 HTML 布局

注释：<table> 元素不是作为布局工具而设计的。

<table> 元素的作用是显示表格化的数据。

使用 <table> 元素能够取得布局效果，因为能够通过 CSS 设置表格元素的样式：

#### 实例

```
<body>

<table class="lamp">
<tr>
  <th>
    <img src="/images/lamp.jpg" alt="Note" style="height:32px;width:32px">
  </th>
  <td>
    The table element was not designed to be a layout tool.
  </td>
</tr>
</table>

</body>
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_layout_tables "亲自试一试")

#### CSS

```
<style>
table.lamp {
    width:100%;
    border:1px solid #d4d4d4;
}
table.lamp th, td {
    padding:10px;
}
table.lamp td {
    width:40px;
}
</style>
```

* * *

### 一个完整的实例

```
<!DOCTYPE HTML>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <title>Layout</title>

    <style>
#header {
    background-color:black;
    color:white;
    text-align:center;
    padding:5px;
}
#nav {
    line-height:30px;
    background-color:#eeeeee;
    height:300px;
    width:100px;
    float:left;
    padding:5px;
}
#section {
    width:350px;
    float:left;
    padding:10px;
}
#footer {
    background-color:black;
    color:white;
    clear:both;
    text-align:center;
    padding:5px;
}

table.lamp {
    width:100%;
    border:1px solid #d4d4d4;
}
table.lamp th, td {
    padding:10px;
}
table.lamp th {
    width:40px;
}

</style>
</head>

<body>

<div id="header">
<h1>City Gallery</h1>
</div>

<div id="nav">
London<br>
Paris<br>
Tokyo<br>
</div>

<div id="section">
<h1>London</h1>
<p>
London is the capital city of England. It is the most populous city in the United Kingdom,
with a metropolitan area of over 13 million inhabitants.
</p>
<p>
Standing on the River Thames, London has been a major settlement for two millennia,
its history going back to its founding by the Romans, who named it Londinium.
</p>
</div>

<table class="lamp">
<tr>
  <th>
    <img src="/images/lamp.jpg" alt="Note" style="height:32px;width:32px">
  </th>
  <td>
    The table element was not designed to be a layout tool.
  </td>
</tr>
</table>

<div id="footer">
Copyright Vector Kun
</div>

</body>
</html>
```
