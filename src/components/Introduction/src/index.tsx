import { VFC } from "react";
import { data } from "./data";
import {
  Container,
  Button,
  Content,
  ButtonWrapper,
  Name,
  Description,
  Illustration,
  Wrapper,
} from "./ui";
import { Title } from "@components/Title";

export const Introduction: VFC = () => {
  return (
    <Container data-testid={Introduction.name}>
      <Name>{data.name}</Name>
      <Content>
        <Wrapper>
          <Title level="1">{data.title}</Title>
          <Description>{data.description}</Description>
          <ButtonWrapper>
            <Button href={"mailto:cedric.pradels@gmail.com"}>
              {data.email}
            </Button>
            <Button href={"tel:+33671370267"} secondary>
              {data.phone}
            </Button>
          </ButtonWrapper>
        </Wrapper>
        <Illustration />
      </Content>
    </Container>
  );
};
