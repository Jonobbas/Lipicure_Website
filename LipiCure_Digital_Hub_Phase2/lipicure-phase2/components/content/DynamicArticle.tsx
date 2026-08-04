import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock3 } from 'lucide-react';
import type { ContentItem } from '@/lib/content';

const basePath = { insight: '/insights', founder: '/founders-desk', news: '/news' } as const;

export default function DynamicArticle({ item }: { item: ContentItem }) {
  return <main><Header/><article><header className="page-hero"><div className="section-shell max-w-4xl"><Link href={basePath[item.kind]} className="mb-8 inline-flex items-center gap-2 text-sm text-cyanx"><ArrowLeft size={16}/>Back to archive</Link><div className="section-kicker">{item.category}</div><h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-.04em] sm:text-6xl">{item.title}</h1><p className="mt-6 text-xl leading-8 text-slate-300">{item.excerpt}</p><div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-500"><span className="flex items-center gap-2"><CalendarDays size={16}/>{item.date}</span><span className="flex items-center gap-2"><Clock3 size={16}/>{item.readingTime}</span></div></div></header><section className="section-pad bg-ocean-900"><div className="article-body section-shell max-w-3xl">{item.body.map((block,index)=><section key={index}>{block.heading&&<h2>{block.heading}</h2>}{block.paragraphs?.map(p=><p key={p}>{p}</p>)}{block.bullets&&<ul className="my-6 space-y-3 pl-5">{block.bullets.map(b=><li className="list-disc" key={b}>{b}</li>)}</ul>}</section>)}</div></section></article><Footer/></main>
}
