---
type: post
csdn: true
title: "HTML画布与SVG（Canvas vs. SVG）"
date: "2023-02-09"
lastmod: "2023-02-09"
authors:
  - admin
tags:
  - "html"
  - "javascript"
  - "前端"
  - "canvas"
  - "SVG"
  - "CSDN"
categories:
  - "HTML入门、进阶与实战"
summary: "HTML5 的 canvas 元素使用 JavaScript 在网页上绘制图像。"
image:
  filename: "covers/csdn-html.png"
  caption: "CSDN Archive · HTML · WEB"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128962332"
csdn_views: 1306
csdn_likes: 2
csdn_comments: 1
csdn_favorites: 4
---

> 本文迁移自CSDN博客
> 原文链接：[HTML画布与SVG（Canvas vs. SVG）](https://blog.csdn.net/m0_59180666/article/details/128962332)
> 📊 1306 阅读 | 👍 2 点赞 | 💬 1 评论 | ⭐ 4 收藏


## 画布(Canvas)

* * *

**canvas 元素用于在网页上绘制图形。**

* * *

### 什么是 Canvas？

HTML5 的 canvas 元素使用 JavaScript 在网页上绘制图像。

画布是一个矩形区域，您可以控制其每一像素。

canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。

* * *

### 创建 Canvas 元素

向 HTML5 页面添加 canvas 元素。

规定元素的 id、宽度和高度：

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

* * *

### 通过 JavaScript 来绘制

canvas 元素本身是没有绘图能力的。所有的绘制工作必须在 JavaScript 内部完成：

```html
<script type="text/javascript">
var c=document.getElementById("myCanvas");
var cxt=c.getContext("2d");
cxt.fillStyle="#FF0000";
cxt.fillRect(0,0,150,75);
</script>
```

JavaScript 使用 id 来寻找 canvas 元素：

```javascript
var c=document.getElementById("myCanvas");
```

然后，创建 context 对象：

```javascript
var cxt=c.getContext("2d");
```

getContext("2d") 对象是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。

下面的两行代码绘制一个红色的矩形：

```javascript
cxt.fillStyle="#FF0000";
cxt.fillRect(0,0,150,75); 
```

fillStyle 方法将其染成红色，fillRect 方法规定了形状、位置和尺寸。

* * *

### 理解坐标

上面的 fillRect 方法拥有参数 (0,0,150,75)。

意思是：在画布上绘制 150x75 的矩形，从左上角开始 (0,0)。

如下图所示，画布的 X 和 Y 坐标用于在画布上对绘画进行定位。

![](/images/posts/HTML画布与SVG（Canvas-vs.-SVG）/8cc8330f872a.gif)

[实例：把鼠标悬停在矩形上可以看到坐标](https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_canvas_coordinates "实例：把鼠标悬停在矩形上可以看到坐标")

* * *

### 更多 Canvas 实例

下面的在 canvas 元素上进行绘画的更多实例：

#### 实例 - 线条

通过指定从何处开始，在何处结束，来绘制一条线：

![](/images/posts/HTML画布与SVG（Canvas-vs.-SVG）/edda2384e8db.gif)

JavaScript 代码：

```html
<script type="text/javascript">

var c=document.getElementById("myCanvas");
var cxt=c.getContext("2d");
cxt.moveTo(10,10);
cxt.lineTo(150,50);
cxt.lineTo(10,50);
cxt.stroke();

</script>
```

canvas 元素：

```html
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #c3c3c3;">
Your browser does not support the canvas element.
</canvas>
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_canvas_line "亲自试一试")

#### 实例 - 圆形

通过规定尺寸、颜色和位置，来绘制一个圆：

JavaScript 代码：

```html
<script type="text/javascript">

var c=document.getElementById("myCanvas");
var cxt=c.getContext("2d");
cxt.fillStyle="#FF0000";
cxt.beginPath();
cxt.arc(70,18,15,0,Math.PI*2,true);
cxt.closePath();
cxt.fill();

</script>
```

canvas 元素：

```html
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #c3c3c3;">
Your browser does not support the canvas element.
</canvas>
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_canvas_circle "亲自试一试")

#### 实例 - 渐变

使用您指定的颜色来绘制渐变背景：

![](/images/posts/HTML画布与SVG（Canvas-vs.-SVG）/2edd19924a03.gif)

JavaScript 代码：

```html
<script type="text/javascript">

var c=document.getElementById("myCanvas");
var cxt=c.getContext("2d");
var grd=cxt.createLinearGradient(0,0,175,50);
grd.addColorStop(0,"#FF0000");
grd.addColorStop(1,"#00FF00");
cxt.fillStyle=grd;
cxt.fillRect(0,0,175,50);

</script>
```

canvas 元素：

```html
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #c3c3c3;">
Your browser does not support the canvas element.
</canvas>
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_canvas_gradient "亲自试一试")

#### 实例 - 图像

把一幅图像放置到画布上：

![](/images/posts/HTML画布与SVG（Canvas-vs.-SVG）/c7fc885e0a61.png)

JavaScript 代码：

```html
<script>
window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("scream");
   ctx.drawImage(img, 10, 10);
};
</script>
```

canvas 元素：

```html
<canvas id="myCanvas" width="244" height="182" style="border:1px solid #d3d3d3;">
Your browser does not support the HTML5 canvas tag.
</canvas>
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_canvas_image "亲自试一试")

* * *

### 相关页面

参考手册：[HTML 5 <canvas> 标签](https://www.w3school.com.cn/tags/tag_canvas.asp "HTML 5 <canvas> 标签")

参考手册：[HTML DOM Canvas 对象](https://www.w3school.com.cn/jsref/dom_obj_canvas.asp "HTML DOM Canvas 对象")

* * *

## SVG (Scalable Vector Graphics)

* * *

**HTML5 支持内联 SVG。**

* * *

### 什么是 SVG？

  * SVG 指可伸缩矢量图形 (Scalable Vector Graphics)
  * SVG 用于定义用于网络的基于矢量的图形
  * SVG 使用 XML 格式定义图形
  * SVG 图像在放大或改变尺寸的情况下其图形质量不会有损失
  * SVG 是万维网联盟的标准

* * *

### SVG 的优势

与其他图像格式相比（比如 JPEG 和 GIF），使用 SVG 的优势在于：

  * SVG 图像可通过文本编辑器来创建和修改
  * SVG 图像可被搜索、索引、脚本化或压缩
  * SVG 是可伸缩的
  * SVG 图像可在任何的分辨率下被高质量地打印
  * SVG 可在图像质量不下降的情况下被放大

* * *

### 浏览器支持

Internet Explorer 9、Firefox、Opera、Chrome 以及 Safari 支持内联 SVG。

* * *

### 把 SVG 直接嵌入 HTML 页面

在 HTML5 中，您能够将 SVG 元素直接嵌入 HTML 页面中：

#### 实例

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
  <polygon points="100,10 40,180 190,60 10,60 160,180"
  style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
</svg>

</body>
</html>
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_svg_ex "亲自试一试")

**结果** ：

![](/images/posts/HTML画布与SVG（Canvas-vs.-SVG）/af2c6b983c64.png)

如需学习更多有关 SVG 的知识，可以阅读 [SVG 教程](https://www.w3school.com.cn/svg/index.asp "SVG 教程")。

* * *

## Canvas vs. SVG

* * *

**Canvas 和 SVG 都允许您在浏览器中创建图形，但是它们在根本上是不同的。**

* * *

### SVG

SVG 是一种使用 XML 描述 2D 图形的语言。

SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。

在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。

* * *

### Canvas

Canvas 通过 JavaScript 来绘制 2D 图形。

Canvas 是逐像素进行渲染的。

在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。

* * *

### Canvas 与 SVG 的比较

下表列出了 canvas 与 SVG 之间的一些不同之处。

> #### Canvas
> 
>   * 依赖分辨率
>   * 不支持事件处理器
>   * 弱的文本渲染能力
>   * 能够以 .png 或 .jpg 格式保存结果图像
>   * 最适合图像密集型的游戏，其中的许多对象会被频繁重绘
> 

> 
> #### SVG
> 
>   * 不依赖分辨率
>   * 支持事件处理器
>   * 最适合带有大型渲染区域的应用程序（比如谷歌地图）
>   * 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
>   * 不适合游戏应用
>
