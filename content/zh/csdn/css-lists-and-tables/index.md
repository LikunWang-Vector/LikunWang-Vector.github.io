---
type: post
csdn: true
title: "CSS列表与表格"
date: "2023-02-02"
lastmod: "2023-02-02"
authors:
  - admin
tags:
  - "css"
  - "javascript"
  - "前端"
  - "html5"
  - "dreamweaver"
  - "CSDN"
categories:
  - "CSS入门、进阶与实战"
summary: "list-style-image 属性将图像指定为列表项标记："
image:
  filename: "covers/csdn-html.png"
  caption: "CSDN Archive · HTML · WEB"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128846409"
csdn_views: 1676
csdn_likes: 2
csdn_comments: 1
csdn_favorites: 3
---

> 本文迁移自CSDN博客
> 原文链接：[CSS列表与表格](https://blog.csdn.net/m0_59180666/article/details/128846409)
> 📊 1676 阅读 | 👍 2 点赞 | 💬 1 评论 | ⭐ 3 收藏


### ![](/images/posts/CSS列表与表格/b9d0a39fd1bb.png)

* * *

### HTML 列表和 CSS 列表属性

在 HTML 中，列表主要有两种类型：

  * 无序列表（<ul>）- 列表项用的是项目符号标记
  * 有序列表（<ol>）- 列表项用的是数字或字母标记

CSS 列表属性可以：

  * 为有序列表设置不同的列表项标记
  * 为无序列表设置不同的列表项标记
  * 将图像设置为列表项标记
  * 为列表和列表项添加背景色

* * *

### 不同的列表项目标记

`list-style-type` 属性指定列表项标记的类型。

下例显示了一些可用的列表项标记：

#### 实例

```css
ul.a {
  list-style-type: circle;
}

ul.b {
  list-style-type: square;
}

ol.c {
  list-style-type: upper-roman;
}

ol.d {
  list-style-type: lower-alpha;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_list-style-type_ex "亲自试一试")

注释：有些值用于无序列表，而有些值用于有序列表。

* * *

### 图像作为列表项标记

`list-style-image` 属性将图像指定为列表项标记：

#### 实例

```css
ul {
  list-style-image: url('sqpurple.gif');
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_list-style-image "亲自试一试")

* * *

### 定位列表项标记

`list-style-position` 属性指定列表项标记（项目符号）的位置。

"list-style-position: outside;" 表示项目符号点将在列表项之外。列表项每行的开头将垂直对齐。这是默认的：

  * ![](/images/posts/CSS列表与表格/bd53298d06c7.png)

`"list-style-position: inside;"` 表示项目符号将在列表项内。由于它是列表项的一部分，因此它将成为文本的一部分，并在开头推开文本：

![](/images/posts/CSS列表与表格/0c806e926a44.png)

#### 实例

```css
ul.a {
  list-style-position: outside;
}

ul.b {
  list-style-position: inside;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_list-style-position "亲自试一试")

* * *

### 删除默认设置

`list-style-type:none` 属性也可以用于删除标记/项目符号。请注意，列表还拥有默认的外边距和内边距。要删除此内容，请在 <ul> 或 <ol> 中添加 `margin:0` 和 `padding:0` ：

#### 实例

```css
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_list-style_none "亲自试一试")

* * *

### 列表 - 简写属性

`list-style` 属性是一种简写属性。它用于在一条声明中设置所有列表属性：

#### 实例

```css
ul {
  list-style: square inside url("sqpurple.gif");
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_list-style "亲自试一试")

在使用简写属性时，属性值的顺序为：

  * `list-style-type`（如果指定了 list-style-image，那么在由于某种原因而无法显示图像时，会显示这个属性的值）
  * `list-style-position`（指定列表项标记应显示在内容流的内部还是外部）
  * `list-style-image`（将图像指定为列表项标记）

如果缺少上述属性值之一，则将插入缺失属性的默认值（如果有）。

* * *

### 设置列表的颜色样式

我们还可以使用颜色设置列表样式，使它们看起来更有趣。

添加到 <ol> 或 <ul> 标记的任何样式都会影响整个列表，而添加到 <li> 标记的属性将影响各个列表项：

#### 实例

```css
ol {
  background: #ff9999;
  padding: 20px;
}

ul {
  background: #3399ff;
  padding: 20px;
}

ol li {
  background: #ffe5e5;
  padding: 5px;
  margin-left: 35px;
}

ul li {
  background: #cce5ff;
  margin: 5px;
}
```

结果：

![](/images/posts/CSS列表与表格/372b56ed2377.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_list-style_colors "亲自试一试")

* * *

### 更多实例

[带红色左边框的自定义列表](https://www.w3school.com.cn/tiy/t.asp?f=css_list-style-red-border "带红色左边框的自定义列表")

本例演示如何创建带有红色左边框的列表。

[全屏宽度的边框列表](https://www.w3school.com.cn/tiy/t.asp?f=css_list-style-border "全屏宽度的边框列表")

本例演示如何创建没有项目符号的带边框列表。

[列表的所有不同列表项标记](https://www.w3school.com.cn/tiy/t.asp?f=css_list-style-type_all "列表的所有不同列表项标记")

本例演示了 CSS 中所有不同的列表项标记。

* * *

### 所有 CSS 列表属性

属性| 描述  
---|---  
[list-style](https://www.w3school.com.cn/cssref/pr_list-style.asp "list-style")| 简写属性。在一条声明中设置列表的所有属性。  
[list-style-image](https://www.w3school.com.cn/cssref/pr_list-style-image.asp "list-style-image")| 指定图像作为列表项标记。  
[list-style-position](https://www.w3school.com.cn/cssref/pr_list-style-position.asp "list-style-position")| 规定列表项标记（项目符号）的位置。  
[list-style-type](https://www.w3school.com.cn/cssref/pr_list-style-type.asp "list-style-type")| 规定列表项标记的类型。  
  
* * *

**使用 CSS 可以极大地改善 HTML 表格的外观：**

Company| Contact| Address| City  
---|---|---|---  
Alibaba| Ma Yun| No. 699, Wangshang Road, Binjiang District| Hangzhou  
APPLE| Tim Cook| 1 Infinite Loop Cupertino, CA 95014| Cupertino  
BAIDU| Li YanHong| Lixiang guoji dasha,No 58, beisihuanxilu| Beijing  
Canon| Tsuneji Uchida| One Canon Plaza Lake Success, NY 11042| New York  
Google| Larry Page| 1600 Amphitheatre Parkway Mountain View, CA 94043| Mountain View  
HUAWEI| Ren Zhengfei| Putian Huawei Base, Longgang District| Shenzhen  
Microsoft| Bill Gates| 15700 NE 39th St Redmond, WA 98052| Redmond  
Nokia| Olli-Pekka Kallasvuo| P.O. Box 226, FIN-00045 Nokia Group| Helsinki  
SONY| Kazuo Hirai| Park Ridge, NJ 07656| Park Ridge  
Tencent| Ma Huateng| Tencent Building, High-tech Park, Nanshan District| Shenzhen  
  
[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_table_fancy "亲自试一试")

* * *

### 表格边框

如需在 CSS 中设置表格边框，请使用 `border` 属性。

下例为 <table>、<th> 和 <td> 元素规定了黑色边框：

Firstname| Lastname  
---|---  
Bill| Gates  
Steve| Jobs  
  
#### 实例

```css
table, th, td {
  border: 1px solid black;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=js_ajax_xmlhttp "亲自试一试")

注意：上例中的表格拥有双边框。这是因为 table 和 <th> 和 <td> 元素都有单独的边框。

* * *

### 全宽表格

在某些情况下，上表似乎很小。如果您需要一个可以覆盖整个屏幕（全宽）的表格，请为 <table> 元素添加 width: 100%：

#### 实例

```css
table { width: 100%; }
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_table_fullwidth "亲自试一试")

#### 双边框

请注意上面的表格有双边框。这是因为表格和 th、td 元素都有单独的边框。

如需删除双边框，请看下面的例子。

* * *

### 合并表格边框

`border-collapse` 属性设置是否将表格边框折叠为单一边框：

Firstname| Lastname  
---|---  
Bill| Gates  
Steve| Jobs  
  
#### 实例

```css
table {
  border-collapse: collapse;
}

table, th, td {
  border: 1px solid black;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_table_border-collapse "亲自试一试")

如果只希望表格周围有边框，则仅需为 <table> 指定 `border` 属性：

Firstname| Lastname  
---|---  
Bill| Gates  
Steve| Jobs  
  
#### 实例

```css
table { border: 1px solid black; }
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_table_border_2 "亲自试一试")

* * *

### 表格宽度和高度

表格的宽度和高度由 `width` 和 `height` 属性定义。

下例将表的宽度设置为 100％，将 <th> 元素的高度设置为 50px：

Firstname| Lastname| Savings  
---|---|---  
Bill| Gates| $100  
Steve| Jobs| $150  
Elon| Musk| $300  
  
#### 实例

```css
table {
  width: 100%;
}

th {
  height: 50px;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_table_width_1 "亲自试一试")

要创建仅占页面一半的表，请使用 width: 50%：

#### 实例

```css
table {
  width: 50%;
}

th {
  height: 70px;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_table_width_2 "亲自试一试")

* * *

### 水平对齐

`text-align` 属性设置 <th> 或 <td> 中内容的水平对齐方式（左、右或居中）。

默认情况下，<th> 元素的内容居中对齐，而 <td> 元素的内容左对齐。

要使 <td> 元素的内容也居中对齐，请使用 text-align: center：

Firstname| Lastname| Savings  
---|---|---  
Bill| Gates| $100  
Steve| Jobs| $150  
Elon| Musk| $300  
  
#### 实例

```css
th { text-align: center; }
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_table_align_center "亲自试一试")

下例使 <th> 元素中的文本左对齐：

Firstname| Lastname| Savings  
---|---|---  
Bill| Gates| $100  
Steve| Jobs| $150  
Elon| Musk| $300  
  
#### 实例

```css
th { text-align: left; }
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_table_align "亲自试一试")

* * *

### 垂直对齐

`vertical-align` 属性设置 <th> 或 <td> 中内容的垂直对齐方式（上、下或居中）。

默认情况下，表中内容的垂直对齐是居中（<th> 和 <td> 元素都是）。

下例将 <td> 元素的垂直文本对齐方式设置为下对齐：

Firstname| Lastname| Savings  
---|---|---  
Bill| Gates| $100  
Steve| Jobs| $150  
Elon| Musk| $300  
  
#### 实例

```css
td {
  height: 50px;
  vertical-align: bottom;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_table_vertical-align "亲自试一试")

* * *

### 表格内边距

如需控制边框和表格内容之间的间距，请在 <td> 和 <th> 元素上使用 `padding` 属性：

Firstname| Lastname| Savings  
---|---|---  
Bill| Gates| $100  
Steve| Jobs| $150  
Elon| Musk| $300  
  
#### 实例

```css
th, td {
  padding: 15px;
  text-align: left;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_table_padding "亲自试一试")

* * *

### 水平分隔线

Firstname| Lastname| Savings  
---|---|---  
Bill| Gates| $100  
Steve| Jobs| $150  
Elon| Musk| $300  
  
向 <th> 和 <td> 添加 `border-bottom` 属性，以实现水平分隔线：

#### 实例

```css
th, td {
  border-bottom: 1px solid #ddd;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_table_border_divider "亲自试一试")

* * *

### 可悬停表格

在 <tr> 元素上使用 `:hover` 选择器，以突出显示鼠标悬停时的表格行：

Firstname| Lastname| Savings  
---|---|---  
Bill| Gates| $100  
Steve| Jobs| $150  
Elon| Musk| $300  
  
#### 实例

```css
tr:hover {background-color: #f5f5f5;}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_table_hover "亲自试一试")

* * *

### 条状表格

Firstname| Lastname| Savings  
---|---|---  
Bill| Gates| $100  
Steve| Jobs| $150  
Elon| Musk| $300  
  
为了实现斑马纹表格效果，请使用 `nth-child()` 选择器，并为所有偶数（或奇数）表行添加 `background-color`：

#### 实例

```css
tr:nth-child(even) {background-color: #f2f2f2;}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_table_striped "亲自试一试")

* * *

### 表格颜色

下例指定了 <th> 元素的背景颜色和文本颜色：

Firstname| Lastname| Savings  
---|---|---  
Bill| Gates| $100  
Steve| Jobs| $150  
Elon| Musk| $300  
  
#### 实例

```css
th {
  background-color: #4CAF50;
  color: white;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_table_color "亲自试一试")

* * *

### 响应式表格

如果屏幕太小而无法显示全部内容，则响应式表格会显示水平滚动条：

First Name| Last Name| Points| Points| Points| Points| Points| Points| Points| Points| Points| Points  
---|---|---|---|---|---|---|---|---|---|---|---  
Bill| Gates| 50| 50| 50| 50| 50| 50| 50| 50| 50| 50  
Steve| Jobs| 94| 94| 94| 94| 94| 94| 94| 94| 94| 94  
Elon| Musk| 67| 67| 67| 67| 67| 67| 67| 67| 67| 67  
  
在 <table> 元素周围添加带有 `overflow-x:auto` 的容器元素（例如 <div>），以实现响应式效果：

#### 实例

```html
<div style="overflow-x:auto;">

<table>
... table content ...
</table>

</div>
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_table_responsive "亲自试一试")

注释：在 OS X Lion（在 Mac 上）中，滚动条默认情况下是隐藏的，并且仅在使用时显示（即使设置了 "overflow:scroll"）。

* * *

### 更多实例

[做一张花式表格](https://www.w3school.com.cn/tiy/t.asp?f=css_table_fancy "做一张花式表格")

本例演示如何创建花式表格。

[设置表格标题的位置](https://www.w3school.com.cn/tiy/t.asp?f=css_table_caption-side "设置表格标题的位置")

本例演示了如何放置表格标题。

### CSS 表格属性

属性| 描述  
---|---  
[border](https://www.w3school.com.cn/cssref/pr_border.asp "border")| 简写属性。在一条声明中设置所有边框属性。  
[border-collapse](https://www.w3school.com.cn/cssref/pr_border-collapse.asp "border-collapse")| 规定是否应折叠表格边框。  
[border-spacing](https://www.w3school.com.cn/cssref/pr_border-spacing.asp "border-spacing")| 规定相邻单元格之间的边框的距离。  
[caption-side](https://www.w3school.com.cn/cssref/pr_tab_caption-side.asp "caption-side")| 规定表格标题的位置。  
[empty-cells](https://www.w3school.com.cn/cssref/pr_tab_empty-cells.asp "empty-cells")| 规定是否在表格中的空白单元格上显示边框和背景。  
[table-layout](https://www.w3school.com.cn/cssref/pr_tab_table-layout.asp "table-layout")| 设置用于表格的布局算法。
