# LipiCure Digital Platform v0.6.0

## Signature 3D Ocean Hero

Phase 6 upgrades only the homepage hero while preserving the existing LipiCure theme, copy, navigation, colours and page structure.

### Added
- React Three Fiber transparent 3D layer over the approved cinematic ocean image.
- Procedural school of Indian oil sardine-inspired fish.
- Two restrained bioluminescent jellyfish.
- Sparse marine particles for depth.
- Subtle pointer-driven camera movement.
- Static image fallback on mobile and for reduced-motion users.

### Performance controls
- No external GLB or texture downloads.
- Procedural geometry only.
- DPR capped at 1.5.
- 3D disabled below 760 px.
- Existing image remains visible before and during 3D loading.

### Acceptance test
- Run `npm install`.
- Run `npm run dev`.
- Confirm homepage hero shows 3D fish and jellyfish without changing the existing theme.
- Run `npm run build` before committing.
