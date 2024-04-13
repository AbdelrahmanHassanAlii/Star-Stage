// import React, { useEffect, useState, useParams } from "react";
// import { getSeasonById } from "../JS/seriesFunction";

// export default function SeasonDetails() {
//   const { id } = useParams();
//   const [details, setDetails] = useState(null);

//   useEffect(() => {
//     getSeasonById(id, 1)
//       .then((data) => {
//         console.log(data);
//         setDetails(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   return (
//     <div className="season-details">
//       {details ? (
//         <div className="details-content">
//           <div className="images">
//             <img
//               src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
//               alt={details.name}
//             />
//           </div>
//           <div className="details-description">
//             <h1>{details.name}</h1>
//             <p>{details.overview}</p>
//           </div>
//         </div>
//       ) : (
//         <div className="loading">Loading...</div>
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { getSeasonById } from "../JS/seriesFunction";
import { useParams } from "react-router-dom";

export default function SeasonDetails() {
  const { id, number } = useParams();
  const [details, setDetails] = useState(null);

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
    <div className="season-details">
      {details ? (
        <div className="details-content">
          <div className="images">
            <img
              src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
              alt={details.name}
            />
          </div>
          <div className="details-description">
            <h1>{details.name}</h1>
            <p>{details.overview}</p>
          </div>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
}
