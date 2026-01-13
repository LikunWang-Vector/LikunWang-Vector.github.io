---
title: "41. Practical: Multi-Platform Flash Sale Auto-Purchase System"
date: 2023-03-19
updated: 2023-03-19
categories:
  - Python Web Scraping from Beginner to Pro
tags:
  - selenium
  - testing-tools
  - python
cover: /images/posts/41.-基于selenium的各大购物平台自动秒杀系统（完整/65d0aeeecb62.png
lang_pair:
  zh-CN: "41. 基于selenium的各大购物平台自动秒杀系统（完整源码）"
---

> This article is translated from my CSDN blog
> Original link: [41. 基于selenium的各大购物平台自动秒杀系统](https://blog.csdn.net/m0_59180666/article/details/129657907)
> 📊 1454 views | 👍 4 likes | 💬 7 comments | ⭐ 14 favorites

**Table of Contents**

Introduction

Objective

Approach

Code Implementation

1. Encapsulate three platforms as functions
2. Create time checking function
3. Design console UI
4. Optimize logic
5. Testing

Complete Source Code

Results

Summary

---

### Introduction

Previously in the flash sale system article, we created a simple auto-purchase system for one platform. This time we upgrade it by adding support for multiple major shopping platforms, implementing console-based platform selection and custom flash sale time settings.

---

### Objective

1. Implement console-based operation
2. Implement custom time flash sales for three platforms

---

### Approach

1. Encapsulate three platforms as functions
2. Create time checking function
3. Design console UI
4. Optimize logic
5. Testing

---

### Code Implementation

#### 1. Encapsulate three platforms as functions

Using one platform as an example, encapsulate the logic from accessing the webpage to completing the flash sale, introducing a time control function `time_dealer()` to check if the flash sale time has arrived.

```python
def Platform1(browser):
    browser.get("https://shopping-platform.com")
    time.sleep(3)
    browser.find_element(By.LINK_TEXT, "Please Login").click()
    print("Please scan QR code to login")
    time.sleep(10)
    
    browser.get("https://shopping-platform.com/cart")
    time.sleep(3)
    
    # Select all items in cart
    while True:
        try:
            if browser.find_element(By.ID, "SelectAll"):
                browser.find_element(By.ID, "SelectAll").click()
                break
        except:
            print("Cannot find purchase button")
    
    # Wait for flash sale time
    while True:
        print("Please wait for flash sale time...")
        while True:
            if time_dealer():
                break
        # Click checkout button
        # ... checkout logic
```

#### 2. Create time checking function

```python
def time_dealer():
    while True:
        nowadays = datetime.now().strftime('%Y-%m-%d %H:%M:%S.%f')
        if nowadays > set_time:
            return True
        else:
            return False
```

Returns False if time hasn't arrived (continue waiting), True when time arrives (proceed with flash sale).

#### 3. Design console UI

```python
print("***Welcome to Shopping Flash Sale System***")
print("Please enter flash sale information...")
print("=" * 30)

while True:
    platform = input("Enter platform (1.Platform1 2.Platform2 3.Platform3)...\n")
    if platform in ['1', '2', '3']:
        break
    else:
        print('Please enter 1, 2, or 3!')

while True:
    set_time = input("Enter flash sale time (e.g., 2023-03-19 20:00:00.000000)...\n")
    try:
        datetime.strptime(set_time, '%Y-%m-%d %H:%M:%S.000000')
        break
    except ValueError:
        print("Invalid date format, please re-enter")

confirm = input("Confirm the above information? (y/n)\n")
if confirm == 'y':
    print("Initialization complete, starting system...")
```

---

### Results

The system successfully supports multiple platforms with custom flash sale times, voice notifications on successful orders, and a user-friendly console interface.

---

### Summary

This comprehensive project combines multiple platforms into one system, reinforcing web scraping knowledge and programming logic. Pay attention to loop indentation and exit conditions when implementing time-based triggers.
