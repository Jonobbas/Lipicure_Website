"use client";

import { useState } from "react";
import DeepOceanHero from "@/components/deep-ocean-hero";

const oceanBubbles = [
  [5, 3, 18, -2], [11, 5, 24, -17], [18, 2, 14, -8], [24, 4, 22, -25],
  [31, 2, 16, -12], [38, 5, 28, -4], [46, 3, 19, -21], [53, 4, 25, -10],
  [61, 2, 17, -28], [68, 5, 27, -15], [74, 3, 20, -6], [81, 4, 23, -24],
  [87, 2, 15, -13], [93, 5, 26, -31], [15, 2, 13, -34], [57, 2, 15, -37],
  [8, 2, 17, -40], [21, 3, 23, -45], [35, 2, 15, -42], [49, 4, 26, -48],
  [72, 2, 18, -41], [90, 3, 22, -46],
];

const bioProducts = [
  ["01", "Omega-3 lipids", "EPA and DHA pathways for nutraceutical and pharmaceutical applications."],
  ["02", "Marine proteins", "Hydrolysates and high-purity concentrates from pelagic biomass."],
  ["03", "Marine collagen", "Type I and II collagen for health, biomaterials and cosmetics."],
  ["04", "Bioactive peptides", "Functional fractions with potential therapeutic value."],
  ["05", "Chitin & chitosan", "Marine polysaccharides for purification, pharma and agriculture."],
  ["06", "Marine minerals", "Calcium, phosphorus and trace bioelements recovered by design."],
  ["07", "Marine pigments", "Astaxanthin, carotenoids and specialty colourants."],
  ["08", "Specialty actives", "Enzymes, antimicrobials and future marine-derived compounds."],
];

const pearlStages = [
  { id: "01", title: "Opportunity intelligence", detail: "Market needs, patent landscapes and regulatory pathways define what is worth building.", output: "Technology Development Specification" },
  { id: "02", title: "Digital process model", detail: "Mass balance, quality kinetics and process constraints become a testable simulation architecture.", output: "Executable process hypothesis" },
  { id: "03", title: "Design-space exploration", detail: "DOE and simulation narrow thousands of combinations into experimentally meaningful windows.", output: "Candidate operating envelope" },
  { id: "04", title: "Experimental validation", detail: "Laboratory evidence calibrates the model and separates predictions from validated performance.", output: "Evidence-backed design space" },
  { id: "05", title: "Technology translation", detail: "Scale-up logic, IP, economics and partner readiness converge into a licensable package.", output: "Technology package" },
];

export default function Home() {
  const [activeStage, setActiveStage] = useState(0);
  const stage = pearlStages[activeStage];

  return (
    <main>
      <div className="ocean-bubble-current" aria-hidden="true">
        {oceanBubbles.map(([left, size, duration, delay], i) => (
          <i key={i} style={{ "--bubble-left": `${left}%`, "--bubble-size": `${size}px`, "--bubble-duration": `${duration}s`, "--bubble-delay": `${delay}s` } as React.CSSProperties} />
        ))}
      </div>
      <DeepOceanHero />

      <section className="surface-section opportunity" id="opportunity">
        <div className="shell">
          <div className="section-head reveal">
            <div><p className="eyebrow">The opportunity · Deck 02</p><h2>Abundance is only the beginning.</h2></div>
            <p>India has marine biomass and scientific talent. LipiCure is building the translation system that moves both toward validated, high-value biotechnology.</p>
          </div>
          <div className="value-current reveal" aria-label="Marine bioeconomy value chain">
            {[["Ocean", "Natural capital"], ["Biomass", "Pelagic feedstock"], ["Bioactives", "Molecules & fractions"], ["Products", "Health & industry"], ["Circularity", "Value from every fraction"]].map(([title, sub], i) => (
              <div className="current-node" key={title}><span>{String(i + 1).padStart(2, "0")}</span><strong>{title}</strong><small>{sub}</small></div>
            ))}
            <div className="current-line"><i /></div>
          </div>
          <div className="translation-proof reveal">
            <article><span>ORCHESTRATE</span><h3>Use what India has already built.</h3><p>Connect public research infrastructure, specialist laboratories, scientists and industry capability around a defined translation problem.</p></article>
            <article><span>INTEGRATE</span><h3>Build the missing pathway.</h3><p>Join market need, process modelling, experimental evidence, IP and scale-up logic into one governed development system.</p></article>
            <article><span>DEMOCRATIZE</span><h3>Let contribution create opportunity.</h3><p>Give serious contributors visible roles, fair recognition and pathways into authorship, technology development and venture building.</p></article>
          </div>
        </div>
      </section>

      <section className="surface-section lead-project" id="lead-project">
        <div className="shell lead-project-grid">
          <div className="lead-project-copy reveal"><p className="eyebrow">Live contribution opportunity</p><h2>Help build the Omega-3 demonstration project.</h2><p>Our lead project explores a low-temperature marine-bioprocess pathway for protecting lipid quality, improving purification and translating South Indian pelagic biomass into an evidence-backed technology package.</p><div className="project-tags"><span>Process modelling</span><span>Lipid science</span><span>Analytics</span><span>Scale-up</span><span>Regulatory</span></div><a className="button-primary" href="/build-together">See open contribution paths <span>↗</span></a></div>
          <div className="project-readout reveal"><div><small>PROJECT STATE</small><strong>ACTIVE DEVELOPMENT</strong></div><div><small>CURRENT LAYER</small><strong>MODEL → EVIDENCE</strong></div><div><small>CONTRIBUTORS NEEDED</small><strong>SCIENCE · INDUSTRY · TRANSLATION</strong></div><p>Predictions remain separate from validated evidence. Experimental work, authorship, IP and venture participation follow clearly defined contribution pathways.</p></div>
        </div>
      </section>

      <section className="surface-section processing">
        <div className="shell">
          <div className="section-head reveal"><div><p className="eyebrow">Why green processing · Deck 03</p><h2>Protect the molecule.<br/>Upgrade the value.</h2></div><p>A process architecture designed around heat-sensitive marine bioactives, oxidation control and complete biomass utilisation.</p></div>
          <div className="comparison reveal">
            <article className="process-card conventional"><p className="card-tag">Conventional route</p><h3>Value is lost in processing.</h3>{["High-temperature exposure", "Oxidation and quality loss", "Chemical-intensive separation", "Low-value residual fractions", "Higher environmental burden"].map(x => <div className="check-row" key={x}><b>×</b>{x}</div>)}</article>
            <div className="process-core" aria-hidden="true"><span>LOW<br/>TEMP</span><i/><em>Digital process intelligence</em></div>
            <article className="process-card lipicure"><p className="card-tag">LipiCure route</p><h3>Integrity is engineered in.</h3>{["Low-temperature preservation", "Oxidation-aware decisions", "Reduced harmful residues", "Higher value per kilogram", "Circular fraction recovery"].map(x => <div className="check-row" key={x}><b>✓</b>{x}</div>)}</article>
          </div>
        </div>
      </section>

      <section className="surface-section biorefinery" id="platform">
        <div className="shell">
          <div className="section-head reveal"><div><p className="eyebrow">Marine biorefinery · Deck 04</p><h2>One biomass.<br/>Multiple futures.</h2></div><p>Hover or tap a fraction to bring it forward. Every stream is treated as a potential product—not an unavoidable waste.</p></div>
          <div className="product-orbit reveal">
            <div className="orbit-core"><span>LipiCure</span><strong>Whole-biomass<br/>value system</strong><i/></div>
            <div className="product-grid">{bioProducts.map(([n, title, text]) => <article className="bio-card" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
          <p className="manifesto reveal">Every fraction has value. Nothing should become waste.</p>
        </div>
      </section>

      <section className="surface-section intelligence" id="pearl-x">
        <div className="shell pearl-layout">
          <div className="pearl-intro reveal"><p className="eyebrow">PEARL-X · Deck 05</p><h2>The digital nervous system for marine bioprocess development.</h2><p>PEARL-X connects market intelligence, simulation, experimental design and technology translation—without presenting predictions as proven evidence.</p><a className="text-link" href="#collaborate">Explore the platform <span>↗</span></a></div>
          <div className="pearl-console reveal">
            <div className="console-bar"><span/><span/><span/><b>PEARL-X / DEVELOPMENT SEQUENCE</b><em>LIVE MODEL</em></div>
            <div className="console-body">
              <div className="stage-list">{pearlStages.map((item, i) => <button className={i === activeStage ? "active" : ""} onClick={() => setActiveStage(i)} key={item.id}><span>{item.id}</span>{item.title}</button>)}</div>
              <div className="stage-detail" key={stage.id}><p>STAGE {stage.id}</p><h3>{stage.title}</h3><div className="signal"><i/><i/><i/><i/><i/><i/></div><p>{stage.detail}</p><small>OUTPUT</small><strong>{stage.output}</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-section founder" id="founders">
        <div className="shell founder-grid">
          <div className="founder-copy reveal"><p className="eyebrow">The founding journey · Deck 06</p><h2>An idea gaining energy, people and possibility.</h2><p>LipiCure began where industrial systems thinking met the blue bioeconomy. It did not remain a single-person idea. Every conversation with an industry expert sharpened the problem; every academic scientist added scientific depth; every mentor and builder expanded what the venture could become.</p><p>We see founders as the people who genuinely contribute to the idea, strengthen it and help it grow. As more minds join, LipiCure becomes larger than the thought that first started it.</p><a className="button-secondary" href="/founders-journey">Read the founders’ journey <span>→</span></a></div>
          <div className="journey-depth reveal">{["Industrial experience", "Marine opportunity", "Academic science", "Industry insight", "Collective building", "A growing LipiCure"].map((x, i) => <div key={x}><span>{String(i + 1).padStart(2, "0")}</span><strong>{x}</strong><i /></div>)}</div>
        </div>
      </section>

      <section className="surface-section collaboration" id="collaborate">
        <div className="shell">
          <div className="section-head reveal"><div><p className="eyebrow">Build together · Deck 07</p><h2>Find the door where<br/>you can contribute.</h2></div><p>LipiCure is an orchestrator and integrator: a translation platform connecting existing public R&amp;D infrastructure, scientific depth, industrial problems and venture execution.</p></div>
          <div className="role-grid reveal">
            <Role n="01" title="Academic scientists" text="Shape a method, review a model or lead an experiment." returnText="Authorship, visible scientific credit and a translation pathway." />
            <Role n="02" title="PhD researchers" text="Own a defined evidence question within the Omega-3 project." returnText="Publication, portfolio evidence and venture participation pathways." />
            <Role n="03" title="Industry specialists" text="Review equipment, quality, scale-up, supply-chain or regulatory assumptions." returnText="Recognition, technology access and a pathway into the building team." />
            <Role n="04" title="Mentors & builders" text="Strengthen governance, grants, IP, partnerships and execution systems." returnText="A clearly scoped role with contribution-linked participation." />
          </div>
          <div className="collaboration-cta reveal"><p>Every engagement begins with a defined problem, contribution, output, recognition route and confidentiality boundary. The full governance framework is being formalized before project commitments are made.</p><a className="button-secondary" href="/build-together">Explore the collaboration pathway <span>→</span></a></div>
        </div>
      </section>

      <section className="surface-section knowledge" id="knowledge">
        <div className="shell">
          <div className="section-head reveal"><div><p className="eyebrow">Knowledge hub · Deck 08</p><h2>A living window into what we learn and build.</h2></div><p>Regular research, market and founder updates keep the platform active, transparent and discoverable.</p></div>
          <div className="knowledge-grid reveal"><Knowledge type="PUBLIC RESEARCH TOOL" title="AI-guided biotechnology research" text="Explore India’s biotechnology laboratory facilities through a transparent public-data index." href="/ai-biotech-research"/><Knowledge type="FOUNDERS’ JOURNEY" title="The idea is gaining energy" text="How scientists, industry experts, mentors and builders are expanding LipiCure together." href="/founders-journey"/><Knowledge type="MILESTONES" title="Venture updates" text="A transparent record of collaborations, research, grants, events and company building."/></div>
        </div>
      </section>

      <footer className="final-dive" id="contact">
        <div className="shell final-inner reveal"><p className="eyebrow">The next chapter</p><h2>Build marine biotechnology<br/>translation—together.</h2><p>Omega-3 is the first live demonstration project. The contributor platform is the larger journey.</p><div className="final-actions"><a className="button-primary" href="/build-together">Build together <span>↗</span></a><a className="button-secondary" href="#pearl-x">Explore PEARL-X <span>→</span></a></div></div>
        <div className="footer-line"><div className="shell"><strong>Lipi<span>Cure</span></strong><p>Marine Biotechnology Translation Platform · India</p><small><a href="https://www.linkedin.com/company/lipicure-deeptech/" target="_blank" rel="noreferrer">LinkedIn ↗</a> · © 2026</small></div></div>
      </footer>
    </main>
  );
}

function Role({ n, title, text, returnText }: { n: string; title: string; text: string; returnText: string }) { return <article className="role-card"><span>{n}</span><div className="role-symbol">✦</div><h3>{title}</h3><p><b>CONTRIBUTE</b>{text}</p><p><b>PATHWAY</b>{returnText}</p><a href="/build-together" aria-label={`Build with LipiCure as ${title}`}>↗</a></article>; }
function Knowledge({ type, title, text, href }: { type: string; title: string; text: string; href?: string }) { const card = <article className="knowledge-card"><div><span>{type}</span><i>↗</i></div><h3>{title}</h3><p>{text}</p><b>OPEN SECTION <em>→</em></b></article>; return href ? <a href={href}>{card}</a> : card; }
