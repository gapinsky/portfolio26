import { experience } from "@/public/data/experience";
import SectionTitle from "../sectionTitle/SectionTitle";
import Wrapper from "../wrapper/Wrapper";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-32 text-zinc-900"
    >
      <Wrapper>
        <SectionTitle id="experience-heading">Experience & education</SectionTitle>
        <ol className="list-none" role="list">
          {experience.map((item) => (
            <li
              key={item.title}
              className="group flex "
            >
              <div className="min-w-0 pb-8 group-last:pb-0 ">
                <p className=" text-sm leading-relaxed text-zinc-500">
                  {item.date}
                </p>
                <h3 className="mb-1 text-xl font-semibold leading-8 tracking-tight  sm:leading-9">
                  {item.title}
                </h3>
                <p className="mb-2 text-sm leading-relaxed text-zinc-500  sm:text-base">
                  {item.subtitle}
                </p>
                <p className=" text-base leading-relaxed text-zinc-700  md:text-lg">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Wrapper>
    </section>
  );
}
