import React, { useEffect, useState } from "react";
import { getSeasonById } from "../JS/seriesFunction";
import { useParams } from "react-router-dom";
import { getYear } from "../JS/globalFunctions";

export default function SeasonDetails() {
  const { id, number } = useParams();
  const { posterImage, setPoaterImage } = useState(null);
  const [details, setDetails] = useState(null);
  const imagePath = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    getSeasonById(id, number)
      .then((data) => {
        console.log(data);
        setDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id, number]);

  return (
    <div className="show-details">
      {details ? (
        <div className="details-content">
          <div
            className="images"
            style={{
              backgroundImage:
                details && details.poster_path
                  ? `url(${imagePath + details.poster_path})`
                  : "",
            }}
          >
            <div className="details-overlay"></div>
            <img
              src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
              alt={details.name}
            />
          </div>
          <div className="details-text">
            <p className="title">
              {details.name || details.original_title}{" "}
              <span>
                {getYear(details.release_date) || getYear(details.air_date)}
              </span>
            </p>
            <p>{details.overview}</p>
          </div>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
}
