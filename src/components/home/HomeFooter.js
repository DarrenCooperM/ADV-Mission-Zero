import styles from "../styles/homeFooter.module.css";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

export default function HomeFooter() {
  const [isActive, setIsActive] = useState(false);

  function clickedArrow() {
    setIsActive(!isActive);
  }

  return (
    <>
      <div className={styles.footerSection}>
        {/* <div className={styles.footerContainer}>
          <h1 className={styles.footerTitle}>COMPANY</h1>
          <div className={styles.footerSubtitle}>
            <li>About Us</li>
            <li>Careers</li>
            <li>Partners</li>
          </div>
        </div> */}
        <div className={styles.footerContainer}>
          <div className={styles.footerContentFlex}>
            <h1 className={styles.footerTitle} onClick={clickedArrow}>
              GYM LOCATIONS{" "}
              {isActive ? (
                <FaArrowDown
                  style={{ height: "12px" }}
                  onClick={clickedArrow}
                ></FaArrowDown>
              ) : (
                <FaArrowRight
                  style={{ height: "12px" }}
                  onClick={clickedArrow}
                ></FaArrowRight>
              )}
              {/* <FaArrowDown style={{ height: "12px" }}></FaArrowDown> */}
            </h1>
            <div className={styles.footerSubtitle}>
              <li>Auckland CBD</li>
              <li>Level 5/115 Queen Street, CBD</li>
              <li>Auckland</li>
              <li>0800 005 875</li>
              <li>cbd@aklgymbros.co.nz</li>
            </div>
          </div>
          <div className={styles.footerContentFlex}>
            <h1 className={styles.footerTitle}>JUMP TO</h1>
            <div className={styles.footerSubtitle}>
              <li>FAQs</li>
              <li>Helpdesk</li>
              <li>Contact Us</li>
            </div>
          </div>
          <div className={styles.footerContentFlex}>
            <h1 className={styles.footerTitle}>LEGAL</h1>
            <div className={styles.footerSubtitle}>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </div>
          </div>
          <div className={styles.footerContentFlex}>
            <h1 className={styles.footerTitle}>Try to catch up</h1>
            <div className={styles.footerSubtitle}>
              <li>
                Subscribe to get tips and tricks for your training and nutrition
              </li>
              <li>
                <input
                  className={styles.footerSubscribe}
                  type="text"
                  placeholder="Email"
                ></input>
                <button className={styles.subscribeBtn} title="Subscribe">
                  Subscribe
                </button>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
