import { combineReducers } from "redux";
import likedReducer from "./likedReducer";

export const rootReducer = combineReducers({
  liked: likedReducer,
});
