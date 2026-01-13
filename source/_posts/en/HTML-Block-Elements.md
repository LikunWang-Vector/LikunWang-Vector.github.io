---
title: "HTML Block and Inline Elements"
date: 2022-12-26
updated: 2022-12-26
categories:
  - HTML Beginner to Advanced
tags:
  - html
  - frontend
  - css
  - html5
  - javascript
lang_pair:
  zh-CN: "HTML块元素"
---

**Table of Contents**

HTML Block Elements

HTML Inline Elements

HTML `<div>` Element

HTML `<span>` Element

HTML Grouping Tags

A Complete Example

---

**You can group HTML elements together using `<div>` and `<span>`.**

---

### HTML Block Elements

Most HTML elements are defined as block-level elements or inline elements.

Block-level elements in browsers typically start (and end) with a new line.

Examples: `<h1>`, `<p>`, `<ul>`, `<table>`

---

### HTML Inline Elements

Inline elements are normally displayed without starting a new line.

Examples: `<b>`, `<td>`, `<a>`, `<img>`

---

### HTML `<div>` Element

The HTML `<div>` element is a block-level element that can be used as a container for grouping other HTML elements.

The `<div>` element has no special meaning. Additionally, because it is a block-level element, the browser will display line breaks before and after it.

When used together with CSS, the `<div>` element can be used to set style attributes for large blocks of content.

Another common use of the `<div>` element is for document layout. It replaces the old method of using tables to define layout. Using `<table>` elements for document layout is not the correct use of tables. The `<table>` element is meant to display tabular data.

---

### HTML `<span>` Element

The HTML `<span>` element is an inline element that can be used as a container for text.

The `<span>` element also has no special meaning.

When used with CSS, the `<span>` element can be used to set style attributes for parts of the text.

---

### HTML Grouping Tags

| Tag | Description |
|-----|-------------|
| `<div>` | Defines a division or section in a document |
| `<span>` | Defines a span, used to group inline elements in a document |

---

### A Complete Example

```html
<!DOCTYPE HTML>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Block</title>
</head>
<body>

<h3>This is a header</h3>
<p>This is a paragraph.</p>

<div style="color:#00FF00">
  <h3>This is a header</h3>
  <p>This is a paragraph.</p>
</div>

<h1>NEWS WEBSITE</h1>
<p>some text. some text. some text...</p>

<div class="news">
  <h2>News headline 1</h2>
  <p>some text. some text. some text...</p>
</div>

<div class="news">
  <h2>News headline 2</h2>
  <p>some text. some text. some text...</p>
</div>

<p><span>some text.</span>some other text.</p>

<p class="tip"><span>Tip:</span>... ... ...</p>

</body>
</html>
```
