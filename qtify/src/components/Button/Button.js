import React from "react";
import styles from "./Button.module.css";

const Button = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Give Feedback
    </button>
  );
};

export default Button;
