---
title: "CSS响应式设计——（视口/网格视图/媒体查询/图像/视频）看这一篇就够了"
date: 2023-02-02
updated: 2023-02-02
categories:
  - CSS入门、进阶与实战
tags:
  - css
  - 前端
  - 网格视图
  - 视口
  - 媒体查询
csdn_views: 1628
csdn_likes: 3
csdn_comments: 1
csdn_favorites: 11
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128854018
cover: /images/posts/CSS响应式设计——（视口网格视图媒体查询图像视频）看这一篇/94d02e902a70.png
lang_pair:
  en: "CSS Responsive Design - Complete Guide (Viewport, Grid View, Media Queries, Images, Videos)"
---

> 本文迁移自CSDN博客
> 原文链接：[CSS响应式设计——（视口/网格视图/媒体查询/图像/视频）看这一篇就够了](https://blog.csdn.net/m0_59180666/article/details/128854018)
> 📊 1628 阅读 | 👍 3 点赞 | 💬 1 评论 | ⭐ 11 收藏

**目录**

响应式网页设计 - 简介

什么是响应式网页设计？

为所有用户获得最佳体验的设计

响应式网页设计 - 视口

什么是视口？

设置视口

把内容调整到视口的大小

响应式网页设计 - 网格视图

什么是网格视图？

构建响应式网格视图

实例

CSS:

CSS:

HTML:

CSS:

实例

响应式网页设计 - 媒体查询

什么是媒体查询？

实例

添加断点

实例

始终移动优先设计

实例

另一个断点

实例

HTML 实例

典型的设备断点

实例

方向：人像 / 风景

实例

用媒体查询隐藏元素

实例

用媒体查询修改字体

实例

CSS @media 参考手册

响应式网页设计 - 图像

使用 width 属性

实例

使用 max-width 属性

实例

向实例网页添加图像

实例

背景图像

实例

实例

实例

为不同设备准备不同图像

实例

实例

HTML5 元素

浏览器支持

实例

响应式网页设计 - 视频

使用 width 属性

实例

使用 max-width 属性

实例

在实例网页中添加视频

实例

* * *

## 响应式网页设计 - 简介

* * *

### 什么是响应式网页设计？

响应式 web 设计会让我们的网页在所有设备上运行良好。

响应式 web 设计仅使用 HTML 和 CSS。

响应式 web 设计并不是程序或 JavaScript。

* * *

### 为所有用户获得最佳体验的设计

可以使用许多不同的设备来查看网页：台式机、平板电脑和手机。无论使用哪种设备，我们的网页都应该看起来美观且易用。

网页不应舍弃信息来适合较小的设备，而应使其内容适合任何设备：

![](/images/posts/CSS响应式设计——（视口网格视图媒体查询图像视频）看这一篇/94d02e902a70.png)

桌面电脑

![](/images/posts/CSS响应式设计——（视口网格视图媒体查询图像视频）看这一篇/7d9c466ee6f7.png)

平板电脑

![](/images/posts/CSS响应式设计——（视口网格视图媒体查询图像视频）看这一篇/55b15534718e.png)

手机

如果我们使用 CSS 和 HTML 调整大小、隐藏、缩小、放大或移动内容，以使其在任何屏幕上看起来都很好，则称为响应式 Web 设计。

如果不理解下面的例子，不要担心，我们将在后面一步一步地分解代码：

```html <!DOCTYPE html> <html> <head> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <style> * { box-sizing: border-box; } .row::after { content: ""; clear: both; display: table; } [class*="col-"] { float: left; padding: 15px; } html { font-family: "Lucida Sans", sans-serif; } .header { background-color: #9933cc; color: #ffffff; padding: 15px; } .menu ul { list-style-type: none; margin: 0; padding: 0; } .menu li { padding: 8px; margin-bottom: 7px; background-color: #33b5e5; color: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); } .menu li:hover { background-color: #0099cc; } .aside { background-color: #33b5e5; padding: 15px; color: #ffffff; text-align: center; font-size: 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); } .footer { background-color: #0099cc; color: #ffffff; text-align: center; font-size: 12px; padding: 15px; } /* For mobile phones: */ [class*="col-"] { width: 100%; } @media only screen and (min-width: 600px) { /* 针对平板电脑： */ .col-s-1 {width: 8.33%;} .col-s-2 {width: 16.66%;} .col-s-3 {width: 25%;} .col-s-4 {width: 33.33%;} .col-s-5 {width: 41.66%;} .col-s-6 {width: 50%;} .col-s-7 {width: 58.33%;} .col-s-8 {width: 66.66%;} .col-s-9 {width: 75%;} .col-s-10 {width: 83.33%;} .col-s-11 {width: 91.66%;} .col-s-12 {width: 100%;} } @media only screen and (min-width: 768px) { /* 针对桌面： */ .col-1 {width: 8.33%;} .col-2 {width: 16.66%;} .col-3 {width: 25%;} .col-4 {width: 33.33%;} .col-5 {width: 41.66%;} .col-6 {width: 50%;} .col-7 {width: 58.33%;} .col-8 {width: 66.66%;} .col-9 {width: 75%;} .col-10 {width: 83.33%;} .col-11 {width: 91.66%;} .col-12 {width: 100%;} } </style> </head> <body> <div class="header"> <h1>Shanghai</h1> </div> <div class="row"> <div class="col-3 col-s-3 menu"> <ul> <li>交通</li> <li>文化</li> <li>旅游</li> <li>美食</li> </ul> </div> <div class="col-6 col-s-9"> <h1>欢迎来到上海</h1> <p>上海市，简称沪，别称申，是中华人民共和国直辖市，中国的经济、金融、贸易和航运中心，世界著名的港口城市，是中国人口第二多的城市。</p> </div> <div class="col-3 col-s-12"> <div class="aside"> <h2>历史</h2> <p>最晚在新石器时代，上海地区已经有先民聚居。春秋时代，上海由吴国管辖，战国时代则是楚国领土 ...</p> <h2>位置</h2> <p>上海位于中国东部弧形海岸线的正中间，长江三角洲最东部，东临东海，南濒杭州湾，西与江苏、浙江两省相接 ...</p> <h2>环境</h2> <p>上海地处江南水乡，并位于长江入海口，亦不处于主要地震带上，因此如地震、洪水以及地质类灾害鲜有发生 ...</p> </div> </div> </div> <div class="footer"> <p>调整浏览器窗口的大小，以查看内容如何响应调整大小。</p> </div> </body> </html> ``` 

运行效果： 

![](/images/posts/CSS响应式设计——（视口网格视图媒体查询图像视频）看这一篇/f7eba4d10c13.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=responsive_col-s "亲自试一试")

* * *

## 响应式网页设计 - 视口

* * *

### 什么是视口？

视口（viewport）是用户在网页上的可见区域。

视口随设备而异，在移动电话上会比在计算机屏幕上更小。

在平板电脑和手机之前，网页仅设计为用于计算机屏幕，并且网页拥有静态设计和固定大小是很常见的。

然后，当我们开始使用平板电脑和手机上网时，固定大小的网页太大了，无法适应视口。为了解决这个问题，这些设备上的浏览器会按比例缩小整个网页以适合屏幕大小。

这并不是完美的！勉强是一种快速的修正。

* * *

### 设置视口

HTML5 引入了一种方法，使 Web 设计者可以通过 `<meta>` 标签来控制视口。

应该在所有网页中包含以下 `<meta>` 视口元素：

```html <meta name="viewport" content="width=device-width, initial-scale=1.0"> ``` 

它为浏览器提供了关于如何控制页面尺寸和缩放比例的指令。

`width=device-width` 部分将页面的宽度设置为跟随设备的屏幕宽度（视设备而定）。

当浏览器首次加载页面时，`initial-scale=1.0` 部分设置初始缩放级别。

* * *

### 把内容调整到视口的大小

用户习惯在台式机和移动设备上垂直滚动网站，而不是水平滚动！

因此，如果迫使用户水平滚动或缩小以查看整个网页，则会导致不佳的用户体验。

还需要遵循的一些附加规则：

_1\. 请勿使用较大的固定宽度元素_ \- 例如，如果图像的宽度大于视口的宽度，则可能导致视口水平滚动。务必调整此内容以适合视口的宽度。

_2\. 不要让内容依赖于特定的视口宽度来呈现好的效果_ \- 由于以 CSS 像素计的屏幕尺寸和宽度在设备之间变化很大，因此内容不应依赖于特定的视口宽度来呈现良好的效果。

_3\. 使用 CSS 媒体查询为小屏幕和大屏幕应用不同的样式_ \- 为页面元素设置较大的 CSS 绝对宽度将导致该元素对于较小设备上的视口太宽。而是应该考虑使用相对宽度值，例如 width: 100%。另外，要小心使用较大的绝对定位值，这可能会导致元素滑落到小型设备的视口之外。

* * *

## 响应式网页设计 - 网格视图

* * *

### 什么是网格视图？

许多网页都基于网格视图（grid-view），这意味着页面被分割为几列：

![](/images/posts/CSS响应式设计——（视口网格视图媒体查询图像视频）看这一篇/2d4f7ac1e90d.png)

在设计网页时，使用网格视图非常有帮助。这样可以更轻松地在页面上放置元素。

![](/images/posts/CSS响应式设计——（视口网格视图媒体查询图像视频）看这一篇/cf552cacf0e2.png)

响应式网格视图通常有 12 列，总宽度为 100％，并且在调整浏览器窗口大小时会收缩和伸展。

* * *

### 构建响应式网格视图

让我们开始构建响应式网格视图。

首先，确保所有 HTML 元素的 `box-sizing` 属性设置为 `border-box`。这样可以确保元素的总宽度和高度中包括内边距（填充）和边框。

在 CSS 中添加如下代码：

```css * { box-sizing: border-box; } ``` 

可以在 [CSS Box Sizing](https://www.w3school.com.cn/css/css3_box-sizing.asp "CSS Box Sizing") 一章中阅读有关 box-sizing 属性的更多内容。

下面的例子展示了一张简单的响应式网页，其中包含两列：

![](/images/posts/CSS响应式设计——（视口网格视图媒体查询图像视频）看这一篇/0e6f2a8ec8b5.png)

#### 实例

```css .menu { width: 25%; float: left; } .main { width: 75%; float: left; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=responsive_webpage "亲自试一试")

若网页只包含两列，则上面的例子还不错。

但是，我们希望使用拥有 12 列的响应式网格视图，来更好地控制网页。

首先，我们必须计算一列的百分比：100% / 12 列 = 8.33%。

然后，我们为 12 列中的每一列创建一个类，即 `class="col-"` 和一个数字，该数字定义此节应跨越的列数：

#### CSS:

```css .col-1 {width: 8.33%;} .col-2 {width: 16.66%;} .col-3 {width: 25%;} .col-4 {width: 33.33%;} .col-5 {width: 41.66%;} .col-6 {width: 50%;} .col-7 {width: 58.33%;} .col-8 {width: 66.66%;} .col-9 {width: 75%;} .col-10 {width: 83.33%;} .col-11 {width: 91.66%;} .col-12 {width: 100%;} ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=responsive_cols "亲自试一试")

所有这些列应向左浮动，并带有 15px 的内边距：

#### CSS:

```css [class*="col-"] { float: left; padding: 15px; border: 1px solid red; } ``` 

每行都应被包围在 `<div>` 中。行内的列数总应总计为 12：

#### HTML:

```html <div class="row"> <div class="col-3">...</div> <!-- 25% --> <div class="col-9">...</div> <!-- 75% --> </div> ``` 

行内的所有列全部都向左浮动，因此会从页面流中移出，并将放置其他元素，就好像这些列不存在一样。为了防止这种情况，我们会添加清除流的样式：

#### CSS:

```css .row::after { content: ""; clear: both; display: table; } ``` 

我们还想添加一些样式和颜色，使其看起来更美观：

#### 实例

```css html { font-family: "Lucida Sans", sans-serif; } .header { background-color: #9933cc; color: #ffffff; padding: 15px; } .menu ul { list-style-type: none; margin: 0; padding: 0; } .menu li { padding: 8px; margin-bottom: 7px; background-color :#33b5e5; color: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); } .menu li:hover { background-color: #0099cc; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=responsive_stylesresponsive_styles "亲自试一试")

注意，当我们将浏览器窗口调整为非常小的宽度时，例中的网页看起来并不理想。下面我们将学习如何解决这个问题。

* * *

## 响应式网页设计 - 媒体查询

* * *

### 什么是媒体查询？

媒体查询是 CSS3 中引入的一种 CSS 技术。

仅在满足特定条件时，它才会使用 `@media` 规则来引用 CSS 属性块。

#### 实例

如果浏览器窗口是 600px 或更小，则背景颜色为浅蓝色：

```css @media only screen and (max-width: 600px) { body { background-color: lightblue; } } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=responsive_mediaquery "亲自试一试")

* * *

### 添加断点

在本教程中稍早前，我们制作了一张包含行和列的网页，但是这张响应式网页在小屏幕上看起来效果并不好。

媒体查询可以帮助我们。我们可以添加一个断点，其中设计的某些部分在断点的每一侧会表现得有所不同。

![](/images/posts/CSS响应式设计——（视口网格视图媒体查询图像视频）看这一篇/5ff617fa8e29.png)

  
桌面电脑

![](/images/posts/CSS响应式设计——（视口网格视图媒体查询图像视频）看这一篇/74f439332f4c.png)

  
手机

使用媒体查询在 768px 处添加断点：

#### 实例

当屏幕（浏览器窗口）小于 768px 时，每列的宽度应为 100％：

```css /* 针对桌面设备： */ .col-1 {width: 8.33%;} .col-2 {width: 16.66%;} .col-3 {width: 25%;} .col-4 {width: 33.33%;} .col-5 {width: 41.66%;} .col-6 {width: 50%;} .col-7 {width: 58.33%;} .col-8 {width: 66.66%;} .col-9 {width: 75%;} .col-10 {width: 83.33%;} .col-11 {width: 91.66%;} .col-12 {width: 100%;} @media only screen and (max-width: 768px) { /* 针对手机： */ [class*="col-"] { width: 100%; } } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=responsive_breakpoints "亲自试一试")

* * *

### 始终移动优先设计

移动优先（Mobile First）指的是在对台式机或任何其他设备进行设计之前，优先针对移动设备进行设计（这将使页面在较小的设备上显示得更快）。

这意味着我们必须在 CSS 中做一些改进。

当宽度小于 768px 时，我们应该修改设计，而不是更改宽度。我们就这样进行了“移动优先”的设计：

#### 实例

```css /* 针对手机： */ [class*="col-"] { width: 100%; } @media only screen and (min-width: 768px) { /* 针对桌面： */ .col-1 {width: 8.33%;} .col-2 {width: 16.66%;} .col-3 {width: 25%;} .col-4 {width: 33.33%;} .col-5 {width: 41.66%;} .col-6 {width: 50%;} .col-7 {width: 58.33%;} .col-8 {width: 66.66%;} .col-9 {width: 75%;} .col-10 {width: 83.33%;} .col-11 {width: 91.66%;} .col-12 {width: 100%;} } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=responsive_mobilefirst "亲自试一试")

* * *

### 另一个断点

可以添加任意多个断点。

我们还会在平板电脑和手机之间插入一个断点。

![](/images/posts/CSS响应式设计——（视口网格视图媒体查询图像视频）看这一篇/285211cdd002.png)

  
桌面电脑

![](/images/posts/CSS响应式设计——（视口网格视图媒体查询图像视频）看这一篇/52578da4f720.png)

  
平板电脑

![](/images/posts/CSS响应式设计——（视口网格视图媒体查询图像视频）看这一篇/98bf334065f7.png)

  
手机

为此，我们添加了一个媒体查询（在 600 像素），并为大于 600 像素（但小于 768 像素）的设备添加了一组新类：

#### 实例

注意，两组类几乎相同，唯一的区别是名称（col- 和 col-s-）：

```css /* 针对手机： */ [class*="col-"] { width: 100%; } @media only screen and (min-width: 600px) { /* 针对平板电脑： */ .col-s-1 {width: 8.33%;} .col-s-2 {width: 16.66%;} .col-s-3 {width: 25%;} .col-s-4 {width: 33.33%;} .col-s-5 {width: 41.66%;} .col-s-6 {width: 50%;} .col-s-7 {width: 58.33%;} .col-s-8 {width: 66.66%;} .col-s-9 {width: 75%;} .col-s-10 {width: 83.33%;} .col-s-11 {width: 91.66%;} .col-s-12 {width: 100%;} } @media only screen and (min-width: 768px) { /* 针对桌面： */ .col-1 {width: 8.33%;} .col-2 {width: 16.66%;} .col-3 {width: 25%;} .col-4 {width: 33.33%;} .col-5 {width: 41.66%;} .col-6 {width: 50%;} .col-7 {width: 58.33%;} .col-8 {width: 66.66%;} .col-9 {width: 75%;} .col-10 {width: 83.33%;} .col-11 {width: 91.66%;} .col-12 {width: 100%;} } ``` 

有两组相同的类似乎很奇怪，但是它给了我们机会用 HTML 来决定在每个断点处的列会发生什么：

#### HTML 实例

对于台式机：

第一和第三部分都会跨越 3 列。中间部分将跨越 6 列。

对于平板电脑：

第一部分将跨越 3 列，第二部分将跨越 9 列，第三部分将显示在前两部分的下方，并将跨越 12 列：

```html <div class="row"> <div class="col-3 col-s-3">...</div> <div class="col-6 col-s-9">...</div> <div class="col-3 col-s-12">...</div> </div> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=responsive_col-s "亲自试一试")

* * *

### 典型的设备断点

高度和宽度不同的屏幕和设备不计其数，因此很难为每个设备创建精确的断点。为了简单起见，可以瞄准这五组：

#### 实例

```css /* 超小型设备（电话，600px 及以下） */ @media only screen and (max-width: 600px) {...} /* 小型设备（纵向平板电脑和大型手机，600 像素及以上） */ @media only screen and (min-width: 600px) {...} /* 中型设备（横向平板电脑，768 像素及以上） */ @media only screen and (min-width: 768px) {...} /* 大型设备（笔记本电脑/台式机，992px 及以上） */ @media only screen and (min-width: 992px) {...} /* 超大型设备（大型笔记本电脑和台式机，1200px 及以上） */ @media only screen and (min-width: 1200px) {...} ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=responsive_mediaquery_breakpoints "亲自试一试")

* * *

### 方向：人像 / 风景

媒体查询还可用于根据浏览器的方向来更改页面的布局。

可以设置一组 CSS 属性，这些属性仅在浏览器窗口的宽度大于其高度时才适用，即所谓的“横屏”方向：

#### 实例

如果方向为横向模式（landscape mode），则网页背景为浅蓝色：

```css @media only screen and (orientation: landscape) { body { background-color: lightblue; } } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=responsive_mediaquery_orientation "亲自试一试")

* * *

### 用媒体查询隐藏元素

媒体查询的另一种常见用法是在不同屏幕尺寸上对元素进行隐藏：

#### 实例

```css /* 如果屏幕尺寸为 600 像素或更小，请隐藏该元素 */ @media only screen and (max-width: 600px) { div.example { display: none; } } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_mediaqueries_hide "亲自试一试")

* * *

### 用媒体查询修改字体

还可以使用媒体查询来更改不同屏幕尺寸上的元素的字体大小：

#### 实例

```css /* 如果屏幕尺寸为 601px 或更大，请将 <div> 的 font-size 设置为 80px */ @media only screen and (min-width: 601px) { div.example { font-size: 80px; } } /* 如果屏幕尺寸为 600px 或更小，请将 <div> 的 font-size 设置为 30px */ @media only screen and (max-width: 600px) { div.example { font-size: 30px; } } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_mediaqueries_fontsize "亲自试一试")

* * *

### CSS @media 参考手册

有关所有媒体类型和特性/表达式的完整概述，在 [CSS 参考手册中参阅 @media 规则](https://www.w3school.com.cn/cssref/pr_mediaquery.asp "CSS 参考手册中参阅 @media 规则")。

* * *

## 响应式网页设计 - 图像

* * *

### 使用 width 属性

如果 `width` 属性设置为百分比，且高度设置为 "auto"，则图像将进行响应来放大或缩小：

#### 实例

```css img { width: 100%; height: auto; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=responsive_image_1 "亲自试一试")

注意，在上面的例子中，图像可以放大到大于其原始大小。在多数情况下，更好的解决方案是改为使用 `max-width` 属性。

* * *

### 使用 max-width 属性

如果将 max-width 属性设置为 100％，则图像将按需缩小，但绝不会放大到大于其原始大小：

#### 实例

```css img { max-width: 100%; height: auto; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=responsive_image_2 "亲自试一试")

* * *

### 向实例网页添加图像

#### 实例

```css img { width: 100%; height: auto; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=responsive_image_3 "亲自试一试")

* * *

### 背景图像

背景图像也可以响应调整大小和缩放比例。

这是我们展示的三种不同方法：

1\. 如果将 `background-size` 属性设置为 "contain"，则背景图像将缩放，并尝试匹配内容区域。不过图像将保持其长宽比（图像宽度与高度之间的比例关系）：

![](/images/posts/CSS响应式设计——（视口网格视图媒体查询图像视频）看这一篇/3ad59b9a8d8b.png)

这是 CSS 代码：

#### 实例

```css div { width: 100%; height: 400px; background-image: url('img_flowers.jpg'); background-repeat: no-repeat; background-size: contain; border: 1px solid red; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=responsive_image_background_1 "亲自试一试")

2\. 如果将 `background-size` 属性设置为 "100% 100%"，则背景图像将拉伸以覆盖整个内容区域：

![](/images/posts/CSS响应式设计——（视口网格视图媒体查询图像视频）看这一篇/e709734b02cd.png)

这是 CSS 代码：

#### 实例

```css div { width: 100%; height: 400px; background-image: url('img_flowers.jpg'); background-size: 100% 100%; border: 1px solid red; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=responsive_image_background_2 "亲自试一试")

3\. 如果 `background-size` 属性设置为 "cover"，则背景图像将缩放以覆盖整个内容区域。注意，"cover" 值保持长宽比，且可能会裁剪背景图像的某部分：

![](/images/posts/CSS响应式设计——（视口网格视图媒体查询图像视频）看这一篇/39cd742e1930.png)

这是 CSS 代码：

#### 实例

```css div { width: 100%; height: 400px; background-image: url('img_flowers.jpg'); background-size: cover; border: 1px solid red; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=responsive_image_background_3 "亲自试一试")

* * *

### 为不同设备准备不同图像

大幅的图像在大型计算机屏幕上可以完美显示，但在小型设备上就没用了。为什么在不得不缩小图像时又加载大图像呢？为了减少负载或出于任何其他原因，可以使用媒体查询在不同的设备上显示不同的图像。

大图像和一小图像，会在不同的设备上显示：

#### 实例

```css /* 针对小于 400 像素的宽度： */ body { background-image: url('img_smallflower.jpg'); } /* 针对 400 像素或更大的宽度： */ @media only screen and (min-width: 400px) { body { background-image: url('img_flowers.jpg'); } } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=responsive_image_mq_1 "亲自试一试")

可以使用媒体查询 `min-device-width` 而不是 `min-width` 来检查设备宽度，而不是浏览器宽度。然后，当我们调整浏览器窗口的大小时，图像将不会变化：

#### 实例

```css /* 针对小于 400 像素的设备： */ body { background-image: url('img_smallflower.jpg'); } /* 针对 400 像素及更大的设备： */ @media only screen and (min-device-width: 400px) { body { background-image: url('img_flowers.jpg'); } } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=responsive_image_mq_2 "亲自试一试")

* * *

### HTML5 <picture> 元素

HTML5 引入了 `<picture>` 元素，该元素使可以定义多幅图像。

#### 浏览器支持

![](/images/posts/CSS响应式设计——（视口网格视图媒体查询图像视频）看这一篇/5eb5d01758a9.png)

`<picture>` 元素的作用类似于 `<video>` 和 `<audio>` 元素。我们设置了不同的来源，而匹配优先权的第一个来源是正在使用的来源：

#### 实例

```html <picture> <source srcset="img_smallflower.jpg" media="(max-width: 400px)"> <source srcset="img_flowers.jpg"> <img src="img_flowers.jpg" alt="Flowers"> </picture> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=responsive_image_picture "亲自试一试")

`srcset` 属性是必需的，它定义图像的来源。

`media` 属性是可选的，它接受可在 [CSS @media 规则](https://www.w3school.com.cn/cssref/pr_mediaquery.asp "CSS @media 规则") 中找到的媒体查询。

提示：还应该为不支持 `<picture>` 元素的浏览器定义 `<img>` 元素。

* * *

## 响应式网页设计 - 视频

* * *

### 使用 width 属性

如果 `width` 属性设置为100％，则视频播放器将响应并放大和缩小：

#### 实例

```css video { width: 100%; height: auto; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=responsive_video_1 "亲自试一试")

注意，在上面的例子中，视频播放器可以放大到大于其原始尺寸。在许多情况下，更好的解决方案是改用 max-width 属性。

* * *

### 使用 max-width 属性

如果将 `max-width` 属性设置为 100％，则视频播放器将按比例缩小，但绝不会放大到大于其原始尺寸：

#### 实例

```css video { max-width: 100%; height: auto; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=responsive_video_2 "亲自试一试")

* * *

### 在实例网页中添加视频

我们希望在实例网页中添加视频。视频将被调整大小以便始终占据所有可用空间：

#### 实例

```css video { width: 100%; height: auto; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=responsive_video_3 "亲自试一试")
