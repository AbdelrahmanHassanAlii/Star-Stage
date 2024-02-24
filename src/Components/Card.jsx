import React from "react";

export default function Card({ item }) {
  const imagePath = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="card">
      <img src={`${imagePath}${item.backdrop_path}`} alt={item.name} />
      {item.original_title ? (
        <h3>{item.original_title}</h3>
      ) : (
        <h3>{item.name}</h3>
      )}
    </div>
  );
}
