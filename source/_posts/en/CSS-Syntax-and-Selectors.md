---
title: "CSS Syntax and Selectors"
date: 2023-01-21
updated: 2023-01-21
categories:
  - CSS Beginner to Advanced
tags:
  - css
  - frontend
  - html
cover: /images/posts/CSS语法与CSS选择器/57773b3eff3e.gif
lang_pair:
  zh-CN: "CSS语法与CSS选择器"
---

**Table of Contents**

CSS Syntax

CSS Selectors

CSS Element Selector

CSS ID Selector

CSS Class Selector

CSS Universal Selector

CSS Grouping Selector

All Simple CSS Selectors

Further Reading

---

### CSS Syntax

A CSS rule-set consists of a selector and a declaration block:

![](/images/posts/CSS语法与CSS选择器/57773b3eff3e.gif)

The selector points to the HTML element you want to style.

The declaration block contains one or more declarations separated by semicolons.

Each declaration includes a CSS property name and a value, separated by a colon.

Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.

#### Example

In this example, all `<p>` elements will be center-aligned with a red text color:

```css
p {
  color: red;
  text-align: center;
}
```

#### Explanation

- **`p`** is a *selector* in CSS (it points to the HTML element you want to style: `<p>`).
- **`color`** is a property, and **`red`** is the property value
- **`text-align`** is a property, and **`center`** is the property value

---

### CSS Selectors

CSS selectors are used to "find" (or select) the HTML elements you want to style.

We can divide CSS selectors into five categories:

- Simple selectors (select elements based on name, id, class)
- Combinator selectors (select elements based on a specific relationship between them)
- Pseudo-class selectors (select elements based on a certain state)
- Pseudo-element selectors (select and style a part of an element)
- Attribute selectors (select elements based on an attribute or attribute value)

We will explore the most basic CSS selectors.

---

### CSS Element Selector

The element selector selects HTML elements **based on the element name**.

#### Example

Here, all `<p>` elements on the page will be center-aligned with a red text color:

```css
p {
  text-align: center;
  color: red;
}
```

---

### CSS ID Selector

The id selector uses the **id attribute** of an HTML element to select a specific element.

The **id of an element is unique** within a page, so the id selector is used to select one unique element!

To select an element with a specific id, write a hash (**#**) character, followed by the id of the element.

#### Example

This CSS rule will be applied to the HTML element with id="para1":

```css
#para1 {
  text-align: center;
  color: red;
}
```

Note: An id name cannot start with a number.

---

### CSS Class Selector

The class selector selects HTML elements with a **specific class attribute**.

To select elements with a specific class, write a period (**.**) character, followed by the class name.

#### Example

In this example, **all HTML elements with class="center"** will be red and center-aligned:

```css
.center {
  text-align: center;
  color: red;
}
```

You can also specify that only specific HTML elements should be affected by a class.

#### Example

In this example, only **`<p>` elements with class="center"** will be center-aligned:

```css
p.center {
  text-align: center;
  color: red;
}
```

HTML elements can also refer to more than one class.

#### Example

In this example, the `<p>` element will be styled according to **class="center" and class="large"**:

```html
<p class="center large">This paragraph refers to two classes.</p>
```

Note: A class name cannot start with a number!

**Also note: If there are conflicting elements, the later class takes precedence.**

---

### CSS Universal Selector

The universal selector (*****) selects all HTML elements on the page.

#### Example

The CSS rule below will affect **every HTML element** on the page:

```css
* {
  text-align: center;
  color: blue;
}
```

---

### CSS Grouping Selector

The grouping selector selects **all HTML elements with the same style definitions**.

Look at the following CSS code (the h1, h2, and p elements have the same style definitions):

```css
h1 {
  text-align: center;
  color: red;
}

h2 {
  text-align: center;
  color: red;
}

p {
  text-align: center;
  color: red;
}
```

It's better to group the selectors to minimize the code.

To group selectors, **separate each selector with a comma**.

#### Example

In this example, we have grouped the selectors from the code above:

```css
h1, h2, p {
  text-align: center;
  color: red;
}
```

---

### All Simple CSS Selectors

| Selector | Example | Description |
|----------|---------|-------------|
| .class | .intro | Selects all elements with class="intro" |
| #id | #firstname | Selects the element with id="firstname" |
| * | * | Selects all elements |
| element | p | Selects all `<p>` elements |
| element,element,.. | div, p | Selects all `<div>` elements and all `<p>` elements |

---

### Further Reading

- CSS Element Selectors
- CSS Selector Grouping
- CSS Class Selectors Explained
- CSS ID Selectors Explained
- CSS Attribute Selectors Explained
- CSS Descendant Selectors
- CSS Child Selectors
- CSS Adjacent Sibling Selectors
