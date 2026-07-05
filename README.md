# Parallax Arc

**Parallax Arc** is a free, MIT-licensed, Parallax-themed browser arc game built with React, Vite, and CSS.

It is an original arcade physics project: two local players tune angle, power, and gravity while the Formula Lens estimates distance.

## Current v0.1 features

- React + Vite starter
- Responsive Parallax neon stage
- Angle, power, and gravity controls
- Formula forecast overlay
- MIT license text in `COPYING`
- GitHub Pages workflow at `.github/workflows/deploy.yml`
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

This repo includes a GitHub Actions workflow at:

```txt
.github/workflows/deploy.yml
```

To publish the React/Vite app:

1. Open this repo on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Open the **Actions** tab.
5. Run the **Pages** workflow, or push a new commit to `main`.

The workflow installs dependencies, builds the app, uploads `dist`, and deploys it to GitHub Pages.

## Backup static preview

There is also a simple static preview in `/docs`. If Actions are unavailable, GitHub Pages can publish from branch `main` and folder `/docs`.

## Originality boundary

This project should stay clearly original: no copied assets, names, UI, sounds, code, maps, mode names, or branding from earlier games. The genre inspiration is classic turn-based trajectory play, but the implementation and identity are Parallax-native.

## License

MIT. See [COPYING](./COPYING).
