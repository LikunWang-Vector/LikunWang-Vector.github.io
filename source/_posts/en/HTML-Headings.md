---
title: "HTML Headings"
date: 2022-12-25
updated: 2022-12-25
categories:
  - HTML from Beginner to Pro
tags:
  - html
  - frontend
  - html5
lang_pair:
  zh-CN: "HTML标题"
---

> This article is translated from my CSDN blog
> Original link: [HTML标题](https://blog.csdn.net/m0_59180666/article/details/128433463)
> 📊 115 views | 👍 1 like | 💬 1 comment | ⭐ 2 favorites

---

**Headings are important in HTML documents.**

---

### HTML Headings

Headings are defined with `<h1>` to `<h6>` tags.

`<h1>` defines the largest heading. `<h6>` defines the smallest heading.

#### Example

```html
<h1>This is a heading</h1>
<h2>This is a heading</h2>
<h3>This is a heading</h3>
```

Note: Browsers automatically add blank lines before and after headings.

---

### Headings Are Important

Use HTML heading tags only for headings. **Don't use headings just to make text bold or large.**

Search engines use headings to index the structure and content of your web pages.

Users can skim your page by its headings, so using headings to show document structure is important.

Use h1 for main headings (most important), followed by h2 (less important), then h3, and so on.

---

### HTML Horizontal Rules

The `<hr />` tag creates a horizontal line in an HTML page.

The hr element can be used to separate content.

#### Example

```html
<p>This is a paragraph</p>
<hr />
<p>This is a paragraph</p>
```

---

### HTML Comments

Comments can be inserted into HTML code to improve readability. Browsers ignore comments and don't display them.

#### Example

```html
<!-- This is a comment -->
```

Note: There must be an exclamation mark after the opening bracket, but not before the closing bracket.

**Tip: In PyCharm, select code and press "Ctrl+/" to comment it out.**

---

### HTML Tip - How to View Source Code

Right-click on a web page and select "View Page Source" (or press F12 for developer tools) to see the HTML code.

---

### HTML Tag Reference

| Tag | Description |
|-----|-------------|
| `<html>` | Defines an HTML document |
| `<body>` | Defines the document body |
| `<h1>` to `<h6>` | Defines HTML headings |
| `<hr>` | Defines a horizontal line |
| `<!--...-->` | Defines a comment |
