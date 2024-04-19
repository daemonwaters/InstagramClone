import { ChangeEventHandler } from "react";
import styles from "./Input.module.scss";

type InputProps = {
  type: "text" | "password";
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  isValid: boolean | undefined;
};

function Input({
  type = "text",
  placeholder = "Type...",
  value,
  onChange,
  isValid,
}: InputProps) {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        outline: isValid
          ? "solid 1px green"
          : isValid == false
            ? "solid 1px red"
            : "",
      }}
    />
  );
}

export default Input;
