import styles from "./Story.module.scss";
import Avatar, { Variants } from "../../../../components/Avatar/Avatar";

type StoryProps = {
  avatar_url: string;
  username: string;
};

function Story({ avatar_url, username }: StoryProps) {
  return (
    <div className={styles.story}>
      <Avatar src={avatar_url} variant={Variants.story} />
      <span>{username}</span>
    </div>
  );
}

export default Story;
