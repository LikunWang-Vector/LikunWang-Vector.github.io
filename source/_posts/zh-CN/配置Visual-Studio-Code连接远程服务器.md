---
title: "配置Visual Studio Code连接远程服务器"
date: 2023-05-08
updated: 2023-05-08
categories:
  - 环境配置小记
tags:
  - 服务器
  - vscode
  - windows
  - ssh
  - 远程
csdn_views: 5635
csdn_likes: 2
csdn_comments: 0
csdn_favorites: 16
csdn_url: https://blog.csdn.net/m0_59180666/article/details/130564361
cover: /images/posts/配置Visual-Studio-Code连接远程服务器/c620e8b62351.png
lang_pair:
  en: "Configure Visual Studio Code to Connect to Remote Server"
---

> 本文迁移自CSDN博客
> 原文链接：[配置Visual Studio Code连接远程服务器](https://blog.csdn.net/m0_59180666/article/details/130564361)
> 📊 5635 阅读 | 👍 2 点赞 | 💬 0 评论 | ⭐ 16 收藏

**目录**

一、Windows用户需要先配置好本地的Remote SSH相关服务

二、打开VS Code，在扩展中搜索"Remote - SSH"并安装​编辑

三、详细操作

四、在出现的config配置文件中写入以下信息

五、点击VSCode界面最左侧的远程资源管理器

六、输入密码，连接成功

* * *

### 一、Windows用户需要先配置好本地的Remote SSH相关服务

### 二、打开VS Code，在扩展中搜索"Remote - SSH"并安装  
![](/images/posts/配置Visual-Studio-Code连接远程服务器/c620e8b62351.png)

### 三、详细操作

Ctrl+Shift+P呼出控制面板搜索remote ssh，点击第一个"Connect to Host"

![](/images/posts/配置Visual-Studio-Code连接远程服务器/7b7dfc4b1270.png)

在弹出的面板中选择最下方的"Configure SSH Hosts…"

![](/images/posts/配置Visual-Studio-Code连接远程服务器/35b1fa9dceee.png)

点第一个"C:\Users…"

![](/images/posts/配置Visual-Studio-Code连接远程服务器/81dd3ccb157e.png)

### 四、在出现的config配置文件中写入以下信息

```bash Host Jumper // 跳板机名称，可随便取 HostName xx.xxx.xx.xxx // 跳板机主机名 Port xx // 跳板机端口号 User xxxx // 跳板机登录用户名 Host Target // 目标服务器名称，可随便取 HostName xx.xxx.xxx.xxx // 目标服务器主机名 User xxxxxx // 目标服务器用户名 ProxyJump Jumper ``` 

写完后记得**保存** 。

### 五、点击VSCode界面最左侧的远程资源管理器

配置完成后会会出现曾经配置过得各个服务器名。

![](/images/posts/配置Visual-Studio-Code连接远程服务器/e92e23e2e696.png)

在这里，我们直接右键点击"Target"，此处我起的名字是Cuda。

然后随便选择在当前窗口连接或者是在新窗口内连接。​​​​​​​![](/images/posts/配置Visual-Studio-Code连接远程服务器/014bd1ff83cf.png)

### 六、输入密码，连接成功

上一步完成后，目标服务器会让你输入密码。输入密码后，第一次尝试连接，目标服务器会在它的本地安装./vscode-server，可能耗时较长，请耐心等待（确保你要连接的服务器可以联网下载东西）。等待结束后，基本上就算成功连接了。

**配置的好处：**

在VSCode左侧的资源管理器中，我们可以选择进入服务器的某个文件夹下，不过要再次输入密码。VSCode的好处就在于它实时地可视化了Linux文件夹的层级结构和各个文件，一目了然，而且还支持手动选择去删除、移动、复制粘贴剪切文件，比命令行用起来舒服一点（对于我们这种只是用服务器跑实验的人），而且如果一个文件夹中有上万个数据，在vscode中也是可以直接连带文件夹一起删除的。
