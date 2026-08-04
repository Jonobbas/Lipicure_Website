import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContentCard from '@/components/content/ContentCard';
import { contentItems } from '@/lib/content';
import { BookOpen, FileText, Newspaper, NotebookPen, Search, Waves } from 'lucide-react';
import Link from 'next/link';

const channels = [
  {title:'Insights',text:'Research-informed market and technology analysis',href:'/insights',icon:BookOpen},
  {title:"Founder\'s Desk",text:'Monthly reflections on what we are building and learning',href:'/founders-desk',icon:NotebookPen},
  {title:'News & Progress',text:'Milestones, collaborations, events and venture updates',href:'/news',icon:Newspaper},
  {title:'Research',text:'Publications, working papers and technical resources',href:'/research',icon:FileText},
  {title:'Blue Bioeconomy',text:'Educational resources on marine biotechnology',href:'/insights',icon:Waves},
  {title:'Resources',text:'Future guides, reports and downloadable references',href:'/research',icon:Search},
];
export default function KnowledgePage(){return <main><Header/><section className="page-hero"><div className="section-shell"><div className="section-kicker">Knowledge Hub</div><h1 className="section-title max-w-5xl">A living knowledge platform for marine biotechnology</h1><p className="section-copy">LipiCure publishes original perspectives, research summaries, founder updates and venture progress so that the website remains useful, current and discoverable.</p></div></section><section className="section-pad bg-ocean-900"><div className="section-shell"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{channels.map(({title,text,href,icon:Icon})=><Link href={href} key={title} className="knowledge-card grid-card p-7"><Icon className="text-cyanx"/><h2 className="mt-8 text-2xl font-semibold">{title}</h2><p className="mt-4 leading-7 text-slate-400">{text}</p></Link>)}</div></div></section><section className="section-pad bg-[#03101b]"><div className="section-shell"><div className="section-kicker">Latest</div><h2 className="section-title">Recently published</h2><div className="mt-10 grid gap-6 lg:grid-cols-3">{contentItems.map(item=><ContentCard key={item.slug} item={item}/>)}</div></div></section><Footer/></main>}
