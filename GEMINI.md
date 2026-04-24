# Gemini Project Mandates: Fly Tyrol

This document contains foundational mandates for the Fly Tyrol project. These instructions take absolute precedence over general workflows and tool defaults.

## Project Overview
Fly Tyrol is a modern React application for a private aviation service, built with React 19, Vite, and Tailwind CSS 4.

## Tech Stack
- **Framework:** React 19 (TypeScript)
- **Build Tool:** Vite 8+
- **Styling:** Tailwind CSS 4 (using `@tailwindcss/vite` plugin)
- **Internationalization:** `i18next` & `react-i18next`
- **Testing:**
  - **Unit/Integration:** Vitest with React Testing Library
  - **E2E:** Playwright
- **Linting:** ESLint with TypeScript support
- **Icons:** Lucide React and Phosphor Icons
- **Maps:** Leaflet with React Leaflet

## Coding Conventions
- **React Components:** Use functional components with `export default`. Prefer PascalCase for component filenames and directories.
- **Styling:** Use Tailwind CSS utility classes directly in JSX. Follow existing color schemes (e.g., `#001B3A` for dark blue, `#FF7020` for orange).
- **Internationalization:** ALWAYS use the `useTranslation` hook for user-facing text. Translation keys are managed in `src/i18n.ts` (or corresponding JSON backend if configured).
- **TypeScript:** Strict typing is required. Avoid `any`. Use interfaces/types for component props.
- **File Structure:**
  - `src/components/`: Reusable UI components.
  - `src/sections/`: Major page sections.
  - `public/`: Static assets (logos, images).

## Development & Validation Workflows
- **Development:** `npm run dev`
- **Linting:** `npm run lint` (MUST pass before completion)
- **Type-checking:** `npm run type-check` (MUST pass before completion)
- **Testing:**
  - Unit: `npm run test:run`
  - E2E: `npm run test:e2e`
  - All changes affecting logic or UI MUST be verified with relevant tests.

## Security & Performance
- Never commit secrets or API keys.
- Optimize images in `public/` for web performance.
- Use React 19 features (like the React Compiler) where appropriate.
