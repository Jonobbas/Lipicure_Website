import ArticleShell from '@/components/content/ArticleShell';

export default function FoundersDeskPage(){
  return <ArticleShell eyebrow="Monthly Letter" title="From the Founder’s Desk" intro="A monthly reflection on what LipiCure is learning, building and exploring across science, industry and venture development.">
    <article className="grid-card p-8">
      <div className="text-xs uppercase tracking-[.18em] text-cyanx">Founding Note · August 2026</div>
      <h2 className="mt-4 text-3xl font-semibold">Building a system that repeatedly turns marine biotechnology ideas into technologies</h2>
      <p className="mt-6 leading-8 text-slate-300">LipiCure began with a question: why does abundant marine biomass so often remain trapped in low-value pathways while high-value health and industrial technologies are imported or developed elsewhere? Our early work is focused on understanding that gap, building a credible scientific network and creating a disciplined operating model for moving from problem discovery to validation and commercialisation.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/5 p-5"><strong className="text-cyanx">Thinking about</strong><p className="mt-2 text-sm leading-6 text-slate-400">How digital process intelligence can shorten the path from TRL 3 to TRL 9.</p></div>
        <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/5 p-5"><strong className="text-cyanx">Building</strong><p className="mt-2 text-sm leading-6 text-slate-400">PEARL-X, founder governance, scientific collaborations and the first Omega-3 demonstration pathway.</p></div>
        <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/5 p-5"><strong className="text-cyanx">Learning</strong><p className="mt-2 text-sm leading-6 text-slate-400">From researchers, industry experts, incubators and global TechBio platform companies.</p></div>
        <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/5 p-5"><strong className="text-cyanx">Looking for</strong><p className="mt-2 text-sm leading-6 text-slate-400">Marine bioprocess scientists, analytical partners, industry problem owners and mission-aligned mentors.</p></div>
      </div>
    </article>
  </ArticleShell>
}
