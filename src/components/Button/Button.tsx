import { MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  variant: Required<"primary" | "secondary" | "ghost">;
  title: Required<string>;
  extraStyles?: Object;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: "submit" | "button";
  children? : JSX.Element | ReactNode
};

function Button({
  variant,
  title,
  extraStyles = {},
  onClick,
  type,
  children
}: ButtonProps) {
  return (
    <button
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
      {children}
    </button>
  );
}

export default Button;
