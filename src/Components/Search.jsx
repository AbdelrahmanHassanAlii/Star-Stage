import React from "react";
import "../CSS/search.css";
export default function Search() {
  return (
    <div className="search-area">
      <i class="fa-solid fa-magnifying-glass search-icon"></i>
      <input type="text" className="search-input" />
    </div>
  );
}
