import React from "react";

import styles from "./page_2.module.css";

const page_2 = (props) => {
  return (
    <div className={styles.page_2}>
      <div className={styles.first}>
        <div className={styles.first_index}>
          <div>MEET</div>
          <div>GAMERS</div>
        </div>
      </div>
      <div className={styles.mid}>
        <div className={styles.mid_image}></div>
      </div>
      <div className={styles.last}>
        <div className={styles.last_heading}>
          <span>CONNECT</span>
          Meet fellow gamers that play the games you love.
        </div>
      </div>
    </div>
  );
};

export default page_2;
