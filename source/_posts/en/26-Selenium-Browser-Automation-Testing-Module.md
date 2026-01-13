---
title: "26. Selenium: Browser Automation Testing Module - A Convenient Scraping Tool (Multiple Examples)"
date: 2023-01-16
updated: 2023-01-16
categories:
  - Python Web Scraping Tutorial
tags:
  - web scraping
  - selenium
  - testing tools
  - data analysis
  - chrome
csdn_views: 2165
csdn_likes: 10
csdn_comments: 3
csdn_favorites: 21
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128699574
cover: /images/posts/26.-selenium：浏览器自动测试模块——一款方便且能/89eaa3af64c6.png
lang_pair:
  zh-CN: "26. selenium：浏览器自动测试模块——一款方便且能装X的爬虫工具（附多个实例）"
---

> This article was migrated from CSDN blog
> Original link: [26. Selenium: Browser Automation Testing Module](https://blog.csdn.net/m0_59180666/article/details/128699574)
> 📊 2165 views | 👍 10 likes | 💬 3 comments | ⭐ 21 favorites

**Table of Contents**

Introduction

What is Selenium?

Configuring Selenium

Example 1: Open webpage and get title

Example 2: Scrape job listings

Example 3: Scrape news with page switching

Example 4: Handle iframe

Example 5: Headless browser

Summary

* * *

### Introduction

We've learned many scraping methods - parsing source code, packet capture, element inspection, encryption/decryption... But sometimes we wonder: can we directly get what the browser displays?

Data is right there on the browser page, but due to empty source code, we have to dig through JSON and JS requests. Sometimes data is so hidden it's frustrating - you just want to copy-paste from the browser!

So, Python can automatically run the browser and get what we want: **Selenium** was born.

* * *

### What is Selenium?

Selenium is a tool for Web application testing. It runs directly in browsers like a real user. Supported browsers include IE, Firefox, Safari, Chrome, Opera, Edge, etc. Main features: browser compatibility testing, system functionality testing, and auto-generating test scripts in .Net, Java, Perl, etc.

Selenium can **automatically open browsers**, visit desired pages, and **mimic human** operations like copy-paste and input to get information.

* * *

### Configuring Selenium

Selenium needs two things: the library and browser driver.

#### Install Selenium Library

```bash
pip install selenium
```

#### Install Browser Driver (Chrome Example)

1. Visit ChromeDriver downloads page
2. Select driver matching your Chrome version (if exact version unavailable, choose closest lower version)

**How to check browser version?**

Go to Chrome settings → About Google Chrome to see version number.

3. Download and extract, then copy files to Python interpreter path.

* * *

### Using Selenium

#### Example 1: Open webpage and get title

```python
from selenium import webdriver

options = webdriver.ChromeOptions()
options.add_experimental_option('detach', True)
options.add_argument('--start-maximized')
web = webdriver.Chrome(options=options)

web.get("http://www.baidu.com")
print(web.title)
```

Configure webdriver to keep browser open after execution and maximize window.

#### Example 2: Scrape job listings

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

options = webdriver.ChromeOptions()
options.add_experimental_option('detach', True)
options.add_argument('--start-maximized')
web = webdriver.Chrome(options=options)

web.get("http://lagou.com")

# Click city selection
el = web.find_element(By.XPATH, '//*[@id="changeCityBox"]/ul/li[1]/a')
el.click()
time.sleep(1)

# Search for python
web.find_element(By.XPATH, '//*[@id="search_input"]').send_keys("python", Keys.ENTER)
time.sleep(1)

# Extract data
item_list = web.find_elements(By.XPATH, '//*[@id="jobList"]/div[1]/div')
for item in item_list:
    job_name = item.find_element(By.XPATH, "./div[1]/div[1]/div[1]/a").text
    job_price = item.find_element(By.XPATH, "./div[1]/div[1]/div[2]/span").text
    company_name = item.find_element(By.XPATH, './div[1]/div[2]/div[1]/a').text
    print(company_name, job_name, job_price)
```

Combines XPath knowledge - find elements, click, input text, and extract data.

#### Example 3: Scrape news with page switching

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

options = webdriver.ChromeOptions()
options.add_experimental_option('detach', True)
options.add_argument('--start-maximized')
web = webdriver.Chrome(options=options)

web.get("http://tuijian.hao123.com/")

news_header = web.find_element(By.XPATH, '//*[@id="sdIndex"]/ul/li[1]/a/span').text
web.find_element(By.XPATH, '//*[@id="sdIndex"]/ul/li[1]/a/span').click()
time.sleep(1)

# Switch to new window - Selenium doesn't auto-switch!
web.switch_to.window(web.window_handles[-1])

news_detail = web.find_element(By.XPATH, '//*[@id="main-content"]/div[1]/div/div[2]').text
print(news_header)
print(news_detail)

time.sleep(1)
web.close()

# Switch back to original window
web.switch_to.window(web.window_handles[0])
print(web.title)
```

Use `web.switch_to.window` with `web.window_handles[num]` to switch between tabs.

#### Example 4: Handle iframe

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

web.get("https://www.csdn.net/")
time.sleep(3)

# Must get iframe first, then switch to it
iframe = web.find_element(By.XPATH, '//*[@id="kp_box_589"]/iframe')
web.switch_to.frame(iframe)
time.sleep(1)

print(web.find_element(By.XPATH, '//*[@id="1001319"]/div/div/span').text)

web.switch_to.default_content()  # Switch back to main page
```

#### Example 5: Headless browser

```python
from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.select import Select
from selenium.webdriver.common.by import By
import time

opt = Options()
opt.add_argument("--headless")
opt.add_argument("--disable-gpu")
web = Chrome(options=opt)

web.get("https://www.endata.com.cn/BoxOffice/BO/Year/index.html")
time.sleep(2)

# Handle dropdown menu
sel_el = web.find_element(By.XPATH, '//*[@id="OptionDate"]')
sel = Select(sel_el)

for i in range(len(sel.options)):
    sel.select_by_index(i)
    time.sleep(2)
    table = web.find_element(By.XPATH, '//*[@id="TableList"]/table')
    print(table.text)
    print("===================================")

print("Complete.")
web.close()
```

"Headless" runs browser in background without display. Use `--headless` and `--disable-gpu` options.

* * *

### Summary

This chapter introduced Selenium with five examples, using automation testing tools to replace tedious scraping processes like decryption and packet capture - very effective in specific scenarios.
