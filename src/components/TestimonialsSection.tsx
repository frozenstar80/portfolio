import { Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export const TestimonialsSection = () => (
  <AnimatedSection id="testimonials" className="scroll-mt-24 py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Client signals"
        title="Trustworthy collaboration for founders, agencies, and product teams"
        description="Replace these placeholders with real client feedback as you collect results from client, product-team, and service-delivery work."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
            <Quote className="text-blue-600 dark:text-blue-300" size={24} />
            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">“{testimonial.quote}”</p>
            <div className="mt-6 border-t border-slate-100 pt-5 dark:border-white/10">
              <p className="font-semibold text-slate-950 dark:text-white">{testimonial.name}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </AnimatedSection>
);
