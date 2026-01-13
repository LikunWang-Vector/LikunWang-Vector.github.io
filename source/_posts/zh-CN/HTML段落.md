---
title: "HTML段落"
date: 2022-12-25
updated: 2022-12-25
categories:
  - HTML入门、进阶与实战
tags:
  - html
  - 前端
  - css
  - html5
  - pycharm
csdn_views: 146
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128433535
lang_pair:
  en: "HTML Paragraphs"
---

> 本文迁移自CSDN博客
> 原文链接：[HTML段落](https://blog.csdn.net/m0_59180666/article/details/128433535)
> 📊 146 阅读 | 👍 1 点赞 | 💬 1 评论 | ⭐ 2 收藏

**目录**

HTML 段落

实例

不要忘记结束标签

实例

HTML 折行

  
还是 

HTML 输出 - 有用的提示

来自本页的实例

更多实例

HTML 标签参考手册

一个完整的实例

* * *

**可以把 HTML 文档分割为若干段落。**

* * *

### HTML 段落

段落是通过 <p> 标签定义的。

#### 实例

``` <p>This is a paragraph</p> <p>This is another paragraph</p> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_paragraphs1 "亲自试一试")

注释：浏览器会自动地在段落的前后添加空行。（<p> 是块级元素）

提示：使用空的段落标记 <p></p> 去插入一个空行是个坏习惯。用 <br /> 标签代替它！（但是不要用 <br /> 标签去创建列表。不要着急，您将在稍后的篇幅学习到 HTML 列表。）

* * *

### 不要忘记结束标签

即使忘了使用结束标签，大多数浏览器也会正确地将 HTML 显示出来：

#### 实例

``` <p>This is a paragraph <p>This is another paragraph ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_paragraphs0 "亲自试一试")

上面的例子在大多数浏览器中都没问题，但不要依赖这种做法。忘记使用结束标签会产生意想不到的结果和错误。

注释：在未来的 HTML 版本中，不允许省略结束标签。

提示：通过结束标签来关闭 HTML 是一种经得起未来考验的 HTML 编写方法。清楚地标记某个元素在何处开始，并在何处结束，不论对您还是对浏览器来说，都会使代码更容易理解。

* * *

### HTML 折行

如果您希望在不产生一个新段落的情况下进行换行（新行），请使用 <br /> 标签：

``` <p>This is<br />a para<br />graph with line breaks</p> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_paragraphs "亲自试一试")

<br /> 元素是一个空的 HTML 元素。由于关闭标签没有任何意义，因此它没有结束标签。

* * *

### <br> 还是 <br />

您也许发现 <br> 与 <br /> 很相似。

在 XHTML、XML 以及未来的 HTML 版本中，不允许使用没有结束标签（闭合标签）的 HTML 元素。

即使 <br> 在所有浏览器中的显示都没有问题，使用 <br /> 也是 _更长远的保障_ 。

* * *

### HTML 输出 - 有用的提示

我们无法确定 HTML 被显示的确切效果。屏幕的大小，以及对窗口的调整都可能导致不同的结果。

对于 HTML，您无法通过在 HTML 代码中添加额外的空格或换行来改变输出的效果。

当显示页面时，浏览器会移除 _源代码中_ 多余的空格和空行。所有连续的空格或空行都会被算作一个空格。需要注意的是，HTML 代码中的所有连续的空行（换行）也被显示为一个空格。

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_poem "亲自试一试")

（这个例子演示了一些 HTML 格式化方面的问题）

* * *

### 来自本页的实例

[HTML 段落](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_paragraphs1 "HTML 段落")

如何在浏览器中显示 HTML 段落。

[换行](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_paragraphs "换行")

在 HTML 文档中使用换行。

[在 HTML 代码中的排版一首唐诗](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_poem "在 HTML 代码中的排版一首唐诗")

浏览器在显示 HTML 时，会省略源代码中多余的空白字符（空格或回车等）。

#### 更多实例

[更多段落](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_paragraphs2 "更多段落")

段落的默认行为。

* * *

### HTML 标签参考手册

W3School 的标签参考手册提供了有关 HTML 元素及其属性的更多信息。

标签| 描述  
---|---  
[<p>](https://www.w3school.com.cn/tags/tag_p.asp "<p>")| 定义段落。  
[<br />](https://www.w3school.com.cn/tags/tag_br.asp "<br />")| 插入单个折行（换行）。  
  
* * *

### 一个完整的实例

``` <!DOCTYPE HTML> <html lang="zh-CN"> <head> <meta charset="UTF-8"> <title>Paragraph</title> </head> <body> <p>This is<br />a para<br />graph with line breaks</p> <p> 春眠不觉晓， 处处闻啼鸟。 夜来风雨声， 花落知多少。 </p> <p>注意，浏览器忽略了源代码中的排版（省略了多余的空格和换行）。</p> </body> </html> ``` 
