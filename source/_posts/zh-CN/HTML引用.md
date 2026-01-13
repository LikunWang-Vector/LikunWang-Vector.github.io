---
title: "HTML引用"
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
csdn_views: 709
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 3
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128434162
lang_pair:
  en: "HTML Quotations"
---

> 本文迁移自CSDN博客
> 原文链接：[HTML引用](https://blog.csdn.net/m0_59180666/article/details/128434162)
> 📊 709 阅读 | 👍 1 点赞 | 💬 1 评论 | ⭐ 3 收藏

**目录**

> 引用（Quotation）
> 
> HTML 用于短的引用
> 
> 实例
> 
> 用于长引用的 HTML
> 
> 实例
> 
> 用于缩略词的 HTML 
> 
> 实例
> 
> 用于定义的 HTML 
> 
> 实例
> 
> 实例
> 
> 实例
> 
> 用于联系信息的 HTML 
> 
> 实例
> 
> 用于著作标题的 HTML 
> 
> 实例
> 
> 用于双向重写的 HTML 
> 
> 实例
> 
> HTML 引文、引用和定义元素
> 
> **一个完整的实例**

* * *

### 引用（Quotation）

这是摘自 WWF 网站的引文：

> 五十年来，WWF 一直致力于保护自然界的未来。 世界领先的环保组织，WWF 工作于 100 个国家，并得到美国一百二十万会员及全球近五百万会员的支持。 

* * *

### HTML <q> 用于短的引用

HTML  _< q>_ 元素定义 _短的引用_ 。

浏览器通常会为 <q> 元素包围 _引号_ 。

#### 实例

``` <p>WWF 的目标是：<q>构建人与自然和谐共存的世界。</q></p> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_quotation_q "亲自试一试")

* * *

### 用于长引用的 HTML <blockquote>

HTML  _< blockquote>_ 元素定义被引用的节。

浏览器通常会对 <blockquote> 元素进行 _缩进_ 处理。

#### 实例

``` <p>以下内容引用自 WWF 的网站：</p> <blockquote cite="http://www.worldwildlife.org/who/index.html"> 五十年来，WWF 一直致力于保护自然界的未来。 世界领先的环保组织，WWF 工作于 100 个国家， 并得到美国一百二十万会员及全球近五百万会员的支持。 </blockquote> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_quotation_blockquote "亲自试一试")

* * *

### 用于缩略词的 HTML <abbr>

HTML  _< abbr>_ 元素定义 _缩写_ 或首字母缩略语。

对缩写进行标记能够为浏览器、翻译系统以及搜索引擎提供有用的信息。

#### 实例

``` <p><abbr title="World Health Organization">WHO</abbr> 成立于 1948 年。</p> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_formatting_abbr "亲自试一试")

* * *

### 用于定义的 HTML <dfn>

HTML  _< dfn>_ 元素定义项目或缩写的 _定义_ 。

<dfn> 的用法，按照 HTML5 标准中的描述，有点复杂：

1\. 如果设置了 <dfn> 元素的 title 属性，则定义项目：

#### 实例

``` <p><dfn title="World Health Organization">WHO</dfn> 成立于 1948 年。</p> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_formatting_dfn "亲自试一试")

2\. 如果 <dfn> 元素包含具有标题的 <abbr> 元素，则 title 定义项目：

#### 实例

``` <p><dfn><abbr title="World Health Organization">WHO</abbr></dfn> 成立于 1948 年。</p> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_formatting_dfn_2 "亲自试一试")

3\. 否则，<dfn> 文本内容即是项目，并且父元素包含定义。

#### 实例

``` <p><dfn>WHO</dfn> World Health Organization 成立于 1948 年。</p> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_formatting_dfn_3 "亲自试一试")

注释：如果希望简而化之，请使用第一条，或使用 <abbr> 代替。

* * *

### 用于联系信息的 HTML <address>

HTML  _< address>_ 元素定义文档或文章的联系信息（作者/拥有者）。

此元素通常以 _斜体_ 显示。大多数浏览器会在此元素前后添加折行。

#### 实例

``` <address> Written by Donald Duck.<br> Visit us at:<br> Example.com<br> Box 564, Disneyland<br> USA </address> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_formatting_address "亲自试一试")

* * *

### 用于著作标题的 HTML <cite>

HTML  _< cite>_ 元素定义 _著作的标题_ 。

浏览器通常会以斜体显示 <cite> 元素。

#### 实例

``` <p><cite>The Scream</cite> by Edward Munch. Painted in 1893.</p> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_formatting_cite "亲自试一试")

* * *

### 用于双向重写的 HTML <bdo>

HTML  _< bdo>_ 元素定义双流向覆盖（bi-directional override）。

<bdo> 元素用于覆盖当前文本方向：

#### 实例

``` <bdo dir="rtl">This text will be written from right to left</bdo> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_formatting_bdo "亲自试一试")

* * *

### HTML 引文、引用和定义元素

标签| 描述  
---|---  
<abbr>| 定义缩写或首字母缩略语。  
<address>| 定义文档作者或拥有者的联系信息。  
<bdo>| 定义文本方向。  
<blockquote>| 定义从其他来源引用的节。  
<dfn>| 定义项目或缩略词的定义。  
<q>| 定义短的行内引用。  
<cite>| 定义著作的标题。  
  
* * *

### 一个完整的实例

``` <!DOCTYPE HTML> <html lang="zh-CN"> <head> <meta charset="UTF-8"> <title>Quotation</title> </head> <body> <!--HTML <q> 元素定义短的引用。 浏览器通常会为 <q> 元素包围引号--> <p>WWF 的目标是：<q>构建人与自然和谐共存的世界。</q></p> <!--HTML <blockquote> 元素定义被引用的节。 浏览器通常会对 <blockquote> 元素进行缩进处理。--> <p>以下内容引用自 WWF 的网站：</p> <blockquote cite="http://www.worldwildlife.org/who/index.html"> 五十年来，WWF 一直致力于保护自然界的未来。 世界领先的环保组织，WWF 工作于 100 个国家， 并得到美国一百二十万会员及全球近五百万会员的支持。 </blockquote> <!--HTML <abbr> 元素定义缩写或首字母缩略语。 对缩写进行标记能够为浏览器、翻译系统以及搜索引擎提供有用的信息。--> <p><abbr title="World Health Organization">WHO</abbr> 成立于 1948 年。</p> <!--HTML <dfn> 元素定义项目或缩写的定义。 <dfn> 的用法，按照 HTML5 标准中的描述，有点复杂： 1\. 如果设置了 <dfn> 元素的 title 属性，则定义项目：--> <p><dfn title="World Health Organization">WHO</dfn> 成立于 1948 年。</p> <!--2. 如果 <dfn> 元素包含具有标题的 <abbr> 元素，则 title 定义项目：--> <p><dfn><abbr title="World Health Organization">WHO</abbr></dfn> 成立于 1948 年。</p> <!--3. 否则，<dfn> 文本内容即是项目，并且父元素包含定义。--> <p><dfn>WHO</dfn> World Health Organization 成立于 1948 年。</p> <!--如果您希望简而化之，请使用第一条，或使用 <abbr> 代替。--> <!--HTML <address> 元素定义文档或文章的联系信息（作者/拥有者）。 此元素通常以斜体显示。大多数浏览器会在此元素前后添加折行。--> <address> Written by <a href="mailto:2621104213@qq.com">Vector Kun</a>.<br> Visit us at:<br> China.gov.cn<br> SCSE,UESTC<br> PRC </address> <!--HTML <cite> 元素定义著作的标题。 浏览器通常会以斜体显示 <cite> 元素。--> <p><cite>The Scream</cite> by Edward Munch. Painted in 1893.</p> <!--HTML <bdo> 元素定义双流向覆盖（bi-directional override）。 <bdo> 元素用于覆盖当前文本方向：--> <bdo dir="rtl">This text will be written from right to left</bdo> </body> </html> ``` 

* * *
