import type { Metadata } from 'next';
import { Camera, GraduationCap, ShieldCheck, UsersRound } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Founders & Team | LipiCure',
  description: 'Meet the founding team building LipiCure’s marine biotechnology and bioprocess intelligence platform.',
};

const members = [
  {
    initials: 'SS',
    name: 'Sowjanniya Sridharan',
    role: 'Founder & Director',
    focus: 'Corporate governance, venture building and strategic oversight',
    qualification: 'M.E. in Pervasive Computing; B.E. in Electronics & Communication Engineering',
    verified: true,
  },
  {
    initials: 'KK',
    name: 'Dr. Keerthana K',
    role: 'Co-Founder & Director',
    focus: 'Quality, scale-up and technology transfer',
    qualification: 'Detailed academic profile being updated',
    verified: false,
  },
  {
    initials: 'PL',
    name: 'Dr. N.C.J. Packkia Lekshmi',
    role: 'Co-Founder',
    focus: 'Academic research and strategic collaborations',
    qualification: 'Detailed academic profile being updated',
    verified: false,
  },
  {
    initials: 'FB',
    name: 'Fatima Bhadra',
    role: 'Co-Founder',
    focus: 'Translational R&D and technology development',
    qualification: 'Detailed academic profile being updated',
    verified: false,
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-ocean-950">
      <Header/>

      <section className="relative overflow-hidden bg-gradient-to-br from-ocean-950 via-ocean-900 to-ocean-800 pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="absolute -right-40 top-20 h-[520px] w-[520px] rounded-full border border-cyan-300/10 bg-cyan-300/5 blur-3xl" aria-hidden="true"/>
        <div className="section-shell relative">
          <div className="section-kicker">The people building LipiCure</div>
          <h1 className="section-title max-w-5xl">Founders &amp; Team</h1>
          <p className="section-copy max-w-3xl">
            A multidisciplinary founding team connecting governance, academic research,
            translational science, quality and scale-up to advance responsible marine biotechnology.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[.14em] text-slate-300">
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2">2 Directors</span>
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2">4 Founding Members</span>
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2">One Shared Mission</span>
          </div>
        </div>
      </section>

      <section className="border-t border-cyan-300/10 bg-[#03121b] py-20 md:py-28">
        <div className="section-shell">
          <div className="mb-12 grid gap-6 md:grid-cols-[1fr_.7fr] md:items-end">
            <div>
              <div className="section-kicker">Founding leadership</div>
              <h2 className="text-4xl font-medium tracking-tight text-white md:text-6xl">Complementary strengths.<br/><span className="text-cyanx">Shared responsibility.</span></h2>
            </div>
            <p className="text-sm leading-7 text-slate-400">
              Photographs and remaining academic details will be added after the individual profiles are formally confirmed.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {members.map((member, index) => (
              <article key={member.name} className="group overflow-hidden rounded-2xl border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[.06] to-transparent transition hover:-translate-y-1 hover:border-cyan-300/35">
                <div className="grid min-h-full sm:grid-cols-[190px_1fr]">
                  <div className="relative grid min-h-[230px] place-items-center border-b border-cyan-300/10 bg-[radial-gradient(circle_at_50%_35%,rgba(69,232,242,.18),transparent_50%)] sm:min-h-[330px] sm:border-b-0 sm:border-r">
                    <div className="grid h-28 w-28 place-items-center rounded-full border border-cyan-300/30 bg-ocean-950/70 text-3xl font-light tracking-[.14em] text-cyanx shadow-[0_0_50px_rgba(69,232,242,.10)]">
                      {member.initials}
                    </div>
                    <div className="absolute bottom-5 flex items-center gap-2 text-[10px] uppercase tracking-[.18em] text-slate-500">
                      <Camera size={13}/> Photograph reserved
                    </div>
                  </div>

                  <div className="flex flex-col p-7 md:p-8">
                    <div className="mb-8 flex items-start justify-between gap-4">
                      <span className="text-xs tracking-[.18em] text-slate-500">0{index + 1}</span>
                      {member.role.includes('Director') && (
                        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 px-3 py-1 text-[9px] uppercase tracking-[.14em] text-cyanx">
                          <ShieldCheck size={12}/> Director
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl font-semibold leading-tight text-white">{member.name}</h2>
                    <p className="mt-2 text-sm font-medium text-cyanx">{member.role}</p>

                    <div className="mt-7 border-t border-white/10 pt-5">
                      <div className="flex gap-3">
                        <UsersRound className="mt-1 shrink-0 text-cyanx" size={17}/>
                        <div>
                          <div className="text-[9px] uppercase tracking-[.16em] text-slate-500">Primary focus</div>
                          <p className="mt-2 text-sm leading-6 text-slate-300">{member.focus}</p>
                        </div>
                      </div>
                      <div className="mt-5 flex gap-3">
                        <GraduationCap className="mt-1 shrink-0 text-cyanx" size={17}/>
                        <div>
                          <div className="text-[9px] uppercase tracking-[.16em] text-slate-500">Qualification</div>
                          <p className={`mt-2 text-sm leading-6 ${member.verified ? 'text-slate-300' : 'italic text-slate-500'}`}>{member.qualification}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-cyan-300/10 bg-[#020d15] py-20">
        <div className="section-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="section-kicker">Built through collaboration</div>
            <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-white md:text-5xl">Science, engineering and execution—working as one system.</h2>
          </div>
          <a href="mailto:founder@lipicure.com" className="inline-flex rounded-xl border border-cyan-300/35 bg-cyan-300/10 px-6 py-4 text-sm font-semibold text-cyanx transition hover:border-cyan-200/60 hover:bg-cyan-300/15 hover:text-white">
            Connect with the Founder&apos;s Office
          </a>
        </div>
      </section>

      <Footer/>
    </main>
  );
}
