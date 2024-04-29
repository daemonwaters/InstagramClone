import type { StoryObj, Meta } from "@storybook/react";
import PreviewBlock from "./PreviewBlock";
import AvatarMock from "../../assets/svgs/avatarmock.svg";
import { withRouter } from "storybook-addon-remix-react-router";

const meta: Meta<typeof PreviewBlock> = {
  title: "Components/PreviewBlock",
  component: PreviewBlock,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      description: "Specifies the variant either a profile or suggestion block",
      options: ["profile", "suggestion"],
    },
    avatar_url: {
      control: "text",
      description: "A string containing img url of the user",
    },
    username: {
      control: "text",
      description: "username of the user",
    },
    name: {
      control: "text",
      description: "name of the user in previewblock",
    },
  },
  decorators : [withRouter]
};

export default meta;

type Story = StoryObj<typeof PreviewBlock>;

export const Profile: Story = {
  args: {
    variant: "profile",
    avatar_url: AvatarMock,
    username: "username",
    name: "name",
  },
};

export const Suggestion: Story = {
  args: { ...Profile.args, variant: "suggestion" },
};
