import os
import shutil

# 原始英文文章列表（需要移到en/文件夹，并创建中文翻译到zh-CN/）
english_originals = [
    "Summary-for-Packaging-and-Assembly-Technologies-for-Integrated-Systems.md",
    "Summerize-for-Bioinformatics-with-ChatGPT.md",
    "welcome.md"
]

# 源目录
source_dir = "source/_posts"
en_dir = "source/_posts/en"
zh_cn_dir = "source/_posts/zh-CN"

# 确保目录存在
os.makedirs(en_dir, exist_ok=True)
os.makedirs(zh_cn_dir, exist_ok=True)

# 获取所有根目录下的md文件（不包括子目录）
root_files = [f for f in os.listdir(source_dir) if f.endswith('.md') and os.path.isfile(os.path.join(source_dir, f))]

print(f"Found {len(root_files)} files in root")

# 1. 移动英文原文到en/文件夹
for eng_file in english_originals:
    src = os.path.join(source_dir, eng_file)
    dst = os.path.join(en_dir, eng_file)
    if os.path.exists(src):
        shutil.move(src, dst)
        print(f"Moved English original: {eng_file} -> en/")

# 2. 移动所有中文文章到zh-CN/文件夹
chinese_files = [f for f in root_files if f not in english_originals]
for cn_file in chinese_files:
    src = os.path.join(source_dir, cn_file)
    dst = os.path.join(zh_cn_dir, cn_file)
    if os.path.exists(src):
        shutil.move(src, dst)
        print(f"Moved Chinese: {cn_file} -> zh-CN/")

print("\nDone! Files organized.")
print(f"English files in en/: {len(os.listdir(en_dir))}")
print(f"Chinese files in zh-CN/: {len(os.listdir(zh_cn_dir))}")
