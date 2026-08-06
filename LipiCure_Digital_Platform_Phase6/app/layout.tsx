import "./globals.css";

// Shared metadata and shell for the immersive LipiCure test version.
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LipiCure | Engineering the Blue Bioeconomy",
  description: "India's marine bioprocess intelligence platform—translating marine biotechnology opportunities into licensable technologies.",
  metadataBase: new URL("https://lipicure.com"),
  openGraph: {
    title: "LipiCure | Engineering the Blue Bioeconomy",
    description: "Enter LipiCure's autonomous deep-ocean biotechnology laboratory.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
