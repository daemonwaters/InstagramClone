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
type ChatProps = {
  activeChat: boolean;
};

function Chat({ activeChat }: ChatProps) {
  return (
    <div className={styles.chat}>
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
      <div className={styles.chat_preview}>
        {!activeChat ? (
          <div className={styles.preview_wrapper}>
            <img src={Preview} alt="Send a message" />
            <span>Your messages</span>
            <p>Send private photos and messages to a friend or group.</p>
          </div>
        ) : (
          <div className={styles.messages_wrapper}>
            {/* this is where messages go */}
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
  );
}

export default Chat;
