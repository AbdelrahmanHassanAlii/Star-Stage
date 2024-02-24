import React from "react";
import Trending from "./Trending";
import Recommended from "./Recommended";

export default function Content() {
  return (
    <div className="container">
      <Trending />
      <Recommended />
    </div>
  );
}
