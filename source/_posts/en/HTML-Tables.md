---
title: "HTML Tables"
date: 2022-12-26
updated: 2022-12-26
categories:
  - HTML from Beginner to Pro
tags:
  - html
  - frontend
  - javascript
  - html5
cover: /images/posts/HTML表格/3bcda8d006bd.gif
lang_pair:
  zh-CN: "HTML表格"
---

> This article is translated from my CSDN blog
> Original link: [HTML表格](https://blog.csdn.net/m0_59180666/article/details/128440479)
> 📊 307 views | 👍 1 like | 💬 1 comment | ⭐ 2 favorites

---

**You can create tables using HTML.**

---

### Tables

Tables are defined with the `<table>` tag. Each table has rows (defined by `<tr>`) and cells (defined by `<td>`). td stands for "table data".

```html
<table border="1">
<tr>
  <td>row 1, cell 1</td>
  <td>row 1, cell 2</td>
</tr>
<tr>
  <td>row 2, cell 1</td>
  <td>row 2, cell 2</td>
</tr>
</table>
```

---

### Tables and Border Attribute

Without the border attribute, tables display without borders. Use the border attribute to show borders:

```html
<table border="1">
  <tr>
    <td>Row 1, cell 1</td>
    <td>Row 1, cell 2</td>
  </tr>
</table>
```

---

### Table Headers

Table headers are defined with the `<th>` tag. Most browsers display headers as bold, centered text:

```html
<table border="1">
<tr>
  <th>Heading</th>
  <th>Another Heading</th>
</tr>
<tr>
  <td>row 1, cell 1</td>
  <td>row 1, cell 2</td>
</tr>
</table>
```

---

### Empty Cells

Empty cells may not display borders properly. Add a non-breaking space (`&nbsp;`) as a placeholder:

```html
<td>&nbsp;</td>
```

---

### Table Tags

| Tag | Description |
|-----|-------------|
| `<table>` | Defines a table |
| `<caption>` | Defines a table caption |
| `<th>` | Defines a table header |
| `<tr>` | Defines a table row |
| `<td>` | Defines a table cell |
| `<thead>` | Defines table header content |
| `<tbody>` | Defines table body content |
| `<tfoot>` | Defines table footer content |
| `<col>` | Defines column properties |
| `<colgroup>` | Defines column groups |

---

### More Examples

- `colspan="2"` - Cell spans two columns
- `rowspan="2"` - Cell spans two rows
- `cellpadding="10"` - Space between cell content and border
- `cellspacing="10"` - Space between cells
- `bgcolor="pink"` - Background color
- `background="image.jpg"` - Background image
