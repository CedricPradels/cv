import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Cv } from "@components/Cv";

export default {
  title: "Cv",
  component: Cv,
} as ComponentMeta<typeof Cv>;

const Template: ComponentStory<typeof Cv> = (args) => <Cv {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
