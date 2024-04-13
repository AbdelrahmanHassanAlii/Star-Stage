import React from "react";
import "../CSS/season-card.css";
import { Link } from "react-router-dom";

export default function SeasonCard({ item }) {
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const releaseDate = new Date(item.air_date);
  const releaseYear = releaseDate.getFullYear();

  return (
    <Link to={`/seasons/${1}/${60625}`}>
      <div className="season-card">
        <div className="season-image">
          <img src={`${imagePath}${item.poster_path}`} alt={item.name} />
        </div>
        <div className="season-content">
          <h3 className="season-title">{item.name}</h3>
          <p>Episode {item.episode_count}</p>
          <p>Release date: {releaseYear}</p>
        </div>
      </div>
    </Link>
  );
}
