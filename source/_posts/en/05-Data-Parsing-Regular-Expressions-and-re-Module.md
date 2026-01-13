---
title: "05. Data Parsing, Regular Expressions and re Module"
date: 2022-12-29
updated: 2022-12-29
categories:
  - Python Web Crawler Tutorial
tags:
  - crawler
  - html
  - regex
  - python
  - pip
lang: en
cover: /images/posts/05.-数据解析、正则表达式与re模块/9aed1a1d72ca.png
lang_pair:
  zh-CN: "05. 数据解析、正则表达式与re模块"
---

> This article was migrated from CSDN blog
> Original link: [05. 数据解析、正则表达式与re模块](https://blog.csdn.net/m0_59180666/article/details/128479831)

**Table of Contents**

Data Parsing Overview

Regular Expressions

Concept of Regex

Pros and Cons of Regular Expressions

Regex Syntax

Common Metacharacters

Quantifiers

Greedy vs Lazy Matching

Typical Cases

re Module

Common Functions in re Module

Summary

Complete Code Used in This Section

* * *

### Data Parsing Overview

In previous sections, we basically mastered the basic skills of scraping entire webpages. However, in most cases, we don't need the entire webpage content, such as page frameworks, advertisements, notifications, etc. How do we extract only the target data we need? This involves data parsing!

We will learn three parsing methods:

1\. re parsing

2\. bs4 parsing

3\. xpath parsing

These three methods are not limited to standalone use - they can be mixed according to needs. When writing crawlers, we're completely results-oriented. As the saying goes, it doesn't matter if it's a black cat or white cat - a cat that catches mice is a good cat! As long as we can get the data we want, the method doesn't matter. After mastering these methods, we can then consider performance issues.

* * *

### Regular Expressions

When it comes to data parsing, regular expressions are indispensable.

#### Concept of Regex:

> Regular Expression is a syntax rule that uses expressions to match strings.

In plain terms, it's extracting the parts we want from a piece of text/code through a series of expressions. The webpage source code we scrape is essentially a super long string, so using regular expressions to extract content from it is perfect!

#### Pros and Cons of Regular Expressions:

Pros: Fast speed, high efficiency, high accuracy

Cons: Somewhat difficult for beginners to get started

As long as we can master the logical relationships of regex writing, creating a regular expression to extract page content isn't actually complex.

#### Regex Syntax:

Use metacharacters in combinations to match strings. Here's a website for testing regular expressions online:

[Online Regex Testing Website![](/images/posts/05.-数据解析、正则表达式与re模块/9aed1a1d72ca.png)https://tool.oschina.net/regex/](https://tool.oschina.net/regex/)

Metacharacters: Special symbols with fixed meanings

#### Common Metacharacters:

```
.     Match any character except newline
\w    Match letter, digit, or underscore
\s    Match any whitespace character
\d    Match digit
\n    Match newline
\t    Match tab
^     Match start of string
$     Match end of string
\W    Match non-letter, non-digit, non-underscore
\S    Match non-whitespace
\D    Match non-digit
a|b   Match character a or b
()    Match expression in parentheses, also represents a group
[...] Match characters in character class
[^...] Match all characters except those in character class
```

#### Quantifiers:

Control how many times the preceding metacharacter appears

```
*       Repeat zero or more times
\+      Repeat one or more times
?       Repeat zero or one time
{n}     Repeat n times
{n,}    Repeat n or more times
{n,m}   Repeat n to m times
```

#### Greedy vs Lazy Matching

```
.*    Greedy matching
.*?   Lazy matching
```

Pay special attention to these two - lazy matching is what we use most when writing crawlers.

#### Typical Cases

```
String: Playing chicken game, let's play games tonight. What are you doing? Playing games
Expression: Playing.*?game
Result: Playing chicken game

Expression: Playing.*game
Result: Playing chicken game, let's play games tonight. What are you doing? Playing games

String: <div>Hot and Sour Soup</div>
Expression: <.*>
Result: <div>Hot and Sour Soup</div>

Expression: <.*?>
Result: <div> </div>

String: <div>Hot and Sour Soup</div><div><span>Rice Ball</span></div>
Expression: <div>.*</div>
Result: <div>Hot and Sour Soup</div><div><span>Rice Ball</span></div>

Expression: <div>.*?</div>
Result: <div>Hot and Sour Soup</div>  <div><span>Rice Ball</span></div>
```

So we can discover this pattern:

.*? means match as few as possible

.* means match as many as possible

Remember this pattern for now - it will be used when writing crawlers later.

* * *

### re Module

Now the question is: I know how to write regular expressions, but how do I use them in Python programs?

Observant readers may have noticed that the initials of **R**egular **E**xpression are "re" - that's our re module. So we just need to import re in Python programs to use regex.

#### Common Functions in re Module

1\. findall finds all matches, returns a list

```python
# findall: Match all content in string that matches the regex
# lst=re.findall("\d+","My phone number is: 10086, my girlfriend's phone is: 10010")
lst = re.findall(r"\d+", "My phone number is: 10086, my girlfriend's phone is: 10010")  # Adding r is better
print(lst)
print('\n')
```

2\. search will match, but if it finds the first result, it returns that result. If no match, search returns None

```python
# search, returns when first result is found, returns match object, need .group() to get data
s = re.search(r"\d+", "My phone number is: 10086, my girlfriend's phone is: 10010")
print(s)
print(s.group())
print('\n')
```

3\. match can only match from the beginning of the string

```python
# match matches from the beginning, returns match object, need .group() to get data
# t = re.match(r"\d+", "My phone number is: 10086, my girlfriend's phone is: 10010")  # Can't match, empty, group() will error
t = re.match(r"\d+", "10086, my girlfriend's phone is: 10010")
print(t)
print(t.group())
print('\n')
```

4\. finditer, similar to findall, but returns an iterator (**important**)

```python
# finditer: Match all content in string [returns iterator], need .group() to get content from iterator
it = re.finditer(r"\d+", "My phone number is: 10086, my girlfriend's phone is: 10010")
print(it)  # Returns iterator
print('\n')
for i in it:
    print(i.group())  # Display content
print('\n')
```

5\. compile, can preload a long regex for convenient later use

```python
# Preload regular expression
obj = re.compile(r"\d+")
ret = obj.finditer("My phone number is: 10086, my girlfriend's phone is: 10010")
print(ret)  # Returns iterator
print('\n')
for j in ret:
    print(j.group())  # Display content
print('\n')
ret = obj.findall("Everyone look at 5, look 7, look 5 look 5, 5 announces 42, 54 something")
print(ret)
print('\n')
```

6\. How to extract specific content from regex?

You can name groups to get specific content from regex matches

```python
s = """
<div class='qilin'><span id='1'>Guo Qilin</span></div>
<div class='iron'><span id='2'>Song Tie</span></div>
<div class='sucker'><span id='3'>Big Smart</span></div>
<div class='thinker'><span id='4'>Fan Sizhe</span></div>
<div class='balabala'><span id='5'>Nonsense</span></div>
"""

obj = re.compile(r"<div class='.*?'><span id='\d+'>.*?</span></div>", re.S)  # re.S: let . match newlines
# Printing is still tedious
result = obj.finditer(s)
for i in result:
    print(i.group())
print('\n')

# (?P<group_name>regex) can further extract content from regex matches
obj = re.compile(r"<div class='(?P<classes>.*?)'><span id='(?P<id>\d+)'>(?P<showname>.*?)</span></div>", re.S)
result = obj.finditer(s)
for i in result:
    print(i.group("classes"))
    print(i.group("showname"))
    print(i.group("id"))
print('\n')
```

Here we can see that by using groups, we can further filter the content matched by regex, making results clearer, more readable, and more valuable.

* * *

### Summary

In this section, we learned a very important method for data parsing: regular expressions. We also learned about the application of regular expressions in Python: the re module. Through various examples, we practiced using regular expressions.

I hope everyone can continue to work hard with me and enhance our personal abilities~

(You can use your spare time to learn more about computer networking and HTML/frontend knowledge to facilitate our future learning)

For HTML learning, you can refer to my other column [HTML Introduction, Advanced and Practice](https://blog.csdn.net/m0_59180666/category_12132070.html)

* * *

### Complete Code Used in This Section (Comment out parts you don't want to see when testing for easier observation)

```python
import re

# findall: Match all content in string that matches the regex
lst = re.findall(r"\d+", "My phone number is: 10086, my girlfriend's phone is: 10010")
print(lst)
print('\n')

# finditer: Match all content in string [returns iterator], need .group() to get content
it = re.finditer(r"\d+", "My phone number is: 10086, my girlfriend's phone is: 10010")
print(it)  # Returns iterator
print('\n')
for i in it:
    print(i.group())  # Display content
print('\n')

# search, returns when first result is found, returns match object, need .group() to get data
s = re.search(r"\d+", "My phone number is: 10086, my girlfriend's phone is: 10010")
print(s)
print(s.group())
print('\n')

# match matches from the beginning, returns match object, need .group() to get data
t = re.match(r"\d+", "10086, my girlfriend's phone is: 10010")
print(t)
print(t.group())
print('\n')

# Preload regular expression
obj = re.compile(r"\d+")
ret = obj.finditer("My phone number is: 10086, my girlfriend's phone is: 10010")
print(ret)  # Returns iterator
print('\n')
for j in ret:
    print(j.group())  # Display content
print('\n')
ret = obj.findall("Everyone look at 5, look 7, look 5 look 5, 5 announces 42, 54 something")
print(ret)
print('\n')

s = """
<div class='qilin'><span id='1'>Guo Qilin</span></div>
<div class='iron'><span id='2'>Song Tie</span></div>
<div class='sucker'><span id='3'>Big Smart</span></div>
<div class='thinker'><span id='4'>Fan Sizhe</span></div>
<div class='balabala'><span id='5'>Nonsense</span></div>
"""

obj = re.compile(r"<div class='.*?'><span id='\d+'>.*?</span></div>", re.S)
result = obj.finditer(s)
for i in result:
    print(i.group())
print('\n')

obj = re.compile(r"<div class='(?P<classes>.*?)'><span id='(?P<id>\d+)'>(?P<showname>.*?)</span></div>", re.S)
result = obj.finditer(s)
for i in result:
    print(i.group("classes"))
    print(i.group("showname"))
    print(i.group("id"))
print('\n')
```
