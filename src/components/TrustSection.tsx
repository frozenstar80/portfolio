import { ShieldCheck } from "lucide-react";
import { trustCards } from "../data/trust";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export const TrustSection = () => (
  <AnimatedSection id="trust" className="scroll-mt-24 py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Why clients work with me"
        title="Built for remote, international product delivery"
        description="A practical working style for founders and agencies who need clear planning, backend-connected mobile delivery, app-store support, and post-launch reliability."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {trustCards.map((card) => (
          <article key={card.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-200">
              <ShieldCheck size={20} />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-950 dark:text-white">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{card.description}</p>
          </article>
        ))}
      </div>
    </div>
  </AnimatedSection>
);
