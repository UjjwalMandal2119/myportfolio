# 🚀 Ujjwal Mandal — Personal Portfolio

A modern, **galaxy / solar-system** themed personal portfolio rebuilt with **React + Vite + Tailwind CSS**.
Clean, enterprise-grade UI with a subtle space aesthetic — animated starfield, orbiting planets and
nebula glows — all while staying fast, responsive and simple to maintain.

## ✨ Features

- **React 18 + Vite** — instant dev server, optimized production build
- **Tailwind CSS** — utility-first styling with a custom "space" theme
- **Galaxy / solar-system vibe** — animated starfield, orbiting planets, nebula glows, glassmorphism cards
- **Photo showcase** — your photo sits at the center of a mini solar system in the hero
- **Live GitHub Projects** — projects are fetched from the GitHub API (`UjjwalMandal2119`), always up to date
- **Mailto contact** — one-click email button plus a form that opens the visitor's mail client pre-filled
- **Fully responsive** — mobile-first, works on all devices
- **SEO-friendly** — semantic markup, meta description, theme color

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | React 18, Vite 5 |
| **Styling** | Tailwind CSS 3, custom CSS animations |
| **Data** | GitHub REST API (live project sync) |
| **Icons** | Font Awesome 6 |
| **Fonts** | Inter |

## 🚀 Quick Start

```bash
npm install     # install dependencies
npm run dev     # start dev server (http://localhost:5173)
npm run build   # production build → dist/
npm run preview # preview the production build
```

## 📁 Project Structure

```
myportfolio/
├── index.html              # Vite entry (loads /src/main.jsx)
├── package.json
├── vite.config.js
├── tailwind.config.js      # space theme, orbit/twinkle animations
├── postcss.config.js
└── src/
    ├── main.jsx            # React root
    ├── App.jsx             # assembles all sections
    ├── index.css           # Tailwind + galaxy background styles
    ├── data.js             # ✏️ EDIT: profile, skills, links
    ├── assets/ujjwal.jpg   # your photo
    └── components/
        ├── Starfield.jsx   # animated star + nebula background
        ├── Navbar.jsx
        ├── Hero.jsx        # photo inside solar system
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx    # live GitHub repos
        ├── Contact.jsx     # mailto form + direct email
        └── Footer.jsx
```

## ✏️ Customize

- **Personal info / links** → edit `src/data.js` (email, phone, GitHub, LinkedIn, LeetCode, tagline)
- **Skills** → edit the `skills` array in `src/data.js`
- **Projects** → auto-synced from GitHub; the username comes from `profile.githubUser` in `src/data.js`
- **Photo** → replace `src/assets/ujjwal.jpg` (keep the same filename) or update the import in `Hero.jsx`
- **Colors / animations** → adjust the `space` / `nebula` palette and keyframes in `tailwind.config.js`

## 🚀 Deploy

The production build lives in `dist/` and is fully static — ready for **Vercel**, **Netlify**,
**GitHub Pages**, or your existing **AWS EC2 + Nginx** setup.

```bash
npm run build
```
