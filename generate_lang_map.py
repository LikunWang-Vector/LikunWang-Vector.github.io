#!/usr/bin/env python3
"""Generate a JSON mapping file for language pairs by scanning the public folder."""

import re
import json
from pathlib import Path

def find_public_urls():
    """Scan public folder to find all article URLs."""
    public_dir = Path('public')
    urls = {'en': {}, 'zh-CN': {}}
    
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
                                    try:
                                        with open(index_file, 'r', encoding='utf-8') as f:
                                            html = f.read(5000)
                                        title_match = re.search(r'<title>(.+?)\s*\|', html)
                                        if title_match:
                                            title = title_match.group(1).strip()
                                            url = f"/{year_dir.name}/{month_dir.name}/{day_dir.name}/{lang}/{article_dir.name}/"
                                            urls[lang][title] = url
                                    except Exception as e:
                                        print(f"Error reading {index_file}: {e}")
    return urls

def parse_frontmatter(filepath):
    """Parse YAML frontmatter from a markdown file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        match = re.match(r'^---\s*\n(.*?)\n---', content, re.DOTALL)
        if not match:
            return None
        
        frontmatter = match.group(1)
        
        title_match = re.search(r'^title:\s*["\']?(.+?)["\']?\s*$', frontmatter, re.MULTILINE)
        title = title_match.group(1).strip('"\'') if title_match else None
        
        lang_pair = {}
        lines = frontmatter.split('\n')
        in_lang_pair = False
        for line in lines:
            if line.startswith('lang_pair:'):
                in_lang_pair = True
                continue
            if in_lang_pair:
                if line.startswith('  '):
                    pair_match = re.match(r'\s+(\w+(?:-\w+)?):\s*["\']?(.+?)["\']?\s*$', line)
                    if pair_match:
                        lang_pair[pair_match.group(1)] = pair_match.group(2).strip('"\'')
                elif line.strip() and not line.startswith(' '):
                    in_lang_pair = False
        
        return {'title': title, 'lang_pair': lang_pair}
    except Exception as e:
        print(f"Error parsing {filepath}: {e}")
        return None

def build_title_mapping():
    """Build mapping from English titles to Chinese titles."""
    en_dir = Path('source/_posts/en')
    zh_dir = Path('source/_posts/zh-CN')
    
    en_to_zh = {}
    zh_to_en = {}
    
    for filepath in en_dir.glob('*.md'):
        data = parse_frontmatter(filepath)
        if data and data['title'] and data.get('lang_pair', {}).get('zh-CN'):
            en_to_zh[data['title']] = data['lang_pair']['zh-CN']
    
    for filepath in zh_dir.glob('*.md'):
        data = parse_frontmatter(filepath)
        if data and data['title'] and data.get('lang_pair', {}).get('en'):
            zh_to_en[data['title']] = data['lang_pair']['en']
    
    return en_to_zh, zh_to_en

def main():
    print("=== V2 SCRIPT ===")
    print("Scanning public folder for URLs...")
    public_urls = find_public_urls()
    print(f"Found {len(public_urls['en'])} EN, {len(public_urls['zh-CN'])} ZH URLs")
    
    print("Building title mappings from frontmatter...")
    en_to_zh, zh_to_en = build_title_mapping()
    print(f"Found {len(en_to_zh)} EN->ZH mappings")
    
    mapping = {}
    matched = 0
    
    for en_title, en_url in public_urls['en'].items():
        zh_title = en_to_zh.get(en_title)
        if zh_title and zh_title in public_urls['zh-CN']:
            zh_url = public_urls['zh-CN'][zh_title]
            mapping[en_url] = zh_url
            mapping[zh_url] = en_url
            matched += 1
    
    for zh_title, zh_url in public_urls['zh-CN'].items():
        en_title = zh_to_en.get(zh_title)
        if en_title and en_title in public_urls['en']:
            en_url = public_urls['en'][en_title]
            if en_url not in mapping:
                mapping[en_url] = zh_url
                mapping[zh_url] = en_url
                matched += 1
    
    output_path = Path('source/js/lang-map.json')
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(mapping, f, ensure_ascii=False, indent=2)
    
    print(f"Generated {len(mapping)} URL mappings ({matched} pairs) to {output_path}")
    
    if mapping:
        first_key = list(mapping.keys())[0]
        print(f"Sample: {first_key} -> {mapping[first_key]}")

if __name__ == '__main__':
    main()
