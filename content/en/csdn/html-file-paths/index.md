---
type: post
csdn: true
title: "HTML File Paths"
date: "2022-12-26"
lastmod: "2022-12-26"
authors:
  - admin
tags:
  - "html"
  - "frontend"
  - "html5"
  - "CSDN"
categories:
  - "HTML Beginner to Advanced"
summary: "A file path describes the location of a file in a website's folder structure."
image:
  filename: "covers/csdn-html.png"
  caption: "CSDN Archive · HTML · WEB"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128443386"
csdn_views: 766
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 3
---

> This article was migrated from my [CSDN blog](https://blog.csdn.net/m0_59180666).
> Original: [HTML File Paths](https://blog.csdn.net/m0_59180666/article/details/128443386)
> 📊 766 views | 👍 1 likes | 💬 1 comments | ⭐ 3 favorites

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
