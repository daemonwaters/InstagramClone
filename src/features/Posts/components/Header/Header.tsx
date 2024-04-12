import styles from "./Header.module.scss";
import Avatar from "../../../../components/Avatar/Avatar";
Avatar;
import { Variants } from "../../../../components/Avatar/Avatar";
import Dots from "../../../../assets/svgs/dots.svg";

type HeaderProps = {
  user_avatar_url: string;
  username: string;
  date: string;
};

function Header({ user_avatar_url, username, date }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Avatar src={user_avatar_url} variant={Variants.userPreview} />
      <span className={styles.username}>{username}</span>
      <span className={styles.date}>{date}</span>
      <img src={Dots} alt="More options" />
    </header>
  );
}

export default Header;
