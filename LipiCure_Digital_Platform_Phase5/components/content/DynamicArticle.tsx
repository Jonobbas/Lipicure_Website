import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContentCard from './ContentCard';
import { ContentItem, getRelated } from '@/lib/content';

export default function DynamicArticle({item}:{item:ContentItem}){
  const related=getRelated(item);
  return <main><Header/><article>
    <header className="page-hero"><div className="section-shell max-w-4xl"><div className="section-kicker">{item.category}</div><h1 className="section-title">{item.title}</h1><p className="section-copy">{item.excerpt}</p><div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-500"><span>{item.author}</span><span>{item.date}</span><span>{item.readingTime}</span></div><div className="mt-5 flex flex-wrap gap-2">{item.tags.map(tag=><span key={tag} className="rounded-full border border-cyan-300/15 px-3 py-1 text-xs text-slate-400">{tag}</span>)}</div></div></header>
    <div className="section-pad bg-[#03101b]"><div className="section-shell max-w-3xl space-y-10">{item.body.map((section,index)=><section key={index}>{section.heading&&<h2 className="text-3xl font-semibold">{section.heading}</h2>}{section.paragraphs?.map((p,i)=><p key={i} className="mt-5 text-lg leading-9 text-slate-300">{p}</p>)}{section.bullets&&<ul className="mt-5 space-y-3 text-slate-300">{section.bullets.map(b=><li key={b} className="flex gap-3"><span className="text-cyanx">•</span><span>{b}</span></li>)}</ul>}</section>)}</div></div>
  </article>{related.length>0&&<section className="section-pad bg-ocean-900"><div className="section-shell"><div className="section-kicker">Related</div><h2 className="section-title">Continue exploring</h2><div className="mt-10 grid gap-6 lg:grid-cols-3">{related.map(r=><ContentCard key={r.slug} item={r}/>)}</div></div></section>}<Footer/></main>
}
