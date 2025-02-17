import React, { useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <img
        src={menu_open}
        alt=""
        onClick={openMenu}
        className="menu-open"
      ></img>
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          alt=""
          onClick={closeMenu}
          className="menu-close"
        ></img>
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p
              onClick={() => setMenu("home")}
              className={menu === "home" ? "active" : ""}
            >
              Home
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#about">
            <p
              onClick={() => setMenu("about")}
              className={menu === "about" ? "active" : ""}
            >
              About Me
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#projects">
            <p
              onClick={() => setMenu("projects")}
              className={menu === "projects" ? "active" : ""}
            >
              Projects
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#contact">
            <p
              onClick={() => setMenu("contact")}
              className={menu === "contact" ? "active" : ""}
            >
              Contact
            </p>
          </AnchorLink>
        </li>
      </ul>

      <div className="nav-connect">
        <a href="#contact">Connect With Me</a>
      </div>
    </div>
  );
};

export default Navbar;
