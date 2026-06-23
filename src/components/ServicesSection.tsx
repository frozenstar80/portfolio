import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export const ServicesSection = () => (
  <AnimatedSection id="services" className="scroll-mt-24 py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Services"
        title="Full-cycle mobile delivery without the agency overhead"
        description="Pick focused implementation help, ongoing maintenance, or end-to-end support from idea validation through store release."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-premium dark:border-white/10 dark:bg-white/[0.06] dark:hover:border-blue-300/60"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-200">
              <ArrowUpRight size={19} />
            </div>
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.deliverables.map((item) => (
                <span key={item} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </AnimatedSection>
);
