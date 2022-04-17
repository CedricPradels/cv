import { Skill } from "@components/Skill";
import { VFC } from "react";
import { SkillsWrapper } from "./ui";

import { skills } from "./data";
import { Section } from "@components/Srection";

export const Skills: VFC = () => {
  return (
    <Section title="Compétences">
      <SkillsWrapper>
        {skills.map(({ label, logo, rating }) => (
          <li key={label}>
            <Skill label={label} logo={logo} rating={rating} />
          </li>
        ))}
      </SkillsWrapper>
    </Section>
  );
};
