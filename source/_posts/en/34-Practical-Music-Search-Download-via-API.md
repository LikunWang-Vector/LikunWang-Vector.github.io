---
title: "34. Practical: Music Search and Download via API"
date: 2023-01-31
updated: 2023-01-31
categories:
  - Python Web Scraping from Beginner to Pro
tags:
  - json
  - python
  - audio
  - data-analysis
  - beginner-project
cover: /images/posts/34.-实战：基于某api实现歌曲检索与下载（附完整源代码）/ba8af8d87d60.png
lang_pair:
  zh-CN: "34. 实战：基于某api实现歌曲检索与下载（附完整源代码）"
---

> This article is translated from my CSDN blog
> Original link: [34. 实战：基于某api实现歌曲检索与下载](https://blog.csdn.net/m0_59180666/article/details/128812483)
> 📊 1778 views | 👍 3 likes | 💬 15 comments | ⭐ 6 favorites

**Table of Contents**

Introduction

Objective

Approach

Code Implementation

1. Access music platform and capture search API
2. Extract music ID information
3. Parse music ID to get download link
4. Save to local storage
5. Implement user interaction logic

Complete Code

Results

Summary

---

### Introduction

This section introduces implementing music search and batch download functionality using Python and an API.

---

### Objective

Implement searching for any keyword, selecting any song by number to download, or downloading all songs on the current page.

---

### Approach

1. Access a music platform and capture the search API
2. Extract music ID information
3. Parse music ID to get direct download link
4. Save to local storage
5. Implement user interaction logic

---

### Code Implementation

#### 1. Access music platform and capture search API

View the source code - no data found, so we need to capture packets.

**F12 --> Network --> Fetch/XHR --> Refresh page**

Get the URL for requesting the search list and two key parameters.

```python
headers = {
    'Cookie': 'your_cookie_here',
    'csrf': 'YOUR_CSRF_TOKEN',
    'Host': 'music.example.com',
    'Referer': 'https://music.example.com',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}
```

```python
# Input key parameters
key = input('Enter search keyword: ')
pn = input('Enter page number: ')

# Search API: key is keyword, pn is page number
url = 'https://music.example.com/api/search?key={}&pn={}'.format(key, pn)
resp = requests.get(url, headers=headers)
```

Since the result is JSON data, parse it with the json library, extract necessary information, and number the songs (no number key exists):

```python
# Output search results
cnt = 1
data_list = resp.json()['data']['list']
for i in data_list:
    name = i['name'].replace('&nbsp;', ' ')
    i['name'] = name
    artist = i['artist'].replace('&nbsp;', ' ')
    i['artist'] = artist
    i['seq'] = cnt
    cnt += 1
    print('No:', i['seq'], 'Song:', i['name'], 'Artist:', i['artist'], '\n')
```

#### 2. Extract music ID information

```python
# Get song ID for parsing
rid = request_dic['rid']
```

The rid is essential information. We can use rid to extract the corresponding direct download link from a parsing website.

#### 3. Parse music ID to get download link

```python
for data in download_list:
    # Convert string to decimal integer for list selection
    if flag:
        data = int(data, 10)
    # Get selected song's dictionary
    request_dic = data_list[data-1]
    # Get song ID for parsing
    rid = request_dic['rid']
    # Process song name
    name = request_dic['name'].split('-')[0]
    new_url = 'https://api.example.com/music?rid={}'.format(rid)
    response = requests.get(new_url)
```

If not downloading all, convert input strings to numbers for song selection. Get the rid and process the song name - some names have source info after "-" (like "xxx theme song") which we don't need, so split and take the first part.

new_url simply inserts the rid to get the direct download link.

#### 4. Save to local storage

```python
if not os.path.exists('./Music_Downloads'):
    os.mkdir('./Music_Downloads')
with open('Music_Downloads/%s.mp3' % name, 'wb') as f:
    f.write(response.content)
print(name, 'downloaded successfully')
```

If the path doesn't exist, create it using the os library.

Write binary data from the direct link to a local file, named after the song with MP3 extension.

#### 5. Implement user interaction logic

First, input key parameters: keyword and page number. Default is 20 items per page.

```python
# Input key parameters
key = input('Enter search keyword: ')
pn = input('Enter page number: ')
```

Output search results with song numbers and details for user selection.

```python
# Output search results
cnt = 1
data_list = resp.json()['data']['list']
for i in data_list:
    name = i['name'].replace('&nbsp;', ' ')
    i['name'] = name
    artist = i['artist'].replace('&nbsp;', ' ')
    i['artist'] = artist
    i['seq'] = cnt
    cnt += 1
    print('No:', i['seq'], 'Song:', i['name'], 'Artist:', i['artist'], '\n')
```

When user inputs 0, download all songs on current page. Can also input space-separated numbers to download specific songs.

```python
# Select songs to download
download_list = input('Enter song numbers to download (space-separated, 0 for all): ').split(' ')
flag = True
if download_list == ['0']:
    flag = False
    download_list = []
    for it in range(1, len(resp.json()['data']['list']) + 1):
        download_list.append(it)
print('Starting download...')
```

---

### Complete Code

```python
import requests
from pprint import pprint
import os

# Request headers
headers = {
    'Cookie': 'your_cookie_here',
    'csrf': 'YOUR_CSRF_TOKEN',
    'Host': 'music.example.com',
    'Referer': 'https://music.example.com',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

# Input key parameters
key = input('Enter search keyword: ')
pn = input('Enter page number: ')

# Search API
url = 'https://music.example.com/api/search?key={}&pn={}'.format(key, pn)
resp = requests.get(url, headers=headers)

# Output search results
cnt = 1
data_list = resp.json()['data']['list']
for i in data_list:
    name = i['name'].replace('&nbsp;', ' ')
    i['name'] = name
    artist = i['artist'].replace('&nbsp;', ' ')
    i['artist'] = artist
    i['seq'] = cnt
    cnt += 1
    print('No:', i['seq'], 'Song:', i['name'], 'Artist:', i['artist'], '\n')

# Select songs to download
download_list = input('Enter song numbers (space-separated, 0 for all): ').split(' ')
flag = True
if download_list == ['0']:
    flag = False
    download_list = []
    for it in range(1, len(resp.json()['data']['list']) + 1):
        download_list.append(it)
print('Starting download...')

# Download songs
for data in download_list:
    if flag:
        data = int(data, 10)
    request_dic = data_list[data-1]
    rid = request_dic['rid']
    name = request_dic['name'].split('-')[0]
    new_url = 'https://api.example.com/music?rid={}'.format(rid)
    response = requests.get(new_url)
    
    if not os.path.exists('./Music_Downloads'):
        os.mkdir('./Music_Downloads')
    with open('Music_Downloads/%s.mp3' % name, 'wb') as f:
        f.write(response.content)
    print(name, 'downloaded successfully')
```

---

### Results

The program successfully searches for songs, displays results with numbers, and downloads selected songs to local storage.

---

### Summary

This section used an API to get direct download links from a music platform's search list by obtaining the unique music rid. The entire process is classic and suitable for beginners to practice.
