import React from "react";
import styles from "./Overlay.module.scss";
import ListItem from "../ListItem/ListItem";
import Settings from "../../assets/svgs/settings.svg";
import Activity from "../../assets/svgs/activity.svg";
import Bookmark from "../../assets/svgs/bookmark.svg";
import Moon from "../../assets/svgs/problem-report.svg";
import ProblemReport from "../../assets/svgs/settings.svg";
import Threads from "../../assets/svgs/threads.svg";

function Overlay() {
  return (
    <ul className={styles.overlay}>
      <ListItem variant="default" icon={Settings} title="Settings" />
      <ListItem variant="default" icon={Activity} title="Your Activity" />
      <ListItem variant="default" icon={Bookmark} title="Saved" />
      <ListItem variant="default" icon={Moon} title="Switch appearance" />
      <ListItem
        variant="default"
        icon={ProblemReport}
        title="Report a problem"
      />
      <ListItem variant="default" icon={Threads} title="Threads" />
      <ListItem variant="title-only" icon={""} title="Switch accounts" />
      <ListItem variant="title-only" icon={""} title="Log out" />
    </ul>
  );
}

export default Overlay;
