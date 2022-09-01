import React, { useState } from "react";
import "./styles.css";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-scroll";

function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <Menu right isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
      <Link to="about" onClick={closeMenu} smooth duration={500} spy exact>
        About
      </Link>
      <Link to="skills" onClick={closeMenu} smooth duration={500} spy exact>
        Skills
      </Link>
      <Link to="projects" onClick={closeMenu} smooth duration={500} spy exact>
        Projects
      </Link>
      <Link to="contact" onClick={closeMenu} smooth duration={500} spy exact>
        Contact
      </Link>
    </Menu>
  );
}

export default HamburgerMenu;
