import Container from "@/components/Container";
import { projectsData } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <Container
      id="projects"
      as="section"
      size="lg"
      bgClassName="scroll-mt-22"
      className="py-8"
    >
      <div className="flex flex-col xs:flex-row gap-y-6 items-center xs:justify-between mb-5">
        <h2 className="font-good-times text-2xl">Projects</h2>
        {/* Add archive button here */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Container>
  );
};

export default Projects;
