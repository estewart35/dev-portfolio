"use client";
import { useState } from "react";
import Container from "@/components/Container";
import SkillCard from "@/components/SkillCard";
import { skills } from "@/lib/data";
import { type Skill } from "@/lib/types";
import FilterButtons from "@/components/FilterButtons";
import { motion, AnimatePresence, type MotionProps } from "motion/react";

const filterButtons = [
  { value: "all", label: "All" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
] as const;

type FilterValue = (typeof filterButtons)[number]["value"];

const cardTransition: MotionProps["transition"] = {
  duration: 0.3,
  ease: "easeInOut",
};

const SkillsSection = () => {
  const [displayedSkills, setDisplayedSkills] = useState<Skill[]>(skills);

  const filterBy = (value: FilterValue) => {
    setDisplayedSkills(
      value === "all"
        ? skills
        : skills.filter((skill) => skill.filters?.includes(value))
    );
  };

  return (
    <Container
      id="skills"
      as="section"
      size="lg"
      bgClassName="scroll-mt-22"
      className="py-8"
    >
      <div className="flex flex-col xs:flex-row gap-y-6 items-center xs:justify-between mb-5">
        <h2 className="font-good-times text-2xl">Skills</h2>
        <FilterButtons
          buttons={filterButtons}
          defaultSelection="all"
          filterBy={filterBy}
        />
      </div>
      <div className="grid grid-cols-3 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <AnimatePresence mode="popLayout">
          {displayedSkills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={cardTransition}
              layout
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Container>
  );
};

export default SkillsSection;
