---
type: post
csdn: true
title: "39. 实战：基于api接口实现视频解析播放（32接口，窗口化操作，可导出exe，附源码）"
date: "2023-03-04"
lastmod: "2023-03-04"
authors:
  - admin
tags:
  - "python"
  - "api"
  - "视频解析"
  - "tkinter"
  - "CSDN"
categories:
  - "Python爬虫入门、进阶与实战"
summary: "本节将类似34\\. 实战：基于某api实现歌曲检索与下载（附完整源代码），也将基于api实现视频解析播放的功能，并且还实现了用户UI界面，随后大家也可以用py2exe等库导出exe来永久保存可执行文件。"
image:
  filename: "covers/csdn-python-crawler.png"
  caption: "CSDN Archive · PYTHON · CRAWLER"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/129339111"
csdn_views: 8793
csdn_likes: 10
csdn_comments: 8
csdn_favorites: 46
---

> 本文迁移自CSDN博客
> 原文链接：[39. 实战：基于api接口实现视频解析播放（32接口，窗口化操作，可导出exe，附源码）](https://blog.csdn.net/m0_59180666/article/details/129339111)
> 📊 8793 阅读 | 👍 10 点赞 | 💬 8 评论 | ⭐ 46 收藏


### 前言

本节将类似[34\. 实战：基于某api实现歌曲检索与下载（附完整源代码）](https://blog.csdn.net/m0_59180666/article/details/128812483 "34. 实战：基于某api实现歌曲检索与下载（附完整源代码）")，也将基于api实现视频解析播放的功能，并且还实现了用户UI界面，随后大家也可以用py2exe等库导出exe来永久保存可执行文件。

本例具有32个接口供大家解析，一般前面的就能够顺利解析出来了，看大家喜好~

* * *

### 目的

实现输入任意视频链接，在用户UI窗口选择解析接口，点击解析按钮自动跳转到系统默认浏览器进行播放。

* * *

### 思路

1\. 导入解析网站列表，实现解析过程

2\. 设计UI界面

3\. 设置窗口居中和循环执行

4\. 注意事项

* * *

### 代码实现

#### 需要导入的模块

```python
from urllib import parse
import tkinter.messagebox as msgbox
import tkinter as tk
import webbrowser
import re
```

#### 1\. 导入解析网站列表，实现解析过程

```python
    """
    函数说明:视频播放
    """

    def video_play(self):
        # 视频解析网站地址
        # port_1 = 'https://jx.618g.com/?url='
        port_1 = 'https://im1907.top/?jx='
        port_2 = 'https://jx.jsonplayer.com/player/?url='
        port_3 = 'https://jx.aidouer.net/?url='
        port_4 = 'https://jx.xmflv.com/?url='
        port_5 = 'https://okjx.cc/?url='
        port_6 = 'https://www.nxflv.com/?url='
        port_7 = 'https://www.yemu.xyz/?url='
        port_8 = 'https://jx.m3u8.tv/jiexi/?url='
        port_9 = 'https://jx.blbo.cc:4433/?url='
        port_10 = 'https://api.qianqi.net/vip/?url='
        port_11 = 'https://jx.nnxv.cn/tv.php?url='
        port_12 = 'https://bd.jx.cn/?url='
        port_13 = 'https://123.1dior.cn/?url='
        port_14 = 'https://www.ckplayer.vip/jiexi/?url='
        port_15 = 'https://www.ckmov.vip/api.php?url='
        port_16 = 'https://jx.playerjy.com/?url='
        port_17 = 'https://ckmov.ccyjjd.com/ckmov/?url='
        port_18 = 'https://www.ckmov.com/?url='
        port_19 = 'https://www.h8jx.com/jiexi.php?url='
        port_20 = 'https://svip.bljiex.cc/?v='
        port_21 = 'https://api.jiexi.la/?url='
        port_22 = 'https://jiexi.janan.net/jiexi/?url='
        port_23 = 'https://www.mtosz.com/erzi.php?url='
        port_24 = 'https://www.administratorw.com/video.php?url='
        port_25 = 'https://www.pangujiexi.cc/jiexi.php?url='
        port_26 = 'https://www.gai4.com/?url='
        port_27 = 'https://go.yh0523.cn/y.cy?url='
        port_28 = 'https://www.1717yun.com/jx/ty.php?url='
        port_29 = 'https://jx.4kdv.com/?url='
        port_30 = 'https://www.8090g.cn/?url='
        port_31 = 'https://jx.dj6u.com/?url='
        port_32 = 'https://jx.000180.top/jx/?url='

        # 正则表达是判定是否为合法链接
        if re.match(r'^https?:/{2}\w.+$', self.url.get()):
            port_num = self.v.get()
            port_url_referer = locals()[f'port_{port_num}']
            # 视频链接获取
            ip = self.url.get()
            # 视频链接加密
            ip = parse.quote_plus(ip)
            # 浏览器打开
            webbrowser.open(port_url_referer + self.url.get())

        else:
            msgbox.showerror(title='错误', message='视频链接地址无效，请重新输入！')
```

**这里用locals函数实现基于变量名称的字符串检索变量对应值的操作，还是值得一学的。如果是全局变量就要使用globals，用法是一样的。**

#### 2\. 设计UI界面

就常规设计一下，大同小异的，博主审美能力有限，就做的很粗糙了：

```python
    def __init__(self, width=1280, height=720):
        self.w = width
        self.h = height
        self.title = 'Vector的VIP解析助手'
        self.root = tk.Tk(className=self.title)
        # 定义button控件上的文字
        self.url = tk.StringVar()

        # 定义选择哪个播放源
        self.v = tk.IntVar()

        # 默认为1
        self.v.set(1)

        # Frame空间
        frame_1 = tk.Frame(self.root)
        frame_2 = tk.Frame(self.root)
        frame_3 = tk.Frame(self.root)

        # Menu菜单
        menu = tk.Menu(self.root)
        self.root.config(menu=menu)
        moviemenu = tk.Menu(menu, tearoff=0)
        menu.add_cascade(label='友情链接', menu=moviemenu)

        # 各大视频网站
        moviemenu.add_command(label='腾讯视频', command=lambda: webbrowser.open('http://v.qq.com/'))
        moviemenu.add_command(label='搜狐视频', command=lambda: webbrowser.open('http://tv.sohu.com/'))
        moviemenu.add_command(label='芒果TV', command=lambda: webbrowser.open('http://www.mgtv.com/'))
        moviemenu.add_command(label='爱奇艺', command=lambda: webbrowser.open('http://www.iqiyi.com/'))
        moviemenu.add_command(label='PPTV', command=lambda: webbrowser.open('http://www.bilibili.com/'))
        moviemenu.add_command(label='优酷', command=lambda: webbrowser.open('http://www.youku.com/'))
        moviemenu.add_command(label='乐视', command=lambda: webbrowser.open('http://www.le.com/'))
        moviemenu.add_command(label='土豆', command=lambda: webbrowser.open('http://www.tudou.com/'))
        moviemenu.add_command(label='A站', command=lambda: webbrowser.open('http://www.acfun.tv/'))
        moviemenu.add_command(label='B站', command=lambda: webbrowser.open('http://www.bilibili.com/'))

        # 控件内容设置
        group = tk.Label(frame_1, text='请选择一个视频解析方式：', padx=10, pady=10)
        tb1 = tk.Radiobutton(frame_1, text='纯净/B站', variable=self.v, value=1, width=10, height=3)
        tb2 = tk.Radiobutton(frame_1, text='综合/B站', variable=self.v, value=2, width=10, height=3)
        tb3 = tk.Radiobutton(frame_1, text='爱豆', variable=self.v, value=3, width=10, height=3)
        tb4 = tk.Radiobutton(frame_1, text='虾米', variable=self.v, value=4, width=10, height=3)
        tb5 = tk.Radiobutton(frame_1, text='OK解析', variable=self.v, value=5, width=10, height=3)
        tb6 = tk.Radiobutton(frame_1, text='诺讯', variable=self.v, value=6, width=10, height=3)
        tb7 = tk.Radiobutton(frame_1, text='夜幕', variable=self.v, value=7, width=10, height=3)
        tb8 = tk.Radiobutton(frame_1, text='M3U8.TV', variable=self.v, value=8, width=10, height=3)
        tb9 = tk.Radiobutton(frame_1, text='人人迷', variable=self.v, value=9, width=10, height=3)
        tb10 = tk.Radiobutton(frame_1, text='全民', variable=self.v, value=10, width=10, height=3)
        tb11 = tk.Radiobutton(frame_1, text='七哥', variable=self.v, value=11, width=10, height=3)
        tb12 = tk.Radiobutton(frame_1, text='冰豆', variable=self.v, value=12, width=10, height=3)
        tb13 = tk.Radiobutton(frame_1, text='迪奥', variable=self.v, value=13, width=10, height=3)
        tb14 = tk.Radiobutton(frame_1, text='CK', variable=self.v, value=14, width=10, height=3)
        tb15 = tk.Radiobutton(frame_1, text='ckmov', variable=self.v, value=15, width=10, height=3)
        tb16 = tk.Radiobutton(frame_1, text='playerjy/B站', variable=self.v, value=16, width=10, height=3)
        tb17 = tk.Radiobutton(frame_1, text='ccyjjd', variable=self.v, value=17, width=10, height=3)
        tb18 = tk.Radiobutton(frame_1, text='诺诺', variable=self.v, value=18, width=10, height=3)
        tb19 = tk.Radiobutton(frame_1, text='H8', variable=self.v, value=19, width=10, height=3)
        tb20 = tk.Radiobutton(frame_1, text='BL', variable=self.v, value=20, width=10, height=3)
        tb21 = tk.Radiobutton(frame_1, text='解析la', variable=self.v, value=21, width=10, height=3)
        tb22 = tk.Radiobutton(frame_1, text='MUTV', variable=self.v, value=22, width=10, height=3)
        tb23 = tk.Radiobutton(frame_1, text='MAO', variable=self.v, value=23, width=10, height=3)
        tb24 = tk.Radiobutton(frame_1, text='无名', variable=self.v, value=24, width=10, height=3)
        tb25 = tk.Radiobutton(frame_1, text='盘古', variable=self.v, value=25, width=10, height=3)
        tb26 = tk.Radiobutton(frame_1, text='盖世', variable=self.v, value=26, width=10, height=3)
        tb27 = tk.Radiobutton(frame_1, text='0523', variable=self.v, value=27, width=10, height=3)
        tb28 = tk.Radiobutton(frame_1, text='17云', variable=self.v, value=28, width=10, height=3)
        tb29 = tk.Radiobutton(frame_1, text='4K', variable=self.v, value=29, width=10, height=3)
        tb30 = tk.Radiobutton(frame_1, text='8090', variable=self.v, value=30, width=10, height=3)
        tb31 = tk.Radiobutton(frame_1, text='听乐', variable=self.v, value=31, width=10, height=3)
        tb32 = tk.Radiobutton(frame_1, text='180', variable=self.v, value=32, width=10, height=3)
        label1 = tk.Label(frame_2, text="请输入视频链接：")
        entry = tk.Entry(frame_2, textvariable=self.url, highlightcolor='Fuchsia', highlightthickness=1, width=35)
        label2 = tk.Label(frame_2, text=" ")
        play = tk.Button(frame_2, text="播放", font=('楷体', 12), fg='Purple', width=2, height=1, command=self.video_play)
        label3 = tk.Label(frame_2, text=" ")
        label_explain = tk.Label(frame_3, fg='red', font=('楷体', 18), text='\n注意：\nCSDN博主Vec_Kun版权所有\n此工具仅用于交流学习\n请勿用于任何商业用途！')
        label_warning = tk.Label(frame_3, fg='black', font=('楷体', 16), text='\n\n')

        # 控件布局
        frame_1.pack()
        frame_2.pack()
        frame_3.pack()
        group.grid(row=0, column=0)
        tb1.grid(row=0, column=1)
        tb2.grid(row=0, column=2)
        tb3.grid(row=0, column=3)
        tb4.grid(row=0, column=4)
        tb5.grid(row=1, column=1)
        tb6.grid(row=1, column=2)
        tb7.grid(row=1, column=3)
        tb8.grid(row=1, column=4)
        tb9.grid(row=2, column=1)
        tb10.grid(row=2, column=2)
        tb11.grid(row=2, column=3)
        tb12.grid(row=2, column=4)
        tb13.grid(row=3, column=1)
        tb14.grid(row=3, column=2)
        tb15.grid(row=3, column=3)
        tb16.grid(row=3, column=4)
        tb17.grid(row=4, column=1)
        tb18.grid(row=4, column=2)
        tb19.grid(row=4, column=3)
        tb20.grid(row=4, column=4)
        tb21.grid(row=5, column=1)
        tb22.grid(row=5, column=2)
        tb23.grid(row=5, column=3)
        tb24.grid(row=5, column=4)
        tb25.grid(row=6, column=1)
        tb26.grid(row=6, column=2)
        tb27.grid(row=6, column=3)
        tb28.grid(row=6, column=4)
        tb29.grid(row=7, column=1)
        tb30.grid(row=7, column=2)
        tb31.grid(row=7, column=3)
        tb32.grid(row=7, column=4)
        label1.grid(row=0, column=0)
        entry.grid(row=0, column=1)
        label2.grid(row=0, column=2)
        play.grid(row=0, column=3, ipadx=10, ipady=10)
        label3.grid(row=0, column=4)
        label_explain.grid(row=1, column=0)
        label_warning.grid(row=2, column=0)
```

#### 3\. 设置窗口居中和循环执行

```python
    """
    函数说明:tkinter窗口居中
    """

    def center(self):
        ws = self.root.winfo_screenwidth()
        hs = self.root.winfo_screenheight()
        x = int((ws / 2) - (self.w / 2))
        y = int((hs / 2) - (self.h / 2))
        self.root.geometry('{}x{}+{}+{}'.format(self.w, self.h, x, y))
```

```python
    """
    函数说明:loop等待用户事件
    """

    def loop(self):
        # 禁止修改窗口大小
        self.root.resizable(False, False)
        # 窗口居中
        self.center()
        self.root.mainloop()
```

最后在主函数运行就好了

```python
if __name__ == '__main__':
    app = APP()  # 实例化APP对象
    app.loop()  # loop等待用户事件
```

#### 4\. 注意事项

**此工具仅用于交流学习，请勿用于任何商业用途！！！**

**此工具仅用于交流学习，请勿用于任何商业用途！！！**

**此工具仅用于交流学习，请勿用于任何商业用途！！！**

* * *

### 完整源码

```python
# Created at UESTC
# Author: Vector Kun
# Time: 2023/1/30 11:26

# url解析
from urllib import parse
import tkinter.messagebox as msgbox
import tkinter as tk
import webbrowser
import re


class APP:
    def __init__(self, width=1280, height=720):
        self.w = width
        self.h = height
        self.title = 'Vector的VIP解析助手'
        self.root = tk.Tk(className=self.title)
        # 定义button控件上的文字
        self.url = tk.StringVar()

        # 定义选择哪个播放源
        self.v = tk.IntVar()

        # 默认为1
        self.v.set(1)

        # Frame空间
        frame_1 = tk.Frame(self.root)
        frame_2 = tk.Frame(self.root)
        frame_3 = tk.Frame(self.root)

        # Menu菜单
        menu = tk.Menu(self.root)
        self.root.config(menu=menu)
        moviemenu = tk.Menu(menu, tearoff=0)
        menu.add_cascade(label='友情链接', menu=moviemenu)

        # 各大视频网站
        moviemenu.add_command(label='腾讯视频', command=lambda: webbrowser.open('http://v.qq.com/'))
        moviemenu.add_command(label='搜狐视频', command=lambda: webbrowser.open('http://tv.sohu.com/'))
        moviemenu.add_command(label='芒果TV', command=lambda: webbrowser.open('http://www.mgtv.com/'))
        moviemenu.add_command(label='爱奇艺', command=lambda: webbrowser.open('http://www.iqiyi.com/'))
        moviemenu.add_command(label='PPTV', command=lambda: webbrowser.open('http://www.bilibili.com/'))
        moviemenu.add_command(label='优酷', command=lambda: webbrowser.open('http://www.youku.com/'))
        moviemenu.add_command(label='乐视', command=lambda: webbrowser.open('http://www.le.com/'))
        moviemenu.add_command(label='土豆', command=lambda: webbrowser.open('http://www.tudou.com/'))
        moviemenu.add_command(label='A站', command=lambda: webbrowser.open('http://www.acfun.tv/'))
        moviemenu.add_command(label='B站', command=lambda: webbrowser.open('http://www.bilibili.com/'))

        # 控件内容设置
        group = tk.Label(frame_1, text='请选择一个视频解析方式：', padx=10, pady=10)
        tb1 = tk.Radiobutton(frame_1, text='纯净/B站', variable=self.v, value=1, width=10, height=3)
        tb2 = tk.Radiobutton(frame_1, text='综合/B站', variable=self.v, value=2, width=10, height=3)
        tb3 = tk.Radiobutton(frame_1, text='爱豆', variable=self.v, value=3, width=10, height=3)
        tb4 = tk.Radiobutton(frame_1, text='虾米', variable=self.v, value=4, width=10, height=3)
        tb5 = tk.Radiobutton(frame_1, text='OK解析', variable=self.v, value=5, width=10, height=3)
        tb6 = tk.Radiobutton(frame_1, text='诺讯', variable=self.v, value=6, width=10, height=3)
        tb7 = tk.Radiobutton(frame_1, text='夜幕', variable=self.v, value=7, width=10, height=3)
        tb8 = tk.Radiobutton(frame_1, text='M3U8.TV', variable=self.v, value=8, width=10, height=3)
        tb9 = tk.Radiobutton(frame_1, text='人人迷', variable=self.v, value=9, width=10, height=3)
        tb10 = tk.Radiobutton(frame_1, text='全民', variable=self.v, value=10, width=10, height=3)
        tb11 = tk.Radiobutton(frame_1, text='七哥', variable=self.v, value=11, width=10, height=3)
        tb12 = tk.Radiobutton(frame_1, text='冰豆', variable=self.v, value=12, width=10, height=3)
        tb13 = tk.Radiobutton(frame_1, text='迪奥', variable=self.v, value=13, width=10, height=3)
        tb14 = tk.Radiobutton(frame_1, text='CK', variable=self.v, value=14, width=10, height=3)
        tb15 = tk.Radiobutton(frame_1, text='ckmov', variable=self.v, value=15, width=10, height=3)
        tb16 = tk.Radiobutton(frame_1, text='playerjy/B站', variable=self.v, value=16, width=10, height=3)
        tb17 = tk.Radiobutton(frame_1, text='ccyjjd', variable=self.v, value=17, width=10, height=3)
        tb18 = tk.Radiobutton(frame_1, text='诺诺', variable=self.v, value=18, width=10, height=3)
        tb19 = tk.Radiobutton(frame_1, text='H8', variable=self.v, value=19, width=10, height=3)
        tb20 = tk.Radiobutton(frame_1, text='BL', variable=self.v, value=20, width=10, height=3)
        tb21 = tk.Radiobutton(frame_1, text='解析la', variable=self.v, value=21, width=10, height=3)
        tb22 = tk.Radiobutton(frame_1, text='MUTV', variable=self.v, value=22, width=10, height=3)
        tb23 = tk.Radiobutton(frame_1, text='MAO', variable=self.v, value=23, width=10, height=3)
        tb24 = tk.Radiobutton(frame_1, text='无名', variable=self.v, value=24, width=10, height=3)
        tb25 = tk.Radiobutton(frame_1, text='盘古', variable=self.v, value=25, width=10, height=3)
        tb26 = tk.Radiobutton(frame_1, text='盖世', variable=self.v, value=26, width=10, height=3)
        tb27 = tk.Radiobutton(frame_1, text='0523', variable=self.v, value=27, width=10, height=3)
        tb28 = tk.Radiobutton(frame_1, text='17云', variable=self.v, value=28, width=10, height=3)
        tb29 = tk.Radiobutton(frame_1, text='4K', variable=self.v, value=29, width=10, height=3)
        tb30 = tk.Radiobutton(frame_1, text='8090', variable=self.v, value=30, width=10, height=3)
        tb31 = tk.Radiobutton(frame_1, text='听乐', variable=self.v, value=31, width=10, height=3)
        tb32 = tk.Radiobutton(frame_1, text='180', variable=self.v, value=32, width=10, height=3)
        label1 = tk.Label(frame_2, text="请输入视频链接：")
        entry = tk.Entry(frame_2, textvariable=self.url, highlightcolor='Fuchsia', highlightthickness=1, width=35)
        label2 = tk.Label(frame_2, text=" ")
        play = tk.Button(frame_2, text="播放", font=('楷体', 12), fg='Purple', width=2, height=1, command=self.video_play)
        label3 = tk.Label(frame_2, text=" ")
        label_explain = tk.Label(frame_3, fg='red', font=('楷体', 18), text='\n注意：\nCSDN博主Vec_Kun版权所有\n此工具仅用于交流学习\n请勿用于任何商业用途！')
        label_warning = tk.Label(frame_3, fg='black', font=('楷体', 16), text='\n\n')

        # 控件布局
        frame_1.pack()
        frame_2.pack()
        frame_3.pack()
        group.grid(row=0, column=0)
        tb1.grid(row=0, column=1)
        tb2.grid(row=0, column=2)
        tb3.grid(row=0, column=3)
        tb4.grid(row=0, column=4)
        tb5.grid(row=1, column=1)
        tb6.grid(row=1, column=2)
        tb7.grid(row=1, column=3)
        tb8.grid(row=1, column=4)
        tb9.grid(row=2, column=1)
        tb10.grid(row=2, column=2)
        tb11.grid(row=2, column=3)
        tb12.grid(row=2, column=4)
        tb13.grid(row=3, column=1)
        tb14.grid(row=3, column=2)
        tb15.grid(row=3, column=3)
        tb16.grid(row=3, column=4)
        tb17.grid(row=4, column=1)
        tb18.grid(row=4, column=2)
        tb19.grid(row=4, column=3)
        tb20.grid(row=4, column=4)
        tb21.grid(row=5, column=1)
        tb22.grid(row=5, column=2)
        tb23.grid(row=5, column=3)
        tb24.grid(row=5, column=4)
        tb25.grid(row=6, column=1)
        tb26.grid(row=6, column=2)
        tb27.grid(row=6, column=3)
        tb28.grid(row=6, column=4)
        tb29.grid(row=7, column=1)
        tb30.grid(row=7, column=2)
        tb31.grid(row=7, column=3)
        tb32.grid(row=7, column=4)
        label1.grid(row=0, column=0)
        entry.grid(row=0, column=1)
        label2.grid(row=0, column=2)
        play.grid(row=0, column=3, ipadx=10, ipady=10)
        label3.grid(row=0, column=4)
        label_explain.grid(row=1, column=0)
        label_warning.grid(row=2, column=0)

    """
    函数说明:视频播放
    """

    def video_play(self):
        # 视频解析网站地址
        # port_1 = 'https://jx.618g.com/?url='
        port_1 = 'https://im1907.top/?jx='
        port_2 = 'https://jx.jsonplayer.com/player/?url='
        port_3 = 'https://jx.aidouer.net/?url='
        port_4 = 'https://jx.xmflv.com/?url='
        port_5 = 'https://okjx.cc/?url='
        port_6 = 'https://www.nxflv.com/?url='
        port_7 = 'https://www.yemu.xyz/?url='
        port_8 = 'https://jx.m3u8.tv/jiexi/?url='
        port_9 = 'https://jx.blbo.cc:4433/?url='
        port_10 = 'https://api.qianqi.net/vip/?url='
        port_11 = 'https://jx.nnxv.cn/tv.php?url='
        port_12 = 'https://bd.jx.cn/?url='
        port_13 = 'https://123.1dior.cn/?url='
        port_14 = 'https://www.ckplayer.vip/jiexi/?url='
        port_15 = 'https://www.ckmov.vip/api.php?url='
        port_16 = 'https://jx.playerjy.com/?url='
        port_17 = 'https://ckmov.ccyjjd.com/ckmov/?url='
        port_18 = 'https://www.ckmov.com/?url='
        port_19 = 'https://www.h8jx.com/jiexi.php?url='
        port_20 = 'https://svip.bljiex.cc/?v='
        port_21 = 'https://api.jiexi.la/?url='
        port_22 = 'https://jiexi.janan.net/jiexi/?url='
        port_23 = 'https://www.mtosz.com/erzi.php?url='
        port_24 = 'https://www.administratorw.com/video.php?url='
        port_25 = 'https://www.pangujiexi.cc/jiexi.php?url='
        port_26 = 'https://www.gai4.com/?url='
        port_27 = 'https://go.yh0523.cn/y.cy?url='
        port_28 = 'https://www.1717yun.com/jx/ty.php?url='
        port_29 = 'https://jx.4kdv.com/?url='
        port_30 = 'https://www.8090g.cn/?url='
        port_31 = 'https://jx.dj6u.com/?url='
        port_32 = 'https://jx.000180.top/jx/?url='

        # 正则表达是判定是否为合法链接
        if re.match(r'^https?:/{2}\w.+$', self.url.get()):
            port_num = self.v.get()
            port_url_referer = locals()[f'port_{port_num}']
            # 视频链接获取
            ip = self.url.get()
            # 视频链接加密
            ip = parse.quote_plus(ip)
            # 浏览器打开
            webbrowser.open(port_url_referer + self.url.get())

        else:
            msgbox.showerror(title='错误', message='视频链接地址无效，请重新输入！')

    """
    函数说明:tkinter窗口居中
    """

    def center(self):
        ws = self.root.winfo_screenwidth()
        hs = self.root.winfo_screenheight()
        x = int((ws / 2) - (self.w / 2))
        y = int((hs / 2) - (self.h / 2))
        self.root.geometry('{}x{}+{}+{}'.format(self.w, self.h, x, y))

    """
    函数说明:loop等待用户事件
    """

    def loop(self):
        # 禁止修改窗口大小
        self.root.resizable(False, False)
        # 窗口居中
        self.center()
        self.root.mainloop()


if __name__ == '__main__':
    app = APP()  # 实例化APP对象
    app.loop()  # loop等待用户事件
```

* * *

### 运行效果

![](/images/posts/39.-实战：基于api接口实现视频解析播放（32接口，窗口/e1b865bac071.png)

![](/images/posts/39.-实战：基于api接口实现视频解析播放（32接口，窗口/b4268fea6ad5.png)![](/images/posts/39.-实战：基于api接口实现视频解析播放（32接口，窗口/a01962d708fd.png)![](/images/posts/39.-实战：基于api接口实现视频解析播放（32接口，窗口/282fdeb01d18.png)

* * *

### 总结

本节实现了输入任意视频链接，在用户UI窗口选择解析接口，点击解析按钮自动跳转到系统默认浏览器进行播放的功能，切记不要用于商业活动！本教程仅用于个人学习交流用途！
