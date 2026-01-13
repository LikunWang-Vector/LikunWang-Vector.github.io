---
title: "CSS Grid Layout Tutorial: Grid Module, Container, and Items"
date: 2023-02-02
updated: 2023-02-02
categories:
  - CSS Beginner to Advanced
tags:
  - css
  - frontend
  - javascript
  - grid-layout
  - grid-container
cover: /images/posts/CSS网格教程：网格布局模块网格容器网格项目/3d7a555ad741.png
lang_pair:
  zh-CN: "CSS网格教程：网格布局模块/网格容器/网格项目"
---

**Table of Contents**

CSS Grid Layout Module
Grid Layout
Grid Elements
Display Property
Grid Columns
Grid Rows
Grid Gaps
Grid Lines
CSS Grid Container
grid-template-columns Property
grid-template-rows Property
justify-content Property
align-content Property
CSS Grid Items
grid-column Property
grid-row Property
grid-area Property
Naming Grid Items
The Order of Items

---

## CSS Grid Layout Module

### Grid Layout

The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.

### Grid Elements

A grid layout consists of a parent element, with one or more child elements.

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

### Display Property

An HTML element becomes a grid container when its `display` property is set to `grid` or `inline-grid`.

```css
.grid-container {
  display: grid;
}
```

```css
.grid-container {
  display: inline-grid;
}
```

All direct children of the grid container automatically become grid items.

---

### Grid Columns

The vertical lines of grid items are called columns.

### Grid Rows

The horizontal lines of grid items are called rows.

### Grid Gaps

The spaces between each column/row are called gaps.

You can adjust the gap size by using one of the following properties:

- `grid-column-gap`
- `grid-row-gap`
- `grid-gap`

#### Example

The `grid-column-gap` property sets the gap between the columns:

```css
.grid-container {
  display: grid;
  grid-column-gap: 50px;
}
```

The `grid-row-gap` property sets the gap between the rows:

```css
.grid-container {
  display: grid;
  grid-row-gap: 50px;
}
```

The `grid-gap` property is a shorthand property for the `grid-row-gap` and the `grid-column-gap` properties:

```css
.grid-container {
  display: grid;
  grid-gap: 50px 100px;
}
```

The `grid-gap` property can also be used to set both the row gap and the column gap in one value:

```css
.grid-container {
  display: grid;
  grid-gap: 50px;
}
```

---

### Grid Lines

The lines between columns are called column lines.

The lines between rows are called row lines.

Refer to line numbers when placing a grid item in a grid container:

#### Example

Place a grid item at column line 1, and let it end on column line 3:

```css
.item1 {
  grid-column-start: 1;
  grid-column-end: 3;
}
```

Place a grid item at row line 1, and let it end on row line 3:

```css
.item1 {
  grid-row-start: 1;
  grid-row-end: 3;
}
```

---

## CSS Grid Container

To make an HTML element behave as a grid container, you have to set the `display` property to `grid` or `inline-grid`.

Grid containers consist of grid items, placed inside columns and rows.

### grid-template-columns Property

The `grid-template-columns` property defines the number of columns in your grid layout, and it can define the width of each column.

The value is a space-separated-list, where each value defines the width of the respective column.

If you want your grid layout to contain 4 columns, specify the width of the 4 columns, or "auto" if all columns should have the same width.

```css
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
```

The `grid-template-columns` property can also be used to specify the size (width) of the columns:

```css
.grid-container {
  display: grid;
  grid-template-columns: 80px 200px auto 40px;
}
```

---

### grid-template-rows Property

The `grid-template-rows` property defines the height of each row.

The value is a space-separated-list, where each value defines the height of the respective row:

```css
.grid-container {
  display: grid;
  grid-template-rows: 80px 200px;
}
```

---

### justify-content Property

The `justify-content` property is used to align the whole grid inside the container.

Note: The grid's total width has to be less than the container's width for the `justify-content` property to have any effect.

```css
.grid-container {
  display: grid;
  justify-content: space-evenly;
}
```

Other values: `space-around`, `space-between`, `center`, `start`, `end`

---

### align-content Property

The `align-content` property is used to vertically align the whole grid inside the container.

Note: The grid's total height has to be less than the container's height for the `align-content` property to have any effect.

```css
.grid-container {
  display: grid;
  height: 400px;
  align-content: center;
}
```

Other values: `space-evenly`, `space-around`, `space-between`, `start`, `end`

---

## CSS Grid Items

### Child Elements (Items)

A grid container contains grid items.

By default, a container has one grid item for each column, in each row, but you can style the grid items so that they will span multiple columns and/or rows.

### grid-column Property

The `grid-column` property defines on which column(s) to place an item.

You define where the item will start, and where the item will end.

Note: The `grid-column` property is a shorthand property for the `grid-column-start` and the `grid-column-end` properties.

To place an item, you can refer to line numbers, or use the keyword "span" to define how many columns the item will span.

#### Example

Make "item1" start on column 1 and end before column 5:

```css
.item1 {
  grid-column: 1 / 5;
}
```

Make "item1" start on column 1 and span 3 columns:

```css
.item1 {
  grid-column: 1 / span 3;
}
```

---

### grid-row Property

The `grid-row` property defines on which row to place an item.

You define where the item will start, and where the item will end.

Note: The `grid-row` property is a shorthand property for the `grid-row-start` and the `grid-row-end` properties.

#### Example

Make "item1" start on row-line 1 and end on row-line 4:

```css
.item1 {
  grid-row: 1 / 4;
}
```

Make "item1" start on row 1 and span 2 rows:

```css
.item1 {
  grid-row: 1 / span 2;
}
```

---

### grid-area Property

The `grid-area` property can be used as a shorthand property for the `grid-row-start`, `grid-column-start`, `grid-row-end` and the `grid-column-end` properties.

#### Example

Make "item8" start on row-line 1 and column-line 2, and end on row-line 5 and column line 6:

```css
.item8 {
  grid-area: 1 / 2 / 5 / 6;
}
```

Make "item8" start on row-line 2 and column-line 1, and span 2 rows and 3 columns:

```css
.item8 {
  grid-area: 2 / 1 / span 2 / span 3;
}
```

---

### Naming Grid Items

The `grid-area` property can also be used to assign names to grid items.

Named grid items can be referred to by the `grid-template-areas` property of the grid container.

#### Example

Item1 gets the name "myArea", and spans all five columns in a five columns grid layout:

```css
.item1 {
  grid-area: myArea;
}
.grid-container {
  grid-template-areas: 'myArea myArea myArea myArea myArea';
}
```

Each row is defined by apostrophes (' ')

The columns in each row is defined inside the apostrophes, separated by a space.

Note: A period sign represents a grid item with no name.

#### Example

Let "myArea" span two columns in a five columns grid layout (period signs represent items with no name):

```css
.item1 {
  grid-area: myArea;
}
.grid-container {
  grid-template-areas: 'myArea myArea . . .';
}
```

#### Example

Name all items, and make a ready-to-use webpage template:

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

---

### The Order of Items

The Grid Layout allows us to position the items anywhere we like.

The first item in the HTML code does not have to appear as the first item in the grid.

```css
.item1 { grid-area: 1 / 3 / 2 / 4; }
.item2 { grid-area: 2 / 3 / 3 / 4; }
.item3 { grid-area: 1 / 1 / 2 / 2; }
.item4 { grid-area: 1 / 2 / 2 / 3; }
.item5 { grid-area: 2 / 1 / 3 / 2; }
.item6 { grid-area: 2 / 2 / 3 / 3; }
```

You can re-arrange the order for certain screen sizes, by using media queries:

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
