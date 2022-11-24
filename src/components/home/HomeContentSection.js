import React from "react";
import styles from "../styles/homeContent.module.css";
import { cardsInfo } from "./HomeCards";
// import gymPic from "../images/gymCardPic1.png";
// import gymPic2 from "../images/gymCardPic2.png";
// import gymPic3 from "../images/gymCardPic3.png";
// import gymPic4 from "../images/gymCardPic4.png";

export default function HomeContentSection({ search }) {
  return (
    <div className={styles.homeContentContainer}>
      {cardsInfo
        .filter((information) => {
          return information.Title.toLowerCase().includes(search.toLowerCase());
        })
        .map((information, index) => {
          return (
            // <div className={styles.cardFlex}>
            <div key={index} className={styles.cardMainContainer}>
              <img
                src={information.image}
                alt={information.Title}
                className={styles.imgOne}
              />
              <h3 className={styles.cardContent}>
                <b>{information.Title}</b>
              </h3>
              <h4 className={styles.cardInfo}>{information.subTitle}</h4>
              <h5 className={styles.cardClick}>{information.info}</h5>
            </div>
            // </div>
          );
        })}
      {/* <div className={styles.homeFlex}>
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
      </div> */}
    </div>
  );
}
