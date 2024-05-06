import { createPortal } from "react-dom";
import styles from "./NewMessageModal.module.scss";
import X from "../../../../assets/svgs/xbutton.svg";
import Button from "../../../../components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  clearSearchValue,
  clearSelectedUserToChat,
  setChatActivity,
  setModalVisibility,
  setSearchValue,
} from "../../slices/inboxSlice";
import SearchResult from "../SearchResult/SearchResult";
import { ChangeEventHandler, useEffect } from "react";
import { GetSearchResult } from "../../services/GetSearchResult";
import { CreateRoom } from "../../services/CreateRoom";

function NewMessageModal() {
  const dispatch = useAppDispatch();
  const { searchValue, searchResult, selectedUser } = useAppSelector(
    (state) => state.inbox
  );

  const { username, uid, avatar_url } = useAppSelector(
    (state) => state.currentUser
  );

  const handleNewMessageModal = () => {
    dispatch(setModalVisibility(false));
    dispatch(clearSearchValue());
    dispatch(clearSelectedUserToChat());
  };

  const handleSearchInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setSearchValue(event.target.value));
  };

  useEffect(() => {
    dispatch(GetSearchResult());
  }, []);

  const filteredResults = searchResult.data
    .filter((user) => user.username !== username)
    .filter((user) => {
      return user.username.toLowerCase().includes(searchValue.toLowerCase());
    });

  const handleActiveChat = () => {
    dispatch(setChatActivity(true));
    dispatch(setModalVisibility(false));
    dispatch(clearSearchValue());
    dispatch(
      CreateRoom({
        between: [username, selectedUser!.username],
        userInfos: [
          {
            username,
            avatar: avatar_url,
            id: uid,
          },
          {
            username: selectedUser!.username,
            avatar: selectedUser!.avatar,
            id: selectedUser!.id,
          },
        ],
      })
    );
    dispatch(clearSelectedUserToChat());
  };

  return createPortal(
    <div className={styles.new_message_modal}>
      <div className={styles.content}>
        <header>
          <span>New message</span>
          <img onClick={handleNewMessageModal} src={X} alt="close" />
        </header>
        <div className={styles.input_wrapper}>
          <span>To:</span>
          <input
            type="text"
            placeholder="Search..."
            onChange={handleSearchInput}
            value={searchValue}
          />
        </div>
        <div className={styles.list}>
          {filteredResults.length == 0 ? (
            <p>No accounts found.</p>
          ) : (
            filteredResults.map((result) => (
              <SearchResult key={result.id} {...result} />
            ))
          )}
        </div>
        <footer>
          <Button
            extraStyles={!selectedUser ? { opacity: "0.4" } : {}}
            disable={selectedUser ? false : true}
            onClick={handleActiveChat}
            title="Chat"
            variant="primary"
            type="button"
          />
        </footer>
      </div>
    </div>,
    document.getElementById("new-message-portal")!
  );
}

export default NewMessageModal;
