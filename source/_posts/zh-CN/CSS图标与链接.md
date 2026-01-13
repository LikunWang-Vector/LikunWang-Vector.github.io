---
title: "CSS图标与链接"
date: 2023-02-02
updated: 2023-02-02
categories:
  - CSS入门、进阶与实战
tags:
  - css
  - 前端
  - bootstrap
  - html5
  - Font Awesome
csdn_views: 607
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128845584
cover: /images/posts/CSS图标与链接/614f6e307c4c.png
lang_pair:
  en: "CSS Icons and Links"
---

> 本文迁移自CSDN博客
> 原文链接：[CSS图标与链接](https://blog.csdn.net/m0_59180666/article/details/128845584)
> 📊 607 阅读 | 👍 1 点赞 | 💬 1 评论 | ⭐ 2 收藏

**目录**  
  
如何添加图标

Font Awesome 图标

实例

Bootstrap 图标

实例

Google 图标

实例

为图标添加样式或颜色

设置链接样式

实例

实例

文本装饰

实例

背景色

实例

链接按钮

实例

更多实例

* * *

![](/images/posts/CSS图标与链接/614f6e307c4c.png)

* * *

### 如何添加图标

向 HTML 页面添加图标的最简单方法是使用图标库，比如 Font Awesome。

将指定的图标类的名称添加到任何行内 HTML 元素（如 <i> 或 <span>）。

下面的图标库中的所有图标都是可缩放矢量，可以使用 CSS进行自定义（大小、颜色、阴影等）。

* * *

### Font Awesome 图标

如需使用 Font Awesome 图标，可以访问 fontawesome.com，登录并获取代码添加到 HTML 页面的 <head> 部分：
    
    
    <script src="https://kit.fontawesome.com/yourcode.js"></script>
    

提示：无需下载或安装！

#### 实例

```html <!DOCTYPE html> <html> <head> <script src="https://kit.fontawesome.com/a076d05399.js"></script> </head> <body> <i class="fas fa-cloud"></i> <i class="fas fa-heart"></i> <i class="fas fa-car"></i> <i class="fas fa-file"></i> <i class="fas fa-bars"></i> </body> </html> ``` 

结果：

![](/images/posts/CSS图标与链接/bf699fe1cb97.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_icons_fontawesome "亲自试一试")

* * *

### Bootstrap 图标

如需使用 Bootstrap glyphicons，请在 HTML 页面的 <head> 部分内添加这行：

```html <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> ``` 

提示：无需下载或安装！

#### 实例

```html <!DOCTYPE html> <html> <head> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> </head> <body> <i class="glyphicon glyphicon-cloud"></i> <i class="glyphicon glyphicon-remove"></i> <i class="glyphicon glyphicon-user"></i> <i class="glyphicon glyphicon-envelope"></i> <i class="glyphicon glyphicon-thumbs-up"></i> </body> </html> ``` 

结果：

![](/images/posts/CSS图标与链接/c56193344acd.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_icons_bootstrap "亲自试一试")

* * *

### Google 图标

如需使用 Google 图标，请在HTML页面的 <head> 部分中添加以下行：

```html <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"> ``` 

提示：无需下载或安装！

#### 实例

```html <!DOCTYPE html> <html> <head> <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"> </head> <body> <i class="material-icons">cloud</i> <i class="material-icons">favorite</i> <i class="material-icons">attachment</i> <i class="material-icons">computer</i> <i class="material-icons">traffic</i> </body> </html> ``` 

结果：

![](/images/posts/CSS图标与链接/910615714e44.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_icons_google "亲自试一试")

### 

* * *

### 为图标添加样式或颜色

上述图标都可以通过style添加样式和颜色：

```html <p>有样式的 Google 图标（尺寸和颜色）：</p> <i class="material-icons" style="font-size:24px;">cloud</i> <i class="material-icons" style="font-size:36px;">cloud</i> <i class="material-icons" style="font-size:48px;color:red;">cloud</i> <i class="material-icons" style="font-size:60px;color:lightblue;">cloud</i> ``` 

运行效果：

![](/images/posts/CSS图标与链接/d7a3d42d5270.png)

* * *

通过 CSS，可以用不同的方式设置链接的样式。

![](/images/posts/CSS图标与链接/d045a47f3a33.png)

* * *

### 设置链接样式

链接可以使用任何 CSS 属性（例如 `color`、`font-family`、`background` 等）来设置样式。

#### 实例

```css a { color: hotpink; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_link_all "亲自试一试")

此外，可以根据链接处于什么状态来设置链接的不同样式。

四种链接状态分别是：

  * `a:link` \- 正常的，未访问的链接
  * `a:visited` \- 用户访问过的链接
  * `a:hover` \- 用户将鼠标悬停在链接上时
  * `a:active` \- 链接被点击时

#### 实例

```css /* 未被访问的链接 */ a:link { color: red; } /* 已被访问的链接 */ a:visited { color: green; } /* 将鼠标悬停在链接上 */ a:hover { color: hotpink; } /* 被选择的链接 */ a:active { color: blue; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_link_1 "亲自试一试")

如果为多个链接状态设置样式，请遵循如下顺序规则：

  * a:hover 必须 a:link 和 a:visited 之后
  * a:active 必须在 a:hover 之后

* * *

### 文本装饰

`text-decoration` 属性主要用于从链接中删除下划线：

#### 实例

```css a:link { text-decoration: none; } a:visited { text-decoration: none; } a:hover { text-decoration: underline; } a:active { text-decoration: underline; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_link_decoration "亲自试一试")

* * *

### 背景色

`background-color` 属性可用于指定链接的背景色：

#### 实例

```css a:link { background-color: yellow; } a:visited { background-color: cyan; } a:hover { background-color: lightgreen; } a:active { background-color: hotpink; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_link_background "亲自试一试")

* * *

### 链接按钮

本例演示了一个更高级的例子，其中我们组合了多个 CSS 属性，将链接显示为框/按钮：

#### 实例

```css a:link, a:visited { background-color: #f44336; color: white; padding: 14px 25px; text-align: center; text-decoration: none; display: inline-block; } a:hover, a:active { background-color: red; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_link_advanced_1 "亲自试一试")

* * *

### 更多实例

[为超链接添加不同的样式](https://www.w3school.com.cn/tiy/t.asp?f=css_link_2 "为超链接添加不同的样式")

本例演示如何向超链接添加其他样式。

[高级 - 创建带边框的链接按钮](https://www.w3school.com.cn/tiy/t.asp?f=css_link_advanced_2 "高级 - 创建带边框的链接按钮")

这是如何创建链接框/按钮的另一个例子。

[改变光标](https://www.w3school.com.cn/tiy/t.asp?f=css_cursor "改变光标")

cursor 属性指定要显示的光标类型。本例演示了不同类型的光标（对链接有用）。
