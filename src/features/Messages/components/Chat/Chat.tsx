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
import Placeholder from "../../../../assets/imgs/profile-placeholder.jpeg";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { ChangeEventHandler, KeyboardEventHandler, useState } from "react";
import { SendMessage } from "../../services/SendMessage";
import { setCurrentMessage } from "../../slices/inboxSlice";
import Message from "../Message/Message";
import Picker from "emoji-picker-react";
import { v4 } from "uuid";
import { MouseDownEvent } from "emoji-picker-react/dist/config/config";

type ChatProps = {
  activeChat: boolean;
};

function Chat({ activeChat }: ChatProps) {
  const dispatch = useAppDispatch();
  const { accessId } = useAppSelector((state) => state.auth);
  const [isEmoji, setIsEmoji] = useState(false);
  const { uid: currentUserId, username } = useAppSelector(
    (state) => state.currentUser
  );
  const roomUsers = useAppSelector(
    (state) => state.inbox.currentRoom?.userInfos
  );
  const targetUser = roomUsers?.find((user) => user.id !== currentUserId);
  const roomId = useAppSelector((state) => state.inbox.currentRoom?.roomId)!;
  const { content, sender, senderId, messageId } = useAppSelector(
    (state) => state.inbox.currentMessage
  );
  const currentRoom = useAppSelector((state) => state.inbox.currentRoom);

  const EmojiHandler: MouseDownEvent = (emojiObject) => {
    dispatch(
      setCurrentMessage({
        content: content + emojiObject.emoji,
        sender: username,
        senderId: accessId!,
        status: "idle",
        messageId: v4(),
      })
    );
    setIsEmoji(false);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(
      setCurrentMessage({
        content: event.target.value,
        sender: username,
        senderId: accessId!,
        status: "idle",
        messageId: v4(),
      })
    );
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key == "Enter") {
      dispatch(
        SendMessage({
          content,
          sender,
          senderId,
          roomId,
          messageId,
        })
      );
    }
  };

  return (
    <div className={styles.chat}>
      {activeChat ? (
        <header>
          <Avatar
            src={targetUser ? targetUser.avatar : Placeholder}
            variant={Variants.inboxHeader}
          />
          <span>{targetUser ? targetUser.username : ""}</span>
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
            {currentRoom ? (
              currentRoom.messages.map((msg) => {
                const avatar = currentRoom.userInfos.find(
                  (user) => user.id !== currentUserId
                )?.avatar;
                return (
                  <Message
                    key={msg.messageId}
                    message_author={msg.sender}
                    message_text={msg.content}
                    avatar_url={avatar!}
                    status={msg.status}
                  />
                );
              })
            ) : (
              <></>
            )}
            <div className={styles.input_wrapper}>
              <img
                onClick={() => setIsEmoji(!isEmoji)}
                src={Emoji}
                alt="emoji"
              />
              <div className={styles.emoji_wrapper}>
                {isEmoji ? (
                  <Picker
                    skinTonesDisabled
                    lazyLoadEmojis
                    onEmojiClick={EmojiHandler}
                  />
                ) : (
                  <></>
                )}
              </div>
              <input
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                value={content}
                type="text"
                placeholder="Message..."
              />
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
