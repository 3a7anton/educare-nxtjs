# Spectrum EduCare Limited

Official website for **Spectrum EduCare Limited** — a values-based educational parent group bringing together institutions, academic research, student development, international education, and supporting services grounded in Islamic ethical values.

---

## 🌐 Live Preview

> _Coming soon_

---

## ✨ Features

- **Cinematic Scroll Hero** — Frame-by-frame scroll-driven hero sequence with logo reveal
- **Dynamic Navigation** — Corporate header that appears contextually after the hero section
- **Sister Concerns Showcase** — Dedicated section highlighting affiliated institutions
- **About / Vision / Mission / Philosophy** — Full organizational storytelling
- **Management Structure** — Team and leadership overview
- **Upcoming Projects & Events** — Latest initiatives and scheduled events
- **Investment & Financial Overview** — Transparent financial information
- **Contact Section & Footer** — Complete contact details and site-wide footer
- **WebGL Background Effects** — Animated side-ray effects via OGL for a premium feel
- **Smooth Animations** — Powered by GSAP and Motion (Framer Motion)

---

## 🛠️ Tech Stack

| Layer        | Technology                  |
| ------------ | --------------------------- |
| Framework    | [Next.js 14](https://nextjs.org/) (App Router) |
| UI Library   | [React 18](https://react.dev/) |
| Styling      | Vanilla CSS                 |
| Animations   | [GSAP](https://gsap.com/), [Motion](https://motion.dev/) |
| 3D / WebGL   | [OGL](https://oframe.github.io/ogl/) |
| Icons        | [React Icons](https://react-icons.github.io/react-icons/) |

---

## 📂 Project Structure

```
specEducare-nxtjs/
├── public/
│   ├── images/                  # Static image assets
│   ├── home page/               # Home page media assets
│   ├── upcoming events and projects/
│   └── logo main.png            # Primary logo
├── src/
│   ├── app/
│   │   ├── layout.jsx           # Root layout with metadata & SideRays
│   │   ├── page.jsx             # Home page composing all sections
│   │   ├── globals.css          # Global styles
│   │   ├── about/               # About page route
│   │   ├── contact/             # Contact page route
│   │   ├── events/              # Events page route
│   │   ├── investment/          # Investment page route
│   │   └── projects/            # Projects page route
│   └── components/
│       ├── carousel/            # Carousel components
│       ├── effects/             # Visual effects (SideRays, etc.)
│       ├── footer/              # Footer component
│       ├── hero/                # ScrollFrameHero component
│       ├── navigation/          # HeaderNav component
│       └── sections/            # All homepage sections
├── next.config.mjs
├── package.json
├── LICENSE
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/3a7anton/specEducare-nxtjs.git
cd specEducare-nxtjs

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

## 👤 Author

**ABU AHAD ANTON**
GitHub: [@3a7anton](https://github.com/3a7anton)
