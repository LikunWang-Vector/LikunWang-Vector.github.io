---
title: "40. Practical: Music Parser with Tkinter GUI"
date: 2023-03-08
updated: 2023-03-08
categories:
  - Python Web Scraping from Beginner to Pro
tags:
  - ui
  - data-analysis
  - tkinter
  - python
cover: /images/posts/40.-实战：基于tkinter实现用户UI界面——对34小/9af7a7c56491.png
lang_pair:
  zh-CN: "40. 实战：基于tkinter实现用户UI界面——对34小节的VIP音乐解析系统的全面升级（附源码）"
---

> This article is translated from my CSDN blog
> Original link: [40. 实战：基于tkinter实现用户UI界面](https://blog.csdn.net/m0_59180666/article/details/129406958)
> 📊 1399 views | 👍 5 likes | 💬 8 comments | ⭐ 20 favorites

**Table of Contents**

Introduction

Objective

Approach

Code Implementation

1. Design main UI interface
2. Encapsulate core song parsing code
3. Download music to local storage
4. Center window and wait for events

Complete Source Code

Results

Summary

---

### Introduction

This section upgrades the previous music search project by adding a user UI interface. You can export it as an exe using pyinstaller for permanent use.

---

### Objective

Implement a music parser system that can search for songs by keyword, with a designed user interface for intuitive interaction, downloading to a local Download folder.

---

### Approach

Use tkinter to design the UI interface and encapsulate components. The core functionality remains the same as the previous music search project.

1. Design main UI interface
2. Encapsulate core song parsing code
3. Download music to local storage
4. Center window, disable resizing, wait for close/exit command

---

### Code Implementation

**Import packages:**

```python
import os
import tkinter as tk
import webbrowser
import requests
import tkinter.messagebox as mes_box
from tkinter import ttk
from retrying import retry
```

#### 1. Design main UI interface

```python
def __init__(self, weight=1000, height=600):
    self.ui_weight = weight
    self.ui_height = height
    self.title = "Music Parser"
    self.ui_root = tk.Tk(className=self.title)
    self.ui_url = tk.StringVar()
    self.show_result = None
    self.song_num = None
    self.response_data = None
```

The UI includes:
- Radio buttons for selecting music source
- Search input field
- Results table (Treeview) showing song number, artist, title, album
- Download button

#### 2. Encapsulate core song parsing code

```python
@retry(stop_max_attempt_number=5)
def get_music(self):
    # Clear existing table data
    for item in self.show_result.get_children():
        self.show_result.delete(item)
    
    search_input = self.ui_url.get()
    if len(search_input) > 0:
        # Make API request and populate table
        response_data = requests.get(search_url, params=search_data, headers=headers).json()
        songs_data = response_data['data']['list']
        for i in range(len(songs_data)):
            self.show_result.insert('', i, values=(
                i + 1, 
                songs_data[i]['artist'], 
                songs_data[i]['name'], 
                songs_data[i]['album']
            ))
```

#### 3. Download music to local storage

```python
def download_music(self):
    if not os.path.exists('./Download'):
        os.mkdir("./Download/")
    
    if self.song_num is not None:
        song_name = self.song_name + '--' + self.song_author + ".mp3"
        save_path = os.path.join('./Download/{}'.format(song_name))
        resp = requests.get(self.song_url)
        with open(save_path, 'wb') as file:
            file.write(resp.content)
        mes_box.showinfo(title='Success', message=f'Song saved to {save_path}')
```

#### 4. Center window and wait for events

```python
def ui_center(self):
    ws = self.ui_root.winfo_screenwidth()
    hs = self.ui_root.winfo_screenheight()
    x = int((ws / 2) - (self.ui_weight / 2))
    y = int((hs / 2) - (self.ui_height / 2))
    self.ui_root.geometry('{}x{}+{}+{}'.format(self.ui_weight, self.ui_height, x, y))

def loop(self):
    self.ui_root.resizable(False, False)
    self.ui_center()
    self.set_ui()
    self.ui_root.mainloop()

if __name__ == '__main__':
    app = SetUI()
    app.loop()
```

---

### Results

The application displays a clean interface where users can:
- Select music source (multiple platforms supported)
- Search by keyword
- View results in a table format
- Click to select a song
- Download selected song to local folder

---

### Summary

This section implemented a music parser system with a tkinter GUI. Users can search for songs by keyword, view results in a table, and download selected songs locally. The application can be packaged as an executable for easy distribution.
