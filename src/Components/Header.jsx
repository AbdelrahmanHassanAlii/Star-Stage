import React from "react";
import "../CSS/header.css";
import sitelogo from "../Images/site-logo.png";
import userImage from "../Images/user-img.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header-container container">
        <div className="links">
          <div className="site-logo">
            <img src={sitelogo} alt="site-logo" />
          </div>
          <div className="icons">
            <i class="fa-brands fa-microsoft"></i>
            <i class="fa-solid fa-film"></i>
            <i class="fa-solid fa-tv"></i>
            <i class="fa-solid fa-bookmark"></i>
          </div>
        </div>
        <div className="user-img">
          <img src={userImage} alt="" />
        </div>
      </div>
    </div>
  );
}
