---
title: "CSS Introduction"
date: 2023-01-21
updated: 2023-01-21
categories:
  - CSS Beginner to Advanced
tags:
  - css
  - frontend
  - html
lang_pair:
  zh-CN: "CSS简介"
---

**Table of Contents**

What is CSS?

CSS Demo - One HTML Page with Multiple Styles!

Why Use CSS?

CSS Example

CSS Solved a Big Problem

CSS Saves a Lot of Work!

Simple Explanation

---

## What is CSS?

- **CSS** stands for **C**ascading **S**tyle **S**heets
- **CSS** describes **how HTML elements are to be displayed on screen, paper, or other media**
- **CSS** *saves a lot of work*. It can control the layout of multiple web pages all at once
- External stylesheets are stored in **CSS files**

Note: Also known as cascading style sheets.

---

### CSS Demo - One HTML Page with Multiple Styles!

Below is an HTML page with four different stylesheets. You can view different styles:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>CSS Demo</title>
<style>/* Stylesheet 1: */
body {
  font: 100% Lucida Sans, Verdana;
  margin: 20px;
  line-height: 26px;
}
.container {
  xmin-width: 900px;
}
.wrapper {
  position: relative;
  overflow: auto;
}
#top, #sidebar, #bottom, .menuitem {
  border-radius: 4px;
  margin: 4px;
}
#top {
  background-color: #4CAF50;
  color: #ffffff;
  padding: 15px;
}
#menubar {
  width: 200px;
  float: left
}
#main {
  padding: 10px;
  margin: 0 210px;
}
#sidebar {
  background-color: #32a4e7;
  color: #ffffff;
  padding: 10px;
  width: 180px;
  bottom: 0;
  top: 0;
  right: 0;
  position: absolute;
}
#bottom {
  border: 1px solid #d4d4d4;
  background-color: #f1f1f1;
  text-align: center;
  padding: 10px;
  font-size: 70%;
  line-height: 14px;
}
</style>
</head>
<body>
<div class="container wrapper">
  <div id="top">
    <h1>Welcome to My Homepage</h1><br>
    <p>Use the menu to select different stylesheets.</p>
  </div>
  <div class="wrapper">
    <div id="menubar">
      <ul id="menulist">
        <li class="menuitem" onclick="reStyle(0)">Stylesheet 1</li>
        <li class="menuitem" onclick="reStyle(1)">Stylesheet 2</li>
        <li class="menuitem" onclick="reStyle(2)">Stylesheet 3</li>
        <li class="menuitem" onclick="reStyle(3)">Stylesheet 4</li>
        <li class="menuitem" onclick="noStyles()">No Stylesheet</li>
      </ul>
    </div>
    <div id="main">
      <h1>Same Page, Different Stylesheets</h1>
      <p>This demonstrates how different stylesheets can change the layout of an HTML page.</p>
    </div>
  </div>
</div>
</body>
</html>
```

---

### Why Use CSS?

CSS is used to define styles for your web pages, including the design and layout for different devices and screen sizes.

#### CSS Example

```css
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}
```

---

### CSS Solved a Big Problem

HTML was NEVER intended to contain tags for formatting a web page!

HTML was created to **describe the content** of a web page, like:

```html
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
```

When tags like `<font>` and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers. Development of large websites, where fonts and color information were added to every single page, became a long and expensive process.

To solve this problem, the World Wide Web Consortium (W3C) created CSS.

CSS removed the style formatting from the HTML page!

---

### CSS Saves a Lot of Work!

Style definitions are normally saved in external .css files.

With an external stylesheet file, you can change the look of an entire website by changing just one file!

---

### Simple Explanation

> HTML is the skeleton of a web page, like a **bare face without makeup**;
> 
> CSS is the style of a web page, like **makeup and beauty filters**.

Both are essential for web pages, especially for **high-quality web pages**.
