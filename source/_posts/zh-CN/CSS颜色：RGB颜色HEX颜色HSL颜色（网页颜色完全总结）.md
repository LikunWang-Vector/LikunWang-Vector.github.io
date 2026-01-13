---
title: "CSS颜色：RGB颜色/HEX颜色/HSL颜色（网页颜色完全总结）"
date: 2023-01-22
updated: 2023-01-22
categories:
  - CSS入门、进阶与实战
tags:
  - css
  - 前端
  - html
  - css3
csdn_views: 2611
csdn_likes: 5
csdn_comments: 1
csdn_favorites: 10
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128748711
cover: /images/posts/CSS颜色：RGB颜色HEX颜色HSL颜色（网页颜色完全总结/42095f67e483.png
lang_pair:
  en: "CSS Colors: RGB, HEX, and HSL (Complete Guide)"
---

> 本文迁移自CSDN博客
> 原文链接：[CSS颜色：RGB颜色/HEX颜色/HSL颜色（网页颜色完全总结）](https://blog.csdn.net/m0_59180666/article/details/128748711)
> 📊 2611 阅读 | 👍 5 点赞 | 💬 1 评论 | ⭐ 10 收藏

**目录**

CSS 颜色名

CSS 背景色

实例

CSS 文本颜色

​编辑

实例

CSS 边框颜色

实例

CSS 颜色值

实例

RGB 值

rgb(red, green, blue)

实例

实例

RGBA 值

rgba(red, green, blue, alpha)

实例

HEX 值

#rrggbb

实例

实例

HSL 值

hsla(hue, saturation, lightness)

实例

饱和度

实例

亮度

实例

实例

HSLA 值

hsla(hue, saturation, lightness, alpha)

实例

* * *

指定颜色是通过使用预定义的颜色名称，或 RGB、HEX、HSL、RGBA、HSLA 值。

* * *

### CSS 颜色名

在 CSS 中，可以使用颜色名称来指定颜色：

![](/images/posts/CSS颜色：RGB颜色HEX颜色HSL颜色（网页颜色完全总结/42095f67e483.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_color_names "亲自试一试")

CSS/HTML 支持 [140 种标准颜色名](https://www.w3school.com.cn/css/css_colors.asp "140 种标准颜色名")。

* * *

### CSS 背景色

您可以为 HTML 元素设置背景色：

![](/images/posts/CSS颜色：RGB颜色HEX颜色HSL颜色（网页颜色完全总结/b91867d06da7.png)

#### 实例

```html <h1 style="background-color:DodgerBlue;">China</h1> <p style="background-color:Tomato;">China is a great country!</p> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_color_background "亲自试一试")

* * *

### CSS 文本颜色

您可以设置文本的颜色：

#### ![](/images/posts/CSS颜色：RGB颜色HEX颜色HSL颜色（网页颜色完全总结/7dab426e5487.png)

#### 实例

```html <h1 style="color:Tomato;">China</h1> <p style="color:DodgerBlue;">China is a great country!</p> <p style="color:MediumSeaGreen;">China, officially the People's Republic of China...</p> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_color_text "亲自试一试")

* * *

### CSS 边框颜色

您可以设置边框的颜色：

![](/images/posts/CSS颜色：RGB颜色HEX颜色HSL颜色（网页颜色完全总结/6aab9f7dda73.png)

#### 实例

```html <h1 style="border:2px solid Tomato;">Hello World</h1> <h1 style="border:2px solid DodgerBlue;">Hello World</h1> <h1 style="border:2px solid Violet;">Hello World</h1> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_color_border "亲自试一试")

* * *

### CSS 颜色值

在 CSS 中，还可以使用 RGB 值、HEX 值、HSL 值、RGBA 值或者 HSLA 值来指定颜色：

与颜色名 "Tomato" 等效：

![](/images/posts/CSS颜色：RGB颜色HEX颜色HSL颜色（网页颜色完全总结/f58e01c3670f.png)

与颜色名 "Tomato" 等效，但是透明度为 50%：

![](/images/posts/CSS颜色：RGB颜色HEX颜色HSL颜色（网页颜色完全总结/e453e29d8080.png)

#### 实例

```html <h1 style="background-color:rgb(255, 99, 71);">...</h1> <h1 style="background-color:#ff6347;">...</h1> <h1 style="background-color:hsl(9, 100%, 64%);">...</h1> <h1 style="background-color:rgba(255, 99, 71, 0.5);">...</h1> <h1 style="background-color:hsla(9, 100%, 64%, 0.5);">...</h1> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_color_values "亲自试一试")

* * *

### RGB 值

在 CSS 中，可以使用下面的公式将颜色指定为 RGB 值：

> #### rgb(_red_ ,  _green_ ,  _blue_)
> 
> 每个参数 (_red_ 、 _green_ 以及  _blue_) 定义了 0 到 255 之间的颜色强度。

例如，rgb(255, 0, 0) 显示为红色，因为红色设置为最大值（255），其他设置为 0。

要显示黑色，请将所有颜色参数设置为 0，如下所示：rgb(0, 0, 0)。

要显示白色，请将所有颜色参数设置为 255，如下所示：rgb(255, 255, 255)。

#### 实例

![](/images/posts/CSS颜色：RGB颜色HEX颜色HSL颜色（网页颜色完全总结/a7ef4eb01d27.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_color_rgb "亲自试一试")

通常为所有 3 个参数使用相等的值来定义灰色阴影：

#### 实例

![](/images/posts/CSS颜色：RGB颜色HEX颜色HSL颜色（网页颜色完全总结/494efb95af0f.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_color_rgb_gray "亲自试一试")

* * *

### RGBA 值

> RGBA 颜色值是具有**alpha 通道** 的 RGB 颜色值的扩展 - 它指定了**颜色的不透明度** 。

RGBA 颜色值指定为：

#### rgba(_red_ ,  _green_ ,  _blue_ ,  _alpha_)

_alpha_ 参数是介于 0.0（完全透明）和 1.0（完全不透明）之间的数字：

#### 实例

![](/images/posts/CSS颜色：RGB颜色HEX颜色HSL颜色（网页颜色完全总结/ea93ce982f19.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_color_rgba "亲自试一试")

* * *

### HEX 值

在 CSS 中，可以使用以下格式的**十六进制值** 指定颜色：

#### #_rrggbb_

> 其中**rr（红色）、gg（绿色）和 bb（蓝色）** 是**介于 00 和 ff 之间** 的十六进制值（与十进制 0-255 相同）。

例如，#ff0000 显示为红色，因为红色设置为最大值（ff），其他设置为最小值（00）。

#### 实例

![](/images/posts/CSS颜色：RGB颜色HEX颜色HSL颜色（网页颜色完全总结/bf109e486139.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_color_hex "亲自试一试")

通常为所有 3 个参数使用相等的值来定义灰色阴影：

#### 实例

![](/images/posts/CSS颜色：RGB颜色HEX颜色HSL颜色（网页颜色完全总结/11fe5e15c902.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_color_hex_gray "亲自试一试")

* * *

### HSL 值

在 CSS 中，可以使用色相、饱和度和明度（HSL）来指定颜色，格式如下：

#### hsla(_hue_ ,  _saturation_ ,  _lightness_)

> **色相** （ _hue_ ）是**色轮上从 0 到 360 的度数** 。**0 是红色，120 是绿色，240 是蓝色。**
> 
> **饱和度** （ _saturation_ ）是一个百分比值，**0％ 表示灰色阴影，而 100％ 是全色。**
> 
> **亮度** （ _lightness_ ）也是百分比，**0％ 是黑色，50％ 是既不明也不暗，100％是白色** 。

#### 实例

![](/images/posts/CSS颜色：RGB颜色HEX颜色HSL颜色（网页颜色完全总结/04e753d91a2a.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_color_hsl "亲自试一试")

* * *

### 饱和度

饱和度可以描述为颜色的强度。

100％ 是纯色，没有灰色阴影

50％ 是 50％ 灰色，但是您仍然可以看到颜色。

0％ 是完全灰色，您无法再看到颜色。

#### 实例

![](/images/posts/CSS颜色：RGB颜色HEX颜色HSL颜色（网页颜色完全总结/2654d962dfe6.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_color_hsl_saturation "亲自试一试")

* * *

### 亮度

颜色的明暗度可以描述为要赋予颜色多少光，其中 0％ 表示不亮（黑色），50％ 表示 50％ 亮（既不暗也不亮），100％ 表示全明（白）。

#### 实例

![](/images/posts/CSS颜色：RGB颜色HEX颜色HSL颜色（网页颜色完全总结/a5b8e830db41.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_color_hsl_lightness "亲自试一试")

通常通过将色调和饱和度设置为 0 来定义灰色阴影，并将亮度从 0％ 到 100％ 进行调整可以得到更深/更浅的阴影：

#### 实例

![](/images/posts/CSS颜色：RGB颜色HEX颜色HSL颜色（网页颜色完全总结/470725145a74.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_color_hsl_gray "亲自试一试")

* * *

### HSLA 值

HSLA 颜色值是带有 Alpha 通道的 HSL 颜色值的扩展 - 它指定了颜色的不透明度。

HSLA 颜色值指定为：

#### hsla(_hue_ ,  _saturation_ ,  _lightness_ ,  _alpha_)

_alpha_ 参数是介于 0.0（完全透明）和 1.0（完全不透明）之间的数字：

#### 实例

![](/images/posts/CSS颜色：RGB颜色HEX颜色HSL颜色（网页颜色完全总结/244a5af37139.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_color_hsla "亲自试一试")

* * *

### 总结

今天认识了RGB颜色/HEX颜色/HSL颜色，熟悉了各种颜色表示方法。
