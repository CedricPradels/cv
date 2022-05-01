import { VFC } from "react";
import { ListProps } from "./types";
import { Container, Item } from "./ui";

export const List: VFC<ListProps> = ({ items }) => {
  return (
    <Container>
      {items.map((item, i) => (
        <Item key={i}>{item}</Item>
      ))}
    </Container>
  );
};
