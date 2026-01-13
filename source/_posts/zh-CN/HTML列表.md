---
title: "HTML列表"
date: 2022-12-26
updated: 2022-12-26
categories:
  - HTML入门、进阶与实战
tags:
  - html
  - 前端
  - javascript
  - 开发语言
  - html5
csdn_views: 138
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128440738
lang_pair:
  en: "HTML Lists"
---

> 本文迁移自CSDN博客
> 原文链接：[HTML列表](https://blog.csdn.net/m0_59180666/article/details/128440738)
> 📊 138 阅读 | 👍 1 点赞 | 💬 1 评论 | ⭐ 2 收藏

**目录**

实例

无序列表

有序列表

定义列表

更多实例

列表标签

一个完整的实例

* * *

**HTML 支持有序、无序和定义列表**

* * *

### 实例

[无序列表](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_list_unordered "无序列表")

本例演示无序列表。

[有序列表](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_list_ordered "有序列表")

本例演示有序列表。

（[可以在本页底端找到更多实例](https://www.w3school.com.cn/html/html_lists.asp#more_examples "可以在本页底端找到更多实例")。）

* * *

### 无序列表

无序列表是一个项目的列表，此列项目使用粗体圆点（典型的小黑圆圈）进行标记。

无序列表始于 <ul> 标签。每个列表项始于 <li>。
    
    
    <ul>
    <li>Coffee</li>
    <li>Milk</li>
    </ul>
    

浏览器显示如下：

  * Coffee
  * Milk

列表项内部可以使用段落、换行符、图片、链接以及其他列表等等。

* * *

### 有序列表

同样，有序列表也是一列项目，列表项目使用数字进行标记。

有序列表始于 <ol> 标签。每个列表项始于 <li> 标签。
    
    
    <ol>
    <li>Coffee</li>
    <li>Milk</li>
    </ol>
    

浏览器显示如下：

  1. Coffee
  2. Milk

列表项内部可以使用段落、换行符、图片、链接以及其他列表等等。

* * *

### 定义列表

自定义列表不仅仅是一列项目，而是项目及其注释的组合。

自定义列表以 <dl> 标签开始。每个自定义列表项以 <dt> 开始。每个自定义列表项的定义以 <dd> 开始。
    
    
    <dl>
    <dt>Coffee</dt>
    <dd>Black hot drink</dd>
    <dt>Milk</dt>
    <dd>White cold drink</dd>
    </dl>
    

浏览器显示如下：

Coffee

Black hot drink

Milk

White cold drink

定义列表的列表项内部可以使用段落、换行符、图片、链接以及其他列表等等。

### 

* * *

### 更多实例

[不同类型的无序列表](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_lists_unordered "不同类型的无序列表")

本例演示一个无序列表。

[不同类型的有序列表](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_lists_ordered "不同类型的有序列表")

本例演示不同类型的有序列表。

[嵌套列表](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_lists_nested "嵌套列表")

本例演示如何嵌套列表。

[嵌套列表 2](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_lists_nested2 "嵌套列表 2")

本例演示更复杂的嵌套列表。

[定义列表](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_list_definition "定义列表")

本例演示一个定义列表。

* * *

### 列表标签

标签| 描述  
---|---  
[<ol>](https://www.w3school.com.cn/tags/tag_ol.asp "<ol>")| 定义有序列表。  
[<ul>](https://www.w3school.com.cn/tags/tag_ul.asp "<ul>")| 定义无序列表。  
[<li>](https://www.w3school.com.cn/tags/tag_li.asp "<li>")| 定义列表项。  
[<dl>](https://www.w3school.com.cn/tags/tag_dl.asp "<dl>")| 定义定义列表。  
[<dt>](https://www.w3school.com.cn/tags/tag_dt.asp "<dt>")| 定义定义项目。  
[<dd>](https://www.w3school.com.cn/tags/tag_dd.asp "<dd>")| 定义定义的描述。  
[<dir>](https://www.w3school.com.cn/tags/tag_dir.asp "<dir>")| 已废弃。使用 <ul> 代替它。  
[<menu>](https://www.w3school.com.cn/tags/tag_menu.asp "<menu>")| 已废弃。使用 <ul> 代替它。  
  
* * *

### **一个完整的实例**

``` <!DOCTYPE HTML> <html lang="zh-CN"> <head> <meta charset="UTF-8"> <title>List</title> </head> <body> <h4>Disc 项目符号列表：</h4> <ul type="disc"> <li>苹果</li> <li>香蕉</li> <li>柠檬</li> <li>桔子</li> </ul> <h4>Circle 项目符号列表：</h4> <ul type="circle"> <li>苹果</li> <li>香蕉</li> <li>柠檬</li> <li>桔子</li> </ul> <h4>Square 项目符号列表：</h4> <ul type="square"> <li>苹果</li> <li>香蕉</li> <li>柠檬</li> <li>桔子</li> </ul> <h4>数字列表：</h4> <ol> <li>苹果</li> <li>香蕉</li> <li>柠檬</li> <li>桔子</li> </ol> <h4>字母列表：</h4> <ol type="A"> <li>苹果</li> <li>香蕉</li> <li>柠檬</li> <li>桔子</li> </ol> <h4>小写字母列表：</h4> <ol type="a"> <li>苹果</li> <li>香蕉</li> <li>柠檬</li> <li>桔子</li> </ol> <h4>罗马字母列表：</h4> <ol type="I"> <li>苹果</li> <li>香蕉</li> <li>柠檬</li> <li>桔子</li> </ol> <h4>小写罗马字母列表：</h4> <ol type="i"> <li>苹果</li> <li>香蕉</li> <li>柠檬</li> <li>桔子</li> </ol> <h4>一个嵌套列表：</h4> <ul> <li>咖啡</li> <li>茶 <ul> <li>红茶</li> <li>绿茶 <ul> <li>中国茶</li> <li>非洲茶</li> </ul> </li> </ul> </li> <li>牛奶</li> </ul> <h4>一个自定义列表：</h4> <dl> <dt>计算机</dt> <dd>用来计算的仪器 ... ...</dd> <dt>显示器</dt> <dd>以视觉方式显示信息的装置 ... ...</dd> </dl> </body> </html> ``` 
