---
title: "HTML框架与内联框架"
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
csdn_views: 432
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128443203
lang_pair:
  en: "HTML Frames and Iframes"
---

> 本文迁移自CSDN博客
> 原文链接：[HTML框架与内联框架](https://blog.csdn.net/m0_59180666/article/details/128443203)
> 📊 432 阅读 | 👍 1 点赞 | 💬 1 评论 | ⭐ 2 收藏

**目录**

实例

框架

框架标签（Frame）

基本的注意事项 - 有用的提示：

更多实例

添加 iframe 的语法

Iframe - 设置高度和宽度

实例

Iframe - 删除边框

实例

使用 iframe 作为链接的目标

实例

HTML iframe 标签

一个完整的实例

* * *

**通过使用框架，你可以在同一个浏览器窗口中显示不止一个页面。**

* * *

### 实例

[垂直框架](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_frame_cols "垂直框架")

本例演示：如何使用三份不同的文档制作一个垂直框架。

[水平框架](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_frame_rows "水平框架")

本例演示：如何使用三份不同的文档制作一个水平框架。

* * *

### 框架

通过使用框架，可以在同一个浏览器窗口中显示不止一个页面。每份HTML文档称为一个框架，并且每个框架都独立于其他的框架。

使用框架的坏处：

  * 开发人员必须同时跟踪更多的HTML文档
  * 很难打印整张页面

框架结构标签（<frameset>）

  * 框架结构标签（<frameset>）定义如何将窗口分割为框架
  * 每个 frameset 定义了一系列行 _或_ 列
  * rows/columns 的值规定了每行或每列占据屏幕的面积

注：frameset 标签也被某些文章和书籍译为框架集。

* * *

### 框架标签（Frame）

Frame 标签定义了放置在每个框架中的 HTML 文档。

在下面的这个例子中，我们设置了一个两列的框架集。第一列被设置为占据浏览器窗口的 25%。第二列被设置为占据浏览器窗口的 75%。HTML 文档 "frame_a.htm" 被置于第一个列中，而 HTML 文档 "frame_b.htm" 被置于第二个列中：

``` <frameset cols="25%,75%"> <frame src="frame_a.htm"> <frame src="frame_b.htm"> </frameset> ``` 

* * *

### 基本的注意事项 - 有用的提示：

假如一个框架有可见边框，用户可以拖动边框来改变它的大小。为了避免这种情况发生，可以在 <frame> 标签中加入：noresize="noresize"。

为不支持框架的浏览器添加 <noframes> 标签。

重要提示：不能将 <body></body> 标签与 <frameset></frameset> 标签同时使用！不过，假如你添加包含一段文本的 <noframes> 标签，就必须将这段文字嵌套于 <body></body> 标签内。（在下面的第一个实例中，可以查看它是如何实现的。）

* * *

### 更多实例

[如何使用 <noframes> 标签](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_noframes "如何使用 <noframes> 标签")

本例演示：如何使用 <noframes> 标签。

[混合框架结构](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_frame_mix "混合框架结构")

本例演示如何制作含有三份文档的框架结构，同时将他们混合置于行和列之中。

[含有 noresize="noresize" 属性的框架结构](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_frame_noresize "含有 noresize="noresize" 属性的框架结构")

本例演示 noresize 属性。在本例中，框架是不可调整尺寸的。在框架间的边框上拖动鼠标，你会发现边框是无法移动的。

[导航框架](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_frame_navigation "导航框架")

本例演示如何制作导航框架。导航框架包含一个将第二个框架作为目标的链接列表。名为 "contents.htm" 的文件包含三个链接。

[内联框架](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_iframe "内联框架")

本例演示如何创建内联框架（HTML 页中的框架）。

[跳转至框架内的一个指定的节](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_frame_jump "跳转至框架内的一个指定的节")

本例演示两个框架。其中的一个框架设置了指向另一个文件内指定的节的链接。这个"link.htm"文件内指定的节使用 <a name="C10"> 进行标识。

[使用框架导航跳转至指定的节](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_frame_navigation2 "使用框架导航跳转至指定的节")

本例演示两个框架。左侧的导航框架包含了一个链接列表，这些链接将第二个框架作为目标。第二个框架显示被链接的文档。导航框架其中的链接指向目标文件中指定的节。

* * *

**iframe 用于在网页内显示网页。**

* * *

### 添加 iframe 的语法

``` <iframe src="URL"></iframe> ``` 

_URL_ 指向隔离页面的位置。

* * *

### Iframe - 设置高度和宽度

height 和 width 属性用于规定 iframe 的高度和宽度。

属性值的默认单位是像素，但也可以用百分比来设定（比如 "80%"）。

#### 实例

``` <iframe src="demo_iframe.htm" width="200" height="200"></iframe> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_iframe_height_width "亲自试一试")

* * *

### Iframe - 删除边框

frameborder 属性规定是否显示 iframe 周围的边框。

设置属性值为 "0" 就可以移除边框：

#### 实例

``` <iframe src="demo_iframe.htm" frameborder="0"></iframe> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_iframe_frameborder "亲自试一试")

* * *

### 使用 iframe 作为链接的目标

iframe 可用作链接的目标（target）。

链接的 target 属性必须引用 iframe 的 name 属性：

#### 实例

``` <iframe src="demo_iframe.htm" name="iframe_a"></iframe> <p><a href="http://www.bing.com.cn" target="iframe_a">bing.com.cn</a></p> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_iframe_target "亲自试一试")

* * *

### HTML iframe 标签

标签| 描述  
---|---  
[<iframe>](https://www.w3school.com.cn/tags/tag_iframe.asp "<iframe>")| 定义内联的子窗口（框架）  
  
* * *

### 一个完整的实例

``` <!DOCTYPE HTML> <html lang="zh-CN"> <head> <meta charset="UTF-8"> <title>Iframe</title> </head> <body> <p>iframe 用于在网页内显示网页。</p> <iframe src="https://cn.bing.com/?form=000047"></iframe> <p>URL 指向隔离页面的位置。<br /> height 和 width 属性用于规定 iframe 的高度和宽度。 属性值的默认单位是像素，但也可以用百分比来设定（比如 "80%"）。</p> <iframe src="5_HTML_Paragraph.html" width="200" height="200"></iframe> <p>frameborder 属性规定是否显示 iframe 周围的边框。 设置属性值为 "0" 就可以移除边框：</p> <iframe src="8_HTML_Quotation.html" frameborder="0"></iframe> <p>iframe 可用作链接的目标（target）。 链接的 target 属性必须引用 iframe 的 name 属性：</p> <iframe src="16_HTML_id.html" name="iframe_a"></iframe> <p><a href="https://cn.bing.com/?form=000047" target="iframe_a">点击跳转搜索</a></p> </body> </html> ``` 
