import React from "react";
import styles from "../styles/homeContent.module.css";
import gymPic from "../images/classImgOne.png";
import gymPic2 from "../images/gymImgTw0.png";
import gymPic3 from "../images/gymcardpic.png";
import gymPic4 from "../images/gymcardpic6.png";

export default function HomeContentSection() {
  return (
    <div className={styles.homeContentContainer}>
      <div className={styles.card}>
        <img className={styles.imgOne} src={gymPic} alt="gympic" />
        <span className={styles.cardContent}>Body Pump</span>
        <p className={styles.price}>$19.99pw</p>
      </div>
      <div className={styles.card}>
        <img className={styles.imgOne} src={gymPic2} alt="gympic" />
        <span className={styles.cardContent}>Yoga</span>
        <p className={styles.price}>$14.99pw</p>
      </div>
      <div className={styles.card}>
        <img className={styles.imgOne} src={gymPic3} alt="gympic" />
        <span className={styles.cardContent}>Boxing</span>
        <p className={styles.price}>$24.99pw</p>
      </div>
      <div className={styles.card}>
        <img className={styles.imgOne} src={gymPic4} alt="gympic" />
        <span className={styles.cardContent}>Weight Training</span>
        <p className={styles.price}>$14.99pw</p>
      </div>
    </div>
  );
}
