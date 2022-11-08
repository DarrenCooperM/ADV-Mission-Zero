import styles from "../styles/homeHeader.module.css";

export default function HomeHeaderSection() {
  return (
    <div className={styles.homeBackgroundImg}>
      <div className={styles.homeContent}>
        <h1 className={styles.homeTitle}>Wanna get a pump?</h1>
        <div className={styles.inputSection}>
          <input
            className={styles.inputBox}
            type="text"
            placeholder="Search for a local gym"
          ></input>
          <button className={styles.searchBtn}>Search</button>
        </div>
      </div>
    </div>
  );
}
