---
title: "HTML与XHTML"
date: 2023-01-01
updated: 2023-01-01
categories:
  - HTML入门、进阶与实战
tags:
  - xhtml
  - html
  - javascript
  - 前端
csdn_views: 792
csdn_likes: 3
csdn_comments: 1
csdn_favorites: 5
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128510493
lang_pair:
  en: "HTML and XHTML"
---

> 本文迁移自CSDN博客
> 原文链接：[HTML与XHTML](https://blog.csdn.net/m0_59180666/article/details/128510493)
> 📊 792 阅读 | 👍 3 点赞 | 💬 1 评论 | ⭐ 5 收藏

**目录**

XHTML简介

什么是 XHTML？

为什么使用 XHTML？

文档结构

元素语法

属性语法

是强制性的

如何从 HTML 转换到 XHTML

XHTML元素

XHTML 元素 - 语法规则

XHTML 元素必须正确嵌套

XHTML 元素必须始终关闭

空元素也必须关闭

XHTML 元素必须小写

XHTML属性

XHTML 属性 - 语法规则

XHTML 属性必须使用小写

XHTML 属性值必须用引号包围

禁止属性简写

总结

* * *

**2023兔年来临，首先在这里恭祝大家新年快乐，心想事成，前程似锦！**

* * *

## XHTML简介

* * *

**XHTML 是以 XML 格式编写的 HTML。**

* * *

### 什么是 XHTML？

  * XHTML 指的是可扩展超文本标记语言
  * XHTML 与 HTML 4.01 几乎是相同的
  * XHTML 是更严格更纯净的 HTML 版本
  * XHTML 是以 XML 应用的方式定义的 HTML
  * XHTML 是 [2001 年 1 月](https://www.w3school.com.cn/w3c/w3c_xhtml.asp "2001 年 1 月")发布的 W3C 推荐标准
  * XHTML 得到所有主流浏览器的支持

* * *

### 为什么使用 XHTML？

因特网上的很多页面包含了“糟糕”的 HTML。

如果在浏览器中查看，下面的 HTML 代码运行起来非常正常（即使它并未遵守 HTML 规则）：

```html <html> <head> <title>This is bad HTML</title> <body> <h1>Bad HTML <p>This is a paragraph </body> ``` 

XML 是一种必须正确标记且格式良好的标记语言。

如果希望学习 XML，可以参阅 [XML 教程](https://www.w3school.com.cn/xml/index.asp "XML 教程")。

如今的科技界存在一些不同的浏览器技术。其中一些在计算机上运行，而另一些可能在移动设备或其他小型设备上运行。小型设备往往缺乏解释“糟糕”的标记语言的资源和能力。

所以 - **通过结合 XML 和 HTML 的长处，开发出了 XHTML。** XHTML 是作为 XML 被重新设计的 HTML。

与 HTML 相比最重要的区别：

#### 文档结构

  * XHTML DOCTYPE 是** _强制性的_**
  * <html> 中的 XML namespace 属性是** _强制性的_**
  * <html>、<head>、<title> 以及 <body> 也是** _强制性的_**

#### 元素语法

  * XHTML 元素必须** _正确嵌套_**
  * XHTML 元素必须始终** _关闭_**
  * XHTML 元素必须** _小写_**
  * XHTML 文档必须有 _一个**根元素**_

#### 属性语法

  * XHTML 属性必须使用** _小写_**
  * XHTML 属性值必须用** _引号包围_**
  * XHTML 属性最小化也是** _禁止的_**

* * *

### <!DOCTYPE ....> 是强制性的

XHTML 文档必须进行 XHTML 文档类型声明（XHTML DOCTYPE declaration）。

我们可以参阅标签参考手册： [XHTML 文档类型](https://www.w3school.com.cn/tags/tag_doctype.asp "XHTML 文档类型")。

<html>、<head>、<title> 以及 <body> 元素也必须存在，并且必须使用 <html> 中的 xmlns 属性为文档规定 xml 命名空间。

下面的例子展示了带有最少的必需标签的 XHTML 文档：

```html <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html xmlns="http://www.w3.org/1999/xhtml"> <head> <title>Title of document</title> </head> <body> ...... </body> </html> ``` 

* * *

### 如何从 HTML 转换到 XHTML

  1. 向每张页面的第一行添加 XHTML <!DOCTYPE>
  2. 向每张页面的 html 元素添加 xmlns 属性
  3. 把所有元素名改为小写
  4. 关闭所有空元素
  5. 把所有属性名改为小写
  6. 为所有属性值加引号

* * *

## XHTML元素

* * *

**XHTML 元素是以 XML 格式编写的 HTML 元素。**

* * *

### XHTML 元素 - 语法规则

  * XHTML 元素必须** _正确嵌套_**
  * XHTML 元素必须始终** _关闭_**
  * XHTML 元素必须** _小写_**
  * XHTML 文档必须有 _一个**根元素**_

* * *

### XHTML 元素必须正确嵌套

在 HTML 中，某些元素可以不正确地彼此嵌套在一起，就像这样：

```html <b><i>This text is bold and italic</b></i> ``` 

在 XHTML 中，所有元素必须正确地彼此嵌套，就像这样：

```html <b><i>This text is bold and italic</i></b> ``` 

* * *

### XHTML 元素必须始终关闭

这是错误的：

```html <p>This is a paragraph <p>This is another paragraph ``` 

这是正确的：

```html <p>This is a paragraph</p> <p>This is another paragraph</p> ``` 

* * *

### 空元素也必须关闭

这是错误的：

```html A break: <br> A horizontal rule: <hr> An image: <img src="happy.gif" alt="Happy face"> ``` 

这是正确的：

```html A break: <br /> A horizontal rule: <hr /> An image: <img src="happy.gif" alt="Happy face" /> ``` 

* * *

### XHTML 元素必须小写

这是错误的：

```html <BODY> <P>This is a paragraph</P> </BODY> ``` 

这是正确的：

```html <body> <p>This is a paragraph</p> </body> ``` 

* * *

## XHTML属性

* * *

**XHTML 属性是以 XML 格式编写的 HTML 属性。**

* * *

### XHTML 属性 - 语法规则

  * XHTML 属性必须使用** _小写_**
  * XHTML 属性值必须用** _引号包围_**
  * XHTML 属性最小化也是** _禁止的_**

* * *

### XHTML 属性必须使用小写

这是错误的：

```html <table WIDTH="100%"> ``` 

这是正确的：

```html <table width="100%"> ``` 

* * *

### XHTML 属性值必须用引号包围

这是错误的：

```html <table width=100%> ``` 

这是正确的：

```html <table width="100%"> ``` 

* * *

### 禁止属性简写

这是错误的：

```html <input checked> <input readonly> <input disabled> <option selected> ``` 

这是正确的：

```html <input checked="checked" /> <input readonly="readonly" /> <input disabled="disabled" /> <option selected="selected" /> ``` 

* * *

## 总结

本节学习了一种新的语法格式：XHTML，是由XML和HTML结合的一种形式。我们可以通过下面的网站简要做20道题测试一下是否掌握：

传送门——[开始 XHTML 测验](https://www.w3school.com.cn/xhtml/xhtml_quiz.asp "开始 XHTML 测验")
