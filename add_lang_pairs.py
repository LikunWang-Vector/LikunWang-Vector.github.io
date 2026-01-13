#!/usr/bin/env python3
"""
Add lang_pair field to all articles to link Chinese and English versions.
This creates a mapping based on the file naming convention.
"""

import os
import re
from pathlib import Path

# Mapping between English and Chinese article filenames
# Format: English filename (without .md) -> Chinese filename (without .md)
ARTICLE_MAPPING = {
    # Web Crawler Series (01-42)
    "01-Web-Crawler-Overview-and-First-Program": "01.-爬虫概述与第一个程序",
    "02-Web-Request-Process-Analysis": "02.-Web请求过程分析",
    "03-HTTP-Protocol": "03.-HTTP协议",
    "04-Requests-Module-Introduction-with-Three-Cases": "04.-requests模块入门与三个案例（搜狗搜索百度翻译豆瓣电影）",
    "05-Data-Parsing-Regular-Expressions-and-re-Module": "05.-数据解析、正则表达式与re模块",
    "06-Practical-Scraping-Movie-Top250-with-Python-Regex": "06.-实战：Python正则法抓取某电影网Top250信息",
    "07-Practical-Scraping-Movie-Torrent-Links-with-Python-Regex": "07.-实战：Python正则法抓取某网站2022必看片迅雷种子",
    "08-Preparation-for-bs4-Parsing-Understanding-HTML-Basics": "08.-bs4解析的准备——了解HTML基础",
    "09-bs4-Parsing-Basics-and-Examples": "09.-bs4解析基础与实例",
    "10-Supplementary-Example-Scraping-Dynamic-JS-Vegetable-Price-Pages": "10.-补充实例：js动态请求菜价网页的爬取",
    "11-Practical-Scraping-Web-Images-with-bs4-and-Saving-Locally": "11.-实战：bs4法抓取网页图片并保存到本地文件夹",
    "12-XPath-Parsing-Introduction": "12.-XPath解析入门",
    "13-Practical-Scraping-Outsourcing-Info-with-XPath": "13.-实战：XPath法抓取某网站外包信息",
    "14-Requests-Advanced-Handling-Login-and-Cookies": "14.-Requests进阶：处理登录信息与Cookie",
    "15-Handling-Hotlink-Protection-Scraping-Video-Resources": "15.-防盗链的处理：获取某视频网站的视频资源",
    "16-Network-Proxies": "16.-网络代理",
    "17-Practical-Scraping-Music-Platform-Comments": "17.-实战：手把手通关某音乐平台热门评论",
    "18-Overview-How-to-Speed-Up-Web-Scraping": "18.-概述如何加快爬虫效率",
    "19-Multithreading-and-Multiprocessing": "19.-多线程与多进程",
    "20-Thread-Pools-and-Process-Pools": "20.-线程池与进程池",
    "21-Practical-Multithreading-XPath-Scraping-Vegetable-Prices": "21.-实战：多线程+xpath抓取大量菜价信息（四种方法）",
    "22-Coroutines-and-Async-Programming-in-Python": "22.-协程与Python中的多任务异步协程",
    "23-Async-HTTP-Requests-with-aiohttp": "23.-异步HTTP请求与aiohttp模块",
    "24-Practical-Async-Scraping-Complete-Novel": "24.-实战：用异步法获取完整的一部小说",
    "25-Practical-Scraping-Anime-Video-XPath-ThreadPool": "25.-实战：抓取《未闻花名》视频（xpath+线程池）",
    "26-Selenium-Browser-Automation-Testing-Module": "26.-selenium：浏览器自动测试模块——一款方便且能装X的爬虫工具（附多个实例）",
    "27-Handling-Website-CAPTCHA-Selenium-Cracking-Tools": "27.-处理网站验证码：处理网站登录验证码（selenium+破解工具）",
    "28-Practical-12306-Auto-Ticket-Booking-with-Selenium": "28.-实战：基于selenium实现12306自动购票",
    "29-CSS-Introduction-Preparation-for-PyQuery": "29.-CSS简介：PyQuery模块的铺垫",
    "30-PyQuery-CSS-Selector-Based-on-HTML": "30.-PyQuery-基于HTML的CSS选择器",
    "31-Practical-PyQuery-Scraping-Video-Site-Top100": "31.-实战：PyQuery获取小电视Top100详细信息（文末源码）",
    "32-Practical-PyQuery-Scraping-News-Articles": "32.-实战：PyQuery实现抓取TX图文新闻",
    "33-Practical-Scraping-Store-Information-Query": "33.-实战：实现某网站店铺信息的查询与批量抓取（附源码）",
    "34-Practical-Music-Search-Download-via-API": "34.-实战：基于某api实现歌曲检索与下载（附完整源代码）",
    "35-Practical-Video-Watermark-Removal-with-Python": "35.-实战：Python实现视频去水印（文末源码）",
    "36-Practical-Batch-Video-Download-with-Threading": "36.-实战：基于上一节的全面升级——实现某音批量下载功能",
    "37-Practical-XPath-ThreadPool-Novel-Scraper": "37.-实战：Xpath+线程池实现抓取任意完整小说一千余节到本地txt文件模板任意小说网站可套用（附源码）",
    "38-Practical-Selenium-Flash-Sale-Auto-Purchase": "38.-实战：基于selenium的某宝秒杀抢购系统（附完整代码）",
    "39-Practical-Video-Parser-with-32-APIs-GUI": "39.-实战：基于api接口实现视频解析播放（32接口，窗口化操作，可导出exe，附源码）",
    "40-Practical-Music-Parser-with-Tkinter-GUI": "40.-实战：基于tkinter实现用户UI界面——对34小节的VIP音乐解析系统的全面升级（附源码）",
    "41-Practical-Multi-Platform-Flash-Sale-System": "41.-基于selenium的各大购物平台自动秒杀系统（完整源码）",
    "42-Practical-Scraping-Game-Character-Skin-Posters": "42.-疯狂爬取王者荣耀所有皮肤高清海报（文末源码）",
    
    # HTML Series
    "HTML-Introduction": "HTML简介",
    "HTML-Editors": "HTML-编辑器",
    "HTML-Basics-Four-Tags": "HTML基础——以四个标签为例",
    "HTML-Elements": "HTML元素",
    "HTML-Attributes": "HTML属性",
    "HTML-Headings": "HTML标题",
    "HTML-Paragraphs": "HTML段落",
    "HTML-Styles": "HTML样式",
    "HTML-Text-Formatting": "HTML文本格式化",
    "HTML-Quotations": "HTML引用",
    "HTML-Comments": "HTML注释",
    "HTML-Colors": "HTML颜色",
    "HTML-CSS": "HTML-CSS",
    "HTML-Links": "HTML链接",
    "HTML-Images": "HTML图像",
    "HTML-Tables": "HTML表格",
    "HTML-Lists": "HTML列表",
    "HTML-Block-Elements": "HTML块元素",
    "HTML-Classes": "HTML类",
    "HTML-ID-Attribute": "HTML-id属性",
    "HTML-Iframes": "HTML框架与内联框架",
    "HTML-JavaScript": "HTML-JavaScript",
    "HTML-File-Paths": "HTML文件路径",
    "HTML-Head": "HTML头部",
    "HTML-Layout": "HTML布局",
    "HTML-Responsive-Web-Design": "HTML响应式Web设计",
    "HTML-Computer-Code": "HTML与计算机代码",
    "HTML-Entities": "HTML预留字符的处理",
    "HTML-Symbols": "HTML特殊符号",
    "HTML-Emoji": "HTML与Emoji",
    "HTML-Forms": "HTML表单（属性元素输入类型输入属性）：看这一篇就够了",
    "HTML-Canvas-and-SVG": "HTML画布与SVG（Canvas-vs.-SVG）",
    "HTML-Multimedia": "HTML多媒体（插件音频视频YouTube）：一篇就够用",
    "HTML-and-XHTML": "HTML与XHTML",
    "HTML-Quick-Reference": "HTML快速参考指南",
    "HTML5-Semantic-Elements": "HTML5语义元素",
    "HTML5-Style-Guide": "HTML5样式指南和代码约定",
    "HTML-and-PyCharm": "HTML与PyCharm",
    
    # CSS Series
    "CSS-Introduction": "CSS简介",
    "CSS-Syntax-and-Selectors": "CSS语法与CSS选择器",
    "CSS-How-To-Add-Styles": "添加CSS样式的三种方法与CSS的注释",
    "CSS-Colors": "CSS颜色：RGB颜色HEX颜色HSL颜色（网页颜色完全总结）",
    "CSS-Backgrounds": "CSS背景：背景色背景图像背景重复背景附着简写背景属性（一文搞懂）",
    "CSS-Borders-Margins-Outlines": "CSS边框、边距、轮廓（边框宽度颜色各边简写属性圆角边框内外边距高度宽度框模型轮廓宽度颜色属性偏移）——万字长文一文搞懂",
    "CSS-Text-and-Fonts": "CSS文本与字体(文本格式化对齐装饰转换间距阴影字体样式大小简写属性)",
    "CSS-Icons-and-Links": "CSS图标与链接",
    "CSS-Lists-and-Tables": "CSS列表与表格",
    "CSS-Responsive-Design": "CSS响应式设计——（视口网格视图媒体查询图像视频）看这一篇就够了",
    "CSS-Grid-Layout": "CSS网格教程：网格布局模块网格容器网格项目",
    
    # UESTC Course Notes
    "UESTC-CA-Notes-1-Overview": "电子科技大学计算机系统结构复习笔记（一）：概述",
    "UESTC-CA-Notes-2-Instruction-Set": "电子科技大学计算机系统结构复习笔记（二）：指令系统",
    "UESTC-CA-Notes-3-Pipeline": "电子科技大学计算机系统结构复习笔记（三）：流水线技术",
    "UESTC-CA-Notes-4-Memory-System": "电子科技大学计算机系统结构复习笔记（四）：存储系统",
    "UESTC-CA-Homework": "电子科技大学计算机系统结构：课后作业",
    "UESTC-CA-Midterm-Exam-Solutions": "电子科技大学计算机系统结构半期考试参考答案",
    
    "UESTC-OS-Notes-1-Operating-System-Overview": "电子科技大学操作系统期末复习笔记（一）：操作系统概述",
    "UESTC-OS-Notes-2-Process-and-Concurrency-Control": "电子科技大学操作系统期末复习笔记（二）：进程与并发控制",
    "UESTC-OS-Notes-3-Memory-Management": "电子科技大学操作系统期末复习笔记（三）：存储器管理",
    "UESTC-OS-Notes-4-Device-Management": "电子科技大学操作系统期末复习笔记（四）：设备管理",
    "UESTC-OS-Notes-5-File-Management": "电子科技大学操作系统期末复习笔记（五）：文件管理",
    
    "UESTC-Compiler-Notes-1-Introduction": "电子科技大学编译原理复习笔记（一）：绪论",
    "UESTC-Compiler-Notes-2-Data-Types": "电子科技大学编译原理复习笔记（二）：数据类型",
    "UESTC-Compiler-Notes-3-Control-Structures": "电子科技大学编译原理复习笔记（三）：控制结构",
    "UESTC-Compiler-Notes-4-Language-Design": "电子科技大学编译原理复习笔记（四）：程序语言的设计",
    "UESTC-Compiler-Notes-5-Lexical-Analysis": "电子科技大学编译原理复习笔记（五）：词法分析",
    "UESTC-Compiler-Notes-6-Top-Down-Parsing": "电子科技大学编译原理复习笔记（六）：自上而下的语法分析",
    "UESTC-Compiler-Notes-7-Bottom-Up-Parsing": "电子科技大学编译原理复习笔记（七）：自下而上语法分析",
    "UESTC-Compiler-Notes-8-Semantic-Analysis": "电子科技大学编译原理复习笔记（八）：语义分析",
    "UESTC-Compiler-Notes-9-Code-Optimization": "电子科技大学编译原理复习笔记（九）：代码优化",
    "UESTC-Compiler-Notes-10-Storage-Space": "电子科技大学编译原理复习笔记（十）：存储空间",
    "UESTC-Compiler-Review-PPT": "电子科技大学编译原理复习课PPT",
    "UESTC-Compiler-Exercise-Class": "电子科技大学编译原理期末习题课",
    
    "UESTC-SE-Notes-1-Introduction": "电子科技大学软件工程期末复习笔记（一）：概论",
    "UESTC-SE-Notes-2-Software-Process": "电子科技大学软件工程期末复习笔记（二）：软件过程",
    "UESTC-SE-Notes-3-Requirements-Analysis": "电子科技大学软件工程期末复习笔记（三）：需求分析",
    "UESTC-SE-Notes-4-Software-Design": "电子科技大学软件工程期末复习笔记（四）：软件设计",
    "UESTC-SE-Notes-5-Productivity-Measurement": "电子科技大学软件工程期末复习笔记（五）：生产率和工作度量",
    "UESTC-SE-Notes-6-Software-Testing": "电子科技大学软件工程期末复习笔记（六）：软件测试",
    "UESTC-SE-Notes-7-Testing-Strategies": "电子科技大学软件工程期末复习笔记（七）：测试策略",
    "UESTC-SE-Notes-8-Software-Maintenance": "电子科技大学软件工程期末复习笔记（八）：软件维护",
    "UESTC-SE-Notes-9-Project-Management": "电子科技大学软件工程期末复习笔记（九）：项目管理",
    
    "UESTC-AI-Notes-1-Search-Problems": "电子科技大学人工智能期末复习笔记（一）：搜索问题",
    "UESTC-AI-Notes-2-MDP-and-Reinforcement-Learning": "电子科技大学人工智能期末复习笔记（二）：MDP与强化学习",
    "UESTC-AI-Notes-3-First-Order-Logic": "电子科技大学人工智能期末复习笔记（三）：一阶逻辑",
    "UESTC-AI-Notes-4-Probability-and-Bayesian-Networks": "电子科技大学人工智能期末复习笔记（四）：概率与贝叶斯网络",
    "UESTC-AI-Notes-5-Machine-Learning": "电子科技大学人工智能期末复习笔记（五）：机器学习",
    
    # Other articles
    "2023-MCM-C-Wordle-Algorithm": "2023美赛C题：Wordle筛选算法",
    "Jupyter-Notebook-Complete-Guide": "Jupyter使用详解",
    "Master-Python-Debugger-pdb-in-10-Minutes": "10分钟掌握Python调试器pdb",
    "Remove-WPS-Office-Popup-Ads-10-Seconds": "10秒去除WPS-Office弹窗广告教程（2023.3.31最新）",
    "Disable-Windows10-Updates-30-Years": "0风险禁用Windows10更新30年！",
    "Pandas-Three-Algorithms-Correlation-Analysis": "pandas-三种算法实现递归分析Excel中各列相关性",
    "Package-Python-to-EXE-and-Reduce-Size": "py文件如何打包成exe？如何压缩文件大小？",
    "Selenium-Cannot-Find-Element-Common-Pitfalls": "Selenium：找不到对应的网页元素？常见的一些坑",
    "Windows10-Language-Switch-Button-Missing": "Windows10中英文切换按钮消失？一招解决",
    "Windows-Jekyll-Gem-Installation-Issues": "windows在gem下安装jekyll的问题",
    "Windows-Batch-Rename-File-Extensions": "windows系统批量修改文件后缀名的绝招（建议直接使用方法二）",
    "Convert-MP4-to-MP3-All-Platforms": "如何在Windows-Mac-iPhone-Android-Online上将MP4转换为MP3",
    "Type-English-Punctuation-with-Chinese-IME": "如何在使用中文输入法的时候打出英文字符",
    "Fix-UnicodeEncodeError-GBK-Codec-xa0": "完美解决UnicodeEncodeError-'gbk'-codec-can't-encode-character-'xa0'-in-position-XX-i",
    "New-Year-Fireworks-Code-Implementation": "实战：-跨年烟花代码的实现（附源码）",
    "Common-Archive-Formats-Explained": "常见压缩包格式详解：区别及在不同系统中的解压方式",
    "welcome": "欢迎来到我的博客",
    "Summerize-for-Bioinformatics-with-ChatGPT": "生物信息学与ChatGPT总结",
    "EasyConnect-Virtual-NIC-Error-Fix": "EasyConnect登陆报错：拉起虚拟网卡失败，请确保虚拟网卡已经安装在系统上并处于启用状态，然后再重新登录解决此问题。",
    "Fix-nes_py-pip-Installation-Error": "解决nes_py在pip安装报错的问题",
    "Kiro-Batch-Registration-Vulnerability-Whistleblower": '论《我-举-报-我-自-己》：Kiro-批量注册漏洞背后的"当代活雷锋"',
    "Configure-VSCode-Remote-Server-Connection": "配置Visual-Studio-Code连接远程服务器",
    "Summary-for-Packaging-and-Assembly-Technologies-for-Integrated-Systems": "集成系统封装与组装技术总结",
}

def get_title_from_file(filepath):
    """Extract title from markdown front matter."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        match = re.search(r'^---\s*\n.*?^title:\s*["\']?(.+?)["\']?\s*$.*?^---', content, re.MULTILINE | re.DOTALL)
        if match:
            return match.group(1).strip().strip('"\'')
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
    return None

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
            # Add lang_pair before the closing ---
            new_front_matter = front_matter + f'lang_pair:\n  {pair_lang}: "{pair_title}"\n'
            new_content = content.replace(match.group(0), new_front_matter + '---')
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
    return False

def main():
    en_dir = Path('source/_posts/en')
    zh_dir = Path('source/_posts/zh-CN')
    
    updated_en = 0
    updated_zh = 0
    
    # Process English articles
    print("Processing English articles...")
    for en_file in en_dir.glob('*.md'):
        en_name = en_file.stem
        if en_name in ARTICLE_MAPPING:
            zh_name = ARTICLE_MAPPING[en_name]
            zh_file = zh_dir / f"{zh_name}.md"
            
            if zh_file.exists():
                zh_title = get_title_from_file(zh_file)
                if zh_title:
                    if add_lang_pair_to_file(en_file, zh_title, 'zh-CN'):
                        print(f"  Updated: {en_name}")
                        updated_en += 1
            else:
                print(f"  Warning: Chinese file not found for {en_name}")
        else:
            print(f"  Warning: No mapping for {en_name}")
    
    # Process Chinese articles (reverse mapping)
    print("\nProcessing Chinese articles...")
    reverse_mapping = {v: k for k, v in ARTICLE_MAPPING.items()}
    
    for zh_file in zh_dir.glob('*.md'):
        zh_name = zh_file.stem
        if zh_name in reverse_mapping:
            en_name = reverse_mapping[zh_name]
            en_file = en_dir / f"{en_name}.md"
            
            if en_file.exists():
                en_title = get_title_from_file(en_file)
                if en_title:
                    if add_lang_pair_to_file(zh_file, en_title, 'en'):
                        print(f"  Updated: {zh_name}")
                        updated_zh += 1
            else:
                print(f"  Warning: English file not found for {zh_name}")
        else:
            print(f"  Warning: No mapping for {zh_name}")
    
    print(f"\nDone! Updated {updated_en} English articles and {updated_zh} Chinese articles.")

if __name__ == '__main__':
    main()
