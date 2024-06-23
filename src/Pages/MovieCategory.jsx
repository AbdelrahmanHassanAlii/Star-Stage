import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesByCategory } from "../JS/moviesFunctions";
import Card from "../Components/Card";
import Pagination from "../Components/Pagenation";

export default function MovieCategory() {
  let { category } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMoviesByCategory(category, pageNumber)
      .then((data) => {
        setMovies(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [category, pageNumber]);

  const showNext = () => {
    setPageNumber(pageNumber + 1);
  };

  const showPrevious = () => {
    setPageNumber(pageNumber - 1);
  };
  return (
    <div className="movie-category">
      <h1>{category} Movies</h1>
      <div className="cards grid-container">
        {movies.map((movie) => (
          <Card key={movie.id} item={movie} number={movie.id} />
        ))}
      </div>

      <div className="pagination">
        <Pagination showNext={showNext} showPrevious={showPrevious} />
      </div>
    </div>
  );
}
