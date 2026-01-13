---
title: "Three Ways to Add CSS and CSS Comments"
date: 2023-01-21
updated: 2023-01-21
categories:
  - CSS Beginner to Advanced
tags:
  - css
  - html
  - frontend
lang_pair:
  zh-CN: "添加CSS样式的三种方法与CSS的注释"
---

**Table of Contents**

Three Ways to Use CSS

External CSS

Internal CSS

Inline CSS

Multiple Style Sheets

Cascading Order

CSS Comments

HTML and CSS Comments

---

When a browser reads a style sheet, it will format the HTML document according to the information in the style sheet.

---

### Three Ways to Use CSS

There are three ways to insert a style sheet:

- External CSS
- Internal CSS
- Inline CSS

---

### External CSS

With an external style sheet, you can change the look of an entire website by changing just one file!

Each HTML page must include a reference to the external style sheet file inside the `<link>` element in the head section.

#### Example

External styles are defined within the `<link>` element inside the `<head>` section of an HTML page:

```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
<body>
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
</body>
</html>
```

An external style sheet can be written in any text editor and must be saved with a .css extension.

The external .css file should not contain any HTML tags.

Here is how the "mystyle.css" file looks:

#### "mystyle.css"

```css
body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}
```

> Note: Do not add a space between the property value and the unit (such as `margin-left: 20 px;`). The correct way is: `margin-left: 20px;`

---

### Internal CSS

An internal style sheet may be used if one single HTML page has a unique style.

The internal style is defined inside the `<style>` element, inside the head section.

#### Example

Internal styles are defined within the `<style>` element inside the `<head>` section of an HTML page:

```html
<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
</head>
<body>
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
</body>
</html>
```

---

### Inline CSS

An inline style (also called inline style) may be used to apply a unique style for a single element.

To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.

#### Example

Inline styles are defined within the "style" attribute of the relevant element:

```html
<!DOCTYPE html>
<html>
<body>
<h1 style="color:blue;text-align:center;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>
</body>
</html>
```

> Tip: An inline style loses many of the advantages of a style sheet (by mixing content with presentation). Use this method sparingly.

---

### Multiple Style Sheets

If some properties have been defined for the same selector (element) in different style sheets, the value from the **last read** style sheet will be used.

Assume that an *external style sheet* has the following style for the `<h1>` element:

```css
h1 {
  color: navy;
}
```

Then, assume that an *internal style sheet* also has the following style for the `<h1>` element:

```css
h1 {
  color: orange;
}
```

#### Example

If the internal style is defined *after* the link to the external style sheet, the `<h1>` elements **will be orange**:

```html
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
<style>
h1 {
  color: orange;
}
</style>
</head>
```

#### Example

However, if the internal style is defined *before* the link to the external style sheet, the `<h1>` elements will be navy:

```html
<head>
<style>
h1 {
  color: orange;
}
</style>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```

---

### Cascading Order

What style will be used when there is more than one style specified for an HTML element?

All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:

1. Inline style (inside an HTML element)
2. External and internal style sheets (in the head section)
3. Browser default

> So, **an inline style has the highest priority, and will override external and internal styles and browser defaults.**

---

### CSS Comments

Comments are used to explain the code, and may help when you edit the source code at a later date.

Comments are ignored by browsers.

> A CSS comment inside a `<style>` element starts with `/*` and ends with `*/`

#### Example

```css
/* This is a single-line comment */
p {
  color: red;
}
```

You can add comments wherever you want in the code:

#### Example

```css
p {
  color: red;  /* Set text color to red */
}
```

Comments can span multiple lines:

#### Example

```css
/* This is
a multi-line
comment */

p {
  color: red;
}
```

### HTML and CSS Comments

From the HTML tutorial, you learned that you can add comments to your HTML source by using the `<!--...-->` syntax.

In the following example, we use a combination of HTML and CSS comments:

#### Example

```html
<!DOCTYPE html>
<html>
<head>
<style>
p {
  color: red; /* Set text color to red */
}
</style>
</head>
<body>

<h2>My Heading</h2>

<!-- These paragraphs will be red -->
<p>Hello World!</p>
<p>This text is styled with CSS.</p>
<p>CSS comments are not shown in the output.</p>

</body>
</html>
```
