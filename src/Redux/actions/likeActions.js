export const TOGGLE_LIKED = "TOGGLE_LIKED";

export const toggleLiked = (item) => ({
  type: TOGGLE_LIKED,
  payload: item,
});
