# İlker Sevim — Personal Website

[![Live site](https://img.shields.io/badge/site-live-0B6E4F?logo=githubpages&logoColor=white)](https://redjadet.github.io/)
[![Deploy GitHub Pages](https://github.com/redjadet/redjadet.github.io/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/redjadet/redjadet.github.io/actions/workflows/deploy-pages.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Node.js 24](https://img.shields.io/badge/Node.js-24-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)

Professional website for a senior iOS and Flutter engineer based in Istanbul. Live at [redjadet.github.io](https://redjadet.github.io/). It brings together selected public projects, engineering practices, availability and contact links. React and TypeScript are demonstrated through the website itself; the mobile apps are clearly presented as portfolio references.

![Portfolio preview — hero and selected work sections](public/og.png)

## For technical reviewers

Suggested reading order:

| Priority | What to open | Why |
| --- | --- | --- |
| 1 | [Flutter portfolio — 3-minute review](https://github.com/redjadet/flutter_bloc_app#3-minute-review) | Cross-platform architecture, offline-first counter, native bridges, tests |
| 2 | [iOS portfolio — 3-minute path](https://github.com/redjadet/super_demo_ios#3-minute-path) | SwiftUI layers, SwiftData cache, UIKit showcase, optional Flutter embed |
| 3 | [This repository](https://github.com/redjadet/react-web-portfolio) | Typed content, CSS Modules, accessibility and GitHub Pages deploy |

Contact: [ilkersevim2007@gmail.com](mailto:ilkersevim2007@gmail.com) · [LinkedIn](https://www.linkedin.com/in/ilker-sevim-95020820/) · [GitHub](https://github.com/redjadet)

## Engineering choices

- Small React components with typed content separated from presentation.
- CSS Modules and shared design tokens; responsive layouts without a UI framework.
- Semantic headings, skip navigation, descriptive external links, visible keyboard focus and reduced-motion support.
- Portrait dimensions reserve space; no analytics, tracking scripts or pretend contact form.
- Canonical URL, robots/sitemap, Person structured data and Open Graph metadata.
- GitHub Pages user-site deployment (`redjadet.github.io`) with frozen dependency installation, lint and TypeScript/build checks.

## Local development

Requires Node 24+ and pnpm (see `.nvmrc`).

```bash
pnpm install --frozen-lockfile
pnpm dev --host 127.0.0.1 --port 43123
```

Open http://127.0.0.1:43123/

```bash
pnpm lint
pnpm test        # Vitest watch
pnpm test:run    # CI-friendly single run
pnpm check       # lint + test:run + production build
pnpm preview
```

Pre-merge gate: [docs/pre-merge-checklist.md](docs/pre-merge-checklist.md). PRs use `.github/PULL_REQUEST_TEMPLATE.md`. GitHub Actions workflow **CI** runs lint, tests, and build on PRs and `main`.

## Update content

Edit `src/content/profile.ts`, `projects.ts` and `skills.ts`. Put static assets in `public/`; reference them through `import.meta.env.BASE_URL` so asset paths stay correct for the user-site root (`base: '/'`).

## Deploy

Live site source of truth for Pages is [`redjadet/redjadet.github.io`](https://github.com/redjadet/redjadet.github.io) (user site at `/`). Pushes to `main` there run `.github/workflows/deploy-pages.yml` and publish the app. This repository (`react-web-portfolio`) remains the working clone and mirrors the same codebase; its project Pages site publishes only a static redirect from `/react-web-portfolio/` to `https://redjadet.github.io/` (`redirect-pages/`).

Preferred personal URL `https://ilkersevim.github.io/` requires claiming the `ilkersevim` GitHub username or organization (not done here — see project notes).

## Manual review

Check desktop and 320–390px mobile layouts, keyboard navigation, section anchors, reduced motion, image loading and every project/contact link before publishing. Verify the deployment at the live URL after the Actions run completes.
