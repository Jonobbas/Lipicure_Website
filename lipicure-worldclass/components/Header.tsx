'use client';
import Link from 'next/link';
import { Menu, Waves, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll(); window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    ['Technology','/technology'], ['Platform','/marine-bioprocess-intelligence'], ['Research','/research'], ['Team','/team'], ['About','/about']
  ];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${solid ? 'bg-ocean-950/95 border-b border-cyan-300/10 backdrop-blur' : 'bg-transparent'}`}>
      <div className="section-shell flex h-20 items-center gap-8">
        <Link href="/" className="mr-auto flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/30 text-cyanx"><Waves/></span>
          <span><strong className="block text-2xl tracking-tight">LipiCure</strong><small className="block text-[10px] uppercase tracking-[.18em] text-slate-300">Engineering the Blue Bioeconomy</small></span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label,href]) => <Link key={href} className="text-sm text-slate-200 hover:text-cyanx" href={href}>{label}</Link>)}
        </nav>
        <Link href="/contact" className="hidden rounded-xl border border-cyan-300/35 px-4 py-3 text-sm text-cyanx lg:inline-flex">Partner With Us</Link>
        <button onClick={()=>setOpen(!open)} className="text-white lg:hidden" aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <div className="border-t border-cyan-300/10 bg-ocean-950 px-5 py-4 lg:hidden">{links.concat([['Partner With Us','/contact']]).map(([label,href])=><Link onClick={()=>setOpen(false)} className="block py-3 text-slate-200" key={href} href={href}>{label}</Link>)}</div>}
    </header>
  );
}
