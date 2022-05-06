import { List } from "@components/List";
import { Section } from "@components/Section";
import { Title } from "@components/Title";
import { VFC } from "react";
import { data } from "./data";
import { OtherItem } from "./ui";

export const Other: VFC = () => {
  return (
    <Section title="Autre" testID={Other.name}>
      <ul>
        {data.map(({ items, title }) => (
          <OtherItem key={title}>
            <Title level="3">{title}</Title>
            <List items={items} />
          </OtherItem>
        ))}
      </ul>
    </Section>
  );
};
