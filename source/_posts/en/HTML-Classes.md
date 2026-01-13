---
title: "HTML Classes"
date: 2022-12-26
updated: 2022-12-26
categories:
  - HTML Beginner to Advanced
tags:
  - html
  - css
  - frontend
  - html5
  - javascript
lang_pair:
  zh-CN: "HTML类"
---

**Table of Contents**

Example

Classifying Block Elements

Classifying Inline Elements

A Complete Example

---

Classifying HTML elements (setting classes) allows us to define CSS styles for element classes.

Set the same style for the same class, or different styles for different classes.

---

### Example

```html
<!DOCTYPE html>
<html>
<head>
<style>
.cities {
  background-color: black;
  color: white;
  margin: 20px;
  padding: 20px;
}
</style>
</head>
<body>

<div class="cities">
  <h2>London</h2>
  <p>
  London is the capital city of England. 
  It is the most populous city in the United Kingdom, 
  with a metropolitan area of over 13 million inhabitants.
  </p>
</div>

</body>
</html>
```

---

### Classifying Block Elements

The HTML `<div>` element is a *block-level element*. It can be used as a container for other HTML elements.

Setting the class of a `<div>` element allows us to set the same style for identical `<div>` elements:

#### Example

```html
<!DOCTYPE html>
<html>
<head>
<style>
.cities {
  background-color: black;
  color: white;
  margin: 20px;
  padding: 20px;
}
</style>
</head>
<body>

<div class="cities">
  <h2>London</h2>
  <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
</div>

<div class="cities">
  <h2>Paris</h2>
  <p>Paris is the capital and most populous city of France.</p>
</div>

<div class="cities">
  <h2>Tokyo</h2>
  <p>Tokyo is the capital of Japan, the center of the Greater Tokyo Area, and the most populous metropolitan area in the world.</p>
</div>

</body>
</html>
```

---

### Classifying Inline Elements

The HTML `<span>` element is an inline element that can be used as a container for text.

Setting the class of a `<span>` element allows us to set the same style for identical `<span>` elements.

#### Example

```html
<!DOCTYPE html>
<html>
<head>
<style>
  span.red { color: red; }
</style>
</head>
<body>

<h1>My <span class="red">Important</span> Heading</h1>

</body>
</html>
```

---

### A Complete Example

```html
<!DOCTYPE HTML>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Class</title>
<style>
.cities {
  background-color: black;
  color: white;
  margin: 20px;
  padding: 20px;
}
span.red { color: red; }
</style>
</head>
<body>

<div class="cities">
  <h2>London</h2>
  <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
</div>

<div class="cities">
  <h2>Paris</h2>
  <p>Paris is the capital and most populous city of France.</p>
</div>

<div class="cities">
  <h2>Tokyo</h2>
  <p>Tokyo is the capital of Japan, the center of the Greater Tokyo Area, and the most populous metropolitan area in the world.</p>
</div>

<h1>My <span class="red">Important</span> Heading</h1>

</body>
</html>
```
