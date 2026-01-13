#!/usr/bin/env python3
"""测试CSDN标签爬取"""
import requests
from bs4 import BeautifulSoup

url = 'https://blog.csdn.net/m0_59180666/article/details/151854829'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Referer': 'https://blog.csdn.net/',
}
resp = requests.get(url, headers=headers, timeout=30)
resp.encoding = 'utf-8'
soup = BeautifulSoup(resp.text, 'html.parser')

print('=== 查找标签元素 ===')

# 方法1: tags-box
tags_box = soup.find_all('div', class_=lambda x: x and 'tag' in x.lower() if x else False)
for t in tags_box[:5]:
    cls = t.get('class')
    txt = t.get_text()[:200]
    print(f'Class: {cls}')
    print(f'Content: {txt}')
    print('---')

# 方法2: 查找所有包含tag的a标签
print('\n=== 查找tag链接 ===')
tag_links = soup.find_all('a', href=lambda x: x and '/tags/' in x if x else False)
for link in tag_links[:10]:
    tag_text = link.get_text(strip=True)
    tag_href = link.get('href')
    print(f'Tag: {tag_text} -> {tag_href}')

# 方法3: 查找article-tag-box
print('\n=== article-tag-box ===')
tag_box = soup.find('div', class_='article-tag-box')
if tag_box:
    print(tag_box.prettify()[:500])

# 方法4: 查找blog-tags-box
print('\n=== blog-tags-box ===')
tag_box = soup.find('div', class_='blog-tags-box')
if tag_box:
    print(tag_box.prettify()[:500])
