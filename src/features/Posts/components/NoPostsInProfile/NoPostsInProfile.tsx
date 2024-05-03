import { IoCameraOutline } from "react-icons/io5";
import styles from "./NoPostsInProfile.module.scss";

function NoPostsInProfile() {
  return (
    <div className={styles.wrapper}>
      <IoCameraOutline />
      <h1>No posts yet</h1>
    </div>
  );
}

export default NoPostsInProfile;
