---
type: post
csdn: true
title: "30. PyQuery: CSS Selector Based on HTML"
date: "2023-01-25"
lastmod: "2023-01-25"
authors:
  - admin
tags:
  - "html"
  - "css"
  - "pyquery"
  - "CSDN"
categories:
  - "Python Web Scraping from Beginner to Pro"
summary: "In the previous chapter, we learned about CSS and CSS selectors. In this section, we introduce a Python module: PyQuery."
image:
  filename: "covers/csdn-python-crawler.png"
  caption: "CSDN Archive · PYTHON · CRAWLER"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128756728"
csdn_views: 964
csdn_likes: 3
csdn_comments: 2
csdn_favorites: 5
---

> This article was migrated from my [CSDN blog](https://blog.csdn.net/m0_59180666).
> Original: [30. PyQuery: CSS Selector Based on HTML](https://blog.csdn.net/m0_59180666/article/details/128756728)
> 📊 964 views | 👍 3 likes | 💬 2 comments | ⭐ 5 favorites

> This article is translated from my CSDN blog
> Original link: [30. PyQuery: 基于HTML的CSS选择器](https://blog.csdn.net/m0_59180666/article/details/128756728)
> 📊 964 views | 👍 3 likes | 💬 2 comments | ⭐ 5 favorites


### Introduction

In the previous chapter, we learned about CSS and CSS selectors. In this section, we introduce a Python module: PyQuery.

Some of you may be familiar with jQuery in Java. PyQuery works in a similar way.

---

### Importing the Module

```python
from pyquery import PyQuery
```

---

### Basic Usage

Here are the commonly used methods:

Let's explain through examples:

```python
html = """
<ul>
    <li class="aaa"><a href="http://www.google.com">Google</a></li>
    <li class="aaa"><a href="http://www.baidu.com">Baidu</a></li>
    <li class="bbb" id="qq"><a href="http://www.qq.com">Tencent</a></li>
    <li class="bbb"><a href="http://www.csdn.net">CSDN</a></li>
</ul>
"""

# Load HTML content
p = PyQuery(html)
print(p)
print(type(p))
```

Import a simple HTML snippet, load it with the PyQuery interface, and print the output. You'll see it's the HTML content itself. Print its type, and you'll find **it's a PyQuery class**.

What's the use of a PyQuery object?

It can load HTML and then perform CSS selector operations on it.

We covered CSS selector knowledge in the previous section. If you're unfamiliar, please refer to that chapter.

#### Select by Tag

```python
# PyQuery object directly uses (CSS selector)
a = p("a")
print(a)
print(type(a))  # Still a PyQuery object
```

This filters out all `a` tag objects, and the result is still a PyQuery object, which leads us to the next example.

#### Chained Tag Operations

```python
# Chained operations
a = p("li")("a")
print(a)
```

Since the filtered result is still a PyQuery object, we can continue filtering. The example above first filters `li` tags, then filters `a` tags within them.

#### Shorthand: Descendant Selector

```python
a = p("li a")
print(a)
```

This produces the same output as above. It uses CSS selector syntax: the descendant selector, filtering all `a` tags contained within `li` tags.

#### Class Selector

```python
a = p(".aaa a")  # class="aaa"
print(a)
```

The query result is all `a` tags contained within tags with class "aaa".

#### ID Selector

```python
a = p("#qq a")  # id="qq"
print(a)
```

The query result is all `a` tags contained within the tag with id "qq".

#### Attribute/Text Selector (Key Point)

```python
href = p("#qq a").attr('href')  # Get attribute
text = p("#qq a").text()  # Get text
print(href)
print(text)
```

The query result is the href attribute and text content of the `a` tag within the tag with id "qq".

**Note:** If you try to get attributes from multiple tags at once, you'll only get the first one:

```python
# Pitfall: getting attributes from multiple tags only returns the first
href = p("li a").attr("href")
print(href)
```

When getting attributes from multiple tags, it returns after finding the first one. You can't write it this way.

#### Improved Method for Multiple Tags

```python
# Getting attributes from multiple tags
it = p("li a").items()
for item in it:  # Get each tag from the iterator
    href = item.attr("href")  # Get href attribute
    text = item.text()
    print(text, href)
```

Use the `items()` method to convert tags into a list, then iterate through the list to get the href attribute from each one.

#### Quick Summary

> 1. pyquery(selector)
> 2. items() - When the selector returns many items and you need to process them one by one
> 3. attr(attribute_name) - Get attribute information
> 4. text() - Get text content

---

### PyQuery's Powerful Feature: Modifying Source Code

The biggest difference between PyQuery and other parsing methods is that it can modify web page source code to make it "tidy", which makes it easier to extract information.

As shown in the following example:

#### Adding Code Blocks

```python
html = """
<HTML>
    <div class="aaa">Dada</div>
    <div class="bbb">Dudu</div>
</HTML>
"""

p = PyQuery(html)

# Add a new tag after the specified tag
p("div.aaa").after("""<div class="ccc">Hoho</div>""")
p("div.aaa").append("""<span>I love you</span>""")
print(p)
```

Line 11 means adding a code block contained in `after` after the div tag with class "aaa";

Line 12 means adding a code block contained in `append` inside the div tag with class "aaa".

#### Modifying/Adding Attributes

```python
p("div.bbb").attr("class", "ccc")  # Modify attribute
p("div.ccc").attr("id", "12306")  # Add new attribute (if tag doesn't have it)
print(p)
```

Both modifying and adding attributes use the `.attr()` method. If the attribute exists, it modifies it; if not, it adds it.

This is similar to Python dictionary key-value pairs, easy to understand.

#### Deleting Attributes/Tags

```python
p("div.ccc").remove_attr("id")  # Delete attribute
p("div.aaa").remove()  # Delete tag
print(p)
```

The code above removes the id attribute from the div with class "ccc", and removes the div tag with class "aaa" entirely.

You can use these methods to remove the tag itself, tag attributes, tag classes, or tag namespaces (rarely used).

---

### Summary

In this section, we discussed the basic usage of PyQuery and its special features. The next section will provide practical exercises, demonstrating when PyQuery is most suitable (i.e., making source code "tidy" for easier information extraction).
