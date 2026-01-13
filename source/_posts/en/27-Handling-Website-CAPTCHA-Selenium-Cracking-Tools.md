---
title: "27. Handling Website CAPTCHA: Login Verification (Selenium + Cracking Tools)"
date: 2023-01-17
updated: 2023-01-17
categories:
  - Python Web Scraping Tutorial
tags:
  - selenium
  - testing tools
  - data analysis
  - web scraping
csdn_views: 1908
csdn_likes: 10
csdn_comments: 2
csdn_favorites: 10
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128707095
cover: /images/posts/27.-处理网站验证码：处理网站登录验证码（selenium/b6eaaf943a78.png
lang_pair:
  zh-CN: "27. 处理网站验证码：处理网站登录验证码（selenium+破解工具）"
---

> This article was migrated from CSDN blog
> Original link: [27. Handling Website CAPTCHA](https://blog.csdn.net/m0_59180666/article/details/128707095)
> 📊 1908 views | 👍 10 likes | 💬 2 comments | ⭐ 10 favorites

**Table of Contents**

Introduction

Objective

Approach

Code Implementation

Complete Code

Results

Summary

* * *

### Introduction

When we request pages too frequently or perform login operations, websites usually throw human verification - sliders, CAPTCHAs, click sequences, etc.

How do we automatically verify through code for full automation? This involves image recognition. We could use machine learning (datasets, training, models) to recognize CAPTCHAs, but it's time-consuming, inefficient, and not universal.

The second approach: use **mature CAPTCHA cracking tools**. This example uses a third-party service.

* * *

### Objective

Configure the service locally, use its CAPTCHA tool to login to its website and get the CAPTCHA types and price list.

* * *

### Approach

1. Set up environment
2. Handle CAPTCHA
3. Handle login info
4. Get price list

* * *

### Code Implementation

#### 1. Set Up Environment

Download the image recognition demo from the service website and extract to project folder.

Modified demo code (Python 3.8):

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
        params = {'codetype': codetype}
        params.update(self.base_params)
        files = {'userfile': ('ccc.jpg', im)}
        r = requests.post('http://upload.chaojiying.net/Upload/Processing.php', 
                         data=params, files=files, headers=self.headers)
        return r.json()
```

#### 2. Handle CAPTCHA

Import the demo interface and configure parameters:

```python
from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from chaojiying import Chaojiying_Client
import time

opt = Options()
opt.add_experimental_option('detach', True)
opt.add_argument('--start-maximized')
web = Chrome(options=opt)
web.get("target_url_here")
```

Use `screenshot_as_png` to get CAPTCHA screenshot, pass credentials and software ID to Client:

```python
# Handle CAPTCHA
img = web.find_element(By.XPATH, '/html/body/div[3]/div/div[3]/div[1]/form/div/img').screenshot_as_png
chaojiying = Chaojiying_Client('username', 'password', 'softID')
dic = chaojiying.PostPic(img, 1902)  # 1902 = 4-digit alphanumeric
veri_code = dic.get('pic_str')
```

#### 3. Handle Login Info

```python
# Fill in username, password, CAPTCHA
web.find_element(By.XPATH, '/html/body/div[3]/div/div[3]/div[1]/form/p[1]/input').send_keys("username")
web.find_element(By.XPATH, '/html/body/div[3]/div/div[3]/div[1]/form/p[2]/input').send_keys("password")
web.find_element(By.XPATH, '/html/body/div[3]/div/div[3]/div[1]/form/p[3]/input').send_keys(veri_code)
```

Use XPath to find text boxes, send_keys to input content.

#### 4. Get Price List

```python
# Click login
web.find_element(By.XPATH, '/html/body/div[3]/div/div[3]/div[1]/form/p[4]/input').click()

# Open price page
web.find_element(By.XPATH, '/html/body/div[2]/div/ul/li[4]/a').click()
print(web.title)

for i in range(1, 7):
    print('================================')
    print(web.find_element(By.XPATH, f'/html/body/section[2]/section/section[2]/table[{i}]').text)
```

* * *

### Complete Code

```python
from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from chaojiying import Chaojiying_Client
import time

opt = Options()
opt.add_experimental_option('detach', True)
opt.add_argument('--start-maximized')
web = Chrome(options=opt)
web.get("target_url_here")

# Handle CAPTCHA
img = web.find_element(By.XPATH, '/html/body/div[3]/div/div[3]/div[1]/form/div/img').screenshot_as_png
chaojiying = Chaojiying_Client('username', 'password', 'softID')
dic = chaojiying.PostPic(img, 1902)
veri_code = dic.get('pic_str')

# Fill login info
web.find_element(By.XPATH, '/html/body/div[3]/div/div[3]/div[1]/form/p[1]/input').send_keys("username")
web.find_element(By.XPATH, '/html/body/div[3]/div/div[3]/div[1]/form/p[2]/input').send_keys("password")
web.find_element(By.XPATH, '/html/body/div[3]/div/div[3]/div[1]/form/p[3]/input').send_keys(veri_code)
time.sleep(3)

# Click login
web.find_element(By.XPATH, '/html/body/div[3]/div/div[3]/div[1]/form/p[4]/input').click()

# Get price list
web.find_element(By.XPATH, '/html/body/div[2]/div/ul/li[4]/a').click()
print(web.title)
for i in range(1, 7):
    print('================================')
    print(web.find_element(By.XPATH, f'/html/body/section[2]/section/section[2]/table[{i}]').text)
```

* * *

### Results

![](/images/posts/27.-处理网站验证码：处理网站登录验证码（selenium/ea3087056723.png)

* * *

### Summary

We learned about CAPTCHA processing tools and used Selenium to handle verification and scrape price lists - comprehensive Selenium practice.
