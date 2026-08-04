# LipiCure Digital Hub — Phase 1

This project evolves the original `lipicure-worldclass` Next.js 14 codebase. It does not rebuild the site from scratch.

## Phase 1 additions

- Cinematic deep-ocean hero image replacing the mechanical geometric scene
- Minimal mouse parallax and only three restrained drifting light particles
- Founder Story homepage section and `/founder-story` route
- Open Innovation section and `/collaboration` route
- Knowledge Hub section
- `/insights`, `/founders-desk`, and `/news` routes
- Expanded navigation and footer
- Feature flags and internal phase documentation
- Original `OceanScene.tsx` retained for future 3D reactivation

## Run in GitHub Codespaces

From the repository root, where `package.json` is visible:

```bash
npm install
npm run dev
```

Open port `3000` from the Codespaces Ports panel.

## Production build

```bash
npm run build
npm start
```

## Important edits before public launch

1. Replace the placeholder LinkedIn URL (`https://www.linkedin.com`) with the exact LipiCure company-page URL.
2. Confirm `connect@lipicure.com` or replace it with the live company email.
3. Validate every market statistic before removing the existing placeholder warning.
4. Publish collaborator or adviser names only after written confirmation.
5. Treat PEARL-X simulation outputs as predictions until experimentally validated.

## Progressive architecture

The static hero is implemented in `components/StaticOceanHero.tsx`. The earlier 3D scene remains in `components/OceanScene.tsx`, so a later sprint can switch the hero without changing the rest of the homepage.
