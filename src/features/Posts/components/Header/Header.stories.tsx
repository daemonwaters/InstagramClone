import type { StoryObj, Meta } from "@storybook/react";
import Header from "./Header";
import MockAvatar from "../../../../assets/svgs/avatarmock.svg";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/w3VRMXqFv6LRfIF9O4QFt1/Layouts?type=design&node-id=7%3A1487&mode=design&t=tgOyFlvSuRM4FvUo-1",
    },
  },
  argTypes: {
    user_avatar_url: {
      control: "text",
      description:
        "Url passed down to the header component displaying the author avatar",
    },
    username: {
      control: "text",
      description: "Username of the post author",
    },
    date: {
      control: "text",
      description: "Display when the post was published",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    user_avatar_url: MockAvatar,
    username: "randomusername",
    date: "1d",
  },
};

export const Playground: Story = {
  args: {
    ...Default.args,
  },
};
