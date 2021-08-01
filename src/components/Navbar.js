function Navbar() {
  const BASE_URL = "#";

  return (
    <nav className="navbar">
      <div className="max-width">
        <div className="logo">
          <a href={BASE_URL}>
            Sondhi's<span>&nbsp;lad</span>
          </a>
        </div>
        <ul className="menu">
          <li>
            <a href="#home" className="menu-btn">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="menu-btn">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="menu-btn">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="menu-btn">
              Contact
            </a>
          </li>
        </ul>
        <div className="menu-btn">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
