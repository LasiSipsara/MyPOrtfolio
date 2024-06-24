import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import HamburgerMenu from "../../assets/hamburger-menu.png";
import MenuClose from "../../assets/menu-close.png";

const NavBar = () => {
  const [active, setActive] = useState("home");

  function handleNavClick(item) {
    setActive(item);
  }

  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img className="nav-logo" src={logo} alt="" />
      <img
        className="nav-mob-open"
        src={HamburgerMenu}
        alt=""
        onClick={openMenu}
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          className="nav-mob-close"
          src={MenuClose}
          alt=""
          onClick={closeMenu}
        />
        <li
          className={active === "home" ? "active" : ""}
          onClick={() => handleNavClick("home")}
        >
          <a href="#home">Home</a>
        </li>
        <li
          className={active === "about" ? "active" : ""}
          onClick={() => handleNavClick("about")}
        >
          <a href="#about">About Me</a>
        </li>
        <li
          className={active === "skills" ? "active" : ""}
          onClick={() => handleNavClick("skills")}
        >
          <a href="#skills">Skills</a>
        </li>
        <li
          className={active === "projects" ? "active" : ""}
          onClick={() => handleNavClick("projects")}
        >
          <a href="#projects">Projects</a>
        </li>
      </ul>
      <a href="#contact" className="nav-connect-link">
        <div className="nav-connect">Contact Info</div>
      </a>
    </div>
  );
};

export default NavBar;
