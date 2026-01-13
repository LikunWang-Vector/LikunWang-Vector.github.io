---
title: "HTML图像"
date: 2022-12-26
updated: 2022-12-26
categories:
  - HTML入门、进阶与实战
tags:
  - html
  - 前端
  - 前端框架
  - html5
  - 开发语言
csdn_views: 230
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128440303
cover: /images/posts/HTML图像/439899749d26.jpeg
lang_pair:
  en: "HTML Images"
---

> 本文迁移自CSDN博客
> 原文链接：[HTML图像](https://blog.csdn.net/m0_59180666/article/details/128440303)
> 📊 230 阅读 | 👍 1 点赞 | 💬 1 评论 | ⭐ 2 收藏

**目录**

实例

图像标签（）和源属性（Src）

替换文本属性（Alt）

基本的注意事项 - 有用的提示：

更多实例

图像标签

一个完整的实例

本例涉及的资源

eg_background.jpg

​编辑 

eg_mouse.jpg

eg_cute.gif

eg_goleft.gif

eg_planets.jpg

venus.html

mercury.html

sun.html

eg_venus.gif

eg_mercury.gif

eg_sun.gif

文件资源分布位置（也可以在源代码的src位置自行调整） 

* * *

**通过使用 HTML，可以在文档中显示图像。**

* * *

### 实例

[插入图像](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_image "插入图像")

本例演示如何在网页中显示图像。

[从不同的位置插入图片](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_image2 "从不同的位置插入图片")

本例演示如何将其他文件夹或服务器的图片显示到网页中。

（[可以在本页底端找到更多实例](https://www.w3school.com.cn/html/html_images.asp#more_examples "可以在本页底端找到更多实例")。）

* * *

### 图像标签（<img>）和源属性（Src）

在 HTML 中，图像由 <img> 标签定义。

<img> 是空标签，意思是说，它只包含属性，并且没有闭合标签。

要在页面上显示图像，你需要使用源属性（src）。src 指 "source"。源属性的值是图像的 URL 地址。

定义图像的语法是：
    
    
    <img src="url" />

URL 指存储图像的位置。如果名为 "boat.gif" 的图像位于 www.w3school.com.cn 的 images 目录中，那么其 URL 为 http://www.w3school.com.cn/images/boat.gif。

浏览器将图像显示在文档中图像标签出现的地方。如果你将图像标签置于两个段落之间，那么浏览器会首先显示第一个段落，然后显示图片，最后显示第二段。

* * *

### 替换文本属性（Alt）

alt 属性用来为图像定义一串预备的可替换的文本。替换文本属性的值是用户定义的。
    
    
    <img src="boat.gif" alt="Big Boat">

当浏览器无法载入图像时，替换文本属性可告诉读者他们失去的信息。此时，浏览器将显示这个替代性的文本而不是图像。为页面上的图像都加上替换文本属性是个好习惯，这样有助于更好的显示信息，并且对于那些使用纯文本浏览器的人来说是非常有用的。

* * *

### 基本的注意事项 - 有用的提示：

假如某个 HTML 文件包含十个图像，那么为了正确显示这个页面，需要加载 11 个文件。加载图片是需要时间的，所以我们的建议是：慎用图片。

### 更多实例

[背景图片](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_backgroundimage "背景图片")

本例演示如何向 HTML 页面添加背景图片。

[排列图片](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_image_align "排列图片")

本例演示如何在文字中排列图像。

[浮动图像](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_image_float "浮动图像")

本例演示如何使图片浮动至段落的左边或右边。

[调整图像尺寸](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_image_size "调整图像尺寸")

本例演示如何将图片调整到不同的尺寸。

[为图片显示替换文本](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_image_alt "为图片显示替换文本")

本例演示如何为图片显示替换文本。在浏览器无法载入图像时，替换文本属性告诉读者们失去的信息。为页面上的图像都加上替换文本属性是个好习惯。

[制作图像链接](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_image_link "制作图像链接")

本例演示如何将图像作为一个链接使用。

[创建图像映射](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_areamap "创建图像映射")

本例显示如何创建带有可供点击区域的图像地图。其中的每个区域都是一个超级链接。

[把图像转换为图像映射](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_ismap "把图像转换为图像映射")

本例显示如何把一幅普通的图像设置为图像映射。

* * *

### 图像标签

标签| 描述  
---|---  
[<img>](https://www.w3school.com.cn/tags/tag_img.asp "<img>")| 定义图像。  
[<map>](https://www.w3school.com.cn/tags/tag_map.asp "<map>")| 定义图像地图。  
[<area>](https://www.w3school.com.cn/tags/tag_area.asp "<area>")| 定义图像地图中的可点击区域。  
  
* * *

### 一个完整的实例

``` <!DOCTYPE HTML> <html lang="zh-CN"> <head> <meta charset="UTF-8"> <title>Image</title> </head> <body background="./src/img/eg_background.jpg"> <p> 一幅图像： <img src="./src/img/eg_mouse.jpg" width="128" height="128" /> </p> <p> 一幅动画图像： <img src="./src/img/eg_cute.gif" width="50" height="50" /> </p> <p>请注意，插入动画图像的语法与插入普通图像的语法没有区别。</p> <p> 来自 W3School.com.cn 的图像： <img src="http://www.w3school.com.cn/i/w3school_logo_white.gif" /> </p> <!--在 HTML 中，图像由 <img> 标签定义。--> <!--<img> 是空标签，意思是说，它只包含属性，并且没有闭合标签。--> <!--要在页面上显示图像，你需要使用源属性（src）。src 指 "source"。源属性的值是图像的 URL 地址。--> <!--定义图像的语法是：--> <img src="url" /> <!--alt 属性用来为图像定义一串预备的可替换的文本。替换文本属性的值是用户定义的。--> <img src="./src/img/eg_empty.gif" alt="Empty Heart Missing"> <!--当浏览器无法载入图像时，替换文本属性可告诉读者他们失去的信息。 此时，浏览器将显示这个替代性的文本而不是图像。 为页面上的图像都加上替换文本属性是个好习惯，这样有助于更好地显示信息，并且对于那些使用纯文本浏览器的人来说是非常有用的。--> <!--假如某个 HTML 文件包含十个图像，那么为了正确显示这个页面，需要加载 11 个文件。加载图片是需要时间的，所以我们的建议是：慎用图片。--> <h3>图像背景</h3> <p>gif 和 jpg 文件均可用作 HTML 背景。</p> <p>如果图像小于页面，图像会进行重复。</p> <h2>未设置对齐方式的图像：</h2> <p>图像 <img src ="./src/img/eg_cute.gif"> 在文本中</p> <h2>已设置对齐方式的图像：</h2> <p>图像 <img src="./src/img/eg_cute.gif" align="bottom"> 在文本中</p> <p>图像 <img src ="./src/img/eg_cute.gif" align="middle"> 在文本中</p> <p>图像 <img src ="./src/img/eg_cute.gif" align="top"> 在文本中</p> <p>请注意，bottom 对齐方式是默认的对齐方式。</p> <p> <img src ="./src/img//eg_cute.gif" align ="left"> 带有图像的一个段落。图像的 align 属性设置为 "left"。图像将浮动到文本的左侧。 </p> <p> <img src ="./src/img//eg_cute.gif" align ="right"> 带有图像的一个段落。图像的 align 属性设置为 "right"。图像将浮动到文本的右侧。 </p> <img src="./src/img/eg_mouse.jpg" width="50" height="50"> <br /> <img src="./src/img/eg_mouse.jpg" width="100" height="100"> <br /> <img src="./src/img/eg_mouse.jpg" width="200" height="200"> <p>通过改变 img 标签的 "height" 和 "width" 属性的值，您可以放大或缩小图像。</p> <p>仅支持文本的浏览器无法显示图像，仅仅能够显示在图像的 "alt" 属性中指定的文本。在这里，"alt" 的文本是“向左转”。</p> <p>请注意，如果您把鼠标指针移动到图像上，大多数浏览器会显示 "alt" 文本。</p> <img src="./src/img/eg_goleft.gif" alt="向左转" /> <p>如果无法显示图像，将显示 "alt" 属性中的文本：</p> <img src="./src/img/eg_goleft123.gif" alt="向左转" /> <p>请点击图像上的星球，把它们放大。</p> <img src="./src/img/eg_planets.jpg" border="0" usemap="#planetmap" alt="Planets" /> <map name="planetmap" id="planetmap"> <area shape="circle" coords="180,139,14" href ="./src/web/venus.html" target ="_blank" alt="Venus" /> <area shape="circle" coords="129,161,10" href ="./src/web/mercury.html" target ="_blank" alt="Mercury" /> <area shape="rect" coords="0,0,110,260" href ="./src/web/sun.html" target ="_blank" alt="Sun" /> </map> <p><b>注释：</b>img 元素中的 "usemap" 属性引用 map 元素中的 "id" 或 "name" 属性（根据浏览器）， 所以我们同时向 map 元素添加了 "id" 和 "name" 属性。</p> </body> </html> ``` 

* * *

### 本例涉及的资源

#### eg_background.jpg

#### ![](/images/posts/HTML图像/439899749d26.jpeg)

#### eg_mouse.jpg

![](/images/posts/HTML图像/c5959f4b2eb8.jpeg)

#### eg_cute.gif

![](/images/posts/HTML图像/fb1b5f1a08bc.gif)

#### eg_goleft.gif

![](/images/posts/HTML图像/5037e4a2e884.gif)

#### eg_planets.jpg

![](/images/posts/HTML图像/abd553f89b30.jpeg)

#### venus.html

``` <!DOCTYPE HTML> <html lang="zh-CN"> <head> <meta charset="UTF-8"> <title>Venus</title> </head> <body> <img src="../img/eg_venus.gif"> </body> </html> ``` 

#### mercury.html

``` <!DOCTYPE HTML> <html lang="zh-CN"> <head> <meta charset="UTF-8"> <title>Mercury</title> </head> <body> <img src="../img/eg_mercury.gif"> </body> </html> ``` 

#### sun.html

``` <!DOCTYPE HTML> <html lang="zh-CN"> <head> <meta charset="UTF-8"> <title>Sun</title> </head> <body> <img src="../img/eg_sun.gif"> </body> </html> ``` 

#### eg_venus.gif

![](/images/posts/HTML图像/7640b8ac375d.gif)

#### eg_mercury.gif

![](/images/posts/HTML图像/748025716921.gif)

#### eg_sun.gif

![](/images/posts/HTML图像/024f3bb1fd4e.gif)

* * *

### 文件资源分布位置（也可以在源代码的src位置自行调整） 

![](/images/posts/HTML图像/0c53744a2b65.png)

其中，src文件夹和html文件为同级，img和web为src的子文件夹，img下存放图片资源，web下存放子页面资源。 
