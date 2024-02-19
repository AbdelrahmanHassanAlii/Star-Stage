import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Trending() {
  const [trending, setTrending] = useState(null);
  const key = "b5bc4bad4378b1f319250c39c5fd689a";
  const imagePath = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/all/day",
          {
            params: {
              api_key: key,
            },
          }
        );
        setTrending(response.data.results);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTrending();
  }, []);

  return (
    <div className="trending">
      <h1>Trending</h1>
      {trending !== null
        ? trending.map((element) => (
            <img
              key={element.id}
              src={`${imagePath}${element.poster_path}`}
              alt=""
            />
          ))
        : null}
    </div>
  );
}
