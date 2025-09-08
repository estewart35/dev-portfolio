"use client";
import { useState } from "react";
import Container from "@/components/Container";
import { projectsData } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.slice(0, 2).map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
          <CollapsibleContent className="contents">
            {projectsData.slice(2).map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </CollapsibleContent>
        </div>
        <div className="flex justify-center mt-10">
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="font-good-times">
              {isOpen ? "Show Less" : "Show More"}
              <ChevronDown
                className={`size-5 transform transition-transform duration-500 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </Button>
          </CollapsibleTrigger>
        </div>
      </Collapsible>
    </Container>
  );
};

export default Projects;
