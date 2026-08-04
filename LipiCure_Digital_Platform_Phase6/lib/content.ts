export type ContentKind = 'insight' | 'founder' | 'news' | 'research' | 'resource';

export type ContentSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ContentItem = {
  slug: string;
  kind: ContentKind;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  author: string;
  featured?: boolean;
  status?: 'Published' | 'Draft';
  body: ContentSection[];
};

export const contentItems: ContentItem[] = [
  {
    slug: 'why-indias-blue-bioeconomy-needs-platform-thinking', kind: 'insight',
    title: "Why India's Blue Bioeconomy Needs Platform Thinking",
    excerpt: 'India has biological abundance, scientific capability and industrial demand. The missing layer is a repeatable system that converts these strengths into validated technologies.',
    date: '2026-08-04', readingTime: '6 min read', category: 'Blue Bioeconomy', tags:['Platform Strategy','India','Commercialisation'], author:'LipiCure Editorial', featured:true, status: 'Published',
    body: [
      { paragraphs: ['India’s marine economy contains an unusual combination of feedstock diversity, coastal communities, scientific institutions and large downstream markets. Yet much of the value is still captured through low-value commodity pathways.', 'LipiCure’s working thesis is that the gap is not simply one missing product. It is the absence of an integrated translation platform connecting market intelligence, scientific research, digital process development, validation and commercialisation.'] },
      { heading: 'From isolated projects to a reusable platform', paragraphs: ['A product-by-product approach repeatedly rebuilds the same capabilities. A platform approach accumulates knowledge, data, collaborators, process models and commercial insight across multiple programs.'], bullets: ['Start with validated industrial needs', 'Use digital models to prioritise experiments', 'Advance scientific and market evidence together', 'Package validated know-how for licensing and scale-up'] },
      { heading: 'What LipiCure is building', paragraphs: ['Omega-3 is the first demonstration project. The larger ambition is a repeatable marine biotechnology innovation system capable of supporting multiple products and technologies over time.'] }
    ]
  },
  {
    slug: 'low-temperature-processing-matters', kind: 'insight',
    title: 'Why Low-Temperature Processing Matters in Marine Biotechnology',
    excerpt: 'Sensitive marine lipids and bioactives can lose value through heat, oxygen exposure and poorly controlled processing. Process architecture matters as much as extraction yield.',
    date: '2026-08-02', readingTime: '7 min read', category: 'Process Technology', tags:['Low Temperature','Omega-3','Quality by Design'], author:'LipiCure Editorial', status:'Published',
    body:[
      { paragraphs:['Marine biomass is chemically valuable but often fragile. A process that maximises immediate yield can still destroy downstream value if oxidation, heat exposure or contamination are not controlled.']},
      { heading:'Beyond yield', bullets:['Preserve sensitive compounds','Reduce oxidation risk','Maintain downstream functionality','Build process windows rather than single-point recipes']},
      { heading:'A digital-first opportunity', paragraphs:['Simulation and structured experimentation can narrow the design space before expensive scale-up, while laboratory validation remains essential for any scientific claim.']}
    ]
  },
  {
    slug: 'building-lipicure-august-2026', kind: 'founder',
    title: 'Building LipiCure: August 2026',
    excerpt: 'This month we moved from a single-product narrative toward a platform-company architecture, while expanding the scientific and industry network around the venture.',
    date: '2026-08-04', readingTime: '5 min read', category: "Founder's Desk", tags:['Founder Update','Platform Company','Open Innovation'], author:'Jonobbas Baskaran', featured:true, status: 'Published',
    body: [
      { heading: 'What is on my mind', paragraphs: ['The strongest learning this month is that LipiCure should not be presented merely as an Omega-3 venture. We are building the next generation of marine biotechnology products, and Omega-3 is our first demonstration project.', 'This does not reduce product focus. It clarifies the long-term company architecture while keeping the immediate milestone concrete.'] },
      { heading: 'What we are building', bullets: ['A market-driven marine biotechnology innovation platform', 'PEARL-X digital process intelligence', 'A collaborative network of scientists, industry experts and mentors', 'A transparent operating model based on Design Thinking, Lean Startup and Agile'] },
      { heading: 'Current focus', bullets:['Scientific co-founder alignment','Experimental validation roadmap','Grant readiness','Industry problem discovery']},
      { heading: 'What we are looking for', paragraphs: ['We are inviting researchers, institutions, industry partners and early supporters who believe that India can build globally relevant marine biotechnology capabilities.'] }
    ]
  },
  {
    slug: 'digital-hub-phase-three-launched', kind: 'news',
    title: 'LipiCure Digital Hub Phase Three Launched',
    excerpt: 'The website now includes a publishing foundation for Insights, Founder’s Desk, News, Research, Blue Bioeconomy and Resources.',
    date: '2026-08-04', readingTime: '2 min read', category: 'Company Update', tags:['Digital Hub','Website','Milestone'], author:'LipiCure Team', featured:true, status:'Published',
    body:[
      { paragraphs:['Phase Three turns the website into a living knowledge platform rather than a static company brochure.']},
      { heading:'What was added', bullets:['Research library and article templates','Blue Bioeconomy educational page','Resource library','Category and tag navigation','RSS feed','Article metadata and related content']}
    ]
  },
  {
    slug: 'digital-hub-phase-two-launched', kind: 'news',
    title: 'LipiCure Digital Hub Phase Two Launched',
    excerpt: 'The website architecture now includes a Knowledge Hub, Founder’s Desk, open-innovation pages and a scalable publishing structure.',
    date: '2026-08-03', readingTime: '2 min read', category: 'Company Update', tags:['Digital Hub','Architecture'], author:'LipiCure Team', status: 'Published',
    body: [
      { paragraphs: ['LipiCure completed the second phase of its digital-hub architecture. The update strengthened founder storytelling, collaboration pathways, research communication and regular publication capability.'] },
      { heading: 'Why it matters', paragraphs: ['At pre-seed stage, the website acts as a 24/7 ambassador to scientists, investors, grant committees, institutions and industry partners.'] }
    ]
  },
  {
    slug:'pearl-x-stage-02-technical-note', kind:'research',
    title:'PEARL-X Stage-02: Digital Process Architecture Technical Note',
    excerpt:'A high-level technical note describing the digital-first development logic for low-temperature biomass conditioning and the role of simulation before laboratory validation.',
    date:'2026-08-01', readingTime:'8 min read', category:'Technical Note', tags:['PEARL-X','Simulation','QbD'], author:'LipiCure Research', featured:true, status:'Published',
    body:[
      { paragraphs:['PEARL-X is being developed as a digital process intelligence framework for structured hypothesis generation, design-space exploration and experiment prioritisation.']},
      { heading:'Scientific governance', paragraphs:['Simulation outputs are predictions, not experimental proof. Calibration, laboratory validation and statistical verification remain mandatory before scientific or commercial claims are made.']},
      { heading:'Current development focus', bullets:['Critical Process Parameter mapping','Critical Quality Attribute definition','Sensitivity analysis','Design of Experiments','Experimental validation planning']}
    ]
  },
  {
    slug:'marine-biotechnology-collaboration-guide', kind:'resource',
    title:'Marine Biotechnology Collaboration Readiness Guide',
    excerpt:'A practical checklist for universities, PhD researchers and industry partners considering collaboration with LipiCure.',
    date:'2026-08-04', readingTime:'4 min read', category:'Guide', tags:['Collaboration','Universities','Industry'], author:'LipiCure Team', status:'Published',
    body:[
      { heading:'Before a discussion', bullets:['Define the problem or capability clearly','Identify relevant background IP','Clarify institutional approvals','Separate research interest from commercial commitment']},
      { heading:'What LipiCure looks for', bullets:['Scientific integrity','Mission alignment','Transparent contribution expectations','Respect for publication and IP governance','Long-term collaborative potential']}
    ]
  }
];

export const getByKind = (kind: ContentKind) => contentItems.filter(item => item.kind === kind && item.status === 'Published').sort((a,b)=>b.date.localeCompare(a.date));
export const getContent = (kind: ContentKind, slug: string) => contentItems.find(item => item.kind === kind && item.slug === slug && item.status === 'Published');
export const getAllPublished = () => contentItems.filter(item=>item.status==='Published').sort((a,b)=>b.date.localeCompare(a.date));
export const getFeatured = () => getAllPublished().filter(item=>item.featured);
export const getCategories = () => Array.from(new Set(getAllPublished().map(item=>item.category))).sort();
export const getTags = () => Array.from(new Set(getAllPublished().flatMap(item=>item.tags))).sort();
export const getRelated = (item: ContentItem, limit=3) => getAllPublished().filter(other=>other.slug!==item.slug && (other.category===item.category || other.tags.some(tag=>item.tags.includes(tag)))).slice(0,limit);
export const hrefFor = (item: ContentItem) => item.kind==='founder' ? `/founders-desk/${item.slug}` : item.kind==='resource' ? `/resources/${item.slug}` : `/${item.kind==='insight'?'insights':item.kind}/${item.slug}`;
