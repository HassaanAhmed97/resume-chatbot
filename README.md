# Hassaan Ahmed - AI Portfolio

A clean, minimal portfolio website with an integrated AI chatbot powered by Google Gemini.

## Features

- **Hassaan AI**: Interactive chatbot that answers questions about my experience
- **Clean Design**: Minimal white aesthetic inspired by modern portfolio sites
- **Responsive**: Works on all devices
- **Fast**: Tailwind CSS via CDN, optimized React components

## Tech Stack

- **Frontend**: React 18 + Tailwind CSS
- **Backend**: Vercel Serverless Functions
- **AI**: Google Gemini 1.5 Flash
- **Hosting**: GitHub Pages (frontend) + Vercel (API)

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Environment Variables

For the API to work, set up the following in Vercel:

```
GEMINI_API_KEY=your_gemini_api_key_here
```

## Project Structure

```
├── api/
│   └── chat.js              # Vercel serverless API
├── public/
│   └── index.html           # HTML with Tailwind CDN
├── src/
│   ├── App.js               # Main app component
│   ├── index.js             # React entry
│   └── components/
│       ├── layout/
│       │   ├── Header.js    # Navigation
│       │   └── Footer.js    # Contact CTA
│       ├── sections/
│       │   ├── Hero.js      # Introduction
│       │   ├── Experience.js # Work history
│       │   └── Projects.js  # Key achievements
│       └── chatbot/
│           ├── ChatWidget.js # AI chat container
│           ├── SuggestedPrompts.js
│           └── MessageBubble.js
├── package.json
└── vercel.json
```

## Deployment

1. **API (Vercel)**:
   - Connect your GitHub repo to Vercel
   - Add `GEMINI_API_KEY` environment variable
   - Deploy

2. **Frontend (GitHub Pages)**:
   - Run `npm run deploy`
   - Enable GitHub Pages in repo settings

## Contact

- Email: hassaan.riaz97@gmail.com
- LinkedIn: [hassaan-ahmed97](https://linkedin.com/in/hassaan-ahmed97)
- GitHub: [HassaanAhmed97](https://github.com/HassaanAhmed97)
