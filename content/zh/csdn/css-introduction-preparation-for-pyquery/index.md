---
type: post
csdn: true
title: "29. CSS简介：PyQuery模块的铺垫"
date: "2023-01-21"
lastmod: "2023-01-21"
authors:
  - admin
tags:
  - "css"
  - "前端"
  - "html"
  - "css3"
  - "CSDN"
categories:
  - "Python爬虫入门、进阶与实战"
summary: "下面是一张提供了四个不同样式表的 HTML 页面。可以查看不同的样式："
image:
  filename: "covers/csdn-python-crawler.png"
  caption: "CSDN Archive · PYTHON · CRAWLER"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128745415"
csdn_views: 708
csdn_likes: 4
csdn_comments: 1
csdn_favorites: 4
---

> 本文迁移自CSDN博客
> 原文链接：[29. CSS简介：PyQuery模块的铺垫](https://blog.csdn.net/m0_59180666/article/details/128745415)
> 📊 708 阅读 | 👍 4 点赞 | 💬 1 评论 | ⭐ 4 收藏

* * *


## 什么是 CSS？

  * **_CSS_** 指的是层叠样式表* (**_C_** ascading ** _S_** tyle ** _S_** heets)
  * **CSS** 描述了** _如何在屏幕、纸张或其他媒体上显示 HTML 元素_**
  * **CSS**  _节省了**大量工作**_ 。它可以同时控制多张网页的布局
  * 外部样式表存储在 ** _CSS 文件_** 中

注：也称级联样式表。

* * *

### CSS 演示 - 一张 HTML 页面 - 多个样式！

下面是一张提供了四个不同样式表的 HTML 页面。可以查看不同的样式：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>CSS Demo</title>
<style>/* Stylesheet 1: */
body {
    font: 100% Lucida Sans, Verdana;
    margin: 20px;
    line-height: 26px;
}

.container {
    xmin-width: 900px;
}

.wrapper {
    position: relative;
    overflow: auto;
}

#top, #sidebar, #bottom, .menuitem {
    border-radius: 4px;
    margin: 4px;
}

#top {
    background-color: #4CAF50;
    color: #ffffff;
    padding: 15px;
}

#menubar {
    width: 200px;
    float: left
}

#main {
    padding: 10px;
    margin: 0 210px;
}

#sidebar {
    background-color: #32a4e7;
    color: #ffffff;
    padding: 10px;
    width: 180px;
    bottom: 0;
    top: 0;
    right: 0;
    position: absolute;
}

#bottom {
    border: 1px solid #d4d4d4;
    background-color: #f1f1f1;
    text-align: center;
    padding: 10px;
    font-size: 70%;
    line-height: 14px;
}

#top h1, #top p, #menulist {
    margin: 0;
    padding: 0;
}

.menuitem {
    background-color: #f1f1f1;
    border: 1px solid #d4d4d4;
    list-style-type: none;
    padding: 2px;
    cursor: pointer;
}

.menuitem:hover {
    background-color: #ffffff;
}

.menuitem:first-child {
   background-color:#4CAF50;
   color: white;
   font-weight:bold;
}

a {
    color: #000000;
    text-decoration: underline;
}

a:hover {
    text-decoration: none;
}


@media (max-width: 800px) {
    #sidebar {
        width: auto;
        position: relative;
    }
    #main {
        margin-right: 0;
    }

}

@media (max-width: 600px) {
    #menubar {
        width: auto;
        float: none;
    }
    #main {
        margin: 0;
    }
}
</style>

<style>/* Stylesheet 2: */
body {
    font-family: Arial;
    background-color: #d14836;
    line-height: 20px;
}

.container {
    xmin-width: 900px;
}

.wrapper {
    position: relative;
    overflow: auto;
}

#top {
    color: #ffffff;
    padding: 15px;
    font-size: 30px;
    line-height: 26px;
}

#top h1 {
    margin:0;
    line-height: 50px;
}

#menubar {
    width: 190px;
    float: right;
}

#main {
    padding: 10px;
    background-color: #ffffff;
    font: 80% Verdana;
}

#main h1, #main h2 {
    color: #d14836;
}

#sidebar {
    background-color: #F6DAD7;
    color: #d14836;
    padding: 10px;
}

#bottom {
    text-align: center;
    padding: 10px;
    font-size: 70%;
    color: #ffffff;
}

#menulist {
    padding:0;
    font: 16px verdana;
}

.menuitem {
    width: 155px;
    background-color: #d14836;
    border: 1px solid #d14836;
    border-radius: 40px;
    color: #ffffff;
    list-style-type: none;
    margin: 10px;
    padding: 5px;
    text-align: center;
    cursor: pointer;
}

.menuitem:nth-child(2) {
   background-color:white;
   color: #d14836;
   font-weight:bold;
}

.menuitem:hover {
    background-color: #ffffff;
    color: #d14836;
}

a {
    color: #d14836;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>

<style>/* Stylesheet 3: */
body {
    font: 100% Verdana;
    margin: 20px;
    line-height: 26px;
}

.container {
    xmin-width: 900px;
}

.wrapper {
    position: relative;
    overflow: auto;
}

#sidebar {
    background-color: #f1f1f1;
    border: 1px solid #d4d4d4;
    padding-left: 10px;
}

#bottom {
    text-align: center;
    padding: 10px;
    font-size: 70%;
    line-height: 14px;
}

h1, h2, h3 {
    color: #4CAF50;
}

#menulist {
    padding: 0;
    position: relative;
    overflow: auto;
}

.menuitem {
    width: 165px;
    float: left;
    background-color: #555555;
    color: #ffffff;
    list-style-type: none;
    margin: 4px;
    padding: 2px;
    text-align: center;
    cursor: pointer;
}

.menuitem:nth-child(3) {
   background-color:#4CAF50;
}

.menuitem:hover {
    background-color: #999999;
}

a {
    color: #000000;
}

a:hover {
    color: #84c754;
}
</style>
<style>/* Stylesheet 4: */
body {
    font: 100% Courier New;
    margin: 20px;
    line-height: 26px;
    background-color: #000000;
}

.container {
    xmin-width: 900px;
}

.wrapper {
    position: relative;
    overflow: auto;
}

#top {
    color: #84c754;
    padding: 15px;
}

#main {
    padding: 10px;
    color: #84c754;
}

#sidebar {
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 4px;
    padding: 10px;
    width: 320px;
    top: 0;
    right: 0;
    position: absolute;
    font-size: 80%;
    line-height: 20px;
}

#bottom {
    border: 1px solid #ffffff;
    border-radius: 4px;
    color: #ffffff;
    text-align: center;
    padding: 10px;
    font-size: 70%;
    line-height: 14px;
}

#top h1,#top p {
    margin: 0;
}

.menuitem {
    color: #84c754;
    cursor: pointer;
}

.menuitem:nth-child(4) {
    color:white;
    font-weight:bold;
}

.menuitem:hover {
    color: #ffffff;
}

a {
    color: #ffffff;
}

a:hover {
    color: #84c754;
}
@media (max-width: 600px) {
    #sidebar {
       width: auto;
       margin-bottom:10px;
       position: relative;
    }
}

</style>

</head>
<body>

<div class="container wrapper">
  <div id="top">
    <h1>欢迎访问我的首页</h1><br>
    <p>请使用菜单来选择不同的样式表。</p>
  </div>
  <div class="wrapper">
   <div id="menubar">
     <ul id="menulist">
       <li class="menuitem" onclick="reStyle(0)">样式表 1</li>
       <li class="menuitem" onclick="reStyle(1)">样式表 2</li>
       <li class="menuitem" onclick="reStyle(2)">样式表 3</li>
       <li class="menuitem" onclick="reStyle(3)">样式表 4</li>
       <li class="menuitem" onclick="noStyles()">无样式表</li>
     </ul>
    </div>
    <div id="main">
      <h1>相同页面不同的样式表</h1>
      <p>这是不同样式表如何更改HTML页面布局的演示。您可以通过在菜单中选择不同的样式表或选择以下链接之一来更改此页面的布局：<br>
      <a href="#" onclick="reStyle(0);return false">样式表1</a>,
      <a href="#" onclick="reStyle(1);return false">样式表2</a>,
      <a href="#" onclick="reStyle(2);return false">样式表3</a>,
      <a href="#" onclick="reStyle(3);return false">样式表4</a>.
      </p>
       <h2>无样式</h2>
      <p>此页面使用 div 元素对 HTML 页面的不同部分进行分组。单击此处查看没有样式表的页面的外观：<br><a href="#" onclick="noStyles();return false">无样式表</a>。</p>
   </div>
    <div id="sidebar">
      <h3>侧栏</h3>
      <p>侧边栏其实就是一种比较经典的网站导航设计，它的形式通常为竖向的一列，展示在网站的右侧或者左侧，具体的位置当然是取决于整体的设计。</p>
    </div>
  </div>


  <div id="bottom">
    <p>网站的页脚是位于每个页面底部的内容区域，在主内容的下面。</p>
	<p>术语“页脚”来自于印刷，其中页脚是贯穿文档所有页面的一致性设计元素。</p>
  </div>
</div>

<script>
function noStyles() {
    document.styleSheets[0].disabled = true;
    document.styleSheets[1].disabled = true;
    document.styleSheets[2].disabled = true;
    document.styleSheets[3].disabled = true;
}

function reStyle(n) {
    noStyles()
    document.styleSheets[n].disabled = false;
}

function closeBlackdiv() {
    var blackdiv, stylediv;
    blackdiv = document.getElementById("blackdiv")
    blackdiv.parentNode.removeChild(blackdiv);
    stylediv = document.getElementById("stylediv")
    stylediv.parentNode.removeChild(stylediv);
}

function showStyle(n) {
var div, text, blackdiv;
blackdiv = document.createElement("DIV");
blackdiv.setAttribute("style","background-color:#000000;position:absolute;width:100%;height:100%;top:0;opacity:0.5;margin-left:-20px;");
blackdiv.setAttribute("id","blackdiv");
blackdiv.setAttribute("onclick","closeBlackdiv()");
document.body.appendChild(blackdiv);
div = document.createElement("DIV");
div.setAttribute("id","stylediv");
div.setAttribute("style","background-color:#ffffff;padding-left:5px;position:absolute;width:auto;height:auto;top:100px;bottom:50px;left:200px;right:200px;overflow:auto;font-family: monospace; white-space: pre;line-height:16px;");
text = document.createTextNode(document.getElementsByTagName("STYLE")[n].innerHTML);
div.appendChild(text);
document.body.appendChild(div);
//alert(document.getElementsByTagName("STYLE")[n].innerHTML);
}
reStyle(0);
</script>

</body>
</html>
```

* * *

### 为何使用 CSS？

CSS 用于定义网页的样式，包括针对不同设备和屏幕尺寸的设计和布局。

#### CSS 实例

```css
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_index "亲自试一试")

* * *

### CSS 解决了一个大问题

HTML 从未打算包含用于格式化网页的标签！

创建 HTML 的目的是** _描述网页_** 的内容，例如：

```html
<h1>这是一个标题。</h1> <p>这是一个段落。</p>
```

将 <font> 之类的标签和 color 属性添加到 HTML 3.2 规范后，Web 开发人员的噩梦开始了。大型网站的开发将字体和颜色信息添加到每个页面中，这演变为一个漫长而昂贵的过程。

为了解决这个问题，万维网联盟（W3C）创建了 CSS。

CSS 从 HTML 页面中删除了样式格式！

**如果对 HTML 还不了解，建议移步我的[HTML 入门进阶与实战](https://blog.csdn.net/m0_59180666/category_12132070.html?spm=1001.2014.3001.5482 "HTML 入门进阶与实战") 专栏。**

* * *

### CSS 节省了大量工作！

样式定义通常保存在外部 .css 文件中。

通过使用外部样式表文件，您只需更改一个文件即可更改整个网站的外观！

* * *

### 通俗的解释

> HTML是网页骨架，相当于 _**人脸素颜**_ ；
> 
> CSS是网页样式，相当于 _**化妆美颜**_ 。

两者对于网页，尤其是**优质网页** 而言都是尤为重要的。

* * *

### CSS 选择器

CSS 选择器用于“查找”（或选取）要设置样式的 HTML 元素。

我们可以将 CSS 选择器分为五类：

  * 简单选择器（根据名称、id、类来选取元素）
  * [组合器选择器](https://www.w3school.com.cn/css/css_combinators.asp "组合器选择器")（根据它们之间的特定关系来选取元素）
  * [伪类选择器](https://www.w3school.com.cn/css/css_pseudo_classes.asp "伪类选择器")（根据特定状态选取元素）
  * [伪元素选择器](https://www.w3school.com.cn/css/css_pseudo_elements.asp "伪元素选择器")（选取元素的一部分并设置其样式）
  * [属性选择器](https://www.w3school.com.cn/css/css_attribute_selectors.asp "属性选择器")（根据属性或属性值来选取元素）

我们将了解最基本的 CSS 选择器。

* * *

### CSS 元素选择器

元素选择器**根据元素名称** 来选择 HTML 元素。

#### 实例

在这里，页面上的所有 <p> 元素都将居中对齐，并带有红色文本颜色：

```css
p { text-align: center; color: red; }
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_syntax_element "亲自试一试")

* * *

### CSS id 选择器

id 选择器使用 HTML **元素的 id 属性** 来选择特定元素。

元素的 **id 在页面中是唯一的** ，因此 id 选择器用于选择一个唯一的元素！

要选择具有特定 id 的元素，请写一个井号（**＃** ），后跟该元素的 id。

#### 实例

这条 CSS 规则将应用于 id="para1" 的 HTML 元素：

```css
#para1 {
  text-align: center;
  color: red;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_syntax_id "亲自试一试")

注意：id 名称不能以数字开头。

* * *

### CSS 类选择器

类选择器选择有**特定 class 属性** 的 HTML 元素。

如需选择拥有特定 class 的元素，请写一个句点（**.** ）字符，后面跟类名。

#### 实例

在此例中，**所有带有 class="center" 的 HTML 元素** 将为红色且居中对齐：

```css
.center {
  text-align: center;
  color: red;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_syntax_class "亲自试一试")

还可以指定只有特定的 HTML 元素会受类的影响。

#### 实例

在这个例子中，只有**具有 class="center" 的 <p> 元素**会居中对齐：

```css
p.center {
  text-align: center;
  color: red;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_syntax_element_class_1 "亲自试一试")

HTML 元素也可以引用多个类。

#### 实例

在这个例子中，<p> 元素将根据 **class="center" 和 class="large"** 进行样式设置：

```html
<p class="center large">这个段落引用两个类。</p>
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_syntax_element_class_2 "亲自试一试")

注意：类名不能以数字开头！

**另注：如果有冲突的元素，将以 后面的类为基准。**

* * *

### CSS 通用选择器

通用选择器（***** ）选择页面上的所有的 HTML 元素。

#### 实例

下面的 CSS 规则会影响页面上的**每个 HTML 元素** ：

```css
* { text-align: center; color: blue; }
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_syntax_universal "亲自试一试")

* * *

### CSS 分组选择器

分组选择器选取**所有具有相同样式定义的 HTML 元素** 。

请看下面的 CSS 代码（h1、h2 和 p 元素具有相同的样式定义）：

```css
h1 {
  text-align: center;
  color: red;
}

h2 {
  text-align: center;
  color: red;
}

p {
  text-align: center;
  color: red;
}
```

最好对选择器进行分组，以最大程度地缩减代码。

如需对选择器进行分组，请**用逗号来分隔每个选择器** 。

#### 实例

在这个例子中，我们对上述代码中的选择器进行分组：

```css
h1, h2, p {
  text-align: center;
  color: red;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grouping "亲自试一试")

* * *

### 所有简单的 CSS 选择器

选择器| 例子| 例子描述  
---|---|---  
[.class](https://www.w3school.com.cn/css/css_selectors.asp ".class")| .intro| 选取所有 class="intro" 的元素。  
[#id](https://www.w3school.com.cn/css/css_selectors.asp "#id")| #firstname| 选取 id="firstname" 的那个元素。  
[*](https://www.w3school.com.cn/css/css_selectors.asp "*")| *| 选取所有元素。  
[element](https://www.w3school.com.cn/css/css_selectors.asp "element")| p| 选取所有 <p> 元素。  
[element,element,..](https://www.w3school.com.cn/css/css_selectors.asp "element,element,..")| div, p| 选取所有 <div> 元素和所有 <p> 元素。  
  
* * *

### 延伸阅读

课外书：[CSS 元素选择器](https://www.w3school.com.cn/css/css_selector_type.asp "CSS 元素选择器")

课外书：[CSS 选择器分组](https://www.w3school.com.cn/css/css_selector_grouping.asp "CSS 选择器分组")

课外书：[CSS 类选择器详解](https://www.w3school.com.cn/css/css_selector_class.asp "CSS 类选择器详解")

课外书：[CSS ID 选择器详解](https://www.w3school.com.cn/css/css_selector_id.asp "CSS ID 选择器详解")

课外书：[CSS 属性选择器详解](https://www.w3school.com.cn/css/css_selector_attribute.asp "CSS 属性选择器详解")

课外书：[CSS 后代选择器](https://www.w3school.com.cn/css/css_selector_descendant.asp "CSS 后代选择器")

课外书：[CSS 子元素选择器](https://www.w3school.com.cn/css/css_selector_child.asp "CSS 子元素选择器")

课外书：[CSS 相邻兄弟选择器](https://www.w3school.com.cn/css/css_selector_adjacent_sibling.asp "CSS 相邻兄弟选择器")
