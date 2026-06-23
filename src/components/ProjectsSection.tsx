import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import { cn } from "../lib/utils";
import { AnimatedSection } from "./AnimatedSection";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

const filters = ["All", "Android", "iOS", "Flutter", "Full Stack", "Live", "Under Development"] as const;
type ProjectFilter = (typeof filters)[number];

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    if (activeFilter === "Live" || activeFilter === "Under Development") {
      return projects.filter((project) => project.status === activeFilter);
    }
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <AnimatedSection id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured work"
          title="Real apps, client delivery, and launch-ready product thinking"
          description="A curated set of mobile and full-stack projects shaped for production expectations, app-store releases, API integrations, and overseas collaboration."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition",
                activeFilter === filter
                  ? "border-slate-950 bg-slate-950 text-white dark:border-blue-500 dark:bg-blue-600 dark:text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300 dark:hover:border-blue-300",
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
