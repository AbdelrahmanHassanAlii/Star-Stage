import React from "react";
import { useParams } from "react-router-dom";

export default function SeriesDetails() {
  const { seriesId, seasonNumber, episodeNumber } = useParams();

  return (
    <div className="show-details">
      <h1>Series Details</h1>
      <p>Series ID: {seriesId}</p>
      <p>Season Number: {seasonNumber}</p>
      <p>Episode Number: {episodeNumber}</p>
    </div>
  );
}
