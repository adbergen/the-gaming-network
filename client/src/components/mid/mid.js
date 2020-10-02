import React from "react";

import styles from "./mid.module.css";

const mid = (props) => {
  return (
    <div className={styles.mid}>
      <div className={styles.logo}>PER</div>
      <div className={styles.menu}>
        <div>NEW</div>
        <div>CLOTHES</div>
        <div>BAGS</div>
      </div>
    </div>
  );
};

export default mid;
