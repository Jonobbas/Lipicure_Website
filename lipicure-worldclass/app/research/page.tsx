import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContentIndex from '@/components/content/ContentIndex';
import { getByKind } from '@/lib/content';
export const metadata={title:'Research | LipiCure',description:'Technical notes, working papers and public research resources from LipiCure.'};
export default function ResearchPage(){const items=getByKind('research');return <main><Header/><section className="page-hero"><div className="section-shell"><div className="section-kicker">Research</div><h1 className="section-title max-w-5xl">Public evidence, technical notes and scientific learning</h1><p className="section-copy">Research outputs are clearly labelled by status. Simulation-based work is not presented as experimentally validated evidence.</p></div></section><section className="section-pad bg-[#03101b]"><div className="section-shell"><ContentIndex items={items} title="Research"/></div></section><Footer/></main>}
