---
title: "解决nes_py在pip安装报错的问题"
date: 2023-01-27
updated: 2023-01-27
categories:
  - 各种Debug小记
tags:
  - pip
  - python
  - 开发语言
  - nes_py
csdn_views: 5555
csdn_likes: 16
csdn_comments: 11
csdn_favorites: 18
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128769672
cover: /images/posts/解决nes_py在pip安装报错的问题/b86ced89d568.png
lang_pair:
  en: "Fixing nes_py pip Installation Error on Windows"
---

> 本文迁移自CSDN博客
> 原文链接：[解决nes_py在pip安装报错的问题](https://blog.csdn.net/m0_59180666/article/details/128769672)
> 📊 5555 阅读 | 👍 16 点赞 | 💬 11 评论 | ⭐ 18 收藏

## 

**目录**

项目场景：

问题描述

原因分析：

解决方案：

解决结果：

* * *

## 项目场景：

想跟随油管某视频复现强化学习方法玩超级马里奥的过程，结果在在Anaconda3虚拟环境中用pip安装nes_py时一直报错，报错信息如下：

```bash Building wheel for nes-py (setup.py) ... error error: subprocess-exited-with-error × python setup.py bdist_wheel did not run successfully. │ exit code: 1 ╰─> [21 lines of output] running bdist_wheel running build running build_py creating build creating build\lib.win-amd64-cpython-37 creating build\lib.win-amd64-cpython-37\nes_py copying nes_py\nes_env.py -> build\lib.win-amd64-cpython-37\nes_py copying nes_py\\_image_viewer.py -> build\lib.win-amd64-cpython-37\nes_py copying nes_py\\_rom.py -> build\lib.win-amd64-cpython-37\nes_py copying nes_py\\__init__.py -> build\lib.win-amd64-cpython-37\nes_py creating build\lib.win-amd64-cpython-37\nes_py\app copying nes_py\app\cli.py -> build\lib.win-amd64-cpython-37\nes_py\app copying nes_py\app\play_human.py -> build\lib.win-amd64-cpython-37\nes_py\app copying nes_py\app\play_random.py -> build\lib.win-amd64-cpython-37\nes_py\app copying nes_py\app\\__init__.py -> build\lib.win-amd64-cpython-37\nes_py\app creating build\lib.win-amd64-cpython-37\nes_py\wrappers copying nes_py\wrappers\joypad_space.py -> build\lib.win-amd64-cpython-37\nes_py\wrappers copying nes_py\wrappers\\__init__.py -> build\lib.win-amd64-cpython-37\nes_py\wrappers running build_ext building 'nes_py.lib_nes_env' extension error: Microsoft Visual C++ 14.0 or greater is required. Get it with "Microsoft C++ Build Tools": https://visualstudio.microsoft.com/visual-cpp-build-tools/ [end of output] note: This error originates from a subprocess, and is likely not a problem with pip. ERROR: Failed building wheel for nes-py Running setup.py clean for nes-py Failed to build nes-py Installing collected packages: nes-py, gym_super_mario_bros Running setup.py install for nes-py ... error error: subprocess-exited-with-error × Running setup.py install for nes-py did not run successfully. │ exit code: 1 ╰─> [23 lines of output] running install D:\Anaconda3\envs\rlgame\lib\site-packages\setuptools\command\install.py:37: SetuptoolsDeprecationWarning: setup.py install is deprecated. Use build and pip and other standards-based tools. setuptools.SetuptoolsDeprecationWarning, running build running build_py creating build creating build\lib.win-amd64-cpython-37 creating build\lib.win-amd64-cpython-37\nes_py copying nes_py\nes_env.py -> build\lib.win-amd64-cpython-37\nes_py copying nes_py\\_image_viewer.py -> build\lib.win-amd64-cpython-37\nes_py copying nes_py\\_rom.py -> build\lib.win-amd64-cpython-37\nes_py copying nes_py\\__init__.py -> build\lib.win-amd64-cpython-37\nes_py creating build\lib.win-amd64-cpython-37\nes_py\app copying nes_py\app\cli.py -> build\lib.win-amd64-cpython-37\nes_py\app copying nes_py\app\play_human.py -> build\lib.win-amd64-cpython-37\nes_py\app copying nes_py\app\play_random.py -> build\lib.win-amd64-cpython-37\nes_py\app copying nes_py\app\\__init__.py -> build\lib.win-amd64-cpython-37\nes_py\app creating build\lib.win-amd64-cpython-37\nes_py\wrappers copying nes_py\wrappers\joypad_space.py -> build\lib.win-amd64-cpython-37\nes_py\wrappers copying nes_py\wrappers\\__init__.py -> build\lib.win-amd64-cpython-37\nes_py\wrappers running build_ext building 'nes_py.lib_nes_env' extension error: Microsoft Visual C++ 14.0 or greater is required. Get it with "Microsoft C++ Build Tools": https://visualstudio.microsoft.com/visual-cpp-build-tools/ [end of output] note: This error originates from a subprocess, and is likely not a problem with pip. error: legacy-install-failure × Encountered error while trying to install package. ╰─> nes-py note: This is an issue with the package mentioned above, not pip. hint: See above for output from the failure. ``` 

* * *

## 问题描述

```c 从上面的报错信息可以得知，我们的问题在于没有找到wheel，说明本地没有相关配置。而最后一行也告诉我们提示：不是pip的问题，而是上述提到的包（nes）的问题，所以看上面的报错信息找原因。 ``` 

* * *

## 原因分析：

> error: Microsoft Visual C++ 14.0 or greater is required. Get it with "Microsoft C++ Build Tools": https://visualstudio.microsoft.com/visual-cpp-build-tools/

发现上述一行报错信息：说明我们本地缺少msvc的组件。

原来是我前段时间为了给C盘瘦身，把VS给全部清理了，因为目前主要精力在Python上。

那这就好办了，去他给的官网下载就是了。

* * *

## 解决方案：

> 下载官网文件
> 
> <https://download.visualstudio.microsoft.com/download/pr/0502e0d3-64a5-4bb8-b049-6bcbea5ed247/d7293c5775ad824c05ee99d071d5262da3e7653d39f3ba8a28fb2917af7c041a/vs_BuildTools.exe>

下载完成以后是VS Installer，这次我们修改安装路径，不要放C盘了，我们在D盘新建文件夹叫Workspace，把其余路径原封不动搞进去

![](/images/posts/解决nes_py在pip安装报错的问题/b86ced89d568.png)

刚刚安装忘记截图了，总之就是这个路径，vs文件夹下还有个package文件夹，一共两个路径。

最后点击安装就完成了！ 

![](/images/posts/解决nes_py在pip安装报错的问题/3f9f9f51baee.png)

**注意一定要勾选C++桌面开发**

* * *

## 解决结果：

![](/images/posts/解决nes_py在pip安装报错的问题/062cb0020d59.png)

安装依赖以后成功安装 
