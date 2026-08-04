import ArticleShell from '@/components/content/ArticleShell';

export default function FounderStoryPage() {
  return (
    <ArticleShell
      eyebrow="Origin Story"
      title="The Journey Behind LipiCure"
      intro="LipiCure began as a question: how can disciplined engineering systems help translate scientific ideas into repeatable, commercially meaningful outcomes?"
    >
      <div className="space-y-10">
        <section>
          <h2 className="text-3xl font-semibold">Engineering Before Entrepreneurship</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Nearly two decades in heavy engineering, manufacturing quality and complex
            project environments shaped a strong belief: scientific breakthroughs create
            real impact only when they become repeatable systems.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold">The Ocean Changed the Question</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Exposure to Kanniyakumari&apos;s marine economy, combined with industry analysis
            and academic research, revealed a significant gap between India&apos;s strength
            in marine resources and its output of high-value biotechnology.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold">Conversations That Became a Venture</h2>
          <p className="mt-4 leading-8 text-slate-300">
            The idea evolved through repeated discussions at home with Sowjanniya. Her own
            entrepreneurial journey—from building a café venture to developing a precision
            machining unit now under operation—brought a practical business perspective to
            the engineering vision.
          </p>
          <p className="mt-4 leading-8 text-slate-300">
            Those conversations helped transform a technical possibility into an
            entrepreneurial pathway led by Sowjanniya, while the engineering and systems
            vision continued to draw from years of industrial experience.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold">Building the Ecosystem</h2>
          <p className="mt-4 leading-8 text-slate-300">
            LipiCure was shaped through discussions with industry professionals, academic
            researchers, marine scientists, incubators, mentors and potential collaborators.
            Each interaction refined the problem, tested the assumptions and strengthened
            the venture model.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold">The Birth of LipiCure</h2>
          <p className="mt-4 leading-8 text-slate-300">
            LipiCure represents the convergence of engineering discipline, entrepreneurial
            leadership, digital intelligence and marine science. It is being built as a
            collaborative platform for converting marine biotechnology opportunities into
            scalable, high-value technologies.
          </p>
        </section>

        <blockquote className="border-l-2 border-cyanx pl-6 text-2xl leading-10 text-slate-200">
          “I don&apos;t build products first. I build systems that repeatedly create successful products.”
        </blockquote>
      </div>
    </ArticleShell>
  );
}
