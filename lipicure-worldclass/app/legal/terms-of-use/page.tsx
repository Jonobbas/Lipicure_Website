import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';

export const metadata: Metadata = { title: 'Terms of Use | LipiCure', description: 'Terms governing use of the LipiCure website.' };

export default function TermsPage() {
  return <LegalPage eyebrow="Legal & compliance" title="Website Terms of Use" summary="These terms apply to your access to and use of the LipiCure website. By using the site, you agree to use it lawfully and in accordance with these terms.">
    <section><h2>1. Website purpose</h2><p>This website provides general information about LipiCure Private Limited, its research interests, development programmes, collaboration pathways and company progress. Website content does not by itself create an employment, partnership, agency, investment, advisory, research or commercial relationship.</p></section>
    <section><h2>2. Permitted use</h2><p>You may access and refer to publicly available content for lawful personal, professional or informational purposes. You must not interfere with the site, attempt unauthorised access, misrepresent LipiCure content, submit unlawful material or use the site to infringe another person&apos;s rights.</p></section>
    <section><h2>3. Intellectual property</h2><p>Unless otherwise identified, the website design, text, graphics, research framing, brand elements and original materials are owned by or licensed to LipiCure Private Limited. No licence to patents, know-how, software, datasets, trademarks or other intellectual property is granted merely by publication or access.</p></section>
    <section><h2>4. Contributions and proposals</h2><p>Do not submit confidential, proprietary, patient, export-controlled or employer-owned information without an appropriate written agreement. An enquiry, discussion or submitted idea does not automatically create confidentiality, authorship, ownership, compensation, employment or equity rights.</p></section>
    <section><h2>5. Accuracy and availability</h2><p>We aim to keep information useful and current, but research programmes, timelines, opportunities and development assumptions may change. The website may be updated, suspended or withdrawn without notice. External links are provided for convenience and are not controlled by LipiCure.</p></section>
    <section><h2>6. Liability</h2><p>To the extent permitted by applicable law, LipiCure is not responsible for decisions, losses or damages arising solely from reliance on general website content. Nothing in these terms excludes liability that cannot lawfully be excluded.</p></section>
    <section><h2>7. Governing law</h2><p>These terms are governed by the laws of India. Subject to applicable law, disputes relating to the website will be subject to the jurisdiction of competent courts in Tamil Nadu.</p></section>
    <section><h2>8. Contact</h2><p>Questions about these terms may be sent to <a href="mailto:founder@lipicure.com">founder@lipicure.com</a>.</p></section>
  </LegalPage>;
}
