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

//function to get specific series by id
export const getSeriesById = async (id, name) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}`, {
      params: {
        api_key: myKey,
      },
    });

    // Check if the original_name matches the provided name
    if (response.data.original_name === name) {
      return response.data;
    } else {
      return null;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};

