---
title: "HTML元素"
date: 2022-12-24
updated: 2022-12-24
categories:
  - HTML入门、进阶与实战
tags:
  - html5
  - 前端
  - html
  - 编辑器
  - 前端框架
csdn_views: 129
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128430750
cover: /images/posts/HTML元素/0c8071dc4455.jpeg
lang_pair:
  en: "HTML Elements"
---

> 本文迁移自CSDN博客
> 原文链接：[HTML元素](https://blog.csdn.net/m0_59180666/article/details/128430750)
> 📊 129 阅读 | 👍 1 点赞 | 💬 1 评论 | ⭐ 2 收藏

**目录**

HTML 元素

HTML 元素语法

嵌套的 HTML 元素

HTML 文档实例

HTML 实例解释

不要忘记结束标签

空的 HTML 元素

HTML 提示：使用小写标签

一个完整的实例

* * *

**HTML 文档是由 HTML 元素定义的。**

* * *

### HTML 元素

HTML 元素指的是从开始标签（start tag）到结束标签（end tag）的所有代码。

开始标签| 元素内容| 结束标签  
---|---|---  
<p>| This is a paragraph| </p>  
<a href="default.htm" >| This is a link| </a>  
<br />| |   
  
注释：开始标签常被称为开放标签（opening tag），结束标签常称为闭合标签（closing tag）。

* * *

### HTML 元素语法

  * HTML 元素以 _开始标签_ 起始
  * HTML 元素以 _结束标签_ 终止
  *  _元素的内容_ 是开始标签与结束标签之间的内容
  * 某些 HTML 元素具有 _空内容（empty content）_
  * 空元素 _在开始标签中进行关闭_ （以开始标签的结束而结束）
  * 大多数 HTML 元素可拥有 _属性_

提示：下一章将学习更多有关属性的内容。

* * *

### 嵌套的 HTML 元素

大多数 HTML 元素可以嵌套（可以包含其他 HTML 元素）。

HTML 文档由嵌套的 HTML 元素构成。

#### HTML 文档实例

``` <html> <body> <p>This is my first paragraph.</p> </body> </html> ``` 

上面的例子包含三个 HTML 元素。（html，正文body，段落p）

* * *

### HTML 实例解释

#### <p> 元素：

``` <p>This is my first paragraph.</p> ``` 

这个 <p> 元素定义了 HTML 文档中的一个段落。

这个元素拥有一个开始标签 <p>，以及一个结束标签 </p>。

元素内容是：This is my first paragraph。

* * *

#### <body> 元素：

``` <body> <p>This is my first paragraph.</p> </body> ``` 

<body> 元素定义了 HTML 文档的主体。

这个元素拥有一个开始标签 <body>，以及一个结束标签 </body>。

元素内容是另一个 HTML 元素（p 元素）。

* * *

#### <html> 元素：

``` <html> <body> <p>This is my first paragraph.</p> </body> </html> ``` 

<html> 元素定义了整个 HTML 文档。

这个元素拥有一个开始标签 <html>，以及一个结束标签 </html>。

元素内容是另一个 HTML 元素（body 元素）。

* * *

### 不要忘记结束标签

即使忘记了使用结束标签，大多数浏览器也会正确地显示 HTML：

``` <p>This is a paragraph <p>This is a paragraph ``` 

上面的例子在大多数浏览器中都没问题，但不要依赖这种做法。忘记使用结束标签会产生不可预料的结果或错误。

注释：未来的 HTML 版本是不允许省略结束标签的。

* * *

### 空的 HTML 元素

没有内容的 HTML 元素被称为空元素。空元素是在开始标签中关闭的。

<br> 就是没有关闭标签的空元素（<br> 标签定义换行）。

在 XHTML、XML 以及未来版本的 HTML 中，所有元素都必须被关闭。

在开始标签中添加斜杠，比如 <br />，是关闭空元素的正确方法，HTML、XHTML 和 XML 都接受这种方式。

即使 <br> 在所有浏览器中都是有效的，但**使用 <br /> 其实是更长远的保障。**

* * *

### HTML 提示：使用小写标签

HTML 标签对大小写不敏感：<P> 等同于 <p>。许多网站都使用大写的 HTML 标签。

万维网联盟（W3C）在 HTML 4 中 _推荐_ 使用小写，而在未来 (X)HTML 版本中 _强制_ 使用小写。

* * *

### 一个完整的实例

``` <!DOCTYPE HTML> <html lang="zh-CN"> <head> <meta charset="UTF-8"> <title>Elements</title> </head> <body> <p> HTML 元素以开始标签起始<br /> HTML 元素以结束标签终止<br /> 元素的内容是开始标签与结束标签之间的内容<br /> 某些 HTML 元素具有空内容（empty content）<br /> 空元素在开始标签中进行关闭（以开始标签的结束而结束）<br /> 大多数 HTML 元素可拥有属性<br /> </p> <p> HTML 文档由嵌套的 HTML 元素构成。<br /> 没有内容的 HTML 元素被称为空元素，如《br》，但最正确的用法是《br /》。空元素是在开始标签中关闭的。<br /> HTML 标签对大小写不敏感：《P》 等同于 《p》。许多网站都使用大写的 HTML 标签。<br /> 万维网联盟（W3C）在 HTML 4 中推荐使用小写，而在未来 (X)HTML 版本中强制使用小写。<br /> </p> </body> </html> ``` 

![](/images/posts/HTML元素/0c8071dc4455.jpeg)
