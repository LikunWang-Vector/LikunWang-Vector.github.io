---
title: "HTML属性"
date: 2022-12-25
updated: 2022-12-25
categories:
  - HTML入门、进阶与实战
tags:
  - html
  - 前端
  - javascript
  - html5
  - 前端框架
csdn_views: 200
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128433424
lang_pair:
  en: "HTML Attributes"
---

> 本文迁移自CSDN博客
> 原文链接：[HTML属性](https://blog.csdn.net/m0_59180666/article/details/128433424)
> 📊 200 阅读 | 👍 1 点赞 | 💬 1 评论 | ⭐ 2 收藏

**目录**

HTML 属性

属性实例

更多 HTML 属性实例

属性例子 1:

属性例子 2:

属性例子 3:

HTML 提示：使用小写属性

始终为属性值加引号

HTML 属性参考手册

一个完整的实例

* * *

**属性为 HTML 元素提供附加信息。**

* * *

### HTML 属性

HTML 标签可以拥有 _属性_ 。属性提供了有关 HTML 元素的 _更多的信息_ 。

属性总是以名称/值对的形式出现，比如： _name="value"_ 。

属性总是在 HTML 元素的 _开始标签_ 中规定。

### 属性实例

HTML 链接由 <a> 标签定义。链接的地址在 href 属性中指定：

``` <a href="http://www.bing.com.cn">This is a link</a> ``` 

* * *

### 更多 HTML 属性实例

#### 属性例子 1:

<h1> 定义标题的开始。

<h1 align="center"> 拥有关于对齐方式的附加信息。

[TIY : 居中排列标题](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_header "TIY : 居中排列标题")

#### 属性例子 2:

<body> 定义 HTML 文档的主体。

<body bgcolor="yellow"> 拥有关于背景颜色的附加信息。

[TIY : 背景颜色](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_bgcolor "TIY : 背景颜色")

#### 属性例子 3:

<table> 定义 HTML 表格。（稍后的章节将会学习到更多有关 HTML 表格的内容）

<table border="1"> 拥有关于表格边框的附加信息。

* * *

### HTML 提示：使用小写属性

属性和属性值对大小写 _不敏感_ 。

不过，万维网联盟在其 HTML 4 推荐标准中推荐小写的属性/属性值。

而新版本的 (X)HTML 要求使用小写属性。

* * *

### 始终为属性值加引号

属性值应该始终被包括在引号内。双引号是最常用的，不过使用单引号也没有问题。

在某些个别的情况下，比如属性值本身就含有双引号，那么您必须使用单引号，例如：

``` name='Bill "HelloWorld" Gates' ``` 

* * *

### HTML 属性参考手册

W3School的完整的 HTML 参考手册提供了每个 HTML 元素可使用的合法属性的完整列表：

[完整的 HTML 参考手册](https://www.w3school.com.cn/tags/index.asp "完整的 HTML 参考手册")

下面列出了适用于大多数 HTML 元素的属性：

属性| 值| 描述  
---|---|---  
class|  _classname_|  规定元素的类名（classname）  
id|  _id_|  规定元素的唯一 id  
style|  _style_definition_|  规定元素的行内样式（inline style）  
title|  _text_|  规定元素的额外信息（可在工具提示中显示）  
  
* * *

如需更多关于标准属性的信息，请访问：

[HTML 标准属性参考手册](https://www.w3school.com.cn/tags/html_ref_standardattributes.asp "HTML 标准属性参考手册")

* * *

### 一个完整的实例

``` <!DOCTYPE HTML> <html lang="zh-CN"> <head> <meta charset="UTF-8"> <title>Attribute</title> </head> <body> <p> HTML 标签可以拥有属性。属性提供了有关 HTML 元素的更多的信息。<br /> 属性总是以名称/值对的形式出现，比如：name="value"。<br /> 属性总是在 HTML 元素的开始标签中规定。<br /> 属性值应该始终被包括在引号内。双引号是最常用的，不过使用单引号也没有问题。<br /> 在某些个别的情况下，比如属性值本身就含有双引号，那么您必须使用单引号，例如：<br /> name='Bill "HelloWorld" Gates'<br /> </p> </body> </html> ``` 
