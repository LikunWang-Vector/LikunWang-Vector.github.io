---
type: post
csdn: true
title: "24. 实战：用异步法获取完整的一部小说"
date: "2023-01-11"
lastmod: "2023-01-11"
authors:
  - admin
tags:
  - "爬虫"
  - "异步爬虫"
  - "asyncio"
  - "aiohttp"
  - "aiofiles"
  - "CSDN"
categories:
  - "Python爬虫入门、进阶与实战"
summary: "我们已经学会了异步爬虫的框架和简单的示例，详见23\\. 异步HTTP请求与aiohttp模块。"
image:
  filename: "covers/csdn-python-crawler.png"
  caption: "CSDN Archive · PYTHON · CRAWLER"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128649022"
csdn_views: 793
csdn_likes: 7
csdn_comments: 8
csdn_favorites: 8
---

> 本文迁移自CSDN博客
> 原文链接：[24. 实战：用异步法获取完整的一部小说](https://blog.csdn.net/m0_59180666/article/details/128649022)
> 📊 793 阅读 | 👍 7 点赞 | 💬 8 评论 | ⭐ 8 收藏


### 前言

我们已经学会了异步爬虫的框架和简单的示例，详见[23\. 异步HTTP请求与aiohttp模块](https://blog.csdn.net/m0_59180666/article/details/128640512 "23. 异步HTTP请求与aiohttp模块")。

本节我们通过一个实战来巩固异步爬虫的用法：抓取整部小说的内容。

* * *

### 目的

利用异步爬虫高效爬取整部小说

* * *

### 思路

  1. 获取小说内容的url
  2. 获取网页数据
  3. 保存到本地

* * *

### 代码实现

#### 1\. 尝试获取小说内容的URL**（在评论区）**

![](/images/posts/24.-实战：用异步法获取完整的一部小说/013093aa699c.png)

打开网页（**网页链接放评论区了！！！** ），发现目录等内容，点击章节就能跳转到对应内容中。我们先检查页面源代码查看数据是否在源代码中。

#### 2\. 查看页面源代码

![](/images/posts/24.-实战：用异步法获取完整的一部小说/695bb5539228.png)

可以看到源代码才不到30行，我们的数据肯定不在这里面...

那我们只能祭出**F12大法：抓包工具** 登场。

#### 3\. 抓包工具登场

![](/images/posts/24.-实战：用异步法获取完整的一部小说/255bd7512ec9.png)

切换到网络——Fetch/XHR——刷新页面就得到了这三个动态请求。打开getCatalog（获取目录），点击预览，就能看到一大堆名称了，这就是我们要拿的所有章节名称和它的id了。但是内容还没有出现。

![](/images/posts/24.-实战：用异步法获取完整的一部小说/ecd1d750ec0e.png)

切换到下一个getChapterContent（获取章节内容），打开果然发现了文本！这就是我们要的内容。

最后切换到标头，就能获取到我们的目标URL和请求方式等信息。

请求方式：

> GET

#### 4\. 开始写代码，先捋清思路

```python
""" 1\. 同步操作: 访问getCatalog 拿到所有章节的cid和名称 2\. 异步操作: 访问getChapterContent 下载所有的文章内容 """
```

我们得到的URL最后有一堆“乱码”，但其实我们发现还是有规律的。一般URL后面都会加问号和属性加属性值。但我们现在这个URL不走寻常路，但是仔细观察里面有一堆“%22”，它是什么呢？

**其实，它就是ASCII码中的双引号。参阅[百度百科](https://baike.baidu.com/item/URL%E7%BC%96%E7%A0%81/3703727?fr=aladdin "百度百科")**。它包含着URL所需要的参数。

思路明确以后先画出一个框架：

```python
async def aiodownload(cid, b_id, title):
    pass


async def getCatalog(url):
    pass


if __name__ == '__main__':
    b_id = "4306063500"
    url = 'http://dushu.？？？？.com/api/pc/getCatalog?data={"book_id":"' + b_id + '"}'
    asyncio.run(getCatalog(url))
```

#### 5\. 完善getCatalog函数

```python
async def getCatalog(url):
    resp = requests.get(url)
    dic = resp.json()
    tasks = []
    for item in dic['data']['novel']['items']:  # item就是对应每一个章节的名称和cid
        title = item['title']
        cid = item['cid']
        # 准备异步任务
        tasks.append(aiodownload(cid, b_id, title))
    await asyncio.wait(tasks)
```

先把返回值转为json数据，然后从中提取title和cid两项属性，然后把参数传入aiodownload函数。

（中间调试程序、打印出json数据内容、一层层找到要的属性就不多讲了）

#### 6\. 完善aiodownload函数

```python
async def aiodownload(cid, b_id, title):
    data = {
        "book_id": b_id,
        "cid": f"{b_id}|{cid}",
        "need_bookinfo": 1
    }
    data = json.dumps(data)
    url = f"http://dushu.？？？？.com/api/pc/getChapterContent?data={data}"

    async with aiohttp.ClientSession() as session:
        async with session.get(url) as resp:
            dic = await resp.json()
            chapter = dic['data']['novel']['chapter_index']
            async with aiofiles.open(f"./Novel_Journey_to_the_West/{chapter}_{title}", mode="w", encoding="GB18030") as f:
                await f.write(dic['data']['novel']['content'])  # 把小说内容写出
```

我们观察目标URL发现，它需要传入的数据有三项，分别是book_id、cid、need_bookinfo。

这里我们的数据是字典形式，但是我们要想写到URL中就必须转为字符串形式，就要用到dumps这个接口。查看官方文档：

> 
>     Serialize ``obj`` to a JSON formatted ``str``

它的含义就是把json数据转换为合规的字符串形式。

为了防止输入以后还是乱序，我们再拿出一个chapter_index这个属性，它是数字形式的顺序，这样就可以放在文件名开始，下载完成按名称排序就能按顺序了！

* * *

### 完整代码

```python
import requests import asyncio import aiohttp import aiofiles import json """ 1\. 同步操作: 访问getCatalog 拿到所有章节的cid和名称 2\. 异步操作: 访问getChapterContent 下载所有的文章内容 """ async def aiodownload(cid, b_id, title): data = { "book_id": b_id, "cid": f"{b_id}|{cid}", "need_bookinfo": 1 } data = json.dumps(data) url = f"http://dushu.？？？？.com/api/pc/getChapterContent?data={data}" async with aiohttp.ClientSession() as session: async with session.get(url) as resp: dic = await resp.json() chapter = dic['data']['novel']['chapter_index'] async with aiofiles.open(f"./Novel_Journey_to_the_West/{chapter}_{title}", mode="w", encoding="GB18030") as f: await f.write(dic['data']['novel']['content']) # 把小说内容写出 async def getCatalog(url): resp = requests.get(url) dic = resp.json() # print(dic) tasks = [] for item in dic['data']['novel']['items']: # item就是对应每一个章节的名称和cid title = item['title'] cid = item['cid'] # 准备异步任务 tasks.append(aiodownload(cid, b_id, title)) await asyncio.wait(tasks) if __name__ == '__main__': b_id = "4306063500" url = 'http://dushu.？？？？.com/api/pc/getCatalog?data={"book_id":"' + b_id + '"}' asyncio.run(getCatalog(url))
```

* * *

### 运行效果

![](/images/posts/24.-实战：用异步法获取完整的一部小说/67c850ac2e99.png)

![](/images/posts/24.-实战：用异步法获取完整的一部小说/a820eab99f24.png)

* * *

### 总结

本节我们学习了异步爬虫的实战，爬取了一整本小说（这里我以西游记为例，大家可以自己爬点别的，换URL就行了）。下面我们将学习视频的抓取（m3u8格式）。
