# buildwithgiri — Project Context

## What this project is

**buildwithgiri.vercel.app** is Giriraj Bhagat's personal brand website. Giriraj is a Support Services Manager at Adobe in Ottawa, Canada, originally from Gujarat, India. He has been in Canada for 10 years and has a Computer Systems Technology background. The site exists to share his career story, publish blog posts, and help international students and early-career professionals break into tech in Canada.

The site has:
- **Hero** — headline, stats, bento card layout, Calendly booking link
- **About** — career timeline milestones
- **Career** — detailed career section
- **Wall of Wins** — mentorship success stories
- **Blog** — self-hosted MDX blog with search (Fuse.js) and tag filtering
- **Contact** — LinkedIn, Twitter, email
- **GiriBot** — Claude-powered AI chatbot widget (bottom right of every page)
- **/now** — a "what I'm working on right now" page, updated monthly
- **Giscus comments** — GitHub Discussions-based comments on every blog post

---

## Tech stack

| Layer | Tool |
|---|---|
| Framework | React 18 + Vite 6 |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS 3 + @tailwindcss/typography |
| Routing | React Router v7 |
| Blog content | MDX with remark-frontmatter, remark-gfm, rehype-highlight |
| Animations | Framer Motion |
| Search | Fuse.js |
| Comments | Giscus (GitHub Discussions) |
| Analytics | Vercel Analytics |
| AI chatbot | Anthropic API (claude-haiku-4-5-20251001) via /api/chat.js |
| Deployment | Vercel — auto-deploys on push to main |
| Repo | github.com/giriraj1310/buildwithgiri |

---

## Getting started after cloning

```bash
npm install
npm run dev         # → http://localhost:5173
```

For GiriBot to work locally, create a `.env` file at the project root:
```
ANTHROPIC_API_KEY=your_key_here
```
This is already in `.gitignore`. The key is stored in Vercel's environment settings for production.

### Build for production
```bash
npm run build       # runs generate-posts-meta.js then vite build
npm run preview     # preview the production build locally
```

---

## How to add a new blog post

1. Create a new `.mdx` file in `src/posts/` — the filename becomes the slug fallback
2. Add frontmatter at the top:

```mdx
---
title: "Your Post Title"
slug: your-post-slug
date: "2026-05-01"
excerpt: "One or two sentence summary shown on blog cards and in social previews."
tags: ["career", "canada"]
readTime: "5 min read"
---

Your content here...
```

3. Commit and push — Vercel builds automatically and `posts-meta.json` is regenerated as part of the build step

No other files need to be touched. The post appears in the blog grid, search, and tag filters automatically.

---

## How to update the Wall of Wins

Edit `src/data/wins.ts`. Each entry has: `id`, `initials`, `name`, `flag`, `achievement`, `company`, `quote`, `category`.

Valid categories: `"first-job" | "promotion" | "internship" | "offer" | "pivot"`

---

## How to update the /now page

Edit `src/pages/Now.tsx`. Update the `LAST_UPDATED` constant and the `now` object. Meant to be refreshed monthly.

---

## Key architectural decisions

### Dark mode is permanently locked
The site is dark mode only. `class="dark"` is hardcoded on `<html>` in `index.html`. There is no toggle. Do not add one back. The old `ThemeContext.jsx` still exists in `src/context/` but is unused — it can be deleted safely.

### TypeScript with strict mode
All source files are `.tsx`/`.ts`. Shared types live in `src/types/index.ts` — `Post`, `Win`, `WinCategory`. Before removing or refactoring any shared piece (context, utility, type), grep the entire `src/` directory for usages first.

### Blog post meta tags for social sharing
`middleware.ts` at the project root intercepts requests from social bots (LinkedIn, Twitter, Slack, etc.) to `/blog/:slug` and returns an HTML response with the correct OG meta tags for that post. It reads from `public/posts-meta.json`, which is generated at build time by `scripts/generate-posts-meta.js`. When adding a new blog post, the JSON is regenerated automatically on the next build.

### Self-hosted MDX blog
The blog was migrated from Hashnode to self-hosted MDX in April 2026. All posts live in `src/posts/*.mdx`. The `src/utils/posts.ts` utility uses `import.meta.glob` to eagerly load all posts at build time — no API calls needed at runtime.

### GiriBot
Powered by `claude-haiku-4-5-20251001` via a Vercel serverless function at `api/chat.js`. The bot's personality, context about Giriraj, and all contact details are defined in the `GIRI_CONTEXT` string inside that file. Update that string to keep GiriBot's knowledge current.

---

## Project evolution (from git history)

| Date | What happened |
|---|---|
| Apr 2025 | Initial commit — Hero, About, Career, Contact, Vercel Analytics |
| Apr 2025 | GiriBot widget added (originally rule-based, then secured) |
| Mar 2026 | GiriBot replaced with Claude API (Haiku) |
| Mar 2026 | Blog connected to Hashnode, then upgraded to self-hosted MDX |
| Apr 2026 | Giscus comments added, footer overhauled with easter egg (Konami code) |
| Apr 2026 | Major redesign — Hero bento cards, Wall of Wins, /now page, font system |
| Apr 2026 | Dark mode locked permanently, theme toggle removed |
| Apr 2026 | Full TypeScript migration with strict mode |
| Apr 2026 | OG meta descriptions broadened (beyond students to all professionals) |
| Apr 2026 | Share buttons added to blog posts (LinkedIn, Twitter, copy link) |
| Apr 2026 | Edge middleware added for per-post social preview cards |
| Apr 2026 | Giscus GitHub Discussions enabled and verified working |

---

## Workflow for making changes

```bash
# Make your changes, then:
git add src/path/to/changed/file.tsx
git commit -m "Short description of what and why"
git push origin main
# Vercel deploys automatically in ~1 minute
```

After pushing, paste your URL into **linkedin.com/post-inspector** to force LinkedIn to re-scrape the latest OG tags if needed.

---

## Contact info (used in GiriBot and footer)

- Email: buildwithgiri@gmail.com
- LinkedIn: linkedin.com/in/girirajbhagat
- Twitter: twitter.com/GirirajBhagat
- Calendly: calendly.com/giriraj1310/30min
- Resume: /Bhagat_Giriraj_Resume.pdf (in /public)
