---
title: "HTML样式"
date: 2022-12-25
updated: 2022-12-25
categories:
  - HTML入门、进阶与实战
tags:
  - html
  - css
  - 前端
  - html5
  - 前端框架
csdn_views: 114
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128433891
lang_pair:
  en: "HTML Styles"
---

> 本文迁移自CSDN博客
> 原文链接：[HTML样式](https://blog.csdn.net/m0_59180666/article/details/128433891)
> 📊 114 阅读 | 👍 1 点赞 | 💬 1 评论 | ⭐ 2 收藏

**目录**

HTML 的 style 属性

不赞成使用的标签和属性

应该避免使用下面这些标签和属性：

HTML 样式实例 - 背景颜色

HTML 样式实例 - 字体、颜色和尺寸

HTML 样式实例 - 文本对齐

一个完整的实例

* * *

style 属性用于改变 HTML 元素的样式。

* * *

``` <html> <body style="background-color:PowderBlue;"> <h1>Look! Styles and colors</h1> <p style="font-family:verdana;color:red"> This text is in Verdana and red</p> <p style="font-family:times;color:green"> This text is in Times and green</p> <p style="font-size:30px">This text is 30 pixels high</p> </body> </html> ``` 

* * *

### HTML 的 style 属性

style 属性的作用：

**提供了一种改变所有 HTML 元素的样式的通用方法。**

样式是 HTML 4 引入的，它是一种新的首选的改变 HTML 元素样式的方式。通过 HTML 样式，能够通过使用 style 属性直接将样式添加到 HTML 元素，或者间接地在独立的样式表中（CSS 文件）进行定义。

HTML 中，我们将使用 style 属性来改变 HTML 样式。

* * *

### 不赞成使用的标签和属性

在 HTML 4 中，有若干的标签和属性是被废弃的。被废弃（Deprecated）的意思是在未来版本的 HTML 和 XHTML 中将不支持这些标签和属性。

这里传达的信息很明确：请**避免使用** 这些被废弃的标签和属性！

#### 应该避免使用下面这些标签和属性：

标签| 描述  
---|---  
<center>| 定义居中的内容。  
<font> 和 <basefont>| 定义 HTML 字体。  
<s> 和 <strike>| 定义删除线文本  
<u>| 定义下划线文本  
属性| 描述  
align| 定义文本的对齐方式  
bgcolor| 定义背景颜色  
color| 定义文本颜色  
  
对于以上这些标签和属性：请使用样式代替！

* * *

### HTML 样式实例 - 背景颜色

background-color 属性为元素定义了背景颜色：

``` <html> <body style="background-color:yellow"> <h2 style="background-color:red">This is a heading</h2> <p style="background-color:green">This is a paragraph.</p> </body> </html> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_bodybgstyle "亲自试一试")

style 属性淘汰了“旧的” bgcolor 属性。

[亲自试一试：设置背景颜色的旧方法](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_bodybgcol "亲自试一试：设置背景颜色的旧方法")

* * *

### HTML 样式实例 - 字体、颜色和尺寸

font-family、color 以及 font-size 属性分别定义元素中文本的字体系列、颜色和字体尺寸：

``` <html> <body> <h1 style="font-family:verdana">A heading</h1> <p style="font-family:arial;color:red;font-size:20px;">A paragraph.</p> </body> </html> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_newfont "亲自试一试")

style 属性淘汰了旧的 <font> 标签。

[亲自试一试：设置字体的旧方法](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_font "亲自试一试：设置字体的旧方法")

* * *

### HTML 样式实例 - 文本对齐

text-align 属性规定了元素中文本的水平对齐方式：

``` <html> <body> <h1 style="text-align:center">This is a heading</h1> <p>The heading above is aligned to the center of this page.</p> </body> </html> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_headeralign "亲自试一试")

style 属性淘汰了旧的 "align" 属性。

[亲自试一试：设置居中对齐的旧方法](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_header "亲自试一试：设置居中对齐的旧方法")

* * *

### 一个完整的实例

``` <!DOCTYPE HTML> <html lang="zh-CN"> <head> <meta charset="UTF-8"> <title>Style</title> </head> <body style="background-color:PowderBlue;"> <h1>Look! Styles and colors</h1> <p style="font-family:verdana;color:red"> This text is in Verdana and red</p> <p style="font-family:times;color:green"> This text is in Times and green</p> <p style="font-size:30px">This text is 30 pixels high</p> <h2 style="background-color:red">This is a heading</h2> <p style="background-color:green">This is a paragraph.</p> <h1 style="text-align:center">This is a heading</h1> <p>上面的标题相对于页面居中对齐。</p> </body> </html> ``` 
