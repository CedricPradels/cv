import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Contacts } from "@components/Contacts";

export default { title: "Contacts", component: Contacts } as ComponentMeta<
  typeof Contacts
>;

const Template: ComponentStory<typeof Contacts> = (args) => (
  <Contacts {...args} />
);

export const Primary = Template.bind({});
