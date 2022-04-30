import { VFC } from "react";
import { Section } from "@components/Section";

export const Experiences: VFC = () => {
  return (
    <Section
      withBackground
      testID={Experiences.name}
      title="Expériences"
    ></Section>
  );
};
