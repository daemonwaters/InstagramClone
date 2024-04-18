import { MouseEventHandler } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  variant: Required<"primary" | "secondary" | "ghost">;
  title: Required<string>;
  extraStyles?: Object;
  onClick? : MouseEventHandler<HTMLButtonElement>
  type : 'submit' | 'button'
};

function Button({ variant, title, extraStyles = {} , onClick , type }: ButtonProps) {
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
      {title}
    </button>
  );
}

export default Button;
