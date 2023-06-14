import React from "react";
import "./Navbar.css";
import NavbarTop from "./NavbarTop";
import NavbarMid from "./NavbarMid";
import NavbarBottom from "./NavbarBottom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavbarTop />
      <NavbarMid />
      <NavbarBottom />
    </div>
  );
};

export default Navbar;
