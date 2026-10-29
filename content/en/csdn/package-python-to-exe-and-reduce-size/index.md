---
type: post
csdn: true
title: "How to Package Python Files to EXE and Reduce File Size"
date: "2023-11-13"
lastmod: "2023-11-13"
authors:
  - admin
tags:
  - "python"
  - "linux"
  - "programming"
  - "pyinstaller"
  - "exe"
  - "CSDN"
categories:
  - "Debug Notes"
summary: "To package Python files into executable files, you can use PyInstaller. Here are the steps:"
image:
  filename: "covers/csdn-ai.png"
  caption: "CSDN Archive · AI · DATA"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/134376078"
csdn_views: 550
csdn_likes: 4
csdn_comments: 0
csdn_favorites: 1
---

> This article was migrated from my [CSDN blog](https://blog.csdn.net/m0_59180666).
> Original: [How to Package Python Files to EXE and Reduce File Size](https://blog.csdn.net/m0_59180666/article/details/134376078)
> 📊 550 views | 👍 4 likes | 💬 0 comments | ⭐ 1 favorites

## Packaging

To package Python files into executable files, you can use **PyInstaller**. Here are the steps:

1. First, make sure you have **PyInstaller** installed. If not, install it with:

```bash
pip install pyinstaller
```

2. Navigate to your Python program's directory and run:

```bash
pyinstaller yourprogram.py
```

This will generate an executable file in a subdirectory called `dist`. If you want to generate a bundle containing only a single executable file, use the `--onefile` parameter:

```bash
pyinstaller --onefile yourprogram.py
```

This way, you'll get a standalone executable file that users can run without installing Python or other dependencies.

3. If your program needs to receive user parameters, you can use one of these methods:
   - Use `input()` function to read input from console
   - Use configuration files to store parameters
   - Use default parameters

Choose the method that suits your needs. Now you can try using **PyInstaller** to package your Python files into executables! 🚀

## Reducing File Size

When using **PyInstaller** to package Python files, the generated file can be quite large. Here are some measures to reduce file size:

### 1. Virtual Environment

Before building, create an isolated virtual environment with only the packages your script needs. This avoids packaging unnecessary packages into the executable.

**Steps:**

Create virtual environment:
```bash
python -m venv build_env
```

Activate virtual environment:

Windows:
```bash
cd build_env
build_env\Scripts\Activate
```

Linux or macOS:
```bash
source build_env/bin/activate
```

Install required packages (including PyInstaller):
```bash
pip install pyinstaller
```

Build executable:
```bash
pyinstaller --onefile yourprogram.py
```

This will generate a smaller and faster executable that users can run without installing other packages.

### 2. Exclude Unnecessary Libraries

You can try excluding some libraries that don't affect functionality to reduce file size. However, note that excluding certain libraries may affect program functionality.

### 3. Compression

Use tools like UPX to compress the executable file. This will further reduce file size.

Choose the method that suits your needs. If you need to keep parameter passing functionality, you can still receive user-passed parameters in the executable. 🚀
