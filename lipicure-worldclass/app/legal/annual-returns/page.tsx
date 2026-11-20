import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';

export const metadata: Metadata = { title: 'Annual Returns | LipiCure', description: 'Annual return publication page for LipiCure Private Limited.' };

export default function AnnualReturnsPage() {
  return <LegalPage eyebrow="Corporate disclosures" title="Annual Returns" summary="This page is the designated public location for annual returns of LipiCure Private Limited after the applicable return is filed.">
    <section><h2>Current status</h2><p>LipiCure Private Limited was incorporated on 18 November 2026. As of 20 November 2026, no annual return has become available for publication.</p></section>
    <section><h2>Future publication</h2><p>Copies of applicable annual returns will be added here after filing in accordance with the Companies Act, 2013 and associated rules.</p></section>
    <section><h2>Company identification</h2><ul><li><strong>Legal name:</strong> LIPICURE PRIVATE LIMITED</li><li><strong>CIN:</strong> U72100TN2026PTC200325</li><li><strong>Registered State:</strong> Tamil Nadu, India</li></ul></section>
  </LegalPage>;
}
