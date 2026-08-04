import ArticleShell from '@/components/content/ArticleShell';

export default function InnovationFrameworkPage() {
  return (
    <ArticleShell
      eyebrow="Innovation Framework"
      title="How LipiCure Builds Innovation"
      intro="Every technology at LipiCure is developed through an integrated innovation framework that combines Design Thinking, Lean Startup and Agile execution."
    >

      <section>
        <h2>Innovation is a System</h2>

        <p>
          We do not believe breakthrough technologies happen by accident.
          We believe innovation can be designed, validated and continuously
          improved through disciplined systems.
        </p>

        <blockquote className="mt-8 border-l-2 border-cyanx pl-6 text-2xl leading-10 text-slate-200">
          "Ideas inspire. Systems deliver."
        </blockquote>
      </section>

      <section>
        <h2>1. Design Thinking</h2>

        <p>
          Every journey begins by understanding the real problem before
          attempting to build a solution.
        </p>

        <ul>
          <li>Customer and stakeholder discovery</li>
          <li>Clinical and industry needs</li>
          <li>Research-gap identification</li>
          <li>Opportunity prioritisation</li>
        </ul>
      </section>

      <section>
        <h2>2. Lean Startup</h2>

        <p>
          Rather than assuming success, we validate every important hypothesis
          through structured experimentation.
        </p>

        <ul>
          <li>Build – Measure – Learn</li>
          <li>Rapid experimentation</li>
          <li>Technology validation</li>
          <li>Technology Readiness Level (TRL) progression</li>
        </ul>
      </section>

      <section>
        <h2>3. Agile Execution</h2>

        <p>
          Innovation progresses through short learning cycles, cross-functional
          collaboration and continuous improvement.
        </p>

        <ul>
          <li>Sprint-based execution</li>
          <li>Rapid feedback</li>
          <li>Continuous learning</li>
          <li>Adaptive decision making</li>
        </ul>
      </section>

      <section>
        <h2>The Integrated LipiCure Framework</h2>

<pre>{`
Customer Need
      │
      ▼
Design Thinking
      │
      ▼
Lean Startup
      │
      ▼
Agile Execution
      │
      ▼
Validated Technology
      │
      ▼
Commercial Translation
`}</pre>

        <p>
          These three globally proven methodologies work together as a single
          operating framework that guides every LipiCure programme from idea to
          technology translation.
        </p>
      </section>

      <section>
        <h2>Looking Ahead</h2>

        <p>
          As LipiCure evolves, this framework will expand into a broader
          Innovation Operating System integrating PEARL-X digital intelligence,
          scientific experimentation, regulatory planning and commercial
          translation into one repeatable methodology.
        </p>

        <blockquote className="mt-8 border-l-2 border-cyanx pl-6 text-2xl leading-10 text-slate-200">
          "We don't chase innovation. We build systems that repeatedly create it."
        </blockquote>
      </section>

    </ArticleShell>
  );
}
