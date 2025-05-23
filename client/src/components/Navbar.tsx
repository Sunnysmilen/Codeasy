import { useState } from "react";
import logo from "../assets/images/image-logo.png";
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
            <Link
              to={"/homepage"}
              className="navbar-link"
              onClick={() => setShowLinks(false)}
            >
              Homepage{" "}
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to={"/summary-page"}
              className="navbar-link"
              onClick={() => setShowLinks(false)}
            >
              Thèmes quiz
            </Link>
          </li>

          <li className="navbar-item">
            <Link
              to={"/apropos"}
              className="navbar-link"
              onClick={() => setShowLinks(false)}
            >
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
