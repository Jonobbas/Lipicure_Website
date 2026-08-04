import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LipiCure | Engineering the Blue Bioeconomy',
  description: "India's marine bioprocess intelligence platform for market-driven, sustainable marine biotechnology.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
