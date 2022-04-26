import { FC } from "react";
import { SectionProps } from "./types";
import { Container, Title } from "./ui";

export const Section: FC<SectionProps> = ({ children, title }) => {
  return (
    <Container data-testid={Section.name}>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};
