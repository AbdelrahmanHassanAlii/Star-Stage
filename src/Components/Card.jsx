import React from "react";
import { Link } from "react-router-dom";
import "../CSS/card.css";
import { truncate } from "../JS/globalFunctions";

export default function Card({ item, number }) {
  const imagePath = "https://image.tmdb.org/t/p/w500";

  // Check if the card is the first item in the row on large screens
  const isFirstInRowInLargeScreen = number % 4 === 0;
  // Check if the card is the last item in the row on large screens
  const isLastInRowInLargeScreen = (number + 1) % 4 === 0;

  const name = item.name || item.original_title;

  return (
    <Link key={item.id} to={`/details/${name}/${item.id}`}>
      <div
        className={`card ${
          isFirstInRowInLargeScreen ? "first-in-row-in-large-screen" : ""
        } ${isLastInRowInLargeScreen ? "last-in-row-in-large-screen" : ""}`}
      >
        <img src={`${imagePath}${item.backdrop_path}`} alt={item.name} />
        <div className="card-content">
          {item.release_date ? (
            <p className="date">{item.release_date}</p>
          ) : (
            <p className="date">{item.first_air_date}</p>
          )}
          {item.original_title ? (
            <p className="title">{item.original_title}</p>
          ) : (
            <p className="title">{item.name}</p>
          )}
          {<p className="description">{truncate(item.overview, 7)}</p>}
        </div>
      </div>
    </Link>
  );
}
