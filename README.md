# Parallax Arc

**Parallax Arc** is a free, MIT-licensed, Parallax-themed browser arc game built with React, Vite, and CSS.

It is an original arcade physics project: two local players tune angle, power, and gravity while the Formula Lens estimates distance.

## Current v0.1 features

- React + Vite starter
- Responsive Parallax neon stage
- Angle, power, and gravity controls
- Formula forecast overlay
- MIT license text in `COPYING`
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

The app is ready for GitHub Pages project hosting. Use GitHub Pages with GitHub Actions, or build locally and publish the generated `dist` folder.

Recommended workflow file path:

```txt
.github/workflows/deploy.yml
```

The workflow should install dependencies, run `npm run build`, upload `dist`, and deploy with GitHub Pages.

## Originality boundary

This project should stay clearly original: no copied assets, names, UI, sounds, code, maps, mode names, or branding from earlier games. The genre inspiration is classic turn-based trajectory play, but the implementation and identity are Parallax-native.

## License

MIT. See [COPYING](./COPYING).
