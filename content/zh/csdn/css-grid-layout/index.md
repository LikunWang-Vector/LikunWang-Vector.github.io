---
type: post
csdn: true
title: "CSS网格教程：网格布局模块/网格容器/网格项目"
date: "2023-02-02"
lastmod: "2023-02-02"
authors:
  - admin
tags:
  - "css"
  - "前端"
  - "javascript"
  - "网格布局"
  - "网格容器"
  - "CSDN"
categories:
  - "CSS入门、进阶与实战"
summary: "CSS 网格布局模块（CSS Grid Layout Module）提供了带有行和列的基于网格的布局系统，它使网页设计变得更加容易，而无需使用浮动和定位。"
image:
  filename: "covers/csdn-css.png"
  caption: "CSDN Archive · CSS · STYLING"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128855127"
csdn_views: 1087
csdn_likes: 2
csdn_comments: 1
csdn_favorites: 4
---

> 本文迁移自CSDN博客
> 原文链接：[CSS网格教程：网格布局模块/网格容器/网格项目](https://blog.csdn.net/m0_59180666/article/details/128855127)
> 📊 1087 阅读 | 👍 2 点赞 | 💬 1 评论 | ⭐ 4 收藏


## CSS 网格布局模块

* * *

![](/images/posts/CSS网格教程：网格布局模块网格容器网格项目/3d7a555ad741.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_layout_named "亲自试一试")

* * *

### 网格布局

CSS 网格布局模块（CSS Grid Layout Module）提供了带有行和列的基于网格的布局系统，它使网页设计变得更加容易，而无需使用浮动和定位。

* * *

### 浏览器支持

所有现代浏览器均支持网格属性。

![](/images/posts/CSS网格教程：网格布局模块网格容器网格项目/92294b528570.png)| | | |   
---|---|---|---|---  
| | | |   
  
* * *

### 网格元素

网格布局由一个父元素以及一个或多个子元素组成。

#### 实例

```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
</div>
```

![](/images/posts/CSS网格教程：网格布局模块网格容器网格项目/d47660cb9e00.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid "亲自试一试")

* * *

### Display 属性

当 HTML 元素的 `display` 属性设置为 `grid` 或 `inline-grid` 时，它就会成为网格容器。

#### 实例

```css
.grid-container { display: grid; }
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_display_grid "亲自试一试")

#### 实例

```css
.grid-container {
  display: inline-grid;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_display_inline-grid "亲自试一试")

_网格容器的所有直接子元素将自动成为网格项目。_

* * *

### 网格列（Grid Columns）

网格项的垂直线被称为列。

![](/images/posts/CSS网格教程：网格布局模块网格容器网格项目/db84a2e8285b.png)

* * *

### 网格行（Grid Rows）

网格项的水平线被称为行。

![](/images/posts/CSS网格教程：网格布局模块网格容器网格项目/e2b4c4908b46.png)

* * *

### 网格间隙（Grid Gaps）

每列/行之间的间隔称为间隙。

![](/images/posts/CSS网格教程：网格布局模块网格容器网格项目/d9bc4b61cd20.png)

可以通过使用以下属性之一来调整间隙大小：

  * `grid-column-gap`
  * `grid-row-gap`
  * `grid-gap`

#### 实例

`grid-column-gap` 属性设置列之间的间隙：

```css
.grid-container {
  display: grid;
  grid-column-gap: 50px;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_grid-column-gap "亲自试一试")

#### 实例

`grid-row-gap` 属性设置行之间的间隙：

```css
.grid-container {
  display: grid;
  grid-row-gap: 50px;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_grid-row-gap "亲自试一试")

#### 实例

`grid-gap` 属性是 grid-row-gap 和 grid-column-gap 属性的简写属性：

```css
.grid-container {
  display: grid;
  grid-gap: 50px 100px;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_grid-gap_1 "亲自试一试")

#### 实例

`grid-gap` 属性还可用于将行间隙和列间隙设置为一个值：

```css
.grid-container {
  display: grid;
  grid-gap: 50px 100px;
}
```

```css
.grid-container {
  display: grid;
  grid-gap: 50px;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_grid-gap_2 "亲自试一试")

* * *

### 网格行（Grid Lines）

列之间的线称为列线（column lines）。

行之间的线称为行线（row lines）。

![](/images/posts/CSS网格教程：网格布局模块网格容器网格项目/878db570d841.png)

当把网格项目放在网格容器中时，要引用行号：

#### 实例

把网格项目放在列线 1，并在列线 3 结束它：

```css
.item1 {
  grid-column-start: 1;
  grid-column-end: 3;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_lines_1 "亲自试一试")

#### 实例

把网格项目放在行线 1，并在行线 3 结束它：

```css
.item1 {
  grid-row-start: 1;
  grid-row-end: 3;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_lines_2 "亲自试一试")

* * *

## CSS 网格容器

![](/images/posts/CSS网格教程：网格布局模块网格容器网格项目/7495a7434a93.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_container "亲自试一试")

* * *

### 网格容器

如需使 HTML 元素充当网格容器，必须把 `display` 属性设置为 grid 或 inline-grid。

网格容器由放置在列和行内的网格项目组成。

* * *

### grid-template-columns 属性

`grid-template-columns` 属性定义网格布局中的列数，并可定义每列的宽度。

该值是以空格分隔的列表，其中每个值定义相应列的长度。

如果我们希望网格布局包含 4 列，可以指定这 4 列的宽度；如果所有列都应当有相同的宽度，则设置为 "auto"。

#### 实例

生成包含四列的网格：

```css
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_grid-template-columns_1 "亲自试一试")

注意：如果在 4 列网格中有 4 个以上的项目，则网格会自动添加新行并将这些项目放入其中。

`grid-template-columns` 属性还可以用于指定列的尺寸（宽度）。

#### 实例

设置这 4 列的尺寸：

```css
.grid-container {
  display: grid;
  grid-template-columns: 80px 200px auto 40px;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_grid-template-columns_2 "亲自试一试")

* * *

### grid-template-rows 属性

`grid-template-rows` 属性定义每列的高度。

![](/images/posts/CSS网格教程：网格布局模块网格容器网格项目/88e0834aee33.png)

它的值是以空格分隔的列表，其中每个值定义相应行的高度：

#### 实例

```css
.grid-container {
  display: grid;
  grid-template-rows: 80px 200px;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_grid-template-rows "亲自试一试")

* * *

### justify-content 属性

`justify-content` 属性用于在容器内对齐整个网格。

![](/images/posts/CSS网格教程：网格布局模块网格容器网格项目/a1d77497f39f.png)

注意：网格的总宽度必须小于容器的宽度，这样 justify-content 属性才能生效。

#### 实例

```css
.grid-container {
  display: grid;
  justify-content: space-evenly;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_justify-content_space-evenly "亲自试一试")

#### 实例

```css
.grid-container {
  display: grid;
  justify-content: space-around;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_justify-content_space-around "亲自试一试")

#### 实例

```css
.grid-container {
  display: grid;
  justify-content: space-between;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_justify-content_space-between "亲自试一试")

#### 实例

```css
.grid-container {
  display: grid;
  justify-content: center;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_justify-content_center "亲自试一试")

#### 实例

```css
.grid-container {
  display: grid;
  justify-content: start;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_justify-content_start "亲自试一试")

#### 实例

```css
.grid-container {
  display: grid;
  justify-content: end;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_justify-content_end "亲自试一试")

* * *

### align-content 属性

`align-content` 属性用于垂直对齐容器内的整个网格。

![](/images/posts/CSS网格教程：网格布局模块网格容器网格项目/07d133015a4b.png)

注意：网格的总高度必须小于容器的高度，这样 align-content 属性才能生效。

#### 实例

```css
.grid-container {
  display: grid;
  height: 400px;
  align-content: center;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_align-content_center "亲自试一试")

#### 实例

```css
.grid-container {
  display: grid;
  height: 400px;
  align-content: space-evenly;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_align-content_space-evenly "亲自试一试")

#### 实例

```css
.grid-container {
  display: grid;
  height: 400px;
  align-content: space-around;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_align-content_space-around "亲自试一试")

#### 实例

```css
.grid-container {
  display: grid;
  height: 400px;
  align-content: space-between;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_align-content_space-between "亲自试一试")

#### 实例

```css
.grid-container {
  display: grid;
  height: 400px;
  align-content: start;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_align-content_start "亲自试一试")

#### 实例

```css
.grid-container {
  display: grid;
  height: 400px;
  align-content: end;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_align-content_end "亲自试一试")

* * *

## CSS 网格项目

![](/images/posts/CSS网格教程：网格布局模块网格容器网格项目/2f5b6b30c1bb.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_item "亲自试一试")

* * *

### 子元素（项目）

网格容器包含网格项目。

默认情况下，容器在每一行的每一列都有一个网格项目，但是可以设置网格项目的样式，让它们跨越多个列和/或行。

* * *

### grid-column 属性：

`grid-column` 属性定义将项目放置在哪一列上。

可以定义项目的开始位置以及结束位置。

![](/images/posts/CSS网格教程：网格布局模块网格容器网格项目/8ec3f97a0aed.png)

注释：`grid-column` 属性是 grid-column-start 和 grid-column-end 属性的简写属性。

如需放置某个项目，可以引用行号（line numbers），或使用关键字 "span" 来定义该项目将跨越多少列。

#### 实例

使 "item1" 从第 1 列开始并在第 5 列之前结束：

```css
.item1 { grid-column: 1 / 5; }
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_grid-column_line "亲自试一试")

#### 实例

使 "item1" 从第 1 列开始，并跨越 3 列：

```css
.item1 { grid-column: 1 / span 3; }
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_grid-column_1 "亲自试一试")

#### 实例

使 "item2" 从第 2 列开始，并跨越 3 列：

```css
.item2 { grid-column: 2 / span 3; }
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_grid-column_2 "亲自试一试")

* * *

### grid-row 属性：

`grid-row` 属性定义了将项目放置在哪一行。

可以定义项目的开始位置以及结束位置。

![](/images/posts/CSS网格教程：网格布局模块网格容器网格项目/dadf6e11b072.png)

注释：`grid-row` 属性是 grid-row-start 和 grid-row-end 属性的简写属性。

如需放置项目，可以引用行号，或使用关键字 "span" 定义该项目将跨越多少行：

#### 实例

使 "item1" 在 row-line 1 开始，在 row-line 4 结束：

```css
.item1 { grid-row: 1 / 4; }
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_grid-row_1 "亲自试一试")

#### 实例

使 "item1" 从第 1 行开始并跨越 2 行：

```css
.item1 { grid-row: 1 / span 2; }
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_grid-row_2 "亲自试一试")

* * *

### grid-area 属性

`grid-area` 属性可以用作 grid-row-start、grid-column-start、grid-row-end 和 grid-column-end 属性的简写属性。

![](/images/posts/CSS网格教程：网格布局模块网格容器网格项目/7b8a0651f2a2.png)

#### 实例

使 "item8" 从 row-line 1 和 column-line 2 开始，在 row-line 5 和 column line 6 结束：

```css
.item8 { grid-area: 1 / 2 / 5 / 6; }
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_grid-area_1 "亲自试一试")

#### 实例

使 "item8" 从 row-line 2 和 column-line 开始，并跨越 2 行和 3 列：

```css
.item8 {
  grid-area: 2 / 1 / span 2 / span 3;
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_grid-area_2 "亲自试一试")

* * *

### 命名网格项

`grid-area` 属性也可以用于为网格项目分配名称。

![](/images/posts/CSS网格教程：网格布局模块网格容器网格项目/8db8e54b8700.png)

可以通过网格容器的 `grid-template-areas` 属性来引用命名的网格项目。

#### 实例

item1 的名称是 "myArea"，并跨越五列网格布局中的所有五列：

```css
.item1 {
  grid-area: myArea;
}
.grid-container {
  grid-template-areas: 'myArea myArea myArea myArea myArea';
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_grid-area_named_1 "亲自试一试")

每行由撇号（' '）定义。

每行中的列都在撇号内定义，并以空格分隔。

注释：句号表示没有名称的网格项目。

#### 实例

让 "myArea" 跨越五列网格布局中的两列（句号代表没有名称的项目）：

```css
.item1 {
  grid-area: myArea;
}
.grid-container {
  grid-template-areas: 'myArea myArea . . .';
} 
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_grid-area_named_2 "亲自试一试")

如需定义两行，可以在另一组撇号内定义第二行的列：

#### 实例

使 "item1" 跨越两列和两行：

```css
.grid-container {
  grid-template-areas: 'myArea myArea . . .' 'myArea myArea . . .';
} 
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_grid-area_named_3 "亲自试一试")

#### 实例

命名所有项目，并制作一张随时可用的网页模板：

```css
.item1 { grid-area: header; }
.item2 { grid-area: menu; }
.item3 { grid-area: main; }
.item4 { grid-area: right; }
.item5 { grid-area: footer; }

.grid-container {
  grid-template-areas:
    'header header header header header header'
    'menu main main main right right'
    'menu footer footer footer footer footer';
} 
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_grid-area_named_4 "亲自试一试")

* * *

### 项目的顺序

网格布局允许我们将项目放置在我们喜欢的任意位置。

HTML 代码中的第一项不必显示为网格中的第一项。

![](/images/posts/CSS网格教程：网格布局模块网格容器网格项目/71aa01275eb6.png)

#### 实例

```css
.item1 { grid-area: 1 / 3 / 2 / 4; }
.item2 { grid-area: 2 / 3 / 3 / 4; }
.item3 { grid-area: 1 / 1 / 2 / 2; }
.item4 { grid-area: 1 / 2 / 2 / 3; }
.item5 { grid-area: 2 / 1 / 3 / 2; }
.item6 { grid-area: 2 / 2 / 3 / 3; }
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_flexible_order_1 "亲自试一试")

可以通过使用媒体查询来重新排列某些屏幕尺寸的顺序：

#### 实例

```css
@media only screen and (max-width: 500px) {
  .item1 { grid-area: 1 / span 3 / 2 / 4; }
  .item2 { grid-area: 3 / 3 / 4 / 4; }
  .item3 { grid-area: 2 / 1 / 3 / 2; }
  .item4 { grid-area: 2 / 2 / span 2 / 3; }
  .item5 { grid-area: 3 / 1 / 4 / 2; }
  .item6 { grid-area: 2 / 3 / 3 / 4; }
}
```

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grid_flexible_order_2 "亲自试一试")
