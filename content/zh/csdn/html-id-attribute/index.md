---
type: post
csdn: true
title: "HTML id属性"
date: "2022-12-26"
lastmod: "2022-12-26"
authors:
  - admin
tags:
  - "html"
  - "css"
  - "前端"
  - "javascript"
  - "html5"
  - "CSDN"
categories:
  - "HTML入门、进阶与实战"
summary: "HTML id 属性用于 为HTML 元素指定唯一的 id。"
image:
  filename: "covers/csdn-html.png"
  caption: "CSDN Archive · HTML · WEB"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128443161"
csdn_views: 638
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 4
---

> 本文迁移自CSDN博客
> 原文链接：[HTML id属性](https://blog.csdn.net/m0_59180666/article/details/128443161)
> 📊 638 阅读 | 👍 1 点赞 | 💬 1 评论 | ⭐ 4 收藏


**HTML `id` 属性用于 为HTML 元素指定唯一的 id。**

**一个 HTML文档中不能存在多个有相同 id 的元素。**

* * *

### 使用 id 属性

`id` 属性指定 HTML 元素的唯一 ID。 `id` 属性的值在 HTML 文档中必须是唯一的。

`id` 属性用于指向样式表中的特定样式声明。JavaScript 也可使用它来访问和操作拥有特定 ID 的元素。

id 的语法是：写一个井号 (#)，后跟一个 id 名称。然后，在花括号 {} 中定义 CSS 属性。

下面的例子中我们有一个 `<h1>` 元素，它指向 id 名称 "myHeader"。这个 `<h1>` 元素将根据 head 部分中的 `#myHeader` 样式定义进行样式设置：

#### 实例

```
<!DOCTYPE html>
<html>
<head>
<style>
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}
</style>
</head>
<body>

<h1 id="myHeader">My Header</h1>

</body>
</html>
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_id_css "亲自试一试")

注释：id 名称对大小写敏感！

注释：id 必须包含至少一个字符，且不能包含空白字符（空格、制表符等）。

* * *

### Class 与 ID 的差异

同一个类名可以由多个 HTML 元素使用，而一个 id 名称只能由页面中的一个 HTML 元素使用：

#### 实例

```
<style>
/* 设置 id 为 "myHeader" 的元素的样式 */
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}

/* 设置类名为 "city" 的所有元素的样式 */
.city {
  background-color: tomato;
  color: white;
  padding: 10px;
}
</style>

<!-- 拥有唯一 id 的元素 -->
<h1 id="myHeader">My Cities</h1>

<!-- 拥有相同类名的多个元素 -->
<h2 class="city">London</h2>
<p>London is the capital of England.</p>

<h2 class="city">Paris</h2>
<p>Paris is the capital of France.</p>

<h2 class="city">Tokyo</h2>
<p>Tokyo is the capital of Japan.</p>
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_id_class "亲自试一试")

提示：请在我们的 [CSS 教程](https://www.w3school.com.cn/css/index.asp "CSS 教程") 中学习更多 CSS 知识。

* * *

### 通过 ID 和链接实现 HTML 书签

HTML 书签用于让读者跳转至网页的特定部分。

如果页面很长，那么书签可能很有用。

要使用书签，您必须首先创建它，然后为它添加链接。

然后，当单击链接时，页面将滚动到带有书签的位置。

#### 实例

首先，用 `id` 属性创建书签：

```
<h2 id="C4">第四章</h2>
```

然后，在同一张页面中，向这个书签添加一个链接（“跳转到第四章”）：

#### 实例

```
<a href="#C4">跳转到第四章</a>
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_links_bookmark "亲自试一试")

或者，在另一张页面中，添加指向这个书签的链接（“跳转到第四章”）：

```
<a href="html_demo.html#C4">Jump to Chapter 4</a>
```

* * *

### 在 JavaScript 中使用 id 属性

JavaScript 也可以使用 id 属性为特定元素执行某些任务。

JavaScript 可以使用 `getElementById()` 方法访问拥有特定 id 的元素：

#### 实例

使用 id 属性通过 JavaScript 来处理文本：

```
<script>
function displayResult() {
  document.getElementById("myHeader").innerHTML = "Have a nice day!";
}
</script>
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_id_js "亲自试一试")

提示：可以在 [HTML JavaScript](https://www.w3school.com.cn/html/html_script.asp "HTML JavaScript") 这一章中，或 [JavaScript 教程](https://www.w3school.com.cn/js/index.asp "JavaScript 教程") 中学习 JavaScript。

* * *

### 一个完整的实例

```
<!DOCTYPE HTML>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <title>id</title>
<style>
<!--/* 设置 id 为 "myHeader" 的元素的样式 */-->
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}
#Header {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}
<!--/* 设置类名为 "city" 的所有元素的样式 */-->
.city {
  background-color: tomato;
  color: white;
  padding: 10px;
}
</style>
</head>

<body>
<a href="#C4">跳转到第四章</a>
<!--id 属性指定 HTML 元素的唯一 ID。 id 属性的值在 HTML 文档中必须是唯一的。-->
<!--id 属性用于指向样式表中的特定样式声明。JavaScript 也可使用它来访问和操作拥有特定 ID 的元素。-->
<!--id 的语法是：写一个井号 (#)，后跟一个 id 名称。然后，在花括号 {} 中定义 CSS 属性。-->
<!--下面的例子中我们有一个 <h1> 元素，它指向 id 名称 "myHeader"。这个 <h1> 元素将根据 head 部分中的 #myHeader 样式定义进行样式设置：-->

<!-- 拥有唯一 id 的元素 -->
<h1 id="myHeader">My Header</h1>

<p>注释：id 名称对大小写敏感！
注释：id 必须包含至少一个字符，且不能包含空白字符（空格、制表符等）。
同一个类名可以由多个 HTML 元素使用，而一个 id 名称只能由页面中的一个 HTML 元素使用：</p>

<!-- 拥有相同类名的多个元素 -->
<h2 class="city">London</h2>
<p>London is the capital of England.</p>

<h2 class="city">Paris</h2>
<p>Paris is the capital of France.</p>

<h2 class="city">Tokyo</h2>
<p>Tokyo is the capital of Japan.</p>

<!--HTML 书签用于让读者跳转至网页的特定部分。-->
<!--如果页面很长，那么书签可能很有用。-->
<!--要使用书签，您必须首先创建它，然后为它添加链接。-->
<!--然后，当单击链接时，页面将滚动到带有书签的位置。-->
<h2 id="C4">第四章</h2>
<!--首先，用 id 属性创建书签：-->
<!--然后，在同一张页面中，向这个书签添加一个链接（“跳转到第四章”）：-->
<!--或者，在另一张页面中，添加指向这个书签的链接（“跳转到第四章”）：-->
<a href="10_HTML_Link.html#C4">Jump to Chapter 4</a>

<h1>在 JavaScript 中使用 id 属性</h1>

<p>JavaScript 可以使用 getElementById() 方法访问具有指定 ID 的元素：</p>

<h2 id="Header">Hello World!</h2>
<button onclick="displayResult()">改变文本</button>

<script>
function displayResult() {
  document.getElementById("Header").innerHTML = "Have a nice day!";
}
</script><br /><br />

总结：<br />
id 属性用于为 HTML 元素指定唯一的 id<br />
id 属性的值在 HTML 文档中必须是唯一的<br />
CSS 和 JavaScript 可使用 id 属性来选取元素或设置特定元素的样式<br />
id 属性的值区分大小写<br />
id 属性还可用于创建 HTML 书签<br />
JavaScript 可以使用 getElementById() 方法访问拥有特定 id 的元素<br />
</body>
</html>
```

* * *

### 本章总结

  * `id` 属性用于为 HTML 元素指定唯一的 id
  * `id` 属性的值在 HTML 文档中必须是唯一的
  * CSS 和 JavaScript 可使用 `id` 属性来选取元素或设置特定元素的样式
  * `id` 属性的值区分大小写
  * `id` 属性还可用于创建 HTML 书签
  * JavaScript 可以使用 `getElementById()` 方法访问拥有特定 id 的元素
