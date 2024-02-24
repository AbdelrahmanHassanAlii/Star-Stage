import React, { useEffect, useState } from "react";
import { getTopRatedMovies } from "../JS/moviesFunctions";
import { getTopRatedSeries } from "../JS/seriesFunction";

export default function TopRatedMovies() {
  const [pageNumber, setPageNumber] = useState(1);
  const [mixedData, setMixedData] = useState([]);

  useEffect(() => {
    // Fetch data from both APIs and merge them into a single array
    Promise.all([getTopRatedMovies(pageNumber), getTopRatedSeries(pageNumber)])
      .then(([movies, series]) => {
        const combinedData = [...movies, ...series];
        // Shuffle the combined data array randomly
        const shuffledData = (combinedData);
        setMixedData(shuffledData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [pageNumber]);

  

  return (
    <>
    </>
  );
}
