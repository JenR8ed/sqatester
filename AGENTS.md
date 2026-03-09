# AGENTS.md — sqatester

## About This Repository
QA Engineer & Software Developer portfolio for Jennifer McKinley (@JenR8ed).
Built with React 18, Vite, and Tailwind CSS. Deployed to GitHub Pages via GitHub Actions.

**Live site:** https://jenr8ed.github.io/sqatester

## Stack
- React 18 + Vite
- Tailwind CSS
- Lucide React Icons
- GitHub Actions (CI/CD to GitHub Pages)

## Environment Setup
```bash
npm install
npm run dev       # local dev server
npm run build     # production build
npm run preview   # preview production build
```

## Key Files
- `src/` — React components and pages
- `public/` — static assets
- `index.html` — entry point
- `.github/workflows/` — GitHub Actions CI/CD pipeline
- `.Jules/` — Jules task history

## Jules Task Guidelines
- Always run `npm install` before making changes
- Run `npm run build` to verify no build errors before committing
- Keep components in `src/` modular and reusable
- Use Tailwind CSS utility classes — do not add custom CSS unless necessary
- Accessibility: maintain ARIA attributes on interactive elements
- Do NOT modify `.github/workflows/` without explicit instruction
- Target branch for Jules PRs: `main`

## Coding Conventions
- Functional React components only (no class components)
- Use existing Lucide icon imports before adding new ones
- Commit messages: use imperative mood, e.g. "Fix navigation accessibility"
- No hardcoded colors — use Tailwind theme classes

## Common Tasks for Jules
- Fix accessibility (ARIA, keyboard navigation, contrast)
- Add or update portfolio sections in `src/`
- Resolve TODO comments
- Fix build or lint warnings
- Update README.md content
