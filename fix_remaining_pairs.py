#!/usr/bin/env python3
"""Fix the remaining lang_pair mappings for articles with special characters."""

import os
import re
from pathlib import Path

def add_lang_pair_to_file(filepath, pair_title, pair_lang):
    """Add lang_pair field to the front matter of a markdown file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if lang_pair already exists
        if 'lang_pair:' in content:
            print(f"  Skipping (already has lang_pair): {filepath}")
            return False
        
        # Find the end of front matter and insert lang_pair
        match = re.search(r'^(---\s*\n.*?)(^---)', content, re.MULTILINE | re.DOTALL)
        if match:
            front_matter = match.group(1)
            # Escape quotes in title
            escaped_title = pair_title.replace('"', '\\"')
            # Add lang_pair before the closing ---
            new_front_matter = front_matter + f'lang_pair:\n  {pair_lang}: "{escaped_title}"\n'
            new_content = content.replace(match.group(0), new_front_matter + '---')
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"  Updated: {filepath}")
            return True
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
    return False

zh_dir = Path('source/_posts/zh-CN')

# Find and fix the GBK article
for f in zh_dir.iterdir():
    if 'gbk' in f.name.lower():
        print(f"Found GBK file: {f}")
        add_lang_pair_to_file(f, "Fix UnicodeEncodeError: 'gbk' codec can't encode character '\\xa0'", "en")
        break

# Find and fix the Kiro article
for f in zh_dir.iterdir():
    if '举报' in f.name or 'Kiro' in f.name:
        print(f"Found Kiro file: {f}")
        add_lang_pair_to_file(f, "Kiro Batch Registration Vulnerability: A Modern-Day 'Good Samaritan' Whistleblower", "en")
        break

print("Done!")
