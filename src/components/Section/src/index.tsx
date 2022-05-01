import { FC } from "react";
import { SectionProps } from "./types";
import { Container, Content } from "./ui";
import { Title } from "@components/Title";

export const Section: FC<SectionProps> = ({
  children,
  title,
  withBackground,
  testID = Section.name,
}) => {
  return (
    <Container withBackground={withBackground === true} data-testid={testID}>
      <Content>
        <Title level="2">{title}</Title>
        {children}
      </Content>
    </Container>
  );
};
