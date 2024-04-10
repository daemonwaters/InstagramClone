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
      optioms: ["default", "icon-only", "title-only"],
      description:
        "Specifies the List Item variant either defaulr, icon-only and title-only ",
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
  args: {
    ...Default.args,
    variant: "icon-only",
    extraStyles: { width: "fit-content" },
  },
};

export const DefaultHoverState: Story = {
  args: { ...Default.args, extraStyles: { background: "#1A1A1A" } },
};

export const IconOnlyHoverState: Story = {
  args: {
    ...Default.args,
    variant: "icon-only",
    extraStyles: { width: "fit-content", background: "#1A1A1A" },
  },
};

export const OverlayDefault: Story = {
  args: {
    variant: "default",
    icon: MockIcon,
    title: "Home",
    extraStyles: {
      width: "250px",
      height: "50px",
      background: "#262626",
    },
  },
};

export const OverlayDefaultHoverState: Story = {
  args: {
    ...OverlayDefault.args,
    extraStyles: {
      width: "250px",
      height: "50px",
      background: "#3C3C3C",
    },
  },
};

export const OverlayTitleOnly: Story = {
  args: {
    ...OverlayDefault.args,
    variant: "title-only",
  },
};

export const OverlayTitleOnlyHoverState: Story = {
  args: {
    ...OverlayDefaultHoverState.args,
    variant: "title-only",
  },
};
