import type { StoryObj, Meta } from "@storybook/react";
import ListItem from "./ListItem";
import MockIcon from "../../assets/svgs/home.svg";
import AvatarMock from "../../assets/svgs/avatarmock.svg";
import { withRedux } from "../../helpers/decorators/withRedux";

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
    extraStyles: {
      control: "object",
      description: "Any extra styling that list item should have",
    },
    hasAvatar: {
      description: "Specifies if the list item has an Avatar instead of icon",
    },
  },
  parameters: {
    layout: "padded",
  },
  decorators: [withRedux],
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
    ...IconOnly.args,
    extraStyles: { width: "fit-content", background: "#1A1A1A" },
  },
};

export const DefaultWithAvatar: Story = {
  args: {
    variant: "default",
    icon: AvatarMock,
    title: "Profile",
    hasAvatar: true,
  },
};

export const DefaultWithAvatarHoverState: Story = {
  args: {
    ...DefaultWithAvatar.args,
    extraStyles: { background: "#1A1A1A" },
  },
};

export const IconOnlyWithAvatar: Story = {
  args: {
    ...IconOnly.args,
    icon: AvatarMock,
    title: "Profile",
    hasAvatar: true,
  },
};

export const IconOnlyWithAvatarHoverState: Story = {
  args: {
    ...IconOnlyWithAvatar.args,
    extraStyles: { background: "#1A1A1A", width: "fit-content" },
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
