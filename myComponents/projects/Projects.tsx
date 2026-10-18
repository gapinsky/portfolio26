import SectionTitle from "../sectionTitle/SectionTitle"
import Wrapper from "../wrapper/Wrapper"
import { ProjectCard } from "./ProjectCard"
import { projects } from "@/public/data/data"
const Projects = () => {
  return (
    <section>
        <Wrapper>
           <SectionTitle>Featured Projects</SectionTitle> 
           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
           {projects.map((project) => (
               <ProjectCard key={project.name} {...project} />
            ))}
            </div> 
        </Wrapper>
    </section>
  )
}

export default Projects