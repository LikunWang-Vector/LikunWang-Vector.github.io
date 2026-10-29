---
type: post
csdn: true
title: "完美解决UnicodeEncodeError: ‘gbk‘ codec can‘t encode character ‘ ‘ in position XX: illegal multiby..."
date: "2023-02-02"
lastmod: "2023-02-02"
authors:
  - admin
tags:
  - "python"
  - "gbk"
  - "编码方式"
  - "debug"
  - "代码规范"
  - "CSDN"
categories:
  - "各种Debug小记"
summary: "从网上抓了一些小说的数据，但实际上网页是gbk编码的，写入txt文件的时候报了这个错误："
image:
  filename: "covers/csdn-ai.png"
  caption: "CSDN Archive · AI · DATA"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128845077"
csdn_views: 6671
csdn_likes: 8
csdn_comments: 0
csdn_favorites: 19
---

> 本文迁移自CSDN博客
> 原文链接：[完美解决UnicodeEncodeError: ‘gbk‘ codec can‘t encode character ‘\xa0‘ in position XX: illegal multiby...](https://blog.csdn.net/m0_59180666/article/details/128845077)
> 📊 6671 阅读 | 👍 8 点赞 | 💬 0 评论 | ⭐ 19 收藏

## 


## 项目场景：

从网上抓了一些小说的数据，但实际上网页是gbk编码的，写入txt文件的时候报了这个错误：

```XML
UnicodeEncodeError: 'gbk' codec can't encode character '\xa0' in position XX: illegal multibyte sequence
```

观察发现'\xa0'其实是属于**latin1 （ ISO/IEC_8859-1 ）中的扩展字符集字符** ，代表空白符 nbsp (non-breaking space) 。 latin1 字符集向下兼容 ASCII （ 0x20~0x7e ）。

`\xa0`表示不间断空白符，爬虫中遇到它的概率不可谓不小，而经常和它一同出现的还有`\u3000`、`\u2800`、`\t`等Unicode字符串。

* * *

## 问题描述

需要把不间断空白符'\xa0'去除

* * *

## 原因分析：

> 原因大概就是\xa0的编码方式与gbk不兼容，我使用的Windows系统的txt文件默认是gbk编码的，所以也不存在文本的问题。

所以就定位到了抓取到的数据中含有无法编译的字符。观察发现只有\xa0出现。

* * *

## 解决方案：

#### replace函数

我的解决方法十分暴力，直接用str.replace('old', 'new')来替换。

```python
cont = cont.replace('\xa0', ' ')
```

这样就完美解决了。

* * *

### 其他解决方法（来源网络）

#### 使用`re.sub`

使用正则表达式可以轻松匹配所有空白字符，它对于Unicode字符也是有效的，比如：

```
>>> import re
>>> s = 'T-shirt\xa0\xa0短袖圆领衫,\u3000体恤衫\xa0买一件\t吧'
>>> re.sub('\s', ' ', s)
T-shirt  短袖圆领衫, 体恤衫 买一件 吧
```

不过该正则表达式会对所有字符都进行统一处理，可能会与原页面展示效果有所出入。

#### 使用`translate`方法

`str`对象的`translate`方法也是去除这些字符串的好帮手，该方法具体用法可参考Python标准库，本处使用示例如下：

```
>>> inputstring = u'\n               Door:\xa0Novum    \t'
>>> move = dict.fromkeys((ord(c) for c in u"\xa0\n\t"))
>>> output = inputstring.translate(move)
>>> output
             Door:Novum
```

#### 利用`split`方法

将字符串分割再重组，这时候空白字符就会被pass掉了，不过该方法杀伤力太大，会导致所有空白消失，一定要慎用。  
使用示例：

```
>>> s = 'T-shirt\xa0\xa0短袖圆领衫,\u3000体恤衫\xa0买一件\t吧'
>>> ''.join(s.split())
T-shirt短袖圆领衫,体恤衫买一件吧
```

#### 使用`unicodedata`模块

Python标准库的`unicodedata`模块提供了`normalize`方法将Unicode字符转换为正常字符，该方法可算是处理这类情况最好的方法了，它会让字符回归到我们期望看到的样子，同时不损害其它正常的空白字符，而且还能还原其它非空白字符。`normalize`第一个参数指定字符串标准化的方式。 `NFC`表示字符应该是整体组成(比如可能的话就使用单一编码)，而`NFD`表示字符应该分解为多个组合字符表示。`Python`同样支持扩展的标准化形式`NFKC`和`NFKD`，它们在处理某些字符的时候增加了额外的兼容特性。使用该方法处理`\xa0`等字符的示例如下：

```
>>> import unicodedata
>>> s = 'T-shirt\xa0\xa0短袖圆领衫,\u3000体恤衫\xa0买一件\t吧'
>>> unicodedata.normalize('NFKC', s)
T-shirt  短袖圆领衫, 体恤衫 买一件 吧 
```
