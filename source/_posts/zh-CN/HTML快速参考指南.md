---
title: "HTML快速参考指南"
date: 2022-12-31
updated: 2022-12-31
categories:
  - HTML入门、进阶与实战
tags:
  - html
  - 前端
  - javascript
  - css
  - html5
csdn_views: 185
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128507403
lang_pair:
  en: "HTML Quick Reference Guide"
---

> 本文迁移自CSDN博客
> 原文链接：[HTML快速参考指南](https://blog.csdn.net/m0_59180666/article/details/128507403)
> 📊 185 阅读 | 👍 1 点赞 | 💬 1 评论 | ⭐ 2 收藏

**目录**

HTML 基础文档

文本元素

逻辑样式

物理样式

链接、锚、图像元素

无序列表

有序列表

定义列表

表格

框架

表单

实体

其他元素

* * *

### HTML 基础文档

```html <html> <head> <title>Document name goes here</title> </head> <body> Visible text goes here </body> </html> ``` 

* * *

### 文本元素

```html <p>This is a paragraph</p> <br> (line break) <hr> (horizontal rule) <pre>This text is preformatted</pre> ``` 

* * *

### 逻辑样式

```html <em>This text is emphasized</em> <strong>This text is strong</strong> <code>This is some computer code</code> ``` 

* * *

### 物理样式

```html <b>This text is bold</b> <i>This text is italic</i> ``` 

* * *

### 链接、锚、图像元素

```html <a href="http://www.example.com/">This is a Link</a> <a href="http://www.example.com/"><img src="URL" alt="Alternate Text"></a> <a href="mailto:webmaster@example.com">Send e-mail</a>A named anchor: <a name="tips">Useful Tips Section</a> <a href="#tips">Jump to the Useful Tips Section</a> ``` 

* * *

### 无序列表

```html <ul> <li>First item</li> <li>Next item</li> </ul> ``` 

* * *

### 有序列表

```html <ol> <li>First item</li> <li>Next item</li> </ol> ``` 

* * *

### 定义列表

```html <dl> <dt>First term</dt> <dd>Definition</dd> <dt>Next term</dt> <dd>Definition</dd> </dl> ``` 

* * *

### 表格

```html <table border="1"> <tr> <th>someheader</th> <th>someheader</th> </tr> <tr> <td>sometext</td> <td>sometext</td> </tr> </table> ``` 

* * *

### 框架

```html <frameset cols="25%,75%"> <frame src="page1.htm"> <frame src="page2.htm"> </frameset> ``` 

* * *

### 表单

```html <form action="http://www.example.com/test.asp" method="post/get"> <input type="text" name="lastname" value="Nixon" size="30" maxlength="50"> <input type="password"> <input type="checkbox" checked="checked"> <input type="radio" checked="checked"> <input type="submit"> <input type="reset"> <input type="hidden"> <select> <option>Apples <option selected>Bananas <option>Cherries </select> <textarea name="Comment" rows="60" cols="20"></textarea> </form> ``` 

* * *

### 实体

```html &lt; is the same as < &gt; is the same as > &#169; is the same as © ``` 

* * *

### 其他元素

```html <!-- This is a comment --> <blockquote> Text quoted from some source. </blockquote> <address> Address 1<br> Address 2<br> City<br> </address> ``` 
