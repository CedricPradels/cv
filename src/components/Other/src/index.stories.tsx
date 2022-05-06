import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Other } from "@components/Other";

export default {
  title: "Other",
  component: Other,
} as ComponentMeta<typeof Other>;

const Template: ComponentStory<typeof Other> = (args) => <Other {...args} />;

export const Primary = Template.bind({});
