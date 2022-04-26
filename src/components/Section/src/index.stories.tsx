import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Section } from "@components/Section";

export default {
  title: "Section",
  component: Section,
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  title: "Hello World",
  children: (
    <ul>
      <li>I</li>
      <li>am</li>
      <li>children</li>
    </ul>
  ),
};
