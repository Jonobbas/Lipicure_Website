"use client";

import { useMemo, useState } from "react";

const sources = [
  { name: "I-STEM", count: "31,197", label: "equipment records shown by the official portal", url: "https://www.istem.gov.in/i-progress/equipment", owner: "Office of the Principal Scientific Adviser" },
  { name: "BIRAC BioNEST", count: "73", label: "bio-incubators reported by BIRAC", url: "https://www.birac.nic.in/bionest.php", owner: "BIRAC · Department of Biotechnology" },
  { name: "DBT Biotech Parks", count: "12", label: "parks supported across Indian states", url: "https://www.dbtindia.gov.in/scientific-directorates/bio-wealth-biosafety/biotech-park", owner: "Department of Biotechnology" },
  { name: "DBT-SAHAJ", count: "19", label: "new national facilities reported over five years", url: "https://www.dbtindia.gov.in/sahaj-0", owner: "Department of Biotechnology" },
];

const facilities = [
  { name: "TICEL Biotech Park", city: "Chennai", state: "Tamil Nadu", type: "Biotech park", focus: "Life sciences, shared laboratories and commercial translation", source: "DBT" },
  { name: "Golden Jubilee Biotech Park for Women", city: "Chennai", state: "Tamil Nadu", type: "Biotech park", focus: "Women-led biotechnology enterprises and incubation", source: "DBT" },
  { name: "Biotechnology Incubation Centre", city: "Cochin", state: "Kerala", type: "Bio-incubator", focus: "Biotechnology incubation and enterprise support", source: "DBT" },
  { name: "Rajiv Gandhi Centre for Biotechnology", city: "Thiruvananthapuram", state: "Kerala", type: "Research institute", focus: "Molecular biology, disease biology and biotechnology platforms", source: "DBT / SAHAJ" },
  { name: "C-CAMP", city: "Bengaluru", state: "Karnataka", type: "Bio-incubator", focus: "Deep-science incubation, technology platforms and scale-up", source: "BIRAC BioNEST" },
  { name: "Bangalore Biotechnology Park", city: "Bengaluru", state: "Karnataka", type: "Biotech park", focus: "Biotechnology enterprise and R&D infrastructure", source: "DBT" },
  { name: "Biotechnology Incubation Centre", city: "Hyderabad", state: "Telangana", type: "Bio-incubator", focus: "Biotechnology incubation and shared infrastructure", source: "DBT" },
  { name: "B-Hub · Genome Valley", city: "Hyderabad", state: "Telangana", type: "Scale-up facility", focus: "Biopharma R&D lab suites, scale-up and training", source: "DBT" },
  { name: "National Institute of Animal Biotechnology", city: "Hyderabad", state: "Telangana", type: "Research institute", focus: "Animal biotechnology, genomics and disease research", source: "DBT / SAHAJ" },
  { name: "Centre for DNA Fingerprinting and Diagnostics", city: "Hyderabad", state: "Telangana", type: "Research institute", focus: "Genomics, diagnostics and DNA analysis", source: "DBT / SAHAJ" },
  { name: "Biotech Park Lucknow", city: "Lucknow", state: "Uttar Pradesh", type: "Biotech park", focus: "Analytical services, extraction, incubation and training", source: "DBT" },
  { name: "BHU BioNEST", city: "Varanasi", state: "Uttar Pradesh", type: "Bio-incubator", focus: "Life sciences, healthcare, agritech and food technology", source: "BIRAC BioNEST" },
  { name: "Regional Centre for Biotechnology", city: "Faridabad", state: "Haryana", type: "Research institute", focus: "Biotechnology research, training and shared scientific platforms", source: "DBT / SAHAJ" },
  { name: "National Institute of Immunology", city: "New Delhi", state: "Delhi", type: "Research institute", focus: "Immunology, infectious disease and molecular design", source: "DBT / SAHAJ" },
  { name: "National Institute of Plant Genome Research", city: "New Delhi", state: "Delhi", type: "Research institute", focus: "Plant genomics and crop-science platforms", source: "DBT / SAHAJ" },
  { name: "National Agri-Food Biotechnology Institute", city: "Mohali", state: "Punjab", type: "Research institute", focus: "Agri-food biotechnology, nutrition and translational research", source: "DBT / SAHAJ" },
  { name: "National Institute of Biomedical Genomics", city: "Kalyani", state: "West Bengal", type: "Research institute", focus: "Biomedical genomics and national genomics infrastructure", source: "DBT / SAHAJ" },
  { name: "Kolkata Biotech Park", city: "Kolkata", state: "West Bengal", type: "Biotech park", focus: "Startup laboratories, IP, regulatory and commercialisation support", source: "DBT" },
  { name: "Technology Incubation Centre · Guwahati Biotech Park", city: "Guwahati", state: "Assam", type: "Bio-incubator", focus: "Northeast biotechnology entrepreneurship and equipment access", source: "DBT" },
  { name: "Institute of Life Sciences", city: "Bhubaneswar", state: "Odisha", type: "Research institute", focus: "Life sciences, flow cytometry and imaging", source: "DBT / SAHAJ" },
];

export default function AiBiotechResearch() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All facilities");
  const types = ["All facilities", ...Array.from(new Set(facilities.map((item) => item.type)))];
  const matches = useMemo(() => facilities.filter((item) => {
    const text = `${item.name} ${item.city} ${item.state} ${item.type} ${item.focus}`.toLowerCase();
    return (type === "All facilities" || item.type === type) && text.includes(query.toLowerCase());
  }), [query, type]);

  return <main className="research-page">
    <header className="research-nav"><div className="shell nav-inner"><a href="/" className="brand">Lipi<span>Cure</span><small>BLUE BIOECONOMY</small></a><a className="founders-back" href="/">← Return to the laboratory</a></div></header>
    <section className="research-hero"><div className="shell research-hero-inner"><p className="eyebrow">A LipiCure public research service</p><h1>AI-guided biotechnology research,<br/><span>grounded in accessible infrastructure.</span></h1><p>Find the laboratories, shared equipment networks, bio-incubators and scale-up facilities that can help an Indian biotechnology idea move from question to evidence.</p><div className="research-actions"><a className="button-primary" href="#databank">Explore the databank <span>↓</span></a><a className="button-secondary" href="#method">How AI guides the search <span>→</span></a></div></div></section>

    <section className="ai-method" id="method"><div className="shell"><div className="section-head"><div><p className="eyebrow">The research pathway</p><h2>Start with the question.<br/>Then find the evidence route.</h2></div><p>AI can help structure a research question, map required methods, identify suitable equipment and assemble a transparent facility shortlist. Scientists remain responsible for experimental judgment, safety, ethics and validation.</p></div><div className="method-flow">{[["01","Define","Research question, hypothesis and evidence gap"],["02","Map","Methods, assays, instruments and expertise"],["03","Discover","Public facilities and potential collaborators"],["04","Validate","Scientist review, experiment and reproducibility"]].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

    <section className="public-sources"><div className="shell"><p className="eyebrow">Official discovery layers · verified 06 August 2026</p><div className="source-grid">{sources.map((source)=><a href={source.url} target="_blank" rel="noreferrer" key={source.name}><span>{source.name}</span><strong>{source.count}</strong><p>{source.label}</p><small>{source.owner} ↗</small></a>)}</div></div></section>

    <section className="facility-databank" id="databank"><div className="shell"><div className="databank-head"><div><p className="eyebrow">India Biotechnology Lab Facilities Databank · public beta</p><h2>One search layer.<br/>Many scientific doors.</h2></div><p>This first curated index connects officially listed facilities into a single usable view. It will grow toward national coverage while every record retains its public source and requires direct confirmation with the host institution.</p></div><div className="facility-controls"><label><span>Search by facility, city, state or capability</span><input value={query} onChange={(event)=>setQuery(event.target.value)} placeholder="Try: Chennai, genomics, scale-up…" /></label><label><span>Facility type</span><select value={type} onChange={(event)=>setType(event.target.value)}>{types.map((item)=><option key={item}>{item}</option>)}</select></label></div><p className="results-count">{matches.length} PUBLICLY LISTED FACILITIES IN THIS CURATED RELEASE</p><div className="facility-grid">{matches.map((item)=><article key={item.name}><div><span>{item.type}</span><small>{item.source}</small></div><h3>{item.name}</h3><p>{item.focus}</p><b>{item.city} · {item.state}</b></article>)}</div>{matches.length===0&&<div className="empty-result">No matching facility in this first release. Try a broader capability or state.</div>}<div className="databank-note"><strong>Transparency note</strong><p>This is a discovery aid built from public information—not a claim of availability, accreditation or endorsement. Equipment status, access, price and eligibility must be verified directly on I-STEM, DBT-SAHAJ, BIRAC or the host institution’s official website.</p></div></div></section>
  </main>;
}
