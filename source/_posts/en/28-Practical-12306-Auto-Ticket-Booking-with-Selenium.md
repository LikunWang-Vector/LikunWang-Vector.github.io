---
title: "28. Practical: Auto Ticket Booking on 12306 with Selenium"
date: 2023-01-19
updated: 2023-01-19
categories:
  - Python Web Scraping Tutorial
tags:
  - selenium
  - testing tools
  - python
csdn_views: 9810
csdn_likes: 40
csdn_comments: 33
csdn_favorites: 133
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128735509
cover: /images/posts/28.-实战：基于selenium实现12306自动购票/6dbf8c615639.png
lang_pair:
  zh-CN: "28. 实战：基于selenium实现12306自动购票"
---

> This article was migrated from CSDN blog
> Original link: [28. Practical: Auto Ticket Booking on 12306 with Selenium](https://blog.csdn.net/m0_59180666/article/details/128735509)
> 📊 9810 views | 👍 40 likes | 💬 33 comments | ⭐ 133 favorites

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

We've learned Selenium basics - handling CAPTCHAs, page navigation, iframes. Now for practice: using Selenium to automate train ticket booking on China's 12306 website.

**2023-01-20 Update: All features completed and fully functional**

* * *

### Objective

Manually input passenger, departure/destination, date, student ticket option in console, then auto-navigate to 12306 for booking.

* * *

### Approach

1. Get login page URL, locate username/password inputs, use sendkey to enter info
2. Get login button XPath, handle slider verification with drag_and_drop_by_offset
3. After login, click ticket booking button
4. Analyze booking page - click textbox to clear, then: click → input → Enter
5. Clear date textbox with clear(), input date in yyyy-mm-dd format
6. Switch to student ticket if needed
7. Click search
8. Use **explicit wait** to locate booking button
9. Use **expected conditions** to select passenger and confirm student ticket popup
10. Submit order, wait for payment

* * *

### Code Implementation

#### 1. Enter Login Page, Input Credentials

```python
opt = Options()
opt.add_argument('--disable-blink-features=AutomationControlled')
opt.add_experimental_option('detach', True)
opt.add_argument('--start-maximized')
web = Chrome(options=opt)
web.get("https://kyfw.12306.cn/otn/resources/login.html")
web.find_element(By.XPATH, '//*[@id="toolbar_Div"]/div[2]/div[2]/ul/li[1]/a').click()
time.sleep(1)
web.find_element(By.XPATH, '//*[@id="J-userName"]').send_keys("username")
web.find_element(By.XPATH, '//*[@id="J-password"]').send_keys("password")
```

#### 2. Click Login, Complete Slider Verification

```python
web.find_element(By.XPATH, '//*[@id="J-login"]').click()
time.sleep(3)
btn = web.find_element(By.XPATH, '//*[@id="nc_1_n1z"]')
ActionChains(web).drag_and_drop_by_offset(btn, 300, 0).perform()
time.sleep(3)
```

ActionChains has many action sequences - **remember to add perform()** at the end.

#### 3. Click Ticket Booking

```python
web.find_element(By.XPATH, '//*[@id="link_for_ticket"]').click()
```

#### 4. Input Departure/Destination from Console

```python
print("***Welcome to Auto Ticket System***")
passenger = input("Enter passenger name...\n")
fromStationText = input("Enter departure station...\n")
toStationText = input("Enter destination station...\n")
train_date = input("Enter departure date (yyyy-mm-dd)...\n")
is_student = input("Student ticket? (y/n)\n")
```

Input to textboxes:

```python
web.find_element(By.XPATH, '//*[@id="fromStationText"]').click()
web.find_element(By.XPATH, '//*[@id="fromStationText"]').send_keys(fromStationText, Keys.ENTER)
time.sleep(1)
web.find_element(By.XPATH, '//*[@id="toStationText"]').click()
web.find_element(By.XPATH, '//*[@id="toStationText"]').send_keys(toStationText, Keys.ENTER)
```

#### 5-7. Date Input, Student Ticket, Search

```python
web.find_element(By.XPATH, '//*[@id="train_date"]').clear()
web.find_element(By.XPATH, '//*[@id="train_date"]').send_keys(train_date)
if is_student == 'y':
    web.find_element(By.XPATH, '//*[@id="sf2_label"]').click()
web.find_element(By.XPATH, '//*[@id="query_ticket"]').click()
```

#### 8. Locate Booking Button with Explicit Wait

```python
WebDriverWait(web, 1000).until(EC.presence_of_element_located((By.XPATH, '//*[@id="queryLeftTable"]/tr')))
tr_list = web.find_elements(By.XPATH, '//*[@id="queryLeftTable"]/tr[not(@datatran)]')

for tr in tr_list:
    train_num = tr.find_element(By.XPATH, './td[1]/div/div[1]/div/a').text
    text_1 = tr.find_element(By.XPATH, "./td[4]").text  # Second class seats
    text_2 = tr.find_element(By.XPATH, "./td[8]").text
    if (text_1 == "有" or text_1.isdigit()) or (text_2 == "有" or text_2.isdigit()):
        order_btn = tr.find_element(By.CLASS_NAME, "btn72")
        order_btn.click()
        WebDriverWait(web, 1000).until(EC.url_to_be('https://kyfw.12306.cn/otn/confirmPassenger/initDc'))
        print(train_num, "has tickets!")
        break
```

#### 9-10. Select Passenger, Submit Order

```python
web.find_element(By.XPATH, f'//*[@id="normal_passenger_id"]/li/label[contains(text(),"{passenger}")]').click()
if EC.presence_of_element_located((By.XPATH, '//div[@id="dialog_xsertcj"]')):
    web.find_element(By.ID, 'dialog_xsertcj_ok').click()
web.find_element(By.ID, 'submitOrder_id').click()
time.sleep(2)

# Seat selection
seat = input("Select seat (A/B/C/D/F):\n")
seat_map = {'A': '//*[@id="erdeng1"]/ul[1]/li[1]/a', 'B': '//*[@id="erdeng1"]/ul[1]/li[2]/a',
            'C': '//*[@id="erdeng1"]/ul[1]/li[3]/a', 'D': '//*[@id="erdeng1"]/ul[2]/li[1]/a',
            'F': '//*[@id="erdeng1"]/ul[2]/li[2]/a'}
web.find_element(By.XPATH, seat_map[seat]).click()
web.find_element(By.XPATH, '//*[@id="qr_submit_id"]').click()
print("Order created! Please pay within 10 minutes.")
```

* * *

### Results

![](/images/posts/28.-实战：基于selenium实现12306自动购票/6dbf8c615639.png)

![](/images/posts/28.-实战：基于selenium实现12306自动购票/66fbdc39aabf.png)

![](/images/posts/28.-实战：基于selenium实现12306自动购票/64bc76e11779.png)

* * *

### Summary

This comprehensive Selenium browser automation example covers many concepts. For learning purposes only - please don't misuse!
