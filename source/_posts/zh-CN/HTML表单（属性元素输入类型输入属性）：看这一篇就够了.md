---
title: "HTML表单（属性/元素/输入类型/输入属性）：看这一篇就够了"
date: 2023-02-09
updated: 2023-02-09
categories:
  - HTML入门、进阶与实战
tags:
  - html
  - 前端
  - java
csdn_views: 3594
csdn_likes: 6
csdn_comments: 1
csdn_favorites: 17
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128945867
cover: /images/posts/HTML表单（属性元素输入类型输入属性）：看这一篇就够了/dd1281408989.png
lang_pair:
  en: "HTML Forms - Complete Guide (Attributes, Elements, Input Types)"
---

> 本文迁移自CSDN博客
> 原文链接：[HTML表单（属性/元素/输入类型/输入属性）：看这一篇就够了](https://blog.csdn.net/m0_59180666/article/details/128945867)
> 📊 3594 阅读 | 👍 6 点赞 | 💬 1 评论 | ⭐ 17 收藏

* * *

## HTML表单

* * *

**HTML 表单用于搜集不同类型的用户输入。**

* * *

### <form> 元素

HTML 表单用于收集用户输入。

<form> 元素定义 HTML 表单：

#### 实例

```html <form> form elements </form> ``` 

* * *

### HTML 表单包含 _表单元素_ 。

表单元素指的是不同类型的 input 元素、复选框、单选按钮、提交按钮等等。

* * *

### <input> 元素

_< input>_ 元素是最重要的 _表单元素_ 。

<input> 元素有很多形态，根据不同的  _type_ 属性。

这是本章中使用的类型：

类型| 描述  
---|---  
text| 定义常规文本输入。  
radio| 定义单选按钮输入（选择多个选择之一）  
submit| 定义提交按钮（提交表单）  
  
* * *

### 文本输入

_< input type="text">_ 定义用于 _文本输入_ 的单行输入字段：

#### 实例

```html <form> First name:<br> <input type="text" name="firstname"> <br> Last name:<br> <input type="text" name="lastname"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_form_text "亲自试一试")

在浏览器中看起来是这样的：

![](/images/posts/HTML表单（属性元素输入类型输入属性）：看这一篇就够了/dd1281408989.png)

注释：表单本身并不可见。还要注意文本字段的默认宽度是 20 个字符。

* * *

### 单选按钮输入

_< input type="radio">_ 定义 _单选按钮_ 。

单选按钮允许用户在有限数量的选项中选择其中之一：

#### 实例

```html <form> <input type="radio" name="sex" value="male" checked>Male <br> <input type="radio" name="sex" value="female">Female </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_form_radio "亲自试一试")

单选按钮在浏览器看起来是这样的：

![](/images/posts/HTML表单（属性元素输入类型输入属性）：看这一篇就够了/af96fc2b684f.png)

* * *

### 提交按钮

_< input type="submit">_ 定义用于向 _表单处理程序_ （form-handler） _提交_ 表单的按钮。

表单处理程序通常是包含用来处理输入数据的脚本的服务器页面。

表单处理程序在表单的  _action_ 属性中指定：

#### 实例

```html <form action="action_page.php"> First name:<br> <input type="text" name="firstname" value="Mickey"> <br> Last name:<br> <input type="text" name="lastname" value="Mouse"> <br><br> <input type="submit" value="Submit"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_form_submit "亲自试一试")

在浏览器中看起来是这样的：

![](/images/posts/HTML表单（属性元素输入类型输入属性）：看这一篇就够了/e56cc57deb86.png)

* * *

### Action 属性

_action 属性_ 定义在提交表单时执行的动作。

向服务器提交表单的通常做法是使用提交按钮。

通常，表单会被提交到 web 服务器上的网页。

在上面的例子中，指定了某个服务器脚本来处理被提交表单：

```html <form action="action_page.php"> ``` 

如果省略 action 属性，则 action 会被设置为当前页面。

* * *

### Method 属性

_method 属性_ 规定在提交表单时所用的 HTTP 方法（ _GET_ 或  _POST_ ）：

```html <form action="action_page.php" method="GET"> ``` 

或：

```html <form action="action_page.php" method="POST"> ``` 

* * *

### 何时使用 GET？

我们能够使用 GET（默认方法）：

如果表单提交是被动的（比如搜索引擎查询），并且没有敏感信息。

当使用 GET 时，表单数据在页面地址栏中是可见的：

```html action_page.php?firstname=Mickey&lastname=Mouse ``` 

注释：GET 最适合少量数据的提交。浏览器会设定容量限制。

* * *

### 何时使用 POST？

我们应该使用 POST：

如果表单正在更新数据，或者包含敏感信息（例如密码）。

POST 的安全性更好，因为在页面地址栏中被提交的数据是不可见的。

* * *

### Name 属性

如果要正确地被提交，每个输入字段必须设置一个 name 属性。

本例只会提交 "Last name" 输入字段：

#### 实例

```html <form action="action_page.php"> First name:<br> <input type="text" value="Mickey"> <br> Last name:<br> <input type="text" name="lastname" value="Mouse"> <br><br> <input type="submit" value="Submit"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_form_submit_id "亲自试一试")

* * *

### 用 <fieldset> 组合表单数据

_< fieldset>_ 元素组合表单中的相关数据

_< legend>_ 元素为 <fieldset> 元素定义标题。

#### 实例

```html <form action="action_page.php"> <fieldset> <legend>Personal information:</legend> First name:<br> <input type="text" name="firstname" value="Mickey"> <br> Last name:<br> <input type="text" name="lastname" value="Mouse"> <br><br> <input type="submit" value="Submit"></fieldset> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_form_legend "亲自试一试")

以上 HTML 代码在浏览器中看起来是这样的：

![](/images/posts/HTML表单（属性元素输入类型输入属性）：看这一篇就够了/dd50d4beda58.png)

* * *

### HTML Form 属性

HTML <form> 元素，已设置所有可能的属性，是这样的：

#### 实例

```html <form action="action_page.php" method="GET" target="_blank" accept-charset="UTF-8" ectype="application/x-www-form-urlencoded" autocomplete="off" novalidate> . form elements . </form> ``` 

下面是 <form> 属性的列表：

属性| 描述  
---|---  
accept-charset| 规定在被提交表单中使用的字符集（默认：页面字符集）。  
action| 规定向何处提交表单的地址（URL）（提交页面）。  
autocomplete| 规定浏览器应该自动完成表单（默认：开启）。  
enctype| 规定被提交数据的编码（默认：url-encoded）。  
method| 规定在提交表单时所用的 HTTP 方法（默认：GET）。  
name| 规定识别表单的名称（对于 DOM 使用：document.forms.name）。  
novalidate| 规定浏览器不验证表单。  
target| 规定 action 属性中地址的目标（默认：_self）。  
  
* * *

## HTML表单属性

* * *

**介绍 HTML`<form>` 元素的不同属性。**

* * *

### Action 属性

`action` 属性定义提交表单时要执行的操作。

通常，当用户单击“提交”按钮时，表单数据将发送到服务器上的文件中。

在下面的例子中，表单数据被发送到名为 "action_page.php" 的文件。该文件包含处理表单数据的服务器端脚本：

#### 实例

提交后，将表单数据发送到 "action_page.php"：

```html <form action="/action_page.php"> <label for="fname">First name:</label><br> <input type="text" id="fname" name="fname" value="Bill"><br> <label for="lname">Last name:</label><br> <input type="text" id="lname" name="lname" value="Gates"><br><br> <input type="submit" value="Submit"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_form_submit "亲自试一试")

提示：如果省略 action 属性，则将 action 设置为当前页面。

* * *

### Target 属性

`target` 属性规定提交表单后在何处显示响应。

`target` 属性可设置以下值之一：

值| 描述  
---|---  
_blank| 响应显示在新窗口或选项卡中。  
_self| 响应显示在当前窗口中。  
_parent| 响应显示在父框架中。  
_top| 响应显示在窗口的整个 body 中。  
framename| 响应显示在命名的 iframe 中。  
  
默认值为 `_self`，这意味着响应将在当前窗口中打开。

#### 实例

此处，提交的结果将在新的浏览器标签中打开：

```html <form action="/action_page.php" target="_blank"> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_form_target "亲自试一试")

* * *

### Method 属性

method 属性指定提交表单数据时要使用的 HTTP 方法。

表单数据可以作为 URL 变量（使用 `method="get"`）或作为 HTTP post 事务（使用 `method="post"`）发送。

提交表单数据时，默认的 HTTP 方法是 GET。

#### 实例

此例在提交表单数据时使用 GET 方法：

```html <form action="/action_page.php" method="get"> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_form_get "亲自试一试")

#### 实例

此例在提交表单数据时使用 POST 方法：

```html <form action="/action_page.php" method="post"> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_form_post "亲自试一试")

#### 关于 GET 的注意事项：

  * 以名称/值对的形式将表单数据追加到 URL
  * 永远不要使用 GET 发送敏感数据！（提交的表单数据在 URL 中可见！）
  * URL 的长度受到限制（2048 个字符）
  * 对于用户希望将结果添加为书签的表单提交很有用
  * GET 适用于非安全数据，例如 Google 中的查询字符串

#### 关于 POST 的注意事项：

  * 将表单数据附加在 HTTP 请求的正文中（不在 URL 中显示提交的表单数据）
  * POST 没有大小限制，可用于发送大量数据。
  * 带有 POST 的表单提交无法添加书签

提示：如果表单数据包含敏感信息或个人信息，请务必使用 POST！

* * *

### Autocomplete 属性

`autocomplete` 属性规定表单是否应打开自动完成功能。

启用自动完成功能后，浏览器会根据用户之前输入的值自动填写值。

#### 实例

启用自动填写的表单：

```html <form action="/action_page.php" autocomplete="on"> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_form_autocomplete "亲自试一试")

* * *

### Novalidate 属性

`novalidate` 属性是一个布尔属性。

如果已设置，它规定提交时不应验证表单数据。

#### 实例

未设置 novalidate 属性的表单：

```html <form action="/action_page.php" novalidate> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_form_novalidate "亲自试一试")

* * *

## HTML表单元素

* * *

**描述所有 HTML 表单元素。**

* * *

### <input> 元素

最重要的表单元素是  _< input>_ 元素。

<input> 元素根据不同的  _type_ 属性，可以变化为多种形态。

* * *

### <select> 元素（下拉列表）

_< select>_ 元素定义 _下拉列表_ ：

#### 实例

```html <select name="cars"> <option value="volvo">Volvo</option> <option value="saab">Saab</option> <option value="fiat">Fiat</option> <option value="audi">Audi</option> </select> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_elements_select "亲自试一试")

_< option>_ 元素定义待选择的选项。

列表通常会把首个选项显示为被选选项。

能够通过添加 selected 属性来定义预定义选项。

#### 实例

```html <option value="fiat" selected>Fiat</option> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_elements_select_pre "亲自试一试")

* * *

### <textarea> 元素

_< textarea>_ 元素定义多行输入字段（ _文本域_ ）：

#### 实例

```html <textarea name="message" rows="10" cols="30"> The cat was playing in the garden. </textarea> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_elements_textarea "亲自试一试")

以上 HTML 代码在浏览器中显示为：

* * *

### <button> 元素

_< button>_ 元素定义可点击的 _按钮_ ：

#### 实例

```html <button type="button" onclick="alert('Hello World!')">Click Me!</button> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_elements_button "亲自试一试")

以上 HTML 代码在浏览器中显示为：

![](/images/posts/HTML表单（属性元素输入类型输入属性）：看这一篇就够了/2ad37514a26b.png)

* * *

### HTML5 表单元素

HTML5 增加了如下表单元素：

  * <datalist>
  * <keygen>
  * <output>

注释：默认地，浏览器不会显示未知元素。新元素不会破坏您的页面。

* * *

### HTML5 <datalist> 元素

_< datalist>_ 元素为 <input> 元素规定预定义选项列表。

用户会在他们输入数据时看到预定义选项的下拉列表。

<input> 元素的  _list_ 属性必须引用 <datalist> 元素的  _id_ 属性。

#### 实例

通过 <datalist> 设置预定义值的 <input> 元素：

```html <form action="action_page.php"> <input list="browsers"> <datalist id="browsers"> <option value="Internet Explorer"> <option value="Firefox"> <option value="Chrome"> <option value="Opera"> <option value="Safari"> </datalist> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_elements_datalist "亲自试一试")

* * *

## HTML输入类型

* * *

**本章描述 <input> 元素的输入类型。**

* * *

### 输入类型：text

_< input type="text">_ 定义供 _文本输入_ 的单行输入字段：

#### 实例

```html <form> First name:<br> <input type="text" name="firstname"> <br> Last name:<br> <input type="text" name="lastname"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_text "亲自试一试")

以上 HTML 代码在浏览器中看上去是这样的：

![](/images/posts/HTML表单（属性元素输入类型输入属性）：看这一篇就够了/f07801368c7b.png)

* * *

### 输入类型：password

_< input type="password">_ 定义 _密码字段_ ：

#### 实例

```html <form> User name:<br> <input type="text" name="username"> <br> User password:<br> <input type="password" name="psw"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_password "亲自试一试")

以上 HTML 代码在浏览器中看上去是这样的：

![](/images/posts/HTML表单（属性元素输入类型输入属性）：看这一篇就够了/c79b8b9e7300.png)

注释：password 字段中的字符会被做掩码处理（显示为星号或实心圆）。

* * *

### 输入类型：submit

_< input type="submit">_ 定义 _提交_ 表单数据至 _表单处理程序_ 的按钮。

表单处理程序（form-handler）通常是包含处理输入数据的脚本的服务器页面。

在表单的 action 属性中规定表单处理程序（form-handler）：

#### 实例

```html <form action="action_page.php"> First name:<br> <input type="text" name="firstname" value="Mickey"> <br> Last name:<br> <input type="text" name="lastname" value="Mouse"> <br><br> <input type="submit" value="Submit"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_submit "亲自试一试")

以上 HTML 代码在浏览器中看上去是这样的：

![](/images/posts/HTML表单（属性元素输入类型输入属性）：看这一篇就够了/2cbe93cc048c.png)

如果省略了提交按钮的 value 属性，那么该按钮将获得默认文本：

#### 实例

```html <form action="action_page.php"> First name:<br> <input type="text" name="firstname" value="Mickey"> <br> Last name:<br> <input type="text" name="lastname" value="Mouse"> <br><br> <input type="submit"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_submit_nn "亲自试一试")

* * *

### 输入类型：单选

<input type="radio"> 定义单选按钮。

Radio buttons let a user select ONLY ONE of a limited number of choices:

#### 实例

```html <form> <input type="radio" name="sex" value="male" checked>Male <br> <input type="radio" name="sex" value="female">Female </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_radio "亲自试一试")

以上 HTML 代码在浏览器中看上去是这样的：

![](/images/posts/HTML表单（属性元素输入类型输入属性）：看这一篇就够了/b4a894eccf6d.png)

* * *

### 输入类型：复选框

<input type="checkbox"> 定义复选框。

复选框允许用户在有限数量的选项中选择零个或多个选项。

#### 实例

```html <form> <input type="checkbox" name="vehicle" value="Bike">I have a bike <br> <input type="checkbox" name="vehicle" value="Car">I have a car </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_checkbox "亲自试一试")

以上 HTML 代码在浏览器中看上去是这样的：

![](/images/posts/HTML表单（属性元素输入类型输入属性）：看这一篇就够了/80db3344c0d9.png)

* * *

### 输入类型：按钮

_< input type="button>_ 定义 _按钮_ 。

#### 实例

```html <input type="button" onclick="alert('Hello World!')" value="Click Me!"> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_button "亲自试一试")

* * *

### HTML5 输入类型

HTML5 增加了多个新的输入类型：

  * color
  * date
  * datetime
  * datetime-local
  * email
  * month
  * number
  * range
  * search
  * tel
  * time
  * url
  * week

注释：老式 web 浏览器不支持的输入类型，会被视为输入类型 text。

* * *

### 输入类型：数字

_< input type="number">_ 用于应该包含数字值的输入字段。

还能够对数字做出限制。

根据浏览器支持，限制可应用到输入字段。

#### 实例

```html <form> Quantity (between 1 and 5): <input type="number" name="quantity" min="1" max="5"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_number "亲自试一试")

* * *

### 输入限制

这里列出了一些常用的输入限制（其中一些是 HTML5 中新增的）：

属性| 描述  
---|---  
disabled| 规定输入字段应该被禁用。  
max| 规定输入字段的最大值。  
maxlength| 规定输入字段的最大字符数。  
min| 规定输入字段的最小值。  
pattern| 规定通过其检查输入值的正则表达式。  
readonly| 规定输入字段为只读（无法修改）。  
required| 规定输入字段是必需的（必需填写）。  
size| 规定输入字段的宽度（以字符计）。  
step| 规定输入字段的合法数字间隔。  
value| 规定输入字段的默认值。  
  
您将在下一章学到更多有关输入限制的知识。

#### 实例

```html <form> Quantity: <input type="number" name="points" min="0" max="100" step="10" value="30"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=html_input_number_step "亲自试一试")

* * *

### 输入类型：日期

_< input type="date">_ 用于应该包含日期的输入字段。

根据浏览器支持，日期选择器会出现输入字段中。

#### 实例

```html <form> Birthday: <input type="date" name="bday"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_date "亲自试一试")

也可以向输入添加限制：

#### 实例

```html <form> Enter a date before 1980-01-01: <input type="date" name="bday" max="1979-12-31"><br> Enter a date after 2000-01-01: <input type="date" name="bday" min="2000-01-02"><br> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_date_max_min "亲自试一试")

* * *

### 输入类型：颜色

_< input type="color">_ 用于应该包含颜色的输入字段。

根据浏览器支持，颜色选择器会出现输入字段中。

#### 实例

```html <form> Select your favorite color: <input type="color" name="favcolor"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_color "亲自试一试")

* * *

### 输入类型：滑动控件

_< input type="range">_ 用于应该包含一定范围内的值的输入字段。

![](/images/posts/HTML表单（属性元素输入类型输入属性）：看这一篇就够了/bddc76ae602d.png)

根据浏览器支持，输入字段能够显示为滑块控件。

#### 实例

```html <form> <input type="range" name="points" min="0" max="10"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_range "亲自试一试")

您能够使用如下属性来规定限制：min、max、step、value。

* * *

### 输入类型：年月

_< input type="month">_ 允许用户选择月份和年份。

![](/images/posts/HTML表单（属性元素输入类型输入属性）：看这一篇就够了/37ae778f686f.png)

根据浏览器支持，日期选择器会出现输入字段中。

#### 实例

```html <form> Birthday (month and year): <input type="month" name="bdaymonth"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_month "亲自试一试")

* * *

### 输入类型：周、年

_< input type="week">_ 允许用户选择周和年。

根据浏览器支持，日期选择器会出现输入字段中。

#### 实例

```html <form> Select a week: <input type="week" name="week_year"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_week "亲自试一试")

* * *

### 输入类型：时间

_< input type="time">_ 允许用户选择时间（无时区）。

根据浏览器支持，时间选择器会出现输入字段中。

#### 实例

```html <form> Select a time: <input type="time" name="usr_time"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_time "亲自试一试")

* * *

### 输入类型：日期时间（有时区）

_< input type="datetime">_ 允许用户选择日期和时间（有时区）。

根据浏览器支持，日期选择器会出现输入字段中。

#### 实例

```html <form> Birthday (date and time): <input type="datetime" name="bdaytime"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_datetime "亲自试一试")

* * *

### 输入类型：日期时间（无时区）

_< input type="datetime-local">_ 允许用户选择日期和时间（无时区）。

根据浏览器支持，日期选择器会出现输入字段中。

#### 实例

```html <form> Birthday (date and time): <input type="datetime-local" name="bdaytime"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_datetime-local "亲自试一试")

* * *

### 输入类型：email

_< input type="email">_ 用于应该包含电子邮件地址的输入字段。

根据浏览器支持，能够在被提交时自动对电子邮件地址进行验证。

某些智能手机会识别 email 类型，并在键盘增加 ".com" 以匹配电子邮件输入。

#### 实例

```html <form> E-mail: <input type="email" name="email"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_email "亲自试一试")

* * *

### 输入类型：搜索字段

_< input type="search">_ 用于搜索字段（搜索字段的表现类似常规文本字段）。

#### 实例

```html <form> Search Google: <input type="search" name="googlesearch"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_search "亲自试一试")

* * *

### 输入类型：电话号码

_< input type="tel">_ 用于应该包含电话号码的输入字段。

目前只有 Safari 8 支持 tel 类型。

#### 实例

```html <form> Telephone: <input type="tel" name="usrtel"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_tel "亲自试一试")

* * *

### 输入类型：网址

_< input type="url">_ 用于应该包含 URL 地址的输入字段。

根据浏览器支持，在提交时能够自动验证 url 字段。

某些智能手机识别 url 类型，并向键盘添加 ".com" 以匹配 url 输入。

#### 实例

```html <form> Add your homepage: <input type="url" name="homepage"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_url "亲自试一试")

* * *

### value 属性

_value_ 属性规定输入字段的初始值：

#### 实例

```html <form action=""> First name:<br> <input type="text" name="firstname" value="Bill"> <br> Last name:<br> <input type="text" name="lastname"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_attributes_value "亲自试一试")

* * *

### readonly 属性

_readonly_ 属性规定输入字段为只读（不能修改）：

#### 实例

```html <form action=""> First name:<br> <input type="text" name="firstname" value="Bill" readonly> <br> Last name:<br> <input type="text" name="lastname"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_attributes_readonly "亲自试一试")

readonly 属性不需要值。它等同于 readonly="readonly"。

* * *

### disabled 属性

_disabled_ 属性规定输入字段是禁用的。

被禁用的元素是不可用和不可点击的。

被禁用的元素不会被提交。

#### 实例

```html <form action=""> First name:<br> <input type="text" name="firstname" value="Bill" disabled> <br> Last name:<br> <input type="text" name="lastname"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_attributes_disabled "亲自试一试")

disabled 属性不需要值。它等同于 disabled="disabled"。

* * *

### size 属性

_size_ 属性规定输入字段的尺寸（以字符计）：

#### 实例

```html <form action=""> First name:<br> <input type="text" name="firstname" value="Bill" size="40"> <br> Last name:<br> <input type="text" name="lastname"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_attributes_size "亲自试一试")

* * *

### maxlength 属性

_maxlength_ 属性规定输入字段允许的最大长度：

#### 实例

```html <form action=""> First name:<br> <input type="text" name="firstname" maxlength="10"> <br> Last name:<br> <input type="text" name="lastname"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html_input_attributes_maxlength "亲自试一试")

如设置 maxlength 属性，则输入控件不会接受超过所允许数的字符。

该属性不会提供任何反馈。如果需要提醒用户，则必须编写 JavaScript 代码。

注释：输入限制并非万无一失。JavaScript 提供了很多方法来增加非法输入。如需安全地限制输入，则接受者（服务器）必须同时对限制进行检查。

* * *

### HTML5 属性

HTML5 为 <input> 增加了如下属性：

  * autocomplete
  * autofocus
  * form
  * formaction
  * formenctype
  * formmethod
  * formnovalidate
  * formtarget
  * height 和 width
  * list
  * min 和 max
  * multiple
  * pattern (regexp)
  * placeholder
  * required
  * step

并为 <form> 增加如需属性：

  * autocomplete
  * novalidate

* * *

### autocomplete 属性

autocomplete 属性规定表单或输入字段是否应该自动完成。

当自动完成开启，浏览器会基于用户之前的输入值自动填写值。

提示：您可以把表单的 autocomplete 设置为 on，同时把特定的输入字段设置为 off，反之亦然。

autocomplete 属性适用于 <form> 以及如下 <input> 类型：text、search、url、tel、email、password、datepickers、range 以及 color。

#### 实例

自动完成开启的 HTML 表单（某个输入字段为 off）：

```html <form action="action_page.php" autocomplete="on"> First name:<input type="text" name="fname"><br> Last name: <input type="text" name="lname"><br> E-mail: <input type="email" name="email" autocomplete="off"><br> <input type="submit"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_input_autocomplete "亲自试一试")

提示：在某些浏览器中，您也许需要手动启用自动完成功能。

* * *

### novalidate 属性

novalidate 属性属于 <form> 属性。

如果设置，则 novalidate 规定在提交表单时不对表单数据进行验证。

#### 实例

指示表单在被提交时不进行验证：

```html <form action="action_page.php" novalidate> E-mail: <input type="email" name="user_email"> <input type="submit"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_form_novalidate "亲自试一试")

* * *

### autofocus 属性

autofocus 属性是布尔属性。

如果设置，则规定当页面加载时 <input> 元素应该自动获得焦点。

#### 实例

使 "First name" 输入字段在页面加载时自动获得焦点：

```html First name:<input type="text" name="fname" autofocus> ``` 

![](/images/posts/HTML表单（属性元素输入类型输入属性）：看这一篇就够了/ad45471757e2.png)

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_input_autofocus "亲自试一试")

* * *

### form 属性

form 属性规定 <input> 元素所属的一个或多个表单。

提示：如需引用一个以上的表单，请使用空格分隔的表单 id 列表。

#### 实例

输入字段位于 HTML 表单之外（但仍属表单）：

```html <form action="action_page.php" id="form1"> First name: <input type="text" name="fname"><br> <input type="submit" value="Submit"> </form> Last name: <input type="text" name="lname" form="form1"> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_input_form "亲自试一试")

* * *

### formaction 属性

formaction 属性规定当提交表单时处理该输入控件的文件的 URL。

formaction 属性覆盖 <form> 元素的 action 属性。

formaction 属性适用于 type="submit" 以及 type="image"。

#### 实例

拥有两个两个提交按钮并对于不同动作的 HTML 表单：

```html <form action="action_page.php"> First name: <input type="text" name="fname"><br> Last name: <input type="text" name="lname"><br> <input type="submit" value="Submit"><br> <input type="submit" formaction="demo_admin.asp" value="Submit as admin"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_input_formaction "亲自试一试")

* * *

### formenctype 属性

formenctype 属性规定当把表单数据（form-data）提交至服务器时如何对其进行编码（仅针对 method="post" 的表单）。

formenctype 属性覆盖 <form> 元素的 enctype 属性。

formenctype 属性适用于 type="submit" 以及 type="image"。

#### 实例

发送默认编码以及编码为 "multipart/form-data"（第二个提交按钮）的表单数据（form-data）：

```html <form action="demo_post_enctype.asp" method="post"> First name: <input type="text" name="fname"><br> <input type="submit" value="Submit"> <input type="submit" formenctype="multipart/form-data" value="Submit as Multipart/form-data"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_input_formenctype "亲自试一试")

* * *

### formmethod 属性

formmethod 属性定义用以向 action URL 发送表单数据（form-data）的 HTTP 方法。

formmethod 属性覆盖 <form> 元素的 method 属性。

formmethod 属性适用于 type="submit" 以及 type="image"。

#### 实例

第二个提交按钮覆盖表单的 HTTP 方法：

```html <form action="action_page.php" method="get"> First name: <input type="text" name="fname"><br> Last name: <input type="text" name="lname"><br> <input type="submit" value="Submit"> <input type="submit" formmethod="post" formaction="demo_post.asp" value="Submit using POST"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_input_formmethod "亲自试一试")

* * *

### formnovalidate 属性

novalidate 属性是布尔属性。

如果设置，则规定在提交表单时不对 <input> 元素进行验证。

formnovalidate 属性覆盖 <form> 元素的 novalidate 属性。

formnovalidate 属性可用于 type="submit"。

#### 实例

拥有两个提交按钮的表单（验证和不验证）：

```html <form action="action_page.php"> E-mail: <input type="email" name="userid"><br> <input type="submit" value="Submit"><br> <input type="submit" formnovalidate value="Submit without validation"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_input_formnovalidate "亲自试一试")

* * *

### formtarget 属性

formtarget 属性规定的名称或关键词指示提交表单后在何处显示接收到的响应。

formtarget 属性会覆盖 <form> 元素的 target 属性。

formtarget 属性可与 type="submit" 和 type="image" 使用。

#### 实例

这个表单有两个提交按钮，对应不同的目标窗口：

```html <form action="action_page.php"> First name: <input type="text" name="fname"><br> Last name: <input type="text" name="lname"><br> <input type="submit" value="Submit as normal"> <input type="submit" formtarget="_blank" value="Submit to a new window"> </form> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_input_formtarget "亲自试一试")

* * *

### height 和 width 属性

height 和 width 属性规定 <input> 元素的高度和宽度。

height 和 width 属性仅用于 <input type="image">。

注释：请始终规定图像的尺寸。如果浏览器不清楚图像尺寸，则页面会在图像加载时闪烁。

#### 实例

把图像定义为提交按钮，并设置 height 和 width 属性：

```html <input type="image" src="img_submit.gif" alt="Submit" width="48" height="48"> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_input_height_width "亲自试一试")

* * *

### list 属性

list 属性引用的 <datalist> 元素中包含了 <input> 元素的预定义选项。

#### 实例

使用 <datalist> 设置预定义值的 <input> 元素：

```html <input list="browsers"> <datalist id="browsers"> <option value="Internet Explorer"> <option value="Firefox"> <option value="Chrome"> <option value="Opera"> <option value="Safari"> </datalist> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_datalist "亲自试一试")

* * *

### min 和 max 属性

min 和 max 属性规定 <input> 元素的最小值和最大值。

min 和 max 属性适用于如需输入类型：number、range、date、datetime、datetime-local、month、time 以及 week。

#### 实例

具有最小和最大值的 <input> 元素：

```html Enter a date before 1980-01-01: <input type="date" name="bday" max="1979-12-31"> Enter a date after 2000-01-01: <input type="date" name="bday" min="2000-01-02"> Quantity (between 1 and 5): <input type="number" name="quantity" min="1" max="5"> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_input_max_min "亲自试一试")

* * *

### multiple 属性

multiple 属性是布尔属性。

如果设置，则规定允许用户在 <input> 元素中输入一个以上的值。

multiple 属性适用于以下输入类型：email 和 file。

#### 实例

接受多个值的文件上传字段：

```html Select images: <input type="file" name="img" multiple> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_input_multiple "亲自试一试")

* * *

### pattern 属性

pattern 属性规定用于检查 <input> 元素值的正则表达式。

pattern 属性适用于以下输入类型：text、search、url、tel、email、and password。

提示：请使用全局的 title 属性对模式进行描述以帮助用户。

提示：请在我们的 JavaScript 教程中学习更多有关正则表达式的知识。

#### 实例

只能包含三个字母的输入字段（无数字或特殊字符）：

```html Country code: <input type="text" name="country_code" pattern="[A-Za-z]{3}" title="Three letter country code"> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_input_pattern "亲自试一试")

* * *

### placeholder 属性

placeholder 属性规定用以描述输入字段预期值的提示（样本值或有关格式的简短描述）。

该提示会在用户输入值之前显示在输入字段中。

placeholder 属性适用于以下输入类型：text、search、url、tel、email 以及 password。

#### 实例

拥有占位符文本的输入字段：

```html <input type="text" name="fname" placeholder="First name"> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_input_placeholder "亲自试一试")

* * *

### required 属性

required 属性是布尔属性。

如果设置，则规定在提交表单之前必须填写输入字段。

required 属性适用于以下输入类型：text、search、url、tel、email、password、date pickers、number、checkbox、radio、and file.

#### 实例

必填的输入字段：

```html Username: <input type="text" name="usrname" required> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_input_required "亲自试一试")

* * *

### step 属性

step 属性规定 <input> 元素的合法数字间隔。

示例：如果 step="3"，则合法数字应该是 -3、0、3、6、等等。

提示：step 属性可与 max 以及 min 属性一同使用，来创建合法值的范围。

step 属性适用于以下输入类型：number、range、date、datetime、datetime-local、month、time 以及 week。

#### 示例

拥有具体的合法数字间隔的输入字段：

```html <input type="number" name="points" step="3"> ``` 

[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_input_step "亲自试一试")

* * *

### HTML Form 和 Input 元素

标签| 描述  
---|---  
[<form>](https://www.w3school.com.cn/tags/tag_form.asp "<form>")| 为用户输入定义 HTML 表单。  
[<input>](https://www.w3school.com.cn/tags/tag_input.asp "<input>")| 定义输入控件。  
  
如需所有可用 HTML 标签的完整列表，请访问我们的 [HTML 标签参考手册](https://www.w3school.com.cn/tags/index.asp "HTML 标签参考手册")。
