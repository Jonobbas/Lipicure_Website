"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

const stations = [
  { title: "Autonomous assay station", text: "Robotic handling and sensor-led observation support reproducible marine-bioprocess experiments." },
  { title: "Digital observation layer", text: "Live process signals are translated into models, decision support and an auditable evidence trail." },
  { title: "Biomass integrity check", text: "The first principle is preservation: temperature, oxygen exposure and quality risk are monitored before value is lost." },
];

const pelagicSchool = [
  { y: "24%", w: "118px", duration: "58s", delay: "-31s", rise: "-16px", tilt: "-1.2deg", start: "90px" },
  { y: "30%", w: "92px", duration: "67s", delay: "-9s", rise: "13px", tilt: ".8deg", start: "240px" },
  { y: "37%", w: "138px", duration: "74s", delay: "-49s", rise: "-22px", tilt: "-1deg", start: "410px" },
  { y: "44%", w: "104px", duration: "62s", delay: "-22s", rise: "18px", tilt: "1.1deg", start: "560px" },
  { y: "50%", w: "126px", duration: "80s", delay: "-65s", rise: "-12px", tilt: "-.7deg", start: "175px" },
  { y: "57%", w: "86px", duration: "69s", delay: "-41s", rise: "16px", tilt: ".9deg", start: "680px" },
  { y: "64%", w: "112px", duration: "76s", delay: "-17s", rise: "-19px", tilt: "-1.1deg", start: "330px" },
  { y: "70%", w: "96px", duration: "64s", delay: "-53s", rise: "11px", tilt: ".7deg", start: "520px" },
  { y: "34%", w: "78px", duration: "71s", delay: "-36s", rise: "20px", tilt: "1deg", start: "760px" },
  { y: "60%", w: "72px", duration: "83s", delay: "-72s", rise: "-14px", tilt: "-.8deg", start: "40px" },
];

export default function DeepOceanHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [station, setStation] = useState<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let width = 0, height = 0, raf = 0;
    const particles = Array.from({ length: window.innerWidth < 700 ? 35 : 90 }, () => ({ x: Math.random(), y: Math.random(), r: .4 + Math.random() * 1.4, v: .00002 + Math.random() * .00006 }));
    const size = () => { const dpr = Math.min(window.devicePixelRatio, 1.5); width = hero.clientWidth; height = hero.clientHeight; canvas.width = width * dpr; canvas.height = height * dpr; canvas.style.width = `${width}px`; canvas.style.height = `${height}px`; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    const frame = () => { ctx.clearRect(0,0,width,height);particles.forEach(p=>{p.y-=p.v*16;if(p.y<0)p.y=1;ctx.globalAlpha=.2;ctx.fillStyle="#b8ffff";ctx.beginPath();ctx.arc(p.x*width,p.y*height,p.r,0,Math.PI*2);ctx.fill()});raf=requestAnimationFrame(frame); };
    const move = (e:PointerEvent) => { const r=hero.getBoundingClientRect();hero.style.setProperty("--mx",String((e.clientX-r.left)/r.width-.5));hero.style.setProperty("--my",String((e.clientY-r.top)/r.height-.5)); };
    size();window.addEventListener("resize",size);hero.addEventListener("pointermove",move);raf=requestAnimationFrame(frame);
    return()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",size);hero.removeEventListener("pointermove",move)};
  }, []);

  return <section className="ocean-hero" ref={heroRef}>
    <div className="hero-image"/><canvas className="hero-canvas" ref={canvasRef}/><div className="caustics"/><div className="ocean-lens"/>
    <div className="pelagic-school" aria-hidden="true">{pelagicSchool.map((fish,i)=><img key={i} src="/images/silver-pelagic-fish-blue-v2.webp" alt="" style={{"--fish-y":fish.y,"--fish-w":fish.w,"--fish-duration":fish.duration,"--fish-delay":fish.delay,"--fish-rise":fish.rise,"--fish-tilt":fish.tilt,"--fish-start":fish.start} as CSSProperties}/>)}</div>
    <header className="hero-nav"><div className="shell nav-inner"><a href="#top" className="brand">Lipi<span>Cure</span><small>MARINE BIOTECH TRANSLATION</small></a><nav className="nav-links" aria-label="Main navigation"><a href="#lead-project">Live project</a><a href="#pearl-x">PEARL-X</a><a href="/ai-biotech-research">AI Research</a><a href="https://www.linkedin.com/company/lipicure-deeptech/" target="_blank" rel="noreferrer">LinkedIn</a><a className="nav-cta" href="/build-together">Build together ↗</a></nav></div></header>
    <div className="depth-readout" aria-label="Hero scene depth from 37 to 40 metres below sea level"><span>− 37 M</span><i/><b>DESCENDING TO LIPICURE LAB / 038.5 M</b><i/><span>− 40 M</span></div>
    <div className="shell hero-copy" id="top"><div className="hero-content"><div className="hero-label"><i/>AUTONOMOUS MARINE BIOTECH LAB · INDIA</div><h1>Marine Biotech,<span>Translated.</span></h1><p>Scientists, engineers and industry specialists, building India&apos;s marine biotech translation platform — turning ocean science into licensable technologies.</p></div></div>
    {stations.map((item,i)=><button key={item.title} className={`hotspot hotspot-${["one","two","three"][i]}`} onClick={()=>setStation(i)} aria-label={`Inspect ${item.title}`}><span className="hotspot-label">{item.title.toUpperCase()}</span></button>)}
    <div className="hero-deck"><div className="shell deck-inner"><div className="lab-status"><div className="status-cell"><span>LEAD PROJECT</span><strong><i/>OMEGA-3 TRANSLATION</strong></div><div className="status-cell"><span>BUILD MODE</span><strong>OPEN · GOVERNED</strong></div><div className="status-cell"><span>MISSION</span><strong>SCIENCE → TECHNOLOGY</strong></div></div><a href="#opportunity" className="scroll-cue">SCROLL TO DESCEND<i/></a></div></div>
    {station!==null&&<div className="lab-modal" role="dialog" aria-modal="true" aria-label={stations[station].title} onClick={()=>setStation(null)}><article className="modal-card" onClick={e=>e.stopPropagation()}><button onClick={()=>setStation(null)} aria-label="Close">×</button><span>LAB NODE {String(station+1).padStart(2,"0")}</span><h2>{stations[station].title}</h2><p>{stations[station].text}</p></article></div>}
  </section>;
}
