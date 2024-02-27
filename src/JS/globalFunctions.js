import { getMovieById } from "./moviesFunctions";
import { getSeriesById } from "./seriesFunction";

export const truncate = (text, maxLength) => {
  const words = text.split(" ");
  if (words.length > maxLength) {
    return words.slice(0, maxLength).join(" ") + "...";
  }
  return text;
};

//function get the id amd the name and check two APIs the return which is not null
export const getDetails = (id, name) => {
  return getMovieById(id, name) || getSeriesById(id, name);
};
