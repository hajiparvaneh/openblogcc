<p align="center">
  <img src="public/openblog-logo-light.png" alt="OpenBlog" width="160" />
</p>

<h1 align="center">OpenBlog.cc</h1>

<p align="center">
  <a href="https://openblog.cc"><img src="https://img.shields.io/badge/Live-openblog.cc-0a7f5a" alt="openblog.cc" /></a>
  <a href="https://github.com/hajiparvaneh/openblog"><img src="https://img.shields.io/badge/Template-openblog-0969da" alt="OpenBlog template" /></a>
  <a href="https://github.com/hajiparvaneh/openblogcc/pulls"><img src="https://img.shields.io/badge/PRs-welcome-2ea44f" alt="PRs welcome" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT License" /></a>
</p>

<p align="center">
  <strong>Live community preview of <a href="https://github.com/hajiparvaneh/openblog">OpenBlog</a>.</strong><br />
  Read posts, sign in with GitHub, contribute via pull requests, and climb the public leaderboard.
</p>

<p align="center">
  🌐 <a href="https://openblog.cc">https://openblog.cc</a>
</p>

---

## 👋 What is this repo?

This repository powers **[openblog.cc](https://openblog.cc)** — the public demo and community site for OpenBlog.

It is **not** the blogging template. If you want your own blog (Markdown + git, no accounts or scoring), use the main project instead:

**📦 Template:** [github.com/hajiparvaneh/openblog](https://github.com/hajiparvaneh/openblog)

This preview adds community features on top of that idea:

- ✍️ Collaborative posts improved through pull requests
- 🔐 **Sign in with your GitHub account** so your contributions are tied to you
- 🏆 Public **leaderboard** and points for merged improvements
- 👀 Visible proof-of-work on GitHub — useful for hiring, referrals, and reputation

---

## 🌟 Why contribute?

- Practice real collaboration in public with focused PRs
- Build a visible portfolio of writing and teamwork on GitHub
- Improve technical content others actually read on [openblog.cc](https://openblog.cc)
- Earn points on the leaderboard when your PR is merged

---

## 🔐 Make yourself visible

1. Open **[openblog.cc](https://openblog.cc)**.
2. **Sign in with GitHub** (site header / contribute flow).
3. Browse posts, then contribute from the site or by opening a PR on this repo.
4. When your PR is merged and scored, your GitHub profile shows up on the **leaderboard**.

Signing in uses a small GitHub OAuth Worker belonging to this preview — not the cloneable template.

---

## 🚀 First contribution in 5 steps

1. **Fork** this repository and clone your fork.
2. Create a branch: `git checkout -b my-post-update`.
3. Add or edit a post in `content/posts/<category>/<post>.md`.
4. Run locally and verify your changes (`npm install` → `npm run dev`).
5. Open a PR and mention the changed slug (example: `networking/how-dns-works`).

Prefer starting from the site? Use **Contribute** / quick contribute on [openblog.cc](https://openblog.cc) after signing in with GitHub.

---

## ✍️ Add a new blog post

Create a file at:

`content/posts/<category>/<post>.md`

- A new folder under `content/posts/` is a new category.
- Reuse existing categories when you can; add a new one only when the topic clearly does not fit.

Example: `content/posts/networking/how-http-works.md`

```md
---
title: How HTTP Works
description: A beginner-friendly explanation of the HTTP request/response model.
date: 2026-03-12
---

Start with a short intro.

## Main section

Add clear examples, references, and practical notes.
```

Guidelines:

- Keep category and filename lowercase and hyphenated.
- Prefer clear, factual writing with practical examples.
- Keep a PR focused on one post/topic when possible.

Full metadata guide: [POSTS-README.md](POSTS-README.md)

---

## 🛠️ Improve existing posts

Common contribution types:

- Fix typos and wording
- Add trusted sources
- Fact-check outdated statements
- Add examples and clearer explanations
- Add translations

---

## ✅ PR checklist

- Changes are in `content/posts/<category>/<post>.md`
- PR description explains what improved and why
- Changed slug(s) are mentioned in the PR
- Do not manually edit `openblog/generated/*`

---

## 🏷️ Scoring labels

Points come from labels in `openblog/enums/scoring-labels.json`:

| Label | Points |
|-------|--------|
| `typo` | +5 |
| `source-added` | +10 |
| `fix-metadata` | +10 |
| `fact-check` | +15 |
| `new-example` | +20 |
| `translation` | +30 |
| `new-post` | +50 |

Rules:

- Only **merged** PRs are eligible.
- At least one scoring label is required unless the PR adds a new post file.
- New files under `content/posts/<category>/<post>.md` automatically get `new-post` scoring.
- Frontmatter metadata edits can automatically get `fix-metadata` (+10) when `new-post` does not apply.
- Multiple scoring labels on one PR are summed.

---

## 🧰 Local development

**Requirements:** Node.js 18+ (or newer LTS), npm

```bash
npm install
npm run dev
```

Production preview:

```bash
npm run build
npm run preview
```

Community pieces that live **only** in this repo (not in the template):

- GitHub OAuth Worker (`worker/`)
- PR validation & scoring workflows
- Leaderboard / events under `openblog/`

---

## 📁 Project structure

- `content/posts/<category>/*.md` — blog content
- `openblog/events/*.json` — immutable merged-PR score events
- `openblog/enums/scoring-labels.json` — score labels
- `openblog/generated/` — users, leaderboard, category boards (generated)
- `scripts/` — add events / regenerate state
- `worker/` — GitHub OAuth Worker for sign-in on openblog.cc

---

## 📦 Want your own blog?

Use the clean OpenBlog template (no OAuth, scoring, or Worker):

**https://github.com/hajiparvaneh/openblog**

```bash
git clone https://github.com/hajiparvaneh/openblog.git my-blog
cd my-blog
npm install
npm run dev
```

---

## 🔧 Maintainer notes

```bash
npm run openblog:add-event
npm run openblog:generate
```

Deploy the OAuth Worker from `worker/` with Wrangler when auth config changes.
