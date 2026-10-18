import Hero from "@/myComponents/hero/Hero";
import AboutMe from "@/myComponents/aboutMe/AboutMe";
import Projects from "@/myComponents/projects/Projects";
import Experience from "@/myComponents/experience/Experience";

export default function Home() {
  return (
    <main className="flex-1 bg-zinc-100 font-sans">
      <Hero />
      <Projects />
      <AboutMe />
      <Experience />
    </main>
  );
}
