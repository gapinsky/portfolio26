import Image from "next/image";
import type { ProjectDetail } from "@/public/data/hoodmoodData";

const heading = "text-2xl font-semibold tracking-tight sm:text-3xl";
const body = "mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-lg";
const tile = "min-w-0 rounded-2xl border border-zinc-200 bg-zinc-50 p-6";

export default function CaseStudy({ project }: { project: ProjectDetail }) {
  const study = project.caseStudy;
  const process = [
    ["The challenge", study.challenge],
    ["Discovery & requirements", study.discovery],
    ["Design", study.design],
    ["Architecture", study.architecture],
    ["Implementation", study.implementation],
    ["Quality & constraints", study.performance],
  ].filter((step): step is [string, string] => Boolean(step[1]));

  return (
    <article aria-label={`${project.title} case study`} className="mt-16 space-y-14 sm:space-y-20">
      <section>
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">Case study{project.status === "in-development" ? " · work in progress" : ""}</p>
        <h2 className={heading}>{study.headline}</h2>
        <p className={body}>{study.overview}</p>
        <h3 className="mt-8 text-lg font-semibold">My role</h3>
        <ul role="list" className="mt-4 flex list-none flex-wrap gap-2">
          {project.roles.map((role) => <li key={role} className="rounded-full border border-zinc-300 px-3 py-1 text-sm">{role}</li>)}
        </ul>
      </section>

      {process.map(([title, description], index) => (
        <section key={title} className="grid gap-4 border-t border-zinc-200 pt-8 md:grid-cols-[1fr_2fr] md:gap-10">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl"><span className="mb-2 block text-sm font-normal text-zinc-400">0{index + 1}</span>{title}</h2>
          <p className="max-w-3xl leading-relaxed text-zinc-600 sm:text-lg">{description}</p>
        </section>
      ))}

      {project.media.length > 0 && (
      <section>
        <h2 className={heading}>{project.slug === "ticket-system" ? "Design artefacts" : "Gallery"}</h2>
        <p className={body}>{project.slug === "ticket-system" ? "Diagrams produced during the design phase. " : ""}Click an image to view it full size.</p>
        <div className="mt-8 space-y-8">
          {project.media.map((media) => (
            <figure key={media.src}>
              <a href={media.src} target="_blank" rel="noopener noreferrer" className="block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900" aria-label={`${media.caption} - open full-size image in a new tab`}>
                <Image src={media.src} alt={media.alt} width={3200} height={2000} sizes="(min-width: 1280px) 1152px, 100vw" className="h-auto w-full rounded-xl border border-zinc-200 bg-white" />
              </a>
              <figcaption className="mt-3 text-sm text-zinc-500">{media.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      )}

      <section>
        <h2 className={heading}>Key features</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {study.features.map((feature) => (
            <div key={feature.title} className={tile}>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {study.challenges && study.challenges.length > 0 && (
      <section>
        <h2 className={heading}>Challenges & solutions</h2>
        <div className="mt-6 space-y-4">
          {study.challenges.map((challenge) => (
            <div key={challenge.title} className={tile}>
              <h3 className="text-lg font-semibold">{challenge.title}</h3>
              <dl className="mt-4 grid gap-6 sm:grid-cols-2">
                <div><dt className="text-sm font-medium">Problem</dt><dd className="mt-2 leading-relaxed text-zinc-600">{challenge.problem}</dd></div>
                <div><dt className="text-sm font-medium">Solution</dt><dd className="mt-2 leading-relaxed text-zinc-600">{challenge.solution}</dd></div>
              </dl>
            </div>
          ))}
        </div>
      </section>
      )}

      {study.outcomes && study.outcomes.length > 0 && (
      <section>
        <h2 className={heading}>{project.status === "in-development" ? "Results so far" : "Outcomes"}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {study.outcomes.map((outcome) => (
            <div key={outcome.title} className={tile}>
              <h3 className="text-lg font-semibold">{outcome.title}</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">{outcome.description}</p>
            </div>
          ))}
        </div>
      </section>
      )}

      {study.futureDevelopment && (
        <section>
          <h2 className={heading}>Next steps - {study.futureDevelopment.title}</h2>
          <p className={body}>{study.futureDevelopment.description}</p>
        </section>
      )}
      <section className="border-t border-zinc-200 pt-8">
        <h2 className={heading}>What I took away</h2>
        <p className={body}>{study.takeaway}</p>
      </section>
    </article>
  );
}
