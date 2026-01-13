#!/usr/bin/env python3
"""
CSDN to Hexo Blog Migration Script
爬取CSDN文章完整内容并转换为Hexo博客格式
"""

import re
import os
import json
import time
import requests
from bs4 import BeautifulSoup
import html2text

# 配置
OUTPUT_DIR = "source/_posts"
ARTICLES_JSON = "articles.json"
DELAY = 2  # 请求间隔(秒)

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Referer': 'https://blog.csdn.net/',
}

# HTML to Markdown 转换器
h2t = html2text.HTML2Text()
h2t.ignore_links = False
h2t.ignore_images = False
h2t.body_width = 0  # 不换行


def extract_urls_from_data(html_file):
    """从data文件提取所有文章URL和基本信息"""
    with open(html_file, 'r', encoding='utf-8') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    articles = []
    
    for block in soup.find_all('article', class_='blog-list-box'):
        article = {}
        
        # URL
        link = block.find('a', href=True)
        if link and '/article/details/' in link['href']:
            article['url'] = link['href']
            match = re.search(r'/article/details/(\d+)', article['url'])
            if match:
                article['id'] = match.group(1)
        
        # 标题
        h4 = block.find('h4')
        if h4:
            article['title'] = h4.get_text(strip=True)
        
        # 日期
        date_div = block.find('div', class_='view-time-box')
        if date_div:
            date_match = re.search(r'(\d{4})\.(\d{2})\.(\d{2})', date_div.get_text())
            if date_match:
                article['date'] = f"{date_match.group(1)}-{date_match.group(2)}-{date_match.group(3)}"
        
        # 阅读数
        views_div = block.find('div', class_='view-num-box')
        if views_div:
            m = re.search(r'(\d+)', views_div.get_text())
            if m:
                article['views'] = int(m.group(1))
        
        # 点赞数
        likes_div = block.find('div', class_='give-like-box')
        if likes_div:
            m = re.search(r'(\d+)', likes_div.get_text())
            if m:
                article['likes'] = int(m.group(1))
        
        # 评论和收藏
        comment_divs = block.find_all('div', class_='comment-box')
        if len(comment_divs) >= 1:
            m = re.search(r'(\d+)', comment_divs[0].get_text())
            if m:
                article['comments'] = int(m.group(1))
        if len(comment_divs) >= 2:
            m = re.search(r'(\d+)', comment_divs[1].get_text())
            if m:
                article['favorites'] = int(m.group(1))
        
        if article.get('url') and article.get('title'):
            articles.append(article)
    
    return articles


def fetch_article_detail(url):
    """爬取单篇文章的完整内容"""
    try:
        resp = requests.get(url, headers=HEADERS, timeout=30)
        resp.raise_for_status()
        resp.encoding = 'utf-8'
        soup = BeautifulSoup(resp.text, 'html.parser')
        
        result = {
            'content': '',
            'tags': [],
            'category': 'General',
            'cover': None
        }
        
        # 获取文章内容
        content_div = soup.find('div', id='content_views')
        if not content_div:
            content_div = soup.find('article', class_='baidu_pl')
        if not content_div:
            content_div = soup.find('div', class_='article_content')
        
        if content_div:
            # 移除不需要的元素
            for elem in content_div.find_all(['script', 'style', 'iframe']):
                elem.decompose()
            
            # 处理代码块，保留语言标识
            for pre in content_div.find_all('pre'):
                code = pre.find('code')
                if code:
                    lang = ''
                    if code.get('class'):
                        for cls in code['class']:
                            if 'language-' in cls or 'lang-' in cls:
                                lang = cls.replace('language-', '').replace('lang-', '')
                                break
                            if cls in ['python', 'java', 'javascript', 'js', 'cpp', 'c', 'html', 'css', 'sql', 'bash', 'shell', 'json', 'xml', 'yaml']:
                                lang = cls
                                break
                    code_text = code.get_text()
                    # 用特殊标记替换，后面转换
                    pre.replace_with(f'\n```{lang}\n{code_text}\n```\n')
            
            # 转换为Markdown
            html_content = str(content_div)
            result['content'] = h2t.handle(html_content)
            
            # 清理多余空行
            result['content'] = re.sub(r'\n{3,}', '\n\n', result['content'])
        
        # 获取标签 - 从blog-tags-box中查找tag-link-new
        tag_box = soup.find('div', class_='blog-tags-box')
        if tag_box:
            for tag_link in tag_box.find_all('a', class_='tag-link-new'):
                tag = tag_link.get_text(strip=True).lstrip('#')
                if tag and tag not in result['tags']:
                    result['tags'].append(tag)
        
        # 备用方法：从tags-box查找
        if not result['tags']:
            tag_box = soup.find('div', class_='tags-box')
            if tag_box:
                for tag_link in tag_box.find_all('a'):
                    tag = tag_link.get_text(strip=True).lstrip('#')
                    if tag and tag not in result['tags'] and len(tag) < 30:
                        result['tags'].append(tag)
        
        # 获取分类/专栏
        column_link = soup.find('a', class_='column_name')
        if column_link:
            cat = column_link.get_text(strip=True)
            if cat and cat not in ['原创', '转载']:
                result['category'] = cat
        
        # 获取封面图
        cover_img = soup.find('img', class_='article-cover')
        if not cover_img:
            # 尝试获取文章中第一张图片作为封面
            first_img = content_div.find('img') if content_div else None
            if first_img and first_img.get('src'):
                result['cover'] = first_img['src']
        else:
            result['cover'] = cover_img.get('src')
        
        return result
        
    except Exception as e:
        print(f"    错误: {e}")
        return {'content': '', 'tags': [], 'category': 'General', 'cover': None}


def sanitize_filename(title):
    """生成安全的文件名"""
    filename = re.sub(r'[<>:"/\\|?*]', '', title)
    filename = re.sub(r'\s+', '-', filename)
    filename = filename.strip('-')
    if len(filename) > 80:
        filename = filename[:80]
    return filename


def create_hexo_post(article, detail):
    """生成Hexo博客文章"""
    title = article.get('title', 'Untitled').replace('"', '\\"')
    date = article.get('date', '2023-01-01')
    category = detail.get('category', 'General')
    tags = detail.get('tags', [])
    content = detail.get('content', '')
    
    # Front matter
    front_matter = f'''---
title: "{title}"
date: {date}
updated: {date}
categories:
  - {category}
'''
    
    if tags:
        front_matter += 'tags:\n'
        for tag in tags:
            front_matter += f'  - {tag}\n'
    
    # CSDN统计数据
    front_matter += f'''csdn_views: {article.get('views', 0)}
csdn_likes: {article.get('likes', 0)}
csdn_comments: {article.get('comments', 0)}
csdn_favorites: {article.get('favorites', 0)}
csdn_url: {article.get('url', '')}
'''
    
    if detail.get('cover'):
        front_matter += f"cover: {detail['cover']}\n"
    
    front_matter += '---\n\n'
    
    # 原文信息提示
    notice = f'''> 本文迁移自CSDN博客
> 原文链接：[{article.get('title', '')}]({article.get('url', '')})
> 📊 {article.get('views', 0)} 阅读 | 👍 {article.get('likes', 0)} 点赞 | 💬 {article.get('comments', 0)} 评论 | ⭐ {article.get('favorites', 0)} 收藏

'''
    
    return front_matter + notice + content


def main():
    print("=" * 60)
    print("CSDN 博客迁移工具")
    print("=" * 60)
    
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    # 步骤1: 从data文件提取URL
    print("\n[步骤1] 从 data 文件提取文章URL...")
    articles = extract_urls_from_data('data')
    print(f"共发现 {len(articles)} 篇文章")
    
    # 保存元数据
    with open(ARTICLES_JSON, 'w', encoding='utf-8') as f:
        json.dump(articles, f, ensure_ascii=False, indent=2)
    
    # 步骤2: 爬取每篇文章
    print(f"\n[步骤2] 开始爬取文章内容 (间隔{DELAY}秒)...")
    
    success = 0
    failed = 0
    
    for i, article in enumerate(articles, 1):
        title = article.get('title', 'Unknown')[:40]
        print(f"[{i}/{len(articles)}] {title}...", end=' ')
        
        try:
            # 爬取文章详情
            detail = fetch_article_detail(article['url'])
            
            if detail['content']:
                # 生成并保存文章
                filename = sanitize_filename(article['title']) + '.md'
                filepath = os.path.join(OUTPUT_DIR, filename)
                
                post_content = create_hexo_post(article, detail)
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(post_content)
                
                print(f"✓ ({len(detail['content'])}字)")
                success += 1
            else:
                print("✗ 内容为空")
                failed += 1
            
            # 延迟，避免被封
            time.sleep(DELAY)
            
        except Exception as e:
            print(f"✗ {e}")
            failed += 1
    
    # 总结
    print("\n" + "=" * 60)
    print("迁移完成!")
    print("=" * 60)
    print(f"成功: {success} 篇")
    print(f"失败: {failed} 篇")
    print(f"\n文章保存在: {OUTPUT_DIR}/")
    print("\n下一步:")
    print("  hexo generate")
    print("  hexo server")


if __name__ == '__main__':
    main()
