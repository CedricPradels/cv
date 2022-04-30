import { FC } from "react";
import { SectionProps } from "./types";
import { Container, Content, Title } from "./ui";

export const Section: FC<SectionProps> = ({
  children,
  title,
  withBackground,
  testID = Section.name,
}) => {
  return (
    <Container withBackground={withBackground === true} data-testid={testID}>
      <Content>
        <Title>{title}</Title>
        {children}
      </Content>
    </Container>
  );
};
