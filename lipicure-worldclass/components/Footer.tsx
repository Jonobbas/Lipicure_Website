import Link from 'next/link';
import { Linkedin, Mail, Waves } from 'lucide-react';
export default function Footer(){
  return <footer className="border-t border-cyan-300/10 bg-[#01070d] py-16">
    <div className="section-shell grid gap-10 md:grid-cols-3">
      <div><div className="flex items-center gap-3"><Waves className="text-cyanx"/><strong className="text-2xl">LipiCure</strong></div><p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">India&apos;s market-driven marine biotechnology innovation platform.</p></div>
      <div><h3 className="mb-4 font-semibold">Explore</h3><div className="grid gap-3 text-sm text-slate-400"><Link href="/technology">Technology</Link><Link href="/marine-bioprocess-intelligence">Platform</Link><Link href="/research">Research</Link><Link href="/about">About</Link></div></div>
      <div><h3 className="mb-4 font-semibold">Connect</h3><div className="grid gap-3 text-sm text-slate-400"><a className="flex items-center gap-2" href="mailto:connect@lipicure.com"><Mail size={16}/>connect@lipicure.com</a><a className="flex items-center gap-2" href="#"><Linkedin size={16}/>LinkedIn</a><Link href="/contact" className="text-cyanx">Partner With Us</Link></div></div>
    </div>
    <div className="section-shell mt-12 border-t border-white/5 pt-6 text-xs text-slate-500">© {new Date().getFullYear()} LipiCure. Engineering the Blue Bioeconomy.</div>
  </footer>
}
