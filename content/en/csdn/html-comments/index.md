---
type: post
csdn: true
title: "HTML Comments"
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
  - "HTML Beginner to Advanced"
summary: "Comment tags are used to insert comments in HTML."
image:
  filename: "covers/csdn-html.png"
  caption: "CSDN Archive · HTML · WEB"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128434250"
csdn_views: 126
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
---

> This article was migrated from my [CSDN blog](https://blog.csdn.net/m0_59180666).
> Original: [HTML Comments](https://blog.csdn.net/m0_59180666/article/details/128434250)
> 📊 126 views | 👍 1 likes | 💬 1 comments | ⭐ 2 favorites

**Comment tags `<!--` and `-->` are used to insert comments in HTML.**

---

### HTML Comment Tags

You can add comments to your HTML source by using the following syntax:

#### Example

```html
<!-- Write your comments here -->
```

Note: There is an exclamation point in the start tag, but not in the end tag.

Comments are not displayed by the browser, but they can help document your HTML source code.

You can use comments to place notifications and reminders in your HTML:

#### Example

```html
<!-- This is a comment -->
<p>This is a paragraph.</p>
<!-- Remember to add information here -->
```

Comments are also great for debugging HTML, because you can comment out HTML lines of code, one at a time, to search for errors:

#### Example

```html
<!-- Do not display this image at the moment:
<img border="0" src="/i/tulip_ballade.jpg" alt="Tulip">
-->
```

---

### Conditional Comments

You may sometimes see conditional comments in HTML:

```html
<!--[if IE 8]>
    .... some HTML here ....
<![endif]-->
```

Conditional comments define HTML tags to be executed by Internet Explorer only.

---

### Software Program Tags

Various HTML software programs can also generate HTML comments.

For example, `<!--webbot bot-->` tags are wrapped in HTML comments created by FrontPage and Expression Web.

As a rule, the presence of these tags helps support the software that created them.

---

### A Complete Example

```html
<!--This is a comment-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<!-- Content goes here -->
</body>
</html>
```
