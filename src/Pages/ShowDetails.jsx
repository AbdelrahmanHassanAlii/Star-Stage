// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getDetails, getYear } from "../JS/globalFunctions";
// import "../CSS/details.css";
// import SeasonCard from "../Components/SeasonCard";

// export default function ShowDetails() {
//   const imagePath = "https://image.tmdb.org/t/p/w500";
//   const { id, name } = useParams();
//   const [details, setDetails] = useState(null);

//   useEffect(() => {
//     getDetails(id, name)
//       .then((data) => {
//         console.log(data);
//         setDetails(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, [id, name]);

//   return (
//     <div className="show-details">
//       {details ? (
//         <div className="details-content">
//           <div
//             className="images"
//             style={{
//               backgroundImage:
//                 details && details.backdrop_path
//                   ? `url(${imagePath + details.backdrop_path})`
//                   : "",
//             }}
//           >
//             <div className="details-overlay"></div>
//             <img src={imagePath + details.poster_path} alt={details.name} />
//           </div>
//           <div className="details-text">
//             <p className="title">
//               {details.name || details.original_title}{" "}
//               <span>
//                 {getYear(details.release_date) ||
//                   getYear(details.first_air_date)}
//               </span>
//             </p>
//             <p className="tagline">{details.tagline}</p>
//             <div className="details-content">
//               <p className="details-overview">
//                 <span>Story :</span>
//                 {details.overview}
//               </p>
//               <div className="details-vote">
//                 <div className="votes">
//                   <span>{details.vote_count} Votes | </span>
//                   <span></span>
//                   <span>{details.vote_average} / 10</span>
//                 </div>
//                 <div className="progress-bar">
//                   <div
//                     className="progress"
//                     style={{
//                       width: `${details.vote_average * 10}%`,
//                       "--skill-width": details.vote_average * 10,
//                     }}
//                   ></div>
//                 </div>
//               </div>
//               <div className="genres">
//                 <span>Genres :</span>
//                 <ul>
//                   {details.genres.map((genre) => (
//                     <li key={genre.id}>{genre.name}</li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="seasons">
//                 {details.seasons && details.seasons.length > 0
//                   ? details.seasons.map((season) => (
//                       <div className="season">
//                         <SeasonCard key={season.id} item={season} id={id} />
//                       </div>
//                     ))
//                   : null}
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : null}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetails, getYear } from "../JS/globalFunctions";
import "../CSS/details.css";
import SeasonCard from "../Components/SeasonCard";

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
    <div className="show-details">
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
            <div className="details-overlay"></div>
            <img src={imagePath + details.poster_path} alt={details.name} />
          </div>
          <div className="details-text">
            <p className="title">
              {details.name || details.original_title}{" "}
              <span>
                {getYear(details.release_date) ||
                  getYear(details.first_air_date)}
              </span>
            </p>
            <p className="tagline">{details.tagline}</p>
            <div className="details-content">
              <p className="details-overview">
                <span>Story :</span>
                {details.overview}
              </p>
              <div className="details-vote">
                <div className="votes">
                  <span>{details.vote_count} Votes | </span>
                  <span>{details.vote_average} / 10</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{
                      width: `${details.vote_average * 10}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="genres">
                <span>Genres :</span>
                <ul>
                  {details.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>
              <div className="seasons">
                {details && details.seasons && details.seasons.length > 0
                  ? details.seasons.map((season) => (
                      <div className="season" key={season.id}>
                        <SeasonCard item={season} id={id} />
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
