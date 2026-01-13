---
title: "HTML文件路径"
date: 2022-12-26
updated: 2022-12-26
categories:
  - HTML入门、进阶与实战
tags:
  - html
  - 前端
  - java
  - html5
  - 服务器
csdn_views: 766
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 3
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128443386
lang_pair:
  en: "HTML File Paths"
---

> 本文迁移自CSDN博客
> 原文链接：[HTML文件路径](https://blog.csdn.net/m0_59180666/article/details/128443386)
> 📊 766 阅读 | 👍 1 点赞 | 💬 1 评论 | ⭐ 3 收藏

**目录**

HTML 文件路径

绝对文件路径

实例

相对路径

实例

实例

实例

好习惯

* * *

路径| 描述  
---|---  
<img src="picture.jpg">| picture.jpg 位于与当前网页相同的文件夹  
<img src="images/picture.jpg">| picture.jpg 位于当前文件夹的 images 文件夹中  
<img src="/images/picture.jpg">| picture.jpg 当前站点根目录的 images 文件夹中  
<img src="../picture.jpg">| picture.jpg 位于当前文件夹的上一级文件夹中  
  
* * *

### HTML 文件路径

文件路径描述了网站文件夹结构中某个文件的位置。

文件路径会在链接外部文件时被用到：

  * 网页
  * 图像
  * 样式表
  * JavaScript

* * *

### 绝对文件路径

绝对文件路径是指向一个因特网文件的完整 URL：

#### 实例

``` <img src="https://www.w3school.com.cn/images/picture.jpg" alt="flower"> ``` 

<img> 标签以及 src 和 alt 属性在 HTML 图像这一章做了讲解。

* * *

### 相对路径

相对路径指向了相对于当前页面的文件。

在本例中，文件路径指向了位于当前网站根目录中 images 文件夹里的一个文件：

#### 实例

``` <img src="/images/picture.jpg" alt="flower"> ``` 

在本例中，文件路径指向了位于当前文件夹中 images 文件夹里的一个文件：

#### 实例

``` <img src="images/picture.jpg" alt="flower"> ``` 

在本例中，文件路径指向了位于当前文件夹的上一级文件夹中 images 文件夹里的一个文件：

#### 实例

``` <img src="../images/picture.jpg" alt="flower"> ``` 

* * *

### 好习惯

使用相对路径是个好习惯（如果可能）。

如果使用了相对路径，那么网页就不会与当前的基准 URL 进行绑定。所有链接在电脑上 (localhost) 或未来的公共域中均可正常工作。
