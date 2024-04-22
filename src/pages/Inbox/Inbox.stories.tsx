import type { Meta, StoryObj } from "@storybook/react";
import Inbox from "./Inbox";
import styles from "./Inbox.module.scss";
import chatStyles from "../../features/Messages/components/Chat/Chat.module.scss";
import Navigation from "../../components/Navigation/Navigation";
import InboxRowContainer from "../../features/Messages/components/InboxRowContainer/InboxRowContainer";
import InboxRow from "../../features/Messages/components/InboxRow/InboxRow";
import Message from "../../features/Messages/components/Message/Message";
import Avatar, { Variants } from "../../components/Avatar/Avatar";
import MockAvatar from "../../assets/svgs/avatarmock.svg";
import Call from "../../assets/svgs/call.svg";
import VideoCall from "../../assets/svgs/videocall.svg";
import Info from "../../assets/svgs/info.svg";
import Emoji from "../../assets/svgs/emoji.svg";
import Record from "../../assets/svgs/record.svg";
import Gallery from "../../assets/svgs/gallery.svg";
import Heart from "../../assets/svgs/heart.svg";
import Preview from "../../assets/svgs/chat-preview.svg";
import Chat from "../../features/Messages/components/Chat/Chat";
import { useState } from "react";
import { MockMessages as messages } from "../../features/Messages/components/Chat/Chat.stories";
import { expect, userEvent, within } from "@storybook/test";
import { withRedux } from "../../helpers/decorators/withRedux";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";

const MockContacts = Array.from(Array(8));

const meta: Meta<typeof Inbox> = {
  title: "Pages/Inbox",
  component: Inbox,
  decorators: [withRedux, withRouter],
  parameters: {
    layout: "fullscreen",
    reactRouter: reactRouterParameters({
      routing: {
        path: "/inbox",
      },
    }),
  },
};

export default meta;
type Story = StoryObj<typeof Inbox>;

export const InboxDefault: Story = {
  render: () => {
    const [activeChat] = useState(false);

    return (
      <div className={styles.inbox_page}>
        <Navigation variant="decreased" />
        <InboxRowContainer current_username={"username"}>
          {MockContacts.map(() => (
            <InboxRow
              user_avatar={MockAvatar}
              username="username"
              last_msg="Hey whats up!"
            />
          ))}
        </InboxRowContainer>
        <Chat activeChat={activeChat} />
      </div>
    );
  },
};

export const InboxActiveChat: Story = {
  render: () => {
    const [activeChat] = useState(true);
    return (
      <div className={styles.inbox_page}>
        <Navigation variant="decreased" />
        <InboxRowContainer current_username={"username"}>
          {MockContacts.map(() => (
            <InboxRow
              user_avatar={MockAvatar}
              username="username"
              last_msg="Hey whats up!"
            />
          ))}
        </InboxRowContainer>
        <div className={chatStyles.chat}>
          {activeChat ? (
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
          <div className={chatStyles.chat_preview}>
            {!activeChat ? (
              <div className={chatStyles.preview_wrapper}>
                <img src={Preview} alt="Send a message" />
                <span>Your messages</span>
                <p>Send private photos and messages to a friend or group.</p>
              </div>
            ) : (
              <div className={chatStyles.messages_wrapper}>
                {messages.map((msg) => (
                  <Message
                    current_user={msg.current_user!}
                    avatar_url={msg.avatar_url!}
                    message_author={msg.message_author!}
                    message_text={msg.message_text!}
                  />
                ))}
                <div className={chatStyles.input_wrapper}>
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
      </div>
    );
  },
};

export const TestCase: Story = {
  render: () => {
    const [activeChat, setActiveChat] = useState(false);
    const handleClick = () => {
      setActiveChat(true);
    };
    return (
      <div className={styles.inbox_page}>
        <Navigation variant="decreased" />
        <InboxRowContainer current_username={"username"}>
          {MockContacts.map(() => (
            <div data-testid="contact" onClick={handleClick}>
              <InboxRow
                user_avatar={MockAvatar}
                username="username"
                last_msg="Hey whats up!"
              />
            </div>
          ))}
        </InboxRowContainer>
        <div className={chatStyles.chat}>
          {activeChat ? (
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
          <div className={chatStyles.chat_preview}>
            {!activeChat ? (
              <div className={chatStyles.preview_wrapper}>
                <img src={Preview} alt="Send a message" />
                <span>Your messages</span>
                <p>Send private photos and messages to a friend or group.</p>
              </div>
            ) : (
              <div className={chatStyles.messages_wrapper}>
                {messages.map((msg) => (
                  <div data-testid="message">
                    <Message
                      current_user={msg.current_user!}
                      avatar_url={msg.avatar_url!}
                      message_author={msg.message_author!}
                      message_text={msg.message_text!}
                    />
                  </div>
                ))}
                <div className={chatStyles.input_wrapper}>
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
      </div>
    );
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const contacts = canvas.getAllByTestId("contact");
    const random_contact = Math.floor(Math.random() * 8);
    await step("The user should click on a random contact", async () => {
      await userEvent.click(contacts[random_contact], { delay: 300 });
    });

    await step("The chat should become active and show messages", async () => {
      await expect(canvas.getByText("Hello there!")).toBeInTheDocument();
    });
  },
};
