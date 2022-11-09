import styles from "../styles/homeFooter.module.css";

export default function HomeFooter() {
  return (
    <>
      <div className={styles.footerSection}>
        <div className={styles.footerContainer}>
          <h1 className={styles.footerTitle}>COMPANY</h1>
          <div className={styles.footerSubtitle}>
            <li>About Us</li>
            <li>Careers</li>
            <li>Partners</li>
          </div>
        </div>
        <div className={styles.footerContainer}>
          <h1 className={styles.footerTitle}>COURSES</h1>
          <div className={styles.footerSubtitle}>
            <li>Body Pump</li>
            <li>Yoga</li>
            <li>Boxing</li>
            <li>Spin Class</li>
            <li>Weights</li>
          </div>
        </div>
        <div className={styles.footerContainer}>
          <h1 className={styles.footerTitle}>SUPPORT</h1>
          <div className={styles.footerSubtitle}>
            <li>FAQs</li>
            <li>Helpdesk</li>
            <li>Contact Us</li>
          </div>
        </div>
        <div className={styles.footerContainer}>
          <h1 className={styles.footerTitle}>LEGAL</h1>
          <div className={styles.footerSubtitle}>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </div>
        </div>
      </div>
    </>
  );
}
