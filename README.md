# Abhi — Portfolio Website

A premium comic-book inspired personal portfolio for a software engineering student. Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Visual Design

The portfolio is inspired by graphic novel aesthetics — thick borders, offset shadows, halftone dot patterns, bold typography, and a high-contrast red/yellow/black palette. It feels like a premium printed comic book, not a generic SaaS dashboard.

**Color Palette:**
- Black: `#111111`
- Comic Red: `#E63946`
- Comic Yellow: `#FFD60A`
- White: `#F8F9FA`
- Accent Blue: `#4CC9F0`

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 8** (build tool)
- **Tailwind CSS v4** (utility styling)
- **Framer Motion** (animations)
- **gh-pages** (deployment)

## Project Structure

```
src/
├── components/       # Reusable UI components (Navbar, SectionTitle, ComicPanel)
├── sections/         # Page sections (Hero, About, Skills, Projects, Education, Resume, Contact, Footer)
├── data/             # All content data (projects, skills, contact, education)
├── types/            # TypeScript interfaces
├── utils/            # Animation variants
├── hooks/            # Custom hooks
├── App.tsx
└── main.tsx
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Build

```bash
npm run build
```

Output goes to `dist/`

### Preview production build

```bash
npm run preview
```

## Deployment to GitHub Pages

### Option 1 — GitHub Actions (automatic)

The repo includes `.github/workflows/deploy.yml`. Every push to `main` automatically builds and deploys to GitHub Pages.

1. Go to your repo → **Settings** → **Pages**
2. Set source to **GitHub Actions**
3. Push to `main` — done

### Option 2 — Manual deploy

```bash
npm run deploy
```

This runs `gh-pages -d dist` using the `gh-pages` package.

> **Note:** Update the `base` in `vite.config.ts` and `homepage` in `package.json` to match your actual GitHub repository name if it's different from `Portfolio`.

## Customization

### Update personal info
Edit `src/data/index.ts` — all content (projects, skills, contact links, education) is centralized here.

### Update resume
Replace `public/resume.pdf` with your actual resume PDF file.

### Update base URL
If your repo name differs from `Portfolio`, update:
- `vite.config.ts` → `base: '/your-repo-name/'`
- `package.json` → `"homepage": "https://yourusername.github.io/your-repo-name/"`

## Sections

| Section | Description |
|---------|-------------|
| Hero | Full-screen comic cover with name, title, tagline, and CTAs |
| About | Origin story with comic panels and trait cards |
| Skills | Category cards with animated skill pills |
| Projects | Comic issue cards for each project |
| Education | Timeline card layout |
| Resume | Preview card with PDF download |
| Contact | Animated link cards for email, GitHub, LinkedIn |
| Footer | Copyright, social links, back-to-top |

## Accessibility

- Semantic HTML with proper heading hierarchy
- ARIA labels on interactive elements
- Skip-to-main-content link
- Keyboard navigable
- WCAG-compliant color contrast on primary text

---

Built with ❤️ and strong opinions about typography.
