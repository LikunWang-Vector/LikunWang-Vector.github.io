---
type: post
csdn: true
title: "28. 实战：基于selenium实现12306自动购票"
date: "2023-01-19"
lastmod: "2023-01-19"
authors:
  - admin
tags:
  - "selenium"
  - "测试工具"
  - "python"
  - "CSDN"
categories:
  - "Python爬虫入门、进阶与实战"
summary: "我们已经学会了selenium的基本操作，并且学会了用它处理验证码、跳转网页、处理内联框架等操作，现在可以进行实战：本节选取12306火车购票作为案例，用自动化测试工具selenium实现自动访问网页并下单等待购票。"
image:
  filename: "covers/csdn-python-crawler.png"
  caption: "CSDN Archive · PYTHON · CRAWLER"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128735509"
csdn_views: 9810
csdn_likes: 40
csdn_comments: 33
csdn_favorites: 133
---

> 本文迁移自CSDN博客
> 原文链接：[28. 实战：基于selenium实现12306自动购票](https://blog.csdn.net/m0_59180666/article/details/128735509)
> 📊 9810 阅读 | 👍 40 点赞 | 💬 33 评论 | ⭐ 133 收藏


### 前言

我们已经学会了selenium的基本操作，并且学会了用它处理验证码、跳转网页、处理内联框架等操作，现在可以进行实战：本节选取12306火车购票作为案例，用自动化测试工具selenium实现自动访问网页并下单等待购票。

**2023-01-20更新:完善了全部功能并可以完整运行**

* * *

### 目的

手动在控制台输入乘车人(新增), 出发地、目的地、出发日、是否购买学生票，确认后自动跳转12306网站购票。

* * *

### 思路

1\. 首先获取登陆页面的URL，随后定位账号密码的输入框，用sendkey接口输入个人信息；

2\. 获取登录控件的XPATH地址，点击发现弹窗出现滑块验证，使用drag_and_drop_by_offset接口实现拖拽滑块到终点的操作；

3\. 登陆以后默认在个人中心，获取购票按钮XPATH地址，点击访问；

4\. 分析购票界面，点击文本框以后可以清空当前文本框，所以动作链应当为：点击 -> 输入 -> 按下回车。因为输入以后会弹出选项，所以我们还得点一下回车，直接切换其他文本框会清空；

5\. 出发日文本框点击的时候不会清空，所以用clear接口清空文本框，然后输入正确的日期格式yyyy-mm-dd形式；

6\. 如果是学生票，切换学生票；

7\. 点击查询，拿到可预定车票列表；

8\. 用**显示等待** 定位预定按钮，点击跳转购票页面；

9\. 用**条件等待** 选择学生乘客，并在弹窗中确认购买学生票 ; 或直接选择一般乘客购票；

10\. 提交订单，等待付款。

* * *

### 代码实现

#### 1\. 进入登录界面，输入账号密码

```python
opt = Options()
# option.add_experimental_option('excludeSwitches', ['enable-automation'])
opt.add_argument('--disable-blink-features=AutomationControlled')
opt.add_experimental_option('detach', True)
opt.add_argument('--start-maximized')  # 浏览器窗口最大

web = Chrome(options=opt)

web.get("https://kyfw.12306.cn/otn/resources/login.html")

web.find_element(By.XPATH, '//*[@id="toolbar_Div"]/div[2]/div[2]/ul/li[1]/a').click()

time.sleep(1)

# TODO 输入用户名和密码
web.find_element(By.XPATH, '//*[@id="J-userName"]').send_keys("username")
web.find_element(By.XPATH, '//*[@id="J-password"]').send_keys("password")
```

#### 2\. 点击登录按钮，完成滑块验证

```python
# 点击登录
web.find_element(By.XPATH, '//*[@id="J-login"]').click()

time.sleep(3)

# 拖拽
btn = web.find_element(By.XPATH, '//*[@id="nc_1_n1z"]')
ActionChains(web).drag_and_drop_by_offset(btn, 300, 0).perform()
time.sleep(3)
```

ActionChains里面有许多动作序列，可以帮助我们完成许多仿人类动作，**记得在最后加perform** ，不然动作序列是不会执行的。

#### 3\. 在个人中心点击购票，跳转

```python
# 车票预定
web.find_element(By.XPATH, '//*[@id="link_for_ticket"]').click()
```

#### 4\. 输入出发地、目的地，从控制台输入得到

从控制台获得信息：

**更新 : 增加了乘车人,便于定位后续购票人**

```python
# 初始化购票信息
print("***欢迎使用自动购票系统***")
print("请依次输入购票信息...")
print("=" * 30)
fromStationText = input("请输入出发地（示例：介休东）...\n")
toStationText = input("请输入目的地（示例：成都东）...\n")
train_date = input("请输入出发日（示例：2023-01-19）...\n")
is_student = input("是否购买学生票？（y/n）\n")
print("=" * 30)
print("处理信息中...\n", "处理完毕，请检查您输入的信息...\n", fromStationText, toStationText, train_date)
confirm = input("是否确认上述信息？（y/n）\n")
if confirm == 'y':
    print("=" * 30)
    print("初始化完毕，开始运行系统...")
if confirm == 'n':
    print("=" * 30)
    print("请重新运行程序！")
    exit(1)
```

修改：可以精简sendkeys操作，将它们放入一行：将信息输入文本框：

```python
# 输入信息（出发地、目的地、出发日）

# 出发地
web.find_element(By.XPATH, '//*[@id="fromStationText"]').click()
web.find_element(By.XPATH, '//*[@id="fromStationText"]').send_keys(fromStationText, Keys.ENTER)
time.sleep(1)

# 目的地
web.find_element(By.XPATH, '//*[@id="toStationText"]').click()
web.find_element(By.XPATH, '//*[@id="toStationText"]').send_keys(toStationText, Keys.ENTER)
time.sleep(1)
```

#### 5\. 文本框输入出发日

```python
# 出发日
# date = web.find_element(By.XPATH, '//*[@id="train_date"]')
# ActionChains(web).drag_and_drop_by_offset(date, 175, 0).perform()
web.find_element(By.XPATH, '//*[@id="train_date"]').clear()
web.find_element(By.XPATH, '//*[@id="train_date"]').send_keys(train_date)
time.sleep(1)
```

#### 6\. 若是学生票则切换票型

```python
# 点击查询
if is_student == 'y':
    web.find_element(By.XPATH, '//*[@id="sf2_label"]').click()
    time.sleep(1)
```

#### 7\. 点击查询

```python
# 点击查询
web.find_element(By.XPATH, '//*[@id="query_ticket"]').click()
print("=" * 30)
print("查询完毕...")
time.sleep(1)
```

#### 8\. 定位预定按钮，点击跳转购票页面

定位思路有两种，一个是**直接找到控件** ，另一个是**相对查找** ，这里我选用第二种。由于第一种的控件地址隐藏较深，无法直接在源代码定位，藏在js里面，所以我们直接**用标头的最后一项相对查找** 就行了。

```python
# 点击预定
# TODO 待办：定位预订控件
get_ticket = web.find_element(By.XPATH, '//*[@id="float"]/th[16]')
ActionChains(web).move_to_element_with_offset(get_ticket, 55, 70).click().perform()
```

但是这样很难精准定位，不能适用所有网页，所以还是实践第一种方法：找到控件：

**最终确认方法： 显示等待**

```python
# 点击预定
WebDriverWait(web, 1000).until(EC.presence_of_element_located((By.XPATH, '//*[@id="queryLeftTable"]/tr')))
tr_list = web.find_elements(By.XPATH, '//*[@id="queryLeftTable"]/tr[not(@datatran)]')  # 每一列列车整行信息列表，列车号元素是tr的子元素
if not tr_list:
    print("=" * 30)
    print(f"很抱歉，按您的查询条件，当前未找到从{fromStationText}到{toStationText}的列车。")
    exit(1)
for tr in tr_list:
    train_num = tr.find_element(By.XPATH, './td[1]/div/div[1]/div/a').text  # 取出元素tr里的列车号
    # 动车二等座余票信息
    text_1 = tr.find_element(By.XPATH, "./td[4]").text
    # 火车二等座余票信息
    text_2 = tr.find_element(By.XPATH, "./td[8]").text
    if (text_1 == "有" or text_1.isdigit()) or (text_2 == "有" or text_2.isdigit()):
        # 点击预订按钮
        order_btn = tr.find_element(By.CLASS_NAME, "btn72")
        order_btn.click()
        # 等待订票页面
        WebDriverWait(web, 1000).until(EC.url_to_be('https://kyfw.12306.cn/otn/confirmPassenger/initDc'))
        print("=" * 30)
        print(train_num, "二等座有票！")
        break
    else:
        print("=" * 30)
        print(train_num, "二等座无票！")
        continue
```

#### 9\. 选择学生乘客，并在弹窗中确认购买学生票

修改：用expected condition（EC）选取处理弹窗事件。

```python
# 跳转页面提交订单
# 选定乘车人
web.find_element(By.XPATH, f'//*[@id="normal_passenger_id"]/li/label[contains(text(),"{passenger}")]').click()
# 如果乘客是学生，对提示点击确定
if EC.presence_of_element_located((By.XPATH, '//div[@id="dialog_xsertcj"]')):
    web.find_element(By.ID, 'dialog_xsertcj_ok').click()
    # 提交订单
    web.find_element(By.ID, 'submitOrder_id').click()
    time.sleep(2)
else:
    # 提交订单
    web.find_element(By.ID, 'submitOrder_id').click()
    time.sleep(2)
```

#### 10\. 提交订单，等待付款

修改：更新了座位ID无法找到的问题，向上定位XPATH再往后确认

```python
# 选座
print("=" * 30)
seat = input("请尽快进行选座操作（[窗]A/B/C/[过道]/D/F[窗]）\n")
if seat == 'A':
    web.find_element(By.XPATH, '//*[@id="erdeng1"]/ul[1]/li[1]/a').click()
if seat == 'B':
    web.find_element(By.XPATH, '//*[@id="erdeng1"]/ul[1]/li[2]/a').click()
if seat == 'C':
    web.find_element(By.XPATH, '//*[@id="erdeng1"]/ul[1]/li[3]/a').click()
if seat == 'D':
    web.find_element(By.XPATH, '//*[@id="erdeng1"]/ul[2]/li[1]/a').click()
if seat == 'F':
    web.find_element(By.XPATH, '//*[@id="erdeng1"]/ul[2]/li[2]/a').click()

# 最终确认
web.find_element(By.XPATH, '//*[@id="qr_submit_id"]').click()

print("=" * 30)
print("*"*40, "\n---***<|订单创建完成，请于10分钟内付款|>***---")
print("*"*40)
```

* * *

### 完整代码

```python
from selenium.webdriver import Chrome
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import time

# 初始化购票信息
print("***欢迎使用自动购票系统***")
print("请依次输入购票信息...")
print("=" * 30)
passenger = input("请输入乘车人（示例：蔡徐坤）...\n")
fromStationText = input("请输入出发地（示例：介休东）...\n")
toStationText = input("请输入目的地（示例：成都东）...\n")
train_date = input("请输入出发日（示例：2023-01-19）...\n")
is_student = input("是否购买学生票？（y/n）\n")
print("=" * 30)
print("处理信息中...\n", "处理完毕，请检查您输入的信息...\n", fromStationText, toStationText, train_date)
confirm = input("是否确认上述信息？（y/n）\n")
if confirm == 'y':
    print("=" * 30)
    print("初始化完毕，开始运行系统...")
if confirm == 'n':
    print("=" * 30)
    print("请重新运行程序！")
    exit(1)

# 2.chrome的版本大于等于88
opt = Options()
# option.add_experimental_option('excludeSwitches', ['enable-automation'])
opt.add_argument('--disable-blink-features=AutomationControlled')
opt.add_experimental_option('detach', True)
opt.add_argument('--start-maximized')  # 浏览器窗口最大

web = Chrome(options=opt)

web.get("https://kyfw.12306.cn/otn/resources/login.html")

web.find_element(By.XPATH, '//*[@id="toolbar_Div"]/div[2]/div[2]/ul/li[1]/a').click()

time.sleep(1)

# TODO 输入用户名和密码
web.find_element(By.XPATH, '//*[@id="J-userName"]').send_keys("18306825490")
web.find_element(By.XPATH, '//*[@id="J-password"]').send_keys("lk020511")

# 点击登录
web.find_element(By.XPATH, '//*[@id="J-login"]').click()

time.sleep(3)

# 拖拽
btn = web.find_element(By.XPATH, '//*[@id="nc_1_n1z"]')
ActionChains(web).drag_and_drop_by_offset(btn, 300, 0).perform()
time.sleep(3)

# 车票预定
web.find_element(By.XPATH, '//*[@id="link_for_ticket"]').click()

# 输入信息（出发地、目的地、出发日）

# 出发地
web.find_element(By.XPATH, '//*[@id="fromStationText"]').click()
web.find_element(By.XPATH, '//*[@id="fromStationText"]').send_keys(fromStationText, Keys.ENTER)
time.sleep(1)

# 目的地
web.find_element(By.XPATH, '//*[@id="toStationText"]').click()
web.find_element(By.XPATH, '//*[@id="toStationText"]').send_keys(toStationText, Keys.ENTER)
time.sleep(1)

# 出发日
web.find_element(By.XPATH, '//*[@id="train_date"]').clear()
web.find_element(By.XPATH, '//*[@id="train_date"]').send_keys(train_date)
time.sleep(1)

# 点击查询
if is_student == 'y':
    web.find_element(By.XPATH, '//*[@id="sf2_label"]').click()
    time.sleep(1)
web.find_element(By.XPATH, '//*[@id="query_ticket"]').click()
print("=" * 30)
print("查询完毕...")
time.sleep(1)

# 点击预定
WebDriverWait(web, 1000).until(EC.presence_of_element_located((By.XPATH, '//*[@id="queryLeftTable"]/tr')))
tr_list = web.find_elements(By.XPATH, '//*[@id="queryLeftTable"]/tr[not(@datatran)]')  # 每一列列车整行信息列表，列车号元素是tr的子元素
if not tr_list:
    print("=" * 30)
    print(f"很抱歉，按您的查询条件，当前未找到从{fromStationText}到{toStationText}的列车。")
    exit(1)
for tr in tr_list:
    train_num = tr.find_element(By.XPATH, './td[1]/div/div[1]/div/a').text  # 取出元素tr里的列车号
    # 动车二等座余票信息
    text_1 = tr.find_element(By.XPATH, "./td[4]").text
    # 火车二等座余票信息
    text_2 = tr.find_element(By.XPATH, "./td[8]").text
    if (text_1 == "有" or text_1.isdigit()) or (text_2 == "有" or text_2.isdigit()):
        # 点击预订按钮
        order_btn = tr.find_element(By.CLASS_NAME, "btn72")
        order_btn.click()
        # 等待订票页面
        WebDriverWait(web, 1000).until(EC.url_to_be('https://kyfw.12306.cn/otn/confirmPassenger/initDc'))
        print("=" * 30)
        print(train_num, "二等座有票！")
        break
    else:
        print("=" * 30)
        print(train_num, "二等座无票！")
        continue


# 跳转页面提交订单
# 选定乘车人
web.find_element(By.XPATH, f'//*[@id="normal_passenger_id"]/li/label[contains(text(),"{passenger}")]').click()
# 如果乘客是学生，对提示点击确定
if EC.presence_of_element_located((By.XPATH, '//div[@id="dialog_xsertcj"]')):
    web.find_element(By.ID, 'dialog_xsertcj_ok').click()
    # 提交订单
    web.find_element(By.ID, 'submitOrder_id').click()
    time.sleep(2)
else:
    # 提交订单
    web.find_element(By.ID, 'submitOrder_id').click()
    time.sleep(2)

# 选座
print("=" * 30)
seat = input("请尽快进行选座操作（[窗]A/B/C/[过道]/D/F[窗]）\n")
if seat == 'A':
    web.find_element(By.XPATH, '//*[@id="erdeng1"]/ul[1]/li[1]/a').click()
if seat == 'B':
    web.find_element(By.XPATH, '//*[@id="erdeng1"]/ul[1]/li[2]/a').click()
if seat == 'C':
    web.find_element(By.XPATH, '//*[@id="erdeng1"]/ul[1]/li[3]/a').click()
if seat == 'D':
    web.find_element(By.XPATH, '//*[@id="erdeng1"]/ul[2]/li[1]/a').click()
if seat == 'F':
    web.find_element(By.XPATH, '//*[@id="erdeng1"]/ul[2]/li[2]/a').click()

# 最终确认
web.find_element(By.XPATH, '//*[@id="qr_submit_id"]').click()

print("=" * 30)
print("*"*40, "\n---***<|订单创建完成，请于10分钟内付款|>***---")
print("*"*40)
```

* * *

### 运行效果

![](/images/posts/28.-实战：基于selenium实现12306自动购票/6dbf8c615639.png)

![](/images/posts/28.-实战：基于selenium实现12306自动购票/66fbdc39aabf.png)

![](/images/posts/28.-实战：基于selenium实现12306自动购票/027f52eadef8.png)

![](/images/posts/28.-实战：基于selenium实现12306自动购票/7ec764af76c7.png)

![](/images/posts/28.-实战：基于selenium实现12306自动购票/80970b419e47.png)

![](/images/posts/28.-实战：基于selenium实现12306自动购票/ef45ceb120c6.png)

![](/images/posts/28.-实战：基于selenium实现12306自动购票/2fbb2700ee22.png)

![](/images/posts/28.-实战：基于selenium实现12306自动购票/4e94076583e6.png)

![](/images/posts/28.-实战：基于selenium实现12306自动购票/09a787148650.png)

![](/images/posts/28.-实战：基于selenium实现12306自动购票/417b1681a1a1.png)

![](/images/posts/28.-实战：基于selenium实现12306自动购票/64bc76e11779.png)

* * *

### 总结

本节是基于selenium的浏览器自动化操作的实例，较为综合，涉及的知识点也比较多，仅供小伙伴们参考学习，请勿用于其他用途！

不太明白的小伙伴可以移步我之前发布过的[selenium基础](https://blog.csdn.net/m0_59180666/article/details/128699574?spm=1001.2014.3001.5501 "selenium基础")和[简单的验证码实战](https://blog.csdn.net/m0_59180666/article/details/128707095?spm=1001.2014.3001.5501 "简单的验证码实战")
