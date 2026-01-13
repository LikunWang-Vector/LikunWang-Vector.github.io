---
title: "HTML与PyCharm"
date: 2022-12-23
updated: 2022-12-23
categories:
  - HTML入门、进阶与实战
tags:
  - pycharm
  - python
  - html5
  - 前端
  - 编辑器
csdn_views: 6053
csdn_likes: 17
csdn_comments: 1
csdn_favorites: 27
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128421939
cover: /images/posts/HTML与PyCharm/659ffe884ac2.png
lang_pair:
  en: "HTML and PyCharm"
---

> 本文迁移自CSDN博客
> 原文链接：[HTML与PyCharm](https://blog.csdn.net/m0_59180666/article/details/128421939)
> 📊 6053 阅读 | 👍 17 点赞 | 💬 1 评论 | ⭐ 27 收藏

**目录**

1\. 如何在PyCharm创建HTML文件

2\. 如何在PyCharm创建HTML模板

3\. 如何在模板中加入作者信息和时间信息

（同理，也可以在Python Script里面创建模板，不过一般就是自动填写作者信息）

* * *

上期我们提到了使用PyCharm来创作HTML文件，这期就展开说说它方便在哪里：

* * *

#### 1\. 如何在PyCharm创建HTML文件

首先，右击项目目录，选择New-HTML File

![](/images/posts/HTML与PyCharm/659ffe884ac2.png)

随后会出现下面的对话框

![](/images/posts/HTML与PyCharm/86c7469a1205.png)

输入文件名称，选择文件类型后就创建成功咯~这里一般选择HTML 5，因为HTML 4中有一些标签过气或者被弃用了，所以长远来看还是学习使用HTML 5比较好~

输入名称创建后就可以看到以下界面了，也就是我们自动生成的模板！

![](/images/posts/HTML与PyCharm/d10a3e5552fe.png)

下面教学怎么创建模板

* * *

#### 2\. 如何在PyCharm创建HTML模板

找到File-Settings

![](/images/posts/HTML与PyCharm/ffc938f93b1d.png)

打开后是以下界面，选择Editor-File and Code Templates

![](/images/posts/HTML与PyCharm/84edd7ffed08.png)选择HTML File选项即可，它就是对应着HTML 5 File，把我的模板复制进去

``` <!DOCTYPE html> <html lang="zh-CN"> <head> <meta charset="UTF-8"> <title>#[[$Title$]]#</title> </head> <body> #[[$END$]]# </body> </html> ``` 

第1行是声明文档类型为HTML

第2行是声明文档语言为中文

第3-6行是标头标签，声明编码方式为UTF-8并自动将光标移到dollar符号标识的Title位置处，帮助我们自动修改标题，修改完后自动跳转到

第8-11行正文标签里面的END位置处，开始编写正文

* * *

#### 3\. 如何在模板中加入作者信息和时间信息

可以简单的加入以下代码段在模板中

``` # Created at Someplace # Author: Somebody # Time: ${DATE} ${TIME} ``` 

其中需要修改Someplace为地点名，可以改成自己学校的简称或者所在城市，修改Somebody为自己的英文名字~

Time不需要修改，会自动获取创建文件时系统的日期和时间并填充！

* * *

### （同理，也可以在Python Script里面创建模板，不过一般就是自动填写作者信息）

![](/images/posts/HTML与PyCharm/36f83b59a8ec.png)

欢迎大家点赞、收藏和转发，希望可以和各位共同进步~如果可以的话可以点一个关注吗？你们的支持是我继续写博客的动力！
