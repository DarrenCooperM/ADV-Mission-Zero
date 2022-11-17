import React from "react";
import styles from "../styles/homeContent.module.css";
import gymPic from "../images/classImgOne.png";
import gymPic2 from "../images/gymImgTw0.png";
import gymPic3 from "../images/gymcardpic.png";
import gymPic4 from "../images/gymcardpic7.png";

const card1 = {
  Title: "Body Pump",
  subTitle: "Improve your strength and agility",
  info: "Click for more info",
};
const card2 = {
  Title: "Yoga",
  subTitle: "Improve your flexibility and circulation",
  info: "Click for more info",
};
const card3 = {
  Title: "Boxing",
  subTitle: "Improve your strength and endurance",
  info: "Click for more info",
};
const card4 = {
  Title: "Resistance Training",
  subTitle: "Improve your overall strength and explosive power",
  info: "Click for more info",
};

export default function HomeContentSection() {
  return (
    <div className={styles.homeContentContainer}>
      <div className={styles.homeFlex}>
        <div className={styles.card}>
          <img className={styles.imgOne} src={gymPic} alt="gympic" />
          <span className={styles.cardContent}>{card1.Title}</span>
          <p className={styles.cardInfo}>{card1.subTitle}</p>
          <p className={styles.cardClick}>{card1.info}</p>
        </div>
        <div className={styles.card}>
          <img className={styles.imgOne} src={gymPic2} alt="gympic" />
          <span className={styles.cardContent}>{card2.Title}</span>
          <p className={styles.cardInfo}>{card2.subTitle}</p>
          <p className={styles.cardClick}>{card1.info}</p>
        </div>
        <div className={styles.card}>
          <img className={styles.imgOne} src={gymPic3} alt="gympic" />
          <span className={styles.cardContent}>{card3.Title}</span>
          <p className={styles.cardInfo}>{card3.subTitle}</p>
          <p className={styles.cardClick}>{card1.info}</p>
        </div>
        <div className={styles.card}>
          <img className={styles.imgOne} src={gymPic4} alt="gympic" />
          <span className={styles.cardContent}>{card4.Title}</span>
          <p className={styles.cardInfo}>{card4.subTitle}</p>
          <p className={styles.cardClick}>{card1.info}</p>
        </div>
      </div>
    </div>
  );
}
