import { skillGroups } from "../data/skills";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export const SkillsSection = () => (
  <AnimatedSection id="skills" className="scroll-mt-24 py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Skills"
        title="Client-friendly capability across mobile, backend integration, data, and release"
        description="Focused on the technologies and workflows that matter for production apps: Android, iOS, Flutter, APIs, Firebase, databases, CI/CD, monitoring, and launch support."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </AnimatedSection>
);
