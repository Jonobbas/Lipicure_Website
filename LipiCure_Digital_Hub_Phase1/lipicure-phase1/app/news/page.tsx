import ArticleShell from '@/components/content/ArticleShell';

const updates = [
  ['August 2026','LipiCure digital hub architecture and founder-governance roadmap prepared.'],
  ['August 2026','Active discussions underway with PhD researchers, mentors and prospective scientific collaborators.'],
  ['July–August 2026','PEARL-X Stage-02 digital process architecture documented for scientific review.'],
  ['Current focus','Incorporation readiness, partner validation, scientific review and grant-aligned milestone planning.']
];

export default function NewsPage(){
  return <ArticleShell eyebrow="Progress" title="News & Updates" intro="A transparent record of LipiCure’s venture-building, research and collaboration progress.">
    <div className="space-y-4">{updates.map(([date,text])=><div key={date+text} className="grid-card p-6 md:flex md:gap-8"><div className="w-36 shrink-0 text-sm text-cyanx">{date}</div><p className="mt-3 leading-7 text-slate-300 md:mt-0">{text}</p></div>)}</div>
    <p className="mt-8 text-sm text-slate-500">Only formalised or accurately described progress should be published. Named partners and advisers will be listed after written confirmation.</p>
  </ArticleShell>
}
