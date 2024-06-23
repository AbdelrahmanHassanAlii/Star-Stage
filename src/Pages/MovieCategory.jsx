import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesByCategory } from "../JS/moviesFunctions";
import Card from "../Components/Card";

export default function MovieCategory() {
  let { category } = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMoviesByCategory(category)
      .then((data) => {
        setMovies(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [category]);
  return (
    <div className="movie-category">
      <h1>{category} Movies</h1>
      <div className="cards grid-container">
        {movies.map((movie) => (
          <Card key={movie.id} item={movie} number={movie.id} />
        ))}
      </div>
    </div>
  );
}
