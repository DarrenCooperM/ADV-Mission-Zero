import styles from "../styles/navbar.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalContent from "./HomeModalContent";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

// MODAL STYLE
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 500,
  // bgcolor: "background.paper",
  border: "2px solid #000",
  // boxShadow: 24,
  p: 4,
  color: "black",
  borderRadius: "6px",
  backgroundColor: "#e0bc5f",
  boxShadow: "12px 12px 12px 12px black",
};

export default function Navbar() {
  // MODAL
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <svg
              style={{
                width: "40px",
                height: "40px",
                paddingLeft: "5px",
                marginRight: "5px",
              }}
              id="_1_-_10"
              data-name="1 - 10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <title>Gym</title>
              <g id="Gym">
                <path d="M46.342,19.553,44,18.382V17a3,3,0,0,0-3-3H39V13a3,3,0,0,0-3-3H33a3,3,0,0,0-3,3v7H18V13a3,3,0,0,0-3-3H12a3,3,0,0,0-3,3v1H7a3,3,0,0,0-3,3v1.382L1.658,19.553A2.984,2.984,0,0,0,0,22.236v3.528a2.984,2.984,0,0,0,1.658,2.683L4,29.618V31a3,3,0,0,0,3,3H9v1a3,3,0,0,0,3,3h3a3,3,0,0,0,3-3V28H30v7a3,3,0,0,0,3,3h3a3,3,0,0,0,3-3V34h2a3,3,0,0,0,3-3V29.618l2.342-1.171A2.984,2.984,0,0,0,48,25.764V22.236A2.984,2.984,0,0,0,46.342,19.553ZM2.553,26.658A.994.994,0,0,1,2,25.764V22.236a.994.994,0,0,1,.553-.894L4,20.618v6.764ZM7,32a1,1,0,0,1-1-1V17a1,1,0,0,1,1-1H9V32Zm9,3a1,1,0,0,1-1,1H12a1,1,0,0,1-1-1V13a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1Zm2-9V22H30v4Zm19,9a1,1,0,0,1-1,1H33a1,1,0,0,1-1-1V13a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1Zm5-4a1,1,0,0,1-1,1H39V16h2a1,1,0,0,1,1,1Zm4-5.236a.994.994,0,0,1-.553.894L44,27.382V20.618l1.447.724a.994.994,0,0,1,.553.894Z" />
              </g>
            </svg>
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
                <button href="" onClick={handleOpen} className={styles.navBtns}>
                  Register | Login
                </button>

                <Modal
                  style={{ backdropFilter: "blur(8px)" }}
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <FaTimes
                      title="exit"
                      style={{
                        position: "absolute",
                        height: "40px",
                        width: "40px",
                        right: "1rem",
                        top: "1rem",
                        cursor: "pointer",
                      }}
                      onClick={handleClose}
                    />
                    <ModalContent></ModalContent>

                    {/* <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </Typography> */}
                  </Box>
                </Modal>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
