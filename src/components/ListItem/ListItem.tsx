import React from "react";
import styles from "./ListItem.module.scss";
type ListItemProps = {
  variant: "default" | "icon-only";
  icon: string;
  title: string;
  children?: JSX.Element | React.ReactNode;
};

function ListItem({ variant, icon, title, children }: ListItemProps) {
  return (
    <li
      style={{ width: variant == "icon-only" ? "max-content" : "" }}
      className={styles.listItem}
    >
      <img src={icon} alt={title} />
      {variant == "default" ? <span>{title}</span> : <></>}
      {children}
    </li>
  );
}

export default ListItem;
