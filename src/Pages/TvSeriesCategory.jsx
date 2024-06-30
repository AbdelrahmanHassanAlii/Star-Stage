import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSeriesByCategory, searchSeries } from "../JS/seriesFunction";
import Card from "../Components/Card";
import Pagination from "../Components/Pagenation";
import "../CSS/ts-series-category.css";

export default function TvSeriesCategory() {
  const { category } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const [tvSeries, setTvSeries] = useState([]);
  const [query, setQuery] = useState("");

  // Fetch category TV series
  useEffect(() => {
    if (!query) {
      getSeriesByCategory(category, pageNumber)
        .then((data) => {
          setTvSeries(data || []); 
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
      searchSeries(query, pageNumber)
        .then((data) => {
          setTvSeries(data.results || []); 
          console.log(data);
        })
        .catch((error) => {
          console.error("Error searching for TV series:", error);
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
          placeholder="Search for TV series"
          value={query}
          onChange={handleSearchChange}
        />
      </div>
      <div className="tv-series-category container">
        <h1 className="main-title">
          {query ? `Search Results for "${query}"` : `${category} TV Series`}
        </h1>
        <div className="cards grid-container">
          {Array.isArray(tvSeries) && tvSeries.length > 0 ? (
            tvSeries.map((series) => (
              <Card key={series.id} item={series} number={series.id} />
            ))
          ) : (
            <p>No TV series found.</p>
          )}
        </div>

        {tvSeries.length > 0 && (
          <div className="pagination">
            <Pagination showNext={showNext} showPrevious={showPrevious} />
          </div>
        )}
      </div>
    </>
  );
}
