---
title: "HTML and XHTML"
date: 2023-01-01
updated: 2023-01-01
categories:
  - HTML Beginner to Advanced
tags:
  - xhtml
  - html
  - javascript
  - frontend
lang_pair:
  zh-CN: "HTML与XHTML"
---

**Table of Contents**

XHTML Introduction

What is XHTML?

Why Use XHTML?

Document Structure

Element Syntax

Attribute Syntax

How to Convert from HTML to XHTML

XHTML Elements

XHTML Attributes

---

## XHTML Introduction

**XHTML is HTML written as XML.**

---

### What is XHTML?

- XHTML stands for EXtensible HyperText Markup Language
- XHTML is almost identical to HTML 4.01
- XHTML is a stricter and cleaner version of HTML
- XHTML is HTML defined as an XML application
- XHTML is a W3C Recommendation from January 2001
- XHTML is supported by all major browsers

---

### Why Use XHTML?

Many pages on the internet contain "bad" HTML.

XML is a markup language where documents must be marked up correctly and be "well-formed".

By combining the strengths of HTML and XML, XHTML was developed. XHTML is HTML redesigned as XML.

---

### Document Structure

- XHTML DOCTYPE is **mandatory**
- The xmlns attribute in `<html>` is **mandatory**
- `<html>`, `<head>`, `<title>`, and `<body>` are **mandatory**

### Element Syntax

- XHTML elements must be **properly nested**
- XHTML elements must always be **closed**
- XHTML elements must be in **lowercase**
- XHTML documents must have **one root element**

### Attribute Syntax

- XHTML attributes must be in **lowercase**
- XHTML attribute values must be **quoted**
- XHTML attribute minimization is **forbidden**

---

### How to Convert from HTML to XHTML

1. Add an XHTML `<!DOCTYPE>` to the first line of every page
2. Add an xmlns attribute to the html element of every page
3. Change all element names to lowercase
4. Close all empty elements
5. Change all attribute names to lowercase
6. Quote all attribute values

---

## XHTML Elements

### XHTML Elements Must Be Properly Nested

Wrong:
```html
<b><i>This text is bold and italic</b></i>
```

Correct:
```html
<b><i>This text is bold and italic</i></b>
```

### XHTML Elements Must Always Be Closed

Wrong:
```html
<p>This is a paragraph
<p>This is another paragraph
```

Correct:
```html
<p>This is a paragraph</p>
<p>This is another paragraph</p>
```

### Empty Elements Must Also Be Closed

Wrong:
```html
A break: <br>
A horizontal rule: <hr>
An image: <img src="happy.gif" alt="Happy face">
```

Correct:
```html
A break: <br />
A horizontal rule: <hr />
An image: <img src="happy.gif" alt="Happy face" />
```

### XHTML Elements Must Be Lowercase

Wrong:
```html
<BODY>
<P>This is a paragraph</P>
</BODY>
```

Correct:
```html
<body>
<p>This is a paragraph</p>
</body>
```

---

## XHTML Attributes

### XHTML Attributes Must Be Lowercase

Wrong:
```html
<table WIDTH="100%">
```

Correct:
```html
<table width="100%">
```

### XHTML Attribute Values Must Be Quoted

Wrong:
```html
<table width=100%>
```

Correct:
```html
<table width="100%">
```

### Attribute Minimization Is Forbidden

Wrong:
```html
<input checked>
<input readonly>
<input disabled>
<option selected>
```

Correct:
```html
<input checked="checked" />
<input readonly="readonly" />
<input disabled="disabled" />
<option selected="selected" />
```
