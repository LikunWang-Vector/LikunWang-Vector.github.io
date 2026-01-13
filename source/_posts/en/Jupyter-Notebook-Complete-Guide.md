---
title: "Jupyter Notebook Complete Guide"
date: 2023-01-26
updated: 2023-01-26
categories:
  - Environment Setup
tags:
  - python
  - jupyter
lang: en
cover: /images/posts/Jupyter使用详解/bf8e418b3876.png
lang_pair:
  zh-CN: "Jupyter使用详解"
---

> This article was migrated from CSDN blog
> Original link: [Jupyter使用详解](https://blog.csdn.net/m0_59180666/article/details/128766922)

## Jupyter Complete Guide

**This article mainly introduces the use and configuration of Jupyter. The main contents are:**

1. What is Jupyter Notebook
2. Installing Jupyter Notebook
3. Using Jupyter Notebook

### What is Jupyter Notebook?

Jupyter Notebook is a web application that allows you to create and share documents containing live code, equations, visualizations, and explanatory text. In simple terms, Jupyter Notebook opens as a webpage where you can **write code directly** and **run code**, and the **execution results** are displayed directly below the code blocks.

![](/images/posts/Jupyter使用详解/bf8e418b3876.png)

If you've used IPython, you'll know that IPython is an enhanced interactive Shell. Running programs with IPython is more convenient than in the terminal, with a friendlier interface and more powerful features. Jupyter Notebook is even more powerful than IPython.

![](/images/posts/Jupyter使用详解/8f81dfb32090.png)

For details, see the official introduction: [Jupyter Notebook Official Introduction](https://jupyter-notebook.readthedocs.io/en/stable/notebook.html)

Uses include: data cleaning and transformation, numerical simulation, statistical modeling, machine learning, and more.

Tips for beginners: For newcomers, it's more important to focus on practicing basic programming skills and writing more code. While PyCharm and VSCode have auto-completion features that are convenient early on, they're not ideal for learning and applying knowledge and code. Using Jupyter Notebook is the best choice at this stage.

Brief introduction to components:

1. Jupyter is a web-based tool that combines writing documentation, mathematical formulas, interactive computing, and other rich media forms - basically all commonly used development tools are included.
2. Content written in Jupyter can be output as documents. The default save format is `.ipynb` JSON format files, and can also be exported as: HTML, PDF, Markdown, Python, and other formats.

### Installing Jupyter Notebook

Jupyter Notebook installation can be divided into two types:

1. Installation in Python environment (only Python installed, no Anaconda)
2. Installation under Anaconda

**Python Environment Installation**

You cannot install Jupyter Notebook directly without Python installed first. The prerequisite is to have Python installed.

If you have Python3 installed (note: must be Python), make sure **pip is upgraded to the latest version**.

> Note: Older versions of pip may face issues with dependencies not being installed synchronously during Jupyter Notebook installation. Therefore, it is **strongly recommended** to upgrade pip to the latest version first:
> pip3 install --upgrade pip

Whether on Windows or MacOS, open the terminal (command line window opened by cmd on Windows, terminal directly on MacOS) and enter the following command:

> pip install jupyter notebook

![](/images/posts/Jupyter使用详解/5d61e71d029d.png)

To test if installation was successful, continue entering in the command line window: **jupyter notebook**

![](/images/posts/Jupyter使用详解/ada5e2dfee5e.png)

You can see that Jupyter's startup directory is at: C:\WINDOWS\system32, so created documents are also in this directory. We can modify the configuration to set the default storage path (explained later).

MacOS installation is similar.

![](/images/posts/Jupyter使用详解/f47ba9f7dd44.png)

Startup test:

![](/images/posts/Jupyter使用详解/aadfc6654de3.png)

**Anaconda Installation**

Normally, when you install the Anaconda distribution, Jupyter Notebook is automatically installed for you. But if it wasn't automatically installed, enter the following command in the terminal (Linux or macOS "Terminal", Windows "Anaconda Prompt", hereinafter referred to as "terminal"):

conda install jupyter notebook

After installation, usage is the same as above. Below is an introduction to configuring the notebook startup path.

### Configuring Notebook Startup Path

If you don't want all documents written in Jupyter Notebook to be saved directly in the startup directory, you need to modify Jupyter Notebook's file storage path. Follow these steps:

1. Create a folder

* Windows users: Create a new folder in the **disk** where you want to store Jupyter Notebook files. It's best to give the folder an easily identifiable name; double-click to enter the folder, then copy the path from the address bar.
* Linux/macOS users: **Create a directory** at the location where you want to store Jupyter Notebook files and name the directory. The command to create a new directory is: `mkdir directory_name`; enter the directory with: `cd directory_name`, and enter `pwd` to view the directory path.

2. Configure file path

Command to conveniently get the configuration file path: `jupyter notebook --generate-config`

![](/images/posts/Jupyter使用详解/02444b345470.png)

![](/images/posts/Jupyter使用详解/70c420c31bad.png)

The configuration file path and name for Windows and Linux/macOS are shown above. To modify and save the configuration file, you can use a document editing tool or IDE to open the "jupyter_notebook_config.py" file and edit it. Common document editing tools and IDEs include Notepad (Windows), Notepad++, vim, Sublime, Text, PyCharm, etc.

**Windows System:**

Windows is relatively simple - just open with Notepad.

![](/images/posts/Jupyter使用详解/ac4dad4e4245.png)

Modify the file:

![](/images/posts/Jupyter使用详解/13f438627d67.png)

Save and test jupyter:

![](/images/posts/Jupyter使用详解/bdaa37e46400.png)

**MacOS System**

Use vi to edit. You can also use Sublime, but the configuration file path .jupyter is a hidden path that's inconvenient to view.

![](/images/posts/Jupyter使用详解/3c7e3909c6a3.png)

After opening vi, enter: / to search for content

![](/images/posts/Jupyter使用详解/4c737f1dfe19.png)

After finding the content, uncomment and change to the specified directory. Press **lowercase i** to enter edit mode. "--INSERT--" appearing at the bottom indicates successful entry into edit mode. Add the path copied in step 1 to c.NotebookApp.notebook_dir=' '

![](/images/posts/Jupyter使用详解/8fc246cdd413.png)

First press `esc` to exit edit mode and return to command mode. Then directly type `:wq` in **English half-width** (note: the colon must be present and in **English half-width**), press Enter to successfully save and exit the configuration file.

![](/images/posts/Jupyter使用详解/94fc506c2f9e.png)

Enter jupyter notebook in the terminal to verify.

![](/images/posts/Jupyter使用详解/56620a2c14a4.png)

### Using Jupyter Notebook

**Basic Usage**

After successfully starting jupyter notebook, it looks like this. The Files page is for managing and creating file-related categories. You can select to create a Python file from the New dropdown menu on the right.

![](/images/posts/Jupyter使用详解/847d409527f0.png)

![](/images/posts/Jupyter使用详解/0927d87461e2.png)

Files created in Jupyter have the default extension: .ipynb. You can create new Python3 files or open previously created files. After opening:

![](/images/posts/Jupyter使用详解/759e35714867.png)

The above image basically explains the basic structure of a new document. Special note on "cell state": there are Code, Markdown, Raw NBConvert, and Heading. The most commonly used are the first two: code state and Markdown state.

Generally, new documents are named with Untitled+number, such as Untitled1, Untitled2.... You can rename by clicking on the name in the upper left.

![](/images/posts/Jupyter使用详解/ebec6ae78d44.png)

In the File menu, you can create new, open, rename, save, set checkpoints, download files, and other operations.

![](/images/posts/Jupyter使用详解/e82127a56bac.png)

Download as is usually selected when saving the current file in other formats. It can be stored as pdf, md, py, and other formats.

![](/images/posts/Jupyter使用详解/b6612f918b65.png)

By default, Jupyter can use the tab key for code hints. If you want auto-completion like PyCharm, you can add a code auto-completion extension.

**Code Auto-Completion Extension**

1. First install the extension library:
```
pip install jupyter_contrib_nbextensions
jupyter contrib nbextensions install --user
pip install jupyter_nbextensions_configurator
```

2. After installation, restart Jupyter notebook

![](/images/posts/Jupyter使用详解/0400d69c130f.png)

3. Click on the Nbextensions option and check Hinterland
4. Test usage

![](/images/posts/Jupyter使用详解/76ff270fc082.png)

**Theme Extension**

Step 1, install:

> pip install jupyterthemes

Step 2, load available theme list:

> jt -l

Available themes are shown in the image:

![](/images/posts/Jupyter使用详解/ee1214e624f4.png)

Step 3, select your desired theme:

> #Select a theme you like, parameters: -t theme -f(font) -fs(font size) -cellw(screen ratio or width) -ofs(output font size) -T(show toolbar) -T(show hostname)
> jt -t <name of the theme>
> e.g.: jt -t onedork -f fira -fs 13 -cellw 90% -ofs 11 -dfs 11 -T -T
> #Restore default theme
> jt -r

Note: Every time you change themes, you need to reload Jupyter to see the theme change.

![](/images/posts/Jupyter使用详解/fa60049e4f5c.png)

![](/images/posts/Jupyter使用详解/57ce932cf105.png)

**Keyboard Shortcuts**

Common shortcuts are:

* Ctrl + Enter: Execute cell code
* Shift + Enter: Execute cell code and move to next cell
* Alt + Enter: Execute cell code, create new cell and move to it

These shortcuts are very commonly used.

**History Input and Output Variables**

When you have many cells, you'll notice that every input and output in IPython has a sequence number. You can access these inputs and outputs through the following methods:

* _: Access last output
* __: Access second-to-last output
* _X: Access output from line X in history
* _iX: Access input from line X in history

The lowercase letter "i" stands for "in".

**Magic Commands**

In the IPython session environment, all files can be executed as scripts through the %run command, and variables in the file will be imported into the current namespace.

For a module file, using the %run command has the same effect as from module import *

Commands starting with % in IPython are called magic commands, used to enhance shell functionality.

Common magic commands include:

![](/images/posts/Jupyter使用详解/76b2af2fe8d6.png)

If you're unfamiliar with magic commands, you can view detailed documentation through %magic; if you're unfamiliar with a specific command, you can view specific documentation through the %cmd? introspection mechanism.
