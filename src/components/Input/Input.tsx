import React from "react";
import styles from "./Input.module.scss";

type InputProps = {
  type: "text" | "password";
  placeholder: string;
  value: string;
  onChange: () => void;
};

function Input({
  type = "text",
  placeholder = "Type...",
  value,
  onChange,
}: InputProps) {
  return (
      <input
      className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
  );
}

export default Input;
