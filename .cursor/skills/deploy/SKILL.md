---
name: deploy
description: >-
  Deploy resume-chatbot to GitHub Pages and Vercel using personal HassaanAhmed97
  credentials from .env.local. Use when deploying, pushing to main, running
  npm run deploy, publishing gh-pages, or when the user mentions Vercel,
  GitHub Pages, or avoiding hassaan-leap / AutoLeap credentials.
---

# Deploy (GitHub Pages + Vercel)

Personal project `HassaanAhmed97/resume-chatbot`. **Never use AutoLeap / hassaan-leap GitHub or Vercel accounts.**

## Credentials (CRITICAL)

- **GITHUB_TOKEN** in `.env.local` — personal HassaanAhmed97 token with `repo` scope. NEVER use `gh` CLI default (hassaan-leap / AutoLeap).
- **GEMINI_API_KEY** on Vercel project `resume-chatbot` Production env (not in git)
- Do NOT use `vercel --prod` from CLI if logged in as wrong account — prefer `git push` to trigger Vercel auto-deploy from GitHub
- Do NOT use AutoLeap GitHub/Vercel accounts for this personal project

## Pre-deploy checklist

```
- [ ] Validate token resolves to HassaanAhmed97
- [ ] Commit with personal author (not hassaan-leap)
- [ ] Push main with token URL (triggers Vercel)
- [ ] Deploy GitHub Pages (gh-pages branch)
```

## Validate token before deploy

```bash
npm run validate:token
# or manually:
TOKEN=$(grep '^GITHUB_TOKEN=' .env.local | cut -d= -f2- | sed 's/^"//;s/"$//' | tr -d '\n')
curl -s -H "Authorization: Bearer $TOKEN" https://api.github.com/user  # must be HassaanAhmed97
```

## Commit author (avoid hassaan-leap showing on commits)

```bash
GIT_AUTHOR_NAME="Hassaan Ahmed" GIT_AUTHOR_EMAIL="hassaan.riaz97@gmail.com" \
GIT_COMMITTER_NAME="Hassaan Ahmed" GIT_COMMITTER_EMAIL="hassaan.riaz97@gmail.com" \
git commit -m "message"
```

## Git push (personal token)

```bash
TOKEN=$(grep '^GITHUB_TOKEN=' .env.local | cut -d= -f2- | sed 's/^"//;s/"$//' | tr -d '\n')
git push "https://x-access-token:${TOKEN}@github.com/HassaanAhmed97/resume-chatbot.git" main
```

Or use the npm script: `npm run push:main`

## GitHub Pages

```bash
npm run deploy:github   # validates token, builds with PUBLIC_URL=/resume-chatbot, pushes gh-pages
# Auth via GITHUB_TOKEN — configure git remote with token if gh-pages push fails
```

Legacy: `npm run deploy` (same build; may fail auth without token remote — prefer `deploy:github`).

## Vercel

- Project: `resume-chatbot` → resume-chatbot-three.vercel.app
- Auto-deploys on push to main (GitHub integration)
- Build: `npm run build:vercel` (PUBLIC_URL=/) — vercel.json buildCommand
- API: /api/chat needs GEMINI_API_KEY in Vercel Production

**Do not** run `vercel --prod` from a hassaan-leap CLI session. Push to main instead.

## Full deploy (both targets)

```bash
npm run deploy:all   # validate token → push main (Vercel) → deploy GitHub Pages
```

## Live URLs

- Frontend (resume link): https://hassaanahmed97.github.io/resume-chatbot/
- Full stack on Vercel: https://resume-chatbot-three.vercel.app
- API: https://resume-chatbot-three.vercel.app/api/chat

## Agent rules

1. Read `GITHUB_TOKEN` only from this project's `.env.local` — never from global gh auth or AutoLeap env.
2. Before any git push or deploy, run `npm run validate:token`.
3. Set commit author env vars on every commit for this repo.
4. Use `npm run push:main` instead of bare `git push origin main`.
5. Use `npm run deploy:github` or `npm run deploy:all` instead of raw `vercel --prod`.
