import React, { useState } from "react";
import { FaBars, FaHome, FaInfoCircle, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./dashboard.css";
import "../Navbar/navbar.css"
import UMVLogo from "../pics/umvlogos.jpg";

import {HamburgetMenuClose, HamburgetMenuOpen } from "../Navbar/Icons";

const Sidebar = ({ children,  }) => {
  const [isOpen, setIsOpen] = useState(false);


  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
           
            {/* <i className="fas fa-code"></i> */}
            <span >
            <img className="icon" src={UMVLogo} alt="Logo" />            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
             
            </li>

            {/* <li className="nav-item">
              <NavLink
                exact
                to="/vedio"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Video
                
              </NavLink>
            
            </li> */}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    <div className="layout">
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="toggle-btn" onClick={toggleSidebar}>
          <FaBars />
        </div>
        <nav className="menu">
          <NavLink to="/" className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}>
            <FaHome className="icon" />
            {isOpen && <span className="text">Home</span>}
          </NavLink>
          <NavLink to="/appointment" className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}>
            <FaInfoCircle className="icon" />
            {isOpen && <span className="text">Appointments</span>}
          </NavLink>
          <NavLink to="/addcourosel" className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}>
            <FaPlus className="icon" />
            {isOpen && <span className="text">Add Carousel</span>}
          </NavLink>
          <NavLink to="/addgallery" className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}>
            <FaPlus className="icon" />
            {isOpen && <span className="text">Add Gallery</span>}
          </NavLink>
          <NavLink to="/addclient" className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}>
            <FaPlus className="icon" />
            {isOpen && <span className="text">Add Client</span>}
          </NavLink>
        </nav>
      </div>
      <main className="content">{children}</main>
    </div>
    </>
  );
};


export default Sidebar;
