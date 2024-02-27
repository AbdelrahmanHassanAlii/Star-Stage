import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../JS/globalFunctions";
import { getSeriesById } from "../JS/seriesFunction";

export default function ShowDetails() {
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const { id, name } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getDetails(id, name)
      .then((data) => {
        console.log(data);
        setDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id, name]);

  return (
    <div
      className="show-details container"
      style={{
        backgroundImage:
          details && details.backdrop_path
            ? `url(${imagePath + details.backdrop_path})`
            : "",
      }}
    >
      <div className="details-overlay"></div>
      <h1>Details for {name}</h1>
    </div>
  );
}
