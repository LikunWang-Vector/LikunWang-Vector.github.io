---
title: "HTML Paragraphs"
date: 2022-12-25
updated: 2022-12-25
categories:
  - HTML from Beginner to Pro
tags:
  - html
  - frontend
  - css
  - html5
lang_pair:
  zh-CN: "HTML段落"
---

> This article is translated from my CSDN blog
> Original link: [HTML段落](https://blog.csdn.net/m0_59180666/article/details/128433535)
> 📊 146 views | 👍 1 like | 💬 1 comment | ⭐ 2 favorites

---

**HTML documents can be divided into paragraphs.**

---

### HTML Paragraphs

Paragraphs are defined with the `<p>` tag.

#### Example

```html
<p>This is a paragraph</p>
<p>This is another paragraph</p>
```

Note: Browsers automatically add blank lines before and after paragraphs. (`<p>` is a block-level element)

Tip: Using empty paragraph tags `<p></p>` to insert blank lines is bad practice. Use `<br />` instead!

---

### Don't Forget the End Tag

Even without end tags, most browsers will display HTML correctly:

#### Example

```html
<p>This is a paragraph
<p>This is another paragraph
```

This works in most browsers, but don't rely on it. Forgetting end tags can produce unexpected results.

Note: Future HTML versions won't allow omitting end tags.

---

### HTML Line Breaks

To create a new line without starting a new paragraph, use the `<br />` tag:

```html
<p>This is<br />a para<br />graph with line breaks</p>
```

The `<br />` element is an empty HTML element. Since a closing tag has no meaning, it has no end tag.

---

### `<br>` or `<br />`?

In XHTML, XML, and future HTML versions, elements without end tags are not allowed.

Even though `<br>` displays correctly in all browsers, using `<br />` is *better for the future*.

---

### HTML Output - Useful Tips

We cannot be certain how HTML will be displayed. Screen size and window adjustments can cause different results.

You cannot change the output by adding extra spaces or lines in HTML code.

When displaying pages, browsers remove extra spaces and blank lines from source code. All consecutive spaces or blank lines are treated as a single space.

---

### HTML Tag Reference

| Tag | Description |
|-----|-------------|
| `<p>` | Defines a paragraph |
| `<br />` | Inserts a single line break |
