import Avatar, { Variants } from "../../../../components/Avatar/Avatar";
import styles from "./SearchResult.module.scss";

type SearchResultProps = {
  avatar: string;
  username: string;
};

function SearchResult({ avatar, username }: SearchResultProps) {
  return (
    <div className={styles.search_result}>
      <Avatar variant={Variants.inboxHeader} src={avatar} />
      <span className={styles.username}>{username}</span>
    </div>
  );
}

export default SearchResult;
