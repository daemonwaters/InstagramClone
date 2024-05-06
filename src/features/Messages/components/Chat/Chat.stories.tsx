import type { StoryObj, Meta } from "@storybook/react";
import Chat from "./Chat";
import styles from "./Chat.module.scss";
import Avatar, { Variants } from "../../../../components/Avatar/Avatar";
import Call from "../../../../assets/svgs/call.svg";
import VideoCall from "../../../../assets/svgs/videocall.svg";
import Info from "../../../../assets/svgs/info.svg";
import Emoji from "../../../../assets/svgs/emoji.svg";
import Record from "../../../../assets/svgs/record.svg";
import Gallery from "../../../../assets/svgs/gallery.svg";
import Heart from "../../../../assets/svgs/heart.svg";
import Preview from "../../../../assets/svgs/chat-preview.svg";
import MockAvatar from "../../../../assets/svgs/avatarmock.svg";
import Message from "../Message/Message";
import * as MessageStories from "../Message/Message.stories";
import { withRedux } from "../../../../helpers/decorators/withRedux";

export const MockMessages = [
  { ...MessageStories.MyMessage.args },
  { ...MessageStories.MyMessage.args, message_text: "how are you" },
  { ...MessageStories.ContactMessage.args },
  { ...MessageStories.ContactMessage.args, message_text: "Sorry Hi!!" },
];

const meta: Meta<typeof Chat> = {
  title: "Components/Chat",
  component: Chat,
  tags: ["autodocs"],
  excludeStories: ["MockMessages"],
  argTypes: {
    activeChat: {
      description:
        "Specifies if there's an active chat with one of user's inbox contacts ",
    },
  },
  decorators: [withRedux],
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
    activeChat: true,
  },
  render: (args) => (
    <div className={styles.chat}>
      {args.activeChat ? (
        <header>
          <Avatar src={MockAvatar} variant={Variants.inboxHeader} />
          <span>username</span>
          <img className={styles.call} src={Call} alt="call" />
          <img src={VideoCall} alt="video call" />
          <img src={Info} alt="more information" />
        </header>
      ) : (
        <></>
      )}
      <div className={styles.chat_preview}>
        {!args.activeChat ? (
          <div className={styles.preview_wrapper}>
            <img src={Preview} alt="Send a message" />
            <span>Your messages</span>
            <p>Send private photos and messages to a friend or group.</p>
          </div>
        ) : (
          <div className={styles.messages_wrapper}>
            {MockMessages.map((msg) => (
              <Message
                avatar_url={msg.avatar_url!}
                message_author={msg.message_author!}
                message_text={msg.message_text!}
                status={msg.status!}
              />
            ))}

            <div className={styles.input_wrapper}>
              <img src={Emoji} alt="emoji" />
              <input type="text" placeholder="Message..." />
              <img src={Record} alt="Record" />
              <img src={Gallery} alt="Gallery" />
              <img src={Heart} alt="Heart" />
            </div>
          </div>
        )}
      </div>
    </div>
  ),
};
