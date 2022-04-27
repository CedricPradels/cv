import { VFC } from "react";
import { SkillProps } from "./types";
import { Container, Icon, Label, Rating } from "./ui";

export const Skill: VFC<SkillProps> = ({ label, logo, rating }) => {
  return (
    <Container data-testid={Skill.name}>
      <Icon url={logo} />
      <Label>{label}</Label>

      {Array.from(Array(3), (_, i) => (
        <Rating key={i} active={i < rating} />
      ))}
    </Container>
  );
};
