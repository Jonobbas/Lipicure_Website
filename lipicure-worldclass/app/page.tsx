'use client';

import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Atom, CircleDollarSign, Dna, Factory, Fish, FlaskConical, Globe2, Leaf, Microscope, Network, Pill, Recycle, ShieldCheck, Waves } from 'lucide-react';

const OceanScene = dynamic(() => import('@/components/OceanScene'), { ssr: false });

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: .7 } };

export default function HomePage(){
  return <main>
    <section className="relative min-h-screen overflow-hidden bg-ocean-950">
      <div className="absolute inset-0"><OceanScene/></div>
      <div className="hero-gradient absolute inset-0" />
      <Header/>
      <div className="section-shell relative z-10 flex min-h-screen items-center pt-24">
        <div className="max-w-3xl pb-28">
          <div className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs uppercase tracking-[.2em] text-cyanx">Marine Biotechnology · Deep-Tech · India</div>
          <h1 className="text-5xl font-semibold leading-[.95] tracking-[-.05em] sm:text-7xl lg:text-8xl">Engineering the <span className="block text-cyanx">Blue Bioeconomy</span></h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">India&apos;s Marine Bioprocess Intelligence Platform — discovering, designing and translating high-value marine biotechnology opportunities into licensable technologies.</p>
          <div className="mt-8 flex flex-wrap gap-4"><a href="#platform" className="inline-flex items-center gap-2 rounded-xl bg-cyanx px-5 py-4 font-semibold text-ocean-950">Explore Platform <ArrowRight size={18}/></a><a href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-black/20 px-5 py-4 font-semibold">Partner With Us</a></div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-5 z-10"><div className="section-shell grid gap-3 sm:grid-cols-3"><Stat value="3rd Largest" label="pelagic fish producer"/><Stat value="$7B+" label="marine biotech market"/><Stat value="8–12%" label="projected CAGR to 2035"/></div></div>
    </section>

    <section className="section-pad bg-ocean-900">
      <div className="section-shell"><motion.div {...fade}><div className="section-kicker">The Opportunity</div><h2 className="section-title">India&apos;s Blue Bioeconomy Opportunity</h2><p className="section-copy">India has abundant marine biomass, scientific talent and a growing demand for sustainable health, nutrition and industrial ingredients. The opportunity is to translate this natural resource advantage into high-value, validated technologies rather than low-value commodity outputs.</p></motion.div>
      <div className="mt-14 grid gap-4 md:grid-cols-6">{[['Ocean',Waves],['Marine Biomass',Fish],['Bioactive Molecules',Dna],['Nutraceuticals',Pill],['Pharmaceuticals',FlaskConical],['Circular Economy',Recycle]].map(([t,I],i)=><div key={String(t)} className="grid-card p-5 text-center"><I className="mx-auto mb-4 text-cyanx"/><div className="text-sm font-medium">{t as string}</div>{i<5&&<div className="mt-4 text-cyanx">→</div>}</div>)}</div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><Metric value="8,118 km" label="India's coastline"/><Metric value="~4.2M MT" label="Annual marine fish production"/><Metric value="<5%" label="Biomass reaching pharma-grade extraction"/><Metric value="₹50,000 Cr" label="Estimated annual value gap to be validated"/></div>
      <p className="mt-5 text-xs text-slate-500">Market and production figures are placeholders for validation before public launch.</p></div>
    </section>

    <section className="section-pad bg-[#04111e]">
      <div className="section-shell"><div className="section-kicker">Why Green Processing</div><h2 className="section-title">The Next Generation of Marine Processing</h2><div className="mt-12 grid gap-6 lg:grid-cols-2"><Compare title="Conventional Processing" tone="red" items={['High-temperature extraction can damage heat-sensitive bioactives','Oxidation can reduce quality, yield and stability','Chemical-intensive methods may generate hazardous residues','Lower value recovery from the same biomass','Higher carbon and environmental burden']}/><Compare title="LipiCure Approach" tone="teal" items={['Low-temperature preservation of bioactive integrity','Digital process intelligence to minimise oxidation risk','Green chemistry with reduced harmful solvents and residues','Higher value recovery from each kilogram of biomass','Circular bioeconomy thinking across all fractions']}/></div></div>
    </section>

    <section className="section-pad bg-ocean-900">
      <div className="section-shell"><div className="section-kicker">Marine Biorefinery</div><h2 className="section-title">One Biomass. Multiple High-Value Products.</h2><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[
        ['Omega-3 Lipids','EPA and DHA for nutraceutical and pharmaceutical pathways',Waves],['Marine Proteins','Hydrolysates and high-purity concentrates',Dna],['Marine Collagen','Type I and II collagen for health and cosmetics',ShieldCheck],['Bioactive Peptides','Functional peptides with potential therapeutic value',Atom],['Chitin and Chitosan','Marine polysaccharides for pharma and agriculture',Leaf],['Marine Minerals','Calcium, phosphorus and trace bioelements',Globe2],['Marine Pigments','Astaxanthin, carotenoids and specialty colorants',Microscope],['Bioactive Compounds','Enzymes, antimicrobials and specialty actives',FlaskConical]
      ].map(([t,d,I])=><motion.article {...fade} key={String(t)} className="grid-card p-6"><I className="mb-5 text-cyanx"/><h3 className="text-lg font-semibold">{t as string}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{d as string}</p></motion.article>)}</div><p className="mt-10 text-center text-xl text-cyanx">Every fraction has value. Nothing should become waste.</p></div>
    </section>

    <section id="platform" className="section-pad bg-[#03101b]">
      <div className="section-shell"><div className="section-kicker">LipiCure Platform</div><h2 className="section-title">A Market-Driven Marine Biotechnology Innovation System</h2><div className="mt-12 grid gap-4 lg:grid-cols-5">{[['01','Research & Collaborative Innovation'],['02','Marine Bioprocess Intelligence Platform'],['03','Technology Development'],['04','Intellectual Property Portfolio'],['05','Technology Commercialisation']].map(([n,t])=><div className="grid-card p-5" key={n}><div className="text-3xl text-cyanx">{n}</div><h3 className="mt-10 font-semibold leading-6">{t}</h3></div>)}</div><div className="mt-8 grid gap-4 md:grid-cols-3"><Positioning title="Not a manufacturer" text="A future GMP demonstration unit is a credibility and validation engine, not the primary revenue model."/><Positioning title="Not a CRO" text="Market intelligence and portfolio logic decide what is built, rather than one-off client briefs."/><Positioning title="Not a research lab" text="Every project begins with a validated industrial need and aims to end with a licensable technology package."/></div></div>
    </section>

    <section className="section-pad bg-ocean-900">
      <div className="section-shell"><div className="section-kicker">Marine Bioprocess Intelligence</div><h2 className="section-title">Digital Intelligence for Every Stage of Process Development</h2><div className="mt-12 grid gap-6 lg:grid-cols-2"><SystemCard title="Opportunity Intelligence System" subtitle="Used before R&D begins" items={['Market intelligence and customer-needs analysis','Academic research and patent landscape scanning','Industrial value-stream mapping across key process nodes','Regulatory intelligence — FSSAI, FDA, EFSA and EMA pathways','Opportunity scoring using weighted commercial criteria','Portfolio balance and R&D prioritisation','Output: Technology Development Specification (TDS)']}/><SystemCard title="Process Development System" subtitle="Used after technology selection" items={['Mathematical process simulation and modelling','Experimental design and statistical analysis (DOE)','Critical process parameter mapping','Digital process model development','Process optimisation and design-space definition','Technology readiness level progression','Technology Package preparation for licensing']}/></div><div className="mt-8 rounded-2xl border border-cyan-300/15 bg-cyan-300/5 p-6 text-sm leading-7 text-slate-300">PEARL-X currently supports digital-first hypothesis generation, design-space exploration and process-development decision support. Simulation outputs remain predictions until calibrated and experimentally validated. This distinction is central to LipiCure&apos;s scientific governance.</div></div>
    </section>

    <section className="section-pad bg-[#03101b]">
      <div className="section-shell"><div className="section-kicker">Collaboration</div><h2 className="section-title">Join the Platform</h2><div className="mt-12 grid gap-5 lg:grid-cols-3"><Audience icon={<Microscope/>} title="Scientists & Researchers" text="Bring deep laboratory expertise and gain access to validated industrial problems, venture pathways and commercialisation support."/><Audience icon={<Factory/>} title="Industry Partners" text="Bring difficult marine-processing challenges and collaborate on technology packages built for industrial adoption and licensing."/><Audience icon={<CircleDollarSign/>} title="Investors" text="Participate in a platform addressing the conversion of abundant marine biomass into higher-value technologies and products."/></div></div>
    </section>

    <section className="section-pad bg-gradient-to-br from-ocean-800 to-ocean-950"><div className="section-shell text-center"><div className="section-kicker">The next chapter</div><h2 className="section-title">Engineering the Blue Bioeconomy — Together</h2><p className="section-copy mx-auto">We are building the next generation of marine biotechnology products. Omega-3 is our first demonstration project.</p><div className="mt-8 flex flex-wrap justify-center gap-4"><a href="/contact" className="rounded-xl bg-cyanx px-6 py-4 font-semibold text-ocean-950">Partner With Us</a><a href="/technology" className="rounded-xl border border-white/20 px-6 py-4 font-semibold">View Our Technology</a></div></div></section>
    <Footer/>
  </main>
}

function Stat({value,label}:{value:string,label:string}){return <div className="glass rounded-2xl px-5 py-4"><strong className="block text-xl text-cyanx">{value}</strong><span className="text-xs text-slate-300">{label}</span></div>}
function Metric({value,label}:{value:string,label:string}){return <div className="grid-card p-6"><strong className="block text-3xl text-cyanx">{value}</strong><span className="mt-3 block text-sm text-slate-400">{label}</span></div>}
function Compare({title,items,tone}:{title:string,items:string[],tone:'red'|'teal'}){return <div className={`rounded-2xl border p-7 ${tone==='red'?'border-red-400/20 bg-red-400/5':'border-cyan-300/20 bg-cyan-300/5'}`}><h3 className={`text-2xl font-semibold ${tone==='red'?'text-red-300':'text-cyanx'}`}>{title}</h3><ul className="mt-6 space-y-4 text-slate-300">{items.map(i=><li key={i} className="flex gap-3"><span>{tone==='red'?'×':'✓'}</span><span>{i}</span></li>)}</ul></div>}
function Positioning({title,text}:{title:string,text:string}){return <div className="rounded-2xl border border-cyan-300/15 bg-white/[.02] p-6"><h3 className="text-lg font-semibold text-cyanx">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{text}</p></div>}
function SystemCard({title,subtitle,items}:{title:string,subtitle:string,items:string[]}){return <div className="grid-card p-7"><div className="text-xs uppercase tracking-[.18em] text-cyanx">{subtitle}</div><h3 className="mt-3 text-2xl font-semibold">{title}</h3><ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">{items.map(i=><li key={i} className="flex gap-3"><span className="text-cyanx">•</span>{i}</li>)}</ul></div>}
function Audience({icon,title,text}:{icon:React.ReactNode,title:string,text:string}){return <div className="grid-card p-7"><div className="text-cyanx">{icon}</div><h3 className="mt-6 text-2xl font-semibold">{title}</h3><p className="mt-4 leading-7 text-slate-400">{text}</p></div>}
