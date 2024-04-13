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
    current_user: {
      description: "ID of the current user loged in",
    },
    avatar_url: {
      description:
        "Url of the message author sent alongside other meta data of message",
    },
    message_text: {
      control: "text",
      description: "The text of message",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Message>;

export const MyMessage: Story = {
  args: {
    message_author: "user1",
    current_user: "user1",
    avatar_url: MockAvatar,
    message_text: "Hello there!",
  },
};

export const ContactMessage: Story = {
  args: {
    message_author: "user2",
    current_user: "user1",
    avatar_url: MockAvatar,
    message_text: "Are you ready?",
  },
};
