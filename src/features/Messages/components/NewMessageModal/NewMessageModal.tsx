import { createPortal } from "react-dom";
import styles from "./NewMessageModal.module.scss";
import X from "../../../../assets/svgs/xbutton.svg";
import Button from "../../../../components/Button/Button";
import SearchResult from "../SearchResult/SearchResult";
function NewMessageModal() {
  return createPortal(
    <div className={styles.new_message_modal}>
      <div className={styles.content}>
        <header>
          <span>New message</span>
          <img src={X} alt="close" />
        </header>
        <div className={styles.input_wrapper}>
          <span>To:</span>
          <input type="text" placeholder="Search..." />
        </div>
        <div className={styles.list}>
          <p>No accounts found.</p>
        </div>
        <footer>
          <Button title="Chat" variant="primary" type="button" />
        </footer>
      </div>
    </div>,
    document.getElementById("new-message-portal")!
  );
}

export default NewMessageModal;
