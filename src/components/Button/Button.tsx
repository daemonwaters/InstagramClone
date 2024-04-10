import styles from "./Button.module.scss";

type ButtonProps = {
  variant: Required<"primary" | "secondary" | "ghost">;
  title: Required<string>;
  extraStyles?: Object;
  onClick? : ()=> void
};

function Button({ variant, title, extraStyles = {} , onClick }: ButtonProps) {
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
    >
      {title}
    </button>
  );
}

export default Button;
