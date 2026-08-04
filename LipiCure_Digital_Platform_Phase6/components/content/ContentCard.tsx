import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ContentItem, hrefFor } from '@/lib/content';

export default function ContentCard({item}:{item:ContentItem}){
  return <article className="grid-card flex h-full flex-col p-6">
    <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[.14em] text-slate-500"><span>{item.category}</span><span>{item.readingTime}</span></div>
    <h2 className="mt-5 text-2xl font-semibold leading-tight">{item.title}</h2>
    <p className="mt-4 flex-1 leading-7 text-slate-400">{item.excerpt}</p>
    <div className="mt-5 flex flex-wrap gap-2">{item.tags.slice(0,3).map(tag=><span key={tag} className="rounded-full border border-cyan-300/15 px-3 py-1 text-xs text-slate-400">{tag}</span>)}</div>
    <Link href={hrefFor(item)} className="mt-6 inline-flex items-center gap-2 text-sm text-cyanx">Read more <ArrowRight size={16}/></Link>
  </article>
}
