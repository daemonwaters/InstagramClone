import React, { useState } from "react";
import styles from "./ListItem.module.scss";
import Avatar from "../Avatar/Avatar";
import { Variants } from "../Avatar/Avatar";
import { useAppSelector } from "../../hooks/reduxHooks";

type ListItemProps = {
  variant: "default" | "icon-only" | "title-only";
  icon: string;
  title: string;
  id?: number;
  children?: JSX.Element | React.ReactNode;
  extraStyles?: Object;
  hasAvatar?: boolean;
  onClick?: () => void;
};

function ListItem({
  variant,
  id,
  icon,
  title,
  children,
  extraStyles,
  hasAvatar,
  onClick,
}: ListItemProps) {
  const currentUser = useAppSelector((state) => state.currentUser);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  function handleClick() {
    setShowOverlay(!showOverlay);
  }
  return (
    <li
      onClick={id == 7 ? onClick : handleClick}
      style={extraStyles}
      className={styles.listItem}
    >
      {variant !== "title-only" && !hasAvatar ? (
        <img src={icon} alt={title} />
      ) : (
        <></>
      )}
      {hasAvatar ? (
        <Avatar src={currentUser.avatar_url} variant={Variants.navigation} />
      ) : (
        <></>
      )}
      {variant !== "icon-only" ? <span> {title}</span> : <></>}
      {showOverlay ? children : <></>}
    </li>
  );
}

export default ListItem;
