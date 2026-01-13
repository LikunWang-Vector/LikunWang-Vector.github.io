---
title: "HTML基础——以四个标签为例"
date: 2022-12-24
updated: 2022-12-24
categories:
  - HTML入门、进阶与实战
tags:
  - css
  - 前端
  - html5
  - 前端框架
  - 编辑器
csdn_views: 240
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128430666
cover: /images/posts/HTML基础——以四个标签为例/cc1f1a2b9de5.png
lang_pair:
  en: "HTML Basics - Four Essential Tags"
---

> 本文迁移自CSDN博客
> 原文链接：[HTML基础——以四个标签为例](https://blog.csdn.net/m0_59180666/article/details/128430666)
> 📊 240 阅读 | 👍 1 点赞 | 💬 1 评论 | ⭐ 2 收藏

**目录**

HTML 标题

实例

HTML 段落

实例

HTML 链接

实例

HTML 图像

实例

一个完整的代码

想要在网页显示图片

本章涉及的资源：

eg_mouse.jpg

* * *

### HTML 标题

HTML 标题（Heading）是通过 <h1> \- <h6> 等标签进行定义的。

#### 实例

``` <h1>This is a heading</h1> <h2>This is a heading</h2> <h3>This is a heading</h3> ``` 

* * *

### HTML 段落

HTML 段落是通过 <p> 标签进行定义的。

#### 实例

``` <p>This is a paragraph.</p> <p>This is another paragraph.</p> ``` 

* * *

### HTML 链接

HTML 链接是通过 <a> 标签进行定义的。

#### 实例

``` <a href="http://www.w3school.com.cn">This is a link</a> ``` 

注释：在 href 属性中指定链接的地址。

* * *

### HTML 图像

HTML 图像是通过 <img> 标签进行定义的。

#### 实例

``` <img src="w3school.jpg" width="104" height="142" /> ``` 

注释：图像的名称和尺寸是以属性的形式提供的。

* * *

### 一个完整的代码

``` <!DOCTYPE HTML> <html lang="zh-CN"> <head> <meta charset="UTF-8"> <title>Fundament</title> </head> <body> <h1>This is heading 1</h1> <h2>This is heading 2</h2> <h3>This is heading 3</h3> <h4>This is heading 4</h4> <h5>This is heading 5</h5> <h6>This is heading 6</h6> <p>请仅仅把标题标签用于标题文本。不要仅仅为了产生粗体文本而使用它们。请使用其它标签或 CSS 代替。</p> <p>这是段落。</p> <p>这是段落。</p> <p>这是段落。</p> <p>段落元素由 p 标签定义。</p> <a href="http://www.bing.com.cn"> This is a link</a> <img src="./src/img/eg_mouse.jpg" width="300" height="120" /> </body> </html> ``` 

* * *

### 想要在网页显示图片

可以在html文件同级创建一个src（source，资源）文件夹，下方创建一个img（image，图片）子文件夹，里面存放html所在本地服务器调用的图片文件，同时在src文件夹下再创建一个web文件夹，可以存放html文件所在本地服务器调用的子网页，文件夹结构如下图所示：

![](/images/posts/HTML基础——以四个标签为例/cc1f1a2b9de5.png)

* * *

### 本章涉及的资源：

#### eg_mouse.jpg 

![](/images/posts/HTML基础——以四个标签为例/d23ab885241b.jpeg)
