import Avatar, { Variants } from "../../../../components/Avatar/Avatar";
import { SearchResultData, selectUserToChat } from "../../slices/inboxSlice";
import styles from "./SearchResult.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";

type SearchResultProps = SearchResultData;

function SearchResult(props: SearchResultProps) {
  const selectedUserId = useAppSelector(
    (state) => state.inbox.selectedUser?.id
  );
  const rooms = useAppSelector((state) => state.inbox.rooms);
  const dispatch = useAppDispatch();
  const handleSelectResult = () => {
    if (!rooms.find((room) => room.between.includes(props.username))) {
      dispatch(selectUserToChat(props));
    }
  };

  return (
    <div
      style={{
        opacity: rooms.find((room) => room.between.includes(props.username))
          ? 0.4
          : 1,
      }}
      onClick={handleSelectResult}
      className={styles.search_result}
    >
      <Avatar variant={Variants.inboxHeader} src={props.avatar} />
      <span className={styles.username}>{props.username}</span>
      <div className={styles.select_btn}>
        {props.id === selectedUserId ? <span></span> : <></>}
      </div>
    </div>
  );
}

export default SearchResult;
