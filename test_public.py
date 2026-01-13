from pathlib import Path
p = Path('public')
print('public exists:', p.exists())
print('2022 exists:', (p / '2022').exists())
print('2022/12/26/en exists:', (p / '2022/12/26/en').exists())
if (p / '2022/12/26/en').exists():
    for d in (p / '2022/12/26/en').iterdir():
        print(' -', d.name)
