import React from "react";
import { NavLink } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar  bg-#1A4D2E"
        style={{ "backgroundColor": "#1A4D2E" }}
      >
        <div className="Navbar">
          <img
          
            src="https://i.ibb.co/Dr9TFRy/Shine-Software-2-removebg-preview.png"
            alt="logo"
          />
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services"> Our Services
          </NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          {/* <NavLink to="/login">Login</NavLink> */}
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
