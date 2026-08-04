import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LipiCure | Engineering the Blue Bioeconomy',
  description: "India's market-driven marine biotechnology innovation and bioprocess intelligence platform.",
  metadataBase: new URL('https://lipicure.com'),
  openGraph: { title: 'LipiCure | Engineering the Blue Bioeconomy', description: "India's market-driven marine biotechnology innovation platform.", type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
