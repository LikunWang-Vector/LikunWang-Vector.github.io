---
title: "HTML Layout"
date: 2022-12-27
updated: 2022-12-27
categories:
  - HTML Beginner to Advanced
tags:
  - html
  - css
  - javascript
  - frontend
  - html5
lang_pair:
  zh-CN: "HTML布局"
---

**Table of Contents**

HTML Layout Using `<div>` Elements

Website Layout Using HTML5

HTML Layout Using Tables

A Complete Example

---

Websites often display content in multiple columns (like a magazine or newspaper).

---

### HTML Layout Using `<div>` Elements

Note: The `<div>` element is often used as a layout tool, because it can easily be positioned with CSS.

This example uses four `<div>` elements to create a multi-column layout:

#### Example

```html
<body>

<div id="header">
<h1>City Gallery</h1>
</div>

<div id="nav">
London<br>
Paris<br>
Tokyo<br>
</div>

<div id="section">
<h1>London</h1>
<p>
London is the capital city of England. It is the most populous city in the United Kingdom,
with a metropolitan area of over 13 million inhabitants.
</p>
<p>
Standing on the River Thames, London has been a major settlement for two millennia,
its history going back to its founding by the Romans, who named it Londinium.
</p>
</div>

<div id="footer">
Copyright Example.com
</div>

</body>
```

#### CSS:

```css
#header {
  background-color: black;
  color: white;
  text-align: center;
  padding: 5px;
}
#nav {
  line-height: 30px;
  background-color: #eeeeee;
  height: 300px;
  width: 100px;
  float: left;
  padding: 5px;
}
#section {
  width: 350px;
  float: left;
  padding: 10px;
}
#footer {
  background-color: black;
  color: white;
  clear: both;
  text-align: center;
  padding: 5px;
}
```

---

### Website Layout Using HTML5

HTML5 offers new semantic elements that define the different parts of a web page:

#### HTML5 Semantic Elements

| Element | Description |
|---------|-------------|
| header | Defines a header for a document or section |
| nav | Defines a container for navigation links |
| section | Defines a section in a document |
| article | Defines an independent self-contained article |
| aside | Defines content aside from the content (like a sidebar) |
| footer | Defines a footer for a document or section |
| details | Defines additional details |
| summary | Defines a heading for the details element |

This example uses `<header>`, `<nav>`, `<section>`, and `<footer>` to create a multi-column layout:

#### Example

```html
<body>

<header>
<h1>City Gallery</h1>
</header>

<nav>
London<br>
Paris<br>
Tokyo<br>
</nav>

<section>
<h1>London</h1>
<p>
London is the capital city of England. It is the most populous city in the United Kingdom,
with a metropolitan area of over 13 million inhabitants.
</p>
<p>
Standing on the River Thames, London has been a major settlement for two millennia,
its history going back to its founding by the Romans, who named it Londinium.
</p>
</section>

<footer>
Copyright Example.com
</footer>

</body>
```

#### CSS

```css
header {
  background-color: black;
  color: white;
  text-align: center;
  padding: 5px;
}
nav {
  line-height: 30px;
  background-color: #eeeeee;
  height: 300px;
  width: 100px;
  float: left;
  padding: 5px;
}
section {
  width: 350px;
  float: left;
  padding: 10px;
}
footer {
  background-color: black;
  color: white;
  clear: both;
  text-align: center;
  padding: 5px;
}
```

---

### HTML Layout Using Tables

Note: The `<table>` element was not designed to be a layout tool.

The purpose of the `<table>` element is to display tabular data.

Using `<table>` elements can achieve layout effects because you can style table elements with CSS:

#### Example

```html
<body>

<table class="lamp">
<tr>
  <th>
    <img src="/images/lamp.jpg" alt="Note" style="height:32px;width:32px">
  </th>
  <td>
    The table element was not designed to be a layout tool.
  </td>
</tr>
</table>

</body>
```

#### CSS

```css
table.lamp {
  width: 100%;
  border: 1px solid #d4d4d4;
}
table.lamp th, td {
  padding: 10px;
}
table.lamp th {
  width: 40px;
}
```
