---
type: post
csdn: true
title: "CSS Text and Fonts (Formatting, Alignment, Decoration, Transform, Spacing, Shadow)"
date: "2023-01-24"
lastmod: "2023-01-24"
authors:
  - admin
tags:
  - "css"
  - "frontend"
  - "html"
  - "CSDN"
categories:
  - "CSS Beginner to Advanced"
summary: "The color property is used to set the color of the text. The color is specified by:"
image:
  filename: "covers/csdn-html.png"
  caption: "CSDN Archive · HTML · WEB"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128756561"
csdn_views: 1020
csdn_likes: 3
csdn_comments: 1
csdn_favorites: 5
---

> This article was migrated from my [CSDN blog](https://blog.csdn.net/m0_59180666).
> Original: [CSS Text and Fonts (Formatting, Alignment, Decoration, Transform, Spacing, Shadow)](https://blog.csdn.net/m0_59180666/article/details/128756561)
> 📊 1020 views | 👍 3 likes | 💬 1 comments | ⭐ 5 favorites

### Text Color

The `color` property is used to set the color of the text. The color is specified by:

- A color name - like "red"
- A HEX value - like "#ff0000"
- An RGB value - like "rgb(255,0,0)"

#### Example

```css
body {
  color: blue;
}

h1 {
  color: green;
}
```

---

### Text Alignment

The `text-align` property is used to set the horizontal alignment of text.

Text can be left-aligned, right-aligned, centered, or justified.

#### Example

```css
h1 {
  text-align: center;
}

h2 {
  text-align: left;
}

h3 {
  text-align: right;
}
```

When `text-align` is set to "justify", each line is stretched so that every line has equal width, and the left and right margins are straight (like in magazines and newspapers).

---

### Text Decoration

The `text-decoration` property is used to set or remove decorations from text.

`text-decoration: none;` is often used to remove underlines from links:

#### Example

```css
a {
  text-decoration: none;
}

h1 {
  text-decoration: overline;
}

h2 {
  text-decoration: line-through;
}

h3 {
  text-decoration: underline;
}
```

---

### Text Transform

The `text-transform` property is used to specify uppercase and lowercase letters in text.

#### Example

```css
p.uppercase {
  text-transform: uppercase;
}

p.lowercase {
  text-transform: lowercase;
}

p.capitalize {
  text-transform: capitalize;
}
```

---

### Text Shadow

The `text-shadow` property adds shadow to text.

#### Example

```css
h1 {
  text-shadow: 2px 2px 5px red;
}
```

---

### Font Family

In CSS, we use the `font-family` property to specify the font of text.

The `font-family` property should hold several font names as a "fallback" system. Start with the font you want, and end with a generic family.

#### Example

```css
.p1 {
  font-family: "Times New Roman", Times, serif;
}

.p2 {
  font-family: Arial, Helvetica, sans-serif;
}

.p3 {
  font-family: "Lucida Console", "Courier New", monospace;
}
```

---

### Font Style

The `font-style` property is mostly used to specify italic text.

- normal - The text is shown normally
- italic - The text is shown in italics
- oblique - The text is "leaning" (similar to italic)

#### Example

```css
p.normal {
  font-style: normal;
}

p.italic {
  font-style: italic;
}
```

---

### Font Weight

The `font-weight` property specifies the weight of a font:

#### Example

```css
p.normal {
  font-weight: normal;
}

p.thick {
  font-weight: bold;
}
```

---

### Font Size

The `font-size` property sets the size of the text.

Note: If you do not specify a font size, the default size for normal text (like paragraphs) is **16px (16px = 1em)**.

#### Setting Font Size with Pixels

```css
h1 {
  font-size: 40px;
}

p {
  font-size: 14px;
}
```

#### Setting Font Size with Em

1em equals the current font size. The default text size in browsers is 16px. So, **the default size of 1em is 16px**.

Formula: **pixels/16=em**

```css
h1 {
  font-size: 2.5em; /* 40px/16=2.5em */
}

p {
  font-size: 0.875em; /* 14px/16=0.875em */
}
```

---

### Responsive Font Size

You can use the `vw` unit to set text size, which means "viewport width".

```html
<h1 style="font-size:10vw">Hello World</h1>
```

Viewport is the browser window size. 1vw = 1% of viewport width.

---

### Google Fonts

If you don't want to use standard fonts, you can use Google Fonts API:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">
<style>
body {
  font-family: "Sofia";
}
</style>
```

---

### Font Shorthand Property

The `font` property is a shorthand property for:

- font-style
- font-variant
- font-weight
- font-size/line-height
- font-family

#### Example

```css
p.a {
  font: 20px Arial, sans-serif;
}

p.b {
  font: italic small-caps bold 12px/30px Georgia, serif;
}
```

Note: The `font-size` and `font-family` values are required.
