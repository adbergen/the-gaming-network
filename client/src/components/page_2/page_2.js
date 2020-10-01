import React from "react";

import styles from "./page_2.module.css";

const page_2 = (props) => {
  return (
    <div className={styles.page_2}>
      <div className={styles.first}>
        <div className={styles.first_index}>
          <div>0</div>
          <div>2</div>
        </div>
      </div>
      <div className={styles.mid}>
        <div className={styles.mid_image}></div>
      </div>
      <div className={styles.last}>
        <div className={styles.last_heading}>
          <span>LID</span>
          The dress, which happens to intregate real circuits, detects the level
          of CO2 concentration in air.
        </div>
        <div className={styles.last_card}>
          <div className={styles.last_card_title}>
            Check out our new <br></br>
            <span>collection</span>
          </div>
          <div className={styles.last_card_arrow}>
            <span className="fa fa-long-arrow-right"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page_2;
