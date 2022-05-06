import { VFC } from "react";
import { Contact } from "./Contact";
import { Container, List, Item } from "./ui";

export const Contacts: VFC = () => {
  return (
    <Container data-testid={Contacts.name}>
      <List>
        <Item>
          <Contact
            logo="/icons/github.svg"
            href="https://github.com/CedricPradels"
          >
            CedricPradels
          </Contact>
        </Item>
        <Item>
          <Contact
            logo="/icons/map.svg"
            href="geo:48.51138905315791,1.8406906255190933"
          >
            12 rue du comté
            <br />
            78&nbsp;660 Ablis
          </Contact>
        </Item>
      </List>
    </Container>
  );
};
