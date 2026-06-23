import { CheckCircle2 } from "lucide-react";
import profileImage from "../assets/profile-portrait.png";
import { siteConfig } from "../data/siteConfig";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

const strengths = ["Independent client communication", "Production bug ownership", "API and Firebase coordination", "App launch support"];

export const AboutSection = () => (
  <AnimatedSection id="about" className="scroll-mt-24 bg-slate-50 py-20 dark:bg-navy-900/70 sm:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About"
        title="A full-stack app service provider for product-minded teams"
        description="Built for founders and agencies who need a reliable technical partner for mobile apps, integrations, launch support, and long-term product delivery."
      />
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-premium dark:border dark:border-white/10 dark:bg-navy-950">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <img
              src={profileImage}
              alt={`${siteConfig.name} professional portrait`}
              className="h-28 w-28 rounded-2xl border border-white/15 object-cover shadow-2xl"
              loading="lazy"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">{siteConfig.location} • Worldwide clients</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">Reliable execution from first scope to post-launch support.</h3>
            </div>
          </div>
          <p className="mt-6 leading-8 text-slate-300">{siteConfig.about}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {strengths.map((strength) => (
            <div key={strength} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-navy-900">
              <CheckCircle2 className="text-blue-600 dark:text-blue-300" size={22} />
              <h3 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">{strength}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Practical, calm delivery habits that help overseas clients stay confident throughout the build.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </AnimatedSection>
);
