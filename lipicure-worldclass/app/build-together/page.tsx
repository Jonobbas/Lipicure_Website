import Link from 'next/link';
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Dna,
  FlaskConical,
  Gavel,
  HeartHandshake,
  Microscope,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react';

const disciplines = [
  { label: 'Marine Biotechnology', icon: Dna },
  { label: 'Scientific Research', icon: Microscope },
  { label: 'Clinical Translation', icon: FlaskConical },
  { label: 'Engineering & Digital Systems', icon: BrainCircuit },
  { label: 'Regulatory & Quality', icon: ShieldCheck },
  { label: 'Intellectual Property & Legal', icon: Scale },
  { label: 'Finance, Grants & Strategy', icon: BriefcaseBusiness },
  { label: 'Partnerships & Ecosystem Building', icon: HeartHandshake },
];

const principles = [
  'Scientific integrity',
  'Meaningful contribution',
  'Shared responsibility',
  'Respect for intellectual property',
  'Transparent governance',
  'Long-term value creation',
];

export default function BuildTogetherPage() {
  return (
    <main className="min-h-screen bg-ocean-950 text-white">
      <section className="page-hero">
        <div className="section-shell">
          <p className="section-kicker">Our Founding Philosophy</p>

          <h1 className="mt-4 max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Build the Future of Marine Biotechnology With Us
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            LipiCure is being built by people who believe that science,
            engineering and entrepreneurship can create something larger than
            any one individual.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-shell">
          <div className="max-w-4xl">
            <p className="text-2xl leading-10 text-slate-200 md:text-3xl">
              Great companies are not built by a single founder. They are built
              by scientists who ask difficult questions, engineers who transform
              ideas into systems, clinicians who protect people, and
              entrepreneurs who turn knowledge into impact.
            </p>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              We are not looking for honorary titles or passive participation.
              We are looking for people willing to contribute expertise, accept
              responsibility, build enduring company assets and remain
              accountable for meaningful outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ocean-900">
        <div className="section-shell">
          <div className="section-kicker">A Multidisciplinary Company</div>

          <h2 className="section-title">
            Different disciplines. One shared mission.
          </h2>

          <p className="section-copy">
            Marine biotechnology needs more than laboratory science. LipiCure is
            building capability across research, industry, medicine, regulation,
            law, finance, digital systems and partnerships.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {disciplines.map(({ label, icon: Icon }) => (
              <article key={label} className="grid-card p-6">
                <Icon className="text-cyanx" />
                <h3 className="mt-5 text-lg font-semibold">{label}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-shell grid gap-8 lg:grid-cols-2">
          <article className="grid-card p-8 md:p-10">
            <Users className="text-cyanx" size={34} />

            <h2 className="mt-6 text-3xl font-semibold">Build Together</h2>

            <p className="mt-5 leading-8 text-slate-300">
              During the early stage, many contributors may continue in their
              existing professional roles while dedicating meaningful additional
              time to LipiCure. Every role is expected to have clear
              responsibilities, deliverables, review rhythms and governance.
            </p>
          </article>

          <article className="grid-card p-8 md:p-10">
            <HeartHandshake className="text-cyanx" size={34} />

            <h2 className="mt-6 text-3xl font-semibold">Grow Together</h2>

            <p className="mt-5 leading-8 text-slate-300">
              As research, grants, partnerships, investment and revenue strengthen
              the company, selected contributors may take on larger leadership
              responsibilities or transition into full-time roles, subject to
              company needs, performance and formal approval.
            </p>
          </article>
        </div>
      </section>

      <section className="section-pad bg-ocean-900">
        <div className="section-shell">
          <div className="section-kicker">Our Core Principle</div>

          <blockquote className="mt-5 max-w-5xl text-3xl font-semibold leading-tight text-white md:text-5xl">
            Equity is earned through sustained, measurable company-building
            contribution and continuing responsibility—not merely by joining
            early.
          </blockquote>

          <p className="mt-7 max-w-3xl leading-8 text-slate-300">
            Participation does not guarantee employment, Board membership,
            salary, liquidity, valuation or financial return. Long-term upside
            exists only when real enterprise value is created.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-shell">
          <div className="section-kicker">How We Build</div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => (
              <div
                key={principle}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5"
              >
                <ShieldCheck className="shrink-0 text-cyanx" size={22} />
                <span className="font-medium text-slate-200">{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#04111e]">
        <div className="section-shell">
          <div className="max-w-4xl rounded-3xl border border-cyan-300/15 bg-cyan-300/[0.045] p-8 md:p-12">
            <p className="section-kicker">Join the Journey</p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              If you believe in our vision, help us build it.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              We are building an ecosystem where science, engineering,
              entrepreneurship and responsible collaboration come together to
              shape the future of marine biotechnology. If this vision resonates
              with you, we would be glad to hear from you.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/collaboration"
                className="inline-flex items-center gap-2 rounded-xl bg-cyanx px-5 py-4 font-semibold text-ocean-950"
              >
                Explore Collaboration <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-4 font-semibold"
              >
                Contact LipiCure
              </Link>
            </div>

            <p className="mt-8 text-sm leading-7 text-slate-400">
              This page communicates LipiCure&apos;s founding philosophy. Formal
              founder status, equity participation, vesting, intellectual
              property, confidentiality, employment and governance are subject to
              written agreements, applicable law and Board approval.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
