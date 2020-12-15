import React from "react";

import styles from "./mid.module.css";

const mid = (props) => {
  return (
    <div className={styles.mid}>
      <div className={styles.logo}>TGN</div>
      <div className={styles.menu}>
        <div>MEET GAMERS</div>
        <div>FIND GAMES</div>
        <div>HAVE FUN</div>
      </div>
    </div>
  );
};

export default mid;
