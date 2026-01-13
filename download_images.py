#!/usr/bin/env python3
"""
下载CSDN文章中的图片到本地，并更新markdown文件中的图片链接
"""

import os
import re
import hashlib
import requests
from urllib.parse import urlparse

# 配置
POSTS_DIR = "source/_posts"
IMAGES_DIR = "source/images/posts"
DELAY = 0.5

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Referer': 'https://blog.csdn.net/',
}


def get_image_filename(url):
    """根据URL生成唯一文件名"""
    # 提取原始文件扩展名
    parsed = urlparse(url)
    path = parsed.path
    ext = os.path.splitext(path)[1].lower()
    if ext not in ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']:
        ext = '.png'
    
    # 用URL的hash作为文件名
    url_hash = hashlib.md5(url.encode()).hexdigest()[:12]
    return f"{url_hash}{ext}"


def download_image(url, save_path):
    """下载图片"""
    try:
        resp = requests.get(url, headers=HEADERS, timeout=30)
        resp.raise_for_status()
        
        with open(save_path, 'wb') as f:
            f.write(resp.content)
        return True
    except Exception as e:
        print(f"    下载失败: {e}")
        return False


def process_markdown_file(filepath):
    """处理单个markdown文件，下载图片并更新链接"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 查找所有CSDN图片链接
    # 匹配 ![alt](url) 和 cover: url
    img_pattern = r'!\[([^\]]*)\]\((https?://[^)]+csdnimg[^)]+)\)'
    cover_pattern = r'^cover:\s*(https?://[^\s]+csdnimg[^\s]+)'
    
    images_found = []
    
    # 查找markdown图片
    for match in re.finditer(img_pattern, content):
        alt, url = match.group(1), match.group(2)
        images_found.append(('md', url, match.group(0)))
    
    # 查找封面图片
    cover_match = re.search(cover_pattern, content, re.MULTILINE)
    if cover_match:
        images_found.append(('cover', cover_match.group(1), cover_match.group(0)))
    
    if not images_found:
        return 0
    
    # 获取文章名作为图片子目录
    filename = os.path.basename(filepath).replace('.md', '')
    article_img_dir = os.path.join(IMAGES_DIR, filename[:30])  # 限制目录名长度
    os.makedirs(article_img_dir, exist_ok=True)
    
    downloaded = 0
    new_content = content
    
    for img_type, url, original in images_found:
        img_filename = get_image_filename(url)
        local_path = os.path.join(article_img_dir, img_filename)
        web_path = '/' + local_path.replace('source/', '').replace('\\', '/')
        
        # 下载图片
        if not os.path.exists(local_path):
            if download_image(url, local_path):
                downloaded += 1
        
        # 更新链接
        if img_type == 'md':
            # 提取alt文本
            alt_match = re.search(r'!\[([^\]]*)\]', original)
            alt = alt_match.group(1) if alt_match else 'image'
            new_link = f'![{alt}]({web_path})'
            new_content = new_content.replace(original, new_link)
        else:  # cover
            new_content = new_content.replace(original, f'cover: {web_path}')
    
    # 保存更新后的文件
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
    
    return downloaded


def main():
    print("=" * 60)
    print("下载CSDN图片到本地")
    print("=" * 60)
    
    os.makedirs(IMAGES_DIR, exist_ok=True)
    
    # 获取所有markdown文件
    md_files = [f for f in os.listdir(POSTS_DIR) if f.endswith('.md')]
    print(f"共 {len(md_files)} 篇文章\n")
    
    total_downloaded = 0
    
    for i, filename in enumerate(md_files, 1):
        filepath = os.path.join(POSTS_DIR, filename)
        print(f"[{i}/{len(md_files)}] {filename[:40]}...", end=' ')
        
        count = process_markdown_file(filepath)
        if count > 0:
            print(f"下载 {count} 张图片")
            total_downloaded += count
        else:
            print("无CSDN图片")
    
    print("\n" + "=" * 60)
    print(f"完成! 共下载 {total_downloaded} 张图片")
    print(f"图片保存在: {IMAGES_DIR}/")
    print("=" * 60)


if __name__ == '__main__':
    main()
