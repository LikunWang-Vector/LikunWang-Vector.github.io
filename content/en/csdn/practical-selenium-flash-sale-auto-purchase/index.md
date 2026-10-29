---
type: post
csdn: true
title: "38. Practical: Selenium Flash Sale Auto-Purchase System"
date: "2023-03-04"
lastmod: "2023-03-04"
authors:
  - admin
tags:
  - "selenium"
  - "testing-tools"
  - "python"
  - "voice-notification"
  - "CSDN"
categories:
  - "Python Web Scraping from Beginner to Pro"
summary: "During shopping festivals, e-commerce platforms have endless flash sales, but we often miss out due to slow reflexes or network speed. This is where Python automation scripts come"
image:
  filename: "covers/csdn-python-crawler.png"
  caption: "CSDN Archive · PYTHON · CRAWLER"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/129334521"
csdn_views: 2747
csdn_likes: 7
csdn_comments: 9
csdn_favorites: 11
---

> This article was migrated from my [CSDN blog](https://blog.csdn.net/m0_59180666).
> Original: [38. Practical: Selenium Flash Sale Auto-Purchase System](https://blog.csdn.net/m0_59180666/article/details/129334521)
> 📊 2747 views | 👍 7 likes | 💬 9 comments | ⭐ 11 favorites

> This article is translated from my CSDN blog
> Original link: [38. 实战：基于selenium的某宝秒杀抢购系统](https://blog.csdn.net/m0_59180666/article/details/129334521)
> 📊 2747 views | 👍 7 likes | 💬 9 comments | ⭐ 11 favorites


### Introduction

During shopping festivals, e-commerce platforms have endless flash sales, but we often miss out due to slow reflexes or network speed. This is where Python automation scripts come in: use Selenium to design an auto-purchase system that places orders automatically at the set time!

---

### Objective

Write an auto-purchase program that can set a time and target products (pre-added to cart), use automation tools to continuously monitor current time, and automatically place orders when the set time arrives.

---

### Approach

1. Auto-open browser and enter login page
2. QR code login (simple and straightforward)
3. After login, enter cart and select items to purchase
4. When current time exceeds set time, checkout order
5. Voice notification when order is complete, reminding user to pay quickly

---

### Code Implementation

Libraries needed:
> datetime, time, selenium, pypiwin32

#### 1. Auto-open browser with configuration

```python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

opt = Options()
opt.add_argument('--disable-blink-features=AutomationControlled')
opt.add_experimental_option('detach', True)
opt.add_argument('--start-maximized')
browser = webdriver.Chrome(options=opt)
browser.get("https://shopping-site.com")
```

#### 2. Implement QR code login

```python
time.sleep(3)
browser.find_element(By.LINK_TEXT, "Please Login").click()
print("Please scan QR code to login")
time.sleep(10)
```

#### 3. Enter cart and select flash sale items

```python
browser.get("https://shopping-site.com/cart")
time.sleep(3)

while True:
    try:
        if browser.find_element(By.ID, "J_SelectAll1"):
            browser.find_element(By.ID, "J_SelectAll1").click()
            break
    except:
        print("Cannot find purchase button")
```

#### 4. Get current time and place order when time arrives

```python
while True:
    now = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S.%f')
    print(now)
    if now > set_time:
        while True:
            try:
                if browser.find_element(By.LINK_TEXT, "Checkout"):
                    browser.find_element(By.LINK_TEXT, "Checkout").click()
                    print("Items locked, checkout successful")
                    break
            except:
                pass
```

#### 5. Voice notification after successful order

```python
import win32com.client
speaker = win32com.client.Dispatch("SAPI.SpVoice")

while True:
    try:
        if browser.find_element(By.LINK_TEXT, 'Submit Order'):
            browser.find_element(By.LINK_TEXT, 'Submit Order').click()
            print("Purchase successful, please pay quickly")
    except:
        print("Order submitted successfully!")
        speaker.Speak("Order submitted, please pay now!")
        break
    time.sleep(0.01)
```

---

### Results

The automation script successfully opens the browser, waits for QR code login, monitors the time, and places orders automatically when the flash sale begins.

---

### Summary

This section used Selenium to implement an e-commerce flash sale auto-purchase system. It's practical and great for beginners to practice automation skills.
