import { ArrowRight } from "lucide-react";
import { deliveryCapability } from "../data/delivery";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export const DeliveryCapabilitySection = () => (
  <AnimatedSection id="delivery" className="scroll-mt-24 bg-slate-50 py-20 dark:bg-navy-900/70 sm:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Delivery capability" title={deliveryCapability.title} description={deliveryCapability.description} />
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {deliveryCapability.steps.map((step, index) => (
          <article key={step} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-navy-950">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-300">{String(index + 1).padStart(2, "0")}</span>
              {index < deliveryCapability.steps.length - 1 ? <ArrowRight className="hidden text-slate-300 lg:block dark:text-slate-600" size={18} /> : null}
            </div>
            <h3 className="mt-5 text-base font-semibold text-slate-950 dark:text-white">{step}</h3>
          </article>
        ))}
      </div>
    </div>
  </AnimatedSection>
);
