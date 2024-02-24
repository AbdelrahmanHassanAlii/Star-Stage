import axios from "axios";
import { myKey } from "../index";

//function to get top rated series
export const getTopRatedSeries = async (pageNumber) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated`,
      {
        params: {
          api_key: myKey,
          page: pageNumber,
        },
      }
    );
    return Array.from(response.data.results);
  } catch (err) {
    console.error(err);
  }
};
