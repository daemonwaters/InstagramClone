import styles from "./InboxRow.module.scss";
import Avatar, { Variants } from "../../../../components/Avatar/Avatar";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  Message,
  setChatActivity,
  setCurrentRoom,
} from "../../slices/inboxSlice";
export type InboxRowProps = {
  user_avatar: string;
  username: string;
  last_msg: Message;
  id: string;
};

function InboxRow({ user_avatar, username, last_msg, id }: InboxRowProps) {
  const currentRoom = useAppSelector((state) => state.inbox.currentRoom);
  const dispatch = useAppDispatch();
  const handleCurrentRoom = () => {
    dispatch(setCurrentRoom(id));
    dispatch(setChatActivity(true));
  };

  return (
    <div
      id={styles[currentRoom?.roomId == id ? "active" : ""]}
      onClick={handleCurrentRoom}
      className={styles.inbox_row}
    >
      <Avatar src={user_avatar} variant={Variants.inboxRow} />
      <div className={styles.inboxmeta}>
        <span>{username}</span>
        {last_msg ? (
          <p>
            {last_msg.sender}: {last_msg.content}
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default InboxRow;
