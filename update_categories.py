#!/usr/bin/env python3
"""
更新已迁移文章的分类(categories)
从CSDN爬取文章所属专栏信息
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


def fetch_category(url):
    """从CSDN文章页面爬取所属专栏"""
    try:
        resp = requests.get(url, headers=HEADERS, timeout=30)
        resp.encoding = 'utf-8'
        soup = BeautifulSoup(resp.text, 'html.parser')
        
        # 查找文章所属专栏 - column-group
        column_group = soup.find('div', class_='column-group')
        if column_group:
            # 找专栏名称链接
            link = column_group.find('a', class_='item-target')
            if link:
                title = link.get('title', '').strip()
                if title and title != '订阅专栏':
                    return title
            
            # 备用：找column-group-item里的文本
            item = column_group.find('div', class_='column-group-item')
            if item:
                # 获取专栏名
                name_elem = item.find('a', title=True)
                if name_elem:
                    title = name_elem.get('title', '').strip()
                    if title and title != '订阅专栏':
                        return title
        
        return None
    except Exception as e:
        print(f"    错误: {e}")
        return None


def update_markdown_category(filepath, category):
    """更新markdown文件的categories"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if not category:
        return False
    
    # 构建新的categories部分
    category_yaml = f'categories:\n  - {category}\n'
    
    # 替换现有categories
    new_content = re.sub(
        r'^categories:\s*\n(?:  - .+\n)+',
        category_yaml,
        content,
        flags=re.MULTILINE
    )
    
    if new_content == content:
        # 如果没有匹配到，尝试另一种格式
        new_content = re.sub(
            r'^categories:\s*\n  - General\n',
            category_yaml,
            content,
            flags=re.MULTILINE
        )
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    
    return False


def main():
    print("=" * 60)
    print("更新CSDN文章分类(专栏)")
    print("=" * 60)
    
    # 获取所有markdown文件
    md_files = [f for f in os.listdir(POSTS_DIR) if f.endswith('.md')]
    print(f"共 {len(md_files)} 篇文章\n")
    
    updated = 0
    skipped = 0
    categories_found = {}
    
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
        
        # 爬取专栏
        category = fetch_category(url)
        
        if category:
            if update_markdown_category(filepath, category):
                print(f"✓ 专栏: {category}")
                updated += 1
                categories_found[category] = categories_found.get(category, 0) + 1
            else:
                print(f"(已有分类)")
        else:
            print("无专栏")
        
        time.sleep(DELAY)
    
    print("\n" + "=" * 60)
    print(f"完成! 更新 {updated} 篇, 跳过 {skipped} 篇")
    print("\n发现的专栏分类:")
    for cat, count in sorted(categories_found.items(), key=lambda x: -x[1]):
        print(f"  - {cat}: {count}篇")
    print("=" * 60)
    print("\n下一步: hexo generate && hexo server")


if __name__ == '__main__':
    main()
