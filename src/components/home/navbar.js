import "../styles/navbar.css";
import logo from "../images/navbarlogo.png";

function navbar() {
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
              <a href="/">Own A Gym</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Why Us</a>
            </li>
            <li>
              <a href="/">Refer a friend</a>
            </li>
            <li>
              <a href="/">Register | Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
