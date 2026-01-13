---
title: "windows在gem下安装jekyll的问题"
date: 2023-09-10
updated: 2023-09-10
categories:
  - 各种Debug小记
tags:
  - android
  - gem
  - Jekyll
  - 博客
csdn_views: 831
csdn_likes: 1
csdn_comments: 0
csdn_favorites: 0
csdn_url: https://blog.csdn.net/m0_59180666/article/details/132789938
cover: /images/posts/windows在gem下安装jekyll的问题/a60c17eded1c.png
lang_pair:
  en: "Fixing Jekyll Installation Issues with Gem on Windows"
---

> 本文迁移自CSDN博客
> 原文链接：[windows在gem下安装jekyll的问题](https://blog.csdn.net/m0_59180666/article/details/132789938)
> 📊 831 阅读 | 👍 1 点赞 | 💬 0 评论 | ⭐ 0 收藏

## 项目场景：

安装jekyll时抛出错误：

ERROR: While executing gem … (Gem::RemoteFetcher::FetchError) IO::TimeoutError: Failed to open TCP connection to gems.ruby-china.com:443 (https://gems.ruby-china.com/quick/Marshal.4.8/jekyll-0.1.6.gemspec.rz) (Gem::RemoteFetcher::FetchError)

* * *

## 问题描述

错误信息"ERROR: While executing gem … (Gem::RemoteFetcher::FetchError) IO::TimeoutError: Failed to open TCP connection to gems.ruby-china.com:443 (https://gems.ruby-china.com/quick/Marshal.4.8/jekyll-0.1.6.gemspec.rz) (Gem::RemoteFetcher::FetchError)"表示在执行gem命令时出现了网络连接超时错误。这个错误可能是由于gem的源出现了问题导致的。

* * *

## 原因分析：

> 表示在执行gem命令时出现了网络连接超时错误。这个错误可能是由于gem的源出现了问题导致的。

* * *

## 解决方案：

> 为了解决这个问题，可以尝试以下步骤:
> 
>   1. 移除原有的gem源：执行命令"gem sources --remove https://rubygems.org/"。
>   2. 添加新的gem源：执行命令"gem sources -a https://gems.ruby-china.com/"，将https://api.rubygems.org/作为新的gem源。
>   3. 查看当前的gem源：执行命令"gem sources -l"，确保已成功添加新的gem源，并且只有这一个源
>   4. 当发现cmd卡住不动不要担心，只是在下载过程中，亲测有效，耐心等待即可
> 

![](/images/posts/windows在gem下安装jekyll的问题/a60c17eded1c.png)

* * *

### 附言

博主原先的错误是因为自己更改了网络代理导致连接不上，和这个api没有关系，大家就按我上面的配置就可以了
