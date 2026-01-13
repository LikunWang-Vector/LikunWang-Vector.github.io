#!/usr/bin/env python3
import json
from pathlib import Path
from datetime import datetime

output_path = Path('source/js/lang-map.json')
test_data = {"test": datetime.now().isoformat(), "url1": "/test/url/"}

with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(test_data, f, ensure_ascii=False, indent=2)

print(f"Wrote test data to {output_path}")

# Read it back
with open(output_path, 'r', encoding='utf-8') as f:
    data = json.load(f)
print(f"Read back: {data}")
