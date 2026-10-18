import Image from "next/image";
import { projects, hoodmoodLighthouse } from "@/public/data/hoodmoodData";

export const hoodmood = projects.find((project) => project.slug === "hoodmood")!;

const heading = "text-2xl font-semibold tracking-tight sm:text-3xl";
const body = "mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-lg";
const tile = "min-w-0 rounded-2xl border border-zinc-200 bg-zinc-50 p-6";

export default function HoodmoodCaseStudy() {
  const study = hoodmood.caseStudy;
  const process = [
    ["The challenge", study.challenge],
    ["Discovery & requirements", study.discovery],
    ["Design", study.design],
    ["Architecture", study.architecture],
    ["Implementation", study.implementation],
  ];

  return (
    <article aria-label="Hoodmood case study" className="mt-16 space-y-14 sm:space-y-20">
      <section>
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">Case study</p>
        <h2 className={heading}>{study.headline}</h2>
        <p className={body}>{study.overview}</p>
        <h3 className="mt-8 text-lg font-semibold">My role</h3>
        <ul role="list" className="mt-4 flex list-none flex-wrap gap-2">
          {hoodmood.roles.map((role) => <li key={role} className="rounded-full border border-zinc-300 px-3 py-1 text-sm">{role}</li>)}
        </ul>
      </section>

      {process.map(([title, description], index) => (
        <section key={title} className="grid gap-4 border-t border-zinc-200 pt-8 md:grid-cols-[1fr_2fr] md:gap-10">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl"><span className="mb-2 block text-sm font-normal text-zinc-400">0{index + 1}</span>{title}</h2>
          <p className="max-w-3xl leading-relaxed text-zinc-600 sm:text-lg">{description}</p>
        </section>
      ))}

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

      <section>
        <h2 className={heading}>Performance & Lighthouse</h2>
        <p className={body}>{study.performance}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {hoodmoodLighthouse.map((report) => (
            <div key={report.device} className={tile}>
              <h3 className="text-lg font-semibold">{report.device}</h3>
              <dl className="mt-5 grid grid-cols-2 gap-6">
                {[["Performance", report.performance], ["Accessibility", report.accessibility], ["Best Practices", report.bestPractices], ["SEO", report.seo]].map(([label, value]) => (
                  <div key={label}><dt className="text-sm text-zinc-600">{label}</dt><dd className="mt-1 text-3xl font-semibold tabular-nums text-emerald-700">{value}<span className="text-sm font-normal text-zinc-500"> / 100</span></dd></div>
                ))}
              </dl>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-zinc-500">Lighthouse snapshots from 18 October 2026. Scores reflect these individual test runs and may vary with test conditions.</p>
        <div className="mt-8 space-y-8">
          {hoodmood.media.slice(1).map((media) => (
            <figure key={media.src}>
              <a href={media.src} target="_blank" rel="noopener noreferrer" className="block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900" aria-label={`${media.caption} - open full-size screenshot in a new tab`}>
                <Image src={media.src} alt={media.alt} width={3600} height={2338} sizes="(min-width: 1280px) 1152px, 100vw" className="h-auto w-full rounded-xl border border-zinc-200" />
              </a>
              <figcaption className="mt-3 text-sm text-zinc-500">{media.caption} · Click to view full size</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section>
        <h2 className={heading}>Outcomes</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {study.outcomes.map((outcome) => (
            <div key={outcome.title} className={tile}>
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500">{outcome.evidence === "client-feedback" ? "Client feedback" : "Technical outcome"}</p>
              <h3 className="text-lg font-semibold">{outcome.title}</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">{outcome.description}</p>
            </div>
          ))}
        </div>
      </section>

      {study.futureDevelopment && (
        <section>
          <h2 className={heading}>Next steps - {study.futureDevelopment.title}</h2>
          <p className="mt-3 text-sm capitalize text-zinc-500">Status: {study.futureDevelopment.status}</p>
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
