import { FC } from "react";
import { ContactProps } from "./types";
import { Container, Icon } from "./ui";

export const Contact: FC<ContactProps> = ({ href, logo, children }) => {
  return (
    <Container href={href}>
      <Icon src={logo} />
      {children}
    </Container>
  );
};
