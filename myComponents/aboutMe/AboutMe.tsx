import Image from "next/image";
import { aboutMe } from "@/public/data/aboutMe";
import SectionTitle from "../sectionTitle/SectionTitle";
import Wrapper from "../wrapper/Wrapper";
import Bento from "./Bento";
import { cn } from "@/lib/utils";

const stackBorderColors: Record<string, string> = {
  React: "border-[#61DAFB]",
  "Next.js": "border-zinc-900",
  TypeScript: "border-[#3178C6]",
  "Tailwind CSS": "border-[#06B6D4]",
  Git: "border-[#F05032]",
  "Node.js": "border-[#5FA04E]",
  Figma: "border-[#A259FF]",
};

export default function AboutMe() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-32">
      <Wrapper>
        <SectionTitle id="about-heading">About me</SectionTitle>
        <Bento
          photo={
            <Image quality={75}
              src={aboutMe.photo.src}
              alt={aboutMe.photo.alt}
              fill
              sizes="(min-width: 1280px) 368px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            />
          }
          about={aboutMe.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          stack={
            <ul role="list" className="space-y-4 font-semibold list-none p-0">
              {aboutMe.stack.map((technology) => (
                <li
                  key={technology}
                  className={cn(
                    "min-w-0 max-w-full rounded-full border px-3 py-1",
                    stackBorderColors[technology] ?? "border-zinc-300",
                  )}
                >
                  {technology}
                </li>
              ))}
            </ul>
          }
          skills={
            <ul className="list-disc space-y-2 pl-5">
              {aboutMe.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          }
          softSkills={
            <ul className="list-disc space-y-2 pl-5">
              {aboutMe.softSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          }
        />
      </Wrapper>
    </section>
  );
}
