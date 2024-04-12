import React from "react";
import styles from "./StoryContainer.module.scss";
type StoryContainerProps = {
  children: JSX.Element | React.ReactNode;
};

function StoryContainer({ children }: StoryContainerProps) {
  return <div className={styles.container}>{children}</div>;
}

export default StoryContainer;
