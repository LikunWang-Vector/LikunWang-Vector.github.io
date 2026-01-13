---
title: "HTML File Paths"
date: 2022-12-26
updated: 2022-12-26
categories:
  - HTML Beginner to Advanced
tags:
  - html
  - frontend
  - html5
lang_pair:
  zh-CN: "HTML文件路径"
---

**Table of Contents**

HTML File Paths

Absolute File Paths

Relative File Paths

Best Practice

---

| Path | Description |
|------|-------------|
| `<img src="picture.jpg">` | picture.jpg is located in the same folder as the current page |
| `<img src="images/picture.jpg">` | picture.jpg is located in the images folder in the current folder |
| `<img src="/images/picture.jpg">` | picture.jpg is located in the images folder at the root of the current site |
| `<img src="../picture.jpg">` | picture.jpg is located in the folder one level up from the current folder |

---

### HTML File Paths

A file path describes the location of a file in a website's folder structure.

File paths are used when linking to external files like:

- Web pages
- Images
- Style sheets
- JavaScript

---

### Absolute File Paths

An absolute file path is the full URL to an internet file:

#### Example

```html
<img src="https://www.example.com/images/picture.jpg" alt="flower">
```

The `<img>` tag and the src and alt attributes are explained in the HTML Images chapter.

---

### Relative File Paths

A relative file path points to a file relative to the current page.

In this example, the file path points to a file in the images folder located at the root of the current website:

#### Example

```html
<img src="/images/picture.jpg" alt="flower">
```

In this example, the file path points to a file in the images folder located in the current folder:

#### Example

```html
<img src="images/picture.jpg" alt="flower">
```

In this example, the file path points to a file in the images folder located in the folder one level up from the current folder:

#### Example

```html
<img src="../images/picture.jpg" alt="flower">
```

---

### Best Practice

It is best practice to use relative file paths (if possible).

When using relative file paths, your web pages will not be bound to your current base URL. All links will work on your own computer (localhost) as well as on your current public domain and your future public domains.
