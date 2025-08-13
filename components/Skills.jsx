"use client";
import { useState } from "react";
import Container from "@/components/Container";
import SkillCard from "./SkillCard";
import { skillsData } from "@/lib/data";
import FilterButtons from "./FilterButtons";

const filterButtons = [
  { value: "all", label: "All" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
];

const Skills = () => {
  const [displayedSkills, setDisplayedSkills] = useState(skillsData);

  const filterBy = (tag) => {
    setDisplayedSkills(
      tag === "all"
        ? skillsData
        : skillsData.filter((skill) => skill.tags?.includes(tag))
    );
  };

  return (
    <Container id="skills" as="section" size="lg" className="py-8">
      <div className="flex flex-col xs:flex-row gap-y-6 items-center xs:justify-between mb-5">
        <h2 className="font-good-times text-2xl">Skills</h2>
        <FilterButtons
          buttons={filterButtons}
          defaultSelection="all"
          filterBy={filterBy}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {displayedSkills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </Container>
  );
};

export default Skills;
