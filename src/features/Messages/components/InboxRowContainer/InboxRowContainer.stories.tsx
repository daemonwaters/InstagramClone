import type { StoryObj, Meta } from "@storybook/react";
import InboxRowContainer from "./InboxRowContainer";
import InboxRow from "../InboxRow/InboxRow";
import MockAvatar from "../../../../assets/svgs/avatarmock.svg";

const meta: Meta<typeof InboxRowContainer> = {
  title: "Components/InboxRowContainer",
  component: InboxRowContainer,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    current_username: {
      control: "text",
      description: "username of the current logged in user",
    },
    children: {
      description: "An array of inbox rows",
    },
  },
};

export default meta;
type Story = StoryObj<typeof InboxRowContainer>;

export const Default: Story = {
  render: () => (
    <InboxRowContainer current_username="username">
      {Array.from(Array(8)).map(() => (
        <InboxRow
          user_avatar={MockAvatar}
          username="username"
          last_msg="Hello there!"
          id="123"
        />
      ))}
    </InboxRowContainer>
  ),
};
