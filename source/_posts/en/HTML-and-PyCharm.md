---
title: "HTML and PyCharm"
date: 2022-12-23
updated: 2022-12-23
categories:
  - HTML Beginner to Advanced
tags:
  - pycharm
  - python
  - html5
  - frontend
  - editor
csdn_views: 6053
csdn_likes: 17
csdn_comments: 1
csdn_favorites: 27
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128421939
cover: /images/posts/HTML与PyCharm/659ffe884ac2.png
lang_pair:
  zh-CN: "HTML与PyCharm"
---

> This article was migrated from CSDN blog
> Original link: [HTML and PyCharm](https://blog.csdn.net/m0_59180666/article/details/128421939)
> 📊 6053 views | 👍 17 likes | 💬 1 comment | ⭐ 27 favorites

## Table of Contents

1. How to Create HTML Files in PyCharm
2. How to Create HTML Templates in PyCharm
3. How to Add Author and Time Information to Templates

(Similarly, you can create templates for Python Scripts, though typically just for auto-filling author information)

---

In the previous article, we mentioned using PyCharm to create HTML files. This article will explain what makes it convenient:

---

### 1. How to Create HTML Files in PyCharm

First, right-click on the project directory and select New → HTML File

![](/images/posts/HTML与PyCharm/659ffe884ac2.png)

The following dialog will appear:

![](/images/posts/HTML与PyCharm/86c7469a1205.png)

Enter the file name, select the file type, and you're done! Generally, choose HTML 5 since some tags in HTML 4 are outdated or deprecated. For the long term, it's better to learn and use HTML 5.

After entering the name and creating the file, you'll see the following interface - our auto-generated template!

![](/images/posts/HTML与PyCharm/d10a3e5552fe.png)

Below is a tutorial on how to create templates.

---

### 2. How to Create HTML Templates in PyCharm

Go to File → Settings

![](/images/posts/HTML与PyCharm/ffc938f93b1d.png)

After opening, you'll see the following interface. Select Editor → File and Code Templates

![](/images/posts/HTML与PyCharm/84edd7ffed08.png)

Select the HTML File option, which corresponds to HTML 5 File. Copy my template into it:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>#[[$Title$]]#</title>
</head>
<body>
#[[$END$]]#
</body>
</html>
```

- Line 1: Declares the document type as HTML
- Line 2: Declares the document language (change to your preferred language)
- Lines 3-6: Header tags, declaring UTF-8 encoding and automatically moving the cursor to the Title position marked by dollar signs, helping us modify the title automatically
- Lines 8-11: After modifying the title, the cursor automatically jumps to the END position in the body tags to start writing content

---

### 3. How to Add Author and Time Information to Templates

You can simply add the following code snippet to your template:

```
# Created at Someplace
# Author: Somebody
# Time: ${DATE} ${TIME}
```

Modify `Someplace` to your location name - it could be your school's abbreviation or your city. Change `Somebody` to your name.

The Time field doesn't need modification - it will automatically capture the system date and time when the file is created!

---

### (Similarly, you can create templates for Python Scripts)

![](/images/posts/HTML与PyCharm/36f83b59a8ec.png)

This is typically used for auto-filling author information in Python files.

---

## Summary

PyCharm provides excellent support for HTML development:

1. Easy HTML file creation with built-in templates
2. Customizable templates with placeholders for title and content
3. Automatic metadata insertion (date, time, author)
4. Same template system works for Python scripts and other file types
