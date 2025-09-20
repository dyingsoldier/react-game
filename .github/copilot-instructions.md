# Copilot Instructions for AI Coding Agents

## Project Overview
This is a minimal React app scaffolded with Vite. The main goal is to provide a simple, fast development environment for building interactive UI games or exercises. The codebase is organized for clarity and modularity, with each UI element as a separate component.

## Architecture & Data Flow
- **Entry Point:** `src/main.jsx` renders the `App` component inside a React `StrictMode`.
- **App Structure:**
  - `src/App.jsx` is the main container, orchestrating the UI and game logic.
  - UI is composed of modular components: `Header`, `Tip`, `Letter`, and `Input` (each in its own folder under `src/components/`).
  - Game data (words, tips) is sourced from `src/utils/words.ts`.
- **Component Communication:**
  - Props are used for all data and event passing (e.g., `Header` receives `current`, `max`, and `onRestart`).
  - No global state management; all state is local or passed via props.
- **Styling:**
  - CSS Modules are used for component styles (e.g., `style.module.css` in each component folder).
  - Global styles are in `src/global.css`.
- **Assets:**
  - Images and SVGs are stored in `src/assets/` and imported directly into components.

## Developer Workflows
- **Start Dev Server:** `npm run dev` (hot module reload enabled)
- **Build for Production:** `npm run build`
- **Preview Production Build:** `npm run preview`
- **Linting:** `npm run lint` (uses ESLint with some React-specific plugins)

## Conventions & Patterns
- **Component Structure:** Each UI element is a folder with `index.jsx` and `style.module.css`.
- **Props:** All components expect props for configuration; avoid hardcoding values except for demo purposes.
- **TypeScript:** Only utility files (`src/utils/words.ts`) use TypeScript. Components are plain JS/JSX.
- **No Routing:** There is no React Router or navigation logic.
- **No External State Libraries:** No Redux, Zustand, or Context API used.
- **Minimal Logic:** Game logic is simple and mostly handled in `App.jsx`.

## Integration Points
- **Vite Plugins:** Uses `@vitejs/plugin-react` for React Fast Refresh.
- **ESLint:** Configured for React and hooks; see `eslint.config.js` for rules.

## Examples
- To add a new UI element, create a new folder in `src/components/`, add `index.jsx` and `style.module.css`, and import it in `App.jsx`.
- To add a new word/tip, update the array in `src/utils/words.ts`.

## Key Files
- `src/App.jsx`: Main UI and game logic
- `src/components/`: All UI components
- `src/utils/words.ts`: Game data
- `package.json`: Scripts and dependencies
- `eslint.config.js`: Linting rules

---
If any conventions or workflows are unclear, please ask for clarification or examples from the codebase.