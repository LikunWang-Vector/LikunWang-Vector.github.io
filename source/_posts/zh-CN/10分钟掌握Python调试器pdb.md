---
title: "10分钟掌握Python调试器pdb"
date: 2025-09-19
updated: 2025-09-19
categories:
  - 各种Debug小记
tags:
  - python
  - pdb
  - debug
csdn_views: 1074
csdn_likes: 21
csdn_comments: 0
csdn_favorites: 20
csdn_url: https://blog.csdn.net/m0_59180666/article/details/151854829
cover: /images/posts/10分钟掌握Python调试器pdb/0d565b653736.png
lang_pair:
  en: "Master Python Debugger pdb in 10 Minutes"
---

> 本文迁移自CSDN博客
> 原文链接：[10分钟掌握Python调试器pdb](https://blog.csdn.net/m0_59180666/article/details/151854829)
> 📊 1074 阅读 | 👍 21 点赞 | 💬 0 评论 | ⭐ 20 收藏

如果你还主要靠print来调试代码，那值得花10分钟试试pdb这个Python自带的Debug工具。

![](/images/posts/10分钟掌握Python调试器pdb/0d565b653736.png)

pdb有2种用法：

  * **非侵入式方法** （不用额外修改[源代码](https://zhida.zhihu.com/search?content_id=7108720&content_type=Article&match_order=1&q=%E6%BA%90%E4%BB%A3%E7%A0%81&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NTg0MTcyNzIsInEiOiLmupDku6PnoIEiLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjo3MTA4NzIwLCJjb250ZW50X3R5cGUiOiJBcnRpY2xlIiwibWF0Y2hfb3JkZXIiOjEsInpkX3Rva2VuIjpudWxsfQ.tL32VjN5GgLl8CBZXCc6yD1EtIPrdFUn_lkICmjMAJo&zhida_source=entity "源代码")，在命令行下直接运行就能调试）

``` python3 -m pdb filename.py ``` 
  * **侵入式方法** （需要在被调试的代码中添加一行代码然后再正常运行代码）

``` import pdb;pdb.set_trace() ``` 

当你在命令行看到下面这个提示符时，说明已经正确打开了pdb

``` (Pdb) ``` 

然后就可以开始输入pdb命令了，下面是pdb的常用命令

### 1、查看源代码

命令：

``` l ``` 

说明：

> 查看当前位置前后11行源代码（多次会翻页）   
>  当前位置在代码中会用-->这个符号标出来 

命令：

``` ll ``` 

说明：

> 查看当前函数或框架的所有源代码 

### 2、添加断点

命令：

``` b b lineno b filename:lineno b functionname ``` 

参数：

> filename文件名，断点添加到哪个文件， [如test.py](https://link.zhihu.com/?target=http%3A//xn--test-f96g.py/ "如test.py")   
>  lineno断点添加到哪一行   
>  function：函数名，在该函数执行的第一行设置断点 

说明：

> 1.不带参数表示查看断点设置   
>  2.带参则在指定位置设置一个断点 

### 3、添加临时断点

命令：

``` tbreak tbreak lineno tbreak filename:lineno tbreak functionname ``` 

参数：

> 同b 

说明：

> 执行一次后时自动删除（这就是它被称为临时断点的原因） 

### 4、清除断点

命令：

``` cl cl filename:lineno cl bpnumber [bpnumber ...] ``` 

参数：

> bpnumber 断点序号（多个以空格分隔） 

说明：

> 1.不带参数用于清除所有断点，会提示确认（包括临时断点）   
>  2.带参数则清除指定文件行或当前文件指定序号的断点 

### 5、打印变量值

命令：

``` p expression ``` 

参数：

> expression Python [表达式](https://zhida.zhihu.com/search?content_id=7108720&content_type=Article&match_order=1&q=%E8%A1%A8%E8%BE%BE%E5%BC%8F&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NTg0MTcyNzIsInEiOiLooajovr7lvI8iLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjo3MTA4NzIwLCJjb250ZW50X3R5cGUiOiJBcnRpY2xlIiwibWF0Y2hfb3JkZXIiOjEsInpkX3Rva2VuIjpudWxsfQ.cxhJY2ais-lWdgMxgWrmkI34vq9hQQpJIMmUZqSVmu4&zhida_source=entity "表达式")

### 6、逐行调试命令

包括 s ，n ， r 这3个相似的命令，区别在如何对待函数上

命令1：

``` s ``` 

说明：

> 执行下一行（能够进入函数体） 

命令2：

``` n ``` 

说明：

> 执行下一行（不会进入函数体） 

命令3：

``` r ``` 

说明：

> 执行下一行（在函数中时会直接执行到函数返回处） 

### 7、非逐行调试命令

命令1：

``` c ``` 

说明：

> 持续执行下去，直到遇到一个断点 

命令2

``` unt lineno ``` 

说明：

> 持续执行直到运行到指定行（或遇到断点） 

命令3

``` j lineno ``` 

说明：

> 直接跳转到指定行（注意，被跳过的代码不执行） 

### 8、查看函数参数

命令：

``` a ``` 

说明：

> 在函数中时打印函数的参数和参数的值 

### 9、打印变量类型

命令：

``` whatis expression ``` 

说明：

> 打印表达式的类型，常用来打印变量值 

### 10、启动交互式解释器

``` interact ``` 

说明：

> 启动一个python的交互式解释器，使用当前代码的全局 [命名空间](https://zhida.zhihu.com/search?content_id=7108720&content_type=Article&match_order=1&q=%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NTg0MTcyNzIsInEiOiLlkb3lkI3nqbrpl7QiLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjo3MTA4NzIwLCJjb250ZW50X3R5cGUiOiJBcnRpY2xlIiwibWF0Y2hfb3JkZXIiOjEsInpkX3Rva2VuIjpudWxsfQ.wppJyk_1KyDm59V_XSOx32zIdoX4kVFOVG2rupy9F3Y&zhida_source=entity "命名空间")（使用ctrl+d返回pdb） 

### 11、打印堆栈信息

``` w ``` 

说明：

> 打印堆栈信息，最新的帧在最底部。箭头表示当前帧。 

### 12、退出pdb

``` q ``` 

完成了。好吧，可能超过了10分钟，我承认这是一个善意的谎言，不过至此你已经掌握了，击个掌吧。
