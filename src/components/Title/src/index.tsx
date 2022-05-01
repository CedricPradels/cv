import { FC, FunctionComponent, useMemo } from "react";
import { TitleProps } from "./types";
import { H1, H2, H3 } from "./ui";

export const Title: FC<TitleProps> = ({ children, level }) => {
  const Container = useMemo<FunctionComponent>(
    () =>
      ({
        1: H1,
        2: H2,
        3: H3,
      }[level]),
    [level]
  );

  return <Container data-testid={Title.name}>{children}</Container>;
};
