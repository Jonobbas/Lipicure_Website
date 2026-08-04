'use client';
import { useMemo, useState } from 'react';
import ContentCard from './ContentCard';
import { ContentItem } from '@/lib/content';

export default function ContentIndex({items,title}:{items:ContentItem[],title:string}){
  const categories=['All',...Array.from(new Set(items.map(i=>i.category)))];
  const [category,setCategory]=useState('All');
  const [query,setQuery]=useState('');
  const filtered=useMemo(()=>items.filter(item=>(category==='All'||item.category===category)&&(`${item.title} ${item.excerpt} ${item.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase()))),[items,category,query]);
  return <>
    <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
      <label className="block"><span className="sr-only">Search {title}</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={`Search ${title.toLowerCase()}...`} className="w-full rounded-xl border border-white/10 bg-white/[.03] px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/40"/></label>
      <div className="flex flex-wrap gap-2">{categories.map(c=><button key={c} onClick={()=>setCategory(c)} className={`rounded-full border px-4 py-2 text-sm ${category===c?'border-cyan-300/40 bg-cyan-300/10 text-cyanx':'border-white/10 text-slate-400'}`}>{c}</button>)}</div>
    </div>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map(item=><ContentCard key={item.slug} item={item}/>)}</div>
    {!filtered.length&&<p className="rounded-xl border border-white/10 p-6 text-slate-400">No published items match this filter.</p>}
  </>
}
