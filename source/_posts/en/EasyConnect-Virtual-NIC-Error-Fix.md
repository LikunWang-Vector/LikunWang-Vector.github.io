---
title: "EasyConnect Login Error: Failed to Start Virtual NIC - Solution"
date: 2023-04-13
updated: 2023-04-13
categories:
  - Debug Notes
tags:
  - server
  - network
  - EasyConnect
cover: /images/posts/EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟/3d6debcafc5a.png
lang_pair:
  zh-CN: "EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟网卡已经安装在系统上并处于启用状态，然后再重新登录解决此问题。"
---

## Problem Scenario

When using EasyConnect to connect to campus VPN, the following error appeared: "Failed to start virtual NIC. Please ensure the virtual NIC is installed and enabled on the system, then log in again."

## Problem Description

Unable to start virtual NIC / Virtual NIC not installed

## Cause Analysis

Initially thought it was an EasyConnect installation issue since it auto-updated twice after installation. Turns out the computer was missing the virtual NIC driver.

## Solution

### 1. Open Device Manager

Search for "Device Manager" and open it, or go to This PC → (top) Computer → Properties → Device Manager

![](/images/posts/EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟/3d6debcafc5a.png)

![](/images/posts/EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟/82f75ac6a45b.png)

### 2. Check Network Adapters

In Device Manager, find Network Adapters and double-click to check if virtual NIC exists.

![](/images/posts/EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟/be5e59291754.png)

### 3. Add Legacy Hardware

If no virtual NIC exists, click Action → Add legacy hardware

![](/images/posts/EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟/a827bea26c3e.png)

### 4. Follow These Steps

![](/images/posts/EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟/2510af058839.png)

Click Next

![](/images/posts/EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟/50aaf84d6afa.png)

Select the second option, click Next

![](/images/posts/EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟/b7f73bdcd8a8.png)

Scroll to the bottom, select Network adapters, click Next

![](/images/posts/EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟/81318a753d92.png)

Find the virtual NIC manufacturer in the list, select the only model on the right, click Next

![](/images/posts/EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟/9627d48958da.png)

Click Next to install, wait for completion

![](/images/posts/EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟/1e4f66c342c8.png)

Now you can successfully connect!
