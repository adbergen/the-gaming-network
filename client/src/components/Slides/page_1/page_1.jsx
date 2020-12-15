import React from "react";

import styles from "./page_1.module.css";
import "font-awesome/css/font-awesome.min.css";

const page_1 = (props) => {
  return (
    <div className={styles.page_1}>
      <div className={styles.first}>
        <div className={styles.first_heading}>
          <div>A</div>
          <div>NEW</div>
          <div>SOCIAL EXPERIENCE</div>
        </div>
        <div className={styles.first_image}></div>
      </div>
      <div className={styles.mid}>
        <div className={styles.mid_heading}></div>
        {/* <div className={styles.mid_card}>
          <div className={styles.mid_card_title}>
            This is part of<br></br>
            <span>the button link on the bottom right</span>
          </div>
          <div className={styles.mid_card_arrow}>
            <span className="fa fa-long-arrow-right"></span>
          </div>
        </div> */}
      </div>
      <div className={styles.last}>
        <div>HAS ARRIVED</div>
      </div>
    </div>
  );
};

export default page_1;
