import { useState } from "react";
import logo from "../assets/images/logo.png";
import "../styles/navbar.css";
import { Link } from "react-router";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const handleShowLinks = () => setShowLinks(!showLinks);

  return (
    <>
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <img src={logo} alt="Logo codeasy" className="logo" />
        <ul className="nav-links">
          <li className="navbar-item">
            <Link to={"/homepage"} className="navbar-link">
              Homepage{" "}
            </Link>
          </li>
          <li className="navbar-item">
            <Link to={"/themesquiz"} className="navbar-link">
              Thèmes quiz
            </Link>
          </li>
          <li className="navbar-item">
            <Link to={"/resultats"} className="navbar-link">
              Résultats
            </Link>
          </li>
          <li className="navbar-item">
            <Link to={"/apropos"} className="navbar-link">
              A Propos
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="navbar-burger"
          onClick={handleShowLinks}
        >
          <span className="burger-bar" />
        </button>
      </nav>
    </>
  );
}
