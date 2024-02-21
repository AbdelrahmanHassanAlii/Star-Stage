import axios from "axios";
import { myKey } from "../index";

//function to get all trending
export const getAllTrending = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day`,
      {
        params: {
          api_key: myKey,
        },
      }
    );
    return Array.from(response.data.results);
  } catch (err) {
    console.error(err);
  }
};

//function to get top Rated movies
export const getTopRatedMovies = async (pageNumber) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated`,
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
