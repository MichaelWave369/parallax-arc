# Parallax Arc

**Parallax Arc** is a free, MIT-licensed, Parallax-themed browser arc game built with React, Vite, and CSS.

It is an original arcade physics project: two local players tune angle, power, and gravity while the Formula Lens estimates distance.

## Current v0.1 features

- React + Vite starter
- Responsive Parallax neon stage
- Angle, power, and gravity controls
- Formula forecast overlay
- Self-contained GitHub Pages version in `/docs`
- MIT license text in `COPYING`
- Manual Node 24 build-check workflow
- Vite config prepared for GitHub Pages with `base: './'`

## Physics note

The Formula Lens uses the classic vacuum-range estimate:

```txt
range = v² × sin(2θ) / g
```

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

## GitHub Pages setup

Use the no-build static Pages route first.

1. Open this repo on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main`.
5. Select folder `/docs`.
6. Save.

That publishes the self-contained Parallax Arc page from:

```txt
docs/index.html
```

## Manual build check

The workflow at `.github/workflows/deploy.yml` now runs as a manual Node 24 build check only. It installs dependencies and runs `npm run build`.

## Originality boundary

This project should stay clearly original: no copied assets, names, UI, sounds, code, maps, mode names, or branding from earlier games. The genre inspiration is classic turn-based trajectory play, but the implementation and identity are Parallax-native.

## License

MIT. See [COPYING](./COPYING).
