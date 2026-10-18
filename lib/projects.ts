import { projects, type Project } from "@/public/data/data";

export function getProjectSlug(project: Pick<Project, "githubUrl">) {
  return new URL(project.githubUrl).pathname.split("/").filter(Boolean).at(-1)!;
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => getProjectSlug(project) === slug);
}
