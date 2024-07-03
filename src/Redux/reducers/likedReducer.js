import { TOGGLE_LIKED } from "../actions/likeActions";

const initialState = {
  likedItems: [],
};

const likedReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LIKED:
      const exists = state.likedItems.find(
        (item) => item.id === action.payload.id
      );
      if (exists) {
        return {
          ...state,
          likedItems: state.likedItems.filter(
            (item) => item.id !== action.payload.id
          ),
        };
      } else {
        return {
          ...state,
          likedItems: [...state.likedItems, action.payload],
        };
      }
    default:
      return state;
  }
};

export default likedReducer;
