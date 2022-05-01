import { FC } from "react";
import { ListProps } from "./types";
import { Container, Item } from "./ui";

export const List: FC<ListProps> = ({ items }) => {
  return (
    <Container>
      {items.map((item, i) => (
        <Item key={i}>{item}</Item>
      ))}
    </Container>
  );
};
