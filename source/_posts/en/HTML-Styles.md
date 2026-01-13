---
title: "HTML Styles"
date: 2022-12-25
updated: 2022-12-25
categories:
  - HTML from Beginner to Pro
tags:
  - html
  - css
  - frontend
  - html5
lang_pair:
  zh-CN: "HTML样式"
---

> This article is translated from my CSDN blog
> Original link: [HTML样式](https://blog.csdn.net/m0_59180666/article/details/128433891)
> 📊 114 views | 👍 1 like | 💬 1 comment | ⭐ 2 favorites

---

The style attribute is used to change the style of HTML elements.

---

```html
<html>
<body style="background-color:PowderBlue;">
<h1>Look! Styles and colors</h1>
<p style="font-family:verdana;color:red">
This text is in Verdana and red</p>
<p style="font-family:times;color:green">
This text is in Times and green</p>
<p style="font-size:30px">This text is 30 pixels high</p>
</body>
</html>
```

---

### The HTML style Attribute

The style attribute's purpose:

**Provides a universal way to change the style of all HTML elements.**

Styles were introduced in HTML 4 as a new preferred way to change HTML element styles. Through HTML styles, you can add styles directly to HTML elements using the style attribute, or define them indirectly in separate style sheets (CSS files).

---

### Deprecated Tags and Attributes

In HTML 4, several tags and attributes are deprecated. Deprecated means they won't be supported in future HTML and XHTML versions.

**Avoid using** these deprecated tags and attributes!

#### Tags and attributes to avoid:

| Tag | Description |
|-----|-------------|
| `<center>` | Defines centered content |
| `<font>` and `<basefont>` | Defines HTML fonts |
| `<s>` and `<strike>` | Defines strikethrough text |
| `<u>` | Defines underlined text |

| Attribute | Description |
|-----------|-------------|
| align | Defines text alignment |
| bgcolor | Defines background color |
| color | Defines text color |

For these tags and attributes: **use styles instead!**

---

### HTML Style Example - Background Color

The background-color property defines the background color:

```html
<body style="background-color:yellow">
<h2 style="background-color:red">This is a heading</h2>
<p style="background-color:green">This is a paragraph.</p>
</body>
```

The style attribute replaces the old bgcolor attribute.

---

### HTML Style Example - Font, Color and Size

The font-family, color, and font-size properties define the font family, color, and size:

```html
<h1 style="font-family:verdana">A heading</h1>
<p style="font-family:arial;color:red;font-size:20px;">A paragraph.</p>
```

The style attribute replaces the old `<font>` tag.

---

### HTML Style Example - Text Alignment

The text-align property specifies horizontal text alignment:

```html
<h1 style="text-align:center">This is a heading</h1>
<p>The heading above is aligned to the center of this page.</p>
```

The style attribute replaces the old "align" attribute.
