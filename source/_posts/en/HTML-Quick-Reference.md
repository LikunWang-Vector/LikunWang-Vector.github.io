---
title: "HTML Quick Reference Guide"
date: 2022-12-31
updated: 2022-12-31
categories:
  - HTML Beginner to Advanced
tags:
  - html
  - frontend
  - javascript
  - css
  - html5
lang_pair:
  zh-CN: "HTML快速参考指南"
---

**Table of Contents**

HTML Basic Document

Text Elements

Logical Styles

Physical Styles

Links, Anchors, Image Elements

Unordered List

Ordered List

Definition List

Tables

Frames

Forms

Entities

Other Elements

---

### HTML Basic Document

```html
<html>
<head>
<title>Document name goes here</title>
</head>
<body>
Visible text goes here
</body>
</html>
```

---

### Text Elements

```html
<p>This is a paragraph</p>
<br> (line break)
<hr> (horizontal rule)
<pre>This text is preformatted</pre>
```

---

### Logical Styles

```html
<em>This text is emphasized</em>
<strong>This text is strong</strong>
<code>This is some computer code</code>
```

---

### Physical Styles

```html
<b>This text is bold</b>
<i>This text is italic</i>
```

---

### Links, Anchors, Image Elements

```html
<a href="http://www.example.com/">This is a Link</a>
<a href="http://www.example.com/"><img src="URL" alt="Alternate Text"></a>
<a href="mailto:webmaster@example.com">Send e-mail</a>
A named anchor: <a name="tips">Useful Tips Section</a>
<a href="#tips">Jump to the Useful Tips Section</a>
```

---

### Unordered List

```html
<ul>
<li>First item</li>
<li>Next item</li>
</ul>
```

---

### Ordered List

```html
<ol>
<li>First item</li>
<li>Next item</li>
</ol>
```

---

### Definition List

```html
<dl>
<dt>First term</dt>
<dd>Definition</dd>
<dt>Next term</dt>
<dd>Definition</dd>
</dl>
```

---

### Tables

```html
<table border="1">
<tr>
  <th>someheader</th>
  <th>someheader</th>
</tr>
<tr>
  <td>sometext</td>
  <td>sometext</td>
</tr>
</table>
```

---

### Frames

```html
<frameset cols="25%,75%">
   <frame src="page1.htm">
   <frame src="page2.htm">
</frameset>
```

---

### Forms

```html
<form action="http://www.example.com/test.asp" method="post/get">
<input type="text" name="lastname" value="Nixon" size="30" maxlength="50">
<input type="password">
<input type="checkbox" checked="checked">
<input type="radio" checked="checked">
<input type="submit">
<input type="reset">
<input type="hidden">
<select>
<option>Apples
<option selected>Bananas
<option>Cherries
</select>
<textarea name="Comment" rows="60" cols="20"></textarea>
</form>
```

---

### Entities

```html
&lt; is the same as <
&gt; is the same as >
&#169; is the same as ©
```

---

### Other Elements

```html
<!-- This is a comment -->
<blockquote>
Text quoted from some source.
</blockquote>
<address>
Address 1<br>
Address 2<br>
City<br>
</address>
```
