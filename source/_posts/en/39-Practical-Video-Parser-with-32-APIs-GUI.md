---
title: "39. Practical: Video Parser with 32 APIs and GUI"
date: 2023-03-04
updated: 2023-03-04
categories:
  - Python Web Scraping from Beginner to Pro
tags:
  - python
  - api
  - video-parsing
  - tkinter
cover: /images/posts/39.-实战：基于api接口实现视频解析播放（32接口，窗口/e1b865bac071.png
lang_pair:
  zh-CN: "39. 实战：基于api接口实现视频解析播放（32接口，窗口化操作，可导出exe，附源码）"
---

> This article is translated from my CSDN blog
> Original link: [39. 实战：基于api接口实现视频解析播放](https://blog.csdn.net/m0_59180666/article/details/129339111)
> 📊 8793 views | 👍 10 likes | 💬 8 comments | ⭐ 46 favorites

**Table of Contents**

Introduction

Objective

Approach

Code Implementation

- Required modules
- Import parsing website list
- Design UI interface
- Set window centering and loop

Complete Source Code

Results

Summary

---

### Introduction

This section, similar to the music search project, implements video parsing and playback using APIs, with a user UI interface. You can also export it as an exe using py2exe or similar tools.

This example provides 32 parsing interfaces - usually the first few work well!

---

### Objective

Input any video link, select a parsing interface in the UI window, click the parse button to automatically open the system default browser for playback.

---

### Approach

1. Import parsing website list and implement parsing process
2. Design UI interface
3. Set window centering and loop execution
4. Important notes

---

### Code Implementation

#### Required modules

```python
from urllib import parse
import tkinter.messagebox as msgbox
import tkinter as tk
import webbrowser
import re
```

#### Import parsing website list and implement parsing

The key technique here uses `locals()` to retrieve variable values based on variable name strings. For global variables, use `globals()` with the same syntax.

```python
def video_play(self):
    # Video parsing website addresses (32 different APIs)
    port_1 = 'https://parser1.example.com/?url='
    port_2 = 'https://parser2.example.com/?url='
    # ... more parsing APIs ...
    
    # Regex to validate URL
    if re.match(r'^https?:/{2}\w.+', self.url.get()):
        port_num = self.v.get()
        port_url_referer = locals()[f'port_{port_num}']
        ip = self.url.get()
        ip = parse.quote_plus(ip)
        webbrowser.open(port_url_referer + self.url.get())
    else:
        msgbox.showerror(title='Error', message='Invalid video URL!')
```

#### Design UI interface

Standard tkinter UI design with radio buttons for selecting parsing sources:

```python
def __init__(self, width=1280, height=720):
    self.w = width
    self.h = height
    self.title = 'Video Parser'
    self.root = tk.Tk(className=self.title)
    self.url = tk.StringVar()
    self.v = tk.IntVar()
    self.v.set(1)  # Default to first parser
```

#### Set window centering and loop

```python
def center(self):
    ws = self.root.winfo_screenwidth()
    hs = self.root.winfo_screenheight()
    x = int((ws / 2) - (self.w / 2))
    y = int((hs / 2) - (self.h / 2))
    self.root.geometry('{}x{}+{}+{}'.format(self.w, self.h, x, y))

def loop(self):
    self.root.resizable(False, False)
    self.center()
    self.root.mainloop()

if __name__ == '__main__':
    app = APP()
    app.loop()
```

---

### Results

The application provides a clean GUI where users can paste video URLs, select from 32 different parsing APIs, and click to open the parsed video in their default browser.

---

### Summary

This section implemented a video parser with GUI that supports 32 different parsing APIs. Users can input any video link and select their preferred parsing source. Remember: this tool is for educational purposes only!
