import { VFC } from "react";
import { SkillProps } from "./types";
import { Container, Icon, Label, Rating, RatingWrapper } from "./ui";

export const Skill: VFC<SkillProps> = ({ label, logo, rating }) => {
  return (
    <Container>
      <Icon url={logo} />
      <Label>{label}</Label>
      <RatingWrapper>
        {Array.from(Array(3), (_, i) => (
          <Rating key={i} active={i < rating} />
        ))}
      </RatingWrapper>
    </Container>
  );
};
