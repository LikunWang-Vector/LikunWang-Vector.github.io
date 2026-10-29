---
type: post
csdn: true
title: "HTML Entities and Reserved Characters"
date: "2022-12-27"
lastmod: "2022-12-27"
authors:
  - admin
tags:
  - "html"
  - "frontend"
  - "css"
  - "javascript"
  - "html5"
  - "CSDN"
categories:
  - "HTML Beginner to Advanced"
summary: "Reserved characters in HTML must be replaced with character entities."
image:
  filename: "covers/csdn-html.png"
  caption: "CSDN Archive · HTML · WEB"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128455011"
csdn_views: 286
csdn_likes: 2
csdn_comments: 1
csdn_favorites: 3
---

> This article was migrated from my [CSDN blog](https://blog.csdn.net/m0_59180666).
> Original: [HTML Entities and Reserved Characters](https://blog.csdn.net/m0_59180666/article/details/128455011)
> 📊 286 views | 👍 2 likes | 💬 1 comments | ⭐ 3 favorites

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

To display a less than sign, we must write: `<` or `&#60;`

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
| < | less than sign | `<` | `&#60;` |
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
