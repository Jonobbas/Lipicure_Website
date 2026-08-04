'use client';

import { useState } from 'react';
import { ArrowRight, Beaker, BrainCircuit, ChartNoAxesCombined, FileCheck2, Search, Settings2 } from 'lucide-react';

const stages = [
  { title: 'Discover', icon: Search, text: 'Define the industrial need, market requirement and scientific hypothesis before committing major resources.', output: 'Opportunity brief' },
  { title: 'Architect', icon: BrainCircuit, text: 'Map mechanisms, process stages, critical parameters, quality attributes and interfaces.', output: 'Process architecture' },
  { title: 'Simulate', icon: ChartNoAxesCombined, text: 'Explore assumptions, sensitivities and candidate operating windows digitally.', output: 'Prioritised design space' },
  { title: 'Experiment', icon: Beaker, text: 'Test the most informative conditions through laboratory experiments and measured data.', output: 'Experimental evidence' },
  { title: 'Optimise', icon: Settings2, text: 'Refine the process using DOE, model calibration and risk-based iteration.', output: 'Robust operating window' },
  { title: 'Translate', icon: FileCheck2, text: 'Prepare the evidence, specifications and controls required for pilot and licensing pathways.', output: 'Technology package' }
];

export default function PearlWorkflow() {
  const [active, setActive] = useState(0);
  const selected = stages[active];
  const Icon = selected.icon;

  return (
    <div className="pearl-workflow">
      <div className="pearl-stage-list" role="tablist" aria-label="PEARL-X workflow stages">
        {stages.map((stage, index) => {
          const StageIcon = stage.icon;
          return (
            <button key={stage.title} onClick={() => setActive(index)} className={active === index ? 'active' : ''} role="tab" aria-selected={active === index}>
              <span>{String(index + 1).padStart(2, '0')}</span><StageIcon size={18}/><strong>{stage.title}</strong>
            </button>
          );
        })}
      </div>
      <div className="pearl-stage-detail" role="tabpanel">
        <div className="pearl-detail-icon"><Icon size={34}/></div>
        <p className="pearl-detail-kicker">Selected stage</p>
        <h3>{selected.title}</h3>
        <p>{selected.text}</p>
        <div className="pearl-output"><span>Primary output</span><strong>{selected.output}</strong><ArrowRight size={18}/></div>
      </div>
    </div>
  );
}
