import styles from "./Inbox.module.scss";
import Navigation from "../../components/Navigation/Navigation";
import InboxRowContainer from "../../features/Messages/components/InboxRowContainer/InboxRowContainer";
import Chat from "../../features/Messages/components/Chat/Chat";
import { ImFileEmpty } from "react-icons/im";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import NewMessageModal from "../../features/Messages/components/NewMessageModal/NewMessageModal";
import InboxRow from "../../features/Messages/components/InboxRow/InboxRow";
import { useEffect } from "react";
import {
  clearCurrentRoom,
  setChatActivity,
} from "../../features/Messages/slices/inboxSlice";
import { GetMyRooms } from "../../features/Messages/services/GetMyRooms";

function Inbox() {
  const { isModalOnScreen, isChatActive, rooms } = useAppSelector(
    (state) => state.inbox
  );
  const { username, uid } = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setChatActivity(false));
    dispatch(clearCurrentRoom());
    dispatch(GetMyRooms(username));
  }, []);

  return (
    <div className={styles.inbox_page}>
      <Navigation variant="decreased" />
      <InboxRowContainer current_username={username}>
        {rooms.length !== 0 ? (
          rooms.map((room) => {
            const targetUser = room.userInfos.find((user) => user.id !== uid)!;
            return (
              <InboxRow
                key={targetUser.id}
                user_avatar={targetUser.avatar}
                username={targetUser.username}
                last_msg={room.messages[room.messages.length - 1]?.content}
                id={room.roomId}
              />
            );
          })
        ) : (
          <div className={styles.empty}>
            <ImFileEmpty />
            <span>Your messages are empty.</span>
          </div>
        )}
      </InboxRowContainer>
      <Chat activeChat={isChatActive} />
      {isModalOnScreen ? <NewMessageModal /> : <></>}
    </div>
  );
}

export default Inbox;
