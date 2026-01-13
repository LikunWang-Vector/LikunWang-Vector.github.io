---
title: "HTML Links"
date: 2022-12-25
updated: 2022-12-25
categories:
  - HTML from Beginner to Pro
tags:
  - html
  - frontend
  - javascript
  - html5
lang_pair:
  zh-CN: "HTML链接"
---

> This article is translated from my CSDN blog
> Original link: [HTML链接](https://blog.csdn.net/m0_59180666/article/details/128436648)
> 📊 891 views | 👍 1 like | 💬 1 comment | ⭐ 2 favorites

---

**HTML uses hyperlinks to connect to other documents on the web.**

**Links can be found on almost all web pages. Clicking a link jumps from one page to another.**

---

### HTML Hyperlinks

A hyperlink can be a word, phrase, or image. You can click these to jump to a new document or a section within the current document.

When you move the mouse pointer over a link, the arrow turns into a hand.

We use the `<a>` tag to create links in HTML.

Two ways to use the `<a>` tag:
1. Using the href attribute - creates a link to another document
2. Using the name attribute - creates a bookmark within a document

---

### HTML Link Syntax

```html
<a href="url">Link text</a>
```

The href attribute specifies the link destination.

#### Example

```html
<a href="http://www.example.com/">Visit Example</a>
```

Tip: "Link text" doesn't have to be text. Images or other HTML elements can also be links.

---

### HTML Links - target Attribute

Use the target attribute to define where the linked document opens.

This opens the document in a new window:

```html
<a href="http://www.example.com/" target="_blank">Visit Example!</a>
```

---

### HTML Links - name Attribute

The name attribute specifies the anchor name.

You can use the name attribute to create bookmarks in HTML pages.

#### Named Anchor Syntax

```html
<a name="label">Anchor text</a>
```

#### Example

First, name an anchor (create a bookmark):

```html
<a name="tips">Useful Tips</a>
```

Then create a link to that anchor:

```html
<a href="#tips">Jump to Tips</a>
```

You can also link to anchors in other pages:

```html
<a href="http://www.example.com/page.html#tips">Useful Tips</a>
```

---

### Useful Tips

- Always add a trailing slash to subfolder URLs
- Named anchors are often used to create table of contents in large documents
- If the browser can't find a named anchor, it positions at the top of the document

---

### HTML Link Tags

| Tag | Description |
|-----|-------------|
| `<a>` | Defines an anchor |
