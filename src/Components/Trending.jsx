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
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toggleLiked } from "../Redux/actions/likeActions";

export default function Trending() {
  const [trending, setTrending] = useState(null);
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const dispatch = useDispatch();
  const likedItems = useSelector((state) => state.liked.likedItems);

  useEffect(() => {
    getAllTrending()
      .then((data) => {
        setTrending(data);
      })
      .catch((error) => {
        console.error("Error fetching trending data:", error);
      });
  }, []);

  const handleLikeClick = (e, item) => {
    e.preventDefault();
    dispatch(toggleLiked(item));
  };

  const isLiked = (item) => {
    return likedItems.some((likedItem) => likedItem.id === item.id);
  };

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
          1550: {
            slidesPerView: 5.3,
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
                <div className="card-slider">
                  <Link
                    key={element.id}
                    to={`/details/${
                      element.original_title || element.original_name
                    }/${element.id}`}
                  >
                    <div className="card-image">
                      <img
                        src={`${imagePath}${element.backdrop_path}`}
                        alt=""
                        className="img"
                      />
                    </div>
                  </Link>

                  <div
                    className={`card-like-button ${
                      isLiked(element) ? "liked" : ""
                    }`}
                    onClick={(e) => handleLikeClick(e, element)}
                  >
                    <FaHeart />
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
