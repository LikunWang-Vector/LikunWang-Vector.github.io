---
title: "12. XPath Parsing Introduction"
date: 2023-01-02
updated: 2023-01-02
categories:
  - Python Web Scraping Tutorial
tags:
  - python
  - programming
  - web scraping
  - data analysis
csdn_views: 611
csdn_likes: 2
csdn_comments: 1
csdn_favorites: 6
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128519694
cover: /images/posts/12.-XPath解析入门/7dcace80f3c2.png
lang_pair:
  zh-CN: "12. XPath解析入门"
---

> This article was migrated from CSDN blog
> Original link: [12. XPath Parsing Introduction](https://blog.csdn.net/m0_59180666/article/details/128519694)
> 📊 611 views | 👍 2 likes | 💬 1 comment | ⭐ 6 favorites

**Table of Contents**

Introduction

Module Installation

Basic XPath Concepts

XPath Basic Syntax

Complete Test Code

XPath Advanced Usage

Task 1: Process a resource file with xpath

Task 2: Find tag location, like html tag

Task 3: Find text content in each list item (li) of unordered list (ul)

Task 4: Find text content in first list item (li) of unordered list (ul)

Task 5: Find link (a) content in each list item (li) of unordered list (ul)

Task 6: Get text wrapped by href='dapao' (attribute filtering)

Task 7: Get list items, then recursively extract text and href attribute values

Task 8: Exercise: Print text info of first div

XPath Advanced Usage Complete Code

* * *

### Introduction

XPath is a language for finding information in XML documents. XPath can traverse elements and attributes in XML documents. HTML happens to be a subset of XML, so XPath can be used to find content in HTML.

* * *

### Module Installation

As usual, just `pip install lxml`

![](/images/posts/12.-XPath解析入门/7dcace80f3c2.png)

* * *

### Basic XPath Concepts

Here's an XML document:

```XML
<book>
    <id>1</id>
    <name>Wild Flowers</name>
    <price>1.23</price>
    <author>
        <nick>John Doe</nick>
        <nick>Jane Doe</nick>
    </author>
</book>
```

First, understand these concepts:

1. book, id, name, price... are all called nodes
2. id, name, price, author are called child nodes of book
3. book is called the parent node of id, name, price, author
4. id, name, price, author are called sibling nodes

With this foundation, we can start learning XPath basic syntax.

* * *

### XPath Basic Syntax

Using another XML example:

```XML
<book>
    <id>1</id>
    <name>Wild Flowers</name>
    <price>1.23</price>
    <nick>Tofu</nick>
    <author>
        <nick id="10086">John Strong</nick>
        <nick id="10010">Jane Smith</nick>
        <nick class="jay">Jay Chou</nick>
        <nick class="jolin">Jolin Tsai</nick>
        <div>
            <nick>Hot1</nick>
        </div>
        <span>
            <nick>Hot2</nick>
            <div>
                <nick>Hot3</nick>
            </div>
        </span>
    </author>
    <partner>
        <nick id="ppc">Partner1</nick>
        <nick id="ppbc">Partner2</nick>
    </partner>
</book>
```

To use XPath parsing in Python, first learn how to import:

```python
from lxml import etree
```

Import the etree module from the lxml library we just installed for XPath parsing.

Write the XML example to a file and process it with `etree.XML()`:

```python
xml = """
<book>
    <id>1</id>
    <name>Wild Flowers</name>
    ...
</book>
"""
tree = etree.XML(xml)
```

Besides processing XML, etree also has `etree.HTML()` for HTML files and `etree.parse()` for resource files, which we'll use later.

XPath parsing is based on file-path-like syntax. Tags are nested, so this algorithm follows file path conventions.

To request the name tag, its XPath path is: `/book/name`. In code:

```python
result = tree.xpath("/book/name")
```

'/' represents hierarchy. Linux/Mac users know the first '/' is the root node. Windows file systems start with drive letters (C:/, etc.), but they also have a root node - it's just omitted for readability.

To request **all nick tags wrapped by author tag**, use XPath: `/book/author/nick` to get all nick tags on this path.

```python
result = tree.xpath("/book/author/nick")
```

Printing result shows an iterator-like result with tag locations. But we want **the text content or attribute values**. Using `/text` gets the text tag location. So we use `text()` to get the text content wrapped by the found tag.

```python
result = tree.xpath("/book/name/text()")  # text() gets text
# Result: ['Wild Flowers']
```

Similarly, get all names under `/book/author/nick`:

```python
result = tree.xpath("/book/author/nick/text()")
# Result: ['John Strong', 'Jane Smith', 'Jay Chou', 'Jolin Tsai']
```

But what if we want **all text from all nick tags inside author**, including Hot1, Hot2, Hot3?

```python
result = tree.xpath("/book/author//nick/text()")  # // means descendants
# Result: ['John Strong', 'Jane Smith', 'Jay Chou', 'Jolin Tsai', 'Hot1', 'Hot2', 'Hot3']
```

The double slash '//' after author means get all descendant nick tags - there can be 0, 1, 2, 3, ..., n levels between them. All nick tags under author are captured.

For **only one level of results**:

```python
result = tree.xpath("/book/author/*/nick/text()")  # * is any node, wildcard
# Result: ['Hot1', 'Hot2']
```

The asterisk * between author and nick represents any tag name (wildcard), but **only replaces one level**, so it doesn't get Hot3 from `/book/author/span/div/nick`.

Practice: get **all text wrapped by nick** in this XML:

```python
result = tree.xpath("/book//nick/text()")
# Result: ['Tofu', 'John Strong', 'Jane Smith', 'Jay Chou', 'Jolin Tsai', 'Hot1', 'Hot2', 'Hot3', 'Partner1', 'Partner2']
```

Simple - just add double slash after book.

* * *

### Complete Test Code

When testing, comment out unnecessary code to easily view results, or use debug mode.

Quick tip: In PyCharm, use Ctrl+/ to comment selected lines.

```python
# xpath is a language for searching content in XML documents
# html is a subset of xml

# Install lxml module
# pip install lxml -i mirror_url

# xpath parsing
from lxml import etree

xml = """
<book>
    <id>1</id>
    <name>Wild Flowers</name>
    <price>1.23</price>
    <nick>Tofu</nick>
    <author>
        <nick id="10086">John Strong</nick>
        <nick id="10010">Jane Smith</nick>
        <nick class="jay">Jay Chou</nick>
        <nick class="jolin">Jolin Tsai</nick>
        <div>
            <nick>Hot1</nick>
        </div>
        <span>
            <nick>Hot2</nick>
            <div>
                <nick>Hot3</nick>
            </div>
        </span>
    </author>
    <partner>
        <nick id="ppc">Partner1</nick>
        <nick id="ppbc">Partner2</nick>
    </partner>
</book>
"""

tree = etree.XML(xml)
# result = tree.xpath("/book")  # / represents hierarchy. First / is root node
# result = tree.xpath("/book/name")
# result = tree.xpath("/book/name/text()")  # text() gets text
# result = tree.xpath("/book/author//nick/text()")  # // descendants
# result = tree.xpath("/book/author/*/nick/text()")  # * is any node, wildcard
result = tree.xpath("/book//nick/text()")
print(result)
```

* * *

### XPath Advanced Usage

Using a simple HTML file to show more XPath capabilities:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Title</title>
</head>
<body>
    <ul>
        <li><a href="http://www.baidu.com">Baidu</a></li>
        <li><a href="http://www.google.com">Google</a></li>
        <li><a href="http://www.sogou.com">Sogou</a></li>
    </ul>
    <ol>
        <li><a href="plane">Plane</a></li>
        <li><a href="cannon">Cannon</a></li>
        <li><a href="train">Train</a></li>
    </ol>
    <div class="job">Li Ka-shing</div>
    <div class="common">Hot Soup</div>
</body>
</html>
```

Save as `7_xpath_eg.html` in the same folder as your py file.

#### Task 1: Process a resource file with xpath

```python
from lxml import etree
tree = etree.parse("7_xpath_eg.html")
```

Here we use the parse function to process local resource files.

#### Task 2: Find tag location, like html tag

```python
result = tree.xpath('/html')
# Result: [<Element html at 0x15d667f6580>]
```

Found the tag location and its address.

#### Task 3: Find text content in each list item (li) of unordered list (ul)

```python
result = tree.xpath("/html/body/ul/li/a/text()")
# Result: ['Baidu', 'Google', 'Sogou']
```

#### Task 4: Find text content in first list item (li) of unordered list (ul)

```python
result = tree.xpath("/html/body/ul/li[1]/a/text()")
# xpath indexing starts from 1, [] indicates index
# Result: ['Baidu']
```

Note: XPath doesn't start from 0 - index 1 is the first item.

#### Task 5: Find link (a) content in each list item (li) of unordered list (ul)

```python
result = tree.xpath("/html/body/ul/li/a/@href")
# Result: ['http://www.baidu.com', 'http://www.google.com', 'http://www.sogou.com']
```

Use "@attribute" to get attribute values.

#### Task 6: Get text wrapped by href='cannon' (attribute filtering)

```python
result = tree.xpath("/html/body/ol/li/a[@href='cannon']/text()")
# [@xxx=xxx] attribute filtering
# Result: ['Cannon']
```

Filter attributes by adding `[@attribute=value]` after the tag - similar to bs4's approach.

#### Task 7: Get list items, then recursively extract text and href attribute values

```python
ol_li_list = tree.xpath("/html/body/ol/li")
for li in ol_li_list:
    # Extract text info from each li
    result = li.xpath("./a/text()")  # Continue searching within li. Relative search
    print(result)
    result2 = li.xpath("./a/@href")  # Get attribute value: @attribute
    print(result2)
```

`./` means relative search from current path - '.' represents `/html/body/ol/li`.

#### Task 8: Exercise: Print text info of first div

```python
print(tree.xpath('/html/body/div[1]/text()'))
# Result: ['Li Ka-shing']
```

* * *

### XPath Advanced Usage Complete Code

```python
from lxml import etree

tree = etree.parse("7_xpath_eg.html")
# result = tree.xpath('/html')
# result = tree.xpath("/html/body/ul/li/a/text()")
# result = tree.xpath("/html/body/ul/li/a/@href")
# result = tree.xpath("/html/body/ul/li[1]/a/text()")  # xpath indexing starts from 1
# result = tree.xpath("/html/body/ol/li/a[@href='cannon']/text()")  # [@xxx=xxx] attribute filtering
# print(result)

# ol_li_list = tree.xpath("/html/body/ol/li")
# for li in ol_li_list:
#     result = li.xpath("./a/text()")  # Relative search within li
#     print(result)
#     result2 = li.xpath("./a/@href")  # Get attribute value: @attribute
#     print(result2)

# print(tree.xpath("/html/body/ul/li/a/@href"))
# print(tree.xpath('/html/body/div[1]/text()'))
# print(tree.xpath('/html/body/ol/li/a/text()'))
```

Please comment/uncomment code sections for testing.

* * *

### Summary

This chapter introduced XPath basics - processing XML and HTML files, and various XPath usage scenarios. Next chapter will be hands-on practice.

We've now learned three parsing methods. You can freely combine them to efficiently get the information you need.
