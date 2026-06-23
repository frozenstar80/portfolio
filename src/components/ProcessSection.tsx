import { processSteps } from "../data/process";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export const ProcessSection = () => (
  <AnimatedSection id="process" className="scroll-mt-24 bg-slate-50 py-20 dark:bg-navy-900/70 sm:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Process"
        title="A calm, professional workflow for remote clients"
        description="The process is built to reduce ambiguity, protect your budget, and keep every milestone visible from the first call to launch."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {processSteps.map((step, index) => (
          <article key={step.title} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-navy-900">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-300">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-4 text-base font-semibold text-slate-950 dark:text-white">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{step.description}</p>
          </article>
        ))}
      </div>
    </div>
  </AnimatedSection>
);
