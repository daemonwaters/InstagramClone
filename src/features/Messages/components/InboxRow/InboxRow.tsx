import styles from "./InboxRow.module.scss";
import Avatar, { Variants } from "../../../../components/Avatar/Avatar";
export type InboxRowProps = {
  user_avatar: string;
  username: string;
  last_msg: string;
};

function InboxRow({ user_avatar, username, last_msg }: InboxRowProps) {
  return (
    <div className={styles.inbox_row}>
      <Avatar src={user_avatar} variant={Variants.inboxRow} />
      <div className={styles.inboxmeta}>
        <span>{username}</span>
        <p>
          {username}: {last_msg}
        </p>
      </div>
    </div>
  );
}

export default InboxRow;
