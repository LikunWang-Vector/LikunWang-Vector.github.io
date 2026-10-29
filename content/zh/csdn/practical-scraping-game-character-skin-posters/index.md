---
type: post
csdn: true
title: "42. 疯狂爬取王者荣耀所有皮肤高清海报（文末源码）"
date: "2023-08-09"
lastmod: "2023-08-09"
authors:
  - admin
tags:
  - "python"
  - "开发语言"
  - "王者荣耀"
  - "高清图片"
  - "爬虫"
  - "CSDN"
categories:
  - "Python爬虫入门、进阶与实战"
summary: "UP前段时间忙于期末和出国事宜，所以很久没有更新我们的爬虫专栏。今天开始我们继续不定期更新一些有趣的小案例，当然，不会很越界，UP本人使用爬虫也是够用即可爬虫虽好，过度可是会喜提银手镯的！"
image:
  filename: "covers/csdn-python-crawler.png"
  caption: "CSDN Archive · PYTHON · CRAWLER"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/132195883"
csdn_views: 722
csdn_likes: 5
csdn_comments: 2
csdn_favorites: 4
---

> 本文迁移自CSDN博客
> 原文链接：[42. 疯狂爬取王者荣耀所有皮肤高清海报（文末源码）](https://blog.csdn.net/m0_59180666/article/details/132195883)
> 📊 722 阅读 | 👍 5 点赞 | 💬 2 评论 | ⭐ 4 收藏


### 前言

阔别已久，各位粉丝朋友们。

UP前段时间忙于期末和出国事宜，所以很久没有更新我们的爬虫专栏。今天开始我们继续不定期更新一些有趣的小案例，当然，不会很越界，UP本人使用爬虫也是够用即可~爬虫虽好，过度可是会喜提银手镯的！

好了，闲话少叙，我们今天带来的是在王者荣耀官网批量下载所有英雄的皮肤图片，并按英雄名称归类放于同一个文件夹下，效果如图：

![](/images/posts/42.-疯狂爬取王者荣耀所有皮肤高清海报（文末源码）/e60526d24355.png)

怎么样，是不是特别井井有条，并且图片质量是很高的，下面就让我们开始今天的教程~

* * *

### 目的

爬取王者荣耀官网所有英雄的高清皮肤海报

* * *

### 思路

1\. 导包，部署好环境

2\. 伪装请求头

3\. 访问英雄列表，获取英雄ID

4\. 分别访问各英雄主页，查看图片详情

5\. 写入本地文件夹（文件夹自动命名）

* * *

### 代码实现

#### 1\. 导包，部署好环境

```python
# 发送请求的模块 pip install requests
import requests
# 解析html代码的工具 lxml    pip install lxml
from lxml import etree
import os
from time import sleep
```

#### 2\. 伪装请求头

```python
# 伪装自己
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36',
    # 'referer': 'https://pvp.qq.com/web201605/herolist.shtml'
}

hero_list_url = 'https://pvp.qq.com/web201605/js/herolist.json'
hero_list_resp = requests.get(hero_list_url, headers=headers, verify=False)
```

#### 3\. 访问英雄列表，获取英雄ID

```python
for h in hero_list_resp.json():
    ename = h.get('ename')
    cname = h.get('cname')
    # 访问英雄主页
    hero_info_url = f'https://pvp.qq.com/web201605/herodetail/{ename}.shtml'
    hero_info_resp = requests.get(hero_info_url, headers=headers)
    hero_info_resp.encoding = 'gbk'
    e = etree.HTML(hero_info_resp.text)
```

#### 4\. 分别访问各英雄主页，查看图片详情

```python
    names = e.xpath('//ul[@class="pic-pf-list pic-pf-list3"]/@data-imgname')[0]
    names = [name[0:name.index('&')] for name in names.split('|')]
    # 发送请求
    for i, n in enumerate(names):
        resp = requests.get(
            f'https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/{ename}/{ename}-bigskin-{i + 1}.jpg',
            headers=headers)
        # 接收服务器响应的图片(皮肤)
```

#### 5\. 写入本地文件夹（文件夹自动命名）

```python
        # 保存图片(皮肤)
        if not os.path.exists(f'./13_skins/{cname}'):
            os.makedirs(f'./13_skins/{cname}')
        with open(f'./13_skins/{cname}/{n}.jpg', 'wb') as f:
            f.write(resp.content)
        print(f'已下载皮肤: {n}')
        sleep(1)
```

* * *

### 完整源码

```python
# 发送请求的模块 pip install requests
import requests
# 解析html代码的工具 lxml    pip install lxml
from lxml import etree
import os
from time import sleep

# 伪装自己
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36',
    # 'referer': 'https://pvp.qq.com/web201605/herolist.shtml'
}

hero_list_url = 'https://pvp.qq.com/web201605/js/herolist.json'
hero_list_resp = requests.get(hero_list_url, headers=headers, verify=False)
# print(hero_list_resp.json())
for h in hero_list_resp.json():
    ename = h.get('ename')
    cname = h.get('cname')
    # 访问英雄主页
    hero_info_url = f'https://pvp.qq.com/web201605/herodetail/{ename}.shtml'
    hero_info_resp = requests.get(hero_info_url, headers=headers)
    hero_info_resp.encoding = 'gbk'
    e = etree.HTML(hero_info_resp.text)
    names = e.xpath('//ul[@class="pic-pf-list pic-pf-list3"]/@data-imgname')[0]
    names = [name[0:name.index('&')] for name in names.split('|')]
    # 发送请求
    for i, n in enumerate(names):
        resp = requests.get(
            f'https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/{ename}/{ename}-bigskin-{i + 1}.jpg',
            headers=headers)
        # 接收服务器响应的图片(皮肤)
        # 保存图片(皮肤)
        if not os.path.exists(f'./13_skins/{cname}'):
            os.makedirs(f'./13_skins/{cname}')
        with open(f'./13_skins/{cname}/{n}.jpg', 'wb') as f:
            f.write(resp.content)
        print(f'已下载皮肤: {n}')
        sleep(1)
```

* * *

### 运行效果

![](/images/posts/42.-疯狂爬取王者荣耀所有皮肤高清海报（文末源码）/d42a9d4aa08b.png)

* * *

### 总结

今天我们学习了如何爬取王者荣耀官网高清皮肤海报，下期想看什么内容欢迎在评论区留言或者私信UP~
