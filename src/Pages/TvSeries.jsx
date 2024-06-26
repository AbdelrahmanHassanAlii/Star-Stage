import React from "react";
import CategoryCard from "../Components/CategoryCard";
import image from "../Images/tv_series_background_card.webp";

export default function TvSeries() {
  return (
    <div className="tv-series">
      <h1>TV Series</h1>
      <CategoryCard
        type="tv"
        category="popular"
        title="Popular TV Series"
        image={image}
      />

      <CategoryCard
        type="tv"
        category="top_rated"
        title="Top Rated TV Series"
        image={image}
      />

      <CategoryCard
        type="tv"
        category="on_the_air"
        title="On The Air TV Series"
        image={image}
      />

      <CategoryCard
        type="tv"
        category="airing_today"
        title="Airing Today TV Series"
        image={image}
      />
    </div>
  );
}
