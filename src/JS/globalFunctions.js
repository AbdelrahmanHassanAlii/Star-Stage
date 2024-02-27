import { getMovieById } from "./moviesFunctions";
import { getSeriesById } from "./seriesFunction";

export const truncate = (text, maxLength) => {
  const words = text.split(" ");
  if (words.length > maxLength) {
    return words.slice(0, maxLength).join(" ") + "...";
  }
  return text;
};


//function to get the id and the name and check two APIs then return the non-null response
export const getDetails = async (id, name) => {
  const seriesDetails = await getSeriesById(id, name);
  if (seriesDetails !== null) {
    return seriesDetails;
  }
  return getMovieById(id, name);
};

export const getYear = (date) => {
  if (date) {
    return date.split("-")[0];
  }
  return "";
};
