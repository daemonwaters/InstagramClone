import React from "react";
import styles from "./ListItem.module.scss";
import Avatar from "../Avatar/Avatar";
import { Variants } from "../Avatar/Avatar";
type ListItemProps = {
  variant: "default" | "icon-only" | "title-only";
  icon: string;
  title: string;
  children?: JSX.Element | React.ReactNode;
  extraStyles?: Object;
  hasAvatar?: boolean;
};

function ListItem({
  variant,
  icon,
  title,
  children,
  extraStyles,
  hasAvatar,
}: ListItemProps) {
  return (
    <li style={extraStyles} className={styles.listItem}>
      {variant !== "title-only" && !hasAvatar ? (
        <img src={icon} alt={title} />
      ) : (
        <></>
      )}
      {hasAvatar ? <Avatar src={icon} variant={Variants.msg} /> : <></>}
      {variant !== "icon-only" ? <span> {title}</span> : <></>}
      {children}
    </li>
  );
}

export default ListItem;
