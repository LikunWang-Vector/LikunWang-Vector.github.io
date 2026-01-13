---
title: "CSS语法与CSS选择器"
date: 2023-01-21
updated: 2023-01-21
categories:
  - CSS入门、进阶与实战
tags:
  - css
  - 前端
  - html
csdn_views: 869
csdn_likes: 4
csdn_comments: 2
csdn_favorites: 4
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128745952
cover: /images/posts/CSS语法与CSS选择器/57773b3eff3e.gif
lang_pair:
  en: "CSS Syntax and Selectors"
---

> 本文迁移自CSDN博客
> 原文链接：[CSS语法与CSS选择器](https://blog.csdn.net/m0_59180666/article/details/128745952)
> 📊 869 阅读 | 👍 4 点赞 | 💬 2 评论 | ⭐ 4 收藏

**目录**

CSS 语法

实例

例子解释

CSS 选择器

CSS 元素选择器

实例

CSS id 选择器

实例

CSS 类选择器

实例

实例

实例

CSS 通用选择器

实例

CSS 分组选择器

实例

所有简单的 CSS 选择器

延伸阅读

* * *

### CSS 语法

CSS 规则集（rule-set）由选择器和声明块组成：

![](/images/posts/CSS语法与CSS选择器/57773b3eff3e.gif)

选择器指向您需要设置样式的 HTML 元素。

声明块包含一条或多条用分号分隔的声明。

每条声明都包含一个 CSS 属性名称和一个值，以冒号分隔。

多条 CSS 声明用分号分隔，声明块用花括号括起来。

#### 实例

在此例中，所有 <p> 元素都将居中对齐，并带有红色文本颜色：

``` p { color: red; text-align: center; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_syntax_1 "亲自试一试")

#### 例子解释

  * **`p`** 是 CSS 中的 _选择器_ （它指向要设置样式的 HTML 元素：<p>）。
  * **`color` **是属性，**`red`** 是属性值
  * **`text-align`** 是属性，**`center`** 是属性值

* * *

###  CSS 选择器

CSS 选择器用于“查找”（或选取）要设置样式的 HTML 元素。

我们可以将 CSS 选择器分为五类：

  * 简单选择器（根据名称、id、类来选取元素）
  * [组合器选择器](https://www.w3school.com.cn/css/css_combinators.asp "组合器选择器")（根据它们之间的特定关系来选取元素）
  * [伪类选择器](https://www.w3school.com.cn/css/css_pseudo_classes.asp "伪类选择器")（根据特定状态选取元素）
  * [伪元素选择器](https://www.w3school.com.cn/css/css_pseudo_elements.asp "伪元素选择器")（选取元素的一部分并设置其样式）
  * [属性选择器](https://www.w3school.com.cn/css/css_attribute_selectors.asp "属性选择器")（根据属性或属性值来选取元素）

我们将了解最基本的 CSS 选择器。

* * *

### CSS 元素选择器

元素选择器**根据元素名称** 来选择 HTML 元素。

#### 实例

在这里，页面上的所有 <p> 元素都将居中对齐，并带有红色文本颜色：

```css p { text-align: center; color: red; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_syntax_element "亲自试一试")

* * *

### CSS id 选择器

id 选择器使用 HTML **元素的 id 属性** 来选择特定元素。

元素的 **id 在页面中是唯一的** ，因此 id 选择器用于选择一个唯一的元素！

要选择具有特定 id 的元素，请写一个井号（**＃** ），后跟该元素的 id。

#### 实例

这条 CSS 规则将应用于 id="para1" 的 HTML 元素：

```css #para1 { text-align: center; color: red; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_syntax_id "亲自试一试")

注意：id 名称不能以数字开头。

* * *

### CSS 类选择器

类选择器选择有**特定 class 属性** 的 HTML 元素。

如需选择拥有特定 class 的元素，请写一个句点（**.** ）字符，后面跟类名。

#### 实例

在此例中，**所有带有 class="center" 的 HTML 元素** 将为红色且居中对齐：

```css .center { text-align: center; color: red; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_syntax_class "亲自试一试")

还可以指定只有特定的 HTML 元素会受类的影响。

#### 实例

在这个例子中，只有**具有 class="center" 的 <p> 元素**会居中对齐：

```css p.center { text-align: center; color: red; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_syntax_element_class_1 "亲自试一试")

HTML 元素也可以引用多个类。

#### 实例

在这个例子中，<p> 元素将根据 **class="center" 和 class="large"** 进行样式设置：

```html <p class="center large">这个段落引用两个类。</p> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_syntax_element_class_2 "亲自试一试")

注意：类名不能以数字开头！

**另注：如果有冲突的元素，将以后面的类为基准。**

* * *

### CSS 通用选择器

通用选择器（***** ）选择页面上的所有的 HTML 元素。

#### 实例

下面的 CSS 规则会影响页面上的**每个 HTML 元素** ：

```css * { text-align: center; color: blue; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_syntax_universal "亲自试一试")

* * *

### CSS 分组选择器

分组选择器选取**所有具有相同样式定义的 HTML 元素** 。

请看下面的 CSS 代码（h1、h2 和 p 元素具有相同的样式定义）：

```css h1 { text-align: center; color: red; } h2 { text-align: center; color: red; } p { text-align: center; color: red; } ``` 

最好对选择器进行分组，以最大程度地缩减代码。

如需对选择器进行分组，请**用逗号来分隔每个选择器** 。

#### 实例

在这个例子中，我们对上述代码中的选择器进行分组：

```css h1, h2, p { text-align: center; color: red; } ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_grouping "亲自试一试")

* * *

### 所有简单的 CSS 选择器

选择器| 例子| 例子描述  
---|---|---  
[.class](https://www.w3school.com.cn/css/css_selectors.asp ".class")| .intro| 选取所有 class="intro" 的元素。  
[#id](https://www.w3school.com.cn/css/css_selectors.asp "#id")| #firstname| 选取 id="firstname" 的那个元素。  
[*](https://www.w3school.com.cn/css/css_selectors.asp "*")| *| 选取所有元素。  
[element](https://www.w3school.com.cn/css/css_selectors.asp "element")| p| 选取所有 <p> 元素。  
[element,element,..](https://www.w3school.com.cn/css/css_selectors.asp "element,element,..")| div, p| 选取所有 <div> 元素和所有 <p> 元素。  
  
* * *

### 延伸阅读

课外书：[CSS 元素选择器](https://www.w3school.com.cn/css/css_selector_type.asp "CSS 元素选择器")

课外书：[CSS 选择器分组](https://www.w3school.com.cn/css/css_selector_grouping.asp "CSS 选择器分组")

课外书：[CSS 类选择器详解](https://www.w3school.com.cn/css/css_selector_class.asp "CSS 类选择器详解")

课外书：[CSS ID 选择器详解](https://www.w3school.com.cn/css/css_selector_id.asp "CSS ID 选择器详解")

课外书：[CSS 属性选择器详解](https://www.w3school.com.cn/css/css_selector_attribute.asp "CSS 属性选择器详解")

课外书：[CSS 后代选择器](https://www.w3school.com.cn/css/css_selector_descendant.asp "CSS 后代选择器")

课外书：[CSS 子元素选择器](https://www.w3school.com.cn/css/css_selector_child.asp "CSS 子元素选择器")

课外书：[CSS 相邻兄弟选择器](https://www.w3school.com.cn/css/css_selector_adjacent_sibling.asp "CSS 相邻兄弟选择器")
