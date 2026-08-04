import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PearlWorkflow from '@/components/pearl/PearlWorkflow';
import TRLTimeline from '@/components/pearl/TRLTimeline';
import DesignSpace from '@/components/pearl/DesignSpace';
import { ArrowRight, CircleCheckBig, FlaskConical, Network, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PEARL-X Digital Process Intelligence | LipiCure',
  description: 'Explore LipiCure’s digital-first process intelligence framework for disciplined marine biotechnology development.'
};

export default function PearlXPage(){
  return <main>
    <Header/>
    <section className="page-hero pearl-page-hero">
      <div className="section-shell relative z-10">
        <div className="section-kicker">PEARL-X</div>
        <h1 className="section-title max-w-4xl">Digital process intelligence for disciplined technology development</h1>
        <p className="section-copy">PEARL-X integrates mechanistic reasoning, Quality by Design, simulation, design-space exploration and iterative validation. It helps prioritise the right experiments before expensive scale-up.</p>
        <div className="mt-8 flex flex-wrap gap-4"><a href="#workflow" className="inline-flex items-center gap-2 rounded-xl bg-cyanx px-5 py-4 font-semibold text-ocean-950">Explore the workflow <ArrowRight size={18}/></a><a href="/research" className="rounded-xl border border-white/20 px-5 py-4 font-semibold">Research status</a></div>
      </div>
    </section>

    <section id="workflow" className="section-pad bg-ocean-900"><div className="section-shell"><div className="section-kicker">Operating workflow</div><h2 className="section-title">From opportunity to technology package</h2><p className="section-copy">Each stage is designed to reduce a specific uncertainty. The sequence can iterate rather than move only in one direction.</p><div className="mt-12"><PearlWorkflow/></div></div></section>

    <section className="section-pad bg-[#04111e]"><div className="section-shell"><div className="section-kicker">Quality by Design</div><h2 className="section-title">Understand the process before trying to scale it</h2><DesignSpace/></div></section>

    <section className="section-pad bg-ocean-900"><div className="section-shell"><div className="section-kicker">TRL progression</div><h2 className="section-title">Advance through evidence, not optimism</h2><p className="section-copy">TRL is treated as the outcome of accumulated scientific, engineering, operational and market evidence.</p><TRLTimeline/></div></section>

    <section className="section-pad bg-[#03101b]"><div className="section-shell grid gap-5 lg:grid-cols-3">
      <Pillar icon={<Network/>} title="Digital-first" text="Use modelling and simulation to narrow the experimental field—not to replace laboratory evidence."/>
      <Pillar icon={<FlaskConical/>} title="Experiment-led" text="Calibrate assumptions with measured data and select experiments for information value."/>
      <Pillar icon={<ShieldCheck/>} title="Governed claims" text="Separate prediction, evidence and validated performance in every communication."/>
    </div></section>

    <section className="section-pad bg-gradient-to-br from-ocean-800 to-ocean-950"><div className="section-shell text-center"><CircleCheckBig className="mx-auto text-cyanx" size={42}/><h2 className="section-title mt-5">A platform that learns with every project</h2><p className="section-copy mx-auto">PEARL-X is being developed progressively. Current simulation outputs remain hypotheses and decision-support evidence until calibrated and experimentally validated.</p></div></section>
    <Footer/>
  </main>;
}

function Pillar({icon,title,text}:{icon:React.ReactNode,title:string,text:string}){return <article className="grid-card p-7"><div className="text-cyanx">{icon}</div><h3 className="mt-6 text-2xl font-semibold">{title}</h3><p className="mt-4 leading-7 text-slate-400">{text}</p></article>}
