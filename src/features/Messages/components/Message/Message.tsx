import React from "react";
import styles from "./Message.module.scss";
import Avatar, { Variants } from "../../../../components/Avatar/Avatar";
type MessageProps = {
  message_author: string;
  current_user: string;
  avatar_url: string;
  message_text: string;
};

function Message({
  message_author,
  current_user,
  avatar_url,
  message_text,
}: MessageProps) {
  return (
    <div className={styles.message}>
      {message_author !== current_user ? (
        <Avatar variant={Variants.msg} src={avatar_url} />
      ) : (
        <></>
      )}
      <div
        id={
          styles[
            message_author !== current_user ? "contact_message" : "my_message"
          ]
        }
        className={styles.text}
      >
        {message_text}
      </div>
    </div>
  );
}

export default Message;
