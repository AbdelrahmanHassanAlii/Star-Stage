import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../JS/globalFunctions";

export default function ShowDetails() {
  const { id, name } = useParams();

  const [details, setDetails] = useState(null);

  useEffect(() => {
    getDetails(id, name)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="show-details container">
      <h1>Details for {name}</h1>
    </div>
  );
}
