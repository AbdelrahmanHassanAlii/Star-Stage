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
        const shuffledData = shuffleArray(combinedData);
        setMixedData(shuffledData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [pageNumber]);

  // Function to shuffle the array
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  return <></>;
}
