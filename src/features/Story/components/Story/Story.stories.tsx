import type { StoryObj, Meta } from "@storybook/react";
import Story from "./Story";
import AvatarMock from "../../../../assets/svgs/avatarmock.svg";

const meta: Meta<typeof Story> = {
  title: "Atoms/Story",
  component: Story,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    avatar_url: {
      control: "text",
      description: "A string containing img url of the story",
    },
    username: {
      control: "text",
      description: "username of the story author",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Story>;

export const Default: Story = {
  args: {
    avatar_url: AvatarMock,
    username: "randomuser",
  },
};
