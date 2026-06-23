import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export const CTASection = () => (
  <section className="py-8">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 shadow-premium dark:border dark:border-white/10 dark:bg-navy-950 dark:shadow-premium-dark sm:px-10 lg:px-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">Next project</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Have an app idea, a delayed MVP, or an unfinished mobile app?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Let’s turn it into a scoped, launch-ready plan with the right mobile architecture, integrations, testing, and release support.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Start a Conversation <ArrowRight size={17} />
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
            >
              <MessageCircle size={17} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
