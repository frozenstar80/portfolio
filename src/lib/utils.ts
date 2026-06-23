import type { Project } from "../data/projects";
import type { ProjectType } from "../data/projects";

export const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(" ");

export const getProjectHref = (project: Project) => `#/projects/${project.id}`;

export const getProjectById = (projects: Project[], id: string | null) =>
  projects.find((project) => project.id === id);

export const formatProjectDate = (value: string) => {
  const [year, month] = value.split("-");
  if (!year || !month) return value;

  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(new Date(Number(year), Number(month) - 1));
};

export const formatEngagementLabel = (type: ProjectType) => {
  if (type === "Freelance") return "Independent Client Delivery";
  if (type === "Full Time") return "Product Team Delivery";
  return type;
};
