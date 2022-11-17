import styles from "../styles/homeHeader.module.css";
import { FaSearch } from "react-icons/fa";

export default function HomeHeaderSection() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeBackground}>
        <div className={styles.homeContentSection}>
          <h1 className={styles.homeTitle}>Time to get a pump!</h1>
          <p className={styles.homeSubTitle}>
            Memberships from $23.99 per week
          </p>
        </div>
        <div className={styles.inputSection}>
          <input
            className={styles.inputBox}
            title="Search"
            type="text"
            placeholder="Search for a local gym"
          ></input>
          <span>
            <FaSearch
              title="Search"
              className={styles.searchIcon}
              onMouseOver="Search"
              style={{
                width: "40px",
                height: "35px",
                marginTop: "5px",
                color: "#f1f1f19c",
                transform: "translateX(-130%)",
                cursor: "pointer",
              }}
            />
          </span>
          {/* <button className={styles.searchBtn}>Search</button> */}
        </div>
      </div>
    </div>
  );
}
