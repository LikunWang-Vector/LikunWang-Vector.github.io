---
title: "CSS Colors: RGB, HEX, and HSL (Complete Guide)"
date: 2023-01-22
updated: 2023-01-22
categories:
  - CSS Beginner to Advanced
tags:
  - css
  - frontend
  - html
  - css3
cover: /images/posts/CSS颜色：RGB颜色HEX颜色HSL颜色（网页颜色完全总结/42095f67e483.png
lang_pair:
  zh-CN: "CSS颜色：RGB颜色/HEX颜色/HSL颜色（网页颜色完全总结）"
---

**Table of Contents**

CSS Color Names

CSS Background Color

CSS Text Color

CSS Border Color

CSS Color Values

RGB Values

RGBA Values

HEX Values

HSL Values

Saturation

Lightness

HSLA Values

---

Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.

---

### CSS Color Names

In CSS, a color can be specified by using a color name:

CSS/HTML supports 140 standard color names.

---

### CSS Background Color

You can set the background color for HTML elements:

#### Example

```html
<h1 style="background-color:DodgerBlue;">China</h1>
<p style="background-color:Tomato;">China is a great country!</p>
```

---

### CSS Text Color

You can set the color of text:

#### Example

```html
<h1 style="color:Tomato;">China</h1>
<p style="color:DodgerBlue;">China is a great country!</p>
<p style="color:MediumSeaGreen;">China, officially the People's Republic of China...</p>
```

---

### CSS Border Color

You can set the color of borders:

#### Example

```html
<h1 style="border:2px solid Tomato;">Hello World</h1>
<h1 style="border:2px solid DodgerBlue;">Hello World</h1>
<h1 style="border:2px solid Violet;">Hello World</h1>
```

---

### CSS Color Values

In CSS, colors can also be specified using RGB values, HEX values, HSL values, RGBA values, or HSLA values:

Equivalent to the color name "Tomato":
- rgb(255, 99, 71)
- #ff6347
- hsl(9, 100%, 64%)

Equivalent to "Tomato" but with 50% transparency:
- rgba(255, 99, 71, 0.5)
- hsla(9, 100%, 64%, 0.5)

#### Example

```html
<h1 style="background-color:rgb(255, 99, 71);">...</h1>
<h1 style="background-color:#ff6347;">...</h1>
<h1 style="background-color:hsl(9, 100%, 64%);">...</h1>
<h1 style="background-color:rgba(255, 99, 71, 0.5);">...</h1>
<h1 style="background-color:hsla(9, 100%, 64%, 0.5);">...</h1>
```

---

### RGB Values

In CSS, a color can be specified as an RGB value using this formula:

> #### rgb(red, green, blue)
> 
> Each parameter (red, green, and blue) defines the intensity of the color between 0 and 255.

For example, rgb(255, 0, 0) is displayed as red, because red is set to its highest value (255) and the others are set to 0.

To display black, set all color parameters to 0, like this: rgb(0, 0, 0).

To display white, set all color parameters to 255, like this: rgb(255, 255, 255).

Shades of gray are often defined using equal values for all 3 parameters.

---

### RGBA Values

> RGBA color values are an extension of RGB color values with an **alpha channel** - which specifies the **opacity** for a color.

An RGBA color value is specified with:

#### rgba(red, green, blue, alpha)

The *alpha* parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).

---

### HEX Values

In CSS, a color can be specified using a **hexadecimal value** in the form:

#### #rrggbb

> Where **rr (red), gg (green) and bb (blue)** are hexadecimal values **between 00 and ff** (same as decimal 0-255).

For example, #ff0000 is displayed as red, because red is set to its highest value (ff) and the others are set to the lowest value (00).

Shades of gray are often defined using equal values for all 3 parameters.

---

### HSL Values

In CSS, a color can be specified using hue, saturation, and lightness (HSL) in the form:

#### hsl(hue, saturation, lightness)

> **Hue** is a degree on the color wheel from **0 to 360**. **0 is red, 120 is green, and 240 is blue.**
> 
> **Saturation** is a percentage value, **0% means a shade of gray, and 100% is the full color.**
> 
> **Lightness** is also a percentage, **0% is black, 50% is neither light nor dark, 100% is white.**

---

### Saturation

Saturation can be described as the intensity of a color.

- 100% is pure color, no shades of gray
- 50% is 50% gray, but you can still see the color
- 0% is completely gray, you can no longer see the color

---

### Lightness

The lightness of a color can be described as how much light you want to give the color, where 0% means no light (black), 50% means 50% light (neither dark nor light), and 100% means full lightness (white).

Shades of gray are often defined by setting the hue and saturation to 0, and adjusting the lightness from 0% to 100% to get darker/lighter shades.

---

### HSLA Values

HSLA color values are an extension of HSL color values with an Alpha channel - which specifies the opacity for a color.

An HSLA color value is specified with:

#### hsla(hue, saturation, lightness, alpha)

The *alpha* parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).

---

### Summary

This article covered RGB, HEX, and HSL colors, familiarizing you with various color representation methods.
