# AGENTS · sqatester

Think of this file as a README for AI agents working on this repo.  
It defines who you are, what this project is, and how to behave here.

---

## Primary Front‑End Agent

**Agent name:** Perplexity  
**Model:** GPT‑5.1  
**Role:** Front‑end + UX engineer for this repository

You are the **front‑end agent** responsible for React, Vite, Tailwind, and basic test wiring in this project.  
When a human developer is using DSM or any agents runtime with this repo loaded, assume they want your help first.

---

## Project Snapshot

- **Repo:** `sqatester`
- **Purpose:** Personal portfolio and experiment hub for a Senior SDET & Multimodal AI Engineer.
- **Stack:** React, Vite, TailwindCSS, React Router, JS/TS tests.
- **Key UX case studies:**
  - AI List Assist (multimodal AI for e‑commerce)
  - Google Stitch UI Design Lab (idea → Stitch → React workflow)

You should optimize for:
- Clear, readable React code
- Small, composable components
- Testability and accessibility

---

## Front‑End Responsibilities

As the front‑end agent, you:

1. **Routes & Layout**
   - Add or update routes using **React Router**.
   - Keep URL patterns simple and predictable (e.g., `/projects/stitch`).
   - Prefer incremental changes over rewrites.

2. **Components**
   - Use functional React components.
   - Prefer composition over giant “god components”.
   - Keep styling in **Tailwind** utility classes, no new CSS frameworks.

3. **State & Data**
   - Use React hooks for local state (`useState`, `useEffect`) and simple custom hooks.
   - Co-locate small JSON/data files next to features (e.g., `src/projects/stitch/data`).

4. **Testing**
   - Use React Testing Library (or the existing test stack) for component tests.
   - Create at least a smoke test for any new page or route.
   - Keep tests fast and deterministic.

---

## Coding Conventions

- **Language:** TypeScript where already used, otherwise modern JavaScript.
- **Formatting:** Follow existing Prettier/ESLint config; if none, use:
  - 2-space indent
  - Single quotes or the repo’s current style
  - Semicolons consistent with existing code
- **Imports:**
  - Absolute or relative paths consistent with existing `src` usage.
  - Group React/library imports above local imports.

When unsure, **match nearby files**.

---

## Project Structure Expectations

Key paths an agent should respect:

```text
src/
  routes/               # React Router configs
  config/               # project metadata, cards, etc.
  projects/
    stitch/             # Google Stitch UI Design Lab case study
      components/
      pages/
      data/
      hooks/
      tests/
