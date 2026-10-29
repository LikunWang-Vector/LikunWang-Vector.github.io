---
type: post
csdn: true
title: "04. requests模块入门与三个案例（搜狗搜索/百度翻译/豆瓣电影）"
date: "2022-12-28"
lastmod: "2022-12-28"
authors:
  - admin
tags:
  - "python"
  - "开发语言"
  - "爬虫"
  - "百度"
  - "CSDN"
categories:
  - "Python爬虫入门、进阶与实战"
summary: "在前面小节中，我们使用urllib来抓取页面源代码，这是python内置的一个模块，但它并不是我们常用的爬虫工具。"
image:
  filename: "covers/csdn-python-crawler.png"
  caption: "CSDN Archive · PYTHON · CRAWLER"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128471531"
csdn_views: 1185
csdn_likes: 1
csdn_comments: 3
csdn_favorites: 9
---

> 本文迁移自CSDN博客
> 原文链接：[04. requests模块入门与三个案例（搜狗搜索/百度翻译/豆瓣电影）](https://blog.csdn.net/m0_59180666/article/details/128471531)
> 📊 1185 阅读 | 👍 1 点赞 | 💬 3 评论 | ⭐ 9 收藏


前言

在前面小节中，我们使用urllib来抓取页面源代码，这是python内置的一个模块，但它并不是我们常用的爬虫工具。

常用的抓取页面的模块是第三方模块——requests。这个模块的优势就是比urllib还要简单，并且处理各种请求都很方便。

* * *

### requests的安装

既然是第三方模块，那就需要我们对该模块进行安装，安装方法：

#### 1\. cmd中输入安装

① 按下win+R，输入cmd，按下回车

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/c1cbbc3abfb2.png)

② 输入pip install requests

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/288a65dee119.png)

如果安装速度慢的话可以改用国内镜像源安装：

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/8c861acca5af.png)

#### 2\. PyCharm中运行安装

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/253c2177e363.png)

如果安装速度慢的话可以改用国内镜像源安装：

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/464e99ad24df.png)

#### 3\. Anaconda虚拟环境中安装

① 打开Anaconda 3 Prompt

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/82e3d9af4c24.png)

② 创建一个虚拟环境（如果有则跳过这步）

输入conda create -n 环境名 python=X.X，按下回车

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/d0543bcb4d90.png)

等待后出现下面的界面，输入y，回车![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/47b2bfa6bd2b.png)

等待后可以看到已经创建成功

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/2053071a4a95.png)

③ 激活虚拟环境

输入conda activate 环境名，或者输入activate 环境名

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/1504d02cf78b.png)

输入pip install requests

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/148346287164.png)

如果安装速度慢的话可以改用国内镜像源安装：

pip install requests -i https://pypi.tuna.tsinghua.edu.cn/simple requests

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/4a9f53065c6c.png)

还可以用conda安装，输入conda install requests

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/e7bfb1eb3dca.png)

输入y，回车

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/675fcbc46559.png)

等待后出现done，安装成功。

#### 4\. 检查是否安装成功

① 可以在py文件中import requests看是否报错

② 可以在3.中提到的几种方法里输入pip list回车查看已安装库函数列表（以Anaconda为例）

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/eaa4c1e406e5.png)

可以看到requests已经在我们的已安装列表中了，安装完成。 

* * *

### 案例1. 抓取搜狗搜索内容

```
import requests

url = 'https://www.so.com/s?ie=utf-8&src=dlm_b_cube&shb=1&hsid=0d7b9150b571cec3&ls=n144c1cd899&ssid=&q=周杰伦'

ua = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36 Edg/104.0.1293.54"
}

# resp = requests.get(url)  # 这样可能造成拦截，被识别出爬虫程序，需要用User-Agent后的参数，即headers进行修饰
resp = requests.get(url, headers=ua)  # 处理一个小小的反爬

print(resp)
print(resp.text)  # 拿到页面源代码
resp.close()
```

其中，url可以自行修改，想获取哪个搜索界面的源代码，就从哪个页面复制来网页url；

ua，即User-Agent，需要从上一节提到的响应头中粘贴自己的ua。

第9/10行代码处理了一个小小的反爬，可以将我们的py程序发出请求的ua（即用户代理）“伪装”成正常的浏览器，而非编程软件。

* * *

### 案例2 利用百度翻译网站制作一个自己的翻译小程序

```
import requests

url = "https://fanyi.baidu.com/sug"

s = input("请输入你要翻译的英文单词：")
dat = {
    "kw": s
}

# 发送post请求，发送的数据必须放在字典中，通过data参数进行传递
resp = requests.post(url, data=dat)
# print(resp.text)  # 这样中文会出现代码，不利于提取数据
resp_json = resp.json()  # 将服务器返回的内容直接处理成json() => 也即python中的字典dict
print(resp_json['data'][0]['v'])  # 拿到返回字典的内容
resp.close()
```

此代码不用更改，可以直接使用。

注意 https://fanyi.baidu.com/sug 这个url，通过F12可以得知，它是通过post方式提交的，所以我们也要模拟post请求，使用requests.post()这个api，返回到resp中，再将返回的数据直接处理成json数据（相当于Python中的字典）。直接打印这个json，信息比较多比较复杂，观感差。我们选择性打印对应需要的内容就可以显示我们想要的翻译结果了，观看较好~

运行示例：

![](/images/posts/04.-requests模块入门与三个案例（搜狗搜索百度翻译/6d5201cea850.png)

可以看到已经完美“搬运”了百度翻译的结果！对于我们初学者还是很有成就感的~ 

* * *

### 案例3 豆瓣电影高分排行榜读取

```
import requests

# url = "https://movie.douban.com/j/chart/top_list?type=24&interval_id=100%3A90&action=&start=0&limit=20"
# 参数太多太复杂，用f{}替换太繁琐

url = "https://movie.douban.com/j/chart/top_list"
# 重新封装参数
param = {
    "type": "24",
    "interval_id": "100:90",
    "action": "",
    "start": 0,
    "limit": 20,
}

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36 Edg/104.0.1293.54"
}
# resp = requests.get(url=url, params=param)    #还需重新装填headers，因为被反爬了
resp = requests.get(url=url, params=param, headers=headers)

print(resp.request.url)  # 显示实际访问的网页，即url+?+params
# print(resp.text)  # 什么都不显示说明被反爬了，首先要检查UA
# print(resp.request.headers) # 检查headers是否有问题    #{'User-Agent': 'python-requests/2.27.1', 'Accept-Encoding': 'gzip, deflate', 'Accept': '*/*', 'Connection': 'keep-alive'}
print(resp.json())

# start的作用：从top几开始
# limit的作用：一次查询几名

resp.close()  # 关掉resp，否则可能出现请求口堵死的情况
```

这里我们用了一个巧妙的地方，因为看到原本的url太长太复杂太繁琐，所以我们就另辟蹊径，重新封装了一组参数，也就是把top_list后面的参数都封装进param里，便于我们后续修改。

headers也就是我们之前提到的ua，可以自行修改参数名，这个无所谓的~

这里我们用的是get方式请求，和案例2不同。其实也很好理解，我们之前提到过，post是上传修改，get是获取下载，所以百度翻译需要post我们想要翻译的词语，而豆瓣电影网需要get我们想要获取的信息。

在get请求中，我们的param封装的内容会自动添加到url后面，自动拼接成我们最开始看到的那个冗长的代码！其实我们start的作用就是从第几名开始。limit的作用就是一次查询几名，知道这两个条件以后其实可以写一个循环，循环n次从而执行出豆瓣电影前20n的排名详情。

* * *

### 总结

本节我们学会了requests模块的安装，成功编写了三个简单的爬虫案例，认识了两种不同请求方式的requests用法，增添了学习兴趣，增强了编程的自信心，希望大家可以和我一起共同进步，一起努力~
