import { Mail } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Page(){
  return <main>
    <div className="min-h-[75vh] bg-gradient-to-br from-ocean-950 via-ocean-900 to-ocean-800">
      <Header/>
      <div className="section-shell flex min-h-[75vh] items-center pt-24">
        <div className="max-w-3xl">
          <div className="section-kicker">LipiCure</div>
          <h1 className="section-title">Partner With Us</h1>
          <p className="section-copy">For scientific collaboration, industrial problem statements, incubation, investment and technology-development partnerships, connect directly with the LipiCure Founder&apos;s Office.</p>
          <a href="mailto:founder@lipicure.com" className="mt-8 inline-flex items-center gap-3 rounded-xl border border-cyan-300/35 bg-cyan-300/10 px-6 py-4 font-semibold text-cyanx transition hover:border-cyan-200/60 hover:bg-cyan-300/15 hover:text-white">
            <Mail size={19}/>Email the Founder&apos;s Office
          </a>
          <p className="mt-4 text-sm text-slate-400">founder@lipicure.com</p>
        </div>
      </div>
    </div>
    <Footer/>
  </main>
}
