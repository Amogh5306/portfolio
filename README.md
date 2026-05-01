# Amogh Dey — Portfolio

A premium, minimalist personal portfolio built with React, Tailwind CSS v4, and Framer Motion. Features a warm light/dark mode, custom animated cursor, and smooth scroll-triggered animations.

🔗 **Live:** [portfolio-amogh5306s-projects.vercel.app](https://portfolio-amogh5306s-projects.vercel.app)

---

## ✨ Features

- **Light & Dark Mode** — Smooth animated toggle with localStorage persistence
- **Custom Cursor** — Spring-physics cursor using Framer Motion that expands on interactive elements (hidden on touch devices)
- **Scroll Animations** — Staggered entrance effects, fade-ins, and viewport-triggered reveals
- **Responsive Design** — Fully responsive layout from mobile to desktop
- **Premium Aesthetics** — Curated color palettes, glassmorphism navbar, hover glows, and micro-interactions

## 🎨 Design

| Mode | Background | Text | Accent |
|------|-----------|------|--------|
| Light | Warm cream `#faf9f6` | Soft charcoal | Terracotta `#d4683a` |
| Dark | Night black `#08090b` | Silver gray | Terracotta `#e8844e` |

## 🛠 Tech Stack

- **React 19** — UI framework
- **Vite 8** — Build tool & dev server
- **Tailwind CSS v4** — Utility-first styling with custom theme
- **Framer Motion** — Animations & custom cursor physics
- **Inter** — Typography (Google Fonts)

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Fixed glassmorphism nav + theme toggle
│   ├── Hero.jsx            # Full-viewport intro section
│   ├── Skills.jsx          # Categorized skills grid with animated pills
│   ├── Experience.jsx      # Timeline-style experience cards
│   ├── Footer.jsx          # Minimal footer
│   ├── CustomCursor.jsx    # Spring-physics animated cursor
│   └── ThemeToggle.jsx     # Animated sun/moon toggle button
├── context/
│   └── ThemeContext.jsx     # Theme state + localStorage persistence
├── App.jsx                  # Root layout
├── main.jsx                 # Entry point
└── index.css                # Tailwind config, color palettes, global styles
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 📦 Deployment

Deployed on [Vercel](https://vercel.com). To redeploy after changes:

```bash
git add -A
git commit -m "your message"
git push
```

---

Built by **Amogh Dey**
