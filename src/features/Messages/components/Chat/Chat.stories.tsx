import type { StoryObj, Meta } from "@storybook/react";
import Chat from "./Chat";
import MockAvatar from "../../../../assets/svgs/avatarmock.svg";

const meta: Meta<typeof Chat> = {
  title: "Components/Chat",
  component: Chat,
  tags: ["autodocs"],
  argTypes: {
    current_user_avatar: {
      description: "Img url of the current user logged in",
    },
    username: {
      description: "username of the current user logged in",
    },
    activeChat: {
      description:
        "Specifies if there's an active chat with one of user's inbox contacts ",
    },
    messages: {
      description:
        "An array of all the messages between the two users , if there's an active chat",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chat>;

export const ChatDefault: Story = {
  args: {
    activeChat: false,
  },
};

export const ChatActive: Story = {
  args: {
    username: "username",
    activeChat: true,
    current_user_avatar: MockAvatar,
    messages: [],
  },
};
