---
type: post
csdn: true
title: "HTML and Emoji"
date: "2022-12-27"
lastmod: "2022-12-27"
authors:
  - admin
tags:
  - "html"
  - "frontend"
  - "javascript"
  - "html5"
  - "CSDN"
categories:
  - "HTML Beginner to Advanced"
summary: "Emojis are characters from the UTF-8 character set: 😄 😍 💗"
image:
  filename: "covers/csdn-html.png"
  caption: "CSDN Archive · HTML · WEB"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128455307"
csdn_views: 816
csdn_likes: 2
csdn_comments: 1
csdn_favorites: 3
---

> This article was migrated from my [CSDN blog](https://blog.csdn.net/m0_59180666).
> Original: [HTML and Emoji](https://blog.csdn.net/m0_59180666/article/details/128455307)
> 📊 816 views | 👍 2 likes | 💬 1 comments | ⭐ 3 favorites

Emojis are characters from the UTF-8 character set: 😄 😍 💗

---

### What is Emoji?

Emojis look like images or icons, but they are not.

They are letters (characters) from the UTF-8 (Unicode) character set.

Tip: UTF-8 covers almost all characters and symbols in the world.

---

### HTML charset Attribute

To display an HTML page correctly, a web browser must know the character set used in the page.

This is specified in the `<meta>` tag:

```html
<meta charset="UTF-8">
```

Tip: If not specified, UTF-8 is the default character set in HTML.

---

### UTF-8 Characters

Many UTF-8 characters cannot be typed on a keyboard, but they can always be displayed using numbers (called entity numbers):

- A is 65
- B is 66
- C is 67

#### Example

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body>

<p>I will display A B C</p>
<p>I will display &#65; &#66; &#67;</p>

</body>
</html>
```

#### Explanation

The `<meta charset="UTF-8">` element defines the character set.

Characters A, B, C are displayed by numbers 65, 66, and 67.

To let the browser understand that you are displaying a character, you must start the entity number with &# and end it with ; (semicolon).

---

### Emoji Characters

Emojis are also characters from the UTF-8 alphabet:

- 😄 is 128516
- 😍 is 128525
- 💗 is 128151

#### Example

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body>

<h1>My First Emoji</h1>

<p>&#128512;</p>

</body>
</html>
```

Since emojis are characters, they can be copied, displayed, and sized just like any other character in HTML.

#### Example

```html
<p style="font-size:48px">
&#128512; &#128516; &#128525; &#128151;
</p>
```

---

### Some Emoji Symbols in UTF-8

| Emoji | Value |
|-------|-------|
| 🗻 | `&#128507;` |
| 🗼 | `&#128508;` |
| 🗽 | `&#128509;` |
| 😀 | `&#128512;` |
| 😁 | `&#128513;` |
| 😂 | `&#128514;` |
| 😃 | `&#128515;` |
| 😄 | `&#128516;` |
| 😅 | `&#128517;` |

For a complete list, visit the HTML Emoji Reference.
