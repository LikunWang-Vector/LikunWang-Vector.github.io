#!/usr/bin/env bash
# Local preview. Native EN/ZH + Google Translate (in-page, lazy loaded).
# Usage: bash scripts/preview.sh [extra hugo server flags]
set -euo pipefail
cd "$(dirname "$0")/.."

if [ -f .env ]; then
  set -a
  # shellcheck disable=SC1091
  . ./.env
  set +a
  echo "Loaded .env"
fi

if ! command -v hugo >/dev/null 2>&1; then
  export PATH="/d/Projects/.tools/hugo136:$PATH"
fi
if ! command -v go >/dev/null 2>&1; then
  export PATH="/c/Program Files/Go/bin:$PATH"
fi
export GOPROXY="${GOPROXY:-https://goproxy.cn,direct}"
export GOSUMDB="${GOSUMDB:-sum.golang.google.cn}"

echo "Translation: native EN/ZH + Google Translate (in-page, loaded on first use)"

exec hugo server --port 1313 --bind 127.0.0.1 --disableFastRender "$@"
