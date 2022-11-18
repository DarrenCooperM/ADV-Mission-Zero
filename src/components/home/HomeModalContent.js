import React from "react";
import styles from "../styles/homeModalContent.module.css";
import { FaTimes } from "react-icons/fa";

export default function ModalContent({ closeModal }) {
  return (
    <div className={styles.modalBackground} onClick={() => closeModal(false)}>
      {/* function below is to stop modal from closing when clicking on the modal itself  */}
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.closeBtn}>
          <FaTimes
            title="exit"
            className={styles.closeBtn}
            onClick={() => {
              closeModal(false);
            }}
          />
        </div>
        <div className={styles.modalContent}>
          <div className={styles.modalFlex}>
            <div className={styles.modalTitle}>
              <h1 className={styles.loginTitle}>Log In</h1>
            </div>
            <div>
              <input
                className={styles.modalInput}
                type="text"
                required="required"
                autocomplete="off"
                name="Email"
                placeholder="JohnDoe@email.com"
              ></input>
            </div>
            <div>
              <input
                className={styles.modalInput}
                type="password"
                required="required"
                autocomplete="off"
                name="password"
                placeholder="Must have atleast 6 characters"
              ></input>
            </div>

            <div className={styles.loginFlex}>
              <button className={styles.loginBtn}>Login</button>
            </div>
          </div>
          <div className={styles.modalFlex}>
            <div className={styles.modalTitle}>
              <h1 className={styles.loginTitle}>Register</h1>
            </div>
            <div className={styles.modalBody}>
              <div>
                <input
                  className={styles.modalInput}
                  type="text"
                  required="required"
                  autocomplete="off"
                  name="Email"
                  placeholder="JohnDoe@email.com"
                ></input>
              </div>
              <div>
                <input
                  className={styles.modalInput}
                  type="password"
                  required="required"
                  autocomplete="off"
                  name="password"
                  placeholder="Must have atleast 6 characters"
                ></input>
              </div>
            </div>
            <div className={styles.loginFlex}>
              <button className={styles.loginBtn}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
