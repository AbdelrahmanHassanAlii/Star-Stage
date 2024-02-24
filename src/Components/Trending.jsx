// import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../CSS/trending.css";
import {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import { getAllTrending } from "../JS/moviesFunctions";

export default function Trending() {
  const [trending, setTrending] = useState(null);
  const imagePath = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    getAllTrending()
      .then((data) => {
        setTrending(data);
      })
      .catch((error) => {
        console.error("Error fetching trending data:", error);
      });
  }, []);

  return (
    <div className="trending">
      <h1>Trending</h1>
      <Swiper
        slidesPerView={1.05}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          520: {
            slidesPerView: 2.1,
          },
          1024: {
            slidesPerView: 4.1,
          },
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <div
          className="cards"
          style={{
            padding: "200px",
          }}
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
        </div>
      </Swiper>
    </div>
  );
}
