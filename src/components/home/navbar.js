import "../styles/navbar.css";
import logo from "../images/navbarlogo.png";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ModalContent from "./HomeModalContent";
import { FaTimes } from "react-icons/fa";

// modal

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

const btnStyle = {
  color: "#f1f1f1",
  display: "block",
  fontFamily: "Bebas Neue, cursive",
  fontSize: "19px",
  margin: "7px 0 0 0",
};

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <nav className="navbar">
        <div className="brand-title">
          <img
            src={logo}
            alt="logo"
            style={{
              height: "25px",
              width: "25px",
            }}
          ></img>
          AKL Gym Bros.
        </div>
        <a href="/" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="/" className="nav-btns">
                Own A Gym
              </a>
            </li>
            <li>
              <a href="/" className="nav-btns">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="nav-btns">
                Why Us
              </a>
            </li>
            <li>
              <a href="/" className="nav-btns">
                Refer a friend
              </a>
            </li>
            <li>
              {/* ------------MODAL SECTION------------ */}
              {/* <a href="/" className="nav-btns">
                Register | Login
              </a> */}
              <Button onClick={handleOpen} sx={btnStyle}>
                {/* Register | Login */}
                Become a member | Login
              </Button>

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
      </nav>
    </div>
  );
}
