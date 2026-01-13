---
title: "HTML Entities and Reserved Characters"
date: 2022-12-27
updated: 2022-12-27
categories:
  - HTML Beginner to Advanced
tags:
  - html
  - frontend
  - css
  - javascript
  - html5
lang_pair:
  zh-CN: "HTML预留字符的处理"
---

**Table of Contents**

HTML Entities

Non-breaking Space

HTML Example

Useful Character Entities in HTML

---

**Reserved characters in HTML must be replaced with character entities.**

---

### HTML Entities

Some characters are reserved in HTML.

In HTML, you cannot use the less than sign (<) and greater than sign (>) because the browser will mistake them for tags.

If we want to correctly display reserved characters, we must use character entities in the HTML source code.

A character entity looks like this:

```
&entity_name;
```

or

```
&#entity_number;
```

To display a less than sign, we must write: `&lt;` or `&#60;`

Tip: The advantage of using an entity name instead of a number is that the name is easier to remember. However, the disadvantage is that browsers may not support all entity names (but support for entity numbers is very good).

---

### Non-breaking Space

A common character entity used in HTML is the non-breaking space (`&nbsp;`).

Browsers always truncate spaces in HTML pages. If you write 10 spaces in your text, the browser will remove 9 of them before displaying the page. To add extra spaces to your page, you need to use the `&nbsp;` character entity.

---

### HTML Example

Use HTML entity symbols to display reserved characters.

---

### Useful Character Entities in HTML

Note: Entity names are case-sensitive!

| Display | Description | Entity Name | Entity Number |
|---------|-------------|-------------|---------------|
|   | space | `&nbsp;` | `&#160;` |
| < | less than sign | `&lt;` | `&#60;` |
| > | greater than sign | `&gt;` | `&#62;` |
| & | ampersand | `&amp;` | `&#38;` |
| " | quotation mark | `&quot;` | `&#34;` |
| ' | apostrophe | `&apos;` (IE not supported) | `&#39;` |
| ¢ | cent | `&cent;` | `&#162;` |
| £ | pound | `&pound;` | `&#163;` |
| ¥ | yen | `&yen;` | `&#165;` |
| € | euro | `&euro;` | `&#8364;` |
| § | section | `&sect;` | `&#167;` |
| © | copyright | `&copy;` | `&#169;` |
| ® | registered trademark | `&reg;` | `&#174;` |
| ™ | trademark | `&trade;` | `&#8482;` |
| × | multiplication sign | `&times;` | `&#215;` |
| ÷ | division sign | `&divide;` | `&#247;` |

For a complete reference of entity symbols, you can visit the HTML Entity Symbol Reference.
