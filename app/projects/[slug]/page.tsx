import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Wrapper from "@/myComponents/wrapper/Wrapper";
import { getProjectBySlug, getProjectSlug } from "@/lib/projects";
import { projects, projectCategories } from "@/public/data/data";
import HoodmoodCaseStudy, { hoodmood } from "@/myComponents/projects/HoodmoodCaseStudy";
import CaseStudy from "@/myComponents/projects/CaseStudy";
import { caseStudies } from "@/lib/caseStudies";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: getProjectSlug(project) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug((await params).slug);
  if (!project) notFound();
  return {
    title: `${project.name} | Antoni Gapiński`,
    description: getProjectSlug(project) === "hoodmood2" ? hoodmood.card.description : caseStudies[getProjectSlug(project)]?.card.description ?? project.description,
  };
}

export default function ProjectDetails({ params }: Props) {
  return (
    <Suspense fallback={<main className="flex-1 bg-zinc-100" aria-busy="true" />}>
      <ProjectContent params={params} />
    </Suspense>
  );
}

async function ProjectContent({ params }: Props) {
  const project = getProjectBySlug((await params).slug);
  if (!project) notFound();

  const isHoodmood = getProjectSlug(project) === "hoodmood2";
  const detail = caseStudies[getProjectSlug(project)];
  const technologies = isHoodmood ? hoodmood.technologies : detail?.technologies ?? project.technologies;

  return (
    <main className="flex-1 bg-zinc-100 text-zinc-900">
      <Wrapper>
        <Link href="/#projects" className="inline-flex min-h-11 items-center rounded-sm text-sm text-zinc-600 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900">
          ← Back to projects
        </Link>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">
          {project.name}
        </h1>
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-4 text-sm">
          <div><dt className="text-zinc-500">Category</dt><dd className="mt-1">{projectCategories[project.category]}</dd></div>
          <div><dt className="text-zinc-500">Status</dt><dd className="mt-1 capitalize">{project.status.replaceAll("-", " ")}</dd></div>
        </dl>
        <Image
          src={project.thumbnail}
          alt={project.name}
          width={1200}
          height={675}
          sizes="(min-width: 1280px) 1152px, 100vw"
          className="mt-8 aspect-video w-full rounded-2xl border border-zinc-200 object-cover"
        />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-700">{isHoodmood ? hoodmood.card.description : detail?.card.description ?? project.description}</p>
        {technologies.length > 0 && (
          <section aria-labelledby="technologies-heading" className="mt-8">
            <h2 id="technologies-heading" className="text-xl font-semibold">Technologies</h2>
            <ul role="list" className="mt-4 flex list-none flex-wrap gap-2">
              {technologies.map((technology) => (
                <li key={technology} className="rounded-full border border-zinc-300 px-3 py-1 text-sm">{technology}</li>
              ))}
            </ul>
          </section>
        )}
        <div className="mt-8 flex flex-wrap gap-3">
          {(!detail || detail.links.github) && (
            <Button nativeButton={false} render={<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" />}>
              View code<span className="sr-only"> (opens in a new tab)</span>
            </Button>
          )}
          {detail?.links.figma && (
            <Button variant="outline" nativeButton={false} render={<a href={detail.links.figma} target="_blank" rel="noopener noreferrer" />}>
              View UI mockup in Figma<span className="sr-only"> (opens in a new tab)</span>
            </Button>
          )}
          {project.liveUrl && (
            <Button variant="outline" nativeButton={false} render={<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" />}>
              Visit website<span className="sr-only"> (opens in a new tab)</span>
            </Button>
          )}
        </div>
        {isHoodmood && <HoodmoodCaseStudy />}
        {detail && <CaseStudy project={detail} />}
      </Wrapper>
    </main>
  );
}
