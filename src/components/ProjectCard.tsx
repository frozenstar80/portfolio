import { ArrowUpRight, ExternalLink, MapPin, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "../data/projects";
import { assetPath, formatEngagementLabel, getProjectHref } from "../lib/utils";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const primaryLink = project.appStoreLink ?? project.playStoreLink ?? project.websiteLink ?? project.githubLink;

  return (
    <motion.article
      layout
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium dark:border-white/10 dark:bg-white/[0.06] dark:hover:shadow-premium-dark"
    >
      <a href={getProjectHref(project)} className="block overflow-hidden bg-slate-100 dark:bg-white/5" aria-label={`Open case study for ${project.title}`}>
        <img
          src={assetPath(project.coverImage)}
          alt={`${project.title} app preview`}
          className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </a>

      <div className="p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-400/10 dark:text-blue-200">
            {project.category}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-300">
            {formatEngagementLabel(project.projectType)}
          </span>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200">
            {project.status}
          </span>
        </div>

        <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{project.title}</h3>
        <p className="mt-3 min-h-[4rem] text-sm leading-7 text-slate-600 dark:text-slate-300">{project.shortDescription}</p>

        <div className="mt-5 grid gap-3 rounded-2xl bg-slate-50 p-4 text-sm dark:bg-white/[0.06]">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <UserRound size={16} className="text-blue-600 dark:text-blue-300" />
            <span>{project.clientName ?? "Confidential client"} • {project.role}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <MapPin size={16} className="text-blue-600 dark:text-blue-300" />
            <span>{project.clientCountry ?? "Remote"} • {project.platforms.join(" / ")}</span>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((technology) => (
            <span key={technology} className="rounded-md border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:text-slate-300">
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={getProjectHref(project)}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500"
          >
            Case Study <ArrowUpRight size={16} />
          </a>
          {primaryLink ? (
            <a
              href={primaryLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-white/10 dark:text-slate-200 dark:hover:border-blue-300"
            >
              Live Link <ExternalLink size={15} />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
};
