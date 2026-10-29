---
type: post
csdn: true
title: "HTML Elements"
date: "2022-12-24"
lastmod: "2022-12-24"
authors:
  - admin
tags:
  - "html5"
  - "frontend"
  - "html"
  - "web-development"
  - "CSDN"
categories:
  - "HTML from Beginner to Pro"
summary: "HTML documents are defined by HTML elements."
image:
  filename: "covers/csdn-html.png"
  caption: "CSDN Archive · HTML · WEB"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128430750"
csdn_views: 129
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
---

> This article was migrated from my [CSDN blog](https://blog.csdn.net/m0_59180666).
> Original: [HTML Elements](https://blog.csdn.net/m0_59180666/article/details/128430750)
> 📊 129 views | 👍 1 likes | 💬 1 comments | ⭐ 2 favorites

> This article is translated from my CSDN blog
> Original link: [HTML元素](https://blog.csdn.net/m0_59180666/article/details/128430750)
> 📊 129 views | 👍 1 like | 💬 1 comment | ⭐ 2 favorites

---

**HTML documents are defined by HTML elements.**

---

### HTML Elements

An HTML element is everything from the start tag to the end tag.

| Start tag | Element content | End tag |
|-----------|-----------------|---------|
| `<p>` | This is a paragraph | `</p>` |
| `<a href="default.htm">` | This is a link | `</a>` |
| `<br />` | | |

Note: Start tags are often called opening tags, end tags are called closing tags.

---

### HTML Element Syntax

- HTML elements begin with a *start tag*
- HTML elements end with an *end tag*
- *Element content* is everything between start and end tags
- Some HTML elements have *empty content*
- Empty elements are *closed in the start tag*
- Most HTML elements can have *attributes*

---

### Nested HTML Elements

Most HTML elements can be nested (contain other HTML elements).

HTML documents consist of nested HTML elements.

#### HTML Document Example

```html
<html>
<body>
<p>This is my first paragraph.</p>
</body>
</html>
```

This example contains three HTML elements: html, body, and p.

---

### Don't Forget the End Tag

Even if you forget the end tag, most browsers will display HTML correctly:

```html
<p>This is a paragraph
<p>This is a paragraph
```

This works in most browsers, but don't rely on it. Forgetting end tags can produce unexpected results.

Note: Future HTML versions won't allow omitting end tags.

---

### Empty HTML Elements

HTML elements with no content are called empty elements. Empty elements are closed in the start tag.

`<br>` is an empty element with no closing tag (defines a line break).

In XHTML, XML, and future HTML versions, all elements must be closed.

Adding a slash in the start tag, like `<br />`, is the correct way to close empty elements.

---

### HTML Tip: Use Lowercase Tags

HTML tags are not case sensitive: `<P>` equals `<p>`.

W3C *recommends* lowercase in HTML 4 and *requires* lowercase in future (X)HTML versions.
