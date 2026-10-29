---
type: post
csdn: true
title: "Fix UnicodeEncodeError: 'gbk' codec can't encode character '\\xa0'"
date: "2023-02-02"
lastmod: "2023-02-02"
authors:
  - admin
tags:
  - "python"
  - "gbk"
  - "encoding"
  - "debug"
  - "coding-standards"
  - "CSDN"
categories:
  - "Debug Tips"
summary: "While scraping novel data from the web, the webpage was encoded in GBK. When writing to a txt file, I encountered this error:"
image:
  filename: "covers/csdn-ai.png"
  caption: "CSDN Archive · AI · DATA"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128845077"
csdn_views: 6671
csdn_likes: 8
csdn_comments: 0
csdn_favorites: 19
---

> This article was migrated from CSDN blog
> Original link: [Fix UnicodeEncodeError: 'gbk' codec can't encode character '\xa0'](https://blog.csdn.net/m0_59180666/article/details/128845077)
> 📊 6671 views | 👍 8 likes | 💬 0 comments | ⭐ 19 favorites


## Project Scenario

While scraping novel data from the web, the webpage was encoded in GBK. When writing to a txt file, I encountered this error:

```
UnicodeEncodeError: 'gbk' codec can't encode character '\xa0' in position XX: illegal multibyte sequence
```

Upon investigation, `\xa0` is actually a character from the **latin1 (ISO/IEC_8859-1) extended character set**, representing the non-breaking space (nbsp). The latin1 character set is backward compatible with ASCII (0x20~0x7e).

`\xa0` represents a non-breaking space character. When web scraping, you'll encounter it quite frequently, often alongside other Unicode characters like `\u3000`, `\u2800`, and `\t`.

---

## Problem Description

Need to remove the non-breaking space character '\xa0'.

---

## Root Cause Analysis

The issue is that `\xa0` encoding is incompatible with GBK. On Windows systems, txt files default to GBK encoding, so the problem isn't with the text file itself.

The root cause is that the scraped data contains characters that cannot be encoded in GBK. Upon inspection, only `\xa0` was causing issues.

---

## Solutions

### replace() function

My solution is straightforward - use `str.replace('old', 'new')` to replace the character:

```python
cont = cont.replace('\xa0', ' ')
```

This perfectly solves the problem.

---

### Other Methods (from the web)

#### Using `re.sub`

Regular expressions can easily match all whitespace characters, including Unicode characters:

```python
>>> import re
>>> s = 'T-shirt\xa0\xa0短袖圆领衫,\u3000体恤衫\xa0买一件\t吧'
>>> re.sub('\s', ' ', s)
'T-shirt  短袖圆领衫, 体恤衫 买一件 吧'
```

Note that this regex treats all whitespace characters uniformly, which may differ from the original page display.

#### Using `translate` method

The `str` object's `translate` method is also great for removing these characters. Refer to the Python standard library for detailed usage:

```python
>>> inputstring = u'\n Door:\xa0Novum \t'
>>> move = dict.fromkeys((ord(c) for c in u"\xa0\n\t"))
>>> output = inputstring.translate(move)
>>> output
'Door:Novum'
```

#### Using `split` method

Split the string and rejoin it - whitespace characters will be removed. However, this method is aggressive and removes ALL whitespace, so use with caution:

```python
>>> s = 'T-shirt\xa0\xa0短袖圆领衫,\u3000体恤衫\xa0买一件\t吧'
>>> ''.join(s.split())
'T-shirt短袖圆领衫,体恤衫买一件吧'
```

#### Using `unicodedata` module

The Python standard library's `unicodedata` module provides a `normalize` method to convert Unicode characters to normal characters. This is arguably the best method for handling such cases - it restores characters to their expected form without damaging other normal whitespace characters, and can also restore other non-whitespace characters.

The first parameter of `normalize` specifies the string normalization method:
- `NFC`: Characters should be composed as a whole (using single encoding when possible)
- `NFD`: Characters should be decomposed into multiple combining characters
- Python also supports extended normalization forms `NFKC` and `NFKD`, which add extra compatibility features when processing certain characters

Example of using this method to handle `\xa0` and similar characters:

```python
>>> import unicodedata
>>> s = 'T-shirt\xa0\xa0短袖圆领衫,\u3000体恤衫\xa0买一件\t吧'
>>> unicodedata.normalize('NFKC', s)
'T-shirt  短袖圆领衫, 体恤衫 买一件\t吧'
```

---

## Summary

When dealing with `UnicodeEncodeError` related to `\xa0` characters:

1. **Quick fix**: Use `str.replace('\xa0', ' ')` for simple cases
2. **Regex approach**: Use `re.sub('\s', ' ', s)` for uniform whitespace handling
3. **Best practice**: Use `unicodedata.normalize('NFKC', s)` for proper Unicode normalization

The `unicodedata` approach is recommended as it properly handles Unicode characters while preserving the intended formatting.
