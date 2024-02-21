import React from "react";
import Trending from "./Trending";
import TopRatedMovies from "./TopRatedMovies";

export default function Content() {
  return (
    <div className="container">
      <Trending />
      <TopRatedMovies />
    </div>
  );
}
