import styles from "../styles/homeContent.module.css";
import { cardsInfo } from "./HomeCards";

export default function HomeContentSection({ search }) {
  return (
    <div className={styles.homeContentContainer}>
      {cardsInfo
        .filter((information) => {
          return information.Title.toLowerCase().includes(search.toLowerCase());
        })
        .map((information, index) => {
          return (
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
          );
        })}
    </div>
  );
}
