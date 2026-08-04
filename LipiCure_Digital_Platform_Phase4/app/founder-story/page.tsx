import ArticleShell from '@/components/content/ArticleShell';

const timeline = [
  ['Heavy engineering','Nearly two decades across manufacturing, quality and complex energy-project environments developed a strong foundation in execution, process discipline and scale.'],
  ['Lean and Toyota Production System','Lean thinking created a lasting interest in flow, waste elimination, standard work, learning systems and operational excellence.'],
  ['Lean Startup and Agile','Startup methodology and sprint-based development provided a practical way to test assumptions, learn faster and avoid building the wrong solution.'],
  ['Kanniyakumari and the marine economy','Exposure to coastal Tamil Nadu, conversations with industry participants and the abundance of pelagic marine resources made the value gap visible.'],
  ['Scientists and collaborators','Discussions with researchers, professors, incubators and industry experts shaped the venture from a product idea into a marine biotechnology platform.'],
  ['LipiCure','The venture now aims to integrate science, engineering, digital intelligence and commercialisation to build repeatable pathways from marine ideas to technologies.']
];

export default function FounderStoryPage(){
  return <ArticleShell eyebrow="Origin Story" title="From Heavy Engineering to Marine Biotechnology" intro="LipiCure emerged from the founder’s long-term study of how disciplined systems can convert complex ideas into reliable industrial outcomes.">
    <div className="space-y-4">{timeline.map(([title,text],index)=><div key={title} className="grid-card p-6 md:grid md:grid-cols-[70px_1fr] md:gap-5"><div className="text-3xl text-cyanx">{String(index+1).padStart(2,'0')}</div><div><h2 className="text-2xl font-semibold">{title}</h2><p className="mt-3 leading-7 text-slate-300">{text}</p></div></div>)}</div>
    <blockquote className="mt-10 border-l-2 border-cyanx pl-6 text-2xl leading-10 text-slate-200">“I don’t build products first. I build systems that repeatedly create successful products.”</blockquote>
  </ArticleShell>
}
