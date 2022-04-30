import { Skill } from "@components/Skill";
import { useMemo, VFC } from "react";
import { SkillsWrapper, SkillsList } from "./ui";

import { skills } from "./data";
import { Section } from "@components/Section";
import { split } from "@utils/split";

export const Skills: VFC = () => {
  const skillsColumns = useMemo(() => split(3)(skills), []);

  return (
    <Section title="Compétences" testID={Skills.name}>
      <SkillsWrapper>
        {skillsColumns.map((skills, i) => (
          <SkillsList key={i}>
            {skills.map(({ label, logo, rating }) => (
              <Skill key={label} label={label} logo={logo} rating={rating} />
            ))}
          </SkillsList>
        ))}
      </SkillsWrapper>
    </Section>
  );
};
