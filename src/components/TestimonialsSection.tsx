import { Quote } from "lucide-react";
import { testimonialStatus } from "../data/testimonials";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export const TestimonialsSection = () => (
  <AnimatedSection id="testimonials" className="scroll-mt-24 py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Client feedback"
        title={testimonialStatus.title}
        description={testimonialStatus.description}
      />
      <article className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
        <Quote className="mx-auto text-blue-600 dark:text-blue-300" size={28} />
        <p className="mt-5 text-lg font-semibold text-slate-950 dark:text-white">Verified testimonials will be added here when available.</p>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Until then, the portfolio relies on real project context, live app links, and case-study details instead of invented names.
        </p>
      </article>
    </div>
  </AnimatedSection>
);
