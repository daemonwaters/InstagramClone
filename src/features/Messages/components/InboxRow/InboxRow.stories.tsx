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
      control: "text",
      description: "last message sent by the user",
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
    last_msg: "hello there!",
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
          {args.username}: {args.last_msg}
        </p>
      </div>
    </div>
  ),
};
