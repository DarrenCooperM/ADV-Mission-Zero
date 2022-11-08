import React from "react";
import styles from "../styles/homeContent.module.css";
import gymPic from "../images/classImgOne.png";
import gymPic2 from "../images/gymImgTwo.png";
import gymPic3 from "../images/gymImgThree.png";
import gymPic4 from "../images/gymImgFour.png";

export default function HomeContentSection() {
  return (
    <div className={styles.homeContentContainer}>
      <div className={styles.card}>
        <img className={styles.imgOne} src={gymPic} alt="gympic" />
        <span className={styles.cardContent}>Body Pump</span>
      </div>
      <div className={styles.card}>
        <img className={styles.imgOne} src={gymPic2} alt="gympic" />
        <span className={styles.cardContent}>Yoga</span>
      </div>
      <div className={styles.card}>
        <img className={styles.imgOne} src={gymPic3} alt="gympic" />
        <span className={styles.cardContent}>Boxing</span>
      </div>
      <div className={styles.card}>
        <img className={styles.imgOne} src={gymPic4} alt="gympic" />
        <span className={styles.cardContent}>Weight Training</span>
      </div>
    </div>
  );
}
