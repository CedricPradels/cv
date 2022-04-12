import { VFC } from "react";
import {
  Container,
  Button,
  Content,
  ButtonWrapper,
  Name,
  Description,
  Title,
  Illustration,
  Wrapper,
} from "./ui";

export const Introduction: VFC = () => {
  return (
    <Container>
      <Name>Cédric Pradels</Name>
      <Content>
        <Wrapper>
          <Title>Développeur Web</Title>
          <Description>
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.
          </Description>
          <ButtonWrapper>
            <Button href={"mailto:cedric.pradels@gmail.com"}>
              cedric.pradels@gmail.com
            </Button>
            <Button href={"tel:+33671370267"} secondary>
              06.71.37.02.67
            </Button>
          </ButtonWrapper>
        </Wrapper>
        <Illustration />
      </Content>
    </Container>
  );
};
