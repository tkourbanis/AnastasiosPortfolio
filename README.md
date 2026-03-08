# Anastasios Kourbanis — Mechanical Engineering Portfolio

A modern, minimal portfolio website built for a Mechanical Engineering student. Inspired by engineering blueprints, CAD schematics, and technical precision.

## Tech Stack

- **React 19** + **TypeScript** via Vite
- **Tailwind CSS v4** (with `@tailwindcss/vite` plugin)
- **Framer Motion** — scroll-triggered animations, hover effects
- **React Icons** — icon library
- **Inter** + **JetBrains Mono** — Google Fonts

## Getting Started

### Prerequisites

- Node.js ≥ 18  
- npm ≥ 9

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Sticky nav with mobile menu
│   ├── Hero.tsx            # Blueprint grid hero + entrance animation
│   ├── About.tsx           # Bio + interactive resume card
│   ├── Projects.tsx        # Project grid section
│   ├── ProjectCard.tsx     # Individual project card with hover animation
│   ├── Experience.tsx      # Timeline section
│   ├── TimelineItem.tsx    # Individual timeline entry with bolt marker
│   ├── Coursework.tsx      # Filterable course badge grid
│   └── Contact.tsx         # Contact form + social links
├── pages/
│   └── Home.tsx            # Page composition
├── data/
│   ├── projects.ts         # Project data
│   ├── experience.ts       # Work/research history
│   └── coursework.ts       # Course list with categories
├── App.tsx                 # Root app with Navbar + Footer
├── main.tsx                # React entry point
└── index.css               # Tailwind + custom utilities
```

## Sections

| Section | Description |
|---|---|
| **Hero** | Animated intro with blueprint grid background |
| **About** | Two-column layout: bio + resume preview card |
| **Projects** | 4 project cards with tools, GitHub, and case study links |
| **Experience** | Vertical timeline with bolt-style markers |
| **Coursework** | Filterable grid of courses by category |
| **Contact** | Validated contact form + social links |

## Customisation

1. **Personal info** — update name, email, LinkedIn/GitHub URLs in `App.tsx`, `Contact.tsx`, `Hero.tsx`, and `About.tsx`
2. **Projects** — edit `src/data/projects.ts`
3. **Experience** — edit `src/data/experience.ts`
4. **Coursework** — edit `src/data/coursework.ts`
5. **Resume** — place your PDF at `public/resume.pdf`

## Accessibility

- Semantic HTML (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`)
- ARIA labels on interactive elements
- Skip-to-content link for keyboard users
- Form inputs with `aria-required`, `aria-invalid`, and `aria-describedby`
- Focus styles preserved throughout

## License

MIT
