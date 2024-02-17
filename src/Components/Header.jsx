import React from "react";
import "../CSS/header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-container container">
        <div className="links">
          <div className="site-logo"><img src="../../Images/site-logo.png" alt="" /></div>
          <div className="icons">
            
          </div>
        </div>
        <div className="user-img">
          <img src="../../Images/user-img.png" alt="" />
        </div>
      </div>
    </div>
  );
}
