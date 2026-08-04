# LipiCure Digital Platform v0.4 — Ocean Experience & PEARL-X

## Purpose
Phase 4 adds a high-impact but maintenance-light ocean experience and a dedicated PEARL-X page without making WebGL part of the initial homepage payload.

## Performance decisions
- The approved cinematic hero image remains the primary visual.
- Only three lightweight CSS animation systems are used: fish drift, jellyfish pulse and pointer parallax.
- No Three.js bundle is loaded on first paint.
- Existing `OceanScene.tsx` remains isolated for future optional use.
- Reduced-motion and mobile fallbacks are built in.

## New route
- `/pearl-x`

## New components
- `components/AnimatedOceanHero.tsx`
- `components/pearl/PearlWorkflow.tsx`
- `components/pearl/DesignSpace.tsx`
- `components/pearl/TRLTimeline.tsx`

## Scientific disclosure
PEARL-X is presented as a digital-first decision-support and process-development framework. Simulation outputs must not be described as experimentally validated until laboratory evidence supports that claim.

## Acceptance criteria
- Homepage loads without WebGL.
- Hero remains readable on desktop and mobile.
- Motion is limited and disabled for reduced-motion users.
- PEARL-X workflow is keyboard-accessible.
- `npm run build` should be run in Codespaces before deployment.
