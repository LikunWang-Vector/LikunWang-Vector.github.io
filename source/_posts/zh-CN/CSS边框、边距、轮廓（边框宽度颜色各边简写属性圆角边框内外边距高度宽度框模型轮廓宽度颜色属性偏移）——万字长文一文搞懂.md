---
title: "CSS边框、边距、轮廓（边框宽度/颜色/各边/简写属性/圆角边框/内外边距/高度宽度/框模型/轮廓宽度/颜色/属性/偏移）——万字长文|一文搞懂"
date: 2023-01-24
updated: 2023-01-24
categories:
  - CSS入门、进阶与实战
tags:
  - css
  - 前端
  - html
csdn_views: 4449
csdn_likes: 8
csdn_comments: 1
csdn_favorites: 35
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128749990
cover: /images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/236d3a4575f9.png
lang_pair:
  en: "CSS Borders, Margins, and Outlines - Complete Guide"
---

> 本文迁移自CSDN博客
> 原文链接：[CSS边框、边距、轮廓（边框宽度/颜色/各边/简写属性/圆角边框/内外边距/高度宽度/框模型/轮廓宽度/颜色/属性/偏移）——万字长文|一文搞懂](https://blog.csdn.net/m0_59180666/article/details/128749990)
> 📊 4449 阅读 | 👍 8 点赞 | 💬 1 评论 | ⭐ 35 收藏

**目录**  
  
CSS边框

CSS 边框属性

CSS 边框样式

实例

CSS 边框宽度

实例

特定边的宽度

实例

CSS 边框颜色

实例

特定边框的颜色

实例

HEX 值

实例

RGB 值

实例

HSL 值

实例

CSS 边框 - 单独的边

实例

不同的边框样式

实例

它的工作原理是这样的：

border-style: dotted solid double dashed;

border-style: dotted solid double;

border-style: dotted solid;

border-style: dotted;

实例

CSS Border - 简写属性

实例

左边框

下边框

CSS 圆角边框

实例

更多实例

所有 CSS 边框属性

CSS 外边距

Margin - 单独的边

实例

Margin - 简写属性

工作原理是这样的：

实例

实例

实例

实例

auto 值

实例

inherit 值

实例

延伸阅读

外边距合并

所有 CSS 外边距属性

CSS 内边距

Padding - 单独的边

实例

Padding - 简写属性

工作原理是这样的：

实例

实例

实例

实例

内边距和元素宽度

实例

实例

更多实例

所有 CSS 内边距属性

延伸阅读

CSS 设置高度和宽度

CSS 高度和宽度值

CSS 高度和宽度实例

实例

实例

设置 max-width

实例

亲自试一试 - 实例

设置 CSS 尺寸属性

CSS 框模型

实例

元素的宽度和高度

实例

​编辑

CSS 轮廓

CSS 轮廓样式

实例

CSS 轮廓宽度

实例

CSS 轮廓颜色

实例

HEX 值

实例

RGB 值

实例

HSL 值

实例

反转颜色

实例

CSS Outline - 简写属性

实例

CSS 轮廓偏移

实例

实例

所有 CSS 轮廓属性

总结

* * *

## CSS边框

* * *

### CSS 边框属性

CSS `border` 属性允许指定元素边框的样式、宽度和颜色。

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/236d3a4575f9.png)

* * *

### CSS 边框样式

`border-style` 属性指定要显示的边框类型。

允许以下值：

>   * `dotted` \- 定义点线边框
>   * `dashed` \- 定义虚线边框
>   * `solid` \- 定义实线边框
>   * `double` \- 定义双边框
>   * `groove` \- 定义 3D 坡口边框。效果取决于 border-color 值
>   * `ridge` \- 定义 3D 脊线边框。效果取决于 border-color 值
>   * `inset` \- 定义 3D inset 边框。效果取决于 border-color 值
>   * `outset` \- 定义 3D outset 边框。效果取决于 border-color 值
>   * `none` \- 定义无边框
>   * `hidden` \- 定义隐藏边框
> 

`border-style` 属性可以设置一到四个值（用于上边框、右边框、下边框和左边框）。

#### 实例

演示不同的边框样式：

```css p.dotted {border-style: dotted;} p.dashed {border-style: dashed;} p.solid {border-style: solid;} p.double {border-style: double;} p.groove {border-style: groove;} p.ridge {border-style: ridge;} p.inset {border-style: inset;} p.outset {border-style: outset;} p.none {border-style: none;} p.hidden {border-style: hidden;} p.mix {border-style: dotted dashed solid double;} ``` 

结果：

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/4877148d697b.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_border-style "亲自试一试")

注意：除非设置了 `border-style` 属性，否则其他 CSS 边框属性都不会有任何作用！

* * *

### CSS 边框宽度

`border-width` 属性指定四个边框的宽度。

可以将宽度设置为特定大小（以 px、pt、cm、em 计），也可以使用以下三个预定义值之一：thin、medium 或 thick：

#### 实例

演示不同的边框宽度：

```css p.one { border-style: solid; border-width: 5px; } p.two { border-style: solid; border-width: medium; } p.three { border-style: dotted; border-width: 2px; } p.four { border-style: dotted; border-width: thick; } ``` 

结果：

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/b086110b8568.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_border-width_1 "亲自试一试")

* * *

### 特定边的宽度

`border-width` 属性可以设置一到四个值（用于上边框、右边框、下边框和左边框）：

#### 实例

```css p.one { border-style: solid; border-width: 5px 20px; /* 上边框和下边框为 5px，其他边为 20px */ } p.two { border-style: solid; border-width: 20px 5px; /* 上边框和下边框为 20px，其他边为 5px */ } p.three { border-style: solid; border-width: 25px 10px 4px 35px; /* 上边框 25px，右边框 10px，下边框 4px，左边框 35px */ } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_border-width_2 "亲自试一试")

* * *

### CSS 边框颜色

`border-color` 属性用于设置四个边框的颜色。

可以通过以下方式设置颜色：

>   * name - 指定颜色名，比如 "red"
>   * HEX - 指定十六进制值，比如 "#ff0000"
>   * RGB - 指定 RGB 值，比如 "rgb(255,0,0)"
>   * HSL - 指定 HSL 值，比如 "hsl(0, 100%, 50%)"
>   * transparent
> 

注释：如果未设置 `border-color`，则它将继承元素的颜色。

#### 实例

演示不同的边框颜色：

```css p.one { border-style: solid; border-color: red; } p.two { border-style: solid; border-color: green; } p.three { border-style: dotted; border-color: blue; } ``` 

结果：

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/e0255c0fa3b1.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_border-color_1 "亲自试一试")

* * *

### 特定边框的颜色

`border-color` 属性可以设置一到四个值（用于上边框、右边框、下边框和左边框）。

#### 实例

```css p.one { border-style: solid; border-color: red green blue yellow; /* 上红、右绿、下蓝、左黄 */ } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_border-color_2 "亲自试一试")

* * *

### HEX 值

边框的颜色也可以使用十六进制值（HEX）来指定：

#### 实例

```css p.one { border-style: solid; border-color: #ff0000; /* 红色 */ } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_border-color-hex "亲自试一试")

* * *

### RGB 值

或者使用 RGB 值：

#### 实例

```css p.one { border-style: solid; border-color: rgb(255, 0, 0); /* 红色 */ } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_border-color-rgb "亲自试一试")

### HSL 值

也可以使用 HSL 值：

#### 实例

```css p.one { border-style: solid; border-color: hsl(0, 100%, 50%); /* 红色 */ } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_border-color-hsl "亲自试一试")

> 可以在 [CSS 颜色](https://www.w3school.com.cn/css/css_colors.asp "CSS 颜色") 章节中学到有关 HEX、RGB 和 HSL 值的更多知识。

* * *

### CSS 边框 - 单独的边

从上面的例子中，我们已经发现可以为每一侧指定不同的边框。

在 CSS 中，还有一些属性可用于指定每个边框（顶部、右侧、底部和左侧）：

#### 实例

```css p { border-top-style: dotted; border-right-style: solid; border-bottom-style: dotted; border-left-style: solid; } ``` 

结果：

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/fba18183b437.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_border-side_1 "亲自试一试")

* * *

### 不同的边框样式

上例的结果与此相同：

#### 实例

```css p { border-style: dotted solid; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_border-side_2 "亲自试一试")

#### 它的工作原理是这样的：

如果 `border-style` 属性设置四个值：

#### border-style: dotted solid double dashed;

  * 上边框是虚线
  * 右边框是实线
  * 下边框是双线
  * 左边框是虚线

如果 `border-style` 属性设置三个值：

#### border-style: dotted solid double;

  * 上边框是虚线
  * 右和左边框是实线
  * 下边框是双线

如果 `border-style` 属性设置两个值：

#### border-style: dotted solid;

  * 上和下边框是虚线
  * 右和左边框是实线

如果 `border-style` 属性设置一个值：

#### border-style: dotted;

  * 四条边均为虚线

#### 实例

```css /* 四个值 */ p { border-style: dotted solid double dashed; } /* 三个值 */ p { border-style: dotted solid double; } /* 两个值 */ p { border-style: dotted solid; } /* 一个值 */ p { border-style: dotted; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_border-side_3 "亲自试一试")

上例中使用的是 `border-style` 属性。但 `border-width` 和 `border-color` 也同样适用。

* * *

### CSS Border - 简写属性

就像我们如上所见，处理边框时要考虑许多属性。

为了缩减代码，也可以在一个属性中指定所有单独的边框属性。

`border` 属性是以下各个边框属性的简写属性：

>   * `border-width`
>   * `border-style`（必需）
>   * `border-color`
> 

#### 实例

```css p { border: 5px solid red; } ``` 

结果：

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/ba367d2155a4.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_border "亲自试一试")

我们还可以只为一个边指定所有单个边框属性：

#### 左边框

```css p { border-left: 6px solid red; background-color: lightgrey; } ``` 

结果：

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/6c777e498e65.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_border_left "亲自试一试")

#### 下边框

```css p { border-bottom: 6px solid red; background-color: lightgrey; } ``` 

结果：

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/3943115f6043.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_border_bottom "亲自试一试")

* * *

### CSS 圆角边框

`border-radius` 属性用于向元素添加圆角边框：

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/0fb27d8e88ee.png)

#### 实例

```css p { border: 2px solid red; border-radius: 5px; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_border_round "亲自试一试")

* * *

### 更多实例

[一个声明中的所有上边框属性](https://www.w3school.com.cn/tiy/t.asp?f=css_border-top "一个声明中的所有上边框属性")

本例演示简写属性，用于在一条声明中设置上边框的所有属性。

[设置下边框的样式](https://www.w3school.com.cn/tiy/t.asp?f=css_border-bottom-style "设置下边框的样式")

本例演示如何设置下边框的样式。

[设置左边框的宽度](https://www.w3school.com.cn/tiy/t.asp?f=css_border-left-width "设置左边框的宽度")

本例演示如何设置左边框的宽度。

[设置四条边框的颜色](https://www.w3school.com.cn/tiy/t.asp?f=css_border-color "设置四条边框的颜色")

本例演示如何设置四条边框的颜色。它可以拥有一到四种颜色。

[设置右边框的颜色](https://www.w3school.com.cn/tiy/t.asp?f=css_border-right-color "设置右边框的颜色")

本例演示如何设置右边框的颜色。

* * *

### 所有 CSS 边框属性

属性| 描述  
---|---  
[border](https://www.w3school.com.cn/cssref/pr_border.asp "border")| 简写属性，在一条声明中设置所有边框属性。  
[border-color](https://www.w3school.com.cn/cssref/pr_border-color.asp "border-color")| 简写属性，设置四条边框的颜色。  
[border-radius](https://www.w3school.com.cn/cssref/pr_border-radius.asp "border-radius")| 简写属性，可设置圆角的所有四个 border-*-radius 属性。  
[border-style](https://www.w3school.com.cn/cssref/pr_border-style.asp "border-style")| 简写属性，设置四条边框的样式。  
[border-width](https://www.w3school.com.cn/cssref/pr_border-width.asp "border-width")| 简写属性，设置四条边框的宽度。  
[border-bottom](https://www.w3school.com.cn/cssref/pr_border-bottom.asp "border-bottom")| 简写属性，在一条声明中设置所有下边框属性。  
[border-bottom-color](https://www.w3school.com.cn/cssref/pr_border-bottom-color.asp "border-bottom-color")| 设置下边框的颜色。  
[border-bottom-style](https://www.w3school.com.cn/cssref/pr_border-bottom-style.asp "border-bottom-style")| 设置下边框的样式。  
[border-bottom-width](https://www.w3school.com.cn/cssref/pr_border-bottom-width.asp "border-bottom-width")| 设置下边框的宽度。  
[border-left](https://www.w3school.com.cn/cssref/pr_border-left.asp "border-left")| 简写属性，在一条声明中设置所有左边框属性。  
[border-left-color](https://www.w3school.com.cn/cssref/pr_border-left-color.asp "border-left-color")| 设置左边框的颜色。  
[border-left-style](https://www.w3school.com.cn/cssref/pr_border-left-style.asp "border-left-style")| 设置左边框的样式。  
[border-left-width](https://www.w3school.com.cn/cssref/pr_border-left-width.asp "border-left-width")| 设置左边框的宽度。  
[border-right](https://www.w3school.com.cn/cssref/pr_border-right.asp "border-right")| 简写属性，在一条声明中设置所有右边框属性。  
[border-right-color](https://www.w3school.com.cn/cssref/pr_border-right-color.asp "border-right-color")| 设置右边框的颜色。  
[border-right-style](https://www.w3school.com.cn/cssref/pr_border-right-style.asp "border-right-style")| 设置右边框的样式。  
[border-right-width](https://www.w3school.com.cn/cssref/pr_border-right-width.asp "border-right-width")| 设置右边框的宽度。  
[border-top](https://www.w3school.com.cn/cssref/pr_border-top.asp "border-top")| 简写属性，在一条声明中设置所有上边框属性。  
[border-top-color](https://www.w3school.com.cn/cssref/pr_border-top-color.asp "border-top-color")| 设置上边框的颜色。  
[border-top-style](https://www.w3school.com.cn/cssref/pr_border-top-style.asp "border-top-style")| 设置上边框的样式。  
[border-top-width](https://www.w3school.com.cn/cssref/pr_border-top-width.asp "border-top-width")| 设置上边框的宽度。  
  
* * *

  * [CSS 圆角边框](https://www.w3school.com.cn/css/css_border_rounded.asp "CSS 圆角边框")
  * [CSS 外边距合并](https://www.w3school.com.cn/css/css_margin_collapse.asp "CSS 外边距合并")

* * *

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/3e818e30dc45.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_margin_intro "亲自试一试")

* * *

### CSS 外边距

CSS `margin` 属性用于在任何定义的边框之外，为元素周围创建空间。

通过 CSS，可以完全控制外边距。有些属性可用于设置元素每侧（上、右、下和左）的外边距。

* * *

### Margin - 单独的边

CSS 拥有用于为元素的每一侧指定外边距的属性：

>   * `margin-top`
>   * `margin-right`
>   * `margin-bottom`
>   * `margin-left`
> 

所有外边距属性都可以设置以下值：

>   * auto - 浏览器来计算外边距
>   *  _length_ \- 以 px、pt、cm 等单位指定外边距
>   * % - 指定以包含元素宽度的百分比计的外边距
>   * inherit - 指定应从父元素继承外边距
> 

提示：允许负值。

#### 实例

为 <p> 元素的所有四个边设置不同的外边距：

```css p { margin-top: 100px; margin-bottom: 100px; margin-right: 150px; margin-left: 80px; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_margin_sides "亲自试一试")

* * *

### Margin - 简写属性

为了缩减代码，可以在一个属性中指定所有外边距属性。

`margin` 属性是以下各外边距属性的简写属性：

>   * `margin-top`
>   * `margin-right`
>   * `margin-bottom`
>   * `margin-left`
> 

#### 工作原理是这样的：

如果 `margin` 属性有四个值：

  * margin: 25px 50px 75px 100px; 
    * 上外边距是 25px
    * 右外边距是 50px
    * 下外边距是 75px
    * 左外边距是 100px

#### 实例

margin 简写属性设置四个值：

```css p { margin: 25px 50px 75px 100px; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_margin_shorthand_4value "亲自试一试")

如果 `margin` 属性设置三个值：

  * margin: 25px 50px 75px; 
    * 上外边距是 25px
    * 右和左外边距是 50px
    * 下外边距是 75px

#### 实例

使用已设置三个值的  `margin` 简写属性：

```css p { margin: 25px 50px 75px; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_margin_shorthand_3value "亲自试一试")

如果 `margin`属性设置两个值：

  * margin: 25px 50px; 
    * 上和下外边距是 25px
    * 右和左外边距是 50px

#### 实例

使用设置了两个值的 margin 简写属性：

```css p { margin: 25px 50px; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_margin_shorthand_2value "亲自试一试")

如果 `margin` 属性设置了一个值：

  * margin: 25px; 
    * 所有四个外边距都是 25px

#### 实例

使用设置一个值的 margin 简写属性：

```css p { margin: 25px; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_margin_shorthand_1value "亲自试一试")

* * *

### auto 值

我们可以将 margin 属性设置为 `auto`，以使元素在其容器中水平居中。

然后，该元素将占据指定的宽度，并且剩余空间将在左右边界之间平均分配。

#### 实例

使用 `margin: auto`：

```css div { width: 300px; margin: auto; border: 1px solid red; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_margin_auto "亲自试一试")

* * *

### inherit 值

本例使 <p class="ex1"> 元素的左外边距继承自父元素（<div>）：

#### 实例

使用 inherit 值：

```css div { border: 1px solid red; margin-left: 100px; } p.ex1 { margin-left: inherit; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_margin-left_inherit "亲自试一试")

* * *

### 延伸阅读

[框模型：CSS 外边距](https://www.w3school.com.cn/css/pro_css_margin.asp "框模型：CSS 外边距")

* * *

**外边距合并指的是，当两个垂直外边距相遇时，它们将形成一个外边距。**

**合并后的外边距的高度等于两个发生合并的外边距的高度中的较大者。**

* * *

### 外边距合并

外边距合并（叠加）是一个相当简单的概念。但是，在实践中对网页进行布局时，它会造成许多混淆。

简单地说，外边距合并指的是：当两个垂直外边距相遇时，它们将形成一个外边距。合并后的外边距的高度等于两个发生合并的外边距的高度中的较大者。

当一个元素出现在另一个元素上面时，第一个元素的下外边距与第二个元素的上外边距会发生合并。请看下图：

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/1bfc183ce442.gif)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_csse_margin_collapsing1 "亲自试一试")

当一个元素包含在另一个元素中时（假设没有内边距或边框把外边距分隔开），它们的上和/或下外边距也会发生合并。请看下图：

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/5d91330e700e.gif)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_csse_margin_collapsing2 "亲自试一试")

尽管看上去有些奇怪，但是外边距甚至可以与自身发生合并。

假设有一个**空元素** ，它有外边距，但是没有边框或填充。在这种情况下，上外边距与下外边距就碰到了一起，它们会发生合并：

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/ba47f66e7051.gif)

如果这个外边距遇到另一个元素的外边距，它还会发生合并：

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/2c8026428c43.gif)

这就是一系列的段落元素占用空间非常小的原因，因为它们的所有外边距都合并到一起，形成了一个小的外边距。

外边距合并初看上去可能有点奇怪，但是实际上，它是有意义的。

以由几个段落组成的典型文本页面为例。第一个段落上面的空间等于段落的上外边距。如果没有外边距合并，后续所有段落之间的外边距都将是相邻上外边距和下外边距的和。这意味着段落之间的空间是页面顶部的两倍。如果发生**外边距合并** ，段落之间的上外边距和下外边距就合并在一起，这样**各处的距离就一致了** 。

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/f522dc9301f6.gif)

注释：只有普通文档流中块框的垂直外边距才会发生外边距合并。行内框、浮动框或绝对定位之间的外边距不会合并。

* * *

### 所有 CSS 外边距属性

属性| 描述  
---|---  
[margin](https://www.w3school.com.cn/cssref/pr_margin.asp "margin")| 用于在一条声明中设置外边距属性的简写属性。  
[margin-bottom](https://www.w3school.com.cn/cssref/pr_margin-bottom.asp "margin-bottom")| 设置元素的下外边距。  
[margin-left](https://www.w3school.com.cn/cssref/pr_margin-left.asp "margin-left")| 设置元素的左外边距。  
[margin-right](https://www.w3school.com.cn/cssref/pr_margin-right.asp "margin-right")| 设置元素的右外边距。  
[margin-top](https://www.w3school.com.cn/cssref/pr_margin-top.asp "margin-top")| 设置元素的上外边距。  
  
* * *

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/ff65aa8439d3.png)

* * *

### CSS 内边距

CSS `padding` 属性用于在任何定义的边界内的元素内容周围生成空间。

通过 CSS，我们可以完全控制内边距（填充）。有一些属性可以为元素的每一侧（上、右、下和左侧）设置内边距。

* * *

### Padding - 单独的边

CSS 拥有用于为元素的每一侧指定内边距的属性：

>   * `padding-top`
>   * `padding-right`
>   * `padding-bottom`
>   * `padding-left`
> 

所有内边距属性都可以设置以下值：

  * _length_ \- 以 px、pt、cm 等单位指定内边距
  * % - 指定以包含元素宽度的百分比计的内边距
  * inherit - 指定应从父元素继承内边距

提示：**不允许** 负值。

#### 实例

为 <div> 元素的所有四个边设置不同的内边距：

```css div { padding-top: 50px; padding-right: 30px; padding-bottom: 50px; padding-left: 80px; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_padding_sides "亲自试一试")

* * *

### Padding - 简写属性

为了缩减代码，可以在一个属性中指定所有内边距属性。

`padding` 属性是以下各内边距属性的简写属性：

>   * `padding-top`
>   * `padding-right`
>   * `padding-bottom`
>   * `padding-left`
> 

#### 工作原理是这样的：

如果 `padding` 属性有四个值：

  * padding: 25px 50px 75px 100px; 
    * 上内边距是 25px
    * 右内边距是 50px
    * 下内边距是 75px
    * 左内边距是 100px

#### 实例

使用设置了四个值的 padding 简写属性：

```css div { padding: 25px 50px 75px 100px; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_padding_shorthand_4value "亲自试一试")

如果 `padding` 属性设置了三个值：

  * padding: 25px 50px 75px; 
    * 上内边距是 25px
    * 右和左内边距是 50px
    * 下内边距是 75px

#### 实例

使用设置了三个值的 padding 简写属性：

```css div { padding: 25px 50px 75px; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_padding_shorthand_3value "亲自试一试")

如果 `padding` 属性设置了两个值：

  * padding: 25px 50px; 
    * 上和下内边距是 25px
    * 右和左内边距是 50px

#### 实例

使用设置了两个值的 padding 简写属性：

```css div { padding: 25px 50px; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_padding_shorthand_2value "亲自试一试")

如果 `padding` 属性设置了一个值：

  * padding: 25px; 
    * 所有四个内边距都是 25px

#### 实例

使用设置了一个值的 padding 简写属性：

```css div { padding: 25px; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_padding_shorthand_1value "亲自试一试")

* * *

### 内边距和元素宽度

CSS `width` 属性指定元素内容区域的宽度。内容区域是元素（盒模型）的内边距、边框和外边距内的部分。

因此，如果元素拥有指定的宽度，则添加到该元素的内边距会添加到元素的总宽度中。这通常是不希望的结果。

#### 实例

在这里，<div> 元素的宽度为 300px。但是，<div> 元素的实际宽度将是 350px（300px + 左内边距 25px + 右内边距 25px）：

```css div { width: 300px; padding: 25px; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_padding_width_1 "亲自试一试")

若要将宽度保持为 300px，无论填充量如何，那么我们可以使用 `box-sizing` 属性。这将导致元素保持其宽度。如果增加内边距，则可用的内容空间会减少。

#### 实例

使用 box-sizing 属性将宽度保持为 300px，无论填充量如何：

```css div { width: 300px; padding: 25px; box-sizing: border-box; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_padding_width_2 "亲自试一试")

* * *

### 更多实例

[设置左内边距](https://www.w3school.com.cn/css/css_padding.asp "设置左内边距")

本例演示如何设置 <p> 元素的左内边距。

[设置右内边距](https://www.w3school.com.cn/css/css_padding.asp "设置右内边距")

本例演示如何设置 <p> 元素的右内边距。

[设置上内边距](https://www.w3school.com.cn/css/css_padding.asp "设置上内边距")

本例演示如何设置 <p> 元素的上内边距。

[设置下内边距](https://www.w3school.com.cn/css/css_padding.asp "设置下内边距")

本例演示如何设置 <p> 元素的下内边距。

* * *

### 所有 CSS 内边距属性

属性| 描述  
---|---  
[padding](https://www.w3school.com.cn/cssref/pr_padding.asp "padding")| 用于在一条声明中设置所有内边距属性的简写属性。  
[padding-bottom](https://www.w3school.com.cn/cssref/pr_padding-bottom.asp "padding-bottom")| 设置元素的下内边距。  
[padding-left](https://www.w3school.com.cn/cssref/pr_padding-left.asp "padding-left")| 设置元素的左内边距。  
[padding-right](https://www.w3school.com.cn/cssref/pr_padding-right.asp "padding-right")| 设置元素的右内边距。  
[padding-top](https://www.w3school.com.cn/cssref/pr_padding-top.asp "padding-top")| 设置元素的上内边距。  
  
* * *

### 延伸阅读

课外书：[框模型：CSS 内边距](https://www.w3school.com.cn/css/pro_css_padding.asp "框模型：CSS 内边距")

* * *

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/056ce525f26d.png)

* * *

### CSS 设置高度和宽度

`height` 和 `width` 属性用于设置元素的高度和宽度。

height 和 width 属性不包括内边距、边框或外边距。它设置的是元素内边距、边框以及外边距内的区域的高度或宽度。

* * *

### CSS 高度和宽度值

`height` 和 `width` 属性可设置如下值：

>   * `auto` \- 默认。浏览器计算高度和宽度。
>   * ` _length_` \- 以 px、cm 等定义高度/宽度。
>   * `%` \- 以包含块的百分比定义高度/宽度。
>   * `initial` \- 将高度/宽度设置为默认值。
>   * `inherit` \- 从其父值继承高度/宽度。
> 

* * *

### CSS 高度和宽度实例

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/10f6d61f1b57.png)

#### 实例

设置 <div> 元素的高度和宽度：

```css div { height: 200px; width: 50%; background-color: powderblue; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_dim_height_width_1 "亲自试一试")

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/693e459223bb.png)

#### 实例

设置另一个 <div> 元素的高度和宽度：

```css div { height: 100px; width: 500px; background-color: powderblue; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_dim_height_width_2 "亲自试一试")

注意：请记住，`height` 和 `width` 属性不包括内边距、边框或外边距！它们设置的是元素的内边距、边框和外边距内的区域的高度/宽度！

* * *

### 设置 max-width

`max-width` 属性用于设置元素的最大宽度。

可以用长度值（例如 px、cm 等）或包含块的百分比（％）来指定 max-width（最大宽度），也可以将其设置为 none（默认值。意味着没有最大宽度）。

当浏览器窗口小于元素的宽度（500px）时，会发生之前那个 `<div>` 的问题。然后，浏览器会将水平滚动条添加到页面。

在这种情况下，使用 `max-width` 能够改善浏览器对小窗口的处理。

提示：将浏览器窗口拖动到小于500px的宽度，以查看两个 div 之间的区别！

此元素的高度为 100 像素，最大宽度为 500 像素。

此元素的高度为 100 像素，最大宽度为 500 像素。

注释：`max-width` 属性的值将覆盖 `width`（宽度）。

#### 实例

这个 <div> 元素的高度为 100 像素，最大宽度为 500 像素：

```css div { max-width: 500px; height: 100px; background-color: powderblue; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_dim_max_width "亲自试一试")

* * *

### 亲自试一试 - 实例

[设置元素的高度和宽度](https://www.w3school.com.cn/tiy/t.asp?f=css_dim_height "设置元素的高度和宽度")

本例演示如何设置不同元素的高度和宽度。

[使用百分比设置图像的高度和宽度](https://www.w3school.com.cn/tiy/t.asp?f=css_dim_height_percent "使用百分比设置图像的高度和宽度")

本例演示如何使用百分比值设置图像的高度和宽度。

[设置元素的最小宽度和最大宽度](https://www.w3school.com.cn/tiy/t.asp?f=css_dim_max-width "设置元素的最小宽度和最大宽度")

本例演示如何使用像素值设置元素的最小宽度和最大宽度。

[设置元素的最小高度和最大高度](https://www.w3school.com.cn/tiy/t.asp?f=css_dim_max-height "设置元素的最小高度和最大高度")

本例演示如何使用像素值设置元素的最小高度和最大高度。

* * *

### 设置 CSS 尺寸属性

属性| 描述  
---|---  
[height](https://www.w3school.com.cn/cssref/pr_dim_height.asp "height")| 设置元素的高度。  
[max-height](https://www.w3school.com.cn/cssref/pr_dim_max-height.asp "max-height")| 设置元素的最大高度。  
[max-width](https://www.w3school.com.cn/cssref/pr_dim_max-width.asp "max-width")| 设置元素的最大宽度。  
[min-height](https://www.w3school.com.cn/cssref/pr_dim_min-height.asp "min-height")| 设置元素的最小高度。  
[min-width](https://www.w3school.com.cn/cssref/pr_dim_min-width.asp "min-width")| 设置元素的最小宽度。  
[width](https://www.w3school.com.cn/cssref/pr_dim_width.asp "width")| 设置元素的宽度。  
  
* * *

### CSS 框模型

所有 HTML 元素都可以视为方框。在 CSS 中，在谈论设计和布局时，会使用术语“盒模型”或“框模型”。

CSS 框模型实质上是一个包围每个 HTML 元素的框。它包括：外边距、边框、内边距以及实际的内容。下图展示了框模型：

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/ea754c059940.gif)

对不同部分的说明：

>   * _内容_ \- 框的内容，其中显示文本和图像。
>   *  _内边距_ \- 清除内容周围的区域。内边距是透明的。
>   *  _边框_ \- 围绕内边距和内容的边框。
>   *  _外边距_ \- 清除边界外的区域。外边距是透明的。
> 

框模型允许我们在元素周围添加边框，并定义元素之间的空间。

元素框的最内部分是实际的内容，直接包围内容的是内边距。内边距呈现了元素的背景。内边距的边缘是边框。边框以外是外边距，外边距默认是透明的，因此不会遮挡其后的任何元素。

提示：背景应用于由内容和内边距、边框组成的区域。

内边距、边框和外边距都是可选的，默认值是零。但是，许多元素将由用户代理样式表设置外边距和内边距。可以通过将元素的 margin 和 padding 设置为零来覆盖这些浏览器样式。这可以分别进行，也可以使用通用选择器对所有元素进行设置：

```css * { margin: 0; padding: 0; } ``` 

在 CSS 中，width 和 height 指的是内容区域的宽度和高度。增加内边距、边框和外边距不会影响内容区域的尺寸，但是会增加元素框的总尺寸。

假设框的每个边上有 10 个像素的外边距和 5 个像素的内边距。如果希望这个元素框达到 100 个像素，就需要将内容的宽度设置为 70 像素，请看下图：

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/9aa6b88e1a24.gif)

```css #box { width: 70px; margin: 10px; padding: 5px; } ``` 

提示：内边距、边框和外边距可以应用于一个元素的所有边，也可以应用于单独的边。

提示：**外边距可以是负值** ，而且在很多情况下都要使用负值的外边距。

#### 实例

演示框模型：

```css div { width: 300px; border: 15px solid green; padding: 50px; margin: 20px; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_boxmodel "亲自试一试")

* * *

### 元素的宽度和高度

为了在所有浏览器中正确设置元素的宽度和高度，我们需要了解框模型如何工作。

重要提示：使用 CSS 设置元素的 width 和 height 属性时，只需设置内容区域的宽度和高度。要计算元素的完整大小，还必须把内边距、边框和外边距加起来。

#### 实例

<div> 元素的总宽度将是 350px：

```css div { width: 320px; padding: 10px; border: 5px solid gray; margin: 0; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_boxmodel_width "亲自试一试")

计算如下：
    
    
    320px(宽度)
    + 20px（左+右内边距）
    + 10px（左+右边框）
    + 0px（左+右外边距）
    = _350px_
    

元素的总宽度应该这样计算：

元素总宽度 = 宽度 + 左内边距 + 右内边距 + 左边框 + 右边框 + 左外边距 + 右外边距

元素的总高度应该这样计算：

元素总高度 = 高度 + 上内边距 + 下内边距 + 上边框 + 下边框 + 上外边距 + 下外边距

* * *

### ![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/acc4cd0ab0ef.png)

### CSS 轮廓

轮廓是在元素周围绘制的一条线，在边框之外，以凸显元素。

CSS 拥有如下轮廓属性：

>   * `outline-style`
>   * `outline-color`
>   * `outline-width`
>   * `outline-offset`
>   * `outline`
> 

注意：**轮廓与边框不同** ！不同之处在于：轮廓是在元素边框之外绘制的，并且可能与其他内容重叠。同样，轮廓也不是元素尺寸的一部分；**元素的总宽度和高度不受轮廓线宽度的影响。**

* * *

### CSS 轮廓样式

outline-style 属性指定轮廓的样式，并可设置如下值：

>   * `dotted` \- 定义点状的轮廓。
>   * `dashed` \- 定义虚线的轮廓。
>   * `solid` \- 定义实线的轮廓。
>   * `double` \- 定义双线的轮廓。
>   * `groove` \- 定义 3D 凹槽轮廓。
>   * `ridge` \- 定义 3D 凸槽轮廓。
>   * `inset` \- 定义 3D 凹边轮廓。
>   * `outset` \- 定义 3D 凸边轮廓。
>   * `none` \- 定义无轮廓。
>   * `hidden` \- 定义隐藏的轮廓。
> 

下例展示了不同的 outline-style 值：

#### 实例

演示不同的轮廓样式：

```css p.dotted {outline-style: dotted;} p.dashed {outline-style: dashed;} p.solid {outline-style: solid;} p.double {outline-style: double;} p.groove {outline-style: groove;} p.ridge {outline-style: ridge;} p.inset {outline-style: inset;} p.outset {outline-style: outset;} ``` 

结果：

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/f643c653ab19.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_outline-style "亲自试一试")

注意：除非设置了 `outline-style` 属性，否则其他轮廓属性都不会有任何作用！

* * *

### CSS 轮廓宽度

`outline-width` 属性指定轮廓的宽度，并可设置如下值之一：

>   * thin（通常为 1px）
>   * medium（通常为 3px）
>   * thick （通常为 5px）
>   * 特定尺寸（以 px、pt、cm、em 计）
> 

下例展示了一些不同宽度的轮廓：

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/94ed6cda3102.png)

#### 实例

```css p.ex1 { border: 1px solid black; outline-style: solid; outline-color: red; outline-width: thin; } p.ex2 { border: 1px solid black; outline-style: solid; outline-color: red; outline-width: medium; } p.ex3 { border: 1px solid black; outline-style: solid; outline-color: red; outline-width: thick; } p.ex4 { border: 1px solid black; outline-style: solid; outline-color: red; outline-width: 4px; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_outline-width "亲自试一试")

* * *

### CSS 轮廓颜色

`outline-color` 属性用于设置轮廓的颜色。

我们可以通过以下方式设置颜色：

>   * _name_ \- 指定颜色名，比如 "red"
>   * HEX - 指定十六进制值，比如 "#ff0000"
>   * RGB - 指定 RGB 值，比如 "rgb(255,0,0)"
>   * HSL - 指定 HSL 值，比如 "hsl(0, 100%, 50%)"
>   * invert - 执行颜色反转（确保轮廓可见，无论是什么颜色背景）
> 

下例展示了一些不同颜色的不同轮廓样式。请注意，这些元素在轮廓内还有黑色细边框：

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/0f5289353f87.png)

#### 实例

```css p.ex1 { border: 2px solid black; outline-style: solid; outline-color: red; } p.ex2 { border: 2px solid black; outline-style: dotted; outline-color: blue; } p.ex3 { border: 2px solid black; outline-style: outset; outline-color: grey; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_outline-color "亲自试一试")

* * *

### HEX 值

我们也可以使用十六进制值（HEX）指定轮廓颜色：

#### 实例

```css p.ex1 { outline-style: solid; outline-color: #ff0000; /* 红色 */ } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_outline-color-hex "亲自试一试")

* * *

### RGB 值

或者通过使用 RGB 值：

#### 实例

```css p.ex1 { outline-style: solid; outline-color: rgb(255, 0, 0); /* 红色 */ } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_outline-color-rgb "亲自试一试")

* * *

### HSL 值

当然还可以使用 HSL 值：

#### 实例

```css p.ex1 { outline-style: solid; outline-color: hsl(0, 100%, 50%); /* 红色 */ } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_outline-color-hsl "亲自试一试")

可以在 [CSS 颜色](https://www.w3school.com.cn/css/css_colors.asp "CSS 颜色") 章节中学习有关 HEX、RGB 和 HSL 值的更多知识。

* * *

### 反转颜色

下例使用 `outline-color: invert`，执行了颜色反转。这样可以确保无论颜色背景如何，轮廓都是可见的：

反转颜色的实线轮廓。

#### 实例

```css p.ex1 { border: 1px solid yellow; outline-style: solid; outline-color: invert; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_outline-color_invert "亲自试一试")

* * *

### CSS Outline - 简写属性

`outline` 属性是用于设置以下各个轮廓属性的简写属性：

>   * `outline-width`
>   * `outline-style`（必需）
>   * `outline-color`
> 

从上面的列表中，`outline` 属性可指定一个、两个或三个值。值的顺序无关紧要。

下例展示了用简写的 `outline` 属性指定的一些轮廓：

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/2108e93d693d.png)

#### 实例

```css p.ex1 {outline: dashed;} p.ex2 {outline: dotted red;} p.ex3 {outline: 5px solid yellow;} p.ex4 {outline: thick ridge pink;} ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_outline "亲自试一试")

* * *

### CSS 轮廓偏移

`outline-offset` 属性在元素的轮廓与边框之间添加空间。元素及其轮廓之间的空间是透明的。

下例指定边框边缘外 25px 的轮廓：

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/34f2fc91c280.png)

#### 实例

```css p { margin: 50px; border: 1px solid black; outline: 1px solid red; outline-offset: 25px; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_outline-offset_1 "亲自试一试")

下例显示元素与其轮廓之间的空间是透明的：

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/866b34faf285.png)

#### 实例

```css p { margin: 30px; background: yellow; border: 1px solid black; outline: 1px solid red; outline-offset: 25px; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_outline-offset_2 "亲自试一试")

* * *

### 所有 CSS 轮廓属性

属性| 描述  
---|---  
[outline](https://www.w3school.com.cn/cssref/pr_outline.asp "outline")| 简写属性，在一条声明中设置 outline-width、outline-style 以及 outline-color。  
[outline-color](https://www.w3school.com.cn/cssref/pr_outline-color.asp "outline-color")| 设置轮廓的颜色。  
[outline-offset](https://www.w3school.com.cn/cssref/pr_outline-offset.asp "outline-offset")| 指定轮廓与元素的边缘或边框之间的空间。  
[outline-style](https://www.w3school.com.cn/cssref/pr_outline-style.asp "outline-style")| 设置轮廓的样式。  
[outline-width](https://www.w3school.com.cn/cssref/pr_outline-width.asp "outline-width")| 设置轮廓的宽度。  
  
* * *

## 总结

本节我们学习了CSS边框、边距、轮廓的各种知识（边框宽度/颜色/各边/简写属性/圆角边框/内外边距/高度宽度/框模型/轮廓宽度/颜色/属性/偏移），强化了CSS边框、边距与轮廓的知识点，今后将继续介绍CSS文本等知识点。
