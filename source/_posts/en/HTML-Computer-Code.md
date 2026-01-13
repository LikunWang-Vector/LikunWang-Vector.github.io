---
title: "HTML and Computer Code"
date: 2022-12-27
updated: 2022-12-27
categories:
  - HTML Beginner to Advanced
tags:
  - html
  - javascript
  - programming
  - html5
lang_pair:
  zh-CN: "HTML与计算机代码"
---

**Table of Contents**

Computer Code

HTML Computer Code Format

HTML Keyboard Format

HTML Sample Format

HTML Code Format

HTML Variable Format

HTML Computer Code Elements

---

### Computer Code

```
var person = {
  firstName:"Bill",
  lastName:"Gates",
  age:50,
  eyeColor:"blue"
}
```

---

### HTML Computer Code Format

Usually, HTML uses *variable* letter sizes and variable letter spacing.

This is not needed when displaying *computer code* examples.

The `<kbd>`, `<samp>`, and `<code>` elements all support fixed letter size and spacing.

---

### HTML Keyboard Format

The HTML `<kbd>` element defines *keyboard input*:

#### Example

```html
<p>To open a file, select:</p>
<p><kbd>File | Open...</kbd></p>
```

---

### HTML Sample Format

The HTML `<samp>` element defines *sample output from a computer program*:

#### Example

```html
<samp>
demo.example.com login: Apr 12 09:10:17
Linux 2.6.10-grsec+gg3+e+fhs6b+nfs+gr0501+++p3+c4a+gr2b-reslog-v6.189
</samp>
```

---

### HTML Code Format

The HTML `<code>` element defines a piece of *programming code*:

#### Example

```html
<code>
var person = { firstName:"Bill", lastName:"Gates", age:50, eyeColor:"blue" }
</code>
```

The `<code>` element does *not preserve* extra **whitespace** and **line-breaks**.

To fix this, you must wrap the code in a `<pre>` element:

#### Example

```html
<pre>
<code>
var person = {
  firstName:"Bill",
  lastName:"Gates",
  age:50,
  eyeColor:"blue"
}
</code>
</pre>
```

---

### HTML Variable Format

The HTML `<var>` element defines a *mathematical variable*:

#### Example

```html
<p>Einstein wrote:</p>
<p><var>E = m c<sup>2</sup></var></p>
```

---

### HTML Computer Code Elements

| Tag | Description |
|-----|-------------|
| `<code>` | Defines computer code text |
| `<kbd>` | Defines keyboard text |
| `<samp>` | Defines sample computer code |
| `<var>` | Defines a variable |
| `<pre>` | Defines preformatted text |
