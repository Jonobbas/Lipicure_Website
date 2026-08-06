"use client";

import { useEffect, useRef, useState } from "react";

const stations = [
  { title: "Autonomous assay station", text: "Robotic handling and sensor-led observation support reproducible marine-bioprocess experiments." },
  { title: "Digital observation layer", text: "Live process signals are translated into models, decision support and an auditable evidence trail." },
  { title: "Biomass integrity check", text: "The first principle is preservation: temperature, oxygen exposure and quality risk are monitored before value is lost." },
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
    const fish = Array.from({ length: window.innerWidth < 700 ? 13 : 38 }, (_, i) => {
      const depth = Math.random();
      return { x: .48 + Math.random() * .57, y: .2 + Math.random() * .31, s: .22 + depth * .34, v: .00003 + depth * .000045, p: i * .73, a: .16 + depth * .27 };
    });
    const particles = Array.from({ length: window.innerWidth < 700 ? 35 : 90 }, () => ({ x: Math.random(), y: Math.random(), r: .4 + Math.random() * 1.4, v: .00002 + Math.random() * .00006 }));
    const size = () => { const dpr = Math.min(window.devicePixelRatio, 1.5); width = hero.clientWidth; height = hero.clientHeight; canvas.width = width * dpr; canvas.height = height * dpr; canvas.style.width = `${width}px`; canvas.style.height = `${height}px`; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    const drawFish = (x:number,y:number,s:number,t:number,alpha:number) => { ctx.save();ctx.translate(x,y+Math.sin(t)*1.4);ctx.scale(s,s);ctx.globalAlpha=alpha;const body=ctx.createLinearGradient(-30,-5,27,5);body.addColorStop(0,"#174f67");body.addColorStop(.22,"#3e8196");body.addColorStop(.48,"#b9d8dd");body.addColorStop(.64,"#6fa7b4");body.addColorStop(1,"#174a60");ctx.fillStyle=body;ctx.beginPath();ctx.moveTo(-30,0);ctx.bezierCurveTo(-21,-5.6,8,-6.3,25,-1.4);ctx.bezierCurveTo(10,5.5,-20,5.8,-30,0);ctx.fill();ctx.fillStyle="#245f75";ctx.beginPath();ctx.moveTo(24,-1);ctx.lineTo(36,-7);ctx.lineTo(31,0);ctx.lineTo(36,7);ctx.lineTo(24,2);ctx.closePath();ctx.fill();ctx.beginPath();ctx.moveTo(0,-5.2);ctx.lineTo(9,-9);ctx.lineTo(12,-5);ctx.closePath();ctx.fill();ctx.strokeStyle="rgba(211,241,243,.52)";ctx.lineWidth=.55;ctx.beginPath();ctx.moveTo(-22,.4);ctx.quadraticCurveTo(2,1.6,22,0);ctx.stroke();ctx.fillStyle="#032c3b";ctx.beginPath();ctx.arc(-21.8,-1.5,1.25,0,Math.PI*2);ctx.fill();ctx.fillStyle="rgba(235,255,255,.8)";ctx.beginPath();ctx.arc(-22.2,-1.8,.4,0,Math.PI*2);ctx.fill();ctx.restore(); };
    const frame = (time:number) => { ctx.clearRect(0,0,width,height);particles.forEach(p=>{p.y-=p.v*16;if(p.y<0)p.y=1;ctx.globalAlpha=.2;ctx.fillStyle="#b8ffff";ctx.beginPath();ctx.arc(p.x*width,p.y*height,p.r,0,Math.PI*2);ctx.fill()});fish.forEach(f=>{f.x-=f.v*16;if(f.x<.44)f.x=1.08;drawFish(f.x*width,f.y*height,f.s,time*.001+f.p,f.a)});raf=requestAnimationFrame(frame); };
    const move = (e:PointerEvent) => { const r=hero.getBoundingClientRect();hero.style.setProperty("--mx",String((e.clientX-r.left)/r.width-.5));hero.style.setProperty("--my",String((e.clientY-r.top)/r.height-.5)); };
    size();window.addEventListener("resize",size);hero.addEventListener("pointermove",move);raf=requestAnimationFrame(frame);
    return()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",size);hero.removeEventListener("pointermove",move)};
  }, []);

  return <section className="ocean-hero" ref={heroRef}>
    <div className="hero-image"/><canvas className="hero-canvas" ref={canvasRef}/><div className="caustics"/><div className="ocean-lens"/>
    <header className="hero-nav"><div className="shell nav-inner"><a href="#top" className="brand">Lipi<span>Cure</span><small>MARINE BIOTECH TRANSLATION</small></a><nav className="nav-links" aria-label="Main navigation"><a href="#lead-project">Live project</a><a href="#pearl-x">PEARL-X</a><a href="/ai-biotech-research">AI Research</a><a href="https://www.linkedin.com/company/lipicure-deeptech/" target="_blank" rel="noreferrer">LinkedIn</a><a className="nav-cta" href="/build-together">Build together ↗</a></nav></div></header>
    <div className="depth-readout"><span>+ 00 M</span><i/><b>DESCENDING TO LIPICURE LAB / 028 M</b><i/><span>− 40 M</span></div>
    <div className="shell hero-copy" id="top"><div className="hero-content"><div className="hero-label"><i/>AUTONOMOUS MARINE BIOTECH LAB · INDIA</div><h1>Building India’s<span>marine biotech translation platform—together.</span></h1><p>Scientists, engineers and industry specialists are invited to turn promising marine science into evidence-backed, licensable technologies.</p><div className="hero-actions"><a className="button-primary" href="/build-together">Build together <span>↗</span></a><a className="button-secondary" href="#lead-project">See the live project <span>→</span></a></div></div></div>
    {stations.map((item,i)=><button key={item.title} className={`hotspot hotspot-${["one","two","three"][i]}`} onClick={()=>setStation(i)} aria-label={`Inspect ${item.title}`}><span className="hotspot-label">{item.title.toUpperCase()}</span></button>)}
    <div className="hero-deck"><div className="shell deck-inner"><div className="lab-status"><div className="status-cell"><span>LEAD PROJECT</span><strong><i/>OMEGA-3 TRANSLATION</strong></div><div className="status-cell"><span>BUILD MODE</span><strong>OPEN · GOVERNED</strong></div><div className="status-cell"><span>MISSION</span><strong>SCIENCE → TECHNOLOGY</strong></div></div><a href="#opportunity" className="scroll-cue">SCROLL TO DESCEND<i/></a></div></div>
    {station!==null&&<div className="lab-modal" role="dialog" aria-modal="true" aria-label={stations[station].title} onClick={()=>setStation(null)}><article className="modal-card" onClick={e=>e.stopPropagation()}><button onClick={()=>setStation(null)} aria-label="Close">×</button><span>LAB NODE {String(station+1).padStart(2,"0")}</span><h2>{stations[station].title}</h2><p>{stations[station].text}</p></article></div>}
  </section>;
}
