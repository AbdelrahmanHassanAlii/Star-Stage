import React from "react";
import { useParams } from "react-router-dom";

export default function TvSeriesCategory() {
  const { category } = useParams();

    return <div className="tv-series-category">
    <h1>{category} TV Series</h1>
  </div>;
}
