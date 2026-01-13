---
title: "HTML5 Semantic Elements"
date: 2022-12-27
updated: 2022-12-27
categories:
  - HTML Beginner to Advanced
tags:
  - html5
  - html
  - frontend
  - css
  - javascript
cover: /images/posts/HTML5语义元素/c95d3aea07da.png
lang_pair:
  zh-CN: "HTML5语义元素"
---

**Table of Contents**

What are Semantic Elements?

New Semantic Elements in HTML5

HTML5 `<section>` Element

HTML5 `<article>` Element

HTML5 `<header>` Element

HTML5 `<footer>` Element

HTML5 `<nav>` Element

HTML5 `<aside>` Element

HTML5 `<figure>` and `<figcaption>` Elements

Why Use HTML5 Elements?

Semantic Elements in HTML5

---

**Semantics (from ancient Greek) can be defined as the study of the meaning of language.**

**Semantic elements are elements with meaning.**

---

### What are Semantic Elements?

Semantic elements clearly describe their meaning to both the browser and the developer.

Examples of **non-semantic** elements: `<div>` and `<span>` - Tell nothing about their content.

Examples of **semantic** elements: `<form>`, `<table>`, and `<img>` - Clearly define their content.

---

### New Semantic Elements in HTML5

Many websites contain HTML code like: `<div id="nav">` `<div class="header">` `<div id="footer">` to indicate navigation, header, and footer.

HTML5 offers new semantic elements to define different parts of a web page:

- `<article>`
- `<aside>`
- `<details>`
- `<figcaption>`
- `<figure>`
- `<footer>`
- `<header>`
- `<main>`
- `<mark>`
- `<nav>`
- `<section>`
- `<summary>`
- `<time>`

---

### HTML5 `<section>` Element

The `<section>` element defines a section in a document.

According to W3C's HTML documentation: "A section is a thematic grouping of content, typically with a heading."

#### Example

```html
<section>
   <h1>WWF</h1>
   <p>The World Wide Fund for Nature (WWF) is....</p>
</section>
```

---

### HTML5 `<article>` Element

The `<article>` element specifies independent, self-contained content.

An article should make sense on its own, and it should be possible to read it independently from the rest of the website.

Use cases for `<article>`:
- Forum posts
- Blog posts
- News stories

---

### HTML5 `<header>` Element

The `<header>` element specifies a header for a document or section.

The `<header>` element should be used as a container for introductory content.

You can have several `<header>` elements in one document.

---

### HTML5 `<footer>` Element

The `<footer>` element specifies a footer for a document or section.

A `<footer>` element should contain information about its containing element.

A footer typically contains the author, copyright information, links to terms of use, contact information, etc.

---

### HTML5 `<nav>` Element

The `<nav>` element defines a set of navigation links.

The `<nav>` element is intended for large blocks of navigation links. However, not all links in a document should be inside a `<nav>` element!

---

### HTML5 `<aside>` Element

The `<aside>` element defines some content aside from the content it is placed in (like a sidebar).

The aside content should be related to the surrounding content.

---

### HTML5 `<figure>` and `<figcaption>` Elements

In books and newspapers, it is common to have captions with images.

The purpose of a caption is to add a visible explanation to an image.

With HTML5, images and captions can be grouped together in a `<figure>` element:

#### Example

```html
<figure>
   <img src="pic_mountain.jpg" alt="The Pulpit Rock" width="304" height="228">
   <figcaption>Fig1. - The Pulpit Rock, Norway.</figcaption>
</figure>
```

---

### Why Use HTML5 Elements?

With HTML4, developers used their favorite attribute names to style page elements: header, top, bottom, footer, menu, navigation, main, container, content, article, sidebar, topnav, etc.

This made it impossible for browsers to identify the correct web page content.

With HTML5 elements like `<header>`, `<footer>`, `<nav>`, `<section>`, `<article>`, this problem is solved.

---

### Semantic Elements in HTML5

| Tag | Description |
|-----|-------------|
| `<article>` | Defines an article |
| `<aside>` | Defines content aside from the page content |
| `<details>` | Defines additional details that the user can view or hide |
| `<figcaption>` | Defines a caption for a `<figure>` element |
| `<figure>` | Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc. |
| `<footer>` | Defines a footer for a document or section |
| `<header>` | Specifies a header for a document or section |
| `<main>` | Specifies the main content of a document |
| `<mark>` | Defines marked/highlighted text |
| `<nav>` | Defines navigation links |
| `<section>` | Defines a section in a document |
| `<summary>` | Defines a visible heading for a `<details>` element |
| `<time>` | Defines a date/time |
