import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesByCategory, searchMovies } from "../JS/moviesFunctions";
import Card from "../Components/Card";
import Pagination from "../Components/Pagenation";

export default function MovieCategory() {
  let { category } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  // Fetch category movies
  useEffect(() => {
    if (!query) {
      getMoviesByCategory(category, pageNumber)
        .then((data) => {
          setMovies(data || []); // Ensure movies is always an array
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [category, pageNumber, query]);

  // Fetch search results
  useEffect(() => {
    if (query) {
      searchMovies(query, pageNumber)
        .then((data) => {
          setMovies(data.results || []); // Ensure movies is always an array
          console.log(data);
        })
        .catch((error) => {
          console.error("Error searching for movies:", error);
        });
    }
  }, [query, pageNumber]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pageNumber]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    setPageNumber(1); // Reset to first page on new search
  };

  const showNext = () => {
    setPageNumber(pageNumber + 1);
  };

  const showPrevious = () => {
    setPageNumber(pageNumber - 1);
  };

  return (
    <>
      <div className="search-area container">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          type="text"
          className="search-input"
          placeholder="Search for movies"
          value={query}
          onChange={handleSearchChange}
        />
      </div>
      <div className="movie-category container">
        <h1 className="title">{query ? "Search Results" : `${category} Movies`}</h1>
        <div className="cards grid-container">
          {Array.isArray(movies) && movies.length > 0 ? (
            movies.map((movie) => (
              <Card key={movie.id} item={movie} number={movie.id} />
            ))
          ) : (
            <p>No movies found.</p>
          )}
        </div>

        {movies.length > 0 && (
          <div className="pagination">
            <Pagination showNext={showNext} showPrevious={showPrevious} />
          </div>
        )}
      </div>
    </>
  );
}
