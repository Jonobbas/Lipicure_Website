import ArticleShell from '@/components/content/ArticleShell';
import Link from 'next/link';

const articles = [
  ['India’s Blue Bioeconomy: From Marine Biomass to High-Value Technologies','A strategic overview of the market gap, technology opportunity and pathways for value creation.'],
  ['Why Low-Temperature Processing Matters','How heat, oxidation and process design influence marine bioactive quality.'],
  ['Digital Process Intelligence in Marine Biotechnology','How modelling, DOE and Quality by Design can reduce uncertainty before scale-up.']
];

export default function InsightsPage(){
  return <ArticleShell eyebrow="Knowledge Hub" title="LipiCure Insights" intro="Research-informed perspectives on marine biotechnology, blue bioeconomy markets, processing technology and commercialisation.">
    <div className="grid gap-5">{articles.map(([title,description],index)=><article key={title} className="grid-card p-7"><div className="text-xs uppercase tracking-[.18em] text-cyanx">Insight {String(index+1).padStart(2,'0')}</div><h2 className="mt-3 text-2xl font-semibold">{title}</h2><p className="mt-4 leading-7 text-slate-400">{description}</p><span className="mt-5 inline-block text-sm text-cyanx">Article in editorial development</span></article>)}</div>
    <p className="mt-10 text-sm text-slate-500">New long-form insight planned every two weeks after editorial review.</p>
  </ArticleShell>
}
