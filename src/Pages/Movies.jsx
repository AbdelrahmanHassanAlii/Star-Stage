import React from "react";
import CategoryCard from "../Components/CategoryCard";
import image from "../Images/1664271579476.jpg";

export default function Movies() {
  return (
    <div className="movies">
      <h1>Movies</h1>
      <CategoryCard
        type="movies"
        category="popular"
        title="Popular Movies"
        image={image}
      />

      <CategoryCard
        type="movies"
        category="top_rated"
        title="Top Rated Movies"
        image={image}
      />

      <CategoryCard
        type="movies"
        category="now_playing"
        title="Now Playing Movies"
        image={image}
      />

      <CategoryCard
        type="movies"
        category="upcoming"
        title="Upcoming Movies"
        image={image}
      />
    </div>
  );
}
