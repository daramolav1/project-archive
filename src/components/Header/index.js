import React from "react";
import "./styles.css";
import { animateScroll as scroll, Link } from "react-scroll";
import BurgerMenu from "../HamburgerMenu";

function Header() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <header>
      <div className="nav">
        <Link to="/" onClick={toggleHome}>
          <img
            src={require("../../images/logo.png")}
            alt="logo"
            className="nav-logo"
          />
        </Link>
        <div className="nav-links">
          <Link to="about" className="nav-text" smooth duration={500} spy exact>
            About
          </Link>
          <Link
            to="skills"
            className="nav-text"
            smooth
            duration={500}
            spy
            exact
          >
            Skills
          </Link>
          <Link
            to="projects"
            className="nav-text"
            smooth
            duration={500}
            spy
            exact
          >
            Projects
          </Link>
          <Link
            to="contact"
            className="nav-text"
            smooth
            duration={500}
            spy
            exact
          >
            Contact
          </Link>
        </div>
      </div>
      <BurgerMenu />
    </header>
  );
}

export default Header;
