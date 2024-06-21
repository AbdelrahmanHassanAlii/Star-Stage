import React from "react";
import "../CSS/category-card.css";
import { Link } from "react-router-dom";

export default function CategoryCard({ type, category, title, image }) {
  return (
    <Link to={`/movies/${category}`}>
      <div className="category-card">
        <div
          className="category-card-bg"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="category-card-overlay"></div>
        <div className="category-card-content">
          <h3 className="category-card-title">{title}</h3>
        </div>
      </div>
    </Link>
  );
}
