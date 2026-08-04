# LipiCure Digital Hub — Phase 2

## Release objective
Story, credibility and a sustainable publishing architecture.

## Added
- Knowledge Hub landing page
- Typed in-code content library
- Dynamic Insights, Founder's Desk and News article routes
- Sample published content for each channel
- Philosophy page
- Newsletter-ready user interface
- Sitemap and robots metadata
- Reusable content cards, indexes and article templates

## Content workflow
Until a CMS is introduced, add new articles to `lib/content.ts`. The archive and article route are generated automatically.

## Future integration points
- CMS adapter can replace `lib/content.ts`
- Email service can replace the newsletter placeholder handler
- Search can index the same ContentItem structure
