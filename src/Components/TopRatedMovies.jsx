import React, { useEffect, useState } from "react";
import { getTopRatedMovies } from "../JS/moviesFunctions";

export default function TopRatedMovies() {
  const [pageNumber, setPageNumber] = useState(1);
  const [topRatedMovies, setTopRatedMovies] = useState(null);
  //get data of top rated movies
  useEffect(() => {
    getTopRatedMovies(pageNumber)
      .then((movies) => {
        console.log(movies);
        setTopRatedMovies(movies);
      })
      .catch((error) => {
        console.error("Error fetching Top Rated Movies data:", error);
      });
  }, []);
  return (
    <div className="top-rated-movies">
      <h1>Top Rated Movies</h1>
    </div>
  );
}
