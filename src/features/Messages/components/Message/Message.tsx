import styles from "./Message.module.scss";
import Avatar, { Variants } from "../../../../components/Avatar/Avatar";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import Spinner from "../../../../assets/svgs/spinner.svg";

export type MessageProps = {
  message_author: string;
  avatar_url: string;
  message_text: string;
  status: string;
};

function Message(props: MessageProps) {
  const { message_author, message_text, avatar_url, status } = props;
  const { username } = useAppSelector((state) => state.currentUser);

  return (
    <div className={styles.message}>
      {message_author !== username ? (
        <Avatar variant={Variants.msg} src={avatar_url} />
      ) : (
        <></>
      )}
      <div
        id={
          styles[message_author !== username ? "contact_message" : "my_message"]
        }
        className={styles.text}
      >
        {message_text}
        <div
          id={
            styles[message_author !== username ? "contact_status" : "my_status"]
          }
          className={styles.status}
        >
          {status == "pending" ? (
            <img src={Spinner} alt="loading" />
          ) : status == "succuss" ? (
            <FaCheck />
          ) : (
            <FaXmark />
          )}
        </div>
      </div>
    </div>
  );
}

export default Message;
