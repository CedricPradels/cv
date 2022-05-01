import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Skill } from "@components/Skill";

export default {
  title: "Skill",
  component: Skill,
} as ComponentMeta<typeof Skill>;

const Template: ComponentStory<typeof Skill> = (args) => <Skill {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Styled-components",
  rating: 3,
  logo: "/logos/styled-components.png",
};
