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
    const fish = Array.from({ length: window.innerWidth < 700 ? 6 : 16 }, (_, i) => {
      const depth = Math.random();
      return { x: .5 + Math.random() * .58, y: .2 + Math.random() * .34, s: .38 + depth * .34, v: .000012 + depth * .000014, p: i * 1.17, a: .22 + depth * .28, arc: .006 + Math.random() * .018, arcSpeed: .00018 + Math.random() * .00016 };
    });
    const particles = Array.from({ length: window.innerWidth < 700 ? 35 : 90 }, () => ({ x: Math.random(), y: Math.random(), r: .4 + Math.random() * 1.4, v: .00002 + Math.random() * .00006 }));
    const size = () => { const dpr = Math.min(window.devicePixelRatio, 1.5); width = hero.clientWidth; height = hero.clientHeight; canvas.width = width * dpr; canvas.height = height * dpr; canvas.style.width = `${width}px`; canvas.style.height = `${height}px`; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    const drawFish = (x:number,y:number,s:number,swim:number,alpha:number,tilt:number) => {
      ctx.save();ctx.translate(x,y);ctx.rotate(tilt);ctx.scale(s,s);ctx.globalAlpha=alpha;
      const body=ctx.createLinearGradient(0,-10,0,10);body.addColorStop(0,"#276f8b");body.addColorStop(.28,"#75aebe");body.addColorStop(.52,"#e4f1ee");body.addColorStop(.76,"#9bc5cb");body.addColorStop(1,"#39768b");
      ctx.fillStyle=body;ctx.beginPath();ctx.moveTo(-36,0);ctx.bezierCurveTo(-27,-8.5,9,-10.5,29,-2.2);ctx.bezierCurveTo(13,8.4,-24,8.8,-36,0);ctx.fill();
      const wag=Math.sin(swim)*2.2;ctx.fillStyle="#397b91";ctx.beginPath();ctx.moveTo(27,-2.2);ctx.lineTo(45,-10+wag);ctx.lineTo(39,0);ctx.lineTo(45,10+wag);ctx.lineTo(27,2.2);ctx.closePath();ctx.fill();
      ctx.fillStyle="rgba(61,132,151,.9)";ctx.beginPath();ctx.moveTo(-1,-8.4);ctx.lineTo(10,-13);ctx.lineTo(15,-7.3);ctx.closePath();ctx.fill();ctx.beginPath();ctx.moveTo(4,6.8);ctx.lineTo(14,11);ctx.lineTo(17,5.5);ctx.closePath();ctx.fill();
      ctx.strokeStyle="rgba(235,255,252,.72)";ctx.lineWidth=.7;ctx.beginPath();ctx.moveTo(-29,1);ctx.quadraticCurveTo(-1,2.5,26,.2);ctx.stroke();ctx.strokeStyle="rgba(14,73,91,.52)";ctx.beginPath();ctx.arc(-26,0,6,-1.05,1.05);ctx.stroke();
      ctx.fillStyle="#062c39";ctx.beginPath();ctx.arc(-28,-2.4,1.45,0,Math.PI*2);ctx.fill();ctx.fillStyle="rgba(242,255,252,.94)";ctx.beginPath();ctx.arc(-28.4,-2.8,.48,0,Math.PI*2);ctx.fill();ctx.restore();
    };
    const frame = (time:number) => { ctx.clearRect(0,0,width,height);particles.forEach(p=>{p.y-=p.v*16;if(p.y<0)p.y=1;ctx.globalAlpha=.2;ctx.fillStyle="#b8ffff";ctx.beginPath();ctx.arc(p.x*width,p.y*height,p.r,0,Math.PI*2);ctx.fill()});fish.forEach(f=>{f.x-=f.v*16;if(f.x<.43)f.x=1.09;const arc=Math.sin(time*f.arcSpeed+f.p)*f.arc;const tilt=Math.cos(time*f.arcSpeed+f.p)*.035;drawFish(f.x*width,(f.y+arc)*height,f.s,time*.005+f.p,f.a,tilt)});raf=requestAnimationFrame(frame); };
    const move = (e:PointerEvent) => { const r=hero.getBoundingClientRect();hero.style.setProperty("--mx",String((e.clientX-r.left)/r.width-.5));hero.style.setProperty("--my",String((e.clientY-r.top)/r.height-.5)); };
    size();window.addEventListener("resize",size);hero.addEventListener("pointermove",move);raf=requestAnimationFrame(frame);
    return()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",size);hero.removeEventListener("pointermove",move)};
  }, []);

  return <section className="ocean-hero" ref={heroRef}>
    <div className="hero-image"/><canvas className="hero-canvas" ref={canvasRef}/><div className="caustics"/><div className="ocean-lens"/>
    <header className="hero-nav"><div className="shell nav-inner"><a href="#top" className="brand">Lipi<span>Cure</span><small>MARINE BIOTECH TRANSLATION</small></a><nav className="nav-links" aria-label="Main navigation"><a href="#lead-project">Live project</a><a href="#pearl-x">PEARL-X</a><a href="/ai-biotech-research">AI Research</a><a href="https://www.linkedin.com/company/lipicure-deeptech/" target="_blank" rel="noreferrer">LinkedIn</a><a className="nav-cta" href="/build-together">Build together ↗</a></nav></div></header>
    <div className="depth-readout"><span>+ 00 M</span><i/><b>DESCENDING TO LIPICURE LAB / 028 M</b><i/><span>− 40 M</span></div>
    <div className="shell hero-copy" id="top"><div className="hero-content"><div className="hero-label"><i/>AUTONOMOUS MARINE BIOTECH LAB · INDIA</div><h1>Marine Biotech,<span>Translated.</span></h1><p>Scientists, engineers and industry specialists, building India&apos;s marine biotech translation platform — turning ocean science into licensable technologies.</p></div></div>
    {stations.map((item,i)=><button key={item.title} className={`hotspot hotspot-${["one","two","three"][i]}`} onClick={()=>setStation(i)} aria-label={`Inspect ${item.title}`}><span className="hotspot-label">{item.title.toUpperCase()}</span></button>)}
    <div className="hero-deck"><div className="shell deck-inner"><div className="lab-status"><div className="status-cell"><span>LEAD PROJECT</span><strong><i/>OMEGA-3 TRANSLATION</strong></div><div className="status-cell"><span>BUILD MODE</span><strong>OPEN · GOVERNED</strong></div><div className="status-cell"><span>MISSION</span><strong>SCIENCE → TECHNOLOGY</strong></div></div><a href="#opportunity" className="scroll-cue">SCROLL TO DESCEND<i/></a></div></div>
    {station!==null&&<div className="lab-modal" role="dialog" aria-modal="true" aria-label={stations[station].title} onClick={()=>setStation(null)}><article className="modal-card" onClick={e=>e.stopPropagation()}><button onClick={()=>setStation(null)} aria-label="Close">×</button><span>LAB NODE {String(station+1).padStart(2,"0")}</span><h2>{stations[station].title}</h2><p>{stations[station].text}</p></article></div>}
  </section>;
}
