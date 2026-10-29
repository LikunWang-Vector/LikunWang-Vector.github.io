---
type: post
csdn: true
title: "27. 处理网站验证码：处理网站登录验证码（selenium+破解工具）"
date: "2023-01-17"
lastmod: "2023-01-17"
authors:
  - admin
tags:
  - "selenium"
  - "测试工具"
  - "数据分析"
  - "爬虫"
  - "CSDN"
categories:
  - "Python爬虫入门、进阶与实战"
summary: "当我们请求网页过于频繁 时，或者进行登陆操作 时，网页通常都会抛出人机验证 ，目的就是反爬，常见的有滑块验证、验证码、按顺序点击等形式..."
image:
  filename: "covers/csdn-python-crawler.png"
  caption: "CSDN Archive · PYTHON · CRAWLER"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128707095"
csdn_views: 1908
csdn_likes: 10
csdn_comments: 2
csdn_favorites: 10
---

> 本文迁移自CSDN博客
> 原文链接：[27. 处理网站验证码：处理网站登录验证码（selenium+破解工具）](https://blog.csdn.net/m0_59180666/article/details/128707095)
> 📊 1908 阅读 | 👍 10 点赞 | 💬 2 评论 | ⭐ 10 收藏


### 前言

当我们请求网页**过于频繁** 时，或者进行**登陆操作** 时，网页通常都会抛出**人机验证** ，目的就是反爬，常见的有滑块验证、验证码、按顺序点击等形式...

那么遇到这种情况，我们如何**通过程序自动验证从而跳过人工操作实现全自动化** 呢？这就涉及到了一个新的知识：图像识别。我们可以通过建立数据集、训练数据集、生成模型等机器学习方法来实现识别验证码图片的功能，但它特别耗时耗力，效率还底下，还没有普适性...除非是有大量的请求要求在此域名下，就可以训练一波数据集，否则真的很浪费时间精力，没有必要。

那么第二种方法应运而生：它就是**借助已有的成熟验证码破Jie工具** ，本例以某网站**（见评论区）** 为例。

* * *

### 目的

在本地配置该网站，利用它的验证码工具实现登录其官网并获取验证码类型与价格表。

* * *

### 思路

1\. 搭建环境

2\. 处理验证码

3\. 处理登录信息

4\. 获取价格表

* * *

### 代码实现

#### 1\. 搭建环境

![](/images/posts/27.-处理网站验证码：处理网站登录验证码（selenium/b6eaaf943a78.png)

访问[超级鹰官网 ](http://www.chaojiying.com/ "超级鹰官网 ")，按上图所示步骤下载超级鹰图像识别demo，解压到我们的项目文件夹。

demo代码修改后如下：（博主用Python 3.8）

```python
#!/usr/bin/env python
# coding:utf-8

import requests
from hashlib import md5


class Chaojiying_Client(object):

    def __init__(self, username, password, soft_id):
        self.username = username
        password = password.encode('utf8')
        self.password = md5(password).hexdigest()
        self.soft_id = soft_id
        self.base_params = {
            'user': self.username,
            'pass2': self.password,
            'softid': self.soft_id,
        }
        self.headers = {
            'Connection': 'Keep-Alive',
            'User-Agent': 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)',
        }

    def PostPic(self, im, codetype):
        """
        im: 图片字节
        codetype: 题目类型 参考 http://www.chaojiying.com/price.html
        """
        params = {
            'codetype': codetype,
        }
        params.update(self.base_params)
        files = {'userfile': ('ccc.jpg', im)}
        r = requests.post('http://upload.chaojiying.net/Upload/Processing.php', data=params, files=files,
                          headers=self.headers)
        return r.json()

    def PostPic_base64(self, base64_str, codetype):
        """
        im: 图片字节
        codetype: 题目类型 参考 http://www.chaojiying.com/price.html
        """
        params = {
            'codetype': codetype,
            'file_base64': base64_str
        }
        params.update(self.base_params)
        r = requests.post('http://upload.chaojiying.net/Upload/Processing.php', data=params, headers=self.headers)
        return r.json()

    def ReportError(self, im_id):
        """
        im_id:报错题目的图片ID
        """
        params = {
            'id': im_id,
        }
        params.update(self.base_params)
        r = requests.post('http://upload.chaojiying.net/Upload/ReportError.php', data=params, headers=self.headers)
        return r.json()


if __name__ == '__main__':
    # 用户中心>>软件ID 生成一个替换 96001
    chaojiying = Chaojiying_Client('超级鹰用户名', '超级鹰用户名的密码', '96001')
    # 本地图片文件路径 来替换 a.jpg 有时WIN系统须要//
    im = open('a.jpg', 'rb').read()
    # 1902 验证码类型  官方网站>>价格体系 3.4+版 print 后要加()
    print(chaojiying.PostPic(im, 1902))
    # print chaojiying.PostPic(base64_str, 1902)  #此处为传入 base64代码
```

只需要修改main函数部分的print函数的括号与部分缩进问题即可，还是简单的。

#### 2\. 处理验证码

我们把超级鹰demo中提供的接口导入项目中，在这个接口上进行操作。

首先照常导包进行参数配置

```python
from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from chaojiying import Chaojiying_Client

import time

# 准备好参数配置
opt = Options()
opt.add_experimental_option('detach', True)
opt.add_argument('--start-maximized')  # 浏览器窗口最大

web = Chrome(options=opt)  # 把参数配置设置到浏览器中

web.get("见评论区")
```

下面处理验证码，用**screenshot_as_png** 方法拿到验证码截图，将账号密码和软件ID传入**Client**

#### （关于软件ID的获取）

![](/images/posts/27.-处理网站验证码：处理网站登录验证码（selenium/fa5e46065190.png)

**用户登录** 以后需要在**用户中心** 的**软件ID** 选项进行创建，点击“**生成一个软件ID** ”按钮，软件名称随便起，然后留表中就会出现一条信息，其中包含**软件ID** 。它的目的就是为了统计某个软件ID的积分使用情况。

扫码关注他的微信公众号可以领1000积分，我们用来做测试已经够用

最后用**PostPic** 接口传送验证码截图和验证类型，验证类型需要在[官网价格表](http://www.chaojiying.com/price.html "官网价格表")查询，我们只需要识别四位字母数字，所以参数传**1902** 。

然后返回识别完成的验证码结果，是一个字典形式，我们只需要获取**pic_str** 属性所包含的内容，使用字典的get('key')方法，将想要的属性输入就能得到对应的值。我们用**get('pic_str')** 。

```python
# 处理验证码
img = web.find_element(By.XPATH, '/html/body/div[3]/div/div[3]/div[1]/form/div/img').screenshot_as_png
# TODO：需要修改下面的用户名、密码、软件ID
chaojiying = Chaojiying_Client('username', 'password', 'softID')
dic = chaojiying.PostPic(img, 1902)
veri_code = dic.get('pic_str')
```

#### 3\. 处理登录信息

```python
# 向页面中填入用户名, 密码, 验证码
# TODO：需要修改下面的用户名、密码
web.find_element(By.XPATH, '/html/body/div[3]/div/div[3]/div[1]/form/p[1]/input').send_keys("username")
web.find_element(By.XPATH, '/html/body/div[3]/div/div[3]/div[1]/form/p[2]/input').send_keys("password")
web.find_element(By.XPATH, '/html/body/div[3]/div/div[3]/div[1]/form/p[3]/input').send_keys(veri_code)
```

这个就容易多了，直接**XPath找文本框，send_keys传输内容** ，把信息塞进去。

#### 4\. 获取价格表

```python
# 点击登录
web.find_element(By.XPATH, '/html/body/div[3]/div/div[3]/div[1]/form/p[4]/input').click()

# 打开价格体系页面
web.find_element(By.XPATH, '/html/body/div[2]/div/ul/li[4]/a').click()
print(web.title)

for i in range(1, 7):
    print('================================')
    print(web.find_element(By.XPATH, f'/html/body/section[2]/section/section[2]/table[{i}]').text)
    
```

最后一步，点击登录，打开价格体系页面，按顺序把6个价格表依次打印即可。

* * *

### 完整代码

```python
# 1. 图像识别
# 2. 选择互联网上成熟的验证码破解工具(超级鹰)

from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from chaojiying import Chaojiying_Client

import time

# 准备好参数配置
opt = Options()
opt.add_experimental_option('detach', True)
opt.add_argument('--start-maximized')  # 浏览器窗口最大

web = Chrome(options=opt)  # 把参数配置设置到浏览器中

web.get("见评论区")

# 处理验证码
img = web.find_element(By.XPATH, '/html/body/div[3]/div/div[3]/div[1]/form/div/img').screenshot_as_png

# TODO：填入自己的用户名(username)、密码(password)、软件ID(softID)
chaojiying = Chaojiying_Client('username', 'password', 'softID')

dic = chaojiying.PostPic(img, 1902)
veri_code = dic.get('pic_str')

# TODO：填入自己的用户名(username)、密码(password)
# 向页面中填入用户名, 密码, 验证码
web.find_element(By.XPATH, '/html/body/div[3]/div/div[3]/div[1]/form/p[1]/input').send_keys("username")
web.find_element(By.XPATH, '/html/body/div[3]/div/div[3]/div[1]/form/p[2]/input').send_keys("password")
web.find_element(By.XPATH, '/html/body/div[3]/div/div[3]/div[1]/form/p[3]/input').send_keys(veri_code)

time.sleep(3)

# 点击登录
web.find_element(By.XPATH, '/html/body/div[3]/div/div[3]/div[1]/form/p[4]/input').click()

# 打开价格体系页面
web.find_element(By.XPATH, '/html/body/div[2]/div/ul/li[4]/a').click()
print(web.title)

for i in range(1, 7):
    print('================================')
    print(web.find_element(By.XPATH, f'/html/body/section[2]/section/section[2]/table[{i}]').text)
```

* * *

### **运行效果**

![](/images/posts/27.-处理网站验证码：处理网站登录验证码（selenium/ea3087056723.png)

* * *

### 总结

我们认识了超级鹰这个处理验证码的工具，并用它自己处理了自己的验证码并用selenium获取了他的价格表，综合锻炼了一下我们的selenium模块。
