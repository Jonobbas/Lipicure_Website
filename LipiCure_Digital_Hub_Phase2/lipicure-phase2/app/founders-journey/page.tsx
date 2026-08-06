const chapters = [
  { n: "01", title: "The first current", text: "The journey began with nearly two decades of experience in heavy engineering, manufacturing quality and complex project environments. That experience created a conviction: scientific breakthroughs create lasting value only when they are translated into disciplined, repeatable systems." },
  { n: "02", title: "The ocean revealed the opportunity", text: "Kanniyakumari and South India’s pelagic marine economy opened a larger question. Could abundant biological resources, advanced science and industrial execution be connected to build higher-value marine biotechnology from India?" },
  { n: "03", title: "Science made the idea deeper", text: "Academic scientists, professors and researchers began questioning assumptions, identifying evidence needs and opening new technical possibilities. Their contribution transformed an early concept into a research-led biotechnology venture." },
  { n: "04", title: "Industry made the idea stronger", text: "Industry professionals brought practical problems, manufacturing insight, scale-up realities, market needs and regulatory awareness. Each discussion reduced blind spots and moved the idea closer to something useful, buildable and commercially relevant." },
  { n: "05", title: "The circle keeps expanding", text: "Mentors, incubators, domain specialists and committed builders continue to add new capability. LipiCure grows through this accumulating intelligence—not by keeping the idea inside one person’s mind." },
  { n: "06", title: "Founding is a contribution", text: "At LipiCure, founders are the people who genuinely contribute to the idea, enlarge its possibilities and take responsibility for making it real. The founding story is therefore still being written, one meaningful contribution at a time." },
];

export default function FoundersJourney() {
  return (
    <main className="founders-page">
      <div className="founders-bubbles" aria-hidden="true">{Array.from({ length: 18 }, (_, i) => <i key={i} />)}</div>
      <header className="founders-nav"><div className="shell nav-inner"><a href="/" className="brand">Lipi<span>Cure</span><small>BLUE BIOECONOMY</small></a><a className="founders-back" href="/">← Return to the laboratory</a></div></header>

      <section className="founders-hero">
        <div className="founders-glow" />
        <div className="shell founders-hero-inner">
          <p className="eyebrow">The founders’ journey</p>
          <h1>An idea becomes bigger<br/><span>when more minds give it energy.</span></h1>
          <p>LipiCure began with one connecting thought. It is growing through the scientists, industry experts, mentors and builders who challenge it, strengthen it and help carry it forward.</p>
          <a href="#story" className="scroll-story">Read the evolving story <i /></a>
        </div>
      </section>

      <section className="founders-story" id="story">
        <div className="shell">
          <div className="founders-statement reveal"><p className="eyebrow">Our belief</p><blockquote>“Founders are all those who contribute to the idea and make its possibilities grow.”</blockquote><p>The legal structure of a company may define formal roles. The spirit of founding is wider: it belongs to the people who contribute knowledge, work, courage and responsibility at the moment the venture is being shaped.</p></div>
          <div className="collective-force reveal" aria-label="Contributors feeding knowledge and energy into the growing LipiCure idea">
            <div className="contributor-ring">
              <span className="contributor contributor-one">Academic scientists</span>
              <span className="contributor contributor-two">Industry experts</span>
              <span className="contributor contributor-three">Mentors</span>
              <span className="contributor contributor-four">Builders</span>
              <div className="idea-orb"><i /><small>SHARED BELIEF</small><strong>The idea<br/>grows</strong><em>COLLABORATION → POSSIBILITY</em></div>
            </div>
            <div className="collective-copy"><p className="eyebrow">Collective energy</p><h2>Many people.<br/>One growing possibility.</h2><p>Those who believe that collaboration can make great things possible are joining the journey. Each person feeds the idea with a different form of energy—scientific evidence, industrial experience, strategic guidance or committed execution. With every genuine contribution, the circle widens and LipiCure grows bigger than before.</p></div>
          </div>
          <div className="founders-chapters">{chapters.map((chapter) => <article className="founders-chapter reveal" key={chapter.n}><span>{chapter.n}</span><div><h2>{chapter.title}</h2><p>{chapter.text}</p></div></article>)}</div>
        </div>
      </section>

      <section className="founders-invitation">
        <div className="shell founders-invitation-inner reveal"><p className="eyebrow">The story remains open</p><h2>The next founder may be the person who adds the missing piece.</h2><p>This is an invitation to people who believe in shared building—not spectatorship. Scientific depth. Industrial understanding. Regulatory insight. Venture execution. Every meaningful contribution can add new energy to the journey.</p><div className="final-actions"><a className="button-primary" href="mailto:connect@lipicure.com">Contribute to the journey <span>↗</span></a><a className="button-secondary" href="/">Explore LipiCure <span>→</span></a></div></div>
      </section>
    </main>
  );
}
