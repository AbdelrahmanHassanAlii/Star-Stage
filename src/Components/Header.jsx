import React from "react";
import "../CSS/header.css";
import sitelogo from "../Images/site-logo.png";
import userImage from "../Images/user-img.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="header-container container">
        <div className="links">
          <div className="site-logo">
            <img src={sitelogo} alt="site-logo" />
          </div>
          <div className="icons">
            <NavLink to="/" exact activeClassName="active-link">
              <i className="fa-brands fa-microsoft"></i>
            </NavLink>
            <NavLink to="/films" activeClassName="active-link">
              <i className="fa-solid fa-film"></i>
            </NavLink>
            <NavLink to="/tv" activeClassName="active-link">
              <i className="fa-solid fa-tv"></i>
            </NavLink>
            <NavLink to="/bookmarks" activeClassName="active-link">
              <i className="fa-solid fa-bookmark"></i>
            </NavLink>
          </div>
        </div>
        <div className="user-img">
          <img src={userImage} alt="User" />
        </div>
      </div>
    </div>
  );
}
