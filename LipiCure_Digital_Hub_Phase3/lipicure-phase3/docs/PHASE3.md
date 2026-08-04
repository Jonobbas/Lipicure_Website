# LipiCure Digital Hub — Phase 3

Release: v0.3.0

## Objective
Turn the website into a living publishing and knowledge platform without adding a database or CMS.

## Added
- Knowledge Hub with six channels
- Search and category filtering
- Insights, Founder's Desk, News, Research and Resources article systems
- Blue Bioeconomy educational page
- Related-content recommendations
- Tags, authors, dates and reading time
- RSS feed at `/feed.xml`
- Expanded sitemap
- MDX-ready content architecture can be added later without changing routes

## Publishing workflow
For Phase 3, content is stored in `lib/content.ts`. Add a new `ContentItem`, set status to `Published`, and the item automatically appears in the relevant listing, search, sitemap and RSS feed.

## Scientific claim control
Simulation-based outputs must remain clearly identified as predictions until experimentally validated.
