---
title: "HTML响应式Web设计"
date: 2022-12-27
updated: 2022-12-27
categories:
  - HTML入门、进阶与实战
tags:
  - 前端
  - html
  - bootstrap
  - html5
  - 前端框架
csdn_views: 142
csdn_likes: 1
csdn_comments: 1
csdn_favorites: 2
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128454682
lang_pair:
  en: "HTML Responsive Web Design"
---

> 本文迁移自CSDN博客
> 原文链接：[HTML响应式Web设计](https://blog.csdn.net/m0_59180666/article/details/128454682)
> 📊 142 阅读 | 👍 1 点赞 | 💬 1 评论 | ⭐ 2 收藏

**目录**

什么是响应式 Web 设计？

创建自己的响应式设计

使用 Bootstrap

* * *

### 什么是响应式 Web 设计？

  * RWD 指的是响应式 Web 设计（Responsive Web Design）
  * RWD 能够以可变尺寸传递网页
  * RWD 对于平板和移动设备是必需的

* * *

### 创建自己的响应式设计

创建响应式设计的一个方法，是自己来创建它：

``` <!DOCTYPE html> <html lang="en-US"> <head> <style> .city { float: left; margin: 5px; padding: 15px; width: 300px; height: 300px; border: 1px solid black; } </style> </head> <body> <h1>Responsive Demo</h1> <h2>Resize this responsive page!</h2> <br> <div class="city"> <h2>London</h2> <p>London is the capital city of England.</p> <p>It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p> </div> <div class="city"> <h2>Paris</h2> <p>Paris is the capital and most populous city of France.</p> </div> <div class="city"> <h2>Tokyo</h2> <p>Tokyo is the capital of Japan, the center of the Greater Tokyo Area, and the most populous metropolitan area in the world.</p> </div> </body> </html> ``` 

[亲自试一试](https://www.w3school.com.cn/demo/demo_rwd_simple.html "亲自试一试")

* * *

### 使用 Bootstrap

另一个创建响应式设计的方法，是使用现成的 CSS 框架。

Bootstrap 是最流行的开发响应式 web 的 HTML, CSS, 和 JS 框架。

Bootstrap 帮助您开发在任何尺寸都外观出众的站点：显示器、笔记本电脑、平板电脑或手机：

``` <!DOCTYPE html> <html> <head> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"> </head> <body> <div class="container"> <div class="jumbotron"> <h1>Responsive Demo</h1> <p>Resize this responsive page!</p> </div> </div> <div class="container"> <div class="row"> <div class="col-md-4"> <h2>London</h2> <p>London is the capital city of England.</p> <p>It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p> </div> <div class="col-md-4"> <h2>Paris</h2> <p>Paris is the capital and most populous city of France.</p> </div> <div class="col-md-4"> <h2>Tokyo</h2> <p>Tokyo is the capital of Japan, the center of the Greater Tokyo Area, and the most populous metropolitan area in the world.</p> </div> </div> </div> </body> </html> ``` 

[亲自试一试](https://www.w3school.com.cn/demo/demo_rwd_bootstrap.html "亲自试一试")

如需学习更多有关 Bootstrap 的知识，可以参照 [Bootstrap 教程](https://www.w3school.com.cn/bootstrap5/index.asp "Bootstrap 教程")。
