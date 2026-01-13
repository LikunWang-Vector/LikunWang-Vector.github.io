import os
for f in os.listdir('source/_posts/zh-CN'):
    if 'gbk' in f.lower() or 'kiro' in f.lower() or '举报' in f:
        print(repr(f))
