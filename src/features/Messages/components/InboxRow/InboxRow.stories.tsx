import type { StoryObj, Meta } from "@storybook/react";
import AvatarMock from "../../../../assets/svgs/avatarmock.svg";
import InboxRow from "./InboxRow";
import styles from "./InboxRow.module.scss";
import { Variants } from "../../../../components/Avatar/Avatar";
import Avatar from "../../../../components/Avatar/Avatar";
import { withRedux } from "../../../../helpers/decorators/withRedux";

const meta: Meta<typeof InboxRow> = {
  title: "Components/InboxRow",
  component: InboxRow,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/w3VRMXqFv6LRfIF9O4QFt1/Layouts?type=design&node-id=24%3A82&mode=design&t=j42pi3IDJ2VkMKO1-1",
    },
  },
  argTypes: {
    user_avatar: {
      control: "text",
      description: "A string containing url of the user avatar img",
    },
    username: {
      control: "text",
      description: "A string containing the username",
    },
    last_msg: {
      description: "An object containing the info of last message in chat",
    },
    id: {
      description: "Unique id of the message",
    },
  },
  decorators: [withRedux],
};

export default meta;

type Story = StoryObj<typeof InboxRow>;

export const Default: Story = {
  args: {
    user_avatar: AvatarMock,
    username: "username",
    last_msg: {
      sender: "username",
      senderId: "username123",
      content: "hey",
      status: "succuss",
      messageId: "heyId",
    },
  },
};

export const HoverState: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <div className={styles.inbox_row} id={styles["active"]}>
      <Avatar src={args.user_avatar} variant={Variants.inboxRow} />
      <div className={styles.inboxmeta}>
        <span>{args.username}</span>
        <p>
          {args.last_msg.sender}: {args.last_msg.content}
        </p>
      </div>
    </div>
  ),
};
