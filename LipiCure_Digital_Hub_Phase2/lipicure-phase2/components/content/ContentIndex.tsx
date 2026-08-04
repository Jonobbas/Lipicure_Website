import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContentCard from './ContentCard';
import type { ContentItem } from '@/lib/content';

export default function ContentIndex({ kicker, title, description, items }: { kicker:string; title:string; description:string; items:ContentItem[] }) {
  return <main><Header/><section className="page-hero"><div className="section-shell"><div className="section-kicker">{kicker}</div><h1 className="section-title max-w-4xl">{title}</h1><p className="section-copy">{description}</p></div></section><section className="section-pad bg-ocean-900"><div className="section-shell"><div className="grid gap-6 lg:grid-cols-3">{items.map(item=><ContentCard key={item.slug} item={item}/>)}</div></div></section><Footer/></main>
}
