import "../styles/navbar.css";
import logo from "../images/navbarlogo.png";

export default function Navbar() {
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
              <a href="/" className="nav-btns">
                Register | Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
