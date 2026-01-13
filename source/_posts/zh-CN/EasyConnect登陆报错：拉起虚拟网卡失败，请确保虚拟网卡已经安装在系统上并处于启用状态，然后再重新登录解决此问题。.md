---
title: "EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟网卡已经安装在系统上并处于启用状态，然后再重新登录解决此问题。"
date: 2023-04-13
updated: 2023-04-13
categories:
  - 各种Debug小记
tags:
  - 服务器
  - 网络
  - EasyConnect
csdn_views: 23049
csdn_likes: 14
csdn_comments: 11
csdn_favorites: 33
csdn_url: https://blog.csdn.net/m0_59180666/article/details/130125343
cover: /images/posts/EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟/3d6debcafc5a.png
lang_pair:
  en: "EasyConnect Login Error: Failed to Start Virtual NIC - Solution"
---

> 本文迁移自CSDN博客
> 原文链接：[EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟网卡已经安装在系统上并处于启用状态，然后再重新登录解决此问题。](https://blog.csdn.net/m0_59180666/article/details/130125343)
> 📊 23049 阅读 | 👍 14 点赞 | 💬 11 评论 | ⭐ 33 收藏

## **目录**

项目场景：

问题描述

原因分析：

解决方案：

1\. 搜索设备管理器，打开/或者打开此电脑-（顶部）计算机-属性-设备管理器进入

2\. 进入设备管理器，找到网络适配器，双击网络适配器查看有无虚拟网卡。

3\. 没有虚拟网卡，点击操作，选择添加过时硬件

4\. 按照我图示进行操作：

点击下一页

选择第二个选项，点击下一页

拉到最下面，选择网络适配器，点击下一页

厂商里面找到虚拟网卡厂商，如图所示，选择右边唯一的型号点击下一页。

点击下一页进行安装，等待安装完成即可。

然后你就可以发现已经可以成功连接了！！！ 

* * *

## 项目场景：

使用easyconnect连接校园vpn时报了标题所示的错误。

* * *

## 问题描述

无法拉起虚拟网卡/虚拟网卡未安装` `

* * *

## 原因分析：

> 最开始以为是EasyConnect安装时出了问题，毕竟安装好以后又自动更新了两次，没有想到是电脑缺少驱动的问题。

通过查阅资料发现电脑很有可能是缺少虚拟网卡，于是找一个教程安装即可。

* * *

## 解决方案：

> 源网址：[win10系统如何安装虚拟网卡-百度经验 (baidu.com)](https://jingyan.baidu.com/article/ce4366495d3ff43773afd3f5.html "win10系统如何安装虚拟网卡-百度经验 \(baidu.com\)")

### 1\. 搜索设备管理器，打开/或者打开此电脑-（顶部）计算机-属性-设备管理器进入

![](/images/posts/EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟/3d6debcafc5a.png)

![](/images/posts/EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟/82f75ac6a45b.png)

### 2\. 进入设备管理器，找到网络适配器，双击网络适配器查看有无虚拟网卡。

![](/images/posts/EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟/be5e59291754.png)

### 3\. 没有虚拟网卡，点击操作，选择添加过时硬件

![](/images/posts/EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟/a827bea26c3e.png)

### 4\. 按照我图示进行操作：

![](/images/posts/EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟/2510af058839.png)

#### 点击下一页

![](/images/posts/EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟/50aaf84d6afa.png)

#### 选择第二个选项，点击下一页

![](/images/posts/EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟/b7f73bdcd8a8.png)

#### 拉到最下面，选择网络适配器，点击下一页

![](/images/posts/EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟/81318a753d92.png)

#### 厂商里面找到虚拟网卡厂商，如图所示，选择右边唯一的型号点击下一页。

![](/images/posts/EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟/9627d48958da.png)

#### 点击下一页进行安装，等待安装完成即可。

![](/images/posts/EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟/1e4f66c342c8.png)

#### 然后你就可以发现已经可以成功连接了！！！ 
