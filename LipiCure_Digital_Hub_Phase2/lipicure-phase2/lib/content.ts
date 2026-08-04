export type ContentKind = 'insight' | 'founder' | 'news';

export type ContentItem = {
  slug: string;
  kind: ContentKind;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  status?: 'Published' | 'Draft';
  body: { heading?: string; paragraphs?: string[]; bullets?: string[] }[];
};

export const contentItems: ContentItem[] = [
  {
    slug: 'why-indias-blue-bioeconomy-needs-platform-thinking', kind: 'insight',
    title: "Why India's Blue Bioeconomy Needs Platform Thinking",
    excerpt: 'India has biological abundance, scientific capability and industrial demand. The missing layer is a repeatable system that converts these strengths into validated technologies.',
    date: '2026-08-04', readingTime: '6 min read', category: 'Blue Bioeconomy', status: 'Published',
    body: [
      { paragraphs: ['India’s marine economy contains an unusual combination of feedstock diversity, coastal communities, scientific institutions and large downstream markets. Yet much of the value is still captured through low-value commodity pathways.', 'LipiCure’s working thesis is that the gap is not simply one missing product. It is the absence of an integrated translation platform connecting market intelligence, scientific research, digital process development, validation and commercialisation.'] },
      { heading: 'From isolated projects to a reusable platform', paragraphs: ['A product-by-product approach repeatedly rebuilds the same capabilities. A platform approach accumulates knowledge, data, collaborators, process models and commercial insight across multiple programs.'], bullets: ['Start with validated industrial needs', 'Use digital models to prioritise experiments', 'Advance scientific and market evidence together', 'Package validated know-how for licensing and scale-up'] },
      { heading: 'What LipiCure is building', paragraphs: ['Omega-3 is the first demonstration project. The larger ambition is a repeatable marine biotechnology innovation system capable of supporting multiple products and technologies over time.'] }
    ]
  },
  {
    slug: 'building-lipicure-august-2026', kind: 'founder',
    title: 'Building LipiCure: August 2026',
    excerpt: 'This month we moved from a single-product narrative toward a platform-company architecture, while expanding the scientific and industry network around the venture.',
    date: '2026-08-04', readingTime: '5 min read', category: "Founder's Desk", status: 'Published',
    body: [
      { heading: 'What is on my mind', paragraphs: ['The strongest learning this month is that LipiCure should not be presented merely as an Omega-3 venture. We are building the next generation of marine biotechnology products, and Omega-3 is our first demonstration project.', 'This does not reduce product focus. It clarifies the long-term company architecture while keeping the immediate milestone concrete.'] },
      { heading: 'What we are building', bullets: ['A market-driven marine biotechnology innovation platform', 'PEARL-X digital process intelligence', 'A collaborative network of scientists, industry experts and mentors', 'A transparent operating model based on Design Thinking, Lean Startup and Agile'] },
      { heading: 'What we are looking for', paragraphs: ['We are inviting researchers, institutions, industry partners and early supporters who believe that India can build globally relevant marine biotechnology capabilities.'] }
    ]
  },
  {
    slug: 'digital-hub-phase-two-launched', kind: 'news',
    title: 'LipiCure Digital Hub Phase Two Launched',
    excerpt: 'The website architecture now includes a Knowledge Hub, Founder’s Desk, open-innovation pages and a scalable publishing structure.',
    date: '2026-08-04', readingTime: '2 min read', category: 'Company Update', status: 'Published',
    body: [
      { paragraphs: ['LipiCure has completed the second phase of its digital-hub architecture. The update strengthens founder storytelling, collaboration pathways, research communication and regular publication capability.'] },
      { heading: 'What was added', bullets: ['Knowledge Hub landing page', 'Dynamic Insights and Founder’s Desk articles', 'News and progress archive', 'Open Innovation collaboration pathway', 'SEO-ready sitemap and metadata structure'] },
      { heading: 'Why it matters', paragraphs: ['At pre-seed stage, the website acts as a 24/7 ambassador to scientists, investors, grant committees, institutions and industry partners. The digital hub will evolve progressively without requiring a rebuild.'] }
    ]
  }
];

export const getByKind = (kind: ContentKind) => contentItems.filter(item => item.kind === kind);
export const getContent = (kind: ContentKind, slug: string) => contentItems.find(item => item.kind === kind && item.slug === slug);
