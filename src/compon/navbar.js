import React from "react";
import { NavLink } from "react-router-dom";
import Navlogo from "./webp/logo.webp";

function Navbar() {
  return (
    <>
      <div className="andu">
        <div className="navt shadow-dreamy">
          <NavLink to="/">
            <img src={Navlogo} alt="fireSpot" className="imgnav" />
          </NavLink>
        </div>
      </div>
      <div className="andu">
        <nav className="shadow-dreamy">
          <NavLink to="/" className="act">
            <i className="fas fa-home"></i>
            <b>home</b>
          </NavLink>
          <NavLink to="/feed">
            <i className="fas fa-fire"></i>
            <b>Feed</b>
          </NavLink>
          <NavLink to="/About">
            <i className="fas fa-user"></i>
            <b>User</b>
          </NavLink>
          <span className="sta"></span>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
