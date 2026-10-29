---
type: post
csdn: true
title: "17. 实战：手把手通关某音乐平台热门评论"
date: "2023-01-05"
lastmod: "2023-01-05"
authors:
  - admin
tags:
  - "python"
  - "数据分析"
  - "同态加密"
  - "js"
  - "CSDN"
categories:
  - "Python爬虫入门、进阶与实战"
summary: "众所周知，某音乐平台的评论区金句频出，热门评论更是美不胜收，我们也想要批量获取这些信息来做信息分析，数据处理等工作，也可以陶冶自己的情操，一举多得。所以我们今天来尝试获取某音乐平台的评论区。"
image:
  filename: "covers/csdn-python-crawler.png"
  caption: "CSDN Archive · PYTHON · CRAWLER"
csdn_url: "https://blog.csdn.net/m0_59180666/article/details/128556505"
csdn_views: 347
csdn_likes: 2
csdn_comments: 3
csdn_favorites: 8
---

> 本文迁移自CSDN博客
> 原文链接：[17. 实战：手把手通关某音乐平台热门评论](https://blog.csdn.net/m0_59180666/article/details/128556505)
> 📊 347 阅读 | 👍 2 点赞 | 💬 3 评论 | ⭐ 8 收藏


### 前言

众所周知，某音乐平台的评论区金句频出，热门评论更是美不胜收，我们也想要批量获取这些信息来做信息分析，数据处理等工作，也可以陶冶自己的情操，一举多得。所以我们今天来尝试获取某音乐平台的评论区。

* * *

### 目的

获取某音乐平台评论区数据

* * *

### 保姆级思路

访问想要获取评论的网页

**链接在评论区！！！！！！！链接在评论区！！！！！！！链接在评论区！！！！！！！**

查看页面源代码，看是否包含评论信息：

以下图的评论为例

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/b61cfee9840a.png)

在页面源代码中CRTL+F查找：

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/d8de71abfee5.png)

可以看到源代码中是不存在的，那就要另找办法了。我们前面练习过，如果源代码没有，那大概率就是在js请求中获取信息了。 

所以我们依旧来到开发者工具，进入网络模块，筛选XHR选项，刷新页面，获得一堆信息。 

**F12--网络--Fetch/XHR--刷新--↓**

通过筛选（一个个找），最后找到了get comment请求：

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/ec55260f3601.png)

在预览页面验证一下是否真的有信息：

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/f870a4a62f7d.png)

发现没问题，精准定位。 

我们可以获取的信息是：页面URL与请求方式为POST

```python
url = "见评论区" # 请求方式是POST
```

但是现在陷入僵局，查看负载（也就是传递的参数）发现，参数都是被加密的：

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/472009e95bb4.png)

这个时候我们就要查看是哪些代码把我们要的参数给加密了，我们要查看“发起程序”一栏，检查调用堆栈，在堆栈最后进入的请求入手， 通过调用堆栈的请求反向查找params参数未被加密的时的数据以及参数列表等有效信息。

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/d6d6182c8cef.png)

进入这个代码部分，找到源代码。 

找到源代码的时候先点击左下角format一下，开发者工具会自动帮助我们排版，这样方便我们查找信息。

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/62a0303e1a2f.png)

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/a8c34a6a9358.png)

堆栈最后进入的请求定位到了send这里，那么就在这里打一个断点看会发生什么。我们的目标是带有comments的url。

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/d6820b5b602b.png)

往前找一级，发现参数仍加密

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/84476d56d572.png)

继续查找，仍加密

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/f3a115c21822.png)

继续查找，仍加密

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/d632375875fd.png)

继续查找，仍加密 

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/8e100b428f2c.png)

继续查找，这个时候发现参数是可读的，说明此时还未被加密。

所以我们可以推知是在u7n.be8w这部分被加密的。

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/65891c72f6fc.png)

我们返回u7n部分，找到这部分代码，就知道它是我们想要的加密代码段。

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/de9a17a947af.png)

我们可以敏锐地发现，在作用域中，i7b参数包含的信息和刚刚我们看到的未加密参数是一致的，而源代码中，即加密算法中不断地对i7b进行修改，也可以推知就是对i7b这个传参参数进行加密，将加密的参数传递到后续中。

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/37f2e8e3b574.png)

为了逐步研究加密算法，我们要先把这个加密函数打一个断点，逐步对他进行观察是如何加密的，当然在此之前我们也要把我们一开始打的断点取消掉。

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/2e04f61f813f.png)

刷新页面，继续执行代码直到带comments的url出现

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/7e72113593f4.png)

随后逐步执行代码，直到i7b参数存放数据，也就意味着加密开始了。

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/f78b88fbfa2b.png)

执行到如图所示的13422行时，i7b的参数已经传入，并且和data是一致的。

此时我们获取到了真正要传入的参数列表：

```python
csrf_token: ""
cursor: "-1"
offset: "0"
orderType: "1"
pageNo: "1"
pageSize: "20"
rid: "R_SO_4_1807799505"
threadId: "R_SO_4_1807799505"
```

写为字典形式：

```python
data = {
    "csrf_token": "",
    "cursor": "-1",
    "offset": "0",
    "orderType": "1",
    "pageNo": "1",
    "pageSize": "20",
    "rid": "R_SO_4_1807799505",
    "threadId": "R_SO_4_1807799505"
}
```

再单步执行，进一步后，观察参数：

发现多出一个参数bMr5w，它的参数是被加密的，是在window.asrsea这个函数里传入i7b参数后加密的，那么我们就要从这里再次入手。

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/07b268625cf8.png)

观察函数，可以发现：

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/13ce441a1829.png)

新生成参数的两个属性值都被赋给了data，相当于把数据替换成了加密后数据，我们再单步执行进行验证：

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/7511bee0d6ee.png)

可以看到和预想一样，data已经被加密了。

所以我们更加笃定，加密过程就是在 window.asrsea 这个函数里面进行的。

我们所要寻找的params其实就是encText，encSecKey就是encSecKey。

所以我们再次把目光转移到 window.asrsea 这个函数，在源代码中CTRL+F查找：

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/899876d9c29e.png)

我们发现只有两处，一处就是上图所示的，另一处就是加密函数了，那么这里看到d将它的值赋给了 window.asrsea ，那么我们再去溯源d。

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/050455b76080.png)

在这段代码上面直接就呈现了几个函数：a,b,c,d,e。观察到函数e是赋值给window.ecnonasr，和我们的加密算法无关，所以我们只需要研究abcd四个函数。

入口在函数d，那么我们返回源代码查看调用的实参是什么：

```html
var bMr5w = window.asrsea(JSON.stringify(i7b), bsg1x(["流泪", "强"]), bsg1x(TH2x.md), bsg1x(["爱心", "女孩", "惊恐", "大笑"]));
```

发现第一个参数d就是**JSON.stringify(i7b)** ，可以将js对象i7b内包含的数据转换成字符串，也就是我们的data。

第二个参数e是**bsg1x(["流泪", "强"])** ，我们不知道它运行是什么结果，那我们可以直接去开发者工具自带的控制台，丢进控制台让浏览器用已知的源代码帮我们处理这份“乱码”：

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/db3f10373835.png)

不管执行多少次，这个参数的值都是固定的：‘010001’ 。

后面两个参数如法炮制，发现都是定值：

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/e06faacc58f9.png)

参数f、g都是定值，可以在py文件里单独定义，避免单行代码过长，影响debug。

随后来到源代码的这一行代码：

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/2966de2feafd.png)

参数i是函数a参数为16时运行的结果。那么再观察函数a：

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/2715a246d0f7.png)

分析代码：

```html
function a(a = 16) {  # 随机的16位字符串
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
        for (d = 0; a > d; d += 1)  # 循环16次
            e = Math.random() * b.length,  # 随机数 1.2345
            e = Math.floor(e),  # 向下取整  1
            c += b.charAt(e);  # 取字符串中的xxx位置 b
        return c
    }
```

经过分析，它就是返回一个16位的字符串。

再回头分析函数：

```html
function c(a, b, c) {   # c里面不产生随机数
        var d, e;
        return setMaxDigits(131),
        d = new RSAKeyPair(b,"",c),
        e = encryptedString(d, a)
    }
function d(d, e, f, g) {  d: 数据,   e: 010001, f: 很长, g: 0CoJUm6Qyw8W8jud
        var h = {}  # 空对象
          , i = a(16);  # i就是一个16位的随机值, 把i设置成定值
        h.encText = b(d, g)
        h.encText = b(h.encText, i)
        h.encSecKey = c(i, e, f)  # 得到的就是encSecKey, e和f是定死的 ,如果此时我把i固定, 得到的key一定是固定的
        return h
    }
```

由于函数c是不产生随机数的，如果此时把 i 参数固定，那么函数 c 的返回值也固定。

我们尝试运行一次来获取一个 i ，并把它固定：

我们在函数d的结束大括号上打一个断点，让浏览器截取到函数d的返回值：

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/2f115c1312ae.png)

可以看到我们获取了一个随机的 i ，我们可以把它固定。

这个时候也可以单独写到参数列表了：

```python
# 服务于d的
e = "010001"
f = "00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7"
g = "0CoJUm6Qyw8W8jud"
i = "UgGKZzAFQUxcBYYu"  # 手动固定的. -> 人家函数中是随机的
```

再次运行源代码，在加密函数下一行打断点，观察加密函数的返回值encSecKey，由于函数c所有参数值都已经固定，那么encSecKey的值也不会变，因为它就是由函数c产生的。

所以我们可以写返回encSecKey的函数：

```python
def get_encSecKey():  # 由于i是固定的. 那么encSecText就是固定的.  c()函数的结果就是固定的
    return "594dc41fe1f0b846120c4f0bf0f6df947502e39b8209c6a34aed10693be11fc84453bc3c3b60eaff90ace02a028f1c2e4546fccbc9d98ca151f3b1a660963895e865a25db8196afaf636e83ca639ffa9c2c17dfd29179d335bb6a2cd9932d43b264cc3a47d4e5b6c85b06b59534d62bf5a02f4aa04be411385865a151040a40c"
```

现在只差一个参数params，也就是要研究函数b：

```html
function b(a, b) {  # a是要加密的内容（数据）,
        var c = CryptoJS.enc.Utf8.parse(b) #  # b：秘钥
          , d = CryptoJS.enc.Utf8.parse("0102030405060708")
          , e = CryptoJS.enc.Utf8.parse(a)  # e：数据
          , f = CryptoJS.AES.encrypt(e, c, {  # c：加密的秘钥
            iv: d,  # 偏移量
            mode: CryptoJS.mode.CBC  # 模式: cbc
        });
        return f.toString()
    }
```

AES加密算法要三个参数：原文 密钥 偏移量。iv是偏移量，e是原文。所以可以推断出c是密钥。

所以函数d现在分析完毕：

```html
function d(d, e, f, g) {  d: 数据,   e: 010001, f: 很长, g: 0CoJUm6Qyw8W8jud
        var h = {}  # 空对象
          , i = a(16);  # i就是一个16位的随机值, 把i设置成定值
        h.encText = b(d, g)  # g秘钥
        h.encText = b(h.encText, i)  # 返回的就是params  i也是秘钥
        h.encSecKey = c(i, e, f)  # 得到的就是encSecKey, e和f是定死的 ,如果此时我把i固定, 得到的key一定是固定的
        return h
    }
```

可以发现params进行了两次加密：数据+g => b => 第一次加密+i => b = params

现在我们两个重要参数：params和encSecKey已经搞定，现在可以开始正式写代码了：

我们通过仿照加密过程写下三个函数：

```python
# 把参数进行加密
def get_params(data):  # 默认这里接收到的是字符串
    first = enc_params(data, g)
    second = enc_params(first, i)
    return second  # 返回的就是params

# 转化成16的倍数, 位下方的加密算法服务
def to_16(data):
    pad = 16 - len(data) % 16
    data += chr(pad) * pad
    return data

# 加密过程
def enc_params(data, key):
    iv = "0102030405060708"
    data = to_16(data)
    aes = AES.new(key=key.encode("utf-8"), IV=iv.encode('utf-8'), mode=AES.MODE_CBC)  # 创建加密器
    bs = aes.encrypt(data.encode("utf-8"))  # 加密, 加密的内容的长度必须是16的倍数
    return str(b64encode(bs), "utf-8")  # 转化成字符串返回
```

get_params模拟的是两次加密，to_16函数是为了把加密内容都扩展成16位字符串，enc_params模拟的是函数b的加密过程，最后解码不能直接把字节转换字符串，需要用到base64编码，并且如果要调用AES算法也是要导包的。我们要导入这两个库：

```python
from Crypto.Cipher import AES
from base64 import b64encode
```

调用AES算法的库函数安装方法：

**pip install pycryptodome**

最后我们写主函数来测试能不能抓到评论信息：

```python
# 发送请求. 得到评论结果
resp = requests.post(url, data={
    "params": get_params(json.dumps(data)),
    "encSecKey": get_encSecKey()
})

print(resp.text)
```

这里我们要把字典转化成字符串才能供函数进行处理，否则是无法运行成功的。

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/044968f7b540.png)

可以看到已经成功运行，拿到了评论数据。

* * *

### 最后奉上完整代码 

```python
# 1. 找到未加密的参数                       # window.arsea(参数, xxxx,xxx,xxx)
# 2. 想办法把参数进行加密(必须参考网易的逻辑), params  => encText, encSecKey => encSecKey
# 3. 请求到网易. 拿到评论信息

# 需要安装pycrypto:   pip install pycrypto
from Crypto.Cipher import AES
from base64 import b64encode
import requests
import json

url = "见评论区"

# 请求方式是POST
data = {
    "csrf_token": "",
    "cursor": "-1",
    "offset": "0",
    "orderType": "1",
    "pageNo": "1",
    "pageSize": "20",
    "rid": "R_SO_4_1807799505",
    "threadId": "R_SO_4_1807799505"
}

# 服务于d的
e = "010001"
f = "00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7"
g = "0CoJUm6Qyw8W8jud"
i = "UgGKZzAFQUxcBYYu"  # 手动固定的. -> 人家函数中是随机的


def get_encSecKey():  # 由于i是固定的. 那么encSecText就是固定的.  c()函数的结果就是固定的
    return "594dc41fe1f0b846120c4f0bf0f6df947502e39b8209c6a34aed10693be11fc84453bc3c3b60eaff90ace02a028f1c2e4546fccbc9d98ca151f3b1a660963895e865a25db8196afaf636e83ca639ffa9c2c17dfd29179d335bb6a2cd9932d43b264cc3a47d4e5b6c85b06b59534d62bf5a02f4aa04be411385865a151040a40c"


# 把参数进行加密
def get_params(data):  # 默认这里接收到的是字符串
    first = enc_params(data, g)
    second = enc_params(first, i)
    return second  # 返回的就是params


# 转化成16的倍数, 位下方的加密算法服务
def to_16(data):
    pad = 16 - len(data) % 16
    data += chr(pad) * pad
    return data


# 加密过程
def enc_params(data, key):
    iv = "0102030405060708"
    data = to_16(data)
    aes = AES.new(key=key.encode("utf-8"), IV=iv.encode('utf-8'), mode=AES.MODE_CBC)  # 创建加密器
    bs = aes.encrypt(data.encode("utf-8"))  # 加密, 加密的内容的长度必须是16的倍数
    return str(b64encode(bs), "utf-8")  # 转化成字符串返回


# 处理加密过程
"""
    function a(a = 16) {  # 随机的16位字符串
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
        for (d = 0; a > d; d += 1)  # 循环16次
            e = Math.random() * b.length,  # 随机数 1.2345
            e = Math.floor(e),  # 取整  1
            c += b.charAt(e);  # 去字符串中的xxx位置 b
        return c
    }
    function b(a, b) {  # a是要加密的内容,
        var c = CryptoJS.enc.Utf8.parse(b) #  # b是秘钥
          , d = CryptoJS.enc.Utf8.parse("0102030405060708")
          , e = CryptoJS.enc.Utf8.parse(a)  # e是数据
          , f = CryptoJS.AES.encrypt(e, c, {  # c 加密的秘钥
            iv: d,  # 偏移量
            mode: CryptoJS.mode.CBC  # 模式: cbc
        });
        return f.toString()
    }
    function c(a, b, c) {   # c里面不产生随机数
        var d, e;
        return setMaxDigits(131),
        d = new RSAKeyPair(b,"",c),
        e = encryptedString(d, a)
    }
    function d(d, e, f, g) {  d: 数据,   e: 010001, f: 很长, g: 0CoJUm6Qyw8W8jud
        var h = {}  # 空对象
          , i = a(16);  # i就是一个16位的随机值, 把i设置成定值
        h.encText = b(d, g)  # g秘钥
        h.encText = b(h.encText, i)  # 返回的就是params  i也是秘钥
        h.encSecKey = c(i, e, f)  # 得到的就是encSecKey, e和f是定死的 ,如果此时我把i固定, 得到的key一定是固定的
        return h
    }

    两次加密:
    数据+g => b => 第一次加密+i => b = params
"""

# 发送请求. 得到评论结果
resp = requests.post(url, data={
    "params": get_params(json.dumps(data)),
    "encSecKey": get_encSecKey()
})

print(resp.json())
```

* * *

### 运行效果

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/61beb145adb7.png)

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/2e0abc1a8aed.png)

可以看到已经成功拿到了评论，后续再进行任何处理都是可以的，这里就不再深入研究了。
