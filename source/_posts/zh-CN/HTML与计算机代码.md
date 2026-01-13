---
title: "HTML与计算机代码"
date: 2022-12-27
updated: 2022-12-27
categories:
  - HTML入门、进阶与实战
tags:
  - html
  - javascript
  - 前端框架
  - 开发语言
  - html5
csdn_views: 296
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128454721
lang_pair:
  en: "HTML and Computer Code"
---

> 本文迁移自CSDN博客
> 原文链接：[HTML与计算机代码](https://blog.csdn.net/m0_59180666/article/details/128454721)
> 📊 296 阅读 | 👍 1 点赞 | 💬 1 评论 | ⭐ 2 收藏

**目录**

计算机代码

HTML 计算机代码格式

HTML 键盘格式

实例

HTML 样本格式

实例

HTML 代码格式

实例

实例

实例

HTML 变量格式化

实例

HTML 计算机代码元素

一个完整的实例

* * *

### 计算机代码

``` var person = { firstName:"Bill", lastName:"Gates", age:50, eyeColor:"blue" } ``` 

* * *

### HTML 计算机代码格式

通常，HTML 使用** _可变_** 的字母尺寸，以及可变的字母间距。

在显示 _计算机代码_ 示例时，并不需要如此。

**_< kbd>_,  _< samp>_, **以及**_< code>_ **元素全都支持固定的字母尺寸和间距。

* * *

### HTML 键盘格式

HTML**_< kbd>_ **元素定义 _键盘输入_ ：

#### 实例

``` <p>To open a file, select:</p> <p><kbd>File | Open...</kbd></p> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_formatting_kbd "亲自试一试")

* * *

### HTML 样本格式

HTML ** _< samp>_** 元素定义 _计算机输出示例_ ：

#### 实例

``` <samp> demo.example.com login: Apr 12 09:10:17 Linux 2.6.10-grsec+gg3+e+fhs6b+nfs+gr0501+++p3+c4a+gr2b-reslog-v6.189 </samp> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_formatting_samp "亲自试一试")

* * *

### HTML 代码格式

HTML**_< code>_ **元素定义 _编程代码示例_ ：

#### 实例

``` <code> var person = { firstName:"Bill", lastName:"Gates", age:50, eyeColor:"blue" } </code> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_formatting_code "亲自试一试")

**< code>** 元素 _不保留_ 多余的** _空格_** 和** _折行_** ：

#### 实例

代码实例：

``` <code> var person = { firstName:"Bill", lastName:"Gates", age:50, eyeColor:"blue" } </code> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_formatting_codelines "亲自试一试")

如需解决该问题，您必须在** <pre>** 元素中包围代码：

#### 实例

代码实例：

``` <code> <pre> var person = { firstName:"Bill", lastName:"Gates", age:50, eyeColor:"blue" } </pre> </code> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_formatting_codepre "亲自试一试")

* * *

### HTML 变量格式化

HTML**_< var>_ **元素定义 _数学变量_ ：

#### 实例

``` <p>Einstein wrote:</p> <p><var>E = m c<sup>2</sup></var></p> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_formatting_var "亲自试一试")

* * *

### HTML 计算机代码元素

标签| 描述  
---|---  
<code>| 定义计算机代码文本  
<kbd>| 定义键盘文本  
<samp>| 定义计算机代码示例  
<var>| 定义变量  
<pre>| 定义预格式化文本  
  
* * *

### 一个完整的实例

``` <!DOCTYPE HTML> <html lang="zh-CN"> <head> <meta charset="UTF-8"> <title>Code</title> </head> <body style="font-size:16px"> <p>HTML kbd 元素表示键盘输入：</p> <p><kbd>File | Open...</kbd></p> <samp> demo.example.com login: Nov 14 16:22:17 Linux 2.6.10-grsec+gg3+e+fhs6b+nfs+gr0501+++p3+c4a+gr2b-reslog-v6.189 </samp><br /> <code> var person = { firstName:"Vector", lastName:"Kun", age:20, eyeColor:"black" } </code><br /> <p> code元素不保留多余的空格和折行：<br /><br /> <code> var person = { firstName:"Vector", lastName:"Kun", age:20, eyeColor:"black" } </code><br /><br /> 如需解决该问题，您必须在 pre 元素中包围代码：<br /> <pre> var person = { firstName:"Bill", lastName:"Gates", age:50, eyeColor:"blue" } </pre> <p>HTML var 元素定义数学变量：<br /> Einstein wrote:</p> <p><var>E = m c<sup>2</sup></var></p> </body> </html> ``` 
