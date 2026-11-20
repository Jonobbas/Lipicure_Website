import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, FileText, FlaskConical, ScrollText, ShieldCheck } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Legal & Compliance | LipiCure',
  description: 'Corporate disclosures, website policies and legal information for LipiCure Private Limited.',
};

const documents = [
  { href: '/legal/privacy-policy', title: 'Privacy Policy', copy: 'How we collect, use, protect and respond to requests concerning personal information.', icon: ShieldCheck },
  { href: '/legal/terms-of-use', title: 'Terms of Use', copy: 'The conditions that apply when accessing and using this website and its content.', icon: ScrollText },
  { href: '/legal/scientific-disclaimer', title: 'Scientific Disclaimer', copy: 'Important boundaries around research-stage information, health references and development claims.', icon: FlaskConical },
  { href: '/legal/annual-returns', title: 'Annual Returns', copy: 'The public location for annual returns once they become due and are filed.', icon: FileText },
];

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-ocean-950">
      <Header />
      <section className="border-b border-cyan-300/10 bg-gradient-to-br from-ocean-950 via-ocean-900 to-ocean-800 pb-16 pt-36 md:pb-20 md:pt-44">
        <div className="section-shell">
          <div className="section-kicker">Legal &amp; compliance</div>
          <h1 className="mt-5 max-w-5xl text-4xl font-medium tracking-tight text-white md:text-6xl">Responsible science begins with clear governance.</h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">Corporate information, website policies and public compliance documents for LipiCure Private Limited.</p>
        </div>
      </section>

      <section className="bg-[#03121b] py-16 md:py-24">
        <div className="section-shell">
          <div className="rounded-2xl border border-cyan-300/15 bg-ocean-950/60 p-7 md:p-10">
            <div className="flex items-start gap-4"><Building2 className="mt-1 shrink-0 text-cyanx" size={24}/><div>
              <h2 className="text-2xl font-medium text-white">LIPICURE PRIVATE LIMITED</h2>
              <div className="mt-5 grid gap-3 text-sm leading-7 text-slate-300 md:grid-cols-2">
                <p><strong className="text-white">CIN</strong><br/>U72100TN2026PTC200325</p>
                <p><strong className="text-white">Incorporated</strong><br/>18 November 2026</p>
                <p><strong className="text-white">Official email</strong><br/><a className="text-cyanx" href="mailto:founder@lipicure.com">founder@lipicure.com</a></p>
                <p><strong className="text-white">Company type</strong><br/>Private company limited by shares</p>
              </div>
              <address className="mt-6 not-italic text-sm leading-7 text-slate-400">Registered Office: C/O Meenakumari, Sudalaiyandinadar, Kottar, Agastheeswaram, Kanyakumari – 629002, Tamil Nadu, India</address>
            </div></div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {documents.map(({ href, title, copy, icon: Icon }) => (
              <Link key={href} href={href} className="group rounded-2xl border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[.06] to-transparent p-7 transition hover:border-cyan-300/35 hover:bg-cyan-300/[.08]">
                <Icon className="text-cyanx" size={23}/>
                <h2 className="mt-8 text-2xl font-medium text-white">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">{copy}</p>
                <span className="mt-6 block text-sm font-medium text-cyanx">Read document</span>
              </Link>
            ))}
          </div>

          <p className="mt-10 text-sm leading-7 text-slate-500">For corporate queries or grievances, contact the Founder&apos;s Office at <a className="text-cyanx" href="mailto:founder@lipicure.com">founder@lipicure.com</a>.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
