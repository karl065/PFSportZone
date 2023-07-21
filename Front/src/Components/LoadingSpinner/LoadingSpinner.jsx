import React from "react";
import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={styles.spinner_overlay}>
      <div className={styles.spinner_container} />
    </div>
  );
};

export default LoadingSpinner;
