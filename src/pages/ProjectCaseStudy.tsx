import { ArrowLeft, ExternalLink, MessageCircle } from "lucide-react";
import type { Project } from "../data/projects";
import { siteConfig } from "../data/siteConfig";
import { assetPath, formatEngagementLabel, formatProjectDate } from "../lib/utils";

type ProjectCaseStudyProps = {
  project: Project;
};

export const ProjectCaseStudy = ({ project }: ProjectCaseStudyProps) => {
  const link = project.appStoreLink ?? project.playStoreLink ?? project.websiteLink ?? project.githubLink;
  const timeline = `${formatProjectDate(project.startDate)} - ${project.endDate ? formatProjectDate(project.endDate) : "Present"}`;

  return (
    <main className="min-h-screen bg-slate-50 pb-20 pt-28 text-slate-900 dark:bg-navy-950 dark:text-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200">
          <ArrowLeft size={16} /> Back to projects
        </a>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <div className="flex flex-wrap gap-2">
              {[project.category, project.status, formatEngagementLabel(project.projectType)].map((item) => (
                <span key={item} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm dark:bg-white/10 dark:text-slate-200">
                  {item}
                </span>
              ))}
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">{project.title}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{project.description}</p>
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Open Live App <ExternalLink size={16} />
              </a>
            ) : null}
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-premium dark:border-white/10 dark:bg-white/[0.06] dark:shadow-premium-dark">
            <img src={assetPath(project.coverImage)} alt={`${project.title} case study preview`} className="aspect-[16/11] w-full rounded-[1.25rem] object-cover" />
          </div>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-4">
          {[
            ["Client", project.clientName ?? "Confidential"],
            ["Country", project.clientCountry ?? "Remote"],
            ["Role", project.role],
            ["Timeline", timeline],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.06]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{label}</p>
              <p className="mt-2 text-sm font-semibold text-slate-950 dark:text-white">{value}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.06]">
            <h2 className="text-lg font-semibold text-slate-950 dark:text-white">Tech stack</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {(project.caseStudy?.techStack ?? project.technologies).map((technology) => (
                <span key={technology} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200">
                  {technology}
                </span>
              ))}
            </div>

            <h2 className="mt-8 text-lg font-semibold text-slate-950 dark:text-white">Platforms</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {project.platforms.map((platform) => (
                <li key={platform}>• {platform}</li>
              ))}
            </ul>

            <h2 className="mt-8 text-lg font-semibold text-slate-950 dark:text-white">Live status</h2>
            <p className="mt-3 text-sm font-semibold text-emerald-700 dark:text-emerald-300">{project.status}</p>
          </aside>

          <div className="grid gap-6">
            <article className="case-panel">
              <h2>Project overview</h2>
              <p>{project.caseStudy?.overview ?? project.description}</p>
            </article>
            <article className="case-panel">
              <h2>Client/context</h2>
              <p>{project.caseStudy?.clientContext ?? `${project.clientName ?? "Client"} project delivered as ${formatEngagementLabel(project.projectType)}.`}</p>
            </article>
            <article className="case-panel">
              <h2>Problem</h2>
              <p>{project.caseStudy?.problem ?? "The project required a reliable mobile experience, backend-connected workflows, and careful delivery support."}</p>
            </article>
            <article className="case-panel">
              <h2>What I handled</h2>
              <ul>
                {(project.caseStudy?.handled ?? project.features).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="case-panel">
              <h2>Mobile app features</h2>
              <ul>
                {(project.caseStudy?.mobileFeatures ?? project.features).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="case-panel">
              <h2>Backend/API/Firebase involvement</h2>
              <ul>
                {(project.caseStudy?.backendAndApi ?? project.backendInvolvement).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="case-panel">
              <h2>Deployment/release support</h2>
              <ul>
                {(project.caseStudy?.deploymentSupport ?? project.releaseSupport).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="case-panel">
              <h2>Result/outcome</h2>
              <ul>
                {(project.caseStudy?.outcome ?? [project.status]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="mt-8">
          <article className="case-panel">
            <h2>Screenshots/mockups</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {project.images.map((image) => (
                <img
                  key={image}
                  src={assetPath(image)}
                  alt={`${project.title} app screenshot or mockup`}
                  className="aspect-[16/10] rounded-2xl border border-slate-200 object-cover dark:border-white/10"
                  loading="lazy"
                />
              ))}
            </div>
          </article>
        </section>

        <section className="mt-8 rounded-3xl bg-slate-950 p-8 text-white shadow-premium dark:border dark:border-white/10 dark:bg-navy-900">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">Build something similar</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Want to build something similar?</h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                Share your app idea, existing backend, current blockers, or launch goals and I’ll help you turn it into a clear delivery plan.
              </p>
            </div>
            <a
              href={`${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi Tanmay, I want to discuss an app similar to ${project.title}.`)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-white dark:text-black dark:shadow-black/20 dark:hover:bg-blue-50 dark:hover:text-black"
            >
              <MessageCircle size={17} /> Discuss Your App
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};
