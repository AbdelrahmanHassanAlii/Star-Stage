import React, { useEffect, useState } from "react";
import { getSeasonById, getSeriesById, getSeriesPoster } from "../JS/seriesFunction";
import { useParams } from "react-router-dom";
import { getYear } from "../JS/globalFunctions";

export default function SeasonDetails() {
  const { id, number, name } = useParams();
  const [posterImage, setPosterImage] = useState(null); // Fix typo in state name
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

  useEffect(() => {
    getSeriesById(id, name)
      .then((data) => {
        setPosterImage(data.backdrop_path); // Set poster image directly
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]); // Fetch poster only when ID changes

  return (
    <div className="show-details">
      {details ? (
        <div className="details-content">
          <div
            className="images"
            style={{
              backgroundImage: posterImage
                ? `url(${imagePath + posterImage})`
                : "", // Use posterImage directly
            }}
          >
            <div className="details-overlay"></div>
            <img
              src={`${imagePath + details.poster_path}`}
              alt={details.name}
            />
          </div>
          <div className="details-text">
            <p className="title">
              {details.name || details.original_name}{" "}
              <span>
                {getYear(details.air_date) || getYear(details.release_date)}
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
