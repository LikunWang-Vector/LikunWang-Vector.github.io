---
title: "HTML ID Attribute"
date: 2022-12-26
updated: 2022-12-26
categories:
  - HTML Beginner to Advanced
tags:
  - html
  - css
  - frontend
  - javascript
  - html5
lang_pair:
  zh-CN: "HTML id属性"
---

**Table of Contents**

Using the id Attribute

Difference Between Class and ID

HTML Bookmarks with ID and Links

Using the id Attribute in JavaScript

Chapter Summary

---

**The HTML `id` attribute is used to specify a unique id for an HTML element.**

**You cannot have more than one element with the same id in an HTML document.**

---

### Using the id Attribute

The `id` attribute specifies a unique id for an HTML element. The value of the `id` attribute must be unique within the HTML document.

The `id` attribute is used to point to a specific style declaration in a style sheet. It is also used by JavaScript to access and manipulate the element with the specific id.

The syntax for id is: write a hash character (#), followed by an id name. Then, define the CSS properties within curly braces {}.

In the following example, we have an `<h1>` element that points to the id name "myHeader". This `<h1>` element will be styled according to the `#myHeader` style definition in the head section:

#### Example

```html
<!DOCTYPE html>
<html>
<head>
<style>
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}
</style>
</head>
<body>

<h1 id="myHeader">My Header</h1>

</body>
</html>
```

Note: The id name is case-sensitive!

Note: The id must contain at least one character, and must not contain whitespace (spaces, tabs, etc.).

---

### Difference Between Class and ID

A class name can be used by multiple HTML elements, while an id name must only be used by one HTML element within the page:

#### Example

```html
<style>
/* Style the element with id "myHeader" */
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}

/* Style all elements with class name "city" */
.city {
  background-color: tomato;
  color: white;
  padding: 10px;
}
</style>

<!-- An element with a unique id -->
<h1 id="myHeader">My Cities</h1>

<!-- Multiple elements with the same class -->
<h2 class="city">London</h2>
<p>London is the capital of England.</p>

<h2 class="city">Paris</h2>
<p>Paris is the capital of France.</p>

<h2 class="city">Tokyo</h2>
<p>Tokyo is the capital of Japan.</p>
```

---

### HTML Bookmarks with ID and Links

HTML bookmarks are used to allow readers to jump to specific parts of a web page.

Bookmarks can be useful if your page is very long.

To use a bookmark, you must first create it, and then add a link to it.

Then, when the link is clicked, the page will scroll to the location with the bookmark.

#### Example

First, create a bookmark with the `id` attribute:

```html
<h2 id="C4">Chapter 4</h2>
```

Then, add a link to the bookmark ("Jump to Chapter 4"), from within the same page:

#### Example

```html
<a href="#C4">Jump to Chapter 4</a>
```

Or, add a link to the bookmark ("Jump to Chapter 4"), from another page:

```html
<a href="html_demo.html#C4">Jump to Chapter 4</a>
```

---

### Using the id Attribute in JavaScript

JavaScript can also use the id attribute to perform some tasks for a specific element.

JavaScript can access an element with a specific id with the `getElementById()` method:

#### Example

Use the id attribute to manipulate text with JavaScript:

```html
<script>
function displayResult() {
  document.getElementById("myHeader").innerHTML = "Have a nice day!";
}
</script>
```

---

### Chapter Summary

- The `id` attribute is used to specify a unique id for an HTML element
- The value of the `id` attribute must be unique within the HTML document
- The `id` attribute is used by CSS and JavaScript to style/select a specific element
- The value of the `id` attribute is case-sensitive
- The `id` attribute is also used to create HTML bookmarks
- JavaScript can access an element with a specific id with the `getElementById()` method
