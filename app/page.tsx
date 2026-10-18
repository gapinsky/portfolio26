import Hero from "@/myComponents/hero/Hero";
import Projects from "@/myComponents/projects/Projects";

export default function Home() {
  return (
    <main className="flex-1 bg-zinc-100 font-sans">
      <Hero />
      <Projects />
    </main>
  );
}
