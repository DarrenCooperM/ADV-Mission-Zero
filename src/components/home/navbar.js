import "../styles/navbar.css";

function navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="brand-title">AKL Gym Bros.</div>
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
