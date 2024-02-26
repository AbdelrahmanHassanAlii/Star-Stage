import React from "react";
import Trending from "./Trending";
import Recommended from "./Recommended";
import Pagenation from "./Pagenation";

export default function Content() {
  return (
    <div className="container">
      <Trending />
      <Recommended />
      <Pagenation />
    </div>
  );
}
