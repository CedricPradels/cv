import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Training } from "@components/Training";

export default {
  title: "Training",
  component: Training,
} as ComponentMeta<typeof Training>;

const Template: ComponentStory<typeof Training> = (args) => (
  <Training {...args} />
);

export const Primary = Template.bind({});
