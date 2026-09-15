#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

# shellcheck source=load-github-token.sh
source "$ROOT/scripts/load-github-token.sh"
"$ROOT/scripts/validate-github-token.sh"

git push "https://x-access-token:${GITHUB_TOKEN}@github.com/HassaanAhmed97/resume-chatbot.git" main
