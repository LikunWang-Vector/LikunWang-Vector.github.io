---
title: "HTML链接"
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
csdn_views: 891
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128436648
lang_pair:
  en: "HTML Links"
---

> 本文迁移自CSDN博客
> 原文链接：[HTML链接](https://blog.csdn.net/m0_59180666/article/details/128436648)
> 📊 891 阅读 | 👍 1 点赞 | 💬 1 评论 | ⭐ 2 收藏

**目录**

实例

HTML 超链接（链接）

HTML 链接语法

实例

HTML 链接 - target 属性

HTML 链接 - name 属性

命名锚的语法：

实例

基本的注意事项-有用的提示：

更多实例

HTML 链接标签

一个完整的实例

* * *

**HTML 使用超级链接与网络上的另一个文档相连。**

**几乎可以在所有的网页中找到链接。点击链接可以从一张页面跳转到另一张页面。**

* * *

### 实例

[创建超级链接](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_links "创建超级链接")

本例演示如何在 HTML 文档中创建链接。

[将图像作为链接](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_imglink "将图像作为链接")

本例演示如何使用图像作为链接。

（[可以在本页底端找到更多实例](https://www.w3school.com.cn/html/html_links.asp#more_examples "可以在本页底端找到更多实例")）

* * *

### HTML 超链接（链接）

超链接可以是一个字，一个词，或者一组词，也可以是一幅图像，您可以点击这些内容来跳转到新的文档或者当前文档中的某个部分。

当您把鼠标指针移动到网页中的某个链接上时，箭头会变为一只小手。

我们通过使用 <a> 标签在 HTML 中创建链接。

有两种使用 <a> 标签的方式：

  1. 通过使用 href 属性 - 创建指向另一个文档的链接
  2. 通过使用 name 属性 - 创建文档内的书签

延伸阅读：[什么是超文本？](https://www.w3school.com.cn/tags/tag_term_hypertext.asp "什么是超文本？")

* * *

### HTML 链接语法

链接的 HTML 代码很简单。它类似这样：

``` <a href="url">Link text</a> ``` 

href 属性规定链接的目标。

开始标签和结束标签之间的文字被作为超级链接来显示。

#### 实例

``` <a href="http://www.w3school.com.cn/">Visit W3School</a> ``` 

上面这行代码显示为：[Visit W3School](http://www.w3school.com.cn/ "Visit W3School")

点击这个超链接会把用户带到 W3School 的首页。

提示："链接文本" 不必一定是文本。图片或其他 HTML 元素都可以成为链接。

* * *

### HTML 链接 - target 属性

使用 Target 属性，你可以定义被链接的文档在何处显示。

下面的这行会在新窗口打开文档：

``` <a href="http://www.w3school.com.cn/" target="_blank">Visit W3School!</a> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_link_target "亲自试一试")

* * *

### HTML 链接 - name 属性

name 属性规定锚（anchor）的名称。

您可以使用 name 属性创建 HTML 页面中的书签。

书签不会以任何特殊方式显示，它对读者是不可见的。

当使用命名锚（named anchors）时，我们可以创建直接跳至该命名锚（比如页面中某个小节）的链接，这样使用者就无需不停地滚动页面来寻找他们需要的信息了。

#### 命名锚的语法：

``` <a name="label">锚（显示在页面上的文本）</a> ``` 

提示：锚的名称可以是任何你喜欢的名字。

提示：您可以使用 id 属性来替代 name 属性，命名锚同样有效。

#### 实例

首先，我们在 HTML 文档中对锚进行命名（创建一个书签）：

``` <a name="tips">基本的注意事项 - 有用的提示</a> ``` 

然后，我们在同一个文档中创建指向该锚的链接：

``` <a href="#tips">有用的提示</a> ``` 

您也可以在其他页面中创建指向该锚的链接：

``` <a href="http://www.w3school.com.cn/html/html_links.asp#tips">有用的提示</a> ``` 

在上面的代码中，我们将 # 符号和锚名称添加到 URL 的末端，就可以直接链接到 tips 这个命名锚了。

具体效果：[有用的提示](https://www.w3school.com.cn/html/html_links.asp#tips "有用的提示")

* * *

### 基本的注意事项-有用的提示：

注释：请始终将正斜杠添加到子文件夹。假如这样书写链接：href="http://www.w3school.com.cn/html"，就会向服务器产生两次 HTTP 请求。这是因为服务器会添加正斜杠到这个地址，然后创建一个新的请求，就像这样：href="http://www.w3school.com.cn/html/"。

提示：命名锚经常用于在大型文档开始位置上创建目录。可以为每个章节赋予一个命名锚，然后把链接到这些锚的链接放到文档的上部。如果您经常访问百度百科，您会发现其中几乎每个词条都采用这样的导航方式。

提示：假如浏览器找不到已定义的命名锚，那么就会定位到文档的顶端。不会有错误发生。

* * *

### 更多实例

[在新的浏览器窗口打开链接](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_link_target "在新的浏览器窗口打开链接")

本例演示如何在新窗口打开一个页面，这样的话访问者就无需离开你的站点了。

[链接到同一个页面的不同位置](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_link_locations "链接到同一个页面的不同位置")

本例演示如何使用链接跳转至文档的另一个部分

[跳出框架](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_frame_getfree "跳出框架")

本例演示如何跳出框架，假如你的页面被固定在框架之内。

[创建电子邮件链接](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_mailto "创建电子邮件链接")

本例演示如何链接到一个邮件。（本例在安装邮件客户端程序后才能工作。）

[创建电子邮件链接 2](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_mailto2 "创建电子邮件链接 2")

本例演示更加复杂的邮件链接。

* * *

### HTML 链接标签

标签| 描述  
---|---  
[<a>](https://www.w3school.com.cn/tags/tag_a.asp "<a>")| 定义锚。  
  
* * *

### 一个完整的实例

``` <!DOCTYPE HTML> <html lang="zh-CN"> <head> <meta charset="UTF-8"> <title>Link</title> </head> <body> <p> <a href="./6_HTML_Style.html">本文本</a> 是一个指向本网站中的一个页面的链接。</p> <p><a href="http://www.microsoft.com/">本文本</a> 是一个指向万维网上的页面的链接。</p> <p> 您也可以使用图像来作链接： <a href="./6_HTML_Style.html"> <img border="0" src="./eg_buttonnext.gif" /> </a> </p> <a href="http://www.w3school.com.cn/">Visit W3School</a> <p>下面这个链接将会在新窗口打开</p> <a href="http://www.w3school.com.cn/" target="_blank">Visit W3School!</a> <p>被锁在框架中了吗？</p> <a href="./9_HTML_CSS.html" target="_top">请点击这里！</a> <p> 这是邮件链接： <a href="mailto:2621104213@qq.com?subject=Hello%20again">发送邮件</a> </p> <p> <b>注意：</b>应该使用 %20 来替换单词之间的空格，这样浏览器就可以正确地显示文本了。 </p> <p> <a href="#C4">查看 Chapter 4。</a> </p> <p> <a href="#Chap8">查看 Chapter 8呦。</a> </p> <h2>Chapter 1</h2> <p>This chapter explains ba bla bla</p> <h2>Chapter 2</h2> <p>This chapter explains ba bla bla</p> <h2>Chapter 3</h2> <p>This chapter explains ba bla bla</p> <h2><a name="C4">Chapter 4</a></h2> <p>This chapter explains ba bla bla</p> <h2>Chapter 5</h2> <p>This chapter explains ba bla bla</p> <h2>Chapter 6</h2> <p>This chapter explains ba bla bla</p> <h2>Chapter 7</h2> <p>This chapter explains ba bla bla</p> <h2><a name="Chap8">Chapter 8</a></h2> <p>This chapter explains ba bla bla</p> <h2>Chapter 9</h2> <p>This chapter explains ba bla bla</p> <h2>Chapter 10</h2> <p>This chapter explains ba bla bla</p> <h2>Chapter 11</h2> <p>This chapter explains ba bla bla</p> <h2>Chapter 12</h2> <p>This chapter explains ba bla bla</p> <h2>Chapter 13</h2> <p>This chapter explains ba bla bla</p> <h2>Chapter 14</h2> <p>This chapter explains ba bla bla</p> <h2>Chapter 15</h2> <p>This chapter explains ba bla bla</p> <h2>Chapter 16</h2> <p>This chapter explains ba bla bla</p> <h2>Chapter 17</h2> <p>This chapter explains ba bla bla</p> </body> </html> ``` 
