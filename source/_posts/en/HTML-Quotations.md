---
title: "HTML Quotations"
date: 2022-12-25
updated: 2022-12-25
categories:
  - HTML Beginner to Advanced
tags:
  - html
  - frontend
  - javascript
  - html5
lang_pair:
  zh-CN: "HTML引用"
---

**Table of Contents**

Quotation

HTML `<q>` for Short Quotations

HTML `<blockquote>` for Long Quotations

HTML `<abbr>` for Abbreviations

HTML `<dfn>` for Definitions

HTML `<address>` for Contact Information

HTML `<cite>` for Work Titles

HTML `<bdo>` for Bi-Directional Override

HTML Citation, Quotation, and Definition Elements

A Complete Example

---

### Quotation

Here is a quote from the WWF website:

> For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.

---

### HTML `<q>` for Short Quotations

The HTML `<q>` element defines a *short quotation*.

Browsers normally insert *quotation marks* around the `<q>` element.

#### Example

```html
<p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>
```

---

### HTML `<blockquote>` for Long Quotations

The HTML `<blockquote>` element defines a section that is quoted from another source.

Browsers usually *indent* `<blockquote>` elements.

#### Example

```html
<p>Here is a quote from WWF's website:</p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature.
The world's leading conservation organization, WWF works in 100 countries
and is supported by 1.2 million members in the United States and close to 5 million globally.
</blockquote>
```

---

### HTML `<abbr>` for Abbreviations

The HTML `<abbr>` element defines an *abbreviation* or an acronym.

Marking abbreviations can give useful information to browsers, translation systems, and search engines.

#### Example

```html
<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
```

---

### HTML `<dfn>` for Definitions

The HTML `<dfn>` element defines a *definition* of a term or abbreviation.

The usage of `<dfn>`, according to the HTML5 specification, is somewhat complex:

1. If the `<dfn>` element has a title attribute, the title defines the term:

#### Example

```html
<p><dfn title="World Health Organization">WHO</dfn> was founded in 1948.</p>
```

2. If the `<dfn>` element contains an `<abbr>` element with a title, the title defines the term:

#### Example

```html
<p><dfn><abbr title="World Health Organization">WHO</abbr></dfn> was founded in 1948.</p>
```

3. Otherwise, the text content of the `<dfn>` element is the term, and the parent element contains the definition:

#### Example

```html
<p><dfn>WHO</dfn> World Health Organization was founded in 1948.</p>
```

Note: If you want to keep it simple, use the first method, or use `<abbr>` instead.

---

### HTML `<address>` for Contact Information

The HTML `<address>` element defines contact information for the author/owner of a document or article.

This element is usually displayed in *italics*. Most browsers will add a line break before and after the element.

#### Example

```html
<address>
Written by Donald Duck.<br>
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address>
```

---

### HTML `<cite>` for Work Titles

The HTML `<cite>` element defines the *title of a work*.

Browsers usually display `<cite>` elements in italics.

#### Example

```html
<p><cite>The Scream</cite> by Edward Munch. Painted in 1893.</p>
```

---

### HTML `<bdo>` for Bi-Directional Override

The HTML `<bdo>` element defines bi-directional override.

The `<bdo>` element is used to override the current text direction:

#### Example

```html
<bdo dir="rtl">This text will be written from right to left</bdo>
```

---

### HTML Citation, Quotation, and Definition Elements

| Tag | Description |
|-----|-------------|
| `<abbr>` | Defines an abbreviation or acronym |
| `<address>` | Defines contact information for the author/owner of a document |
| `<bdo>` | Defines the text direction |
| `<blockquote>` | Defines a section that is quoted from another source |
| `<dfn>` | Defines a definition term |
| `<q>` | Defines a short inline quotation |
| `<cite>` | Defines the title of a work |
