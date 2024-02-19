import React from "react";
import "../CSS/search.css";
export default function Search({placeHolder}) {
  return (
    <div className="search-area container">
      <i class="fa-solid fa-magnifying-glass search-icon"></i>
      <input
        type="text"
        className="search-input"
        placeholder={placeHolder}
      />
    </div>
  );
}
