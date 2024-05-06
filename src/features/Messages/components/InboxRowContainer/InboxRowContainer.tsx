import React from "react";
import styles from "./InboxRowContainer.module.scss";
import ArrowDown from "../../../../assets/svgs/arrow-down.svg";
import Edit from "../../../../assets/svgs/edit.svg";
import { setModalVisibility } from "../../slices/inboxSlice";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
type InboxRowContainerProps = {
  current_username: string;
  children: JSX.Element | React.ReactNode;
};

function InboxRowContainer({
  current_username,
  children,
}: InboxRowContainerProps) {
  const dispatch = useAppDispatch();
  const handleNewMessageModal = () => {
    dispatch(setModalVisibility(true));
  };

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.user_edit}>
          <span>{current_username}</span>
          <img src={ArrowDown} alt="Arrow down" />
          <img onClick={handleNewMessageModal} src={Edit} alt="Edit" />
        </div>
        <div className={styles.messages_requests}>
          <span>Messages</span>
          <span>Requests</span>
        </div>
      </header>
      <div className={styles.inboxes}>{children}</div>
    </div>
  );
}

export default InboxRowContainer;
