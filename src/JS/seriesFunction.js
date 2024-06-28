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
    if (response.data.name === name) {
      return response.data;
    } else {
      return null;
    }
  } catch (err) {
    // console.error(err);
    return null;
  }
};

//function to get season by id
export const getSeasonById = async (id, seasonNumber) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}`,
      {
        params: {
          api_key: myKey,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

//function to get poster path image for seies by given id
export const getSeriesPoster = async (id) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}`, {
      params: {
        api_key: myKey,
      },
    });
    return response.data.poster_path;
  } catch (err) {
    console.error(err);
  }
};

//function get the name of the category of tv series and return the movies of that category
export const getSeriesByCategory = async (category, pageNumber) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${category}`,
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

//function get series_id and season_number and episode_number then return the episode details
export const getEpisodeDetails = async (
  seriesId,
  seasonNumber,
  episodeNumber
) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${seriesId}/season/${seasonNumber}/episode/${episodeNumber}`,
      {
        params: {
          api_key: myKey,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
