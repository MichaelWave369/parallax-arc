# Parallax Arc

**Parallax Arc** is a free, MIT-licensed, Parallax-themed browser trajectory game built with React, Vite, and Canvas.

It is an original arcade physics project: two local players launch glowing energy arcs across procedural terrain, tune angle and power, and use the formula lens to estimate distance.

## Current v0.1 features

- React + Canvas game loop
- Procedural neon terrain
- Local two-player turns
- Angle, power, wind, and gravity controls
- Formula forecast overlay
- Three original Parallax arc modes
- GitHub Pages deployment workflow
- MIT License

## Arc modes

- **Ledger Orb** — reliable baseline arc.
- **Phi Arc** — lighter path with longer hang time.
- **Janus Pulse** — twin terrain pulse for extra terrain shaping.

## Physics notes

The HUD uses the classic vacuum-range estimate:

```txt
range = v² × sin(2θ) / g
```

Wind, terrain, mode modifiers, and canvas-space scaling then create the actual in-game result.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. Push to `main` or run the workflow manually from the **Actions** tab.

The app is configured with `base: './'` so the built Vite app works cleanly on a GitHub Pages project URL.

## Originality boundary

This project should stay clearly original: no copied assets, names, UI, sounds, code, maps, mode names, or branding from earlier games. The genre inspiration is classic turn-based trajectory play, but the implementation and identity are Parallax-native.

## License

MIT. See [LICENSE](./LICENSE).
