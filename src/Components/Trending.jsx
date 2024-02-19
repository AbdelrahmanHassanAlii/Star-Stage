import axios from "axios";
import React, { useEffect, useState } from "react";
import "../CSS/trending.css";
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
      <div className="slide-container">
        <div className="slide-content">
          <div className="card-wrapper">
            {trending !== null
              ? trending.map((element) => (
                  <div className="card" key={element.id}>
                    <div className="card-image">
                      <img
                        key={element.id}
                        src={`${imagePath}${element.backdrop_path}`}
                        alt=""
                        className="img"
                      />
                    </div>
                    <div className="card-content">
                      <p className="name">{element.original_title}</p>
                      <p className="type">{element.media_type}</p>
                      <p className="year">{element.release_date}</p>
                    </div>
                  </div>
                ))
              : null}
            {/* <div className="card">
                          <div className="image-content">
                              <div className="card-image">
                                  <img src="" alt="" />
                              </div>
                          </div>
                      </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
