---
title: "HTML Lists"
date: 2022-12-26
updated: 2022-12-26
categories:
  - HTML Beginner to Advanced
tags:
  - html
  - frontend
  - javascript
  - programming
  - html5
lang_pair:
  zh-CN: "HTML列表"
---

**Table of Contents**

Examples

Unordered Lists

Ordered Lists

Definition Lists

More Examples

List Tags

A Complete Example

---

**HTML supports ordered, unordered, and definition lists**

---

### Examples

**Unordered List** - Demonstrates an unordered list.

**Ordered List** - Demonstrates an ordered list.

---

### Unordered Lists

An unordered list is a list of items marked with bullets (typically small black circles).

An unordered list starts with the `<ul>` tag. Each list item starts with the `<li>` tag.

```html
<ul>
<li>Coffee</li>
<li>Milk</li>
</ul>
```

The browser displays:

- Coffee
- Milk

List items can contain paragraphs, line breaks, images, links, other lists, and more.

---

### Ordered Lists

An ordered list is also a list of items, but the items are marked with numbers.

An ordered list starts with the `<ol>` tag. Each list item starts with the `<li>` tag.

```html
<ol>
<li>Coffee</li>
<li>Milk</li>
</ol>
```

The browser displays:

1. Coffee
2. Milk

List items can contain paragraphs, line breaks, images, links, other lists, and more.

---

### Definition Lists

A definition list is not just a list of items, but a combination of items and their descriptions.

A definition list starts with the `<dl>` tag. Each definition term starts with `<dt>`. Each definition description starts with `<dd>`.

```html
<dl>
<dt>Coffee</dt>
<dd>Black hot drink</dd>
<dt>Milk</dt>
<dd>White cold drink</dd>
</dl>
```

The browser displays:

Coffee
  Black hot drink

Milk
  White cold drink

Definition list items can contain paragraphs, line breaks, images, links, other lists, and more.

---

### More Examples

- **Different types of unordered lists** - Demonstrates various unordered list styles.
- **Different types of ordered lists** - Demonstrates various ordered list types.
- **Nested lists** - Demonstrates how to nest lists.
- **Nested lists 2** - Demonstrates more complex nested lists.
- **Definition lists** - Demonstrates a definition list.

---

### List Tags

| Tag | Description |
|-----|-------------|
| `<ol>` | Defines an ordered list |
| `<ul>` | Defines an unordered list |
| `<li>` | Defines a list item |
| `<dl>` | Defines a definition list |
| `<dt>` | Defines a definition term |
| `<dd>` | Defines a definition description |
| `<dir>` | Deprecated. Use `<ul>` instead |
| `<menu>` | Deprecated. Use `<ul>` instead |

---

### A Complete Example

```html
<!DOCTYPE HTML>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>List</title>
</head>
<body>

<h4>Disc Bullet List:</h4>
<ul type="disc">
  <li>Apple</li>
  <li>Banana</li>
  <li>Lemon</li>
  <li>Orange</li>
</ul>

<h4>Circle Bullet List:</h4>
<ul type="circle">
  <li>Apple</li>
  <li>Banana</li>
  <li>Lemon</li>
  <li>Orange</li>
</ul>

<h4>Square Bullet List:</h4>
<ul type="square">
  <li>Apple</li>
  <li>Banana</li>
  <li>Lemon</li>
  <li>Orange</li>
</ul>

<h4>Numbered List:</h4>
<ol>
  <li>Apple</li>
  <li>Banana</li>
  <li>Lemon</li>
  <li>Orange</li>
</ol>

<h4>Uppercase Letter List:</h4>
<ol type="A">
  <li>Apple</li>
  <li>Banana</li>
  <li>Lemon</li>
  <li>Orange</li>
</ol>

<h4>Lowercase Letter List:</h4>
<ol type="a">
  <li>Apple</li>
  <li>Banana</li>
  <li>Lemon</li>
  <li>Orange</li>
</ol>

<h4>Roman Numeral List:</h4>
<ol type="I">
  <li>Apple</li>
  <li>Banana</li>
  <li>Lemon</li>
  <li>Orange</li>
</ol>

<h4>Lowercase Roman Numeral List:</h4>
<ol type="i">
  <li>Apple</li>
  <li>Banana</li>
  <li>Lemon</li>
  <li>Orange</li>
</ol>

<h4>A Nested List:</h4>
<ul>
  <li>Coffee</li>
  <li>Tea
    <ul>
      <li>Black tea</li>
      <li>Green tea
        <ul>
          <li>Chinese tea</li>
          <li>African tea</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Milk</li>
</ul>

<h4>A Definition List:</h4>
<dl>
  <dt>Computer</dt>
  <dd>A device used for computing...</dd>
  <dt>Monitor</dt>
  <dd>A device that displays information visually...</dd>
</dl>

</body>
</html>
```
