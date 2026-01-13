---
title: "17. Practical: Scraping Music Platform Comments Step by Step"
date: 2023-01-05
updated: 2023-01-05
categories:
  - Python Web Scraping Tutorial
tags:
  - python
  - data analysis
  - encryption
  - javascript
csdn_views: 347
csdn_likes: 2
csdn_comments: 3
csdn_favorites: 8
csdn_url: https://blog.csdn.net/m0_59180666/article/details/128556505
cover: /images/posts/17.-实战：手把手通关某音乐平台热门评论/b61cfee9840a.png
lang_pair:
  zh-CN: "17. 实战：手把手通关某音乐平台热门评论"
---

> This article was migrated from CSDN blog
> Original link: [17. Practical: Scraping Music Platform Comments Step by Step](https://blog.csdn.net/m0_59180666/article/details/128556505)
> 📊 347 views | 👍 2 likes | 💬 3 comments | ⭐ 8 favorites

**Table of Contents**

Introduction

Objective

Detailed Approach

Complete Code

Results

* * *

### Introduction

A certain music platform is known for its golden comments section. We want to batch collect this information for data analysis and processing. Today we'll try to scrape the comments section.

* * *

### Objective

Scrape comment data from a music platform.

* * *

### Detailed Approach

Visit the target page and check page source code for comment info:

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/b61cfee9840a.png)

Using CTRL+F to search in page source:

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/d8de71abfee5.png)

The data doesn't exist in source code, so we need another approach. As we've practiced before, if not in source code, it's likely in JS requests.

Open developer tools, go to Network tab, filter XHR, refresh page.

**F12 → Network → Fetch/XHR → Refresh**

After filtering, we find the get comment request:

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/ec55260f3601.png)

Verify in preview:

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/f870a4a62f7d.png)

We get: page URL and POST request method.

```python
url = "target_url_here"  # POST request
```

But checking the payload, parameters are encrypted:

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/472009e95bb4.png)

We need to find which code encrypts our parameters. Check the "Initiator" tab, examine the call stack, and trace back to find unencrypted params.

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/d6d6182c8cef.png)

Enter this code section, find source code. Click format (bottom left) for better readability.

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/62a0303e1a2f.png)

Set breakpoints and trace through the call stack to find where encryption happens. After several steps of tracing encrypted parameters, we finally find readable parameters - meaning they haven't been encrypted yet.

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/65891c72f6fc.png)

We can deduce encryption happens in the u7n.be8w section.

Through analysis, we get the actual parameter list:

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

After analyzing the encryption functions (a, b, c, d), we find:
- Function a: generates 16-character random string
- Function b: AES encryption
- Function c: RSA encryption (no random numbers)
- Function d: main encryption function

Since function c has no random numbers, if we fix parameter i, the return value is also fixed.

Parameters for function d:
```python
e = "010001"
f = "00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7"
g = "0CoJUm6Qyw8W8jud"
i = "UgGKZzAFQUxcBYYu"  # Manually fixed
```

The encryption process: data + g → b → first encryption + i → b = params

Now we can write our Python functions:

```python
from Crypto.Cipher import AES
from base64 import b64encode

def get_params(data):
    first = enc_params(data, g)
    second = enc_params(first, i)
    return second

def to_16(data):
    pad = 16 - len(data) % 16
    data += chr(pad) * pad
    return data

def enc_params(data, key):
    iv = "0102030405060708"
    data = to_16(data)
    aes = AES.new(key=key.encode("utf-8"), IV=iv.encode('utf-8'), mode=AES.MODE_CBC)
    bs = aes.encrypt(data.encode("utf-8"))
    return str(b64encode(bs), "utf-8")

def get_encSecKey():
    return "594dc41fe1f0b846120c4f0bf0f6df947502e39b8209c6a34aed10693be11fc84453bc3c3b60eaff90ace02a028f1c2e4546fccbc9d98ca151f3b1a660963895e865a25db8196afaf636e83ca639ffa9c2c17dfd29179d335bb6a2cd9932d43b264cc3a47d4e5b6c85b06b59534d62bf5a02f4aa04be411385865a151040a40c"
```

Install AES library: **pip install pycryptodome**

* * *

### Complete Code

```python
from Crypto.Cipher import AES
from base64 import b64encode
import requests
import json

url = "target_url_here"  # POST request

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

e = "010001"
f = "00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7"
g = "0CoJUm6Qyw8W8jud"
i = "UgGKZzAFQUxcBYYu"

def get_encSecKey():
    return "594dc41fe1f0b846120c4f0bf0f6df947502e39b8209c6a34aed10693be11fc84453bc3c3b60eaff90ace02a028f1c2e4546fccbc9d98ca151f3b1a660963895e865a25db8196afaf636e83ca639ffa9c2c17dfd29179d335bb6a2cd9932d43b264cc3a47d4e5b6c85b06b59534d62bf5a02f4aa04be411385865a151040a40c"

def get_params(data):
    first = enc_params(data, g)
    second = enc_params(first, i)
    return second

def to_16(data):
    pad = 16 - len(data) % 16
    data += chr(pad) * pad
    return data

def enc_params(data, key):
    iv = "0102030405060708"
    data = to_16(data)
    aes = AES.new(key=key.encode("utf-8"), IV=iv.encode('utf-8'), mode=AES.MODE_CBC)
    bs = aes.encrypt(data.encode("utf-8"))
    return str(b64encode(bs), "utf-8")

resp = requests.post(url, data={
    "params": get_params(json.dumps(data)),
    "encSecKey": get_encSecKey()
})
print(resp.json())
```

* * *

### Results

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/61beb145adb7.png)

![](/images/posts/17.-实战：手把手通关某音乐平台热门评论/2e0abc1a8aed.png)

Successfully retrieved comments! Further processing can be done as needed.
