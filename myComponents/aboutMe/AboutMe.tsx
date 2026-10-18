import Image from "next/image";
import { aboutMe } from "@/public/data/aboutMe";
import SectionTitle from "../sectionTitle/SectionTitle";
import Wrapper from "../wrapper/Wrapper";
import Bento from "./Bento";

export default function AboutMe() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-32">
      <Wrapper>
        <SectionTitle id="about-heading">About me</SectionTitle>
        <Bento
          photo={
            <Image
              src={aboutMe.photo.src}
              alt={aboutMe.photo.alt}
              fill
              sizes="(min-width: 1280px) 368px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            />
          }
          about={aboutMe.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          stack={aboutMe.stack.map((technology) => (
            <span key={technology} className="rounded-full border border-zinc-200 px-3 py-1">
              {technology}
            </span>
          ))}
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
