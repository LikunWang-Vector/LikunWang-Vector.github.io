#!/usr/bin/env python3
"""Test the URL scanning logic."""

import re
from pathlib import Path

def find_public_urls():
    """Scan public folder to find all article URLs."""
    public_dir = Path('public')
    urls = {'en': {}, 'zh-CN': {}}  # title -> url
    
    # Pattern to match article URLs: /YYYY/MM/DD/lang/slug/
    for lang in ['en', 'zh-CN']:
        for year_dir in public_dir.glob('[0-9][0-9][0-9][0-9]'):
            for month_dir in year_dir.glob('[0-9][0-9]'):
                for day_dir in month_dir.glob('[0-9][0-9]'):
                    lang_dir = day_dir / lang
                    if lang_dir.exists():
                        for article_dir in lang_dir.iterdir():
                            if article_dir.is_dir():
                                index_file = article_dir / 'index.html'
                                if index_file.exists():
                                    # Extract title from HTML
                                    try:
                                        with open(index_file, 'r', encoding='utf-8') as f:
                                            html = f.read(5000)  # Read first 5KB
                                        title_match = re.search(r'<title>(.+?)\s*\|', html)
                                        if title_match:
                                            title = title_match.group(1).strip()
                                            url = f"/{year_dir.name}/{month_dir.name}/{day_dir.name}/{lang}/{article_dir.name}/"
                                            urls[lang][title] = url
                                    except Exception as e:
                                        print(f"Error reading {index_file}: {e}")
    
    return urls

urls = find_public_urls()
print(f"Found {len(urls['en'])} English URLs")
print(f"Found {len(urls['zh-CN'])} Chinese URLs")

# Print first 5 of each
print("\nFirst 5 English URLs:")
for i, (title, url) in enumerate(list(urls['en'].items())[:5]):
    print(f"  {title}: {url}")

print("\nFirst 5 Chinese URLs:")
for i, (title, url) in enumerate(list(urls['zh-CN'].items())[:5]):
    print(f"  {title}: {url}")
