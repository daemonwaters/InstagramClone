import React from "react";
import styles from "./ListItem.module.scss";
type ListItemProps = {
  variant: "default" | "icon-only" | "title-only";
  icon: string;
  title: string;
  children?: JSX.Element | React.ReactNode;
  extraStyles?: Object;
};

function ListItem({
  variant,
  icon,
  title,
  children,
  extraStyles,
}: ListItemProps) {
  return (
    <li style={extraStyles} className={styles.listItem}>
      {
        variant !== 'title-only' ? <img src={icon} alt={title} /> : <></>
      }
      {variant !== "icon-only" ? <span> {title}</span> : <></>}
      {children}
    </li>
  );
}

export default ListItem;
