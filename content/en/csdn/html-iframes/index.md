---
type: post
csdn: true
title: "HTML Frames and Iframes"
date: "2022-12-26"
lastmod: "2022-12-26"
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
summary: "By using frames, you can display more than one page in the same browser window."
image:
  filename: "covers/csdn-html.png"
  caption: "CSDN Archive · HTML · WEB"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128443203"
csdn_views: 432
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
---

> This article was migrated from my [CSDN blog](https://blog.csdn.net/m0_59180666).
> Original: [HTML Frames and Iframes](https://blog.csdn.net/m0_59180666/article/details/128443203)
> 📊 432 views | 👍 1 likes | 💬 1 comments | ⭐ 2 favorites

**By using frames, you can display more than one page in the same browser window.**

---

### Examples

**Vertical frames** - Demonstrates how to make a vertical frame with three different documents.

**Horizontal frames** - Demonstrates how to make a horizontal frame with three different documents.

---

### Frames

With frames, you can display more than one HTML document in the same browser window. Each HTML document is called a frame, and each frame is independent of the others.

Disadvantages of using frames:

- Developers must track more HTML documents
- It is difficult to print the entire page

The frameset tag (`<frameset>`)

- The frameset tag defines how to divide the window into frames
- Each frameset defines a series of rows *or* columns
- The rows/columns value specifies the area each row or column occupies on the screen

---

### Frame Tag

The Frame tag defines the HTML document placed in each frame.

In the example below, we have a two-column frameset. The first column is set to occupy 25% of the browser window. The second column is set to occupy 75% of the browser window. The HTML document "frame_a.htm" is placed in the first column, and the HTML document "frame_b.htm" is placed in the second column:

```html
<frameset cols="25%,75%">
   <frame src="frame_a.htm">
   <frame src="frame_b.htm">
</frameset>
```

---

### Important Notes - Useful Tips:

If a frame has a visible border, the user can drag the border to resize it. To prevent this, you can add `noresize="noresize"` to the `<frame>` tag.

Add the `<noframes>` tag for browsers that do not support frames.

Important: You cannot use `<body></body>` tags together with `<frameset></frameset>` tags! However, if you add a `<noframes>` tag containing some text, you must nest that text within `<body></body>` tags.

---

### More Examples

- **How to use the `<noframes>` tag** - Demonstrates how to use the `<noframes>` tag.
- **Mixed frame structure** - Demonstrates how to make a frame structure with three documents, mixing them in rows and columns.
- **Frame structure with noresize attribute** - Demonstrates the noresize attribute. In this example, the frames are not resizable.
- **Navigation frame** - Demonstrates how to make a navigation frame with a list of links targeting a second frame.
- **Inline frame** - Demonstrates how to create an inline frame (a frame within an HTML page).

---

**An iframe is used to display a web page within a web page.**

---

### Adding an iframe Syntax

```html
<iframe src="URL"></iframe>
```

The *URL* points to the location of the separate page.

---

### Iframe - Setting Height and Width

The height and width attributes are used to specify the height and width of the iframe.

The attribute values are specified in pixels by default, but can also be set in percent (like "80%").

#### Example

```html
<iframe src="demo_iframe.htm" width="200" height="200"></iframe>
```

---

### Iframe - Removing the Border

The frameborder attribute specifies whether or not to display a border around the iframe.

Set the attribute value to "0" to remove the border:

#### Example

```html
<iframe src="demo_iframe.htm" frameborder="0"></iframe>
```

---

### Using iframe as a Link Target

An iframe can be used as the target frame for a link.

The target attribute of the link must refer to the name attribute of the iframe:

#### Example

```html
<iframe src="demo_iframe.htm" name="iframe_a"></iframe>
<p><a href="http://www.example.com" target="iframe_a">Example.com</a></p>
```

---

### HTML iframe Tag

| Tag | Description |
|-----|-------------|
| `<iframe>` | Defines an inline frame |
