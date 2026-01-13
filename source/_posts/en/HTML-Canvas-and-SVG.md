---
title: "HTML Canvas and SVG (Canvas vs. SVG)"
date: 2023-02-09
updated: 2023-02-09
categories:
  - HTML Beginner to Advanced
tags:
  - html
  - javascript
  - frontend
  - canvas
  - SVG
cover: /images/posts/HTML画布与SVG（Canvas-vs.-SVG）/8cc8330f872a.gif
lang_pair:
  zh-CN: "HTML画布与SVG（Canvas vs. SVG）"
---

**Table of Contents**

Canvas
What is Canvas?
Creating a Canvas Element
Drawing with JavaScript
Understanding Coordinates
More Canvas Examples
SVG (Scalable Vector Graphics)
What is SVG?
Advantages of SVG
Embedding SVG in HTML
Canvas vs. SVG

---

## Canvas

The canvas element is used to draw graphics on a web page.

### What is Canvas?

The HTML5 `<canvas>` element is used to draw graphics, on the fly, via JavaScript.

The `<canvas>` element is only a container for graphics. You must use JavaScript to actually draw the graphics.

Canvas has several methods for drawing paths, boxes, circles, text, and adding images.

### Creating a Canvas Element

Add a `<canvas>` element to your HTML5 page.

Specify the element's id, width and height:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

### Drawing with JavaScript

The canvas element has no drawing abilities of its own. All drawing must be done with JavaScript:

```html
<script type="text/javascript">
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.fillStyle="#FF0000";
ctx.fillRect(0,0,150,75);
</script>
```

JavaScript uses the id to find the canvas element:

```javascript
var c=document.getElementById("myCanvas");
```

Then, create a context object:

```javascript
var ctx=c.getContext("2d");
```

The `getContext("2d")` object is a built-in HTML5 object, with many properties and methods for drawing paths, boxes, circles, text, images, and more.

The following two lines draw a red rectangle:

```javascript
ctx.fillStyle="#FF0000";
ctx.fillRect(0,0,150,75);
```

The `fillStyle` property sets it to red, and the `fillRect` method specifies the shape, position and size.

### Understanding Coordinates

The `fillRect` method above has the parameters (0,0,150,75).

This means: Draw a 150x75 rectangle on the canvas, starting at the top-left corner (0,0).

The canvas's X and Y coordinates are used to position drawings on the canvas.

---

### More Canvas Examples

#### Example - Lines

Draw a line by specifying where to start and where to end:

```html
<script type="text/javascript">
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.moveTo(10,10);
ctx.lineTo(150,50);
ctx.lineTo(10,50);
ctx.stroke();
</script>
```

#### Example - Circles

Draw a circle by specifying size, color and position:

```html
<script type="text/javascript">
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.fillStyle="#FF0000";
ctx.beginPath();
ctx.arc(70,18,15,0,Math.PI*2,true);
ctx.closePath();
ctx.fill();
</script>
```

#### Example - Gradients

Draw a gradient background with specified colors:

```html
<script type="text/javascript">
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var grd=ctx.createLinearGradient(0,0,175,50);
grd.addColorStop(0,"#FF0000");
grd.addColorStop(1,"#00FF00");
ctx.fillStyle=grd;
ctx.fillRect(0,0,175,50);
</script>
```

#### Example - Images

Place an image onto the canvas:

```html
<script>
window.onload = function() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("scream");
  ctx.drawImage(img, 10, 10);
};
</script>
```

---

## SVG (Scalable Vector Graphics)

HTML5 supports inline SVG.

### What is SVG?

- SVG stands for Scalable Vector Graphics
- SVG is used to define vector-based graphics for the Web
- SVG defines the graphics in XML format
- SVG graphics do NOT lose any quality if they are zoomed or resized
- Every element and every attribute in SVG files can be animated
- SVG is a W3C recommendation

### Advantages of SVG

Compared to other image formats (like JPEG and GIF), using SVG has advantages:

- SVG images can be created and edited with any text editor
- SVG images can be searched, indexed, scripted, and compressed
- SVG images are scalable
- SVG images can be printed with high quality at any resolution
- SVG images are zoomable without degradation

### Browser Support

Internet Explorer 9, Firefox, Opera, Chrome, and Safari support inline SVG.

### Embedding SVG in HTML

In HTML5, you can embed SVG elements directly into your HTML page:

```html
<!DOCTYPE html>
<html>
<body>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
  <polygon points="100,10 40,180 190,60 10,60 160,180"
  style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
</svg>

</body>
</html>
```

---

## Canvas vs. SVG

Canvas and SVG both allow you to create graphics inside the browser, but they are fundamentally different.

### SVG

SVG is a language for describing 2D graphics in XML.

SVG is XML based, which means that every element is available within the SVG DOM. You can attach JavaScript event handlers for an element.

In SVG, each drawn shape is remembered as an object. If attributes of an SVG object are changed, the browser can automatically re-render the shape.

### Canvas

Canvas draws 2D graphics, on the fly (with JavaScript).

Canvas is rendered pixel by pixel.

In canvas, once the graphic is drawn, it is forgotten by the browser. If its position should be changed, the entire scene needs to be redrawn, including any objects that might have been covered by the graphic.

### Canvas vs SVG Comparison

| Canvas | SVG |
|--------|-----|
| Resolution dependent | Resolution independent |
| No support for event handlers | Support for event handlers |
| Poor text rendering capabilities | Best suited for applications with large rendering areas (Google Maps) |
| You can save the resulting image as .png or .jpg | Slow rendering if complex (anything that uses the DOM a lot will be slow) |
| Well suited for graphic-intensive games | Not suited for game applications |
