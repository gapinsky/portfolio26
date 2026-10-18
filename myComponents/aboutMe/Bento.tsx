import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BentoProps = {
  photo: ReactNode;
  about: ReactNode;
  stack: ReactNode;
  skills: ReactNode;
  softSkills: ReactNode;
  className?: string;
};

const tileClassName =
  "min-w-0 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8";

export default function Bento({
  photo,
  about,
  stack,
  skills,
  softSkills,
  className,
}: BentoProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 text-zinc-900 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6",
        className,
      )}
    >
      <div className="relative min-w-0 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 aspect-[4/5] sm:aspect-auto sm:min-h-80 [&>img]:h-full [&>img]:w-full [&>img]:object-cover">
        {photo}
      </div>

      <div className={cn(tileClassName, "lg:col-span-2")}>
        <h3 className="mb-4 text-xl font-semibold tracking-tight sm:text-2xl">
          About me
        </h3>
        <div className="space-y-4 text-base leading-relaxed text-zinc-600 [overflow-wrap:anywhere]">
          {about}
        </div>
      </div>

      <div className={tileClassName}>
        <h3 className="mb-4 text-xl font-semibold tracking-tight sm:text-2xl">
          Stack
        </h3>
        <div className="flex flex-wrap gap-2 text-sm leading-relaxed text-zinc-600 [overflow-wrap:anywhere] [&>*]:min-w-0 [&>*]:max-w-full">
          {stack}
        </div>
      </div>

      <div className={tileClassName}>
        <h3 className="mb-4 text-xl font-semibold tracking-tight sm:text-2xl">
          Skills
        </h3>
        <div className="space-y-3 text-base leading-relaxed text-zinc-600 [overflow-wrap:anywhere]">
          {skills}
        </div>
      </div>

      <div className={cn(tileClassName, "sm:col-span-2 lg:col-span-1")}>
        <h3 className="mb-4 text-xl font-semibold tracking-tight sm:text-2xl">
          Soft skills
        </h3>
        <div className="space-y-3 text-base leading-relaxed text-zinc-600 [overflow-wrap:anywhere]">
          {softSkills}
        </div>
      </div>
    </div>
  );
}
