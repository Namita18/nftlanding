import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
// import { ImSun } from "react-icons/im";
// import { BsFillMoonFill } from "react-icons/bs";
import {BsSearch} from "react-icons/bs";
import logo from "../assets/logo.png";
export default function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
        <div className="toggle-container">
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavState(true)} />
            )}
          </div>
         
        </div>
      </div>
      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        <ul className="links">
        <li>
            <input className="search" type="text" 
            placeholder="Search" />
            <BsSearch></BsSearch>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#launch">Launch</a>
          </li>
          <li>
            <a href="#signup">Create one</a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}
