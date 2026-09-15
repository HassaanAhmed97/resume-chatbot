#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
# shellcheck source=load-github-token.sh
source "$ROOT/scripts/load-github-token.sh"

RESP=$(curl -s -H "Authorization: Bearer $GITHUB_TOKEN" https://api.github.com/user)
LOGIN=$(echo "$RESP" | grep -o '"login"[[:space:]]*:[[:space:]]*"[^"]*"' | head -1 | sed 's/.*"\([^"]*\)"$/\1/')

if [[ "$LOGIN" != "HassaanAhmed97" ]]; then
  echo "ERROR: GitHub token resolves to '${LOGIN:-unknown}', expected HassaanAhmed97" >&2
  echo "Do not use hassaan-leap / AutoLeap credentials for this project." >&2
  exit 1
fi

echo "OK: GitHub token is HassaanAhmed97"
