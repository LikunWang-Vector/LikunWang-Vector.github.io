---
title: "CSS Lists and Tables"
date: 2023-02-02
updated: 2023-02-02
categories:
  - CSS Beginner to Advanced
tags:
  - css
  - javascript
  - frontend
  - html5
  - dreamweaver
cover: /images/posts/CSS列表与表格/b9d0a39fd1bb.png
lang_pair:
  zh-CN: "CSS列表与表格"
---

**Table of Contents**

HTML Lists and CSS List Properties
Different List Item Markers
Image as List Item Marker
Position List Item Markers
Remove Default Settings
List - Shorthand Property
Styling Lists with Colors
Table Borders
Full-Width Table
Collapse Table Borders
Table Width and Height
Horizontal Alignment
Vertical Alignment
Table Padding
Horizontal Dividers
Hoverable Table
Striped Tables
Table Color
Responsive Table

---

### HTML Lists and CSS List Properties

In HTML, there are two main types of lists:

- Unordered lists (`<ul>`) - list items are marked with bullets
- Ordered lists (`<ol>`) - list items are marked with numbers or letters

CSS list properties allow you to:

- Set different list item markers for ordered lists
- Set different list item markers for unordered lists
- Set an image as the list item marker
- Add background colors to lists and list items

---

### Different List Item Markers

The `list-style-type` property specifies the type of list item marker.

#### Example

```css
ul.a {
  list-style-type: circle;
}

ul.b {
  list-style-type: square;
}

ol.c {
  list-style-type: upper-roman;
}

ol.d {
  list-style-type: lower-alpha;
}
```

**Note:** Some values are for unordered lists, and some are for ordered lists.

---

### Image as List Item Marker

The `list-style-image` property specifies an image as the list item marker:

#### Example

```css
ul {
  list-style-image: url('sqpurple.gif');
}
```

---

### Position List Item Markers

The `list-style-position` property specifies the position of the list-item markers (bullet points).

`list-style-position: outside;` means that the bullet points will be outside the list item. The start of each line of a list item will be aligned vertically. This is default.

`list-style-position: inside;` means that the bullet points will be inside the list item. As it is part of the list item, it will be part of the text and push the text at the start.

#### Example

```css
ul.a {
  list-style-position: outside;
}

ul.b {
  list-style-position: inside;
}
```

---

### Remove Default Settings

The `list-style-type: none` property can also be used to remove the markers/bullets. Note that the list also has default margin and padding. To remove this, add `margin: 0` and `padding: 0` to `<ul>` or `<ol>`:

#### Example

```css
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
```

---

### List - Shorthand Property

The `list-style` property is a shorthand property. It is used to set all the list properties in one declaration:

#### Example

```css
ul {
  list-style: square inside url("sqpurple.gif");
}
```

When using the shorthand property, the order of the property values are:

- `list-style-type` (if a list-style-image is specified, the value of this property will be displayed if the image cannot be shown)
- `list-style-position` (specifies whether the list-item markers should appear inside or outside the content flow)
- `list-style-image` (specifies an image as the list item marker)

---

### Styling Lists with Colors

We can also style lists with colors to make them look more interesting.

Anything added to the `<ol>` or `<ul>` tag affects the entire list, while properties added to the `<li>` tag will affect the individual list items:

#### Example

```css
ol {
  background: #ff9999;
  padding: 20px;
}

ul {
  background: #3399ff;
  padding: 20px;
}

ol li {
  background: #ffe5e5;
  padding: 5px;
  margin-left: 35px;
}

ul li {
  background: #cce5ff;
  margin: 5px;
}
```

---

### All CSS List Properties

| Property | Description |
|----------|-------------|
| list-style | Shorthand property. Sets all the list properties in one declaration |
| list-style-image | Specifies an image as the list-item marker |
| list-style-position | Specifies the position of the list-item markers (bullet points) |
| list-style-type | Specifies the type of list-item marker |

---

## CSS Tables

### Table Borders

To specify table borders in CSS, use the `border` property.

The example below specifies a black border for `<table>`, `<th>`, and `<td>` elements:

#### Example

```css
table, th, td {
  border: 1px solid black;
}
```

**Note:** The table above has double borders because both the table and the `<th>` and `<td>` elements have separate borders.

---

### Full-Width Table

If you need a table that spans the entire screen (full-width), add `width: 100%` to the `<table>` element:

#### Example

```css
table {
  width: 100%;
}
```

---

### Collapse Table Borders

The `border-collapse` property sets whether the table borders should be collapsed into a single border:

#### Example

```css
table {
  border-collapse: collapse;
}

table, th, td {
  border: 1px solid black;
}
```

If you only want a border around the table, only specify the `border` property for `<table>`:

```css
table {
  border: 1px solid black;
}
```

---

### Table Width and Height

The width and height of a table are defined by the `width` and `height` properties.

#### Example

```css
table {
  width: 100%;
}

th {
  height: 50px;
}
```

To create a table that only spans half the page, use `width: 50%`:

```css
table {
  width: 50%;
}

th {
  height: 70px;
}
```

---

### Horizontal Alignment

The `text-align` property sets the horizontal alignment (like left, right, or center) of the content in `<th>` or `<td>`.

By default, the content of `<th>` elements are center-aligned and the content of `<td>` elements are left-aligned.

#### Example

```css
th {
  text-align: center;
}
```

To left-align the content of `<th>` elements:

```css
th {
  text-align: left;
}
```

---

### Vertical Alignment

The `vertical-align` property sets the vertical alignment (like top, bottom, or middle) of the content in `<th>` or `<td>`.

By default, the vertical alignment of the content in a table is middle (for both `<th>` and `<td>` elements).

#### Example

```css
td {
  height: 50px;
  vertical-align: bottom;
}
```

---

### Table Padding

To control the space between the border and the content in a table, use the `padding` property on `<td>` and `<th>` elements:

#### Example

```css
th, td {
  padding: 15px;
  text-align: left;
}
```

---

### Horizontal Dividers

Add the `border-bottom` property to `<th>` and `<td>` for horizontal dividers:

#### Example

```css
th, td {
  border-bottom: 1px solid #ddd;
}
```

---

### Hoverable Table

Use the `:hover` selector on `<tr>` to highlight table rows on mouse over:

#### Example

```css
tr:hover {
  background-color: #f5f5f5;
}
```

---

### Striped Tables

For zebra-striped tables, use the `nth-child()` selector and add a `background-color` to all even (or odd) table rows:

#### Example

```css
tr:nth-child(even) {
  background-color: #f2f2f2;
}
```

---

### Table Color

The example below specifies the background color and text color of `<th>` elements:

#### Example

```css
th {
  background-color: #4CAF50;
  color: white;
}
```

---

### Responsive Table

A responsive table will display a horizontal scroll bar if the screen is too small to display the full content.

Add a container element (like `<div>`) with `overflow-x: auto` around the `<table>` element to make it responsive:

#### Example

```html
<div style="overflow-x:auto;">
  <table>
    ... table content ...
  </table>
</div>
```

**Note:** In OS X Lion (on Mac), scrollbars are hidden by default and only shown when being used (even though "overflow:scroll" is set).

---

### CSS Table Properties

| Property | Description |
|----------|-------------|
| border | Shorthand property. Sets all the border properties in one declaration |
| border-collapse | Specifies whether or not table borders should be collapsed |
| border-spacing | Specifies the distance between the borders of adjacent cells |
| caption-side | Specifies the placement of a table caption |
| empty-cells | Specifies whether or not to display borders and background on empty cells in a table |
| table-layout | Sets the layout algorithm to be used for a table |
