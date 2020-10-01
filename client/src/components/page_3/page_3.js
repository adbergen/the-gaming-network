import React from "react";

import styles from "./page_3.module.css";
import "font-awesome/css/font-awesome.min.css";

const page_3 = (props) => {
  return (
    <div className={styles.page_3}>
      <div className={styles.first}>
        <div className={styles.first_image}></div>
        <div className={styles.first_heading}>
          <span>CONF</span>A delicate dress covered with mettalic threads, wires
          and blinking lights.
        </div>
      </div>
      <div className={styles.mid}>
        <div className={styles.mid_index}>
          <div>0</div>
          <div>3</div>
        </div>
        <div className={styles.mid_heading}>
          This is the clubbing type of dress, for if you feel like escaping
          mysteriously when someone approches you.
        </div>
      </div>
      <div className={styles.last}>
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

export default page_3;
