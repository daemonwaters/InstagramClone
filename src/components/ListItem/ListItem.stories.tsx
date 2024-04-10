import type { StoryObj, Meta } from "@storybook/react";
import ListItem from "./ListItem";
import MockIcon from "../../assets/svgs/home.svg";

const meta: Meta<typeof ListItem> = {
  title: "Atoms/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      optioms: ["default", "icon-only"],
      description:
        "Specifies the List Item variant either defaulr or icon-only",
    },
    icon: {
      description: "The path to the svg icon used in the list item",
    },
    title: {
      control: "text",
      description: "The title of the list item",
    },
    children: {
      description:
        "Jsx elements or React nodes passed down to the component via props",
    },
  },
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
  args: {
    variant: "default",
    icon: MockIcon,
    title: "Home",
  },
};

export const IconOnly: Story = {
  args: { ...Default.args, variant: "icon-only" },
};
