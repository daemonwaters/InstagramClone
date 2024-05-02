import styles from "./FeedNoPosts.module.scss";
import NoPosts from "../../../../assets/imgs/no-posts.webp";

function FeedNoPosts() {
  return (
    <div className={styles.wrapper}>
      <img src={NoPosts} alt="no-posts" />
      <span>
        No posts to show , start following other people to see their content!
      </span>
    </div>
  );
}

export default FeedNoPosts;
