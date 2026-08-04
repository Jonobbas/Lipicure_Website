import ArticleShell from '@/components/content/ArticleShell';

const groups = [
  ['Academic researchers','Bring scientific depth, experimental capability and original research questions. LipiCure aims to connect promising work to industrial validation, product strategy and commercial pathways.'],
  ['Industry partners','Bring real process constraints, unmet needs, quality problems and market requirements. Collaboration can begin with structured problem discovery and a defined technology-development brief.'],
  ['Mentors and domain experts','Support scientific governance, regulatory strategy, scale-up, market validation, grants and company building.'],
  ['Investors and grant ecosystems','Support evidence generation, laboratory validation, pilot readiness and platform development through milestone-linked capital.']
];

export default function CollaborationPage(){
  return <ArticleShell eyebrow="Open Innovation" title="Collaboration Policy" intro="LipiCure believes extraordinary marine biotechnology outcomes emerge when specialised academic, industrial and venture capabilities are integrated around shared problems.">
    <div className="grid gap-5 md:grid-cols-2">{groups.map(([title,text])=><div key={title} className="grid-card p-7"><h2 className="text-2xl font-semibold text-cyanx">{title}</h2><p className="mt-4 leading-7 text-slate-300">{text}</p></div>)}</div>
    <div className="mt-8 rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-7"><h2 className="text-2xl font-semibold">Principles</h2><ul className="mt-5 space-y-3 text-slate-300"><li>• Clear written scope, roles and deliverables.</li><li>• Confidentiality, background IP and new IP defined before substantive work.</li><li>• Fair authorship, recognition and publication review.</li><li>• Ownership or value sharing only through documented agreements.</li><li>• Scientific claims separated from simulations and commercial projections.</li></ul></div>
  </ArticleShell>
}
