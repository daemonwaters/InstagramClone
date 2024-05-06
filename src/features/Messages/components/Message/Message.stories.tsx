import type { Meta, StoryObj } from "@storybook/react";
import Message from "./Message";
import MockAvatar from "../../../../assets/svgs/avatarmock.svg";

const meta: Meta<typeof Message> = {
  title: "Components/Message",
  component: Message,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    message_author: {
      description:
        "An indicator in form of number or string showing the message's author",
    },
    avatar_url: {
      description:
        "Url of the message author sent alongside other meta data of message",
    },
    message_text: {
      control: "text",
      description: "The text of message",
    },
    status: {
      description: "String describing the current state of the message",
      control: "select",
      options: ["idle", "pending", "succuss", "fail"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Message>;

export const MyMessage: Story = {
  args: {
    message_author: "user1",
    avatar_url: MockAvatar,
    message_text: "Hello there!",
    status : "succuss"
  },
};

export const ContactMessage: Story = {
  args: {
    message_author: "user2",
    avatar_url: MockAvatar,
    message_text: "Are you ready?",
    status : "succuss"
  },
};
