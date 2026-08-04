# LipiCure Digital Hub — Phase 2 (v0.2.0)

Progressive Next.js 14 codebase for LipiCure's pre-seed digital hub.

## Run in GitHub Codespaces

```bash
npm install
npm run dev
```

Open the forwarded port 3000.

## Production check

```bash
npm run build
npm start
```

## Phase 2 additions

- Knowledge Hub
- Dynamic Insights, Founder's Desk and News publishing routes
- Founder and platform philosophy page
- Newsletter-ready UI
- SEO sitemap and robots configuration
- Reusable content architecture

## Add a new article

Add a `ContentItem` to `lib/content.ts`. The archive card, article page and sitemap entry are produced automatically.

## Before public launch

- Replace placeholder LinkedIn URL
- Confirm contact email
- Validate all public market statistics
- Add privacy policy and terms
- Connect newsletter form to a real email provider
- Replace `https://lipicure.com` in metadata if the final domain differs

See `docs/PHASE2.md` for architecture notes.
