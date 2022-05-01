import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Skills } from "@components/Skills";

export default {
  title: "Skills",
  component: Skills,
} as ComponentMeta<typeof Skills>;

const Template: ComponentStory<typeof Skills> = (args) => <Skills {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Styled-components",
  rating: 3,
  logo: "/logos/styled-components.png",
};
