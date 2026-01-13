---
title: "Fixing nes_py pip Installation Error on Windows"
date: 2023-01-27
updated: 2023-01-27
categories:
  - Debug Notes
tags:
  - pip
  - python
  - programming
  - nes_py
cover: /images/posts/解决nes_py在pip安装报错的问题/b86ced89d568.png
lang_pair:
  zh-CN: "解决nes_py在pip安装报错的问题"
---

## Project Scenario

While following a YouTube tutorial to implement reinforcement learning for Super Mario Bros, I encountered persistent errors when installing nes_py via pip in an Anaconda3 virtual environment.

## Problem Description

The error message indicates:
- Failed to build wheel for nes-py
- Microsoft Visual C++ 14.0 or greater is required

```
error: Microsoft Visual C++ 14.0 or greater is required. 
Get it with "Microsoft C++ Build Tools": 
https://visualstudio.microsoft.com/visual-cpp-build-tools/
```

## Cause Analysis

The error message clearly states: "Microsoft Visual C++ 14.0 or greater is required."

I had previously removed Visual Studio to free up C drive space since I was focusing on Python development. This removed the necessary MSVC components.

## Solution

Download the official Visual Studio Build Tools:

[Download VS Build Tools](https://download.visualstudio.microsoft.com/download/pr/0502e0d3-64a5-4bb8-b049-6bcbea5ed247/d7293c5775ad824c05ee99d071d5262da3e7653d39f3ba8a28fb2917af7c041a/vs_BuildTools.exe)

After downloading, run VS Installer. This time, change the installation path to avoid the C drive. Create a folder like `D:\Workspace` and set the paths there.

![](/images/posts/解决nes_py在pip安装报错的问题/b86ced89d568.png)

**Important: Make sure to check "Desktop development with C++"**

![](/images/posts/解决nes_py在pip安装报错的问题/3f9f9f51baee.png)

## Result

After installing the dependencies, nes_py installs successfully!

![](/images/posts/解决nes_py在pip安装报错的问题/062cb0020d59.png)
