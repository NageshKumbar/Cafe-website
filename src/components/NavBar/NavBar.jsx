import "./Navbar.css";
import logo from "../../assets/logo_wo_bg.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="NH's Cafe Logo" />
        <span>NH’s Café</span>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Menu</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
