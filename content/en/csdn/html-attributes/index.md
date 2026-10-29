---
type: post
csdn: true
title: "HTML Attributes"
date: "2022-12-25"
lastmod: "2022-12-25"
authors:
  - admin
tags:
  - "html"
  - "frontend"
  - "javascript"
  - "html5"
  - "CSDN"
categories:
  - "HTML from Beginner to Pro"
summary: "Attributes provide additional information about HTML elements."
image:
  filename: "covers/csdn-html.png"
  caption: "CSDN Archive · HTML · WEB"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128433424"
csdn_views: 200
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
---

> This article was migrated from my [CSDN blog](https://blog.csdn.net/m0_59180666).
> Original: [HTML Attributes](https://blog.csdn.net/m0_59180666/article/details/128433424)
> 📊 200 views | 👍 1 likes | 💬 1 comments | ⭐ 2 favorites

> This article is translated from my CSDN blog
> Original link: [HTML属性](https://blog.csdn.net/m0_59180666/article/details/128433424)
> 📊 200 views | 👍 1 like | 💬 1 comment | ⭐ 2 favorites

---

**Attributes provide additional information about HTML elements.**

---

### HTML Attributes

HTML tags can have *attributes*. Attributes provide *more information* about HTML elements.

Attributes always come in name/value pairs like: *name="value"*.

Attributes are always specified in the *start tag* of an HTML element.

### Attribute Example

HTML links are defined with the `<a>` tag. The link address is specified in the href attribute:

```html
<a href="http://www.example.com">This is a link</a>
```

---

### More HTML Attribute Examples

#### Example 1:
`<h1>` defines the start of a heading.
`<h1 align="center">` has additional information about alignment.

#### Example 2:
`<body>` defines the HTML document body.
`<body bgcolor="yellow">` has additional information about background color.

#### Example 3:
`<table>` defines an HTML table.
`<table border="1">` has additional information about table borders.

---

### HTML Tip: Use Lowercase Attributes

Attributes and attribute values are *not case sensitive*.

However, W3C recommends lowercase attributes/values in HTML 4.

Newer versions of (X)HTML require lowercase attributes.

---

### Always Quote Attribute Values

Attribute values should always be enclosed in quotes. Double quotes are most common, but single quotes work too.

In some cases, like when the attribute value contains double quotes, you must use single quotes:

```html
name='Bill "HelloWorld" Gates'
```

---

### HTML Attribute Reference

Common attributes for most HTML elements:

| Attribute | Value | Description |
|-----------|-------|-------------|
| class | *classname* | Specifies the class name |
| id | *id* | Specifies a unique id |
| style | *style_definition* | Specifies inline style |
| title | *text* | Specifies extra information (tooltip) |
