import { ComponentStory, ComponentMeta } from "@storybook/react";

import { List } from "@components/List";

export default {
  title: "List",
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  items: ["Foo", "Bar"],
};
