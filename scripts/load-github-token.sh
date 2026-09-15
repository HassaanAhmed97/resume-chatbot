#!/usr/bin/env bash
# Load GITHUB_TOKEN from project .env.local (never use gh CLI / AutoLeap credentials).
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="$ROOT/.env.local"

if [[ ! -f "$ENV_FILE" ]]; then
  echo "ERROR: .env.local not found at $ENV_FILE" >&2
  exit 1
fi

GITHUB_TOKEN=$(grep '^GITHUB_TOKEN=' "$ENV_FILE" | cut -d= -f2- | sed 's/^"//;s/"$//' | tr -d '\n')
export GITHUB_TOKEN

if [[ -z "$GITHUB_TOKEN" ]]; then
  echo "ERROR: GITHUB_TOKEN not set in .env.local" >&2
  exit 1
fi
