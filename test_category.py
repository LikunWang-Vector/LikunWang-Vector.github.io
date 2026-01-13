#!/usr/bin/env python3
"""测试CSDN专栏爬取"""
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

print('=== 查找专栏/分类元素 ===')

# 方法1: 查找column相关
for elem in soup.find_all(class_=lambda x: x and 'column' in x.lower() if x else False):
    cls = elem.get('class')
    txt = elem.get_text(strip=True)[:100]
    print(f'Class: {cls}')
    print(f'Text: {txt}')
    print('---')

# 方法2: 查找专栏链接
print('\n=== 专栏链接 ===')
for link in soup.find_all('a', href=lambda x: x and '/column/' in x if x else False):
    print(f'专栏: {link.get_text(strip=True)} -> {link.get("href")}')

# 方法3: blog-content-box内的专栏信息
print('\n=== blog-content-box ===')
content_box = soup.find('div', class_='blog-content-box')
if content_box:
    # 查找专栏相关的div
    for div in content_box.find_all('div', class_=lambda x: x and ('column' in str(x).lower() or 'category' in str(x).lower()) if x else False):
        print(div.prettify()[:300])
