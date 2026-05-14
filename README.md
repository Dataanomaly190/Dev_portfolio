# Dev Portfolio

A personal developer portfolio built with React 19, Vite, and Framer Motion. Showcases projects, skills, certifications, and experience with animated section transitions and a dark-themed UI.

---

## Overview

This is a single-page application structured into seven sections — Hero, About, Skills, Experience, Projects, Certifications, and Contact. Each section uses Framer Motion for entrance animations and smooth scroll-based transitions.

The project grid supports category filtering (Frontend, Full-Stack, Python, Experimental) with live count badges. The certifications section opens an overlay modal that supports both image and embedded PDF previews. A Tableau data visualization gallery is embedded inline, and a resume download button serves the latest CV directly from the browser.

---

## Tech Stack

| Category       | Technology                              |
|----------------|-----------------------------------------|
| Framework      | React 19 + Vite 8                       |
| Animations     | Framer Motion 12                        |
| Styling        | Tailwind CSS v4 + Vanilla CSS           |
| Icons          | React Icons 5                           |
| Typewriter     | react-typed                             |
| Build Tool     | Vite (ESM)                              |
| Deployment     | Render (Static Site)                    |

---

## Project Structure

```
Portfolio/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── resume.pdf      #if not, make one here with same name (resume.pdf)
├── src/
│   ├── assets/
│   │   ├── Certificates/          #Contains certification images and pdfs (if not present make one, see more from project.js imports)
│   │   └── [project images]
│   ├── components/
│   │   ├── Home/           # Navbar + Hero
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Experience/
│   │   ├── Projects/
│   │   │   └── data/
│   │   │       └── projects.js
│   │   ├── Certifications/
│   │   │   └── data/
│   │   └── Contact/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── render.yaml
```

---

## Local Development

**Prerequisites:** Node.js >= 18, npm >= 9

```bash
git clone https://github.com/Dataanomaly190/Dev_portfolio.git
cd Dev_portfolio
npm install
npm run dev
```

The dev server starts at http://localhost:5173.

---

## Production Build

```bash
npm run build
npm run preview
```

The output is written to the `dist/` directory.

---

## Render Deployment

This project is configured as a static site on Render via `render.yaml`.

| Setting             | Value                      |
|---------------------|----------------------------|
| Build Command       | `npm install && npm run build` |
| Publish Directory   | `dist`                     |
| Node Version        | 18                         |

Render builds and serves the `dist/` folder automatically on every push to `main`. No server configuration is required.

---

## Featured Projects Showcased

| Project                       | Category    | Live URL                                       | GitHub Repository |
|-------------------------------|-------------|------------------------------------------------|-------------------|
| ChatGPT Clone                 | Full-Stack  | [Live Demo](https://chatgpt-zqh8.onrender.com) | [Source Code](https://github.com/Dataanomaly190/React_Projects/tree/main/ChatGPT) |
| Invoice Generator             | Full-Stack  | [Live Demo](https://invoicegenerator-zswn.onrender.com) | [Source Code](https://github.com/Dataanomaly190/React_Projects/tree/main/Invoice_Generator) |
| Weather Forecast App          | Full-Stack  | [Live Demo](https://weather-v00x.onrender.com) | [Source Code](https://github.com/Dataanomaly190/React_Projects/tree/main/Weather-Forecast-App) |
| News Portal                   | Full-Stack  | [Live Demo](https://the-bharat-times.onrender.com) | [Source Code](https://github.com/Dataanomaly190/FullStackProjects/tree/main/News) |
| Saurabh Luxe (E-Commerce)     | Frontend    | [Live Demo](https://saurabh-luxe.onrender.com) | [Source Code](https://github.com/Dataanomaly190/FullStackProjects/tree/main/Saurabh-Luxe) |
| ByteMorph Pro                 | Full-Stack  | [Live Demo](https://bytemorph.onrender.com) | [Source Code](https://github.com/Dataanomaly190/MEGAProjects/tree/main/ByteMorph) |
| Jerry (AI Assistant)          | Python / AI | Local only                                     | [Source Code](https://github.com/Dataanomaly190/Python-Project/tree/main/Jerry) |
| Face Detection System         | Python / AI | Local only                                     | [Source Code](https://github.com/Dataanomaly190/Python-Project/tree/main/FaceDetectionSystem) |
| Data Analytics Suite          | Python      | [Live Demo](https://bankdata-analytics-dashboard.onrender.com) | [Source Code](https://github.com/Dataanomaly190/Python-Project/blob/main/DataAnalytics) |

_...and many more!_

---

## Repository

GitHub: https://github.com/Dataanomaly190/Dev_portfolio

---

## License

All rights reserved.
