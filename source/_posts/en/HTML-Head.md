---
title: "HTML Head"
date: 2022-12-26
updated: 2022-12-26
categories:
  - HTML Beginner to Advanced
tags:
  - javascript
  - frontend
  - html5
  - css
lang_pair:
  zh-CN: "HTML头部"
---

**Table of Contents**

Examples

HTML `<head>` Element

HTML `<title>` Element

HTML `<base>` Element

HTML `<link>` Element

HTML `<style>` Element

HTML `<meta>` Element

HTML `<script>` Element

A Complete Example

---

### Examples

**Document Title** - The `<title>` tag defines the document title.

**All Links Open in New Window** - How to use the base tag to make all links on a page open in a new window.

**Document Description** - Using the `<meta>` element to describe the document.

**Document Keywords** - Using the `<meta>` element to define document keywords.

**Redirect Users** - How to redirect users to a new URL.

---

### HTML `<head>` Element

The `<head>` element is a container for all head elements. Elements inside `<head>` can include scripts, tell the browser where to find stylesheets, provide meta information, and more.

The following tags can be added to the head section: `<title>`, `<base>`, `<link>`, `<meta>`, `<script>`, and `<style>`.

---

### HTML `<title>` Element

The `<title>` tag defines the document's title.

The title element is required in all HTML/XHTML documents.

The title element:

- Defines a title in the browser toolbar
- Provides a title for the page when it is added to favorites
- Displays a title for the page in search engine results

A simplified HTML document:

```html
<!DOCTYPE html>
<html>
<head>
<title>Title of the document</title>
</head>
<body>
The content of the document......
</body>
</html>
```

---

### HTML `<base>` Element

The `<base>` tag specifies the default URL or default target for all links on a page:

```html
<head>
<base href="http://www.example.com/images/" />
<base target="_blank" />
</head>
```

---

### HTML `<link>` Element

The `<link>` tag defines the relationship between a document and an external resource.

The `<link>` tag is most commonly used to link to stylesheets:

```html
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css" />
</head>
```

---

### HTML `<style>` Element

The `<style>` tag is used to define style information for an HTML document.

You can specify how HTML elements should render in a browser within the style element:

```html
<head>
<style type="text/css">
body {background-color:yellow}
p {color:blue}
</style>
</head>
```

---

### HTML `<meta>` Element

Metadata is information about data.

The `<meta>` tag provides metadata about the HTML document. Metadata will not be displayed on the page, but is machine readable.

Typically, meta elements are used to specify page description, keywords, author of the document, last modified date, and other metadata.

The `<meta>` tag always goes inside the head element.

Metadata can be used by browsers (how to display content or reload pages), search engines (keywords), or other web services.

#### Keywords for Search Engines

Some search engines use the name and content attributes of meta elements to index your pages.

The following meta element defines a description of the page:

```html
<meta name="description" content="Free Web tutorials on HTML, CSS, XML" />
```

The following meta element defines keywords for the page:

```html
<meta name="keywords" content="HTML, CSS, XML" />
```

The name and content attributes describe the content of the page.

---

### HTML `<script>` Element

The `<script>` tag is used to define client-side scripts, such as JavaScript.

We will cover the script element in later chapters.

---

### HTML Head Elements

| Tag | Description |
|-----|-------------|
| `<head>` | Defines information about the document |
| `<title>` | Defines the document title |
| `<base>` | Defines a default address or target for all links on a page |
| `<link>` | Defines the relationship between a document and an external resource |
| `<meta>` | Defines metadata about an HTML document |
| `<script>` | Defines a client-side script |
| `<style>` | Defines style information for a document |

---

### A Complete Example

```html
<!DOCTYPE HTML>
<html lang="en">
<head>
<!--The title will not display in the document area-->
<title>Head</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="Content-Language" content="en" />
<base target="_blank" />
<meta name="author" content="VK">
<meta name="revised" content="Vector Kun,11/14/2022">
<meta name="generator" content="PyCharm Community Edition">
<meta name="description" content="HTML examples">
<meta name="keywords" content="HTML, DHTML, CSS, XML, XHTML, JavaScript, VBScript">
</head>
<body>

<p>
<a href="http://www.example.com" target="_blank">This link</a> 
will open in a new window because the target attribute is set to "_blank".
</p>

<p>
<a href="http://www.example.com">This link</a> 
will also open in a new window, even without a target attribute.
</p>

<p>The meta attributes of this document identify the author and editing software, 
and describe the document and its keywords.</p>

<p>
Sorry, we have moved. Your URL is 
<a href="http://www.example.com">http://www.example.com</a>
</p>

<p>You will be redirected to the new address in 5 seconds.</p>

<p>If you still see this message after 5 seconds, please click the link above.</p>

</body>
</html>
```
