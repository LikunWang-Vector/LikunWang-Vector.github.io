---
type: post
csdn: true
title: "HTML Basics - Four Essential Tags"
date: "2022-12-24"
lastmod: "2022-12-24"
authors:
  - admin
tags:
  - "css"
  - "frontend"
  - "html5"
  - "web-development"
  - "CSDN"
categories:
  - "HTML from Beginner to Pro"
summary: "HTML headings are defined with to tags."
image:
  filename: "covers/csdn-html.png"
  caption: "CSDN Archive · HTML · WEB"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128430666"
csdn_views: 240
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
---

> This article was migrated from my [CSDN blog](https://blog.csdn.net/m0_59180666).
> Original: [HTML Basics - Four Essential Tags](https://blog.csdn.net/m0_59180666/article/details/128430666)
> 📊 240 views | 👍 1 likes | 💬 1 comments | ⭐ 2 favorites

> This article is translated from my CSDN blog
> Original link: [HTML基础——以四个标签为例](https://blog.csdn.net/m0_59180666/article/details/128430666)
> 📊 240 views | 👍 1 like | 💬 1 comment | ⭐ 2 favorites

---

### HTML Headings

HTML headings are defined with `<h1>` to `<h6>` tags.

#### Example

```html
<h1>This is a heading</h1>
<h2>This is a heading</h2>
<h3>This is a heading</h3>
```

---

### HTML Paragraphs

HTML paragraphs are defined with the `<p>` tag.

#### Example

```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

---

### HTML Links

HTML links are defined with the `<a>` tag.

#### Example

```html
<a href="http://www.example.com">This is a link</a>
```

Note: The link address is specified in the href attribute.

---

### HTML Images

HTML images are defined with the `<img>` tag.

#### Example

```html
<img src="image.jpg" width="104" height="142" />
```

Note: The image name and dimensions are provided as attributes.

---

### A Complete Example

```html
<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Fundamentals</title>
</head>
<body>
    <h1>This is heading 1</h1>
    <h2>This is heading 2</h2>
    <h3>This is heading 3</h3>
    <p>Use heading tags only for heading text.</p>
    <p>This is a paragraph.</p>
    <a href="http://www.example.com">This is a link</a>
    <img src="./src/img/example.jpg" width="300" height="120" />
</body>
</html>
```

---

### Displaying Images on Web Pages

Create a src (source) folder at the same level as your HTML file, with an img (image) subfolder inside for storing images. Also create a web subfolder for sub-pages.
