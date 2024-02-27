import React from "react";
import { Link } from "react-router-dom";
import "../CSS/card.css";
import { truncate } from "../JS/globalFunctions";

export default function Card({ item, number }) {
  const imagePath = "https://image.tmdb.org/t/p/w500";

  const extractYear = (date) => {
    return date.split("-")[0];
  };

  // Check if the last item in the row is in large screen
  const isLastInRowInLargeScreen = (number + 1) % 4 === 0;

  const name = item.name || item.original_title;

  return (
    <Link key={item.id} to={`/details/${name}/${item.id}`}>
      <div
        className={`card ${
          isLastInRowInLargeScreen ? "last-in-row-in-large-screen" : ""
        }`}
      >
        <img src={`${imagePath}${item.backdrop_path}`} alt={item.name} />
        <div className="card-content">
          {item.release_date ? (
            <p className="date">{extractYear(item.release_date)}</p>
          ) : (
            <p className="date">{extractYear(item.first_air_date)}</p>
          )}
          {item.original_title ? (
            <p className="title">{item.original_title}</p>
          ) : (
            <p className="title">{item.name}</p>
          )}
          {<p className="description">{truncate(item.overview, 10)}</p>}
        </div>
      </div>
    </Link>
  );
}
