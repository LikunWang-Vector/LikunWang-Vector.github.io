---
title: "py文件如何打包成exe？如何压缩文件大小？"
date: 2023-11-13
updated: 2023-11-13
categories:
  - 各种Debug小记
tags:
  - python
  - linux
  - 开发语言
  - pyinstaller
  - exe
csdn_views: 550
csdn_likes: 4
csdn_comments: 0
csdn_favorites: 1
csdn_url: https://blog.csdn.net/m0_59180666/article/details/134376078
lang_pair:
  en: "How to Package Python Files to EXE and Reduce File Size"
---

> 本文迁移自CSDN博客
> 原文链接：[py文件如何打包成exe？如何压缩文件大小？](https://blog.csdn.net/m0_59180666/article/details/134376078)
> 📊 550 阅读 | 👍 4 点赞 | 💬 0 评论 | ⭐ 1 收藏

#### 打包

要将 Python 文件打包成可执行文件，您可以使用 **PyInstaller** 这个工具。以下是具体步骤：

  1. 首先，确保您已经安装了 **PyInstaller** 。如果没有安装，可以使用以下命令安装：

``` pip install pyinstaller ``` 
  2. 进入您的 Python 程序所在的目录，然后运行以下命令：

``` pyinstaller yourprogram.py ``` 

这将在一个名为 `dist` 的子目录中生成一个可执行文件。如果您希望生成只包含一个单独可执行文件的捆绑包，可以使用 `--onefile` 参数：

``` pyinstaller --onefile yourprogram.py ``` 

这样，您就会得到一个独立的可执行文件，用户无需安装 Python 或其他依赖即可运行您的程序。

  3. 如果您的程序需要接收用户传递的参数，您可以在代码中使用以下方法之一来获取这些参数：

     * 使用 `input()` 函数从控制台读取输入。
     * 使用配置文件来存储参数。
     * 使用默认参数。

请根据您的需求选择适合您的方法。现在您可以尝试使用 **PyInstaller** 将您的 Python 文件打包成可执行文件了！🚀

#### 压缩

当然，当您使用 **PyInstaller** 将 Python 文件打包成可执行文件时，确实会生成一个相对较大的文件。不过，您可以采取一些措施来减小文件大小：

  1. **虚拟环境** ：在构建之前，创建一个独立的虚拟环境，只安装您脚本所需的包。这样，您可以避免将不必要的包打包到可执行文件中。以下是具体步骤：

     * 创建虚拟环境：

``` python -m venv build_env ``` 
     * 激活虚拟环境：

       * Windows：

``` cd build_env build_env\Scripts\Activate ``` 
       * Linux 或 macOS：

``` source build_env/bin/activate ``` 
     * 安装所需的包（包括 PyInstaller）：

``` pip install pyinstaller ``` 
     * 构建可执行文件：

``` pyinstaller --onefile yourprogram.py ``` 

[这将生成一个更小且更快的可执行文件，用户无需安装其他包即可运行您的程序](https://stackoverflow.com/questions/44681356/reduce-pyinstaller-executable-size "这将生成一个更小且更快的可执行文件，用户无需安装其他包即可运行您的程序")[1](https://stackoverflow.com/questions/44681356/reduce-pyinstaller-executable-size "1")[2](https://stackoverflow.com/questions/71102062/how-to-make-exe-file-smaller-and-faster-with-pyinstaller-or-any-other-tool "2").

  2. **排除不必要的库** ：您可以尝试排除一些不影响功能的库，以减小文件大小。但请注意，排除某些库可能会影响程序的功能。

  3. [压缩：使用工具如 UPX 来压缩可执行文件。这将进一步减小文件大小](https://stackoverflow.com/questions/47692213/reducing-size-of-pyinstaller-exe "压缩：使用工具如 UPX 来压缩可执行文件。这将进一步减小文件大小")[3](https://stackoverflow.com/questions/47692213/reducing-size-of-pyinstaller-exe "3").

请根据您的需求选择适合您的方法。如果您需要保留参数传递功能，仍然可以在可执行文件中接收用户传递的参数。🚀
