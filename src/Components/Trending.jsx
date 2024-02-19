import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
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
      <Swiper
        spaceBetween={50}
        slidesPerView={1.25}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
      >
        {trending &&
          trending.map((element) => (
            <SwiperSlide key={element.id}>
              <div className="card">
                <div className="card-image">
                  <img
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
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
