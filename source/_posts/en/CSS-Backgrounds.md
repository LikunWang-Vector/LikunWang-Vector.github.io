---
title: "CSS Backgrounds: Color, Image, Repeat, Attachment, and Shorthand"
date: 2023-01-22
updated: 2023-01-22
categories:
  - CSS Beginner to Advanced
tags:
  - css
  - html
  - frontend
cover: /images/posts/CSS背景：背景色背景图像背景重复背景附着简写背景属性（一文/c40f39ce08a4.png
lang_pair:
  zh-CN: "CSS背景：背景色/背景图像/背景重复/背景附着/简写背景属性（一文搞懂）"
---

**Table of Contents**

CSS Backgrounds

CSS Background Color

Opacity / Transparency

Using RGBA for Transparency

CSS Background Image

CSS Background Repeat

CSS background-repeat: no-repeat

CSS background-position

CSS Background Attachment

CSS Background Shorthand Property

All CSS Background Properties

---

## CSS Backgrounds

The CSS background properties are used to define the background effects for elements.

We will learn about the following CSS background properties:

- background-color
- background-image
- background-repeat
- background-attachment
- background-position

---

### CSS Background Color

The `background-color` property specifies the background color of an element.

#### Example

The background color of a page is set like this:

```css
body {
  background-color: lightblue;
}
```

With CSS, a color is most often specified by:

- A valid color name - like "red"
- A HEX value - like "#ff0000"
- An RGB value - like "rgb(255,0,0)"

---

### Other Elements

You can set the background color for any HTML element:

#### Example

Here, the `<h1>`, `<p>`, and `<div>` elements will have different background colors:

```css
h1 {
  background-color: green;
}

div {
  background-color: lightblue;
}

p {
  background-color: yellow;
}
```

---

### Opacity / Transparency

The `opacity` property specifies the opacity/transparency of an element. It can take a value from 0.0 - 1.0. The lower the value, the more transparent:

#### Example

```css
div {
  background-color: green;
  opacity: 0.3;
}
```

Note: When using the `opacity` property to add transparency to the background of an element, all of its child elements inherit the same transparency. This can make the text inside a fully transparent element hard to read.

---

### Using RGBA for Transparency

If you do not want to apply opacity to child elements, like in our example above, use *RGBA* color values.

The following example sets the opacity for the background color and not the text:

From our CSS Colors chapter, you learned that you can use RGB as a color value. In addition to RGB, you can use an RGB color value with an *alpha* channel (RGBA) - which specifies the opacity of a color.

An RGBA color value is specified with: rgba(red, green, blue, alpha). The *alpha* parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).

#### Example

```css
div {
  background: rgba(0, 128, 0, 0.3) /* Green background with 30% opacity */
}
```

---

### CSS Background Image

The `background-image` property specifies an image to use as the background of an element.

By default, the image is repeated so it covers the entire element.

#### Example

The background image for a page can be set like this:

```css
body {
  background-image: url("paper.gif");
}
```

#### Example

This example shows a *bad combination* of text and background image. The text is hard to read:

```css
body {
  background-image: url("bgdesert.jpg");
}
```

Note: When using a background image, use an image that does not disturb the text.

You can also set the background image for specific elements, like the `<p>` element:

#### Example

```css
p {
  background-image: url("paper.gif");
}
```

---

### CSS Background Repeat

By default, the `background-image` property repeats an image both horizontally and vertically.

Some images should only be repeated horizontally or vertically, or they will look strange:

#### Example

```css
body {
  background-image: url("gradient_bg.png");
}
```

If the image above is repeated only horizontally (`background-repeat: repeat-x;`), the background will look better:

#### Example

```css
body {
  background-image: url("gradient_bg.png");
  background-repeat: repeat-x;
}
```

Tip: To repeat an image vertically, set `background-repeat: repeat-y;`.

---

### CSS background-repeat: no-repeat

The `background-repeat` property can also specify to show the background image only once:

#### Example

Show the background image only once:

```css
body {
  background-image: url("tree.png");
  background-repeat: no-repeat;
}
```

In the example above, the background image is placed in the same location as the text. We want to change the position of the image, so that it does not disturb the text too much.

---

### CSS background-position

The `background-position` property is used to specify the position of the background image.

#### Example

Position the background image in the top-right corner:

```css
body {
  background-image: url("tree.png");
  background-repeat: no-repeat;
  background-position: right top;
}
```

---

### CSS Background Attachment

The `background-attachment` property specifies whether the background image should scroll or be fixed (will not scroll with the rest of the page):

#### Example

Specify that the background image should be fixed:

```css
body {
  background-image: url("tree.png");
  background-repeat: no-repeat;
  background-position: right top;
  background-attachment: fixed;
}
```

#### Example

Specify that the background image should scroll with the rest of the page:

```css
body {
  background-image: url("tree.png");
  background-repeat: no-repeat;
  background-position: right top;
  background-attachment: scroll;
}
```

---

### CSS Background Shorthand Property

To shorten the code, it is also possible to specify all the background properties in one single property. This is called a shorthand property.

Instead of writing:

```css
body {
  background-color: #ffffff;
  background-image: url("tree.png");
  background-repeat: no-repeat;
  background-position: right top;
}
```

You can use the shorthand property `background`:

#### Example

Use the shorthand property to set the background properties in one declaration:

```css
body {
  background: #ffffff url("tree.png") no-repeat right top;
}
```

When using the shorthand property, the **order** of the property values is:

> - background-color
> - background-image
> - background-repeat
> - background-attachment
> - background-position

It does not matter if one of the property values is missing, as long as the other ones are in this order. Note that we did not use the background-attachment property in the example above, as it does not have a value.

---

### All CSS Background Properties

| Property | Description |
|----------|-------------|
| background | Sets all the background properties in one declaration |
| background-attachment | Sets whether a background image is fixed or scrolls with the rest of the page |
| background-clip | Specifies the painting area of the background |
| background-color | Sets the background color of an element |
| background-image | Sets the background image for an element |
| background-origin | Specifies where the background image(s) is/are positioned |
| background-position | Sets the starting position of a background image |
| background-repeat | Sets how a background image will be repeated |
| background-size | Specifies the size of the background image(s) |

---

## Summary

This section covered CSS background-related knowledge.
