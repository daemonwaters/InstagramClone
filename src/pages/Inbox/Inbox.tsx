import styles from "./Inbox.module.scss";
import Navigation from "../../components/Navigation/Navigation";
import InboxRowContainer from "../../features/Messages/components/InboxRowContainer/InboxRowContainer";
import Chat from "../../features/Messages/components/Chat/Chat";

function Inbox() {
  return (
    <div className={styles.inbox_page}>
      <Navigation variant="decreased" />
      <InboxRowContainer current_username={"username"}>
        {/* this is where contact inbox rows go */}
      </InboxRowContainer>
      <Chat activeChat={false} />
    </div>
  );
}

export default Inbox;

