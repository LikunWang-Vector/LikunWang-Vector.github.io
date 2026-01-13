---
title: "CSS背景：背景色/背景图像/背景重复/背景附着/简写背景属性（一文搞懂）"
date: 2023-01-22
updated: 2023-01-22
categories:
  - CSS入门、进阶与实战
tags:
  - css
  - html
  - 前端
csdn_views: 1167
csdn_likes: 3
csdn_comments: 1
csdn_favorites: 4
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128749392
cover: /images/posts/CSS背景：背景色背景图像背景重复背景附着简写背景属性（一文/c40f39ce08a4.png
lang_pair:
  en: "CSS Backgrounds: Color, Image, Repeat, Attachment, and Shorthand"
---

> 本文迁移自CSDN博客
> 原文链接：[CSS背景：背景色/背景图像/背景重复/背景附着/简写背景属性（一文搞懂）](https://blog.csdn.net/m0_59180666/article/details/128749392)
> 📊 1167 阅读 | 👍 3 点赞 | 💬 1 评论 | ⭐ 4 收藏

**目录**

CSS背景

CSS 背景色

实例

其他元素

实例

不透明度 / 透明度

实例

使用 RGBA 的透明度

实例

CSS 背景图像

实例

实例

实例

CSS 背景重复

实例

实例

CSS background-repeat: no-repeat

实例

CSS background-position

实例

CSS 背景附着

实例

实例

CSS 简写背景属性

实例

所有 CSS 背景属性

总结 

* * *

## CSS背景

CSS 背景属性用于定义元素的背景效果。

我们将学习如下 CSS 背景属性：

  * background-color
  * background-image
  * background-repeat
  * background-attachment
  * background-position

* * *

### CSS 背景色

**`background-color`** 属性指定元素的背景色。

#### 实例

页面的背景色设置如下：

```css body { background-color: lightblue; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_background-color_body "亲自试一试")

通过 CSS，颜色通常由以下方式指定：

  * 有效的颜色名称 - 比如 "red"
  * 十六进制值 - 比如 "#ff0000"
  * RGB 值 - 比如 "rgb(255,0,0)"

请查看 [CSS 颜色值](https://www.w3school.com.cn/cssref/css_colors_legal.asp "CSS 颜色值")，获取可能颜色值的完整列表。

* * *

### 其他元素

可以为任何 HTML 元素设置背景颜色：

#### 实例

在这里，<h1>、<p> 和 <div> 元素将拥有不同的背景色：

```css h1 { background-color: green; } div { background-color: lightblue; } p { background-color: yellow; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_background-color_elements "亲自试一试")

* * *

### 不透明度 / 透明度

opacity 属性指定元素的不透明度/透明度。取值范围为 0.0 - 1.0。值越低，越透明：

![](/images/posts/CSS背景：背景色背景图像背景重复背景附着简写背景属性（一文/c40f39ce08a4.png)

#### 实例

```css div { background-color: green; opacity: 0.3; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_background_opacity_1 "亲自试一试")

注意：使用 **`opacity` **属性为元素的背景添加透明度时，其所有子元素都继承相同的透明度。这可能会使完全透明的元素内的文本难以阅读。

* * *

### 使用 RGBA 的透明度

如果不希望对子元素应用不透明度，例如上面的例子，可以使用  _RGBA_ 颜色值。

下面的例子设置背景色而不是文本的不透明度：

![](/images/posts/CSS背景：背景色背景图像背景重复背景附着简写背景属性（一文/8e3b4b1d97b0.png)

从我们的 [CSS 颜色](https://www.w3school.com.cn/css/css_background.asp "CSS 颜色") 章节中学到了可以将 RGB 用作颜色值。除 RGB 外，还可以将 RGB 颜色值与**_alpha_ **通道一起使用（RGB _A_ ） - 该通道指定颜色的不透明度。

RGBA 颜色值指定为：rgba(_red_ ,  _green_ ,  _blue_ ,  _alpha_)。 _alpha_ 参数是介于 0.0（完全透明）和 1.0（完全不透明）之间的数字。

提示：可在我们的 [CSS 颜色](https://www.w3school.com.cn/css/css_background.asp "CSS 颜色") 一章中学到有关 RGBA 颜色的更多知识。

#### 实例

```css div { background: rgba(0, 128, 0, 0.3) /* 30% 不透明度的绿色背景 */ } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_background_opacity_2 "亲自试一试")

* * *

### CSS 背景图像

**`background-image`** 属性指定用作元素背景的图像。

默认情况下，图像会重复，以覆盖整个元素。

#### 实例

页面的背景图像可以像这样设置：

```css body { background-image: url("paper.gif"); } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_background-image "亲自试一试")

#### 实例

本例展示了文本和背景图像的 _错误组合_ 。文字难以阅读：

```css body { background-image: url("bgdesert.jpg"); } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_background-image_bad "亲自试一试")

注意：使用背景图像时，请使用不会干扰文本的图像。

还可以为特定元素设置背景图像，例如 <p> 元素：

#### 实例

```css p { background-image: url("paper.gif"); } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_background-image_p "亲自试一试")

* * *

### CSS 背景重复

默认情况下，**`background-image` **属性在水平和垂直方向上都重复图像。

某些图像应只适合水平或垂直方向上重复，否则它们看起来会很奇怪，如下所示：

#### 实例

```css body { background-image: url("gradient_bg.png"); } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_background-image_gradient_1 "亲自试一试")

如果上面的图像仅在水平方向重复**(`background-repeat: repeat-x;`)**，则背景看起来会更好：

#### 实例

```css body { background-image: url("gradient_bg.png"); background-repeat: repeat-x; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_background-image_gradient_2 "亲自试一试")

提示：如需垂直重复图像，请设置 **`background-repeat: repeat-y;`** 。

* * *

### CSS background-repeat: no-repeat

**`background-repeat` **属性还可指定只显示一次背景图像：

#### 实例

背景图像仅显示一次：

```css body { background-image: url("tree.png"); background-repeat: no-repeat; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_background-image_norepeat "亲自试一试")

在上例中，背景图像与文本放置在同一位置。我们想要更改图像的位置，以免图像过多干扰文本。

* * *

### CSS background-position

**`background-position`** 属性用于指定背景图像的位置。

#### 实例

把背景图片放在右上角：

```css body { background-image: url("tree.png"); background-repeat: no-repeat; background-position: right top; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_background-image_position "亲自试一试")

* * *

### CSS 背景附着

**`background-attachment` **属性指定背景图像是应该滚动还是固定的（不会随页面的其余部分一起滚动）：

#### 实例

指定应该固定背景图像：

```css body { background-image: url("tree.png"); background-repeat: no-repeat; background-position: right top; background-attachment: fixed; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_background-image_attachment_1 "亲自试一试")

#### 实例

指定背景图像应随页面的其余部分一起滚动：

```css body { background-image: url("tree.png"); background-repeat: no-repeat; background-position: right top; background-attachment: scroll; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_background-image_attachment_2 "亲自试一试")

* * *

### CSS 简写背景属性

如需缩短代码，也可以在一个属性中指定所有背景属性。它被称为简写属性。

而不是这样写：

```css body { background-color: #ffffff; background-image: url("tree.png"); background-repeat: no-repeat; background-position: right top; } ``` 

您能够使用简写属性 **`background`：**

#### 实例

使用简写属性在一条声明中设置背景属性：

```css body { background: #ffffff url("tree.png") no-repeat right top; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_background_shorthand "亲自试一试")

在使用简写属性时，属性值的**顺序** 为：

>   * background-color
>   * background-image
>   * background-repeat
>   * background-attachment
>   * background-position
> 

属性值之一缺失并不要紧，只要按照此顺序设置其他值即可。请注意，在上面的例子中，我们没有使用 background-attachment 属性，因为它没有值。

* * *

### 所有 CSS 背景属性

属性| 描述  
---|---  
[background](https://www.w3school.com.cn/cssref/pr_background.asp "background")| 在一条声明中设置所有背景属性的简写属性。  
[background-attachment](https://www.w3school.com.cn/cssref/pr_background-attachment.asp "background-attachment")| 设置背景图像是固定的还是与页面的其余部分一起滚动。  
[background-clip](https://www.w3school.com.cn/cssref/pr_background-clip.asp "background-clip")| 规定背景的绘制区域。  
[background-color](https://www.w3school.com.cn/cssref/pr_background-color.asp "background-color")| 设置元素的背景色。  
[background-image](https://www.w3school.com.cn/cssref/pr_background-image.asp "background-image")| 设置元素的背景图像。  
[background-origin](https://www.w3school.com.cn/cssref/pr_background-origin.asp "background-origin")| 规定在何处放置背景图像。  
[background-position](https://www.w3school.com.cn/cssref/pr_background-position.asp "background-position")| 设置背景图像的开始位置。  
[background-repeat](https://www.w3school.com.cn/cssref/pr_background-repeat.asp "background-repeat")| 设置背景图像是否及如何重复。  
[background-size](https://www.w3school.com.cn/cssref/pr_background-size.asp "background-size")| 规定背景图像的尺寸。  
  
* * *

## 总结 

本节介绍了CSS背景相关知识。
