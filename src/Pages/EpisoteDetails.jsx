import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEpisodeDetails } from "../JS/seriesFunction";

export default function EposideDetails() {
  const { seriesId, seasonNumber, episodeNumber } = useParams();

  const imagePath = "https://image.tmdb.org/t/p/w500";

  const [episodeData, setEpisodeData] = useState(null);

  useEffect(() => {
    getEpisodeDetails(seriesId, seasonNumber, episodeNumber)
      .then((episode) => {
        setEpisodeData(episode);
        console.log(episode);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [seriesId, seasonNumber, episodeNumber]);

  return (
    <div className="episode-details">
      {episodeData && (
        <div className="details-content">
          <div className="images">
            <img
              src={`${imagePath}/${episodeData.still_path}`}
              alt={episodeData.name}
            />
          </div>
          <div className="details-overlay"></div>
          <div className="details-content">
            <h2>{episodeData.name}</h2>
            <p>Season: {episodeData.season_number}</p>
            <p>Episode: {episodeData.episode_number}</p>
            <p>Overview: {episodeData.overview}</p>
            <p>Air Date: {episodeData.air_date}</p>
            <p>Vote Average: {episodeData.vote_average}</p>
            <p>Vote Count: {episodeData.vote_count}</p>
          </div>
        </div>
      )}
    </div>
  );
}
