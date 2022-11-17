import styles from "../styles/homeFooter.module.css";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

export default function HomeFooter() {
  const [isActive, setIsActive] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // DROPDOWN MENU + ARROW
  function clickedArrow() {
    setIsActive(!isActive);
    setDropdown(!dropdown);
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
          <div className={styles.footerFlex}>
            <div className={styles.footerContentFlex}>
              <h1 className={styles.footerTitle} onClick={clickedArrow}>
                GYM LOCATIONS{" "}
                {/* ---------------ARROW CONDITIONAL RENDERING---------------  */}
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
                {/* ---------------DROPDOWN MENU---------------  */}
                {dropdown ? (
                  <ul className={styles.menu}>
                    <li className={styles.menuItem}>
                      <button>Newmarket</button>
                    </li>
                    <li className={styles.menuItem}>
                      <button>Parnell</button>
                    </li>
                    <li className={styles.menuItem}>
                      <button>Ponsonby</button>
                    </li>
                    <li className={styles.menuItem}>
                      <button>Herne Bay</button>
                    </li>
                    <li className={styles.menuItem}>
                      <button>Glenfield</button>
                    </li>
                    <li className={styles.menuItem}>
                      <button>Takapuna</button>
                    </li>
                    <li className={styles.menuItem}>
                      <button>Whangaparoa</button>
                    </li>
                    <li className={styles.menuItem}>
                      <button>Silverdale</button>
                    </li>
                  </ul>
                ) : null}
              </h1>
              <div className={styles.footerAddress}>
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
              <div className={styles.footerAddress}>
                <li>
                  Subscribe to get tips and tricks for your training and
                  nutrition
                </li>
                <li>
                  <input
                    className={styles.footerSubscribe}
                    type="text"
                    placeholder="JohnDoe@email.com"
                  ></input>
                  <button className={styles.subscribeBtn} title="Subscribe">
                    Subscribe
                  </button>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
