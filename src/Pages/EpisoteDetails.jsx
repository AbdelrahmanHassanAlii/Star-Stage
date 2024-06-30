import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEpisodeDetails } from "../JS/seriesFunction";
import "../CSS/episode-deatails.css";

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
    <div className="episode-details container">
      {episodeData && (
        <div className="details-content">
          <div className="images">
            <img
              src={`${imagePath}/${episodeData.still_path}`}
              alt={episodeData.name}
            />
          </div>
          <p className="date">{episodeData.air_date}</p>

          <h2 className="title">{episodeData.name}</h2>
          <p className="overview">{episodeData.overview}</p>

          <div className="details-vote">
            <div className="votes">
              <span>{episodeData.vote_count} Votes | </span>
              <span>{episodeData.vote_average} / 10</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  "--skill-width": `${episodeData.vote_average * 10}%`,
                  width: `${episodeData.vote_average * 10}%`,
                }}
              ></div>
            </div>
          </div>
          {/* <div className="details-trailer">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${episodeData.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> */}
        </div>

      )}
    </div>
  );
}
