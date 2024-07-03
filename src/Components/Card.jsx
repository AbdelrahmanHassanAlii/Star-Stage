// import React from "react";
// import { Link } from "react-router-dom";
// import "../CSS/card.css";
// import { truncate } from "../JS/globalFunctions";
// import { FaHeart } from "react-icons/fa6";

// export default function Card({ item, number }) {
//   const imagePath = "https://image.tmdb.org/t/p/w500";

//   // Check if the card is the first item in the row on large screens
//   const isFirstInRowInLargeScreen = number % 4 === 0;
//   // Check if the card is the last item in the row on large screens
//   const isLastInRowInLargeScreen = (number + 1) % 4 === 0;

//   const name = item.name || item.original_title;

//   return (
//     <Link key={item.id} to={`/details/${name}/${item.id}`}>
//       <div
//         className={`card ${
//           isFirstInRowInLargeScreen ? "first-in-row-in-large-screen" : ""
//         } ${isLastInRowInLargeScreen ? "last-in-row-in-large-screen" : ""}`}
//       >
//         <img
//           src={`${imagePath}${item.backdrop_path || item.poster_path}`}
//           alt={item.name}
//           style={item.poster_path ? { height: '200px' } : {}}
//         />
//         <div className="card-like-button">
//           <FaHeart />
//         </div>
//         <div className="card-content">
//           {item.release_date ? (
//             <p className="date">{item.release_date}</p>
//           ) : (
//             <p className="date">{item.first_air_date}</p>
//           )}
//           {item.original_title ? (
//             <p className="title">{truncate(item.original_title, 5)}</p>
//           ) : (
//             <p className="title">{truncate(item.name, 5)}</p>
//           )}
//           {<p className="description">{truncate(item.overview, 7)}</p>}
//         </div>
//       </div>
//     </Link>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import "../CSS/card.css";
import { truncate } from "../JS/globalFunctions";
import { FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toggleLiked } from "../Redux/actions/likeActions";

export default function Card({ item, number }) {
  const dispatch = useDispatch();
  const likedItems = useSelector((state) => state.liked.likedItems);
  const isLiked = likedItems.some((likedItem) => likedItem.id === item.id);
  const imagePath = "https://image.tmdb.org/t/p/w500";

  // Check if the card is the first item in the row on large screens
  const isFirstInRowInLargeScreen = number % 4 === 0;
  // Check if the card is the last item in the row on large screens
  const isLastInRowInLargeScreen = (number + 1) % 4 === 0;

  const name = item.name || item.original_title;

  const handleLikeClick = (e) => {
    e.preventDefault();
    dispatch(toggleLiked(item));
  };

  return (
    <Link key={item.id} to={`/details/${name}/${item.id}`}>
      <div
        className={`card ${
          isFirstInRowInLargeScreen ? "first-in-row-in-large-screen" : ""
        } ${isLastInRowInLargeScreen ? "last-in-row-in-large-screen" : ""}`}
      >
        <img
          src={`${imagePath}${item.backdrop_path || item.poster_path}`}
          alt={item.name}
          style={item.poster_path ? { height: "200px" } : {}}
        />
        <div
          className={`card-like-button ${isLiked ? "liked" : ""}`}
          onClick={handleLikeClick}
        >
          <FaHeart />
        </div>
        <div className="card-content">
          {item.release_date ? (
            <p className="date">{item.release_date}</p>
          ) : (
            <p className="date">{item.first_air_date}</p>
          )}
          {item.original_title ? (
            <p className="title">{truncate(item.original_title, 5)}</p>
          ) : (
            <p className="title">{truncate(item.name, 5)}</p>
          )}
          {<p className="description">{truncate(item.overview, 7)}</p>}
        </div>
      </div>
    </Link>
  );
}
