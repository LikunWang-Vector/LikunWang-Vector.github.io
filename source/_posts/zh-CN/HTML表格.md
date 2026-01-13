---
title: "HTML表格"
date: 2022-12-26
updated: 2022-12-26
categories:
  - HTML入门、进阶与实战
tags:
  - html
  - 前端
  - javascript
  - html5
  - 前端框架
csdn_views: 307
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128440479
cover: /images/posts/HTML表格/3bcda8d006bd.gif
lang_pair:
  en: "HTML Tables"
---

> 本文迁移自CSDN博客
> 原文链接：[HTML表格](https://blog.csdn.net/m0_59180666/article/details/128440479)
> 📊 307 阅读 | 👍 1 点赞 | 💬 1 评论 | ⭐ 2 收藏

**目录**

实例

表格

表格和边框属性

表格的表头

表格中的空单元格

更多实例

表格标签

一个完整的实例

本例涉及到的资源

eg_background.jpg

eg_cute.gif

* * *

**可以使用 HTML 创建表格。**

* * *

### 实例

[表格](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_tables "表格")

这个例子演示如何在 HTML 文档中创建表格。

[表格边框](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_table_borders "表格边框")

本例演示各种类型的表格边框。

（[可以在本页底端找到更多实例](https://www.w3school.com.cn/html/html_tables.asp#more_examples "可以在本页底端找到更多实例")。）

* * *

### 表格

表格由 <table> 标签来定义。每个表格均有若干行（由 <tr> 标签定义），每行被分割为若干单元格（由 <td> 标签定义）。字母 td 指表格数据（table data），即数据单元格的内容。数据单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等。

``` <table border="1"> <tr> <td>row 1, cell 1</td> <td>row 1, cell 2</td> </tr> <tr> <td>row 2, cell 1</td> <td>row 2, cell 2</td> </tr> </table> ``` 

在浏览器显示如下：

row 1, cell 1| row 1, cell 2  
---|---  
row 2, cell 1| row 2, cell 2  
  
* * *

### 表格和边框属性

如果不定义边框属性，表格将不显示边框。有时这很有用，但是大多数时候，我们希望显示边框。

使用边框属性来显示一个带有边框的表格：

``` <table border="1"> <tr> <td>Row 1, cell 1</td> <td>Row 1, cell 2</td> </tr> </table> ``` 

* * *

### 表格的表头

表格的表头使用 <th> 标签进行定义。

大多数浏览器会把表头显示为粗体居中的文本：

``` <table border="1"> <tr> <th>Heading</th> <th>Another Heading</th> </tr> <tr> <td>row 1, cell 1</td> <td>row 1, cell 2</td> </tr> <tr> <td>row 2, cell 1</td> <td>row 2, cell 2</td> </tr> </table> ``` 

在浏览器显示如下：

Heading| Another Heading  
---|---  
row 1, cell 1| row 1, cell 2  
row 2, cell 1| row 2, cell 2  
  
* * *

### 表格中的空单元格

在一些浏览器中，没有内容的表格单元显示得不太好。如果某个单元格是空的（没有内容），浏览器可能无法显示出这个单元格的边框。

``` <table border="1"> <tr> <td>row 1, cell 1</td> <td>row 1, cell 2</td> </tr> <tr> <td></td> <td>row 2, cell 2</td> </tr> </table> ``` 

浏览器可能会这样显示：

![](/images/posts/HTML表格/3bcda8d006bd.gif)

注意：这个空的单元格的边框没有被显示出来。为了避免这种情况，在空单元格中添加一个空格占位符，就可以将边框显示出来。

``` <table border="1"> <tr> <td>row 1, cell 1</td> <td>row 1, cell 2</td> </tr> <tr> <td>&nbsp;</td> <td>row 2, cell 2</td> </tr> </table> ``` 

在浏览器中显示如下：

row 1, cell 1| row 1, cell 2  
---|---  
| row 2, cell 2  
  
### 

* * *

### 更多实例

[没有边框的表格](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_tables2 "没有边框的表格")

本例演示一个没有边框的表格。

[表格中的表头(Heading)](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_table_headers "表格中的表头\(Heading\)")

本例演示如何显示表格表头。

[空单元格](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_table_nbsp "空单元格")

本例展示如何使用 "&nbsp;" 处理没有内容的单元格。

[带有标题的表格](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_tables3 "带有标题的表格")

本例演示一个带标题 (caption) 的表格

[跨行或跨列的表格单元格](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_table_span "跨行或跨列的表格单元格")

本例演示如何定义跨行或跨列的表格单元格。

[表格内的标签](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_table_elements "表格内的标签")

本例演示如何显示在不同的元素内显示元素。

[单元格边距(Cell padding)](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_table_cellpadding "单元格边距\(Cell padding\)")

本例演示如何使用 Cell padding 来创建单元格内容与其边框之间的空白。

[单元格间距(Cell spacing)](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_table_cellspacing "单元格间距\(Cell spacing\)")

本例演示如何使用 Cell spacing 增加单元格之间的距离。

[向表格添加背景颜色或背景图像](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_table_background "向表格添加背景颜色或背景图像")

本例演示如何向表格添加背景。

[向表格单元添加背景颜色或者背景图像](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_table_cellbackground "向表格单元添加背景颜色或者背景图像")

本例演示如何向一个或者更多表格单元添加背景。

[在表格单元中排列内容](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_table_align "在表格单元中排列内容")

本例演示如何使用 "align" 属性排列单元格内容,以便创建一个美观的表格。

[框架(frame)属性](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_table_frame "框架\(frame\)属性")

本例演示如何使用 "frame" 属性来控制围绕表格的边框。

* * *

### 表格标签

表格| 描述  
---|---  
[<table>](https://www.w3school.com.cn/tags/tag_table.asp "<table>")| 定义表格  
[<caption>](https://www.w3school.com.cn/tags/tag_caption.asp "<caption>")| 定义表格标题。  
[<th>](https://www.w3school.com.cn/tags/tag_th.asp "<th>")| 定义表格的表头。  
[<tr>](https://www.w3school.com.cn/tags/tag_tr.asp "<tr>")| 定义表格的行。  
[<td>](https://www.w3school.com.cn/tags/tag_td.asp "<td>")| 定义表格单元。  
[<thead>](https://www.w3school.com.cn/tags/tag_thead.asp "<thead>")| 定义表格的页眉。  
[<tbody>](https://www.w3school.com.cn/tags/tag_tbody.asp "<tbody>")| 定义表格的主体。  
[<tfoot>](https://www.w3school.com.cn/tags/tag_tfoot.asp "<tfoot>")| 定义表格的页脚。  
[<col>](https://www.w3school.com.cn/tags/tag_col.asp "<col>")| 定义用于表格列的属性。  
[<colgroup>](https://www.w3school.com.cn/tags/tag_colgroup.asp "<colgroup>")| 定义表格列的组。  
  
* * *

### 一个完整的实例

``` <!DOCTYPE HTML> <html lang="zh-CN"> <head> <meta charset="UTF-8"> <title>Table</title> </head> <body> <h4>这个表格没有边框：(没有定义边框参数)</h4> <table> <tr> <td>100</td> <td>200</td> <td>300</td> </tr> <tr> <td>400</td> <td>500</td> <td>600</td> </tr> </table> <h4>这个表格也没有边框：(边框参数宽度为0)</h4> <table border="0"> <tr> <td>100</td> <td>200</td> <td>300</td> </tr> <tr> <td>400</td> <td>500</td> <td>600</td> </tr> </table> <h4>表头：</h4> <table border="1"> <tr> <th>姓名</th> <th>电话</th> <th>电话</th> </tr> <tr> <td>Bill Gates</td> <td>555 77 854</td> <td>555 77 855</td> </tr> </table> <h4>垂直的表头：</h4> <table border="1"> <tr> <th>姓名</th> <td>Bill Gates</td> </tr> <tr> <th>电话</th> <td>555 77 854</td> </tr> <tr> <th>电话</th> <td>555 77 855</td> </tr> </table> <table border="1"> <tr> <td>Some text</td> <td>Some text</td> </tr> <tr> <td></td> <td>Some text</td> </tr> </table> <p>正如您看到的，其中一个单元没有边框。这是因为它是空的。在该单元中插入一个空格后，仍然没有边框。</p> <p>我们的技巧是在单元中插入一个 no-breaking 空格。</p> <p>no-breaking 空格是一个字符实体。如果您不清楚什么是字符实体，请阅读关于字符实体的章节。</p> <p>no-breaking 空格由和号开始 ("&")，然后是字符"nbsp"，并以分号结尾(";")。</p> <h4>这个表格有一个标题，以及粗边框：</h4> <table border="6"> <caption>我的标题</caption> <tr> <td>100</td> <td>200</td> <td>300</td> </tr> <tr> <td>400</td> <td>500</td> <td>600</td> </tr> </table> <h4>横跨两列的单元格：</h4> <table border="1"> <tr> <th>姓名</th> <th colspan="2">电话</th> </tr> <tr> <td>Bill Gates</td> <td>555 77 854</td> <td>555 77 855</td> </tr> </table> <h4>横跨两行的单元格：</h4> <table border="1"> <tr> <th>姓名</th> <td>Bill Gates</td> </tr> <tr> <th rowspan="2">电话</th> <td>555 77 854</td> </tr> <tr> <td>555 77 855</td> </tr> </table> <h4>表格内也可以使用标签:</h4> <table border="1"> <tr> <td> <p>这是一个段落。</p> <p>这是另一个段落。</p> </td> <td>这个单元包含一个表格： <table border="1"> <tr> <td>A</td> <td>B</td> </tr> <tr> <td>C</td> <td>D</td> </tr> </table> </td> </tr> <tr> <td>这个单元包含一个列表： <ul> <li>苹果</li> <li>香蕉</li> <li>菠萝</li> </ul> </td> <td>HELLO</td> </tr> </table> <h4>没有 cellpadding：</h4> <p>cellpadding:单元格边距（单元格内容与其边框之间的空白）</p> <table border="1"> <tr> <td>First</td> <td>Row</td> </tr> <tr> <td>Second</td> <td>Row</td> </tr> </table> <h4>带有 cellpadding：</h4> <table border="1" cellpadding="10"> <tr> <td>First</td> <td>Row</td> </tr> <tr> <td>Second</td> <td>Row</td> </tr> </table> <h4>没有 cellspacing：</h4> <p>cellspacing:单元格间距（单元格之间的距离）</p> <table border="1"> <tr> <td>First</td> <td>Row</td> </tr> <tr> <td>Second</td> <td>Row</td> </tr> </table> <h4>带有 cellspacing：</h4> <table border="1" cellspacing="10"> <tr> <td>First</td> <td>Row</td> </tr> <tr> <td>Second</td> <td>Row</td> </tr> </table> <h4>背景颜色：</h4> <table border="1" bgcolor="pink"> <tr> <td>First</td> <td>Row</td> </tr> <tr> <td>Second</td> <td>Row</td> </tr> </table> <h4>背景图像：</h4> <table border="1" background="./src/img/eg_background.jpg"> <tr> <td>First</td> <td>Row</td> </tr> <tr> <td>Second</td> <td>Row</td> </tr> </table> <h4>单元格背景：</h4> <table border="1"> <tr> <td bgcolor="red">First</td> <td background="./src/img/eg_cute.gif">Row</td> </tr> <tr> <td background="./src/img/eg_background.jpg">Second</td> <td bgcolor="grey">Row</td> </tr> </table> <table width="400" border="1"> <tr> <th align="left">消费项目....</th> <th align="right">一月</th> <th align="right">二月</th> </tr> <tr> <td align="left">衣服</td> <td align="right">$241.10</td> <td align="right">$50.20</td> </tr> <tr> <td align="left">化妆品</td> <td align="right">$30.00</td> <td align="right">$44.45</td> </tr> <tr> <td align="left">食物</td> <td align="right">$730.40</td> <td align="right">$650.00</td> </tr> <tr> <th align="left">总计</th> <th align="right">$1001.50</th> <th align="right">$744.65</th> </tr> </table> <p><b>注释：</b>frame 属性无法在 Internet Explorer 中正确地显示。</p> <p>Table with frame="box":</p> <table frame="box"> <tr> <th>Month</th> <th>Savings</th> </tr> <tr> <td>January</td> <td>$100</td> </tr> </table> <p>Table with frame="above":</p> <table frame="above"> <tr> <th>Month</th> <th>Savings</th> </tr> <tr> <td>January</td> <td>$100</td> </tr> </table> <p>Table with frame="below":</p> <table frame="below"> <tr> <th>Month</th> <th>Savings</th> </tr> <tr> <td>January</td> <td>$100</td> </tr> </table> <p>Table with frame="hsides(horizontal sides)":</p> <table frame="hsides"> <tr> <th>Month</th> <th>Savings</th> </tr> <tr> <td>January</td> <td>$100</td> </tr> </table> <p>Table with frame="vsides(vertical sides)":</p> <table frame="vsides"> <tr> <th>Month</th> <th>Savings</th> </tr> <tr> <td>January</td> <td>$100</td> </tr> </table> </body> </html> ``` 

* * *

### 本例涉及到的资源

#### eg_background.jpg

![](/images/posts/HTML表格/79ff88bb2907.jpeg)

#### eg_cute.gif

![](/images/posts/HTML表格/bf421a615017.gif)
