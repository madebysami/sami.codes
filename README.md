# sami.codes

The personal digital garden and portfolio of Sami Bashraheel, rebuilt with Astro, Tailwind CSS, and custom vanilla JavaScript integrations. 

This repository serves as my base for development experiments, writing, and showcasing my work. 

## 🚀 Features

- **15 Dynamic Themes:** A highly customized global CSS injection that rotates 15 unique color themes (Midnight, Mint, Flashbang, Retrowave, etc) natively driven by a humorous, complaining UI toggle.
- **Astro Content Collections:** Type-safe markdown (`.mdx`) processing for both the `projects` output section and the `blog` transmission logs. 
- **Developer Aesthetics:** Tailwind typography overrides mapping to the global themes, interactive skill pills, and terminal-inspired UI interactions (like `cd ../` return links).
- **Canvas Game:** A fully integrated JavaScript canvas jumping game running completely isolated but strictly subscribing to the active theme's colors.

## 📁 Project Structure

```text
/
├── public/                 # Static assets (Favicon, OG images)
├── src/
│   ├── components/         # Reusable Astro UI components (Hero, Game, Cards)
│   ├── content/            # Type-safe data collections 
│   │   ├── blog/           # MDX Transmission logs
│   │   ├── projects/       # MD Output logs
│   │   └── config.ts       # Zod schemas definitions
│   ├── layouts/            # Base layout wrapper & global head injection
│   ├── pages/              # Astro routing (index, /blog)
│   └── styles/             # Global.css featuring the 15 dynamic themes
└── package.json
```

## 🧞 Development Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run lint`            | Run Prettier and Astro Checkers                  |

## 🛠️ Stack

- **Framework:** [Astro](https://astro.build/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Typography:** Inter & Fira Code
- **Deployment:** GitHub Pages / Cloudflare Pages
