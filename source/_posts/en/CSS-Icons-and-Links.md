---
title: "CSS Icons and Links"
date: 2023-02-02
updated: 2023-02-02
categories:
  - CSS Beginner to Advanced
tags:
  - css
  - frontend
  - bootstrap
  - html5
  - Font Awesome
cover: /images/posts/CSS图标与链接/614f6e307c4c.png
lang_pair:
  zh-CN: "CSS图标与链接"
---

**Table of Contents**

How to Add Icons

Font Awesome Icons

Bootstrap Icons

Google Icons

Styling Icons

Styling Links

Text Decoration

Background Color

Link Buttons

---

### How to Add Icons

The simplest way to add icons to your HTML page is with an icon library, such as Font Awesome.

Add the name of the specified icon class to any inline HTML element (like `<i>` or `<span>`).

All icons in the icon libraries below are scalable vectors that can be customized with CSS (size, color, shadow, etc.).

---

### Font Awesome Icons

To use Font Awesome icons, visit fontawesome.com, sign in, and get a code to add to the `<head>` section of your HTML page:

```html
<script src="https://kit.fontawesome.com/yourcode.js"></script>
```

#### Example

```html
<i class="fas fa-cloud"></i>
<i class="fas fa-heart"></i>
<i class="fas fa-car"></i>
<i class="fas fa-file"></i>
<i class="fas fa-bars"></i>
```

---

### Bootstrap Icons

To use Bootstrap glyphicons, add this line inside the `<head>` section of your HTML page:

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
```

#### Example

```html
<i class="glyphicon glyphicon-cloud"></i>
<i class="glyphicon glyphicon-remove"></i>
<i class="glyphicon glyphicon-user"></i>
<i class="glyphicon glyphicon-envelope"></i>
<i class="glyphicon glyphicon-thumbs-up"></i>
```

---

### Google Icons

To use Google icons, add this line inside the `<head>` section of your HTML page:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

#### Example

```html
<i class="material-icons">cloud</i>
<i class="material-icons">favorite</i>
<i class="material-icons">attachment</i>
<i class="material-icons">computer</i>
<i class="material-icons">traffic</i>
```

---

### Styling Icons

All icons above can be styled with CSS:

```html
<i class="material-icons" style="font-size:24px;">cloud</i>
<i class="material-icons" style="font-size:48px;color:red;">cloud</i>
```

---

### Styling Links

Links can be styled with any CSS property (e.g., `color`, `font-family`, `background`, etc.).

#### Example

```css
a {
  color: hotpink;
}
```

Links can be styled differently depending on what state they are in:

- `a:link` - a normal, unvisited link
- `a:visited` - a link the user has visited
- `a:hover` - a link when the user mouses over it
- `a:active` - a link the moment it is clicked

#### Example

```css
/* unvisited link */
a:link {
  color: red;
}

/* visited link */
a:visited {
  color: green;
}

/* mouse over link */
a:hover {
  color: hotpink;
}

/* selected link */
a:active {
  color: blue;
}
```

When setting styles for several link states, follow these order rules:

- a:hover MUST come after a:link and a:visited
- a:active MUST come after a:hover

---

### Text Decoration

The `text-decoration` property is mostly used to remove underlines from links:

```css
a:link {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```

---

### Link Buttons

This example demonstrates combining multiple CSS properties to display links as boxes/buttons:

```css
a:link, a:visited {
  background-color: #f44336;
  color: white;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

a:hover, a:active {
  background-color: red;
}
```
