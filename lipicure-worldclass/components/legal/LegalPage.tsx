import type { ReactNode } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

type LegalPageProps = {
  eyebrow: string;
  title: string;
  summary: string;
  updated?: string;
  children: ReactNode;
};

export default function LegalPage({ eyebrow, title, summary, updated = '20 November 2026', children }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-ocean-950">
      <Header />
      <section className="border-b border-cyan-300/10 bg-gradient-to-br from-ocean-950 via-ocean-900 to-ocean-800 pb-16 pt-36 md:pb-20 md:pt-44">
        <div className="section-shell">
          <div className="section-kicker">{eyebrow}</div>
          <h1 className="mt-5 max-w-5xl text-4xl font-medium tracking-tight text-white md:text-6xl">{title}</h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">{summary}</p>
          <p className="mt-6 text-xs uppercase tracking-[.16em] text-slate-500">Last updated · {updated}</p>
        </div>
      </section>
      <section className="bg-[#03121b] py-16 md:py-24">
        <article className="section-shell max-w-4xl space-y-10 text-base leading-8 text-slate-300 [&_a]:text-cyanx [&_a]:underline [&_a]:underline-offset-4 [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:tracking-tight [&_h2]:text-white [&_li]:ml-5 [&_li]:list-disc [&_strong]:font-semibold [&_strong]:text-white [&_ul]:space-y-2">
          {children}
        </article>
      </section>
      <Footer />
    </main>
  );
}
