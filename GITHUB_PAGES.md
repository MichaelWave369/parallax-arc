# GitHub Pages

This repo is prepared for GitHub Pages in two ways.

## Option A: deploy the docs preview

1. Open repository Settings.
2. Open Pages.
3. Select Deploy from a branch.
4. Choose branch `main` and folder `/docs`.
5. Save.

This publishes the static preview at the project Pages URL.

## Option B: deploy the React/Vite app

Use GitHub Pages with GitHub Actions. The project root contains the Vite app, and `vite.config.js` already uses `base: './'` for project-page hosting.

A Pages workflow should install dependencies, run `npm run build`, upload the `dist` folder, and deploy that artifact to Pages.
