import React from "react";

import styles from "./page_3.module.css";

import pic6 from "../../../../assets/pic6.png";
import First from "../../FirstSlide";
import Last from "../../last/last";
import Mid from "../../mid/mid";
import PageThree from "../../page_3/page_3";

class Page3 extends React.Component {
  render() {
    return (
      <div className={styles.page_3}>
        <img src={pic6} alt="pic6" />
        <div className={styles.container}>
          <div className={styles.first}>
            <First />
          </div>
          <div className={styles.mid}>
            <Mid />
            <PageThree />
          </div>
          <div className={styles.last}>
            <Last />
          </div>
        </div>
      </div>
    );
  }
}

export default Page3;
