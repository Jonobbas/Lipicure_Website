import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';

export const metadata: Metadata = { title: 'Scientific Disclaimer | LipiCure', description: 'Scientific and medical disclaimer for LipiCure research-stage content.' };

export default function ScientificDisclaimerPage() {
  return <LegalPage eyebrow="Research integrity" title="Scientific & Medical Disclaimer" summary="LipiCure communicates emerging scientific and development work carefully. This page defines the boundary between research information and validated products or medical advice.">
    <section><h2>Research-stage information</h2><p>Content concerning marine bioactives, omega-3 lipids, peptides, collagen, chitin, chitosan, processing routes, simulations, artificial intelligence, quality attributes or potential applications may describe hypotheses, development targets, literature findings or work in progress. It must not be interpreted as proof of safety, efficacy, commercial readiness or regulatory approval.</p></section>
    <section><h2>No medical advice</h2><p>This website does not provide diagnosis, treatment, prevention advice, prescribing guidance or a substitute for consultation with a qualified healthcare professional. Do not change a medicine, supplement, diet or treatment decision based on this website.</p></section>
    <section><h2>No approved-product representation</h2><p>Unless expressly stated otherwise with supporting regulatory information, references to nutraceutical, pharmaceutical, cosmetic, food, biomaterial or therapeutic applications describe potential development fields—not approved LipiCure products or authorised health claims.</p></section>
    <section><h2>Models and artificial intelligence</h2><p>Computational outputs, simulations and AI-assisted analyses are decision-support inputs. Predictions remain separate from experimentally validated evidence and require appropriate review, testing, quality controls and regulatory assessment before use.</p></section>
    <section><h2>Scientific sources and change</h2><p>Scientific knowledge evolves. Third-party studies may have limitations, conflicting findings or conditions that do not transfer to a different material, process, population or product. LipiCure may revise content as evidence and development status change.</p></section>
    <section><h2>Professional enquiries</h2><p>For a question about the status or evidence basis of a LipiCure programme, write to <a href="mailto:founder@lipicure.com">founder@lipicure.com</a>.</p></section>
  </LegalPage>;
}
