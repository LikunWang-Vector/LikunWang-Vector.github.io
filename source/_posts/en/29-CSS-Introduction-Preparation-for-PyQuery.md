---
title: "29. CSS Introduction: Preparation for PyQuery Module"
date: 2023-01-21
updated: 2023-01-21
categories:
  - Python Web Scraping from Beginner to Pro
tags:
  - css
  - frontend
  - html
  - css3
lang_pair:
  zh-CN: "29. CSS简介：PyQuery模块的铺垫"
---

> This article is translated from my CSDN blog
> Original link: [29. CSS简介：PyQuery模块的铺垫](https://blog.csdn.net/m0_59180666/article/details/128745415)
> 📊 708 views | 👍 4 likes | 💬 1 comment | ⭐ 4 favorites

---

**Table of Contents**

What is CSS?

CSS Demo - One HTML Page with Multiple Styles!

Why Use CSS?

CSS Example

CSS Solved a Big Problem

CSS Saves a Lot of Work!

Simple Explanation

CSS Selectors

CSS Element Selector

CSS ID Selector

CSS Class Selector

CSS Universal Selector

CSS Grouping Selector

All Simple CSS Selectors

Further Reading

---

## What is CSS?

- **CSS** stands for **C**ascading **S**tyle **S**heets
- **CSS** describes **how HTML elements should be displayed on screen, paper, or other media**
- **CSS** *saves a lot of work*. It can control the layout of multiple web pages simultaneously
- External stylesheets are stored in **CSS files**

---

### CSS Demo - One HTML Page with Multiple Styles!

Below is an HTML page with four different stylesheets. You can view different styles:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Demo</title>
    <!-- Multiple stylesheets can be applied to change the page appearance -->
</head>
<body>
    <div class="container wrapper">
        <div id="top">
            <h1>Welcome to My Homepage</h1><br>
            <p>Use the menu to select different stylesheets.</p>
        </div>
        <!-- Content with different style options -->
    </div>
</body>
</html>
```

---

### Why Use CSS?

CSS is used to define styles for web pages, including design and layout for different devices and screen sizes.

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

HTML was never intended to contain tags for formatting web pages!

HTML was created to **describe the content** of a web page, for example:

```html
<h1>This is a heading.</h1>
<p>This is a paragraph.</p>
```

When tags like `<font>` and color attributes were added to the HTML 3.2 specification, it became a nightmare for web developers. Developing large websites where font and color information had to be added to every page became a long and expensive process.

To solve this problem, the World Wide Web Consortium (W3C) created CSS.

CSS removes style formatting from HTML pages!

---

### CSS Saves a Lot of Work!

Style definitions are usually saved in external .css files.

By using an external stylesheet file, you can change the appearance of an entire website by changing just one file!

---

### Simple Explanation

> HTML is the skeleton of a web page, like a **bare face**;
> 
> CSS is the style of a web page, like **makeup and filters**.

Both are essential for web pages, especially **high-quality web pages**.

---

### CSS Selectors

CSS selectors are used to "find" (or select) HTML elements you want to style.

We can divide CSS selectors into five categories:

- Simple selectors (select elements based on name, id, class)
- Combinator selectors (select elements based on specific relationships)
- Pseudo-class selectors (select elements based on certain states)
- Pseudo-element selectors (select and style parts of elements)
- Attribute selectors (select elements based on attributes or attribute values)

We will cover the most basic CSS selectors.

---

### CSS Element Selector

The element selector selects HTML elements **based on element name**.

#### Example

Here, all `<p>` elements on the page will be center-aligned with red text color:

```css
p {
  text-align: center;
  color: red;
}
```

---

### CSS ID Selector

The id selector uses the **id attribute** of an HTML element to select a specific element.

The **id of an element is unique** within a page, so the id selector is used to select one unique element!

To select an element with a specific id, write a hash (**#**) character, followed by the id of the element.

#### Example

This CSS rule will be applied to the HTML element with id="para1":

```css
#para1 {
  text-align: center;
  color: red;
}
```

Note: An id name cannot start with a number.

---

### CSS Class Selector

The class selector selects HTML elements with a **specific class attribute**.

To select elements with a specific class, write a period (**.**) character, followed by the class name.

#### Example

In this example, **all HTML elements with class="center"** will be red and center-aligned:

```css
.center {
  text-align: center;
  color: red;
}
```

You can also specify that only specific HTML elements should be affected by a class.

#### Example

In this example, only **`<p>` elements with class="center"** will be center-aligned:

```css
p.center {
  text-align: center;
  color: red;
}
```

HTML elements can also refer to multiple classes.

#### Example

In this example, the `<p>` element will be styled according to **class="center" and class="large"**:

```html
<p class="center large">This paragraph refers to two classes.</p>
```

Note: A class name cannot start with a number!

**Also note: If there are conflicting elements, the later class takes precedence.**

---

### CSS Universal Selector

The universal selector (*****) selects all HTML elements on the page.

#### Example

The CSS rule below will affect **every HTML element** on the page:

```css
* {
  text-align: center;
  color: blue;
}
```

---

### CSS Grouping Selector

The grouping selector selects **all HTML elements with the same style definitions**.

Look at the following CSS code (h1, h2, and p elements have the same style definitions):

```css
h1 {
  text-align: center;
  color: red;
}

h2 {
  text-align: center;
  color: red;
}

p {
  text-align: center;
  color: red;
}
```

It's better to group selectors to minimize code.

To group selectors, **separate each selector with a comma**.

#### Example

In this example, we group the selectors from the code above:

```css
h1, h2, p {
  text-align: center;
  color: red;
}
```

---

### All Simple CSS Selectors

| Selector | Example | Description |
|----------|---------|-------------|
| .class | .intro | Selects all elements with class="intro" |
| #id | #firstname | Selects the element with id="firstname" |
| * | * | Selects all elements |
| element | p | Selects all `<p>` elements |
| element,element,.. | div, p | Selects all `<div>` and `<p>` elements |

---

### Further Reading

- CSS Element Selectors
- CSS Selector Grouping
- CSS Class Selectors Explained
- CSS ID Selectors Explained
- CSS Attribute Selectors Explained
- CSS Descendant Selectors
- CSS Child Selectors
- CSS Adjacent Sibling Selectors
