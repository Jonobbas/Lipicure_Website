import Link from 'next/link';
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Lightbulb,
  RefreshCw,
  Rocket,
  Search,
  Target,
  Users,
  Zap,
} from 'lucide-react';

const stages = [
  {
    number: '01',
    title: 'Design Thinking',
    tagline: 'Discover the right problem.',
    icon: Lightbulb,
    text: 'We begin by understanding people, industry conditions, clinical needs, scientific gaps and commercial realities before defining a technology opportunity.',
    items: [
      'Stakeholder and customer discovery',
      'Clinical and industry-needs analysis',
      'Research-gap identification',
      'Problem definition and opportunity framing',
    ],
  },
  {
    number: '02',
    title: 'Lean Startup',
    tagline: 'Validate before scaling.',
    icon: Rocket,
    text: 'Important assumptions are treated as hypotheses. We test them early through evidence, simulations, experiments and stakeholder feedback before committing larger resources.',
    items: [
      'Build–Measure–Learn cycles',
      'Minimum viable experiments',
      'Scientific and commercial hypothesis testing',
      'Evidence-led continuation, pivot or stop decisions',
    ],
  },
  {
    number: '03',
    title: 'Agile',
    tagline: 'Build through continuous learning.',
    icon: Zap,
    text: 'Validated opportunities move through short, accountable development cycles that integrate science, engineering, regulatory thinking and commercial translation.',
    items: [
      'Sprint-based execution',
      'Cross-functional workstreams',
      'Frequent reviews and demonstrations',
      'Continuous improvement and reprioritisation',
    ],
  },
];

const flow = [
  ['Discover', 'Needs, gaps and opportunities'],
  ['Define', 'A clear problem and intended outcome'],
  ['Validate', 'Test the critical assumptions'],
  ['Develop', 'Build through short learning cycles'],
  ['Translate', 'Prepare evidence and technology packages'],
  ['Scale', 'Advance partnerships and commercial deployment'],
];

export default function InnovationFrameworkPage() {
  return (
    <main className="min-h-screen bg-ocean-950 text-white">
      <section className="page-hero">
        <div className="section-shell">
          <p className="section-kicker">How We Build</p>

          <h1 className="mt-4 max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            The LipiCure Operating System
          </h1>

          <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-300 md:text-xl">
            Design Thinking identifies the right problem. Lean Startup validates
            the right solution. Agile builds it through disciplined iterations.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-shell">
          <div className="max-w-4xl">
            <p className="text-2xl leading-10 text-slate-200 md:text-3xl">
              We do not assume that every idea will succeed. We build a system
              that exposes weak assumptions early, accelerates learning and
              directs resources toward the strongest opportunities.
            </p>

            <blockquote className="mt-10 border-l-2 border-cyanx pl-6 text-2xl leading-10 text-slate-200">
              “Innovation is not guaranteed. The quality and speed of learning
              can be deliberately engineered.”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ocean-900">
        <div className="section-shell">
          <p className="section-kicker">Three Integrated Disciplines</p>

          <h2 className="section-title">
            One repeatable pathway from uncertainty to evidence
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {stages.map(({ number, title, tagline, icon: Icon, text, items }) => (
              <article key={title} className="grid-card p-7 md:p-8">
                <div className="flex items-center justify-between">
                  <Icon className="text-cyanx" size={32} />
                  <span className="text-sm font-semibold tracking-[.2em] text-cyanx">
                    {number}
                  </span>
                </div>

                <h3 className="mt-7 text-3xl font-semibold">{title}</h3>
                <p className="mt-2 font-medium text-cyanx">{tagline}</p>

                <p className="mt-5 leading-8 text-slate-300">{text}</p>

                <ul className="mt-6 space-y-3">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                    >
                      <CheckCircle2
                        className="mt-1 shrink-0 text-cyanx"
                        size={17}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-shell">
          <p className="section-kicker">The Operating Flow</p>

          <h2 className="section-title">
            Discover. Validate. Build. Translate.
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {flow.map(([title, text], index) => (
              <article
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-cyan-300/25 text-sm font-semibold text-cyanx">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>

                <p className="mt-4 leading-7 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ocean-900">
        <div className="section-shell grid gap-8 lg:grid-cols-2">
          <article className="grid-card p-8 md:p-10">
            <BrainCircuit className="text-cyanx" size={34} />

            <h2 className="mt-6 text-3xl font-semibold">
              PEARL-X as the Intelligence Layer
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              PEARL-X supports opportunity intelligence, research-landscape
              analysis, hypothesis generation, process simulation, design-space
              exploration and development decisions across the operating system.
            </p>
          </article>

          <article className="grid-card p-8 md:p-10">
            <RefreshCw className="text-cyanx" size={34} />

            <h2 className="mt-6 text-3xl font-semibold">
              Evidence Before Expansion
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Each cycle should leave behind stronger evidence, clearer
              decisions and reusable company knowledge—even when a particular
              hypothesis is rejected.
            </p>
          </article>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-shell">
          <div className="max-w-5xl rounded-3xl border border-cyan-300/15 bg-cyan-300/[0.045] p-8 md:p-12">
            <p className="section-kicker">Our Development Philosophy</p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              We do not build products first. We build systems that repeatedly
              create better products.
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              The LipiCure Operating System will continue to evolve as research,
              validation, regulatory learning and commercial experience deepen.
              Its purpose is not to promise perfect outcomes, but to make
              innovation more disciplined, transparent and repeatable.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/pearl-x"
                className="inline-flex items-center gap-2 rounded-xl bg-cyanx px-5 py-4 font-semibold text-ocean-950"
              >
                Explore PEARL-X <ArrowRight size={18} />
              </Link>

              <Link
                href="/collaboration"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-4 font-semibold"
              >
                Collaborate With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
