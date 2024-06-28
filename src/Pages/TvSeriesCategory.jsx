import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSeriesByCategory } from "../JS/seriesFunction";
import Card from "../Components/Card";
import Pagination from "../Components/Pagenation";

export default function TvSeriesCategory() {
  const { category } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const [tvSeries, setTvSeries] = useState([]);

  useEffect(() => {
    getSeriesByCategory(category, pageNumber)
      .then((data) => {
        setTvSeries(data);
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

    return <div className="tv-series-category">
      <h1>{category} TV Series</h1>

      <div className="cards grid-container">
        {tvSeries.map((tvSeries) => (
          <Card key={tvSeries.id} item={tvSeries} number={tvSeries.id} />
        ))}
      </div>

      <div className="pagination">
        <Pagination showNext={showNext} showPrevious={showPrevious} />
      </div>
      
  </div>;
}
