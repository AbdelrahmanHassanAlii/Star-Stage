// import axios from "axios";
// import { myKey } from "./../../index";

// export const getAllTrending = async () => {
//   try {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/trending/all/day`,
//       {
//         params: {
//           api_key: myKey,
//         },
//       }
//     );
//     return Array.from(response.data.results);
//   } catch (err) {
//     console.error(err);
//   }
// };

import axios from "axios";

export const getAllTrending = async () => {
  const myKey = "b5bc4bad4378b1f319250c39c5fd689a";

  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day",
      {
        params: {
          api_key: myKey,
        },
      }
    );
    return Array.from(response.data.results);
  } catch (err) {
    console.error(err);
    return [];
  }
};
