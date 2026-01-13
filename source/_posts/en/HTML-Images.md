---
title: "HTML Images"
date: 2022-12-26
updated: 2022-12-26
categories:
  - HTML from Beginner to Pro
tags:
  - html
  - frontend
  - html5
cover: /images/posts/HTML图像/439899749d26.jpeg
lang_pair:
  zh-CN: "HTML图像"
---

> This article is translated from my CSDN blog
> Original link: [HTML图像](https://blog.csdn.net/m0_59180666/article/details/128440303)
> 📊 230 views | 👍 1 like | 💬 1 comment | ⭐ 2 favorites

---

**You can display images in documents using HTML.**

---

### The Image Tag and Source Attribute

In HTML, images are defined with the `<img>` tag.

`<img>` is an empty tag - it contains only attributes and has no closing tag.

To display an image, you need the source attribute (src). src means "source".

Syntax:

```html
<img src="url" />
```

The URL is the location where the image is stored.

---

### Alt Attribute (Alternative Text)

The alt attribute defines alternative text for an image.

```html
<img src="boat.gif" alt="Big Boat">
```

When the browser cannot load an image, the alt text tells readers what they're missing. The browser displays this text instead of the image.

Adding alt text to all images is good practice - it helps display information better and is useful for text-only browsers.

---

### Useful Tips

If an HTML file contains ten images, 11 files need to be loaded to display the page correctly. Loading images takes time, so use images sparingly.

---

### Image Tags

| Tag | Description |
|-----|-------------|
| `<img>` | Defines an image |
| `<map>` | Defines an image map |
| `<area>` | Defines clickable areas in an image map |

---

### Example

```html
<p>An image:
<img src="./img/example.jpg" width="128" height="128" />
</p>

<p>An animated image:
<img src="./img/animation.gif" width="50" height="50" />
</p>

<!-- Image alignment -->
<p>Image <img src="./img/icon.gif" align="middle"> in text</p>

<!-- Floating image -->
<p><img src="./img/icon.gif" align="left"> 
A paragraph with an image floating to the left.</p>
```
