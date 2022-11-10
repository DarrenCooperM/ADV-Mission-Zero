import React from "react";
import styles from "../styles/homeModalContent.module.css";

export default function HomeModalContent() {
  return (
    <div>
      <h1 className={styles.modalTitle}>AKL GYM BROS.</h1>
      <div className={styles.modalContainer}>
        <div className={styles.modalFlex}>
          <div className={styles.modalHeader}>
            <h1 className={styles.modalSignIn}>Sign In</h1>
          </div>
          <div className={styles.modalLogin}>
            <p className={styles.modalEmail}>Email</p>
            <input
              className={styles.modalEmailInput}
              type="text"
              required="required"
              autocomplete="off"
              name="email"
              placeholder="Email"
            ></input>
            <p className={styles.modalPassword}>Password</p>
            <input
              className={styles.modalEmailInput}
              type="password"
              required="required"
              autocomplete="off"
              name="email"
              placeholder="Password"
            ></input>
            <br></br>
            <button className={styles.modalLogin}>Log in</button>
          </div>
        </div>
        <div className={styles.modalFlex}>
          <div className={styles.modalHeader}>
            <h1 className={styles.modalSignIn}>Register</h1>
          </div>
          <div className={styles.modalLogin}>
            <p className={styles.modalEmail}>Email</p>
            <input
              className={styles.modalEmailInput}
              type="text"
              required="required"
              autocomplete="off"
              name="email"
              placeholder="Email"
            ></input>
            <p className={styles.modalPassword}>Password</p>
            <input
              className={styles.modalEmailInput}
              type="password"
              required="required"
              autocomplete="off"
              name="email"
              placeholder="Password"
            ></input>
            <br></br>
            <button className={styles.modalLogin}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
