---
title: "HTML5 Style Guide and Coding Conventions"
date: 2022-12-27
updated: 2022-12-27
categories:
  - HTML Beginner to Advanced
tags:
  - html5
  - xhtml
  - html
  - frontend
  - javascript
lang_pair:
  zh-CN: "HTML5样式指南和代码约定"
---

**Table of Contents**

HTML Coding Conventions

Use Correct Document Type

Use Lowercase Element Names

Close All HTML Elements

Close Empty HTML Elements

Use Lowercase Attribute Names

Quote Attribute Values

Required Attributes

Spaces and Equal Signs

Avoid Long Code Lines

Blank Lines and Indentation

Metadata

HTML Comments

Style Sheets

Loading JavaScript in HTML

Use Lowercase File Names

File Extensions

---

### HTML Coding Conventions

Web developers are often uncertain about the coding style and syntax to use in HTML.

With HTML5, you must create your own **best practices, style guide, and coding conventions**.

---

### Use Correct Document Type

Always declare the document type as the first line in your document:

```html
<!DOCTYPE html>
```

---

### Use Lowercase Element Names

HTML5 allows mixing uppercase and lowercase letters in element names.

We recommend using lowercase element names:

- Mixing uppercase and lowercase names is bad
- Developers are used to using lowercase names (as in XHTML)
- Lowercase looks cleaner
- Lowercase is easier to write

Good:
```html
<section>
   <p>This is a paragraph.</p>
</section>
```

---

### Close All HTML Elements

In HTML5, you don't have to close all elements (for example the `<p>` element).

We recommend closing all HTML elements:

Good:
```html
<section>
   <p>This is a paragraph.</p>
   <p>This is a paragraph.</p>
</section>
```

---

### Close Empty HTML Elements

In HTML5, it is optional to close empty elements.

Allowed:
```html
<meta charset="utf-8">
```

Also allowed:
```html
<meta charset="utf-8" />
```

The slash (/) is required in XHTML and XML.

---

### Use Lowercase Attribute Names

HTML5 allows mixing uppercase and lowercase letters in attribute names.

We recommend using lowercase attribute names.

Good:
```html
<div class="menu">
```

---

### Quote Attribute Values

HTML5 allows attribute values without quotes.

We recommend quoting attribute values:

- You MUST use quotes if the value contains spaces
- Mixing styles is never good
- Quoted values are easier to read

Good:
```html
<table class="table striped">
```

---

### Required Attributes

Always use the **alt** attribute with images. This attribute is important when the image cannot be displayed.

```html
<img src="html5.gif" alt="HTML5" style="width:128px;height:128px">
```

Always define image size. It reduces flickering because the browser can reserve space for the image before loading.

---

### Spaces and Equal Signs

Spaces around equal signs are legal, but space-less is easier to read:

Good:
```html
<link rel="stylesheet" href="styles.css">
```

---

### Avoid Long Code Lines

When using an HTML editor, it is inconvenient to scroll right and left to read the HTML code.

Try to avoid code lines longer than 80 characters.

---

### Blank Lines and Indentation

Do not add blank lines without a reason.

For readability, add blank lines to separate large or logical code blocks.

For readability, add 2 spaces of indentation. Do not use TAB.

---

### Metadata

The `<title>` element is required in HTML5. Make the title as meaningful as possible.

```html
<title>HTML5 Syntax and Coding Style</title>
```

To ensure proper interpretation and correct search engine indexing, both the language and the character encoding should be defined as early as possible:

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
   <meta charset="UTF-8">
   <title>HTML5 Syntax and Coding Style</title>
</head>
```

---

### HTML Comments

Short comments should be written on one line:

```html
<!-- This is a comment -->
```

Long comments, spanning many lines, should be written with `<!--` and `-->` on separate lines:

```html
<!--
   This is a long comment example.
   This is a long comment example.
-->
```

---

### Style Sheets

Use simple syntax for linking style sheets (the type attribute is not necessary):

```html
<link rel="stylesheet" href="styles.css">
```

---

### Loading JavaScript in HTML

Use simple syntax for loading external scripts (the type attribute is not necessary):

```html
<script src="myscript.js">
```

---

### Use Lowercase File Names

Most web servers (Apache, Unix) are case sensitive about file names.

To avoid these problems, always use lowercase file names.

---

### File Extensions

HTML files should have a **.html** extension (not .htm).

CSS files should have a **.css** extension.

JavaScript files should have a **.js** extension.
