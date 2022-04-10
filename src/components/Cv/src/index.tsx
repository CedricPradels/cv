import { Experiences } from "@components/Experiences";
import { Other } from "@components/Other";
import { Title } from "@components/Title";
import { Skills } from "@components/Skills";
import { Training } from "@components/Training";
import { Contact } from "@components/Contact";
import { VFC } from "react";
import { Container, Footer, Wrapper, Header, HeaderContent } from "./ui";

export const Cv: VFC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <Title />
        </HeaderContent>
      </Header>
      <Skills />
      <Experiences />
      <Wrapper>
        <div>
          <Training />
        </div>
        <div>
          <Other />
        </div>
      </Wrapper>
      <Footer>
        <Contact />
      </Footer>
    </Container>
  );
};
