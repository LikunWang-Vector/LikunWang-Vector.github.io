---
type: post
csdn: true
title: "HTML JavaScript"
date: "2022-12-26"
lastmod: "2022-12-26"
authors:
  - admin
tags:
  - "javascript"
  - "html"
  - "前端"
  - "html5"
  - "开发语言"
  - "CSDN"
categories:
  - "HTML入门、进阶与实战"
summary: "HTML 的 script 标签用于定义客户端脚本（JavaScript）。"
image:
  filename: "covers/csdn-html.png"
  caption: "CSDN Archive · HTML · WEB"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128443233"
csdn_views: 172
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
---

> 本文迁移自CSDN博客
> 原文链接：[HTML JavaScript](https://blog.csdn.net/m0_59180666/article/details/128443233)
> 📊 172 阅读 | 👍 1 点赞 | 💬 1 评论 | ⭐ 2 收藏

## JavaScript 使 HTML 页面更具动态性和交互性

#### 实例

我的第一段 JavaScript

```
<!DOCTYPE html>
<html>
<body>

<h1>我的第一段 JavaScript</h1>

<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
点击我来显示日期和时间
</button>

<p id="demo"></p>

</body>
</html>
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_script_intro "亲自试一试")

* * *

### HTML &lt;script> 标签

HTML `<script>` 标签用于定义客户端脚本（JavaScript）。

`<script>` 元素即可包含脚本语句，也可通过 `src` 属性指向外部脚本文件。

JavaScript 的常见用途是图像处理、表单验证和内容的动态更改。

如需选取 HTML 元素，JavaScript 最常用 `document.getElementById()` 方法。

这个 JavaScript 示例向 id="demo" 的 HTML 元素内写入 "Hello JavaScript!"：

#### 实例

```
<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_script "亲自试一试")

提示：您可在我们的 [JavaScript 教程](https://www.w3school.com.cn/js/index.asp "JavaScript 教程") 中学习更多 JavaScript 知识。

* * *

### JavaScript 的能力

以下是展示 JavaScript 能力的一些例子：

#### 实例

JavaScript 能够更改内容：

```
document.getElementById("demo").innerHTML = "Hello JavaScript!";
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_script_html "亲自试一试")

#### 实例

JavaScript 能够更改样式：

```
document.getElementById("demo").style.fontSize = "25px";
document.getElementById("demo").style.color = "red";
document.getElementById("demo").style.backgroundColor = "yellow";
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_script_styles "亲自试一试")

#### 实例

JavaScript 能够更改属性：

```
document.getElementById("image").src = "picture.gif";
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_script_attribute "亲自试一试")

* * *

### HTML <noscript> 标签

HTML `<noscript>` 标签定义了替代内容，这些内容将显示给在浏览器中禁用了脚本或浏览器不支持脚本的用户：

#### 实例

```
<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>
<noscript>抱歉，您的浏览器不支持 JavaScript！</noscript>
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_noscript "亲自试一试")

* * *

### HTML Script 标签

标签| 描述  
---|---  
[&lt;script>](https://www.w3school.com.cn/tags/tag_script.asp "<script>")| 定义客户端脚本。  
[<noscript>](https://www.w3school.com.cn/tags/tag_noscript.asp "<noscript>")| 为不支持客户端脚本的用户定义替代内容。  
  
如需所有可用的 HTML 标签的完整列表，请访问 [HTML 标签参考手册](https://www.w3school.com.cn/tags/index.asp "HTML 标签参考手册")。

* * *

### 一个完整的实例

```
<!DOCTYPE HTML>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <title>JS</title>
</head>

<body>
<h1>我的第一段 JavaScript</h1>

<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
点击我来显示日期和时间
</button>
<p id="demo">按下以上按钮以显示日期时间</p>

<h1>使用 JavaScript 更改文本</h1>
<p>本例把 "Hello JavaScript!" 写入 id="demo" 的 HTML 元素内：</p>
<p id="demo1">aaa</p>
<script>
document.getElementById("demo1").innerHTML = "Hello JavaScript!";
</script>

<p>JavaScript 可以更改 HTML 元素的内容：</p>
<button type="button" onclick="myFunction()">点击我！</button>
<p id="demo2">这是一个演示。</p>
<script>
function myFunction() {
  document.getElementById("demo2").innerHTML = "Hello JavaScript!";
}
</script>

<p id="demo3">JavaScript 可以更改 HTML 元素的样式。</p>
<script>
function myFunction() {
  document.getElementById("demo3").style.fontSize = "25px";
  document.getElementById("demo3").style.color = "red";
  document.getElementById("demo3").style.backgroundColor = "yellow";
}
</script>
<button type="button" onclick="myFunction()">点击我！</button>

<p>在这里，JavaScript 更改了图像的 src 属性。</p>
<script>
function light(sw) {
  var pic;
  if (sw == 0) {
    pic = "./src/img/eg_bulboff.gif"
  } else {
    pic = "./src/img/eg_bulbon.gif"
  }
  document.getElementById('myImage').src = pic;
}
</script>
<img id="myImage" src="./src/img/eg_bulboff.gif" width="109" height="180">
<p>
<button type="button" onclick="light(1)">开灯</button>
<button type="button" onclick="light(0)">关灯</button>
</p>

<p id="demo5"></p>
<script>
document.getElementById("demo5").innerHTML = "Hello JavaScript!";
</script>
<noscript>抱歉，您的浏览器不支持 JavaScript！</noscript>
<p>不支持 JavaScript 的浏览器将显示 noscript 元素内的文本。</p>

</body>
</html>
```
