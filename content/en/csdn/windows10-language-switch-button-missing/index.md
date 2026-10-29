---
type: post
csdn: true
title: "Windows 10 Language Switch Button Missing? One Simple Fix"
date: "2023-05-15"
lastmod: "2023-05-15"
authors:
  - admin
tags:
  - "windows"
  - "bug"
  - "debug"
  - "input-method"
  - "language-bar"
  - "CSDN"
categories:
  - "Debug Notes"
summary: "While playing GTA V Online, I accidentally pressed the [T] key, which triggered the Microsoft Chinese input method. The fullscreen game switched to windowed mode. After canceling C"
image:
  filename: "covers/csdn-tools.png"
  caption: "CSDN Archive · TOOLS · DEBUG"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/130675793"
csdn_views: 5177
csdn_likes: 1
csdn_comments: 0
csdn_favorites: 1
---

> This article was migrated from my [CSDN blog](https://blog.csdn.net/m0_59180666).
> Original: [Windows 10 Language Switch Button Missing? One Simple Fix](https://blog.csdn.net/m0_59180666/article/details/130675793)
> 📊 5177 views | 👍 1 likes | 💬 0 comments | ⭐ 1 favorites

## Problem Scenario

While playing GTA V Online, I accidentally pressed the [T] key, which triggered the Microsoft Chinese input method. The fullscreen game switched to windowed mode. After canceling Chinese input and switching back to fullscreen, I exited the game and found I couldn't type in Chinese anymore - the language switch button in the taskbar had disappeared.

![Language switch button](/images/posts/Windows10中英文切换按钮消失？一招解决/f4a4db9a2f38.png)

While I'm not sure if GTA V was the culprit, this definitely triggered a Windows 10 bug. Here's how to fix it.

## Problem Description

Language switch button disappeared, unable to input Chinese content

## Cause Analysis

Switching between fullscreen and windowed mode caused the taskbar length to fluctuate, which glitched out the language bar.

## Solution

### 1. Open Settings, Select Time & Language

![](/images/posts/Windows10中英文切换按钮消失？一招解决/aa925626334a.png)

### 2. Enter Date & Time Settings

![](/images/posts/Windows10中英文切换按钮消失？一招解决/4535038ef0da.png)

### 3. Go to Advanced Keyboard Settings

![](/images/posts/Windows10中英文切换按钮消失？一招解决/b29f0c3aefac.png)

### 4. Check This Checkbox - Problem Solved

![](/images/posts/Windows10中英文切换按钮消失？一招解决/ac28bb8da3c5.png)

Check "Use the desktop language bar when it's available" to restore the language switching functionality.
