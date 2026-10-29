---
type: post
csdn: true
title: "HTML JavaScript"
date: "2022-12-26"
lastmod: "2022-12-26"
authors:
  - admin
tags:
  - "javascript"
  - "html"
  - "frontend"
  - "html5"
  - "programming"
  - "CSDN"
categories:
  - "HTML Beginner to Advanced"
summary: "The HTML script tag defines a client-side script (JavaScript)."
image:
  filename: "covers/csdn-html.png"
  caption: "CSDN Archive · HTML · WEB"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128443233"
csdn_views: 172
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
---

> This article was migrated from my [CSDN blog](https://blog.csdn.net/m0_59180666).
> Original: [HTML JavaScript](https://blog.csdn.net/m0_59180666/article/details/128443233)
> 📊 172 views | 👍 1 likes | 💬 1 comments | ⭐ 2 favorites

## JavaScript Makes HTML Pages More Dynamic and Interactive

#### Example

```html
<!DOCTYPE html>
<html>
<body>

<h1>My First JavaScript</h1>

<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
Click me to display Date and Time
</button>

<p id="demo"></p>

</body>
</html>
```

---

### HTML `<script>` Tag

The HTML `<script>` tag is used to define a client-side script (JavaScript).

The `<script>` element either contains script statements, or it points to an external script file through the `src` attribute.

Common uses for JavaScript are image manipulation, form validation, and dynamic changes of content.

To select an HTML element, JavaScript most often uses the `document.getElementById()` method.

This JavaScript example writes "Hello JavaScript!" into an HTML element with id="demo":

#### Example

```html
<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>
```

---

### JavaScript Capabilities

Here are some examples of what JavaScript can do:

#### JavaScript Can Change Content

```javascript
document.getElementById("demo").innerHTML = "Hello JavaScript!";
```

#### JavaScript Can Change Styles

```javascript
document.getElementById("demo").style.fontSize = "25px";
document.getElementById("demo").style.color = "red";
document.getElementById("demo").style.backgroundColor = "yellow";
```

#### JavaScript Can Change Attributes

```javascript
document.getElementById("image").src = "picture.gif";
```

---

### HTML `<noscript>` Tag

The HTML `<noscript>` tag defines alternate content to be displayed to users that have disabled scripts in their browser or have a browser that doesn't support scripts:

#### Example

```html
<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>
<noscript>Sorry, your browser does not support JavaScript!</noscript>
```

---

### HTML Script Tags

| Tag | Description |
|-----|-------------|
| `<script>` | Defines a client-side script |
| `<noscript>` | Defines alternate content for users that do not support client-side scripts |
