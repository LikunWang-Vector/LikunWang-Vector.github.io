---
title: "CSS Responsive Design - Complete Guide (Viewport, Grid View, Media Queries, Images, Videos)"
date: 2023-02-02
updated: 2023-02-02
categories:
  - CSS Beginner to Advanced
tags:
  - css
  - frontend
  - grid-view
  - viewport
  - media-queries
cover: /images/posts/CSS响应式设计——（视口网格视图媒体查询图像视频）看这一篇/94d02e902a70.png
lang_pair:
  zh-CN: "CSS响应式设计——（视口/网格视图/媒体查询/图像/视频）看这一篇就够了"
---

**Table of Contents**

Responsive Web Design - Introduction
Responsive Web Design - Viewport
Responsive Web Design - Grid View
Responsive Web Design - Media Queries
Responsive Web Design - Images
Responsive Web Design - Videos

---

## Responsive Web Design - Introduction

### What is Responsive Web Design?

Responsive web design makes your web page look good on all devices.

Responsive web design uses only HTML and CSS.

Responsive web design is not a program or a JavaScript.

### Designing For The Best Experience For All Users

Web pages can be viewed using many different devices: desktops, tablets, and phones. Your web page should look good, and be easy to use, regardless of the device.

Web pages should not leave out information to fit smaller devices, but rather adapt its content to fit any device.

It is called responsive web design when you use CSS and HTML to resize, hide, shrink, enlarge, or move the content to make it look good on any screen.

---

## Responsive Web Design - Viewport

### What is The Viewport?

The viewport is the user's visible area of a web page.

The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen.

Before tablets and mobile phones, web pages were designed only for computer screens, and it was common for web pages to have a static design and a fixed size.

Then, when we started surfing the internet using tablets and mobile phones, fixed size web pages were too large to fit the viewport. To fix this, browsers on those devices scaled down the entire web page to fit the screen.

### Setting The Viewport

HTML5 introduced a method to let web designers take control over the viewport, through the `<meta>` tag.

You should include the following `<meta>` viewport element in all your web pages:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

This gives the browser instructions on how to control the page's dimensions and scaling.

The `width=device-width` part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).

The `initial-scale=1.0` part sets the initial zoom level when the page is first loaded by the browser.

### Size Content to The Viewport

Users are used to scroll websites vertically on both desktop and mobile devices - but not horizontally!

So, if the user is forced to scroll horizontally, or zoom out, to see the whole web page it results in a poor user experience.

Some additional rules to follow:

1. Do NOT use large fixed width elements
2. Do NOT let the content rely on a particular viewport width to render well
3. Use CSS media queries to apply different styling for small and large screens

---

## Responsive Web Design - Grid View

### What is a Grid-View?

Many web pages are based on a grid-view, which means that the page is divided into columns.

Using a grid-view is very helpful when designing web pages. It makes it easier to place elements on the page.

A responsive grid-view often has 12 columns, and has a total width of 100%, and will shrink and expand as you resize the browser window.

### Building a Responsive Grid-View

First ensure that all HTML elements have the `box-sizing` property set to `border-box`. This makes sure that the padding and border are included in the total width and height of the elements.

```css
* {
  box-sizing: border-box;
}
```

First, we must calculate the percentage for one column: 100% / 12 columns = 8.33%.

Then we make one class for each of the 12 columns:

```css
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}
```

All these columns should be floating to the left, and have a padding of 15px:

```css
[class*="col-"] {
  float: left;
  padding: 15px;
  border: 1px solid red;
}
```

Each row should be wrapped in a `<div>`. The number of columns inside a row should always add up to 12:

```html
<div class="row">
  <div class="col-3">...</div> <!-- 25% -->
  <div class="col-9">...</div> <!-- 75% -->
</div>
```

---

## Responsive Web Design - Media Queries

### What is a Media Query?

Media query is a CSS technique introduced in CSS3.

It uses the `@media` rule to include a block of CSS properties only if a certain condition is true.

#### Example

If the browser window is 600px or smaller, the background color will be lightblue:

```css
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

### Add a Breakpoint

We can add a breakpoint where certain parts of the design will behave differently on each side of the breakpoint.

#### Example

When the screen (browser window) gets smaller than 768px, each column should have a width of 100%:

```css
/* For desktop: */
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
/* ... */
.col-12 {width: 100%;}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
}
```

### Always Design for Mobile First

Mobile First means designing for mobile before designing for desktop or any other device (This will make the page display faster on smaller devices).

```css
/* For mobile phones: */
[class*="col-"] {
  width: 100%;
}

@media only screen and (min-width: 768px) {
  /* For desktop: */
  .col-1 {width: 8.33%;}
  .col-2 {width: 16.66%;}
  /* ... */
  .col-12 {width: 100%;}
}
```

### Typical Device Breakpoints

```css
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}
```

### Orientation: Portrait / Landscape

Media queries can also be used to change layout of a page depending on the orientation of the browser.

```css
@media only screen and (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}
```

### Hide Elements With Media Queries

```css
/* If the screen size is 600px or less, hide the element */
@media only screen and (max-width: 600px) {
  div.example {
    display: none;
  }
}
```

### Change Font Size With Media Queries

```css
/* If the screen size is 601px or more, set the font-size of <div> to 80px */
@media only screen and (min-width: 601px) {
  div.example {
    font-size: 80px;
  }
}

/* If the screen size is 600px or less, set the font-size of <div> to 30px */
@media only screen and (max-width: 600px) {
  div.example {
    font-size: 30px;
  }
}
```

---

## Responsive Web Design - Images

### Using The width Property

If the `width` property is set to a percentage and the height is set to "auto", the image will be responsive and scale up and down:

```css
img {
  width: 100%;
  height: auto;
}
```

### Using The max-width Property

If the `max-width` property is set to 100%, the image will scale down if it has to, but never scale up to be larger than its original size:

```css
img {
  max-width: 100%;
  height: auto;
}
```

### Background Images

Background images can also respond to resizing and scaling.

1. If the `background-size` property is set to "contain", the background image will scale, and try to fit the content area. However, the image will keep its aspect ratio.

2. If the `background-size` property is set to "100% 100%", the background image will stretch to cover the entire content area.

3. If the `background-size` property is set to "cover", the background image will scale to cover the entire content area. The "cover" value keeps the aspect ratio, and some part of the background image may be clipped.

```css
div {
  width: 100%;
  height: 400px;
  background-image: url('img_flowers.jpg');
  background-size: cover;
  border: 1px solid red;
}
```

### Different Images for Different Devices

A large image can be perfect on a big computer screen, but useless on a small device. To reduce the load, you can use media queries to display different images on different devices.

```css
/* For width smaller than 400px: */
body {
  background-image: url('img_smallflower.jpg');
}

/* For width 400px and larger: */
@media only screen and (min-width: 400px) {
  body {
    background-image: url('img_flowers.jpg');
  }
}
```

### HTML5 `<picture>` Element

The HTML5 `<picture>` element allows you to define more than one image.

```html
<picture>
  <source srcset="img_smallflower.jpg" media="(max-width: 400px)">
  <source srcset="img_flowers.jpg">
  <img src="img_flowers.jpg" alt="Flowers">
</picture>
```

---

## Responsive Web Design - Videos

### Using The width Property

If the `width` property is set to 100%, the video player will be responsive and scale up and down:

```css
video {
  width: 100%;
  height: auto;
}
```

### Using The max-width Property

If the `max-width` property is set to 100%, the video player will scale down if it has to, but never scale up to be larger than its original size:

```css
video {
  max-width: 100%;
  height: auto;
}
```
