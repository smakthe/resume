# Somak Chakraborty — Resume Website

A personal resume website built with React, TypeScript, Vite, and styled-components.

🔗 **Live:** [somak-resume.vercel.app](https://somak-resume.vercel.app)

## Prerequisites

- [Bun](https://bun.sh/) (v1.0+)

## Getting Started

### Install dependencies

```bash
bun install
```

### Start development server

```bash
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser. The page will hot-reload when you make changes.

### Build for production

```bash
bun run build
```

Outputs optimized, pre-compressed (gzip + Brotli) assets to the `dist/` directory.

### Preview production build

```bash
bun run preview
```

Serves the production build locally at [http://localhost:4173](http://localhost:4173).

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `bun run dev` | Start development server with HMR |
| `build` | `bun run build` | Type-check and build for production |
| `preview` | `bun run preview` | Preview the production build locally |
| `lint` | `bun run lint` | Run ESLint on the codebase |
| `format` | `bun run format` | Format code with Prettier |

## Tech Stack

- **Runtime:** [Bun](https://bun.sh/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI Library:** [React 18](https://react.dev/)
- **Styling:** [styled-components](https://styled-components.com/)
- **Linting:** [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- **Deployment:** [Vercel](https://vercel.com/)

## Project Structure

```
├── public/              # Static assets (favicon, icons, OG image)
├── src/
│   ├── components/      # React components (Profile, Contact, etc.)
│   ├── styles/
│   │   ├── components/  # Styled-component definitions per section
│   │   ├── GlobalStyles.ts
│   │   ├── shared.ts
│   │   └── theme.ts     # Light and dark theme definitions
│   ├── App.tsx           # Root component with theme provider
│   └── main.tsx          # Application entry point
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── eslint.config.js      # ESLint configuration
└── .prettierrc           # Prettier configuration
```

## Deployment

This project is configured for deployment on Vercel.

| Setting | Value |
|---------|-------|
| **Build Command** | `bun run build` |
| **Output Directory** | `dist` |
| **Install Command** | `bun install` |

## License

This project is private and not licensed for redistribution.
