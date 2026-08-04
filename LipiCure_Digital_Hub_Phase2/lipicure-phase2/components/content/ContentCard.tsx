import Link from 'next/link';
import { ArrowRight, CalendarDays } from 'lucide-react';
import type { ContentItem } from '@/lib/content';

const basePath = { insight: '/insights', founder: '/founders-desk', news: '/news' } as const;

export default function ContentCard({ item }: { item: ContentItem }) {
  return <article className="grid-card flex h-full flex-col p-7">
    <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[.14em] text-slate-500">
      <span>{item.category}</span><span className="flex items-center gap-2"><CalendarDays size={14}/>{item.date}</span>
    </div>
    <h2 className="mt-6 text-2xl font-semibold leading-tight">{item.title}</h2>
    <p className="mt-4 flex-1 leading-7 text-slate-400">{item.excerpt}</p>
    <div className="mt-6 flex items-center justify-between border-t border-cyan-300/10 pt-5 text-sm">
      <span className="text-slate-500">{item.readingTime}</span>
      <Link className="inline-flex items-center gap-2 text-cyanx" href={`${basePath[item.kind]}/${item.slug}`}>Read article <ArrowRight size={16}/></Link>
    </div>
  </article>
}
