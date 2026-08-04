'use client';

export default function LivingOceanHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/lipicure-hero.png')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/45 to-slate-950/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

      <div className="relative z-10 flex min-h-screen items-center px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-cyan-300">
            Marine Biotechnology · Deep Tech · India
          </p>

          <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
            Engineering the Blue Bioeconomy
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            India&apos;s marine bioprocess intelligence platform for developing
            scalable, sustainable and high-value marine biotechnology.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/pearl-x"
              className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950"
            >
              Explore PEARL-X
            </a>

            <a
              href="/collaboration"
              className="rounded-full border border-white/30 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
