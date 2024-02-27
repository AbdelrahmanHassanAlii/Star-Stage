import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../JS/globalFunctions";
import "../CSS/details.css";

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
      className="show-details"
      // style={{
      //   backgroundImage:
      //     details && details.backdrop_path
      //       ? `url(${imagePath + details.backdrop_path})`
      //       : "",
      // }}
    >
      <div className="details-overlay"></div>
      {details ? (
        <div className="details-content">
          <div
            className="images"
            style={{
              backgroundImage:
                details && details.backdrop_path
                  ? `url(${imagePath + details.backdrop_path})`
                  : "",
            }}
          >
            <img src={imagePath + details.poster_path} alt={details.name} />
          </div>
        </div>
      ) : null}
    </div>
  );
}