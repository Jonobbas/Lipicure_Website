import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ArticleShell({
  eyebrow,
  title,
  intro,
  children
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-ocean-950">
      <Header />
      <section className="section-pad pt-36">
        <div className="section-shell max-w-4xl">
          <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-cyanx"><ArrowLeft size={16}/>Back to home</Link>
          <div className="section-kicker">{eyebrow}</div>
          <h1 className="section-title">{title}</h1>
          <p className="section-copy text-lg">{intro}</p>
          <div className="article-body mt-12">{children}</div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
