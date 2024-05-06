import styles from "./InboxRow.module.scss";
import Avatar, { Variants } from "../../../../components/Avatar/Avatar";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { setChatActivity, setCurrentRoom } from "../../slices/inboxSlice";
export type InboxRowProps = {
  user_avatar: string;
  username: string;
  last_msg: string;
  id: string;
};

function InboxRow({ user_avatar, username, last_msg, id }: InboxRowProps) {
  const dispatch = useAppDispatch();
  const handleCurrentRoom = () => {
    dispatch(setCurrentRoom(id));
    dispatch(setChatActivity(true));
  };

  return (
    <div onClick={handleCurrentRoom} className={styles.inbox_row}>
      <Avatar src={user_avatar} variant={Variants.inboxRow} />
      <div className={styles.inboxmeta}>
        <span>{username}</span>
        {last_msg ? (
          <p>
            {username}: {last_msg}
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default InboxRow;
