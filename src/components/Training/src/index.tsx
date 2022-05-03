import { VFC } from "react";

import { List } from "@components/List";
import { Section } from "@components/Section";
import { Title } from "@components/Title";
import { getDateString } from "@utils/getDateString";

import { TrainingItem } from "./ui";
import { data } from "./data";

export const Training: VFC = () => {
  return (
    <Section title="Formations" testID={Training.name}>
      <ul>
        {data.map(({ date, school, title, themes }) => (
          <TrainingItem key={title}>
            <Title level="3">
              {`${getDateString(date)} – ${title} – ${school}`}
            </Title>
            {themes && <List items={themes} />}
          </TrainingItem>
        ))}
      </ul>
    </Section>
  );
};
