import { Experiences } from "@components/Experiences";
import { Other } from "@components/Other";
import { Introduction } from "@components/Introduction";
import { Skills } from "@components/Skills";
import { Training } from "@components/Training";
import { Contacts } from "@components/Contacts";
import { VFC } from "react";
import { Container, Wrapper } from "./ui";

export const Cv: VFC = () => {
  return (
    <Container data-testid={Cv.name}>
      <Introduction />
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
      <Contacts />
    </Container>
  );
};
