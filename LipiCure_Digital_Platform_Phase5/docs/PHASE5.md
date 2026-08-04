# Phase 5 — Interactive Ocean Experience

## Release

`v0.5.0`

## Objective

Create a memorable, calm and scientifically credible deep-ocean hero while preserving fast initial loading and low maintenance.

## Added

- Canvas-based school of Indian oil sardines.
- Two subtle bioluminescent jellyfish.
- Mouse parallax on capable desktop devices.
- Static mobile and reduced-motion fallbacks.
- Dynamic loading of the interactive layer.
- Feature flags for future ocean and PEARL-X modules.

## Performance approach

The approved cinematic hero image remains the permanent first-paint visual. The animated layer is client-only and is disabled for narrow screens, reduced-motion preferences and save-data connections. No video, physics engine or heavy 3D model is required.

## Acceptance criteria

- Hero image appears immediately.
- Fish movement is slow and natural.
- Jellyfish glow remains restrained.
- Mobile and reduced-motion users receive a static fallback.
- All existing Phase 1–4 routes remain unchanged.
- `npm run build` completes without errors.
