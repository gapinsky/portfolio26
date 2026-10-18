import Link from "next/link";
import Wrapper from "@/myComponents/wrapper/Wrapper";
import { ArrowUpRight, } from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="text-zinc-900"
    >
      <Wrapper>
        <div className="mb-7 flex items-center gap-3 text-sm  sm:text-base">
          <span
            aria-hidden="true"
            className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-400/10"
          >
            <span className="flex size-4 items-center justify-center rounded-full border border-emerald-400">
              <span className="size-2 rounded-full bg-emerald-400" />
            </span>
          </span>
          <span className="min-w-0">Driven to build. Ready to deliver.</span>
        </div>

        <h1
          id="hero-heading"
          className="text-4xl font-semibold tracking-tight sm:text-5xl"
        >
          Hi, I&apos;m Antoni.
        </h1>
        <p className="mt-6 text-2xl font-medium tracking-tight  sm:mt-8 sm:text-4xl text-zinc-800">
          I turn complex problems into digital solutions.
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed  sm:text-xl text-zinc-800">
          Software developer specializing in React, Next.js and TypeScript,
          expanding into full-stack development. I take ideas from concept to
          production - combining business understanding, thoughtful design and
          technical problem-solving to build products that deliver real value.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link
            href="/#projects"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 text-base font-medium transition-colors border border-zinc-900 bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
          >
            View Projects
            <ArrowUpRight aria-hidden="true" className="size-5" />
          </Link>
          <a
            href="https://github.com/gapinsky"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border bg-zinc-900 text-zinc-100 px-6 py-3 text-base font-medium  transition-colors  focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
          >
            GitHub
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.64 0c2.15-1.45 3.1-1.15 3.1-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.64 5.27-5.15 5.55.4.35.76 1.03.76 2.08v3.11c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" />
            </svg>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </Wrapper>
    </section>
  );
}
