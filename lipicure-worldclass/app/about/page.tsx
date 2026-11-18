import type { Metadata } from 'next';
import { Building2, CalendarDays, Landmark, Mail, MapPin, Scale } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'About LipiCure Private Limited',
  description: 'Company profile, corporate identity and registered-office information for LipiCure Private Limited.',
};

const companyDetails = [
  { icon: Building2, label: 'Legal name', value: 'LIPICURE PRIVATE LIMITED' },
  { icon: Landmark, label: 'Corporate Identity Number', value: 'U72100TN2026PTC200325' },
  { icon: CalendarDays, label: 'Date of incorporation', value: '18 November 2026' },
  { icon: Scale, label: 'Company type', value: 'Private company limited by shares' },
  { icon: Scale, label: 'Authorised share capital', value: '₹1,00,000' },
  { icon: Mail, label: 'Official email', value: 'founder@lipicure.com', href: 'mailto:founder@lipicure.com' },
];

export default function AboutPage(){
  return (
    <main className="min-h-screen bg-ocean-950">
      <Header/>

      <section className="relative overflow-hidden bg-gradient-to-br from-ocean-950 via-ocean-900 to-ocean-800 pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="absolute -right-32 top-16 h-[480px] w-[480px] rounded-full border border-cyan-300/10 bg-cyan-300/5 blur-3xl" aria-hidden="true"/>
        <div className="section-shell relative">
          <div className="section-kicker">About the company</div>
          <h1 className="section-title max-w-5xl">Engineering the<br/><span className="text-cyanx">Blue Bioeconomy.</span></h1>
          <p className="section-copy max-w-3xl">
            LipiCure Private Limited is an India-based marine biotechnology venture
            building research, bioprocess intelligence and translation pathways for higher-value marine innovations.
          </p>
        </div>
      </section>

      <section className="border-t border-cyan-300/10 bg-[#03121b] py-20 md:py-28">
        <div className="section-shell">
          <div className="mb-12 grid gap-6 md:grid-cols-[1fr_.7fr] md:items-end">
            <div>
              <div className="section-kicker">Corporate information</div>
              <h2 className="text-4xl font-medium tracking-tight text-white md:text-6xl">Official company details</h2>
            </div>
            <p className="text-sm leading-7 text-slate-400">
              Incorporated under the Companies Act, 2013 and registered in Tamil Nadu, India.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {companyDetails.map(({ icon: Icon, label, value, href }) => (
              <article key={label} className="min-h-[190px] rounded-2xl border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[.06] to-transparent p-7">
                <Icon className="text-cyanx" size={22}/>
                <div className="mt-10 text-[10px] uppercase tracking-[.16em] text-slate-500">{label}</div>
                {href
                  ? <a className="mt-3 block break-words text-lg font-medium text-cyanx hover:text-white" href={href}>{value}</a>
                  : <p className="mt-3 break-words text-lg font-medium leading-7 text-white">{value}</p>}
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-cyan-300/15 bg-ocean-950/60 p-7 md:p-9">
            <div className="flex gap-4">
              <MapPin className="mt-1 shrink-0 text-cyanx" size={22}/>
              <div>
                <div className="text-[10px] uppercase tracking-[.16em] text-slate-500">Registered office</div>
                <address className="mt-3 max-w-3xl not-italic text-lg leading-8 text-slate-200">
                  C/O Meenakumari, Sudalaiyandinadar, Kottar, Agastheeswaram,
                  Kanyakumari – 629002, Tamil Nadu, India
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-cyan-300/10 bg-[#020d15] py-20 md:py-24">
        <div className="section-shell grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="section-kicker">Our direction</div>
            <h2 className="text-3xl font-medium tracking-tight text-white md:text-5xl">From marine discovery to responsible industrial translation.</h2>
          </div>
          <p className="text-sm leading-8 text-slate-400">
            LipiCure connects scientific evidence, computational bioprocess intelligence,
            quality-by-design and collaboration to move promising marine-biotechnology opportunities
            toward reproducible and commercially relevant development pathways.
          </p>
        </div>
      </section>

      <Footer/>
    </main>
  );
}
