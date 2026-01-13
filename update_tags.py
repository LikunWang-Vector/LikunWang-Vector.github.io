#!/usr/bin/env python3
"""
更新已迁移文章的标签
从CSDN重新爬取标签信息并更新markdown文件
"""

import os
import re
import time
import requests
from bs4 import BeautifulSoup

POSTS_DIR = "source/_posts"
DELAY = 1.5

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Referer': 'https://blog.csdn.net/',
}


def fetch_tags(url):
    """从CSDN文章页面爬取标签"""
    try:
        resp = requests.get(url, headers=HEADERS, timeout=30)
        resp.encoding = 'utf-8'
        soup = BeautifulSoup(resp.text, 'html.parser')
        
        tags = []
        
        # 方法1: blog-tags-box中的tag-link-new
        tag_box = soup.find('div', class_='blog-tags-box')
        if tag_box:
            for tag_link in tag_box.find_all('a', class_='tag-link-new'):
                tag = tag_link.get_text(strip=True).lstrip('#')
                if tag and tag not in tags:
                    tags.append(tag)
        
        # 方法2: tags-box
        if not tags:
            tag_box = soup.find('div', class_='tags-box')
            if tag_box:
                for tag_link in tag_box.find_all('a'):
                    tag = tag_link.get_text(strip=True).lstrip('#')
                    if tag and tag not in tags and len(tag) < 30:
                        tags.append(tag)
        
        return tags
    except Exception as e:
        print(f"    错误: {e}")
        return []


def update_markdown_tags(filepath, tags):
    """更新markdown文件的tags"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 检查是否已有tags
    if re.search(r'^tags:\s*$', content, re.MULTILINE):
        # 已有空的tags字段，替换它
        # 找到tags:后面到下一个字段的位置
        pass
    
    # 构建新的tags部分
    if not tags:
        return False
    
    tags_yaml = 'tags:\n'
    for tag in tags:
        tags_yaml += f'  - {tag}\n'
    
    # 检查是否已有tags
    if re.search(r'^tags:', content, re.MULTILINE):
        # 替换现有tags（包括可能的空tags或已有tags列表）
        content = re.sub(
            r'^tags:.*?(?=^[a-z_]+:|^---)',
            tags_yaml,
            content,
            flags=re.MULTILINE | re.DOTALL
        )
    else:
        # 在categories后面添加tags
        content = re.sub(
            r'(^categories:\s*\n(?:  - .+\n)+)',
            r'\1' + tags_yaml,
            content,
            flags=re.MULTILINE
        )
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True


def main():
    print("=" * 60)
    print("更新CSDN文章标签")
    print("=" * 60)
    
    # 获取所有markdown文件
    md_files = [f for f in os.listdir(POSTS_DIR) if f.endswith('.md')]
    print(f"共 {len(md_files)} 篇文章\n")
    
    updated = 0
    skipped = 0
    
    for i, filename in enumerate(md_files, 1):
        filepath = os.path.join(POSTS_DIR, filename)
        
        # 读取文件获取csdn_url
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 提取csdn_url
        url_match = re.search(r'^csdn_url:\s*(.+)$', content, re.MULTILINE)
        if not url_match:
            print(f"[{i}/{len(md_files)}] {filename[:35]}... 跳过(无CSDN链接)")
            skipped += 1
            continue
        
        url = url_match.group(1).strip()
        print(f"[{i}/{len(md_files)}] {filename[:35]}...", end=' ')
        
        # 爬取标签
        tags = fetch_tags(url)
        
        if tags:
            update_markdown_tags(filepath, tags)
            print(f"✓ 标签: {', '.join(tags)}")
            updated += 1
        else:
            print("无标签")
        
        time.sleep(DELAY)
    
    print("\n" + "=" * 60)
    print(f"完成! 更新 {updated} 篇, 跳过 {skipped} 篇")
    print("=" * 60)
    print("\n下一步: hexo generate && hexo server")


if __name__ == '__main__':
    main()
