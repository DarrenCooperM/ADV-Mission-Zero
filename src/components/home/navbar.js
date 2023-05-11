import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

import styles from "../styles/navbar.module.css";
import MySVG from "./svg";

export default function Navbar({ setOpenModal }) {
  // DROPDOWN MENU
  const [isActive, setIsActive] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // DROPDOWN MENU + ARROW
  function handleDrop(e) {
    e.preventDefault();
    setIsActive(!isActive);
    setDropdown(!dropdown);
  }

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarFlex}>
          <div className={styles.brandTitle}>
            <MySVG />
            AKL Gym Bros.
          </div>
          <a href="/" className={styles.toggleButton}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </a>
          <div className={styles.navbarLinks}>
            <ul>
              <li>
                {/* ----------------- DROPDOWN MENU ------------------  */}
                <a href="/" className={styles.navBtns} onClick={handleDrop}>
                  Gym Locations
                  {isActive ? (
                    <FaArrowDown
                      style={{ height: "12px" }}
                      onClick={handleDrop}
                    ></FaArrowDown>
                  ) : (
                    <FaArrowRight
                      style={{ height: "12px" }}
                      onClick={handleDrop}
                    ></FaArrowRight>
                  )}
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
                </a>
              </li>
              <li>
                <a href="/" className={styles.navBtns}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className={styles.navBtns}>
                  Why Us
                </a>
              </li>
              <li>
                <a href="/" className={styles.navBtns}>
                  Refer a friend
                </a>
              </li>
              <li>
                {/* ------------MODAL SECTION------------ */}
                <button
                  href=""
                  onClick={() => {
                    setOpenModal(true);
                  }}
                  className={styles.navBtns}
                >
                  Register | Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
