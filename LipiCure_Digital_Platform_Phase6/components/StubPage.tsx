import Header from './Header';
import Footer from './Footer';
export default function StubPage({title,copy}:{title:string,copy:string}){
  return <main><div className="min-h-[75vh] bg-gradient-to-br from-ocean-950 via-ocean-900 to-ocean-800"><Header/><div className="section-shell flex min-h-[75vh] items-center pt-24"><div><div className="section-kicker">LipiCure</div><h1 className="section-title">{title}</h1><p className="section-copy">{copy}</p><div className="mt-8 inline-flex rounded-full border border-cyan-300/20 px-4 py-2 text-sm text-cyanx">Detailed content is being prepared.</div></div></div></div><Footer/></main>
}
