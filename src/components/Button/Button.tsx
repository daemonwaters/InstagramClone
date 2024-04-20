import { MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  variant: Required<"primary" | "secondary" | "ghost">;
  title: Required<string>;
  type: "submit" | "button";
  extraStyles?: Object;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disable? : boolean
  children?: JSX.Element | ReactNode;
};

function Button({
  variant,
  title,
  extraStyles = {},
  onClick,
  type,
  disable,
  children
}: ButtonProps) {
  return (
    <button
      disabled={disable}
      onClick={onClick}
      id={
        variant == "primary"
          ? styles["primary"]
          : variant == "secondary"
            ? styles["secondary"]
            : styles["ghost"]
      }
      className={styles.button}
      style={extraStyles}
      type={type}
    >
      {children && title ? children : title}
    </button>
  );
}

export default Button;
