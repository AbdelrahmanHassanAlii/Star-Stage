import React from "react";
import { useParams } from "react-router-dom";

export default function MovieCategory() {
  let { category } = useParams();
  return (
    <div className="movie-category">
      <h1>{category} Movies</h1>
    </div>
  );
}
