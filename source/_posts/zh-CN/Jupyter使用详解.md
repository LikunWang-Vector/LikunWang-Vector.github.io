---
title: "Jupyter使用详解"
date: 2023-01-26
updated: 2023-01-26
categories:
  - 环境配置小记
tags:
  - python
  - jupyter
csdn_views: 4697
csdn_likes: 8
csdn_comments: 3
csdn_favorites: 63
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128766922
cover: /images/posts/Jupyter使用详解/bf8e418b3876.png
lang_pair:
  en: "Jupyter Notebook Complete Guide"
---

> 本文迁移自CSDN博客
> 原文链接：[Jupyter使用详解](https://blog.csdn.net/m0_59180666/article/details/128766922)
> 📊 4697 阅读 | 👍 8 点赞 | 💬 3 评论 | ⭐ 63 收藏

## Jupyter使用详解

**本篇文章我们主要介绍Jupyter的使用与配置，本篇文章的主要内容如下：**

  1. 什么是Jupyter notebook
  2. Jupyter notebook的安装
  3. 使用Jupyter notebook

#### 什么是Jupyter notebook？

Jupyter Notebook是一个Web应用程序，允许您创建和共享包含实时代码，方程，可视化和说明文本的文档。通俗来讲，Jupyter Notebook是以网页的形式打开，可以在网页页面中**直接编写代码** 和**运行代码** ，代码的**运行结果** 也会直接在代码块下显示的程序。

![](/images/posts/Jupyter使用详解/bf8e418b3876.png)

如果大家使用过IPython就会知道，Ipython是一个加强版的交互式 Shell，使用IPython运行程序会比在terminal里运行更方便，界面更友好，功能也更强大，而Jupyter Notebook又比Ipython更加强大。

![](/images/posts/Jupyter使用详解/8f81dfb32090.png)

具体可以参看官方简介： [Jupyter Notebook官方介绍](https://link.zhihu.com/?target=https%3A//jupyter-notebook.readthedocs.io/en/stable/notebook.html "Jupyter Notebook官方介绍")

用途包括：数据清理和转换，数值模拟，统计建模，机器学习等等。

建议tips：对于新手而言，更应该注重的是对编程基本功的练习，多敲代码。而pycharm与vscode具有自动联想的功能，前期可能使用起来比较方便，但是对知识和代码的运用上欠佳。此时使用Jupyter notebook就是最好的选择。

简单介绍下组成：

  1. Jupyter是基于网页形式的、结合了编写说明文档、数学公式、交互计算和其他富媒体形式的工具等，基本常用的开发工具里面都包含了。
  2. Jupyter里面编写的内容都可以以文档形式输出，默认保存的后缀名为`.ipynb`的`JSON`格式文件，还可以导出为：HTML、PDF、MarkDown、Python等格式。

#### Jupyter notebook的安装

Jupyter notebook的安装可以分为两种：

  1. Python环境下安装（没有安装Anaconda只是安装了Python）
  2. Anaconda下安装

Python环境下安装

如果没有安装Python直接安装Jupyter notebook是不可以的，前提是要安装好Python，安装教程请参看：——————

如果安装好了Python3（注意必须是Python），保证**pip升级到最新版本** 。

> 注意：老版本的pip在安装Jupyter Notebook过程中或面临依赖项无法同步安装的问题。因此 **强烈建议** 先把pip升级到最新版本   
>  pip3 install --upgrade pip 

无论是Windows操作系统还是MacOS系统，打开终端（Windows下cmd打开的命令行窗口，MacOS直接打开终端）输入如下命令。

> pip install Jupyter notebook 

![](/images/posts/Jupyter使用详解/5d61e71d029d.png)

测试是否安装成功，在命令行窗口继续输入：**jupyter notebook**

![](/images/posts/Jupyter使用详解/ada5e2dfee5e.png)

可以发现Jupyter 的启动目录是在： C:\WINDOWS\system32下，所以创建的文档也是在这个目录下的。我们可以修改配置设置默认的存储路径（后面会讲）。

MacOS下安装也是类似的

![](/images/posts/Jupyter使用详解/f47ba9f7dd44.png)

启动测试

![](/images/posts/Jupyter使用详解/aadfc6654de3.png)

​Anaconda下安装

常规来说，安装了Anaconda发行版时已经自动为你安装了Jupyter Notebook的，但如果没有自动安装，那么就在终端（Linux或macOS的“终端”，Windows的“Anaconda Prompt”，以下均简称“终端”）中输入以下命令安装：

conda install jupyter notebook

安装完成之后，使用方式同上。下面介绍一下启动notebook的路径配置。

配置notebook的启动路径

如果你不想在Jupyter Notebook中编写的所有文档都直接保存启动目录下，则需要修改Jupyter Notebook的文件存放路径。可以按照如下步骤完成：

  1. 创建文件夹

  * Windows用户在想要存放Jupyter Notebook文件的**磁盘** 中**新建文件夹最好为该文件夹起个便于识别的名字；双击进入该文件夹，然后复制地址栏中的路径。
  * Linux/macOS用户在想要存放Jupyter Notebook文件的位置**创建目录** 并为目录命名，新建目录的命令为：`mkdir directory_name`；通过命令：`cd directory_name`进入目录，输入命令`pwd`查看目录的路径。

  * 配置文件路径  
便捷获取配置文件所在路径的命令：`jupyter notebook --generate-config`

![](/images/posts/Jupyter使用详解/02444b345470.png)

![](/images/posts/Jupyter使用详解/70c420c31bad.png)

​​Windows和Linux/macOS的配置文件所在路径和配置文件名如上图修改和保存配置文件可以使用文档编辑工具或IDE打开“jupyter_notebook_config.py”文件并进行编辑，常用的文档 编辑工具和IDE有记事本（Windows系统）、Notepad++、vim、Sublime、Text、PyCharm等  
**Windows系统：**

Windows系统比较简单使用记事本打开即可。

![](/images/posts/Jupyter使用详解/ac4dad4e4245.png)

​修改文件

![](/images/posts/Jupyter使用详解/13f438627d67.png)

保存并测试jupyter

![](/images/posts/Jupyter使用详解/bdaa37e46400.png)

​ **MacOS系统**

使用vi进行编辑，也可使用Sublime等只不过配置文件所在路径.jupyter是隐藏路径不方便查看

![](/images/posts/Jupyter使用详解/3c7e3909c6a3.png)

​ 打开vi之后输入: / 查找内容

![](/images/posts/Jupyter使用详解/4c737f1dfe19.png)

找到内容之后，取消注释改成指定的目录,按**小写i** 进入编辑模式，底部出现“--INSERT--”说明成功进入编辑模式。在c.NotebookApp.notebook_dir=' 添加步骤1复制的路径 '

![](/images/posts/Jupyter使用详解/8fc246cdd413.png)

先按`esc`键，从编辑模式退出，回到命令模式。再用**英文半角** 直接输入`:wq`(注意：:冒号一定要有且是**英文半角**)，回车即成功保存且退出了配置文件。

![](/images/posts/Jupyter使用详解/94fc506c2f9e.png)

在终端输入jupyter notebook验证一下。

![](/images/posts/Jupyter使用详解/56620a2c14a4.png)

​使用Jupyter notebook

基本使用

启动jupyter notebook成功之后是这样的，Files页面是用于管理和创建文件相关的类目,可以在右侧的New下拉菜单中选择创建Python文件

![](/images/posts/Jupyter使用详解/847d409527f0.png)

​

![](/images/posts/Jupyter使用详解/0927d87461e2.png)

​在Jupyter中创建的文件默认扩展名是: .ipynb,可以新建Python3文件或者打开原来创建的文件,打开之后如下

![](/images/posts/Jupyter使用详解/759e35714867.png)

上图基本说明了新建文档的基本结构，特别说明的是“单元格状态”，有代码，Markdown，原生NBconvert，标题。最常用的是前两个，分别是代码状态和Markdown状态。

一般新建的文档都会以Untitled+数字进行命名，比如Untitled1、Untitled2....,可以通过点击左上方的名字进行重命名。

![](/images/posts/Jupyter使用详解/ebec6ae78d44.png)

在菜单File中可以进行新建、打开、重命名、保存、设置保存点、下载文件等操作。

![](/images/posts/Jupyter使用详解/e82127a56bac.png)

其中Downloads as，通常是将当前文件进行其他格式保存的时候选择，可以存储为pdf、md、py等格式

![](/images/posts/Jupyter使用详解/b6612f918b65.png)

​ 默认juypter可以通过tab键进行代码的提示，如果想使用Pycharm一样的自动提示，可以添加代码自动补全的扩展。

代码自动补全扩展

  1. 首先安装扩展库  
pip install jupyter_contrib_nbextensions  
jupyter contrib nbextensions install --user  
pip install jupyter_nbextensions_configurator  

  2. 安装完成后，重新启动Jupyter notebook

![](/images/posts/Jupyter使用详解/0400d69c130f.png)

  1. 点开Nbextensions选项，并勾选 Hinterland
  2. 测试使用

![](/images/posts/Jupyter使用详解/76ff270fc082.png)

  
主题扩展

第一步，安装：

> pip install jupyterthemes 

在安装过程中我报错了，报错信息如下

![](/images/posts/Jupyter使用详解/51a25b5f0308.png)

​ 仔细观察后是安装matplotlib的时候报错的，于是去[https://www.lfd.uci.edu/~gohlke/pythonlibs/#matplotlib](https://link.zhihu.com/?target=https%3A//www.lfd.uci.edu/~gohlke/pythonlibs/%23matplotlib "https://www.lfd.uci.edu/~gohlke/pythonlibs/#matplotlib")下载了matplotlib的whl文件进行本地安装。

![](/images/posts/Jupyter使用详解/cd09eee8f857.png)

​ 再次执行pip install jupyterthemes就没有错误了。也有直接选择下载安装 Microsoft Visual C++ Build Tools（网址：[Microsoft C++ Build Tools - Visual Studio](https://link.zhihu.com/?target=https%3A//visualstudio.microsoft.com/zh-hant/visual-cpp-build-tools/ "Microsoft C++ Build Tools - Visual Studio")），也可以解决问题。

、第二步，加载可用主题列表：

> jt -l 

可以使用的主题如图：

![](/images/posts/Jupyter使用详解/ee1214e624f4.png)

​ 第三步，选择你想要的主题：

> #选择一种喜欢的主题 ，参数有：-t 主题 -f(字体) -fs(字体大小) -cellw(占屏比或宽度) -ofs(输出段的字号) -T(显示工具栏) -T(显示自己主机名)   
>  jt -t <name of the theme>   
>  如： jt -t onedork -f fira -fs 13 -cellw 90% -ofs 11 -dfs 11 -T -T   
>  #恢复默认主题   
>  jt -r 

注意：每次换主题的时候都要重新加载Jupyter，才能看到主题变化

![](/images/posts/Jupyter使用详解/fa60049e4f5c.png)

​

![](/images/posts/Jupyter使用详解/57ce932cf105.png)

​ 快捷键

常用的快捷键是：

  * Ctrl + Enter: 执行单元格代码
  * Shift + Enter: 执行单元格代码并且移动到下一个单元格
  * Alt + Enter: 执行单元格代码，新建并移动到下一个单元格

这几个快捷键都是非常常用的。

历史输入和输出变量

当你写的单元格多了，肯定会注意到，IPython 中每一次的输入输出都有序号。你可以通过一下方法访问这些输入和输出：

  * _：访问上一次输出
  * __：访问上上一次输出
  * _X：访问历史 X 行输出
  * _iX：访问历史 X 行输入

其中小写字母 “i”，代表 “in”。

魔术命令

在 IPython 的会话环境中，所有文件都可以通过 %run 命令来当做脚本执行，并且文件中的变量也会随即导入当前命名空间。

即对于一个模块文件，你对他使用 %run 命令的效果和 from module import * 相同

这种以 % 开头的命令在 IPython 中被称为魔术命令，用于加强 shell 的功能。

常用的魔术命令有：

![](/images/posts/Jupyter使用详解/76b2af2fe8d6.png)

对魔术命令不熟悉的话可以通过 %magic 查看详细文档；对某一个命令不熟悉的话，可以通过 %cmd? 内省机制查看特定文档
