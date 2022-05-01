import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Experiences } from "@components/Experiences";

export default {
  title: "Experiences",
  component: Experiences,
} as ComponentMeta<typeof Experiences>;

const Template: ComponentStory<typeof Experiences> = (args) => (
  <Experiences {...args} />
);

export const Default = Template.bind({});
