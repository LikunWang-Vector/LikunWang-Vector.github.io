---
title: "HTML CSS"
date: 2022-12-25
updated: 2022-12-25
categories:
  - HTML Beginner to Advanced
tags:
  - css
  - html
  - css3
  - html5
  - frontend
lang_pair:
  zh-CN: "HTML CSS"
---

**Table of Contents**

Examples

How to Use Styles

External Style Sheet

Internal Style Sheet

Inline Styles

---

**All formatting code can be moved out of the HTML document and into a separate style sheet.**

---

### Examples

- **Styles in HTML** - Demonstrates how to format HTML using style information added to the `<head>` section.
- **Links without underlines** - Demonstrates how to use the style attribute to create a link without underlines.
- **Link to an external style sheet** - Demonstrates how to use the `<link>` tag to link to an external style sheet.

---

### How to Use Styles

When a browser reads a style sheet, it will format the document according to that style sheet. There are three ways to insert a style sheet:

#### External Style Sheet

When styles need to be applied to many pages, an external style sheet is ideal. With an external style sheet, you can change the look of an entire site by changing one file.

```html
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```

#### Internal Style Sheet

When a single document needs special styling, you can use an internal style sheet. You can define an internal style sheet in the head section using the `<style>` tag.

```html
<head>
<style type="text/css">
body {background-color: red}
p {margin-left: 20px}
</style>
</head>
```

#### Inline Styles

When special styles need to be applied to individual elements, you can use inline styles. Use the style attribute in the relevant tag. The style attribute can contain any CSS property.

```html
<p style="color: red; margin-left: 20px">
This is a paragraph
</p>
```

---

### Style Tags

| Tag | Description |
|-----|-------------|
| `<style>` | Defines style definitions |
| `<link>` | Defines a resource reference |
| `<div>` | Defines a section or division in a document (block-level) |
| `<span>` | Defines a small block or section within a document (inline) |
| `<font>` | Specifies font, font size, and font color. Deprecated. Use styles instead. |
| `<basefont>` | Defines a base font. Deprecated. Use styles instead. |
| `<center>` | Centers text horizontally. Deprecated. Use styles instead. |
