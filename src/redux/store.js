import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import originalsReducer from "./originalsSlice";
import seriesReducer from "./seriesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    originals: originalsReducer,
    series: seriesReducer,
  },
});
