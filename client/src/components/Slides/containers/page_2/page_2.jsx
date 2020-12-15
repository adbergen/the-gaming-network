import React from "react";
import styles from "./page_2.module.css";
import pic4 from "../../../../assets/pic4.png";
import First from "../../FirstSlide";
import Last from "../../last/last";
import Mid from "../../mid/mid";
import PageTwo from "../../page_2/page_2";

class Page2 extends React.Component {
  render() {
    return (
      <div className={styles.page_2}>
        <img src={pic4} alt="pic4" />
        <div className={styles.container}>
          <div className={styles.first}>
            <First />
          </div>
          <div className={styles.mid}>
            <Mid />
            <PageTwo />
          </div>
          <div className={styles.last}>
            <Last />
          </div>
        </div>
      </div>
    );
  }
}

export default Page2;
