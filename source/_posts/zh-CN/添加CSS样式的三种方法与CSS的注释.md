---
title: "添加CSS样式的三种方法与CSS的注释"
date: 2023-01-21
updated: 2023-01-21
categories:
  - CSS入门、进阶与实战
tags:
  - css
  - html
  - 前端
csdn_views: 2426
csdn_likes: 5
csdn_comments: 2
csdn_favorites: 8
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128746411
lang_pair:
  en: "Three Ways to Add CSS and CSS Comments"
---

> 本文迁移自CSDN博客
> 原文链接：[添加CSS样式的三种方法与CSS的注释](https://blog.csdn.net/m0_59180666/article/details/128746411)
> 📊 2426 阅读 | 👍 5 点赞 | 💬 2 评论 | ⭐ 8 收藏

**目录**

三种使用 CSS 的方法

外部 CSS

实例

"mystyle.css"

内部 CSS

实例

行内 CSS

实例

多个样式表

实例

实例

层叠顺序

CSS 注释

实例

实例

实例

HTML 和 CSS 注释

实例

* * *

当浏览器读到样式表时，它将根据样式表中的信息来格式化 HTML 文档。

* * *

### 三种使用 CSS 的方法

有三种插入样式表的方法：

  * 外部 CSS
  * 内部 CSS
  * 行内 CSS

* * *

### 外部 CSS

通过使用外部样式表，只需修改一个文件即可改变整个网站的外观！

每张 HTML 页面必须在 head 部分的 <link> 元素内包含对外部样式表文件的引用。

#### 实例

外部样式在 HTML 页面 <head> 部分内的 <link> 元素中进行定义：

```html <!DOCTYPE html> <html> <head> <link rel="stylesheet" type="text/css" href="mystyle.css"> </head> <body> <h1>This is a heading</h1> <p>This is a paragraph.</p> </body> </html> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_howto_external "亲自试一试")

外部样式表可以在任何文本编辑器中编写，并且必须以 .css 扩展名保存。

外部 .css 文件不应包含任何 HTML 标签。

"mystyle.css" 是这样的：

#### "mystyle.css"

```css body { background-color: lightblue; } h1 { color: navy; margin-left: 20px; } ``` 

> 注意：请勿在属性值和单位之间添加空格（例如 **`margin-left: 20 px;`** ）。正确的写法是：**`margin-left: 20px;`**

* * *

### 内部 CSS

如果一张 HTML 页面拥有唯一的样式，那么可以使用内部样式表。

内部样式是在 head 部分的 <style> 元素中进行定义。

#### 实例

内部样式在 HTML 页面的 <head> 部分内的 <style> 元素中进行定义：

```html <!DOCTYPE html> <html> <head> <style> body { background-color: linen; } h1 { color: maroon; margin-left: 40px; } </style> </head> <body> <h1>This is a heading</h1> <p>This is a paragraph.</p> </body> </html> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_howto_internal "亲自试一试")

* * *

### 行内 CSS

行内样式（也称内联样式）可用于为单个元素应用唯一的样式。

如需使用行内样式，可将 style 属性添加到相关元素。style 属性可包含任何 CSS 属性。

#### 实例

行内样式在相关元素的 "style" 属性中定义：

```html <!DOCTYPE html> <html> <body> <h1 style="color:blue;text-align:center;">This is a heading</h1> <p style="color:red;">This is a paragraph.</p> </body> </html> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_howto_inline "亲自试一试")

> 提示：行内样式失去了样式表的许多优点（通过将内容与呈现混合在一起）。请谨慎使用此方法。

* * *

### 多个样式表

如果在不同样式表中为同一选择器（元素）定义了一些属性，则将使用**最后读取的** 样式表中的值。

假设某个 _外部样式表_ 为 <h1> 元素设定的如下样式：

```css h1 { color: navy; } ``` 

然后，假设某个 _内部样式表_ 也为 <h1> 元素设置了如下样式：

```css h1 { color: orange; } ``` 

#### 实例

如果内部样式是在链接到外部样式表 _之后_ 定义的，则 <h1> 元素**将是橙色** ：

```html <head> <link rel="stylesheet" type="text/css" href="mystyle.css"> <style> h1 { color: orange; } </style> </head> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_howto_multiple_1 "亲自试一试")

#### 实例

不过，如果在链接到外部样式表 _之前_ 定义了内部样式，则 <h1> 元素将是深蓝色：

```html <head> <style> h1 { color: orange; } </style> <link rel="stylesheet" type="text/css" href="mystyle.css"> </head> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_howto_multiple_2 "亲自试一试")

* * *

### 层叠顺序

当为某个 HTML 元素指定了多个样式时，会使用哪种样式呢？

页面中的所有样式将按照以下规则“层叠”为新的“虚拟”样式表，其中第一优先级最高：

  1. 行内样式（在 HTML 元素中）
  2. 外部和内部样式表（在 head 部分）
  3. 浏览器默认样式

> 因此，**行内样式具有最高优先级，并且将覆盖外部和内部样式以及浏览器默认样式。**

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_howto_cascade "亲自试一试")

* * *

### CSS 注释

注释用于解释代码，以后在您编辑源代码时可能会有所帮助。

浏览器会忽略注释。

> 位于**`<style>` **元素内的 CSS 注释，以 `/*` 开始，以 `*/` 结束

#### 实例

```css /* 这是一条单行注释 */ p { color: red; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_comments_1 "亲自试一试")

可以在代码中的任何位置添加注释：

#### 实例

```css p { color: red; /* 把文本设置为红色 */ } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_comments_2 "亲自试一试")

注释能横跨多行：

#### 实例

```css /* 这是 一条多行的 注释 */ p { color: red; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_comments_3 "亲自试一试")

### HTML 和 CSS 注释

从 HTML 教程中，学习到可以使用 **`<!--...-->` **语法在 HTML 源代码中添加注释。

在下面的例子中，我们结合使用了 HTML 和 CSS 注释：

#### 实例

```html <!DOCTYPE html> <html> <head> <style> p { color: red; /* 将文字颜色设置为红色 */ } </style> </head> <body> <h2>My Heading</h2> <!-- 这些段落将是红色的 --> <p>Hello World!</p> <p>这段文本由 CSS 设置样式。</p> <p>CSS 注释不会在输出中显示。</p> </body> </html> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_comments_4 "亲自试一试")
