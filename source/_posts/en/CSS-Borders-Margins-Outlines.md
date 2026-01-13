---
title: "CSS Borders, Margins, and Outlines - Complete Guide"
date: 2023-01-24
updated: 2023-01-24
categories:
  - CSS Beginner to Advanced
tags:
  - css
  - frontend
  - html
cover: /images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/236d3a4575f9.png
lang_pair:
  zh-CN: "CSS边框、边距、轮廓（边框宽度/颜色/各边/简写属性/圆角边框/内外边距/高度宽度/框模型/轮廓宽度/颜色/属性/偏移）——万字长文|一文搞懂"
---

**Table of Contents**

CSS Borders
CSS Border Properties
CSS Border Style
CSS Border Width
CSS Border Color
CSS Border - Individual Sides
CSS Border - Shorthand Property
CSS Rounded Borders
CSS Margins
Margin - Individual Sides
Margin - Shorthand Property
Margin Collapse
CSS Padding
Padding - Individual Sides
Padding - Shorthand Property
Padding and Element Width
CSS Height and Width
CSS Box Model
CSS Outline
CSS Outline Style
CSS Outline Width
CSS Outline Color
CSS Outline - Shorthand Property
CSS Outline Offset

---

## CSS Borders

### CSS Border Properties

The CSS `border` property allows you to specify the style, width, and color of an element's border.

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/236d3a4575f9.png)

---

### CSS Border Style

The `border-style` property specifies what kind of border to display.

The following values are allowed:

- `dotted` - Defines a dotted border
- `dashed` - Defines a dashed border
- `solid` - Defines a solid border
- `double` - Defines a double border
- `groove` - Defines a 3D grooved border (effect depends on border-color value)
- `ridge` - Defines a 3D ridged border (effect depends on border-color value)
- `inset` - Defines a 3D inset border (effect depends on border-color value)
- `outset` - Defines a 3D outset border (effect depends on border-color value)
- `none` - Defines no border
- `hidden` - Defines a hidden border

The `border-style` property can have one to four values (for top, right, bottom, and left borders).

#### Example

```css
p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}
```

**Note:** None of the other CSS border properties will have any effect unless the `border-style` property is set!

---

### CSS Border Width

The `border-width` property specifies the width of the four borders.

The width can be set as a specific size (in px, pt, cm, em, etc.) or by using one of three predefined values: thin, medium, or thick.

#### Example

```css
p.one {
  border-style: solid;
  border-width: 5px;
}

p.two {
  border-style: solid;
  border-width: medium;
}

p.three {
  border-style: dotted;
  border-width: 2px;
}
```

#### Specific Side Widths

The `border-width` property can have one to four values (for top, right, bottom, and left borders):

```css
p.one {
  border-style: solid;
  border-width: 5px 20px; /* 5px top and bottom, 20px on the sides */
}

p.two {
  border-style: solid;
  border-width: 25px 10px 4px 35px; /* 25px top, 10px right, 4px bottom, 35px left */
}
```

---

### CSS Border Color

The `border-color` property is used to set the color of the four borders.

The color can be set by:

- name - specify a color name, like "red"
- HEX - specify a HEX value, like "#ff0000"
- RGB - specify an RGB value, like "rgb(255,0,0)"
- HSL - specify an HSL value, like "hsl(0, 100%, 50%)"
- transparent

**Note:** If `border-color` is not set, it inherits the color of the element.

#### Example

```css
p.one {
  border-style: solid;
  border-color: red;
}

p.two {
  border-style: solid;
  border-color: green;
}

p.three {
  border-style: solid;
  border-color: red green blue yellow; /* top red, right green, bottom blue, left yellow */
}
```

---

### CSS Border - Individual Sides

In CSS, there are properties for specifying each border (top, right, bottom, and left):

```css
p {
  border-top-style: dotted;
  border-right-style: solid;
  border-bottom-style: dotted;
  border-left-style: solid;
}
```

This is equivalent to:

```css
p {
  border-style: dotted solid;
}
```

#### How It Works

If `border-style` has four values:
- `border-style: dotted solid double dashed;`
  - top border is dotted
  - right border is solid
  - bottom border is double
  - left border is dashed

If `border-style` has three values:
- `border-style: dotted solid double;`
  - top border is dotted
  - right and left borders are solid
  - bottom border is double

If `border-style` has two values:
- `border-style: dotted solid;`
  - top and bottom borders are dotted
  - right and left borders are solid

If `border-style` has one value:
- `border-style: dotted;`
  - all four borders are dotted

---

### CSS Border - Shorthand Property

The `border` property is a shorthand property for:

- `border-width`
- `border-style` (required)
- `border-color`

#### Example

```css
p {
  border: 5px solid red;
}
```

You can also specify all the individual border properties for just one side:

```css
p {
  border-left: 6px solid red;
  background-color: lightgrey;
}

p {
  border-bottom: 6px solid red;
  background-color: lightgrey;
}
```

---

### CSS Rounded Borders

The `border-radius` property is used to add rounded borders to an element:

```css
p {
  border: 2px solid red;
  border-radius: 5px;
}
```

---

### All CSS Border Properties

| Property | Description |
|----------|-------------|
| border | Shorthand property for setting all border properties in one declaration |
| border-color | Shorthand property for setting the color of all four borders |
| border-radius | Shorthand property for setting all four border-*-radius properties |
| border-style | Shorthand property for setting the style of all four borders |
| border-width | Shorthand property for setting the width of all four borders |
| border-bottom | Shorthand property for setting all bottom border properties |
| border-left | Shorthand property for setting all left border properties |
| border-right | Shorthand property for setting all right border properties |
| border-top | Shorthand property for setting all top border properties |

---

## CSS Margins

The CSS `margin` property is used to create space around elements, outside of any defined borders.

### Margin - Individual Sides

CSS has properties for specifying the margin for each side of an element:

- `margin-top`
- `margin-right`
- `margin-bottom`
- `margin-left`

All margin properties can have the following values:

- auto - the browser calculates the margin
- length - specifies a margin in px, pt, cm, etc.
- % - specifies a margin in percent of the width of the containing element
- inherit - specifies that the margin should be inherited from the parent element

**Tip:** Negative values are allowed.

#### Example

```css
p {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
}
```

---

### Margin - Shorthand Property

The `margin` property is a shorthand property for:

- `margin-top`
- `margin-right`
- `margin-bottom`
- `margin-left`

#### How It Works

If `margin` has four values:
- `margin: 25px 50px 75px 100px;`
  - top margin is 25px
  - right margin is 50px
  - bottom margin is 75px
  - left margin is 100px

If `margin` has three values:
- `margin: 25px 50px 75px;`
  - top margin is 25px
  - right and left margins are 50px
  - bottom margin is 75px

If `margin` has two values:
- `margin: 25px 50px;`
  - top and bottom margins are 25px
  - right and left margins are 50px

If `margin` has one value:
- `margin: 25px;`
  - all four margins are 25px

#### The auto Value

You can set the margin property to `auto` to horizontally center the element within its container:

```css
div {
  width: 300px;
  margin: auto;
  border: 1px solid red;
}
```

---

### Margin Collapse

Top and bottom margins of elements are sometimes collapsed into a single margin that is equal to the largest of the two margins.

This does not happen on left and right margins! Only top and bottom margins!

When two vertical margins meet, they will form a single margin. The height of the merged margin equals the larger of the two margins.

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/1bfc183ce442.gif)

**Note:** Margin collapse only occurs with normal flow block boxes. Margins of inline boxes, floated boxes, or absolutely positioned boxes do not collapse.

---

### All CSS Margin Properties

| Property | Description |
|----------|-------------|
| margin | Shorthand property for setting all margin properties in one declaration |
| margin-bottom | Sets the bottom margin of an element |
| margin-left | Sets the left margin of an element |
| margin-right | Sets the right margin of an element |
| margin-top | Sets the top margin of an element |

---

## CSS Padding

The CSS `padding` property is used to generate space around an element's content, inside of any defined borders.

### Padding - Individual Sides

CSS has properties for specifying the padding for each side of an element:

- `padding-top`
- `padding-right`
- `padding-bottom`
- `padding-left`

All padding properties can have the following values:

- length - specifies a padding in px, pt, cm, etc.
- % - specifies a padding in percent of the width of the containing element
- inherit - specifies that the padding should be inherited from the parent element

**Tip:** Negative values are **not allowed**.

#### Example

```css
div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}
```

---

### Padding - Shorthand Property

The `padding` property is a shorthand property for:

- `padding-top`
- `padding-right`
- `padding-bottom`
- `padding-left`

#### How It Works

If `padding` has four values:
- `padding: 25px 50px 75px 100px;`
  - top padding is 25px
  - right padding is 50px
  - bottom padding is 75px
  - left padding is 100px

If `padding` has three values:
- `padding: 25px 50px 75px;`
  - top padding is 25px
  - right and left padding are 50px
  - bottom padding is 75px

If `padding` has two values:
- `padding: 25px 50px;`
  - top and bottom padding are 25px
  - right and left padding are 50px

If `padding` has one value:
- `padding: 25px;`
  - all four paddings are 25px

---

### Padding and Element Width

The CSS `width` property specifies the width of the element's content area. The content area is the portion inside the padding, border, and margin of an element.

So, if an element has a specified width, the padding added to that element will be added to the total width of the element. This is often an undesirable result.

#### Example

```css
div {
  width: 300px;
  padding: 25px;
}
```

Here, the `<div>` element is given a width of 300px. However, the actual width of the `<div>` element will be 350px (300px + 25px left padding + 25px right padding).

To keep the width at 300px regardless of padding, you can use the `box-sizing` property:

```css
div {
  width: 300px;
  padding: 25px;
  box-sizing: border-box;
}
```

---

### All CSS Padding Properties

| Property | Description |
|----------|-------------|
| padding | Shorthand property for setting all padding properties in one declaration |
| padding-bottom | Sets the bottom padding of an element |
| padding-left | Sets the left padding of an element |
| padding-right | Sets the right padding of an element |
| padding-top | Sets the top padding of an element |

---

## CSS Height and Width

The `height` and `width` properties are used to set the height and width of an element.

The height and width properties do not include padding, borders, or margins. They set the height/width of the area inside the padding, border, and margin of the element.

### CSS Height and Width Values

The `height` and `width` properties may have the following values:

- `auto` - Default. The browser calculates the height and width
- `length` - Defines the height/width in px, cm, etc.
- `%` - Defines the height/width in percent of the containing block
- `initial` - Sets the height/width to its default value
- `inherit` - The height/width will be inherited from its parent value

#### Example

```css
div {
  height: 200px;
  width: 50%;
  background-color: powderblue;
}
```

### Setting max-width

The `max-width` property is used to set the maximum width of an element.

**Note:** The value of the `max-width` property overrides `width`.

```css
div {
  max-width: 500px;
  height: 100px;
  background-color: powderblue;
}
```

---

## CSS Box Model

All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.

The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.

![](/images/posts/CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外/ea754c059940.gif)

- **Content** - The content of the box, where text and images appear
- **Padding** - Clears an area around the content. The padding is transparent
- **Border** - A border that goes around the padding and content
- **Margin** - Clears an area outside the border. The margin is transparent

### Width and Height of an Element

When you set the width and height properties of an element with CSS, you just set the width and height of the content area. To calculate the full size of an element, you must also add padding, borders, and margins.

#### Example

```css
div {
  width: 320px;
  padding: 10px;
  border: 5px solid gray;
  margin: 0;
}
```

Total element width = 320px + 20px (left + right padding) + 10px (left + right border) + 0px (left + right margin) = **350px**

**Total element width** = width + left padding + right padding + left border + right border + left margin + right margin

**Total element height** = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin

---

## CSS Outline

An outline is a line drawn around elements, outside the borders, to make the element "stand out".

CSS has the following outline properties:

- `outline-style`
- `outline-color`
- `outline-width`
- `outline-offset`
- `outline`

**Note:** Outline differs from borders! Unlike border, the outline is drawn outside the element's border, and may overlap other content. Also, the outline is NOT a part of the element's dimensions; the element's total width and height is not affected by the width of the outline.

---

### CSS Outline Style

The `outline-style` property specifies the style of the outline, and can have one of the following values:

- `dotted` - Defines a dotted outline
- `dashed` - Defines a dashed outline
- `solid` - Defines a solid outline
- `double` - Defines a double outline
- `groove` - Defines a 3D grooved outline
- `ridge` - Defines a 3D ridged outline
- `inset` - Defines a 3D inset outline
- `outset` - Defines a 3D outset outline
- `none` - Defines no outline
- `hidden` - Defines a hidden outline

#### Example

```css
p.dotted {outline-style: dotted;}
p.dashed {outline-style: dashed;}
p.solid {outline-style: solid;}
p.double {outline-style: double;}
p.groove {outline-style: groove;}
p.ridge {outline-style: ridge;}
p.inset {outline-style: inset;}
p.outset {outline-style: outset;}
```

**Note:** None of the other outline properties will have any effect unless the `outline-style` property is set!

---

### CSS Outline Width

The `outline-width` property specifies the width of the outline, and can have one of the following values:

- thin (typically 1px)
- medium (typically 3px)
- thick (typically 5px)
- A specific size (in px, pt, cm, em, etc.)

#### Example

```css
p.ex1 {
  border: 1px solid black;
  outline-style: solid;
  outline-color: red;
  outline-width: thin;
}

p.ex2 {
  border: 1px solid black;
  outline-style: solid;
  outline-color: red;
  outline-width: 4px;
}
```

---

### CSS Outline Color

The `outline-color` property is used to set the color of the outline.

The color can be set by:

- name - specify a color name, like "red"
- HEX - specify a hex value, like "#ff0000"
- RGB - specify an RGB value, like "rgb(255,0,0)"
- HSL - specify an HSL value, like "hsl(0, 100%, 50%)"
- invert - performs a color inversion (ensures the outline is visible regardless of background color)

#### Example

```css
p.ex1 {
  border: 2px solid black;
  outline-style: solid;
  outline-color: red;
}

p.ex2 {
  border: 2px solid black;
  outline-style: dotted;
  outline-color: blue;
}
```

---

### CSS Outline - Shorthand Property

The `outline` property is a shorthand property for setting the following individual outline properties:

- `outline-width`
- `outline-style` (required)
- `outline-color`

#### Example

```css
p.ex1 {outline: dashed;}
p.ex2 {outline: dotted red;}
p.ex3 {outline: 5px solid yellow;}
p.ex4 {outline: thick ridge pink;}
```

---

### CSS Outline Offset

The `outline-offset` property adds space between an outline and the edge/border of an element. The space between an element and its outline is transparent.

#### Example

```css
p {
  margin: 50px;
  border: 1px solid black;
  outline: 1px solid red;
  outline-offset: 25px;
}
```

---

### All CSS Outline Properties

| Property | Description |
|----------|-------------|
| outline | Shorthand property for setting outline-width, outline-style, and outline-color in one declaration |
| outline-color | Sets the color of an outline |
| outline-offset | Specifies the space between an outline and the edge or border of an element |
| outline-style | Sets the style of an outline |
| outline-width | Sets the width of an outline |
