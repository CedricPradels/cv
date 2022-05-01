import { VFC } from "react";
import { Section } from "@components/Section";
import { data } from "./data";
import { Title } from "@components/Title";
import { List } from "@components/List";
import { getDateString } from "@utils/getDateString";
import { Experience } from "./ui";

export const Experiences: VFC = () => {
  return (
    <Section withBackground testID={Experiences.name} title="Expériences">
      <ul>
        {data.map(({ company, end, job, missions, start }, i) => (
          <Experience key={i}>
            <Title level="3">{`${
              end === null ? "Maintenant" : getDateString(end)
            } – ${getDateString(start)} – ${company} – ${job}`}</Title>

            <List items={missions} />
          </Experience>
        ))}
      </ul>
    </Section>
  );
};
