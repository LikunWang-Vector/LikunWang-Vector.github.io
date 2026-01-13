---
title: "HTML标题"
date: 2022-12-25
updated: 2022-12-25
categories:
  - HTML入门、进阶与实战
tags:
  - html
  - firefox
  - 前端
  - 前端框架
  - html5
csdn_views: 115
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128433463
lang_pair:
  en: "HTML Headings"
---

> 本文迁移自CSDN博客
> 原文链接：[HTML标题](https://blog.csdn.net/m0_59180666/article/details/128433463)
> 📊 115 阅读 | 👍 1 点赞 | 💬 1 评论 | ⭐ 2 收藏

**目录**

HTML 标题

实例

标题很重要

HTML 水平线

实例

HTML 注释以及在PyCharm中快速添加注释

实例

HTML 提示 - 如何查看源代码

来自本页的实例

HTML 标签参考手册

一个完整的实例

* * *

**在 HTML 文档中，标题很重要。**

* * *

### HTML 标题

标题（Heading）是通过 <h1> \- <h6> 等标签进行定义的。

<h1> 定义最大的标题。<h6> 定义最小的标题。

#### 实例

``` <h1>This is a heading</h1> <h2>This is a heading</h2> <h3>This is a heading</h3> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_headers "亲自试一试")

注释：浏览器会自动地在标题的前后添加空行。

注释：默认情况下，HTML 会自动地在**块级元素** 前后添加一个额外的空行，比如段落、标题元素前后。

* * *

### 标题很重要

请确保将 HTML heading 标签只用于标题。**不要仅仅是为了产生粗体或大号的文本而使用标题** 。

搜索引擎使用标题为您的网页的结构和内容编制索引。

因为用户可以通过标题来快速浏览您的网页，所以用标题来呈现文档结构是很重要的。

应该将 h1 用作主标题（最重要的），其后是 h2（次重要的），再其次是 h3，以此类推。

* * *

### HTML 水平线

<hr /> 标签在 HTML 页面中创建水平线。

hr 元素可用于分隔内容。

#### 实例

``` <p>This is a paragraph</p> <hr /> <p>This is a paragraph</p> <hr /> <p>This is a paragraph</p> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_hr "亲自试一试")

提示：使用水平线 (<hr> 标签) 来分隔文章中的小节是一个办法（但并不是唯一的办法）。

* * *

### HTML 注释以及在PyCharm中快速添加注释

可以将注释插入 HTML 代码中，这样可以提高其可读性，使代码更易被人理解。浏览器会忽略注释，也不会显示它们。

注释是这样写的：

#### 实例

``` <!-- This is a comment --> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_comment "亲自试一试")

注释：开始括号之后（左边的括号）需要紧跟一个叹号，结束括号之前（右边的括号）不需要。

提示：合理地使用注释可以对未来的代码编辑工作产生帮助。

**注释：在PyCharm中添加注释可以选中一段代码，然后按下“Ctrl+?”键来将这段代码/文字注释**

* * *

### HTML 提示 - 如何查看源代码

您一定曾经在看到某个网页时惊叹道 “WOW! 这是如何实现的？”

如果您想找到其中的奥秘，只需要单击右键，然后选择“查看源文件”（IE）或“查看页面源代码”（Firefox/Edge/...），其他浏览器的做法也是类似的。这么做会打开一个包含页面 HTML 代码的窗口。

Edge浏览器可以直接点击**F12** 审查元素。

* * *

### 来自本页的实例

[标题](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_headers "标题")

如何在 HTML 文档中显示标题。

[隐藏的注释](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_comment "隐藏的注释")

如何在 HTML 源代码中插入注释。

[水平线](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_hr "水平线")

如何插入水平线。

* * *

### HTML 标签参考手册

标签参考手册提供了有关这些标题及其属性的更多信息。

您将在本教程下面的章节中学到更多有关 HTML 标签和属性的知识。

标签| 描述  
---|---  
[<html>](https://www.w3school.com.cn/tags/tag_html.asp "<html>")| 定义 HTML 文档。  
[<body>](https://www.w3school.com.cn/tags/tag_body.asp "<body>")| 定义文档的主体。  
[<h1> to <h6>](https://www.w3school.com.cn/tags/tag_hn.asp "<h1> to <h6>")| 定义 HTML 标题  
[<hr>](https://www.w3school.com.cn/tags/tag_hr.asp "<hr>")| 定义水平线。  
[<!--...-->](https://www.w3school.com.cn/tags/tag_comment.asp "<!--...-->")| 定义注释。  
  
* * *

### 一个完整的实例

``` <!DOCTYPE HTML> <html lang="zh-CN"> <head> <meta charset="UTF-8"> <title>Heading</title> </head> <body> <h1>This is a heading</h1> <h2>This is a heading</h2> <h3>This is a heading</h3> <p>This is a paragraph</p> <hr /> <p>This is a paragraph</p> <hr /> <p>This is a paragraph</p> <!-- This is a comment --> </body> </html> ``` 
