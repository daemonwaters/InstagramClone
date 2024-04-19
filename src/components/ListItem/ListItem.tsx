import React, { useState } from "react";
import styles from "./ListItem.module.scss";
import Avatar from "../Avatar/Avatar";
import { Variants } from "../Avatar/Avatar";
import MockAvatar from '../../assets/svgs/avatarmock.svg'
import { useAppSelector } from "../../hooks/reduxHooks";

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
  const currentUser = useAppSelector(state => state.currentUser) 
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  function handleClick() {
    setShowOverlay(!showOverlay);
  }
  return (
    <li onClick={handleClick} style={extraStyles} className={styles.listItem}>
      {variant !== "title-only" && !hasAvatar ? (
        <img src={icon} alt={title} />
      ) : (
        <></>
      )}
      {hasAvatar ? <Avatar src={currentUser.data.avatar_url} variant={Variants.navigation} /> : <></>}
      {variant !== "icon-only" ? <span> {title}</span> : <></>}
      {showOverlay ? children : <></>}
    </li>
  );
}

export default ListItem;
