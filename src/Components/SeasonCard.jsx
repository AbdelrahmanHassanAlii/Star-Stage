import React from "react";

export default function SeasonCard({ item }) {
  const imagePath = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="season-card">
      <div className="season-image">
        <img src={`${imagePath}${item.poster_path}`} alt={item.name} />
      </div>
      <div className="season-content">
        <h3>{item.name}</h3>
        <p>{item.overview}</p>
        <p>Episode count: {item.episode_count}</p>
        <p>Season number: {item.season_number}</p>
        <p>Release date: {item.air_date}</p>
      </div>
    </div>
  );
}
