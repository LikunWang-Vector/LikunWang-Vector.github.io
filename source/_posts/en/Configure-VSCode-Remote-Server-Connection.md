---
title: "Configure Visual Studio Code to Connect to Remote Server"
date: 2023-05-08
updated: 2023-05-08
categories:
  - Environment Setup
tags:
  - server
  - vscode
  - windows
  - ssh
  - remote
cover: /images/posts/配置Visual-Studio-Code连接远程服务器/c620e8b62351.png
lang_pair:
  zh-CN: "配置Visual Studio Code连接远程服务器"
---

## Step 1: Configure Local Remote SSH Service (Windows Users)

Windows users need to first configure the local Remote SSH related services.

## Step 2: Install Remote - SSH Extension

Open VS Code, search for "Remote - SSH" in extensions and install it.

![](/images/posts/配置Visual-Studio-Code连接远程服务器/c620e8b62351.png)

## Step 3: Configure SSH Host

Press `Ctrl+Shift+P` to open the command palette, search for "remote ssh", and click the first option "Connect to Host".

![](/images/posts/配置Visual-Studio-Code连接远程服务器/7b7dfc4b1270.png)

In the popup panel, select "Configure SSH Hosts..." at the bottom.

![](/images/posts/配置Visual-Studio-Code连接远程服务器/35b1fa9dceee.png)

Click the first "C:\Users..." option.

![](/images/posts/配置Visual-Studio-Code连接远程服务器/81dd3ccb157e.png)

## Step 4: Edit Config File

In the config file that appears, write the following information:

```bash
Host Jumper                    # Jump server name, can be any name
    HostName xx.xxx.xx.xxx     # Jump server hostname
    Port xx                    # Jump server port
    User xxxx                  # Jump server login username

Host Target                    # Target server name, can be any name
    HostName xx.xxx.xxx.xxx    # Target server hostname
    User xxxxxx                # Target server username
    ProxyJump Jumper
```

Remember to **save** after writing.

## Step 5: Connect via Remote Explorer

Click the Remote Explorer on the left side of VSCode interface.

After configuration, all previously configured server names will appear.

![](/images/posts/配置Visual-Studio-Code连接远程服务器/e92e23e2e696.png)

Right-click on "Target" (in my case, I named it Cuda).

Then choose to connect in current window or new window.

![](/images/posts/配置Visual-Studio-Code连接远程服务器/014bd1ff83cf.png)

## Step 6: Enter Password and Connect

After the previous step, the target server will ask for your password. After entering the password, on first connection, the target server will install ./vscode-server locally, which may take some time. Please be patient (make sure the server you're connecting to has internet access). After waiting, you should be successfully connected.

## Benefits of This Configuration

In VSCode's Explorer on the left side, you can choose to enter any folder on the server (though you'll need to enter the password again). The advantage of VSCode is that it visualizes the Linux folder hierarchy and files in real-time, making everything clear at a glance. It also supports manual selection to delete, move, copy, cut, and paste files, which is more comfortable than command line (for those of us who just use servers to run experiments). Even if a folder contains tens of thousands of files, you can delete the entire folder directly in VSCode.
